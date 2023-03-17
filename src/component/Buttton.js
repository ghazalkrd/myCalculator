import React, {useState} from "react"
const Button = ({text}, {fun}) => <button className="btn1" onClick={fun}>{text}</button>
const MiniButton = ({text}) => <button>{text}</button>
export default Button