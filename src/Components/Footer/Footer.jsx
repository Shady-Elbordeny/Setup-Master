import { Link } from 'react-router-dom'
import logo from '../../assets/images/LOGO 1.png'
import googlePlay from '../../assets/images/googleplay.png'
import appStore from '../../assets/images/appStore.png'
import ListBanner from './ListBanner'
const aboutList = [
  {title:"Home",link:"/"},
  {title:"Build Pc",link:"/buildpc"},
  {title:"Benchmark",link:"/benchmark"},
  {title:"Comparison",link:"/comparison"},
  {title:"Contact Us",link:"/contact"},
]
const languages = [
  {title:"English",link:"#"},
  {title:"Arabic",link:"#"},
]

const social = [
  {icon:"fa-brands fa-facebook",link:"#"},
  {icon:"fa-brands fa-instagram",link:"#"},
  {icon:"fa-brands fa-linkedin",link:"#"},
]

const app = [
  {img:googlePlay,link:"#"},
  {img:appStore,link:"#"},

]

export default function Footer() {
  return <>
  <footer className='bg-[--subColor] text-[#fff] px-5'>
    <div className="container mx-auto">


    <img src={logo} width={300} alt="" />

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-5 gap-x-3">
      
    <ListBanner title={"About The Site"} list={aboutList}/>

    <ListBanner title={"Language"} list={languages}/>

    <ListBanner title={"Get In Touch"} list={social} icon={true}/>

    <ListBanner title={"Download our mobile App"} list={app} img={true}/>

    </div>
    </div>
  </footer>
  </>
}
