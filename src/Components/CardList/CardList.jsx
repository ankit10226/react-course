import React from 'react'

const CardList = ({data,maxValue}) => {
    let height = '0%';

    if(maxValue > 0){
        height = parseInt((data.value / maxValue)*100)+'%';
    }
    
  return ( 
    <div className="bg-white flex justify-between rounded-md my-1 items-end h-4/5 w-4"> 
        <div className="rounded-md w-4" style={{backgroundColor:'#89CFF0',height:height,transitionDuration: '1s', transitionTimingFunction: 'ease-out'}}></div> 
    </div> 
  )
}

export default CardList
