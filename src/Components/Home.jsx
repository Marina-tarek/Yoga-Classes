import { useEffect, useState } from "react"
import CardCategory from './CardCategory';



function Home() {
  let [myCategory,SetMyCategory]=useState([])
      async function getAllCategory(){
          let res =await fetch("https://yoga-api-nzy4.onrender.com/v1/categories")
          let data=await res.json()
          console.log(data);
          SetMyCategory(data)
          
          
      }
      useEffect(()=>{
          getAllCategory()
      },[])
  return (
    <>
          <section className="relative bg-[url('https://images.pexels.com/photos/3822621/pexels-photo-3822621.jpeg')] bg-cover bg-center h-[90vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative text-center text-white max-w-2xl px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Find Your Inner Peace with Yoga
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Join our community to improve flexibility, strength, and mindfulness.
          </p>
          <button className="px-6 py-3 bg-purple-600 text-white rounded-lg text-lg font-medium hover:bg-purple-700 transition">
            Get Started
          </button>
        </div>
      </section>
       <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          Yoga Categories
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {myCategory.map((Item, index) => (
              <CardCategory key={index} CategoryData={Item} />
            ))}
        </div>
      </div>
    </section>
  </>
  )
}

export default Home