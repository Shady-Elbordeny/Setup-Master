import contact from '../../assets/images/work-with-the-best 1.png'
import Button from './../../shared/Button/Button';
export default function Contact() {
  return <>
  <div className='grid grid-cols-2 md:grid-cols-2 bg-[--subColor] mt-7 min-h-screen'>
    <div style={{backgroundImage:`url(${contact})`,height:"100vh",backgroundSize:"cover",backgroundPosition:"center center", backgroundRepeat:"no-repeat"}} className='w-full'>
    </div>

    <form action=""className='p-7'>
      <label htmlFor="name" className='font-semibold'>Name</label>
      <input type="text" className='w-full mt-4 rounded py-2  mb-10' name="name" id="name" />


      <label htmlFor="email" className='font-semibold'>Email</label>
      <input type="email" className='w-full mt-4  mb-10 rounded py-2' name="email" id="email" />

      <label htmlFor="message" className='font-semibold'>Message</label>
      <textarea name="message" className='w-full rounded min-h-[100px] max-h-[150px] mt-3' id="message"></textarea>
      <div className='flex justify-end'>
        <Button text={"Send"}/>
      </div>
    </form>

  </div>



  
  </>
}
