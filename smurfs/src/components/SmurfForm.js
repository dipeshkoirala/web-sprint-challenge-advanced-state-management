import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addSmurf } from "../Actions";
import "./App.css";
const initialState = {
 name: "",
 age: "",
 height: "",
};
const SmurfForm = () => {
 const [values, setValues] = useState(initialState);
 const dispatch = useDispatch();
 const handleChange = (e) => {
 const { name, value } = e.target;
 setValues((values) => {
 return {
 ...values,
 [name]: value,
 };
 });
 };
 const handleSubmit = (e) => {
 e.preventDefault();
 dispatch(addSmurf(values));
 setValues(initialState);
 };
 const { name, age, height } = values;
 return (
 <form className="dk1 bg-primary text-white m-2 p-3" onSubmit={handleSubmit}>
 <label className="dk color-primary">
 Name:
 <input
 className="dk p-2 m-2"
 type="text"
 name="name"
 onChange={handleChange}
 value={name}
 />
 </label>
 <label className="dk ">
 Age:
 <input
 className="dk p-2 m-2"
 type="text"
 name="age"
 onChange={handleChange}
 value={age}
 />
 </label>
 <label className="dk">
 Height:
 <input
 className="dk p-2 m-2"
 type="text"
 name="height"
 onChange={handleChange}
 value={height}
 />
 </label>
 <button type="submit">Add smurf</button>
 </form>
 );
};
export default SmurfForm;