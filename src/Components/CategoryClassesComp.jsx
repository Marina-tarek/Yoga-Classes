import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import CardClasses from "../CardClasses"



function CategoryClassesComp() {
    let {id}=useParams()
    let [CatClasses,setCatClasses]=useState([])
          async function getAllClassesOfThisCategory(){
              let res =await fetch(`https://yoga-api-nzy4.onrender.com/v1/categories?id=${id}`)
              let data=await res.json()
              console.log(data);
              setCatClasses(data)
             
              
              
          }
          useEffect(()=>{
              getAllClassesOfThisCategory()
          },[])
  return (
    <section className="py-12">
        <div className="container mx-auto">
            <div className="text-center py-5">
                <h2 className="text-purple-600 text-3xl font-bold">{CatClasses.category_name}</h2>
            </div>
          <div className="cards py-7 flex justify-between gap-y-6 flex-wrap">
{CatClasses?.poses?.map((classItem, index) => (<CardClasses key={index} classData={classItem} />))}
    </div>
        </div>
    </section>
  )
}

export default CategoryClassesComp