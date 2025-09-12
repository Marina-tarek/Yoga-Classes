import { useEffect, useState } from "react"
import CardClasses from "../CardClasses";



function Classes() {

    let [myClasses,setMyClasses]=useState([])
    async function getAllCLasses(){
        let res =await fetch("https://yoga-api-nzy4.onrender.com/v1/poses")
        let data=await res.json()
        setMyClasses(data)
        
        
    }
    useEffect(()=>{
        getAllCLasses()
    },[])
  return (
    <section>
<div className="container mx-auto">
<div className="row">
    <div className="py-5 text-center"><h2 className="text-purple-600 text-3xl font-bold ">All Classes</h2></div>
    <div className="cards py-7 grid gap-5 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
{myClasses?.map((classItem, index) => (<CardClasses key={index} classData={classItem} />))}
    </div>
</div>
</div>
    </section>
  )
}

export default Classes