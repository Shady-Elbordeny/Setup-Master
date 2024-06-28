import React, { useEffect, useState } from 'react'
import caseImg from '../../assets/images/case 1.png'
import cpuImg from '../../assets/images/cpu cooler 1.png'
import ssd from '../../assets/images/ssd 1.png'
import hdd from '../../assets/images/hdd 1.png'
import processor from '../../assets/images/processor.png'
import ram from '../../assets/images/ram 1.png'
import powerSupply from '../../assets/images/power supply 1.png'
import CpuCooler from '../../assets/images/cpu cooler 1.png'
import motherboard from '../../assets/images/motherboard 1.png'

import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { RiseLoader } from 'react-spinners'
const ProductBanner = (props) => {
const {productPage,threads,cores,
  baseClock,socket,
  turboClock,price,imgModel,name
  ,boostClock,vRam,memoryClock,
  tdp,producerName,
  formFactor,protocol,
  size,rpm,
  ramType,clock,sticks,
  chipSet,memoryType,memoryCapacity,wifi


} = props

console.log('imgModel',name)
const handleRow = (imgModel == "GPU")
const [loading,setLoading] = useState(false)
const notify = () => toast.success("Product Added Successfully",{autoClose:1500});






useEffect(()=>{
if(loading){
  setTimeout(()=>{
    setLoading(false)
  },2000)
}
},[loading])
  return   <>

   <td>

       {imgModel === "GPU"?     <img src={cpuImg} alt={name} className='w-full h-32 rounded'/>
      : imgModel === "Processor" ?   <img src={processor} alt={name} className='w-full h-32 rounded'/>
      : imgModel === "SSD" ?   <img src={ssd} alt={name} className='w-full h-32 rounded'/>
      : imgModel === "HDD" ?   <img src={hdd} alt={name} className='w-full h-32 rounded'/>
      : imgModel === "CASE" ?   <img src={caseImg} alt={name} className='w-full h-32 rounded'/>
      : imgModel === "RAM" ?   <img src={ram} alt={name} className='w-full h-32 rounded'/>
      : imgModel === "PowerSupply" ?   <img src={powerSupply} alt={name} className='w-full h-32 rounded'/>
      : imgModel === "CpuCooler" ?   <img src={CpuCooler} alt={name} className='w-full h-32 rounded'/>
      : imgModel === "Motherboard" ?   <img src={motherboard} alt={name} className='w-full h-32 rounded'/>
      : ""}
  
  </td>
  <td className="px-2 text-left  sm:col-span-2 md:col-span-2 lg:col-span-2">
    <h4 className='font-bold mb-5 tracking-wider text-center md:text-left'>{name}</h4>
    <div className="grid grid-cols-2 px-2">
      <div className="flex flex-col ">
        {imgModel === "GPU" ? <>
          <p>Boost Clock : <span>{boostClock}</span></p>
        <p>vRam : <span>{vRam}</span></p>
        <p>Memory Clock : <span>{memoryClock}</span></p>
        </> : imgModel == 'Processor' ? <>
        <p>Threads : <span>{threads}</span></p>
        <p>Cores : <span>{cores}</span></p>
        <p>Base Speed : <span>{baseClock}</span></p>
        </> : imgModel == 'SSD' ? <>
        <p>FormFactor : <span>{formFactor}</span></p>
        <p>Protocol : <span>{protocol}</span></p>
        
        </> : imgModel == 'HDD' ? <>
        <p>Size : <span>{size}</span></p>
     </>: imgModel == 'RAM' ? <>
        <p>RamType : <span>{ramType}</span></p>
        <p>Clock : <span>{clock}</span></p>
     </>: imgModel == 'Motherboard' ? <>
          <p>Socket : <span>{socket}</span></p>
          <p>FormFactor : <span>{formFactor}</span></p>
          <p>ChipSet : <span>{chipSet}</span></p>
        </>
     : ""}
  
      </div>
      <div className="flex flex-col">
          {imgModel === "GPU" ? <>
            <p>producerName : <span>{producerName}</span></p>
          </>:  imgModel  === 'Processor' ? <>
        
            <p>tdp : <span>{tdp}</span></p>
            <p>Socket Type : <span>{socket}</span></p>
            <p>Turbo Speed : <span>{turboClock}</span></p>
          
        
          </> : imgModel  == 'SSD' ?<>
          <p>Size : <span>{size}</span></p>
          </>  : imgModel == 'HDD' ? <>
          <p>rpm : <span>{rpm}</span></p>
          </>  : imgModel == 'RAM' ? <>
          <p>Sticks : <span>{sticks}</span></p>
          </> : imgModel == 'Motherboard' ? <>
          <p>MemoryType : <span>{memoryType}</span></p>
          <p>MemoryCapacity : <span>{memoryCapacity}</span></p>
          <p>Wifi : <span>{wifi}</span></p>
        

          </> 
          
          :""}
      </div>
    

    </div>
  </td>
  <td className='font-bold md:col-span-1 my-2 sm:flex justify-center items-center lg:col-span-1 '>{price}$</td>

  <td className="flex flex-col sm:col-span-2 md:col-span-4 lg:col-span-1">
    <Link className='bg-[--hevColor] rounded py-2 my-1' to={`${productPage}`}><button>View On Amazon</button></Link>
    <Link className='bg-[#6563FF] rounded py-2 my-1' to={`${productPage}`}><button >View On Sigma</button></Link>
    <Link className='bg-[#F4DF08] rounded py-2 my-1' to={`${productPage}`}><button  >View On Noon</button></Link>


  
  </td>

        
  <td className='sm:flex justify-center items-center align-middle sm:col-span-3 md:col-span-4 my-3 lg:col-span-1'>
    {loading ? <RiseLoader color="#36d7b7" /> :  <button onClick={()=> {setLoading(true);localStorage.setItem(imgModel,JSON.stringify(props));notify()}} className="bg-red-400 px-2 rounded text-2xl">+</button>}
  
  </td> 
  </>

}

export default ProductBanner