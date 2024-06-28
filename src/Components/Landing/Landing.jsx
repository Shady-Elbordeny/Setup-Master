// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import swiper1 from '../../assets/images/swiper1.png'
import swiper2 from '../../assets/images/swiper2.png'
import swiper3 from '../../assets/images/swiper3.png'
import swiper4 from '../../assets/images/swiper4.png'

import { Parallax, Pagination, Navigation,Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Button from '../../shared/Button/Button';

const swiperList = [

  {img:swiper1,ftitle:'Build Your',stitle:'Dream PC',
  underLine:'From Zero',description:'we will help you to build your dream pc from zero based  on your budget , job and your interests with a big collection of popular brands from all around the world if you have some knowledge about PC parts or Not',btn:"Build Now"},

  {img:swiper2,ftitle:'Compare',stitle:'Between',
  underLine:'Differnt Pc Parts', description:'we will help you to build your dream pc from zero based  on your budget , job and your interests with a big collection of popular brands from all around the world if you have some knowledge about PC parts or Not  ',btn:"Compare Now"},

  {img:swiper3},


  {img:swiper4,ftitle:'Search for',stitle:'Different',
  underLine:'Pc Parts',description:'we will help you to build your dream pc from zero based  on your budget , job and your interests with a big collection of popular brands from all around the world if you have some knowledge about PC parts or Not',btn:"Search Now"}


  
]
export default function Landing() {
  return <>

      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
    

        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
    
        navigation={true}
      
        modules={[Parallax, Pagination, Navigation,Autoplay]}
        className="mySwiper h-screen"
      >
        
        {swiperList.map((swip,index)=>     <SwiperSlide key={index} className='text-[#fff] relative after:contents-[" "] after:top-0 after:left-0 after:bg-[#0000007d] after:w-full after:-z-10 after:h-full after:absolute'  style={{backgroundImage:`url(${swip.img})`,backgroundSize:"cover",backgroundPosition:"center center",backgroundRepeat:"no-repeat"}}>
        <div className="container mx-auto flex flex-col justify-center h-[80vh] px-5 md:ps-10 lg:px-16">
          <div className="font-bold text-5xl" data-swiper-parallax="-300">
            <span className='text-[--headColor] font-bold text-5xl' data-swiper-parallax="-300">{swip.ftitle}</span>
            
          <span className='ps-2'>{swip.stitle}</span>
          <div className="font-bold text-5xl" data-swiper-parallax="-300">{swip.underLine}</div>
          </div>

          <div className="mt-4" data-swiper-parallax="-100">
            <p className='md:w-1/2'>
            {swip.description}
            </p>
            <Button text={swip.btn} link={'/'}/>
          </div>
          </div>
        </SwiperSlide>)}
    
      </Swiper>
  </>
}
