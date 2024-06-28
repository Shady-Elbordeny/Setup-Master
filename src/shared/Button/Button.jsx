import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({text,link}) => {
  return (
    <button className=' bg-[--mainColor] px-4 font-medium py-2 rounded  mt-9'><Link to={link}>{text}<i className="fa-solid fa-arrow-right text-sm ps-2"></i></Link></button>
  )
}

export default Button