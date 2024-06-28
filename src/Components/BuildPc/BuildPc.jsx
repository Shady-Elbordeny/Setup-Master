import DoubleBanner from "../DoubleBanner/DoubleBanner";
import cpu from '../../assets/images/cpu.png'
import intel from '../../assets/images/intel core 1.png'

export default function BuildPc() {
  
  const str1={
    img:cpu,
    ftitle:"Do You Need",
    stitle:"Our Help?",
    description:"You can use our recommendation system to Build Your own PC Based On Your business and your budget  If You Don’t Anything About pc parts",
    button:"Build Now",
    link:"/recomendation"
  }
  const str2={
    img:intel,
    ftitle:"Build Your Dream",
    stitle:"Pc on Your Own",
    description:" You will Do everything on your own without A help Of our recommendation System and you can use our filters By budget And collect your dream Pc",
    button:"Build Now",
    link:'/build-table'
  }
  return <>
  <DoubleBanner str1={str1} str2={str2}/>
  </>
}
