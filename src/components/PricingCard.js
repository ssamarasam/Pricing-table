import React from "react";

function PricingCard(props) {
  return (
    <div>
      <div className="card mb-5 mb-lg-0">
        <div className="card-body">
          <h5 className="card-title text-muted text-uppercase text-center">
            {props.data.plan}
          </h5>
          <h6 className="card-price text-center">
            ${props.data.amount}
            <span className="period">/month</span>
          </h6>
          <hr />
          <ul className="fa-ul">
            <li>
              <span className="fa-li">
                <i className="fas fa-check"></i>
              </span>
              {props.data.noOfUsers}
            </li>
            <li>
              <span className="fa-li">
                <i className="fas fa-check"></i>
              </span>
              {props.data.space}
            </li>
            <li>
              <span className="fa-li">
                <i className="fas fa-check"></i>
              </span>
              {props.data.noOfProject}
            </li>
            <li>
              <span className="fa-li">
                <i className="fas fa-check"></i>
              </span>
              {props.data.access}
            </li>
            <li className={props.data.plan === "Free" ? "text-muted" : "none"}>
              <span className="fa-li">
                <i className="fas fa-times"></i>
              </span>
              {props.data.privateProjects}
            </li>
            <li className={props.data.plan === "Free" ? "text-muted" : "none"}>
              <span className="fa-li">
                <i className="fas fa-times"></i>
              </span>
              {props.data.support}
            </li>
            <li className={props.data.plan === "Free" ? "text-muted" : "none"}>
              <span className="fa-li">
                <i className="fas fa-times"></i>
              </span>
              {props.data.subDomain}
            </li>
            <li
              className={
                props.data.plan === "Free" || props.data.plan === "Plus"
                  ? "text-muted"
                  : "none"
              }
            >
              <span className="fa-li">
                <i className="fas fa-times"></i>
              </span>
              {props.data.reports}
            </li>
          </ul>
          <div className="d-grid">
            <a href="#" className="btn btn-primary text-uppercase">
              Button
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PricingCard;
