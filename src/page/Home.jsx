import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar';
import Sibebar from '../components/Sibebar';
import Upload from '../components/Upload';
import Project from '../components/Project';
import Perroject from '../components/Perproject';
import axios from "axios"
const Home = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [projects, setProjects] = useState([]);
  const [permanent,setPermanent] = useState([]);
  const getUserData = async()=>{
    const res = await axios.get("https://gallery-uno5.onrender.com/getdata",{
        headers:{
            "Content-Type":"application/json"
        }
    });

console.log(res.data);  

    if(res.status == 200){
        setProjects(res.data)
    }else{
        alert("error")
    }
}
  const getpermanentData = async()=>{
    const res = await axios.get('https://picsum.photos/v2/list?page=1&limit=6');

   console.log(res.data);  

    if(res.status == 200){
      setPermanent(res.data)
    }else{
        alert("error in permanents")
    }
}

useEffect(()=>{
    getUserData()
    getpermanentData()
},[])
  const handleModalOpen = () => {
    setModalOpen(true);
  };
  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
 <>
 <Navbar/>
<Sibebar/>
<div className="p-4 bg-[#F8F8F8] w-full h-full sm:ml-64">
   <div className="p-4 mt-14">
  <h1 className='pl-4 text-5xl font-bold'>My Project</h1>
      <button onClick={handleModalOpen} className='mt-5 p-5 bg-white inline-block rounded-md'>
      <svg
            width="360"
            height="180"
            viewBox="0 0 360 180"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              width="360"
              height="180"
              rx="10"
              fill="#FA782F"
              fill-opacity="0.4"
            />
            <g clip-path="url(#clip0_101_12)">
              <path
                d="M191.542 81.6667C195.474 81.6608 199.319 82.8297 202.583 85.0233V72.8333C202.583 70.4906 201.653 68.2438 199.996 66.5872C198.34 64.9307 196.093 64 193.75 64H162.833C160.491 64 158.244 64.9307 156.587 66.5872C154.931 68.2438 154 70.4906 154 72.8333V103.75C154 106.093 154.931 108.34 156.587 109.996C158.244 111.653 160.491 112.583 162.833 112.583H175.023C173.024 109.591 171.875 106.113 171.698 102.518C171.521 98.9243 172.323 95.3496 174.019 92.1757C175.715 89.0019 178.241 86.3479 181.327 84.4971C184.413 82.6463 187.943 81.668 191.542 81.6667Z"
                fill="white"
              />
              <path
                d="M191.542 86.0833C188.484 86.0833 185.496 86.99 182.953 88.6885C180.411 90.3871 178.43 92.8014 177.26 95.626C176.09 98.4507 175.784 101.559 176.38 104.557C176.977 107.556 178.449 110.31 180.611 112.472C182.773 114.634 185.527 116.107 188.526 116.703C191.524 117.299 194.633 116.993 197.457 115.823C200.282 114.653 202.696 112.672 204.395 110.13C206.093 107.588 207 104.599 207 101.542C206.995 97.4433 205.365 93.5141 202.467 90.6161C199.569 87.7182 195.64 86.088 191.542 86.0833ZM195.958 103.75H193.75V105.958C193.75 106.544 193.517 107.106 193.103 107.52C192.689 107.934 192.127 108.167 191.542 108.167C190.956 108.167 190.394 107.934 189.98 107.52C189.566 107.106 189.333 106.544 189.333 105.958V103.75H187.125C186.539 103.75 185.978 103.517 185.563 103.103C185.149 102.689 184.917 102.127 184.917 101.542C184.917 100.956 185.149 100.394 185.563 99.9801C185.978 99.566 186.539 99.3333 187.125 99.3333H189.333V97.125C189.333 96.5393 189.566 95.9776 189.98 95.5635C190.394 95.1493 190.956 94.9167 191.542 94.9167C192.127 94.9167 192.689 95.1493 193.103 95.5635C193.517 95.9776 193.75 96.5393 193.75 97.125V99.3333H195.958C196.544 99.3333 197.106 99.566 197.52 99.9801C197.934 100.394 198.167 100.956 198.167 101.542C198.167 102.127 197.934 102.689 197.52 103.103C197.106 103.517 196.544 103.75 195.958 103.75Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_101_12">
                <rect
                  width="53"
                  height="53"
                  fill="white"
                  transform="translate(154 64)"
                />
              </clipPath>
            </defs>
          </svg>
          <div className=' flex flex-col content-center '>
            <div className='font-bold text-xl flex justify-center'>
              Create a new project
              </div>
          <div className='text-sm flex justify-center font-bold'>
            <div>
            or try a {" "}
            <span className='text-[#fa782f]'>
              sample project
            </span>
              </div> 
          </div>
          </div>
      </button>
   </div>
   <div>

   {modalOpen && ( <Upload onClose={handleModalClose} />)}
   </div>
   <div>
   {permanent?.map((project) => (
          <Perroject project={project}  />
        ))}
   </div>
   <div>
   {projects?.map((project) => (
          <Project project={project} key={project._id} />
        ))}
   </div>

</div>


 </>
  )
}

export default Home

// .map((project) => (
//   <Project key={project.id} project={project} onUpdate={onUpdate} onDelete={onDelete} />
// ))