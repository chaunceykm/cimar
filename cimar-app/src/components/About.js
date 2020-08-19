import React from "react";
import Kerri from "../assets/kerri.jpeg";
import Tony from "../assets/tony.jpeg";

export const About = () => {
  return (
    <div className="about__container">
      <div className="about__info">
        <h2>What is "Cuz i Matter" and what does it do?</h2>
        <p>
          "Cuz i Matter" Animal Rescue is a non-profit, 501(c)(3) organization
          dedicated to the rescue, care, rehabilitation, and adoption of
          homeless dogs.
          <br />
          <br />
          Our main goals are to:
        </p>
        <ul>
          <li>
            Remove animals from homeless situations or from shelters with
            euthanasia lists.
          </li>
          <li>
            Secure foster homes for those in longer need situations pre
            adoption.
          </li>
          <li>
            Provide vaccine & spay/neuter services to all CiMAR intakes before
            adoption.
          </li>
          <li>Provide medical care and rehabilitation as neccessary.</li>
          <li>
            Place our animals in secure, responsible and loving forever homes.
          </li>
        </ul>
        <p>
          CiMAR is a volunteer-run, foster-based organization that depends
          entirely on donations and community support. Come check us out and
          join us. Together we can save lives!
        </p>
      </div>

      <div className="about__team">
        <div className="about__teamMember">
          <img className="teamPic" src={Kerri} alt="Kerri Bonacci" />
          <div className="about__namePlate">
            <h3>Kerri Bonacci</h3>
            <p>Executive Director/President</p>
          </div>
          <div className="about__team-bio">
            <p>
              Kerri had a dream most of her life to start a rescue. With heart,
              determination and some help from her family, that dream has become
              a reality. Kerri grew up loving animals. Her parents were always
              saving strays and rescues. Kerri comes by her deep compassion for
              saving honestly
            </p>
            <p>
              In 2012, Kerri started fostering with Austin Boxer Rescue. Her
              first foster was nanny and the number grew from there. To date,
              Kerri (along with her husband, Tony) has fostered 39 dogs. This
              includes the newest rescues and CiMAR's first dogs, Ellie Mae and
              her brood of eight puppies.
            </p>
            <p>
              Kerri has also given her time and love to San Antonio Pets Alive!
              and Pflugerville Pets Alive!, wehre she resided on teh board.
            </p>
            <p>By trade, Kerri is a pharmasist.</p>
          </div>
        </div>

        <div className="about__teamMember">
          <img className="teamPic" src={Tony} alt="Tony Bonacci" />
          <div className="about__namePlate">
            <h3>Tony Bonacci</h3>
            <p>Computer IT/ Vice-President</p>
          </div>
          <div className="about__team-bio">
            <p>
              Tony comes to "Cuz i Matter" Animal Rescue as the other half of
              Team Bonacci. Tony's love of animals has been evident throughout
              his life. He was the loving dad to his own felines before meeting
              now-wife, Kerri. Tony is the grounding force that has helped Kerri
              move full force into starting a rescue that gives animals a voice
              to say "I matter!"
            </p>
            <p>
              Tony's background and interest in computers brings a variety of
              skills to the table for CiMAR. From setting up groups, developing
              organization agreements and forms to photographing all those fuzzy
              faces for their shining moments online, Tony is tireless in his
              dedication to all the residents of the CiMAR family.
            </p>
            <p>
              Together, Kerri and Tony are the foster directors responsible for
              recruiting special participants to act.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
