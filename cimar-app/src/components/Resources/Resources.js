import React, { useState } from "react";
import { SpayNeuter } from "./SpayNeuter";
import { LocalVets } from "./LocalVets";
import { GroomingBoarding } from "./GroomingBoarding";
import { LocalShelters } from "./LocalShelters";
import { Default } from "./Default";
import { } from '@material-ui/core/styles'
import { } from '@material-ui/core'

const resourceGroups = [
  {
    id: "SpayNeuter",
    name: "Low-Cost Spay/Neuter",
  },
  {
    id: "LocalVets",
    name: "Local Vets & Clinics",
  },
  {
    id: "GroomingBoarding",
    name: "Grooming & Boarding",
  },
  {
    id: "LocalShelters",
    name: "Other Local Shelters & Rescue Groups",
  },
];
export const Resources = () => {
  const [selectedResourceGroup, setSelectedResourceGroup] = useState("");

  const renderSelectedResourceGroup = (selectedResourceGroup) => {
    switch (selectedResourceGroup) {
      case "SpayNeuter":
        return <SpayNeuter />;
      case "LocalVets":
        return <LocalVets />;
      case "GroomingBoarding":
        return <GroomingBoarding />;
      case "LocalShelters":
        return <LocalShelters />;
      default:
        return <Default />;
    }
  };

  return (
    <div className="resources__container">
      <h1>Looking for a vet, groomer, or pet boarding place?​</h1>
      <h3>Select a category to see some great local resources!</h3>
      <div className="resourceGroupSelector">
        <ul>
          {resourceGroups.map(({ id, name }) => (
            <li key={id}>
              <button
                id={id}
                value={selectedResourceGroup}
                onClick={(e) => {
                  setSelectedResourceGroup(e.target.id);
                }}
              >
                {name}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="renderResourceGroup">
        {renderSelectedResourceGroup(selectedResourceGroup)}
      </div>
    </div>
  );
};
