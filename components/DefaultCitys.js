import React from 'react'
import Image from 'next/image'
import Link from "next/link"

import LondonImage from "../public/Images/london.jpg"
import ParisImage from "../public/Images/paris.jpg"
import TokyoImage from "../public/Images/tokyo.jpg"
import NewYorkImage from "../public/Images/new-york.jpg"
import MoscowImage from "../public/Images/moscow.jpg"



const places = [
    {
        name: "Londres",
        image: LondonImage,
        url:"/location/london-2643743",
   },
   {
    name: "París",
    image: ParisImage,
    url:"/location/paris-2968815",
},
{
    name: "Tokyo",
    image: TokyoImage,
    url:"/location/tokyo-1850147",
},
{
    name: "Nueva York",
    image: NewYorkImage,
    url:"/location/new-york-city-5128581",
},
{
    name: "Moscu",
    image: MoscowImage,
    url:"/location/moscow-524894",
},
];


export default function DefaultCitys() {
  return (
    <div className="places">
        <div className="places__row">
            {places.length > 0 && 
            places.map((places, index) => (
                <div className="places__box" key={index}>
                    <Link href={places.url}>
                        <a>
                            <div className="places__image-wrapper">
                                <Image
                                src={places.image}
                                alt={`${places.name} Image`}
                                layout="fill"
                                objectFit="cover"
                                />
                            </div>

                            <span>{places.name}</span>
                        </a>
                    </Link>
                </div>
            ))
            }
        </div>
    </div>
  )
}
