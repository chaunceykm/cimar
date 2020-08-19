import React from 'react'

const clinics = [
  {
    id: 1,
    name: "Animal Trustees of Austin (ATA)",
    url: "http://www.animaltrustees.org/",
  },
  {
    id: 2,
    name: "Emancipet - Low-Cost Spay/Neuter Services",
    url: "http://emancipet.org/",
  },
];
export const SpayNeuter = () => {
  
  return (
    <div className="spayNeuter__container">
      <ul className='spayNeuter__links'>
        {clinics.map(({ id, name, url }) => (
          <li key={id}>
            <a href={url}>{name}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}
