import React, {useState} from 'react';
import './App.css';
import Button from './component/Buttton';
import BasicSwitches from './component/Switching';
import Switch from '@mui/material/Switch';

function App() {
  const [newNum, setNewNum] = useState('');
  const [pre, setPre] = useState('');
  const [operation, setOperation] = useState('');
  const [isActive, setActive] = useState("false");

  const label = { inputProps: { 'aria-label': 'Switch demo' } };

  const ToggleClass = () => {
    setActive(!isActive);
  };

  const appendValue = (e) =>{
    const value = e.target.getAttribute('data');
    if(value === '.' && newNum.includes('.'))return
    setNewNum(newNum + value);
  }

  const handleDelete = () =>{
    setNewNum(String(newNum).slice(0,-1))
  }

  const handleAC = () =>{
    setNewNum('')
    setPre('')
    setOperation('')
  }

  const compute = () => {
    let result;
    let preNum = parseFloat(pre);
    let newNumNum = parseFloat(newNum);
    if(isNaN(preNum) || isNaN(newNumNum)) return
    switch(operation){
      case '+':
        result = preNum + newNumNum;
        break;
      case '-':
        result = preNum - newNumNum;
        break;
      case '/':
        result = preNum / newNumNum;
        break;
      case 'x':
        result = preNum * newNumNum;
        break;
      case '%':
        result = newNumNum /100;
      default:
        return
    }
    return result;
  }

  const chooseOperation = (e) =>{
    if (newNum === '') return
    if (pre !== ''){
      let value = compute();
      setPre(value);
    }else{
      setPre(newNum);
    }
    setNewNum('');
    setOperation(e.target.getAttribute('data'))
  }

  const equal = () =>{
    let value = compute();
    if(value == undefined || value == null) return
    setNewNum(value);
    setPre('');
    setOperation('');
  }

  const percent = () =>{
    let preNum = parseFloat(pre);
    let newNumNum = parseFloat(newNum);
    setNewNum(newNumNum/100);
  }

  const neg = () =>{
    let preNum = parseFloat(pre);
    let newNumNum = parseFloat(newNum);
    setNewNum(-newNumNum);
  }

  return (
    <div className="App">
      <div className={isActive ? "main" : "main1"}>
        <div className='divTop'>
          <div className='togg'>
            <Switch {...label} onChange={ToggleClass}/>
          </div>
          <div className={isActive ? "pre" : "pre1"}>{pre} {operation}</div>
          <div className={isActive ? "new" : "new1"}>{newNum}</div>
        </div>
        <div className={isActive ? "div1" : "div2"}>
        <button onClick={handleAC} className={isActive ? "btn1" : "btn2"} style={{color: "green"}}>AC</button>
          <button data={'+/-'} className={isActive ? "btn1" : "btn2"} onClick={neg} style={{color: "green"}}>+/-</button>
          <button data={'%'} className={isActive ? "btn1" : "btn2"} onClick={percent} style={{color: "green"}}>%</button>
          <button data={'/'} className={isActive ? "btn1" : "btn2"} onClick={chooseOperation} style={{color: "red"}}>/</button>
          <button className={isActive ? "btn1" : "btn2"} data={'7'} onClick={appendValue}>7</button>
          <button className={isActive ? "btn1" : "btn2"} data={'8'} onClick={appendValue}>8</button>
          <button className={isActive ? "btn1" : "btn2"} data={'9'} onClick={appendValue}>9</button>
          <button data={'x'} className={isActive ? "btn1" : "btn2"} onClick={chooseOperation} style={{color: "red"}}>x</button>
          <button className={isActive ? "btn1" : "btn2"} data={'4'} onClick={appendValue}>4</button>
          <button className={isActive ? "btn1" : "btn2"} data={'5'} onClick={appendValue}>5</button>
          <button className={isActive ? "btn1" : "btn2"} data={'6'} onClick={appendValue}>6</button>
          <button data={'-'} className={isActive ? "btn1" : "btn2"} onClick={chooseOperation} style={{color: "red"}}>-</button>
          <button className={isActive ? "btn1" : "btn2"} data={'1'} onClick={appendValue}>1</button>
          <button className={isActive ? "btn1" : "btn2"} data={'2'} onClick={appendValue}>2</button>
          <button className={isActive ? "btn1" : "btn2"} data={'3'} onClick={appendValue}>3</button>
          <button data={'+'} className={isActive ? "btn1" : "btn2"} onClick={chooseOperation} style={{color: "red"}}>+</button>
          <button onClick={handleDelete} className={isActive ? "btn1" : "btn2"}>Del</button>
          <button className={isActive ? "btn1" : "btn2"} data={'0'} onClick={appendValue}>0</button>
          <button className={isActive ? "btn1" : "btn2"} data={'.'} onClick={appendValue}>.</button>
          <button data={'='} className={isActive ? "btn1" : "btn2"} onClick={equal} style={{color: "red"}}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
