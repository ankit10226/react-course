import { useEffect, useReducer, useState } from 'react'
import React from 'react'
import Button from '../../Components/UI/Button/Button';

const reducer = (state,action) =>{
    switch (action.type) {
        case 'changed_ageAdd':{
            const newAge = state.age+1;
            return{
                ...state,
                age:newAge,
                isValid: newAge > 30 || state.name.length > 10,
            };
        }
        case 'changed_ageDec':{
            const newAge = state.age-1;
            return{ 
                ...state,
                age:newAge,
                isValid: newAge > 30 || state.name.length > 10,
            };
        }
        case 'changed_name':{
            const newName = action.nextName;
            return{
                ...state,
                name:newName,
                isValid: state.age > 30 || newName.length > 10
            }
        }
    }
    throw Error ('Unknown Action '+action.type)
};
const UseReducer = () => {
    const [invalidForm,setInvalidForm] = useState(null);
    const [state,dispatch] = useReducer(reducer,{age:24,name:'Ankit',isValid:null}); 
    const handleAgeChangeAdd = () =>{
        dispatch({type:'changed_ageAdd'});
    };
    const handleAgeChangeDec = () =>{
        dispatch({type:'changed_ageDec'});
    };
    const handleNameChange = (e) =>{ 
        dispatch({type:'changed_name',nextName:e.target.value});
    };

    const { isValid } = state;
    useEffect(()=>{
        const timeoutVar = setTimeout(() => {            
            setInvalidForm(state.isValid);            
            console.log(state.isValid);
        }, 500);

        return ()=>{ 
            clearTimeout(timeoutVar); 
        };
    },[isValid]);
    return (
        <>
        <div className='flex items-center justify-center m-5 flex-col'>
            <p className={`text-red-400 ${!invalidForm && 'hidden'}`}>Error Message</p>
            <input type="text" className='border-2 border-solid rounded-md px-2 py-1' value={state.name} onChange={handleNameChange}/>
            {/* <button  type='button' onClick={handleAgeChange}>Add</button> */}
            <div className='flex items-center justify-center'>
                <Button onClick={handleAgeChangeAdd}>+</Button>
                <Button onClick={handleAgeChangeDec}>-</Button>
            </div>
            <p>{state.name} is {state.age} years old</p>
        </div>
        </>
    )
}

export default UseReducer
