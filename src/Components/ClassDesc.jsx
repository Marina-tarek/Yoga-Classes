import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function ClassDesc() {
    let {id}=useParams()
      let [myClassDesc,SetMyClassDesc]=useState([])
          async function getClassDesc(){
              let res =await fetch(`https://yoga-api-nzy4.onrender.com/v1/poses?id=${id}`)
              let data=await res.json()
              console.log(data);
              SetMyClassDesc(data)
              
              
          }
          useEffect(()=>{
              getClassDesc()
          },[])
  
    
  return (
    <section className='py-10'>
        <div className="container mx-auto">
<div className='flex justify-around items-center '>
    <div className="w-10/12 mx-auto md:w-5/12 md:mx-0">
    <img src={myClassDesc.url_svg_alt} alt={myClassDesc.english_name} className='w-full'/>
    </div>
    <div className="w-10/12 mx-auto md:w-5/12 md:mx-0">
    <h2 className='text-center text-3xl font-bold underline decoration-wavy text-purple-600'>{myClassDesc.english_name}</h2>
    <p className='py-4'>{myClassDesc.pose_description}</p>
    <p className='py-4'> <strong className='text-xl font-semibold text-purple-600'>This Benefits:</strong> {myClassDesc.pose_benefits}</p>
    </div>
</div>
        </div>
    </section>
  )
}

export default ClassDesc