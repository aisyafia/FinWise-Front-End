export const selectPartner = (state) => state.partnerReducer.partners;

export const selectPartnerById = (id) => (state) =>
  state.partnerReducer.partners;
