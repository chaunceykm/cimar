import React from "react";
import Puppy from "../../assets/sleepingpuppy.jpg";

export const AmazonSmile = () => {
  return (
    <div className="amazon_container">
      <div className="amazon__content-wrapper">
        <div className="picture_card">
          <img src={Puppy} alt="sleeping puppy with toy" />
          <div className="picture_card__text">
            <p>"My new toy helped save pets at CiMAR!"</p>
          </div>
        </div>
        <div className='amazon__info'>
      <h4>
        Your everyday purchases from Amazon can go a long way to help serve out
        our mission at CiMAR!
      </h4>
          <p>
            Getting started with Amazon Smile is simple and FREE to participate!
          </p>
          <p>Follow these simple steps:</p>
          <div>
            <ol>
              <li>
                Go to <a href="https://smile.amazon.com">Amazon Smile</a>{" "}
                program page.
              </li>
              <li>Find the search bar and look directly underneath. </li>
              <li>Click on the word 'Supporting'.</li>
              <li>
                You can update your current charity or pick a new charity.
              </li>
              <li>PLEASE select "Cuz i Matter" Animal Rescue.</li>
              <li>
                Now GO "find your favorite toys" and CiMAR will receive .5% on
                all elibible products!
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};
