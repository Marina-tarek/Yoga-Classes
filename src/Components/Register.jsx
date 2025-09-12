import { useFormik } from "formik";
import { FaExclamationCircle } from "react-icons/fa";

function Register() {
  
    let {handleSubmit,values,handleChange,errors,touched,handleBlur}= useFormik({
initialValues:{
  "name":"",
  "username":"",
  "email":"",
  "phone":"",
  "password":"",
  "rePassword":""
  
},
onSubmit:register,
validate:validateData
// can use another validationSchema (YUP )
    })
    function validateData(values){
let errors={}
if(values.name==""){
  errors.name ="Name is required"
}else if(values.name.length <=2){
  errors.name="Name must contain more than 2 characters"
}else if(values.name.length >20){
  errors.name="Name must contain less than 20 characters"
}

if(values.username==""){
  errors.username ="UserName is required"
}else if(values.username.length <=2){
  errors.username="Name must contain more than 2 characters"
}else if(values.username.length >20){
  errors.username="Name must contain less than 20 characters"
}

if(values.email==""){
  errors.email ="Email is required"
}else if(!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(values.email)){
errors.email="Email must write like this (test@gmail.com)"
}

if(values.phone == ""){
  errors.phone ="Phone is required"
} else if (!/^[0-9]+$/.test(values.phone)) {
  errors.phone = "Phone must contain digits only"
}else if(values.phone.length >11){
  errors.phone="Phone number must contain 11 number"
}

if(values.password==""){
  errors.password ="Password is required"
}else if(!/^(?=.*\d)(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,}$/.test(values.password)){
errors.password="Password must contain 1 number (0-9) and contain 1 non-alpha numeric number and more than 8 characters  "
}

if(values.rePassword == ""){
  errors.rePassword ="RePassword is required"
}else if(values.rePassword != values.password ){
  errors.rePassword="Repassword must match with password " 
}


return errors
    }

    function register(values){
        let users=JSON.parse(localStorage.getItem("users"))||[]
        users.push(values)
        localStorage.setItem("users",JSON.stringify(users))
        
    }
  return (
    < >
  <div className="max-w-lg mx-auto  bg-white rounded-lg shadow-md px-8 py-7 my-12 flex flex-col items-center border border-gray-400 ">
    <h1 className="text-xl font-bold text-center text-gray-700  mb-7">Welcome to My Yoga Classes</h1>
    <form onSubmit={handleSubmit} className="w-full flex flex-col gap-3">
      <div className="flex items-start flex-col justify-start">
        <label htmlFor="name" className="text-sm text-gray-700  mr-2">Name:</label>
        <input onBlur={handleBlur} onChange={handleChange} value={values.name} type="text" id="name" name="name" className="w-full px-3  py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"/>
      {touched.name &&errors.name && <p className="text-red-500 flex items-center"><FaExclamationCircle className="me-1.5"/>{errors.name}</p>}
      </div>


      <div className="flex items-start flex-col justify-start">
        <label htmlFor="username" className="text-sm text-gray-700  mr-2">Username:</label>
        <input onBlur={handleBlur} onChange={handleChange} value={values.username} type="text" id="username" name="username" className="w-full px-3  py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"/>
      {touched.username &&errors.username&& <p className="text-red-500 flex items-center"><FaExclamationCircle className="me-1.5"/>{errors.username}</p>}
      </div>

      <div className="flex items-start flex-col justify-start">
        <label htmlFor="email" className="text-sm text-gray-700  mr-2">Email:</label>
        <input onBlur={handleBlur} onChange={handleChange} value={values.email} type="email" id="email" name="email" className="w-full px-3  py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"/>
            {touched.email &&errors.email&& <p className="text-red-500 flex items-center"><FaExclamationCircle className="me-1.5"/>{errors.email}</p>}

      </div>
      <div className="flex items-start flex-col justify-start">
        <label htmlFor="phone" className="text-sm text-gray-700  mr-2">Phone Number:</label>
        <input onBlur={handleBlur} onChange={handleChange} value={values.phone} type="tel" id="phone" name="phone" className="w-full px-3  py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"/>
            {touched.phone &&errors.phone &&<p className="text-red-500 flex items-center"><FaExclamationCircle className="me-1.5"/>{errors.phone}</p>}

      </div>
      <div className="flex items-start flex-col justify-start">
        <label htmlFor="password" className="text-sm text-gray-700  mr-2">Password:</label>
        <input onBlur={handleBlur} onChange={handleChange} value={values.password} type="password" id="password" name="password" className="w-full px-3  py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"/>
            {touched.password && errors.password&&<p className="text-red-500 flex items-center"><FaExclamationCircle className="me-1.5"/>{errors.password}</p>}

      </div>

      <div className="flex items-start flex-col justify-start">
        <label htmlFor="rePassword" className="text-sm text-gray-700  mr-2">Confirm Password:</label>
        <input onBlur={handleBlur} onChange={handleChange} value={values.rePassword} type="password" id="rePassword" name="rePassword" className="w-full px-3  py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"/>
            {touched.rePassword &&errors.rePassword&& <p className="text-red-500 flex items-center"><FaExclamationCircle className="me-1.5"/>{errors.rePassword}</p>}

      </div>

      <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md shadow-sm">Register</button>
    </form>

    <div className="mt-4 text-center">
      <span className="text-sm text-gray-500 ">Already have an account? </span>
      <a href="#" className="text-blue-500 hover:text-blue-600">Login</a>
    </div>
  
  </div>

    </>
  )
}

export default Register