import React,{useState,useEffect} from 'react';
import './App.css';

function App() {
  useEffect(() => {
    handleFetch();
  }, []) 
  const handleFetch =async() => {
    const res= await fetch("https://opentdb.com/api.php?amount=5&category=21&difficulty=easy&type=multiple");
    const data= await res.json();
    settodos(data);
    console.log(data);
  }
  const [todos,settodos]= useState([]);
  return (
    <div>
      {    todos.map((t,index) => (
      <h4 key={index}>  {t.question} </h4>      
    ))}
    </div>
  )
}

export default App;
