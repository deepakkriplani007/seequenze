import React, { useState } from 'react'
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import axios from "axios"
import Updatemodal from './Updatemodal';
const Project = ({project}) => {
    const [modalOpen, setModalOpen] = useState(false);
    const handleModalOpen = () => {
        setModalOpen(true);
      };
      const handleModalClose = () => {
        setModalOpen(false);
      };
    const deleteUserData = async()=>{
    
        const res = await axios.delete(`https://gallery-uno5.onrender.com/delete/${project._id}`)
        if(res.status == 200){
            console.log('successfull deleted ')
            window.location.reload();
        }else{
            alert("error")
        }
    }
  return (
    <div  className='m-5 p-5 border-2 hover:border-[#fdc9ac] bg-white inline-block rounded-md'>
   <img className="border-2 p-1 w-[360px] rounded-md" src={project.imgpath} alt="imghere" />
        <div className=' flex flex-col content-center '>
          <div className='font-bold text-xl flex justify-center'>
            {project.name[0].toUpperCase()+project.name.substring(1)}
            </div>
        <div className='text-[20px] flex justify-center font-bold gap-5'>
          <div className='hover:text-[#fa782f]' onClick={deleteUserData}>
          <MdDelete />
            </div> 
          <div onClick={handleModalOpen} className='hover:text-[#fa782f]'>
          <MdEdit />
          </div>
        </div>
        </div>
        <div>

{modalOpen && ( <Updatemodal onClose={handleModalClose} name={project.name} id={project._id}/>)}
</div>
    </div>
  )
}
export default Project
