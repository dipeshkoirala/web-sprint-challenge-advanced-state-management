import React from "react";
const Smurf = ({ name, age, height }) => {
 return (
 <div className="dk3 bg-info">
 <h2 className="dk1 bg-danger text-white">{name}</h2>
 <p className="dk1 ">Age:{age} years old</p>
 <p className="dk1">Height:{height} cms</p>
 </div>
 );
};
export default Smurf; 