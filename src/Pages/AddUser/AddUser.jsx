import React, { useState } from 'react'
import AddUserInput from '../../Components/AddUserComponents/AddUserInput/AddUserInput'
import AddedUserList from '../../Components/AddUserComponents/AddedUserList/AddedUserList'

const userListData = [];
const AddUser = () => {
  const [hideUserList,setHideUserList] = useState('hidden'); 
  const [addedUserList, setAddedUserList] = useState(userListData); 
  const userFormData = (data) =>{ 
    setHideUserList('block');
    // setFormData(data);
    let count = userListData.length;
    const itemList = {
      id : ++count,
      user : data.user,
      age : data.age
    }
    setAddedUserList((prevState)=>(
      [itemList,...prevState]
    ));
  } 
  return (
    <div className="font-sans w-screen h-screen flex justify-center items-center flex-col">
        <div className="shadow-lg border w-2/3 p-3 rounded-md m-1">
            <AddUserInput getFormData={userFormData}/>
        </div>
        <div className={`shadow-lg border w-2/3 p-3 rounded-md m-1 ${hideUserList}`}>            
            <AddedUserList formData={addedUserList}/>
        </div>
    </div>
  )
}

export default AddUser
