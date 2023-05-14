import React from "react";
import PricingCard from "./PricingCard";

function PricingTable() {
  let data = [
    {
      plan: "Free",
      amount: "0",
      space: "5gb Storage",
      noOfUsers: "Single User",
      noOfProject: "Unlimited Public Projects",
      access: "Community Access",
      privateProjects: "Unlimited Private Projects",
      support: "Dedicated Phone Support",
      subDomain: "Free Subdomain",
      reports: "Monthly Status Reports",
    },
    {
      plan: "Plus",
      amount: "9",
      space: "50gb Storage",
      noOfUsers: "5 Users",
      noOfProject: "Unlimited Public Projects",
      access: "Community Access",
      privateProjects: "Unlimited Private Projects",
      support: "Dedicated Phone Support",
      subDomain: "Free Subdomain",
      reports: "Monthly Status Reports",
    },
    {
      plan: "Pro",
      amount: "49",
      space: "150GB Storage",
      noOfUsers: "Unlimited Users",
      noOfProject: "Unlimited Public Projects",
      access: "Community Access",
      privateProjects: "Unlimited Private Projects",
      support: "Dedicated Phone Support",
      subDomain: "Unlimited Free Subdomains",
      reports: "Monthly Status Reports",
    },
  ];

  return (
    <div>
      <section className="pricing py-5">
        <div className="container">
          <div className="row">
            {data &&
              data.map((card) => {
                return (
                  <div key={`pricing-details-$`} className="col-lg-4">
                    <PricingCard data={card} />
                  </div>
                );
              })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default PricingTable;

{
  /* <div className="col-lg-4">
<PricingCard />
</div> */
}
