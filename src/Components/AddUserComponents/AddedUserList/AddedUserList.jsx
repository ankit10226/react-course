import React from 'react'
import AddedUserView from '../AddedUserView/AddedUserView';

const AddedUserList = ({formData}) => { 
  return (
    <ul>  
      {
        formData.map(values =>(
          <AddedUserView key={values.id} user={values.user} age={values.age}/>
        ))
      }
    </ul>
  )
}

export default AddedUserList
