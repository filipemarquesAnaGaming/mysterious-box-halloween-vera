export interface ISmarticoPayload {
  bonus: {
    userBonus: {
      eid: string;
      user_ext_id: string;
      event_date: number;
      ext_brand_id: string;
      event_type: string;
      bonus_promotion: string;
      payload: {
        cactus_bonus_name_: string;
      };
    };
  };
}

export interface ISmarticoBonus {
  err_code: number;
  pd: number;
  req_id: string;
}
