import { FC } from "react";
import { GreetProps } from "./greet.types";



const Greet:FC<GreetProps> = ({ name }) => {
  return (
    <div role="contentinfo">Hi {name ? name : "Guest"}</div>
  )
}

export default Greet