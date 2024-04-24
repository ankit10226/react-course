import React from 'react' 
import CardList from '../CardList/CardList';

const Card = ({items}) => {  
    let chartData = [
        {month:'JAN',value:0},
        {month:'FEB',value:0},
        {month:'MAR',value:0},
        {month:'APR',value:0},
        {month:'MAY',value:0},
        {month:'JUN',value:0},
        {month:'JUL',value:0},
        {month:'AUG',value:0},
        {month:'SEP',value:0},
        {month:'OCT',value:0},
        {month:'NOV',value:0},
        {month:'DEC',value:0}
    ];
 
    let maxValue = 0;
    for(let item of items){
        let month = new Date(item.date).getMonth(); 
        chartData[month].value += item.price;
        maxValue += item.price;
    }; 
    
    // let arrValues = chartData.map(value => (
    //     value.value
    // ));
    // let maxValue = Math.max(...arrValues); 
  return (
    <div className="flex justify-between rounded-md my-1 items-center h-32">
        {chartData.map((value) => (
            <CardList key={value.month} data={value} maxValue={maxValue}/>
        ))}
    </div>
  )
}

export default Card
