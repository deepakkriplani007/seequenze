import React, { useState } from 'react'
import './upload.css'
import axios from "axios"
import { IoMdClose } from "react-icons/io";
const Updatemodal = ({onClose,name,id}) => {
  
    const [authorName, setAuthorName] = useState(name);
  
  
    const handleAuthorNameChange = (e) => {
      setAuthorName(e.target.value);
    };
  
  
    const handleSubmit = async (e) => {
      e.preventDefault();
    
      try {
        const obj = {name:authorName}
        // formData.append("photo",file);
        // formData.append("name",authorName);
console.log(obj);

        const res = await axios.post(`https://gallery-uno5.onrender.com/update/${id}`,obj);
        console.log(res);
        if(res.status == 200){
            onClose(); // Close the modal after submission
            window.location.reload();
        }
      } catch (error) {
        console.error('Error :', error);
      }
    };  
  return (
    <div className="modal-overlay">
<div className="modal">
    <div className="flex justify-end  ">
    <button className='text-2xl hover:text-[#d56b01] ' onClick={onClose}><IoMdClose /></button>
     </div>
  
  <div className="modal-content">
    <form onSubmit={handleSubmit}>
    <input
        type="text"
        placeholder="Author Name"
        value={authorName}
        onChange={handleAuthorNameChange}
      />
      <button type="submit">Update</button>
    </form>
  </div>
</div>
</div>
  )
}

export default Updatemodal