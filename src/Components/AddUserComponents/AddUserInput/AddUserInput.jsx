import React, { useState } from 'react' 
import Button from '../../UI/Button/Button';
import ErrorModal from '../../UI/ErrorModal/ErrorModal';

let initalFormData = {
    user:'',
    age:''
};
const AddUserInput = ({getFormData}) => {
    const [formData,setFormData] = useState(initalFormData);    
    const [modalData, setModalData] = useState({
        showModal:false,
        title:'',
        message:''
    });

    const handleFormData = (e) =>{
        const {value,name} = e.target;
        setFormData(prev=>({
            ...prev,
            [name]:value
        }));
    }  
    
    const submitFormHandler = (e) =>{
        e.preventDefault();
        if (formData.user.trim().length === 0 || formData.age.trim().length === 0) {
            setModalData({
                showModal:true,
                title:'An Error Occured',
                message:'User or Age field can not be null!'
            });
            return;
        }else if(+formData.age < 1){
            setModalData({
                showModal:true,
                title:'An Error Occured Again',
                message:'Age is not correct!'
            });
            return;
        }
        getFormData(formData);  
        setFormData(initalFormData);
    }
    return ( 
        <>
            <ErrorModal showModal={modalData.showModal} title={modalData.title} message={modalData.message} />
            <form onSubmit={submitFormHandler}>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <h3 className='font-semibold text-slate-500 my-2'>Add User</h3>
                        <input type="text" name="user" id="user" className='shadow-lg border-2 rounded-md w-full px-2 py-1 font-semibold' value={formData.user} onChange={handleFormData}/> 
                    </div>
                    <div>
                        <h3 className='font-semibold text-slate-500 my-2'>Add Age</h3>
                        <input type="number" name="age" id="age" className='shadow-lg border-2 rounded-md w-full px-2 py-1 font-semibold' value={formData.age} onChange={handleFormData}/>
                    </div>
                </div>
                <div className='text-right my-2'> 
                    <Button type="submit" className="rounded-md py-1 px-4 border bg-slate-400 text-white my-2">Calculate</Button>
                </div>
            </form> 
        </>
    )
}

export default AddUserInput
