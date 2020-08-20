import React, {useState} from 'react'
import * as Methods from "./DonateMethod";
import { Default } from "./Default";

const methods = [
  {
    id: "AmazonSmile",
    name: "Amazon Smile",
  },
  {
    id: "PetMeds",
    name: "PetMeds.com",
  },
  {
    id: "Monetary",
    name: "Monetary Donations",
  },
  {
    id: "Items",
    name: "Items We Need",
  },
  {
    id: "Sponsorship",
    name: "Sponsorship",
  },
];

export const Donate = () => {
  const [method, setMethod] = useState("");

  const renderMethod = (method) => {
    switch (method) {
      case "AmazonSmile":
        return <Methods.AmazonSmile />;
      case "PetMeds":
        return <Methods.PetMeds />;
      case "Items":
        return <Methods.Items />;
      case "Monetary":
        return <Methods.Monetary />;
      case "Sponsorship":
        return <Methods.Sponsorship />;
      default:
        return <Default />;
    }
  };
  return (
    <div className="donation__info-container">
      <h2>There are so many ways you can help CiMAR save lives!</h2>
      <p className="italic">
        Because CiMAR is a 501(c)(3) organization, all your donations are tax
        deductible. <br />
        <a href="/contact">Contact us</a> for a donation receipt.
      </p>
      <p>Click on the buttons below to learn more!</p>
      <div className="donation__static-content">
        <div>
          <ul>
            {methods.map(({ id, name }) => (
              <li key={id}>
                <button
                  id={id}
                  onClick={(e) => {
                    setMethod(e.target.id);
                  }}
                  value={method}
                >
                  {name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="donation__method-container">{renderMethod(method)}</div>
    </div>
  );
};