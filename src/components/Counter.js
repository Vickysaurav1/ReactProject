import React, { useState } from 'react'
import Button from './Button';

function Counter() {
    
    const[count,setCount] = useState(0);
    
    //counter for increment
    const inc = () => {
        setCount(count+1);
    }
    //counter for decrement

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
        <Button classn='reactangular' onclick={inc} child="+" />
        <Button classn='rounded' onclick={dec} child='-' />
    </div>
  )
}

export default Counter