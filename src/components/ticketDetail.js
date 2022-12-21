import React from "react";
import { connect } from "react-redux";

const TicketDetail = (props) => {
  if (!props.ticket) return <div className="card">no Ticket seleted</div>;
  else
    return (
      <div className="list-group card ">
        <div className="list-group-item">ID: {props.ticket.id}</div>
        <div className="list-group-item">Name: {props.ticket.name}</div>
        <div className="list-group-item">Priority: {props.ticket.priority}</div>
        <div className="list-group-item">Medium: {props.ticket.medium}</div>
        <div className="list-group-item">Email: {props.ticket.email}</div>
        <div className="list-group-item">ph: {props.ticket.phno}</div>
      </div>
    );
};

const mapStateToProps = (state) => {
  return { ticket: state.selectedticket };
};

export default connect(mapStateToProps)(TicketDetail);
