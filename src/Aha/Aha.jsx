import React from 'react'

export default function Aha(props) {
    console.log(props)
    let {mycount , myName}=props
  return (
    <div>
        <p>mycount={mycount}</p>
        <p>myName={myName}</p>
    </div>
  )
}


