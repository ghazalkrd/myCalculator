import React, {useState} from "react"
const Button = ({text}, {fun}) => <button className="btn11" onClick={fun}>{text}</button>
const MiniButton = ({text}) => <button>{text}</button>
export default Button