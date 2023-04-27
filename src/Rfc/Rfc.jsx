import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Aha from '../Aha/Aha'

export default function Rfc() {
    //useState Hook
    let [count,setCount]= useState(5)
    let [name,setName] = useState('Boody')
    let [value,setValue] =useState('استغفر الله')
    function changeCount(){
      setCount(Math.random())
    }

    function changeName(){
      setName('Abdelrahman')
    }
    function ChangeValue (){
      setValue('سبحان الله')
    }
    //useEffect
    //component did mount
    // useEffect(()=>{
    //   console.log('M')
    // },[])
    //update
    // useEffect(()=>{
    //   if (count == 5) {
    //     return;
    //   }
    //   console.log('boody')
    // },[count])
    // component did un mount
  return (
    <div>
      <h2 className='m-auto p-3 text-center bg-danger'>{count}</h2> 
      <h2 className='m-auto p-3 text-center bg-dark text-white'>{name}</h2> 
      <h2 className='m-auto p-3 text-center bg-info'>{value}</h2> 
      <button onClick={()=>changeCount()} className='btn btn-outline-danger'>number</button>
      <button onClick={()=>changeName()} className='btn btn-dark'>Name</button>
      <button onClick={()=>ChangeValue()} className='btn btn-outline-info'>ازكار</button>
      <Aha mycount={count} myName={name}/>
    </div>
  )
}
