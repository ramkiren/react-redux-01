// Action creator
export const selectticket= ticket => {
  // Return an action
  return {
    type: 'TICKET_SELECTED',
    payload: ticket
  };
};
