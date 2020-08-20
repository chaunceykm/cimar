import React from 'react'
import {} from "@material-ui/core/styles";
import {} from "@material-ui/core";

const localVets = [
  {
    id: 1,
    name: "Banfield Pet Hospital (inside PetSmart)",
    url:
      "http://www.banfield.com/our-hospitals/hospital-locations/location-pages/rou",
  },
  {
    id: 2,
    name: "Central Texas Animal Hospital",
    url: "http://www.ctah.biz/",
  },
  {
    id: 3,
    name: "Forrest Creek Animal Hospital",
    url: "http://www.forestcreekvet.com/",
  },
  {
    id: 4,
    name: "Home Town Animal Care",
    url: "http://www.hometownanimalcare.com/",
  },
  {
    id: 5,
    name: "Pfennig Lane Animal Hospital",
    url: "http://www.pflah.com/",
  },
  {
    id: 6,
    name: "Pflugerville Animal Hospital",
    url: "http://www.pflugervilleanimalhospital.com/",
  },
  {
    id: 7,
    name: "Thrive Affordable Vet Care",
    url: "http://www.thrivevet.com/",
  },
  {
    id: 8,
    name: "White Rock Veterinary Hospital",
    url: "http://whiterockvet.com/",
  },
];

export const LocalVets = () => {
  return (
    <div className='vets__container'>
      <ul className='vets__links'>
        {localVets.map(({ id, name, url }) => (
          <li key={id}>
            <a href={url}>{name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
