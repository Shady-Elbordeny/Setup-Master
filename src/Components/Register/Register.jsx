import logo from '../../assets/images/LOGO 1.png'
import * as Yup from 'yup'
import axios from 'axios';
import { useContext, useState } from 'react';
import { useFormik } from 'formik';
import { TokenContext } from './../../Context/Token';
import { useNavigate } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';

export default function Register() {
const {setToken} = useContext(TokenContext)
const navigate = useNavigate()
  const [errorMsg,setErrorMsg] = useState(null)
  const [loading,setLoading] = useState(false)
  async function handleSubmit(values) {
    setLoading(true)
  const response = await axios.post(`http://setupmaster.runasp.net/api/Auth/register`,values)
    .then((res)=> {if(res.data?.token){
      setToken(res.data.token)
      localStorage.setItem('token', res.data.token)
      navigate('/')
    }})
    .catch((err)=> {setErrorMsg(err.response.data)})
    setLoading(false)
  return response

  }

  const validationSchema = Yup.object({
    email: Yup.string()
     .email('Invalid email')
     .required('Email is required'),
    password: Yup.string()
     .min(6, 'Password must be at least 6 characters')
     .required('Password is required'),
     firstName: Yup.string().required(),
     lastName: Yup.string().required(),
     username: Yup.string().required()

  })
  const formik = useFormik({
    initialValues: {
      firstName:"",
      lastName:"",
      email: "",
      username:"",
      password: "",
    },
    validationSchema,
    onSubmit:handleSubmit
  })
  return <>
        <section id="authBanner" className="flex items-center px-5 py-16 justify-center">
      <div className="lg:w-1/3 bg-[#fff] mx-auto rounded py-10 pb-14">
    <img src={logo} width={300} className="mx-auto" alt="" />
    <div className="w-3/4 mx-auto ">
    {errorMsg ?  <p className='bg-red-700 text-center rounded my-1 p-1'>{errorMsg}</p> :null}
    <form action="" className="py-6 flex flex-col" onSubmit={formik.handleSubmit}>

    {formik.touched.firstName && formik.errors.firstName ?   <p className='bg-red-700 text-center rounded my-1 p-1'>{formik.errors.firstName}</p> :null}

    <label htmlFor="firstName" className="text-[--headColor] font-semibold">firstName</label>
    <input value={formik.values.firstName} onChange={formik.handleChange} onBlur={formik.handleBlur} type="text" name="firstName" id="firstName" placeholder="Amany" className="w-full mb-5  border-b-2 border-[#c2c2c2] text-black" />


    {formik.touched.lastName && formik.errors.lastName ?   <p className='bg-red-700 text-center rounded my-1 p-1'>{formik.errors.lastName}</p> :null}

    <label htmlFor="lastName" className="text-[--headColor] font-semibold">lastName</label>
    <input value={formik.values.lastName} onChange={formik.handleChange} onBlur={formik.handleBlur} type="text" name="lastName" id="lastName" placeholder="Ali" className="w-full mb-5  border-b-2 border-[#c2c2c2] text-black" />


    {formik.touched.username && formik.errors.username ?   <p className='bg-red-700 text-center rounded my-1 p-1'>{formik.errors.username}</p> :null}

    <label htmlFor="username" className="text-[--headColor] font-semibold">Username</label>
    <input value={formik.values.username} onChange={formik.handleChange} onBlur={formik.handleBlur} type="text" name="username" id="username" placeholder="Amany Ali" className="w-full mb-5  border-b-2 border-[#c2c2c2] text-black" />

    {formik.touched.email && formik.errors.email ?   <p className='bg-red-700 text-center rounded my-1 p-1'>{formik.errors.email}</p> :null}

    <label htmlFor="email" className="text-[--headColor] font-semibold">E-mail</label>
    <input value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} type="email" name="email" id="email" placeholder="Amany@gmail.com" className="w-full border-b-2 border-[#c2c2c2] text-black my-1" />

    {formik.touched.password && formik.errors.password ?   <p className='bg-red-700 text-center rounded my-1 p-1'>{formik.errors.password}</p> :null}

    <label htmlFor="password" className="text-[--headColor] font-semibold">Password</label>
    <input value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} type="password" name="password" id="password" placeholder="****" className="w-full border-b-2 border-[#c2c2c2] text-black my-1" />
  {loading ?  <button className="bg-[--hevColor] text-[#fff] w-full py-2 mt-5 block mx-auto rounded-2xl shadow-2xl" disabled><ClipLoader size={22} color="#36d7b7" /></button>
:    <button type='submit' className="bg-[--hevColor] text-[#fff] w-full py-2 mt-5 block mx-auto rounded-2xl shadow-2xl">Sign in</button>
}
    </form>
  
    </div>
      </div>
    
    </section>
  
  </>
}
