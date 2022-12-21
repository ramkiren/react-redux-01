import React, { Component } from "react";
import { connect } from "react-redux";
import { selectticket } from "../actions";

class TicketList extends Component {
  renderList() {
    return this.props.tickets.map((ticket) => {
      return (
        <div className="list-group " key={ticket.id}>
          <div className="list-group-item">
            <div>{ticket.subject}</div>
            <button
              className="float-end btn "
              onClick={() => this.props.selectticket(ticket)}
            >
              Select
            </button>
          </div>
        </div>
      );
    });
  }

  render() {
    return <div className="ui divided list"> {this.renderList()}</div>;
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return { tickets: state.Ticket };
};

export default connect(mapStateToProps, { selectticket })(TicketList);
