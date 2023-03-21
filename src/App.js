import React from 'react'
import { useSelector ,useDispatch} from 'react-redux';
import './App.css';
import {INCnumber,DICnumber} from './actions/index'
function App() {
  const mystate = useSelector((state)=>state.changethenumber)
  const dispatch = useDispatch();
  return (
    <div className='App'> 
    <button onClick={()=>dispatch(DICnumber)}>-</button>
      <h3>{mystate}</h3>
      <button onClick={()=>dispatch(INCnumber)}>+</button>
    </div>
  )
}

export default App
