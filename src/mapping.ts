import { CampaignBidLog } from '../generated/CrowdFunding/CrowdFundingBid'
import { Funder } from '../generated/schema'
import {Address, BigInt} from "@graphprotocol/graph-ts";

export function handleCampaignBidLog(event: CampaignBidLog): void {
  let funder = Funder.load(event.params.campaignID.toString());

  if (funder == null) {
      funder = new Funder(event.params.campaignID.toString());
      funder.addr = event.params.addr as Address;
      funder.amount = event.params.amount as BigInt;
      funder.save();
  }
}
