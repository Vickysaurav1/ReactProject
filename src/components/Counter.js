import React, { useState } from 'react'

function Counter() {
    const[count,setCount] = useState(0);
    const inc = () => {
        setCount(count+1);
    }
    const dec = () => {
        if(count==0){
            alert('bas ho gya bhai');
        }else{
       setCount(count-1);
        }
    }
  return (
    <div>
        <p>{count}</p>
        <button onClick={inc}>+</button>
        <button onClick={dec}>-</button>
    </div>
  )
}

export default Counter