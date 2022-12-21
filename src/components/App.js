import React from "react";
import TicketList from "./ticketList";
import TicketDetail from "./ticketDetail";

const App = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <TicketList />
        </div>
        <div className="col">
          <TicketDetail />
        </div>
      </div>
    </div>
  );
};

export default App;
