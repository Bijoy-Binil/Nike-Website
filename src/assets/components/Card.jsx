import React from "react";
import bigShoe from '../images/big-shoe2.png'
const Card = () => {
  return (
    <>
      <div>
        <div className="container mx-5   w-110 h-90">
            <img className="w-70 flex justify-center items-center" src={bigShoe} alt="" />
            <p className="text-gray-400">Never Done Skateboarding</p>
        <p>Department of Nike Archives

Never Done Skateboarding
Rewind to 2002 and get a glimpse of Nike SB’s journey from skateboarding outsider to cultural staple.</p>
        </div>
      </div>
    </>
  );
};

export default Card;
