import { useFormik } from 'formik';
import logo from '../../assets/images/LOGO 1.png'
import { Link, useNavigate } from "react-router-dom";
import * as Yup from 'yup'
import axios from 'axios';
import { useContext, useState } from 'react';
import { TokenContext } from './../../Context/Token';
export default function Login() {
  const {setToken} = useContext(TokenContext)
  const navigate = useNavigate()
  const [errorMsg,setErrorMsg] = useState(null)
  async function handleSubmit(values) {
  const response = await axios.post(`http://setupmaster.runasp.net/api/Auth/login`,values)
    .then((res)=> {if(res.data?.token){
      setToken(res.data.token)
      localStorage.setItem('token', res.data.token)
      navigate('/')
    }
    console.log('res',res)})
    .catch((err)=> {setErrorMsg(err.response.data)})
  
  return response
  }

  const validationSchema = Yup.object({
    email: Yup.string()
     .email('Invalid email')
     .required('Email is required'),
    password: Yup.string()
     .min(6, 'Password must be at least 6 characters')
     .required('Password is required'),
  })
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit:handleSubmit
  })
  return <>
      <section id="authBanner" className="flex py-16 px-5 justify-center">
      <div className="lg:w-1/3 bg-[#fff] mx-auto rounded py-10 pb-14">
    <img src={logo} width={300} className="mx-auto mb-3" alt="logo" />


    <div className="w-3/4 mx-auto ">
    {errorMsg ?  <p className='bg-red-700 text-center rounded my-1 p-1'>{errorMsg}</p> :null}

    <form action="" className="py-6 flex  flex-col" onSubmit={formik.handleSubmit}>
    {formik.touched.email && formik.errors.email ?   <p className='bg-red-700 text-center rounded my-1 p-1'>{formik.errors.email}</p> :null}

    
    <label htmlFor="email" className="text-[--headColor] font-semibold">email</label>
    <input type="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} name="email" id="email" placeholder="Amany" className="w-full mb-5  border-b-2 border-[#c2c2c2] text-black" />
    {formik.touched.password && formik.errors.password ?   <p className='bg-red-700 text-center rounded my-1 p-1'>{formik.errors.password}</p> :null}

    <label htmlFor="password" className="text-[--headColor] font-semibold">Password</label>
    <input type="password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} name="password" id="password" placeholder="****" className="w-full border-b-2 border-[#c2c2c2] my-1 text-black" />
    <button type='submit' className="bg-[--hevColor] text-[#fff] w-full py-2 mt-5 block mx-auto rounded-2xl shadow-2xl">Sign in</button>
    </form>


   <div className="flex justify-between items-center">
      <p className="text-sm">You don`t have account?</p>
      <Link className="text-[--mainColor] font-bold"  to='/register'>SignUp</Link>
    </div>
  
    </div>
      </div>
    
    </section>


  </>
}
