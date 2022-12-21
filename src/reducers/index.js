import { combineReducers } from 'redux';

const TicketReducer = () => {
return [
    {
      id: 1,
      subject: 'Error in UI',
      name: 'Kiren',
      priority: 'Low',
      medium: 'mail',
      email: 'kiren@zohocorp.com',
      phno: 987654321
    },
    {
      id: 2,
      subject: 'Refund needed',
      name: 'Sharmila',
      priority: 'High',
      medium: 'twitter',
      email: 'Sharmila@zohocorp.com',
      phno: 987654321
    },
    {
      id: 3,
      subject: 'Replacement ',
      name: 'Ramya ',
      priority: 'Low',
      medium: 'mail',
      email: 'ramya@zohocorp.com',
      phno: 987654321
    },
    {
      id: 4,
      subject: 'Speaker problem',
      name: 'Sharmila',
      priority: 'High',
      medium: 'twitter',
      email: 'Sharmila@zohocorp.com',
      phno: 987654321
    },
    {
      id: 5,
      subject: 'Mic problem  ',
      name: 'Logesh',
      priority: 'Low',
      medium: 'mail',
      email: 'logesh@zohocorp.com',
      phno: 987654321
    }
  ]
  
};

const selectedTicketReducer = (selectedTicket = null, action) => {
  if (action.type === 'TICKET_SELECTED') {
    return action.payload;
  }

  return selectedTicket;
};

export default combineReducers({
  Ticket: TicketReducer,
  selectedticket: selectedTicketReducer
});
