  import { useState } from 'react';
  import './App.css';

  function CalcDisplay({ dispValue }) {
    return (
      <div className='Display'>
        {dispValue}
      </div>
    );
  }

  function CalcButton({ buttonLabel, onClick }) {
    return (
      <button className='Button' onClick={onClick}>
        {buttonLabel}
      </button>
    );
  }

  function App() {
    const [disp, setDisp] = useState('0');
    const [operand1, setOperand1] = useState('');
    const [operand2, setOperand2] = useState('');
    const [operation, setOperation] = useState('');

    const buttonClickhandler = (e) => {
      const value = e.target.innerHTML;

      if (value === 'C') {
        setDisp('0');
        setOperand1('');
        setOperand2('');
        setOperation('');
      } 
      else if (value === '=') {
        
        let num1 = parseInt(operand1);
        let num2 = parseInt(operand2);
        let result = 0;

        if (operation === '+') result = num1 + num2;
        if (operation === '-') result = num1 - num2;
        if (operation === 'x') result = num1 * num2;
        if (operation === '÷') result = num1 / num2;

        setDisp(String(result));
        setOperand1(String(result)); 
        setOperand2('');
        setOperation('');
      } 
      else if (value === 'PINEDA') {
        setDisp('CARLENE PINEDA');
        setOperand1('');
        setOperand2('');
        setOperation('');
      } 
      else if (value === '+' || value === '-' || value === 'x' || value === '÷') {
        
        if (operand1 !== '' && operand2 !== '') {
          let num1 = parseInt(operand1);
          let num2 = parseInt(operand2);
          let result = 0;

          if (operation === '+') result = num1 + num2;
          if (operation === '-') result = num1 - num2;
          if (operation === 'x') result = num1 * num2;
          if (operation === '÷') result = num1 / num2;

          setDisp(String(result));
          setOperand1(String(result));
          setOperand2('');
        } else {
          setOperand1(disp);
        }
        setOperation(value);
      }
      else {
        
        if (disp === '0' || disp === 'Error' || disp === 'PINEDA' || operation !== '' && operand2 === '') {
          setDisp(value);
          if (operation === '') {
            setOperand1(value);
          } else {
            setOperand2(value);
          }
        } else {
          setDisp(disp + value);
          if (operation === '') {
            setOperand1(operand1 + value);
          } else {
            setOperand2(operand2 + value);
          }
        }
      }
    };

    return (
      <div className='App'>
        <div className='Header'>Calculator of Carlene Pineda - WMD-3A</div>
        <div className='Calculator'>
          <CalcDisplay dispValue={disp} />
          <div className='Keypad'>
            <CalcButton buttonLabel={7} onClick={buttonClickhandler} />
            <CalcButton buttonLabel={8} onClick={buttonClickhandler} />
            <CalcButton buttonLabel={9} onClick={buttonClickhandler} />
            <CalcButton buttonLabel={"÷"} onClick={buttonClickhandler} />
            <CalcButton buttonLabel={4} onClick={buttonClickhandler} />
            <CalcButton buttonLabel={5} onClick={buttonClickhandler} />
            <CalcButton buttonLabel={6} onClick={buttonClickhandler} />
            <CalcButton buttonLabel={"x"} onClick={buttonClickhandler} />
            <CalcButton buttonLabel={1} onClick={buttonClickhandler} />
            <CalcButton buttonLabel={2} onClick={buttonClickhandler} />
            <CalcButton buttonLabel={3} onClick={buttonClickhandler} />
            <CalcButton buttonLabel={"-"} onClick={buttonClickhandler} />
            <CalcButton buttonLabel={"C"} onClick={buttonClickhandler} />
            <CalcButton buttonLabel={0} onClick={buttonClickhandler} />
            <CalcButton buttonLabel={"="} onClick={buttonClickhandler} />
            <CalcButton buttonLabel={"+"} onClick={buttonClickhandler} />
          </div>
          <CalcButton buttonLabel={"PINEDA"} onClick={buttonClickhandler} />
        </div>
      </div>
    );
  }

  export default App;