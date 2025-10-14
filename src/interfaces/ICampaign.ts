export interface ICampaign {
  campaign_id: ICampaignDetails;
  is_active: boolean;
  is_layout_active: boolean;
  join_date: string;
}

interface ICampaignDetails {
  name: string;
  status: string;
  start_date: string;
  end_date: string;
}
