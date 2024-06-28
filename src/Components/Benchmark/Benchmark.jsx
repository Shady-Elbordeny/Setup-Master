// import styles from "./Benchmark.module.css";
// import CPU from "../../assets/images/CPU1.png";
// import board from "../../assets/images/motherboard.png";
// import memory from "../../assets/images/memory.png";
// import Video from "../../assets/images/Video-Card.png";
// import PowerSupply from "../../assets/images/Power-Supply.png";
// import myCase from "../../assets/images/Case.png";
// import Hdd from "../../assets/images/Hdd-Storage.png";
// import ssd from "../../assets/images/Ssd-Storage.png";
// import cooler from "../../assets/images/CPU-Cooler.png";
// function MainComponents() {
//   return (
//     <>
//       <div className={styles.mainComponentContainer}>
//         <h4>The Pc basic components you can search for</h4>
//         <div className={styles.ComponentsContainer}>
//           <div className={styles.firstRowOfComponents}>
//             <div className={styles.componentItem}>
//               <img src={CPU} alt="" />
//               <p>CPU</p>
//             </div>
//             <div className={styles.componentItem}>
//               <img src={board} alt="" />
//               <p>Motherboard</p>
//             </div>
//             <div className={styles.componentItem}>
//               <img src={memory} alt="" />
//               <p>Memory</p>
//             </div>
//           </div>
//           <div className={styles.secondRowOfComponents}>
//             <div className={styles.componentItem}>
//               <img src={Video} alt="" />
//               <p>Video Card</p>
//             </div>
//             <div className={styles.componentItem}>
//               <img src={PowerSupply} alt="" />
//               <p>Power Supply</p>
//             </div>
//             <div className={styles.componentItem}>
//               <img src={myCase} alt="" />
//               <p>Case</p>
//             </div>
//           </div>
//           <div className={styles.thirdRowOfComponents}>
//             <div className={styles.componentItem}>
//               <img src={Hdd} alt="" />
//               <p>Hdd Storage</p>
//             </div>
//             <div className={styles.componentItem}>
//               <img src={ssd} alt="" />
//               <p>Ssd Storage</p>
//             </div>
//             <div className={styles.componentItem}>
//               <img src={cooler} alt="" />
//               <p>CPU Cooler</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default MainComponents;

import React from "react";
import { Link } from "react-router-dom";
import styles from "./Benchmark.module.css";
import CPU from "../../assets/images/CPU1.png";
import board from "../../assets/images/motherboard.png";
import memory from "../../assets/images/memory.png";
import Video from "../../assets/images/Video-Card.png";
import PowerSupply from "../../assets/images/Power-Supply.png";
import myCase from "../../assets/images/Case.png";
import Hdd from "../../assets/images/Hdd-Storage.png";
import ssd from "../../assets/images/Ssd-Storage.png";
import cooler from "../../assets/images/CPU-Cooler.png";

function MainComponents() {
  return (
    <>
      <div className={styles.mainComponentContainer}>
        <h4>The PC basic components you can search for</h4>
        <div className={styles.ComponentsContainer}>
          <div className={styles.firstRowOfComponents}>
            <div className={styles.componentItem}>
              <Link to={`/pc-table/Processor`}>
                <img src={CPU} alt="CPU" />
                <p>CPU</p>
              </Link>
            </div>
            <div className={styles.componentItem}>
              <Link to={`/pc-table/Motherboard`}>
                <img src={board} alt="Motherboard" />
                <p>Motherboard</p>
              </Link>
            </div>
            <div className={styles.componentItem}>
              <Link to={`/pc-table/RAM`}>
                <img src={memory} alt="Memory" />
                <p>Memory</p>
              </Link>
            </div>
          </div>
          <div className={styles.secondRowOfComponents}>
            <div className={styles.componentItem}>
              <Link to={`/pc-table/GPU`}>
                <img src={Video} alt="Video Card" />
                <p>Video Card</p>
              </Link>
            </div>
            <div className={styles.componentItem}>
              <Link to={`/pc-table/PowerSupply`}>
                <img src={PowerSupply} alt="Power Supply" />
                <p>Power Supply</p>
              </Link>
            </div>
            <div className={styles.componentItem}>
              <Link to={`/pc-table/CASE`}>
                <img src={myCase} alt="Case" />
                <p>Case</p>
              </Link>
            </div>
          </div>
          <div className={styles.thirdRowOfComponents}>
            <div className={styles.componentItem}>
              <Link to={`/pc-table/HDD`}>
                <img src={Hdd} alt="Hdd Storage" />
                <p>Hdd Storage</p>
              </Link>
            </div>
            <div className={styles.componentItem}>
              <Link to={`/pc-table/SSD`}>
                <img src={ssd} alt="Ssd Storage" />
                <p>Ssd Storage</p>
              </Link>
            </div>
            <div className={styles.componentItem}>
              <Link to={`/pc-table/CPUCOOLER`}>
                <img src={cooler} alt="CPU Cooler" />
                <p>CPU Cooler</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainComponents;
