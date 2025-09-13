import { useFormik } from "formik";
import { useState } from "react";
import { FaExclamationCircle } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import logoImg from "../assets/yogaLogo.jpg"
function Login() {
  let [message,setMessage]=useState("")
  const [isSuccess, setIsSuccess] = useState(false);
  let navigate=useNavigate()
    let {handleSubmit,values,handleChange,errors,touched,handleBlur}= useFormik({
initialValues:{
  "email":"",
  "password":"", 
},
onSubmit,
validate:validateData
    })
    function validateData(values){
let errors={}

if(values.email==""){
  errors.email ="Email is required"
}else if(!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(values.email)){
errors.email="Email must write like this (test@gmail.com)"
}

if(values.password==""){
  errors.password ="Password is required"
}else if(!/^(?=.*\d)(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,}$/.test(values.password)){
errors.password="Password must contain 1 number (0-9) and contain 1 non-alpha numeric number and more than 8 characters  "
}


return errors
    }

    function onSubmit(values){
        let data=JSON.parse(localStorage.getItem("users"))
        let foundUser=data.find((user)=>user.email==values.email && user.password==values.password)
        if(foundUser){
           setMessage("Login successful, welcome " + foundUser.name)
            setIsSuccess(true)
            setTimeout(() => {
                navigate("/")
            }, 1000);
        }else{
            setMessage(" Invalid email or password")
            setIsSuccess(false)
        }
        
       
    }
  return (
    < section style={{ backgroundImage: `url(${logoImg})` }} className="bg-no-repeat bg-center">
  <div className="max-w-lg mx-auto  bg-[rgba(0,0,0,0.1)] rounded-lg shadow-md px-8 py-6 my-12 flex flex-col items-center border border-gray-400 ">
    <h2 className="text-3xl font-bold text-center text-black  mb-7">Welcome to  Yoga Life Classes</h2>
    <form onSubmit={handleSubmit} className="w-full flex flex-col gap-3">
      <div className="flex items-start flex-col justify-start">
        <label htmlFor="email" className="text-sm text-black  mr-2">Email:</label>
        <input onBlur={handleBlur} onChange={handleChange} value={values.email} type="email" id="email" name="email" className="w-full px-3  py-2 rounded-md border border-gray-300 dark:border-black focus:outline-none focus:ring-1 focus:ring-blue-500"/>
            {touched.email &&errors.email&& <p className="text-red-700 flex items-center"><FaExclamationCircle className="me-1.5"/>{errors.email}</p>}

      </div>

      <div className="flex items-start flex-col justify-start">
        <label htmlFor="password" className="text-sm text-black  mr-2">Password:</label>
        <input onBlur={handleBlur} onChange={handleChange} value={values.password} type="password" id="password" name="password" className="w-full px-3  py-2 rounded-md border border-gray-300 dark:border-black focus:outline-none focus:ring-1 focus:ring-blue-500"/>
            {touched.password && errors.password&&<p className="text-red-700 flex items-center"><FaExclamationCircle className="me-1.5"/>{errors.password}</p>}
      </div>

      <button type="submit" className="bg-blue-800 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md shadow-sm">LogIn</button>
      {message && (
  <p className={`font-medium text-xl my-2.5 text-center ${isSuccess ? "text-green-500" : "text-red-500"}`}>{message}</p>
)}
    </form>

    <div className="mt-4 text-center text-xl font-medium">
      <span className=" text-black ">Not have an account? </span>
      <NavLink to={"/register"} className="text-blue-800 hover:text-blue-700">Register</NavLink>
    </div>

  </div>

    </section>
  )
}

export default Login