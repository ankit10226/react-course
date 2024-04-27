import React, { useState } from "react";
import AddNewItem from "../../Components/AddToListComponents/AddNewItem/AddNewItem";
import AddedItems from "../../Components/AddToListComponents/AddedItems/AddedItems";

const itemListData = [];
const AddToList = () => {
    const [addedItemList, setAddedItemList] = useState(itemListData);
    const getAddedItem = (newAddedItem) => {
        // console.log(newAddedItem);
        let count = addedItemList.length;
        const itemList = {
            id : ++count,
            item : newAddedItem
        }
        setAddedItemList((prevState) => {
            return [itemList, ...prevState];
        }); 
    };
     
    const getDeletingId = (id) =>{
        const filteredArray = addedItemList.filter(item => parseInt(item.id) !== parseInt(id)); 
        setAddedItemList(filteredArray);
    }
    return (
        <div className="font-sans w-screen h-screen flex justify-center items-center flex-col">
        <div className="shadow-lg border w-2/3 p-3 rounded-md m-1">
            <AddNewItem getAddedItem={getAddedItem} />
        </div>
        <div className="shadow-lg border w-2/3 p-3 rounded-md m-1">            
            <AddedItems addedItemList={addedItemList} getDeletingId={getDeletingId}/>
        </div>
        </div>
    );
};

export default AddToList;
