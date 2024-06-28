import React from 'react'
import { Link } from 'react-router-dom'

const ListBanner = ({title,list,img=false,icon=false}) => {

  return    <div>
  <h3 className=" font-semibold text-xl">{title}</h3>
  <ul className={`${icon ? 'flex gap-x-5' :""} mt-5`}>
    {img ? list.map((list,index)=> <li className='py-1 w-2/5 ' key={index}><Link className='py-1 text-3xl text-[#ffffffd0] hover:text-[#b227e2]' to={list.link}><img className='w-full' src={list.img} /></Link></li>):
    icon ?list.map((list,index)=> <li className='py-1' key={index}><Link className='py-1 text-3xl text-[#ffffffd0] hover:text-[#b227e2]' to={list.link}><i className={`${list.icon}`}></i></Link></li>)  :
    list.map((list,index)=> <li className='py-1' key={index}><Link className='py-1 text-sm text-[#ffffffd0] hover:text-[#b227e2]' to={list.link}>{list.title}</Link></li>)}
  </ul>
</div> 

}

export default ListBanner