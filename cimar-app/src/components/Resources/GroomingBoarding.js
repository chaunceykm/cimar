import React from 'react'

const groomersAndBoarders = [
  {
    id: 1,
    name: "All God's Creatures Grooming",
    url:
      "https://www.facebook.com/pages/category/Pet-Groomer/All-Gods-Creatures-213426098682797/",
  },
  {
    id: 2,
    name: "Camp Bow Wow Dog Daycare and Dog Boarding",
    url: "http://www.campbowwow.com/austin",
  },
  {
    id: 3,
    name: "DogBoy's Dog Ranch - Training, Daycare, and Boarding",
    url: "http://www.dogboys.com/",
  },
  { id: 4, name: "K & A Grooming", url: "http://www.kagrooming.com/" },
  {
    id: 5,
    name: "Puppie Luv Pet Grooming",
    url: "https://www.512puppylove.com/",
  },
];
export const GroomingBoarding = () => {
  return (
    <div className='grooming__container'>
      <ul className='grooming__links'>
        {groomersAndBoarders.map(({ id, name, url }) => (
          <li key={id}>
            <a href={url}>{name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
