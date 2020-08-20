import React from "react";
import PetMed1 from "../../assets/petmeds1.png";
import PetMed2 from "../../assets/petmeds2.png";

export const PetMeds = () => {
  return (
    <div className="petMeds_container">
      <div className="petMeds__content-wrapper">
        <div className="petMeds__picture_card">
          <a href="http://www.petmeds.com/cuzimatter">
            <img src={PetMed1} alt="petMeds information flyer" />
            <img src={PetMed2} alt="petMeds information flyer" />
          </a>
        </div>
        <div className="petMeds__method-text">
      <h3>You can help CiMAR by using this link to order from PetMeds.com!</h3>
          <p>
            Click on the picture or the link below for a portion of your
            purchase to be donated to CiMAR!
          </p>
          <p>
            Clink this <a href="http://www.petmeds.com/cuzimatter">LINK</a> to
            use our special link.
          </p>
          <p>
            For every new customer that uses this link, PetMeds.com will donate
            $20 to CiMAR and you will get a 25% discount on your first order!
          </p>
        </div>
      </div>
    </div>
  );
};
