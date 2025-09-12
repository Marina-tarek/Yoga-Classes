import { useFormik } from "formik";
import { useState } from "react";
import { FaExclamationCircle } from "react-icons/fa";

function Login() {
  let [message,setMessage]=useState("")
  const [isSuccess, setIsSuccess] = useState(false);
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
        // let users=JSON.parse(localStorage.getItem("users"))||[]
        // users.push(values)
        // localStorage.setItem("users",JSON.stringify(users))
        let data=JSON.parse(localStorage.getItem("users"))
        let foundUser=data.find((user)=>user.email==values.email && user.password==values.password)
        if(foundUser){
           setMessage("Login successful, welcome " + foundUser.name)
            setIsSuccess(true)
        }else{
            setMessage(" Invalid email or password")
            setIsSuccess(false)
        }
        
       
    }
  return (
    < >
  <div className="max-w-lg mx-auto  bg-white rounded-lg shadow-md px-8 py-7 my-12 flex flex-col items-center border border-gray-400 ">
    <h1 className="text-xl font-bold text-center text-gray-700  mb-7">Welcome to My Yoga Classes</h1>
    <form onSubmit={handleSubmit} className="w-full flex flex-col gap-3">
      <div className="flex items-start flex-col justify-start">
        <label htmlFor="email" className="text-sm text-gray-700  mr-2">Email:</label>
        <input onBlur={handleBlur} onChange={handleChange} value={values.email} type="email" id="email" name="email" className="w-full px-3  py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"/>
            {touched.email &&errors.email&& <p className="text-red-500 flex items-center"><FaExclamationCircle className="me-1.5"/>{errors.email}</p>}

      </div>

      <div className="flex items-start flex-col justify-start">
        <label htmlFor="password" className="text-sm text-gray-700  mr-2">Password:</label>
        <input onBlur={handleBlur} onChange={handleChange} value={values.password} type="password" id="password" name="password" className="w-full px-3  py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"/>
            {touched.password && errors.password&&<p className="text-red-500 flex items-center"><FaExclamationCircle className="me-1.5"/>{errors.password}</p>}
      </div>

      <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md shadow-sm">LogIn</button>
    </form>

    <div className="mt-4 text-center">
      <span className="text-sm text-gray-500 ">Not have an account? </span>
      <a href="#" className="text-blue-500 hover:text-blue-600">Register</a>
    </div>
  {message && (
  <p className={`font-medium text-xl my-2.5 ${isSuccess ? "text-green-500" : "text-red-500"}`}>{message}</p>
)}
  </div>

    </>
  )
}

export default Login