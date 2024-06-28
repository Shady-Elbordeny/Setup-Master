import DoubleBanner from "../DoubleBanner/DoubleBanner"
import cpu from '../../assets/images/cpu.png'
import intel from '../../assets/images/intel core 1.png'

export default function Comparison() {
  const str1={
    img:cpu,
    ftitle:"Processor",
    stitle:"Compare",
    description:"You can compare between a lot of processors you want with price ,material quality ,performance and a lot of other features",
    button:"Compare Now",
    link: "/compare/Processor"
  }
  const str2={
    img:intel,
    ftitle:"Video Card",
    stitle:"Compare",
    description:"You can compare between a lot of video cards you want with price ,material quality ,performance and a lot of other feature",
    button:"Compare Now",
    link:"/compare/GPU"
  }
  return <>
  <DoubleBanner str1={str1} str2={str2}/>
  </>
}
