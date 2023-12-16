import './App.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

function App() {
  const [amount,setAmount]=useState(0);
  const [year,setYear]=useState(0);
  const [rate,setRate]=useState(0);
  const [interest,setInterest]=useState(0);
  console.log(amount);
  console.log(year);
  console.log(rate);
 const calc=(e)=>{
    const output=amount*year*rate/100;
    console.log(output);
    setInterest(output);


  }
  const reset=(e)=>{
    
    
    setAmount(0);
    setYear(0);
    setRate(0);
    setInterest(0);
  }
  return (
    <div className="App">
      <div className="container">
        <div className="header">
          <h1>SIMPLE INTEREST CALCULATOR</h1>
          <p>CALCULATE YOUR SIMPLE INTEREST WITH US💓</p>
        </div>
        <div className="total">
          <h3>&#8377;{interest}</h3>
          <p>YOUR TOTAL INTEREST</p>
        </div>
        <div className="form">
          <form action="">
            <div className="input">
            <TextField id="outlined-basic" value={amount||""} onChange={(e)=>setAmount(e.target.value)} label="Amount" variant="standard" />
            <TextField id="filled-basic" value={year||""} onChange={(e)=>setYear(e.target.value)} label="Year" variant="standard" />
            <TextField id="standard-basic" value={rate||""} onChange={(e)=>setRate(e.target.value)} label="Rate" variant="standard" />
            </div>
            <div className="button">
            
<Button variant="contained" onClick={e=>calc(e)}>Calculate</Button>
<Button variant="outlined" onClick={e=>reset(e)}>Reset</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
