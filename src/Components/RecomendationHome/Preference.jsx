// import { useState } from "react";
// import styles from "../RecomendationHome/Recomendation.module.css";
// import MultiSelectDropdown from "./Recomendation";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// function Preference() {
//   const options1 = ["workstation", "desktop", "gaming"];
//   const options2 = [
//     "design",
//     "engineering",
//     "3d",
//     "modeling",
//     "simulation",
//     "machine learning",
//   ];

//   const [selectedCategories, setSelectedCategories] = useState([]);
//   const [selectedSubCategories, setSelectedSubCategories] = useState([]);
//   const [ssdPreference, setSsdPreference] = useState("");
//   const [casePreference, setCasePreference] = useState("");
//   const [budget, setBudget] = useState("");
//   const [recommendation, setRecommendation] = useState(null);
//   const [allSubcategoriesSelected, setAllSubcategoriesSelected] =
//     useState(false);

//   const navigate = useNavigate();

//   const handleSsdPreferenceChange = (event) => {
//     setSsdPreference(event.target.value);
//   };

//   const handleCasePreferenceChange = (event) => {
//     setCasePreference(event.target.value);
//   };

//   const handleBudgetChange = (event) => {
//     setBudget(event.target.value);
//   };

//   const handleBuildNowClick = async () => {
//     if (
//       selectedCategories.length === 0 ||
//       (selectedSubCategories.length === options2.length &&
//         allSubcategoriesSelected === false) ||
//       ssdPreference === "" ||
//       casePreference === "" ||
//       budget === ""
//     ) {
//       console.log("Please fill in all fields.");
//       return;
//     }

//     const urlbase =
//       "https://recommendation-system-gradproj.onrender.com/recommsys/"; // Replace with actual URL

//     let selectedSubCategoriesString = "";
//     if (allSubcategoriesSelected) {
//       selectedSubCategoriesString = "very capable for all categories";
//     } else {
//       selectedSubCategoriesString = selectedSubCategories.join(",");
//     }

//     const apiUrl = `${urlbase}${selectedCategories.join(
//       ","
//     )} ${selectedSubCategoriesString},${budget},${ssdPreference},${casePreference}`;

//     try {
//       const response = await axios.get(apiUrl);
//       const data = response.data;
//       setRecommendation(data);
//       console.log(data); // Print returned value in the console
//       navigate("/build-table", { state: { data } });
//     } catch (error) {
//       console.error("Error fetching recommendations:", error);
//       setRecommendation("No matches found");
//     }
//   };

//   // Function to handle selecting all subcategories
//   const handleSelectAllSubcategories = () => {
//     setSelectedSubCategories(options2);
//     setAllSubcategoriesSelected(true);
//   };

//   return (
//     <div className={styles.container}>
//       <div className={styles.dropdownContainer}>
//         <MultiSelectDropdown
//           options={options1}
//           label="Select Categories"
//           onChange={setSelectedCategories}
//         />
//         <MultiSelectDropdown
//           options={options2}
//           label="Select SubCategories"
//           onChange={(selected) => {
//             setSelectedSubCategories(selected);
//             setAllSubcategoriesSelected(selected.length === options2.length);
//           }}
//         />
//         <button onClick={handleSelectAllSubcategories}>
//           Select All Subcategories
//         </button>
//       </div>
//       <div className={styles.budgetContainer}>
//         <label>
//           Budget:
//           <input
//             type="number"
//             value={budget}
//             onChange={handleBudgetChange}
//             className={styles.budgetInput}
//           />
//         </label>
//       </div>
//       <div className={styles.preferenceContainer}>
//         <div className={styles.ssdPreference}>
//           <p>Do you prefer to invest in an SSD?</p>
//           <div className={styles.ssdOptions}>
//             <label>
//               <input
//                 type="radio"
//                 name="ssdPreference"
//                 value="yes"
//                 checked={ssdPreference === "yes"}
//                 onChange={handleSsdPreferenceChange}
//               />
//               Yes
//             </label>
//             <label>
//               <input
//                 type="radio"
//                 name="ssdPreference"
//                 value="no"
//                 checked={ssdPreference === "no"}
//                 onChange={handleSsdPreferenceChange}
//               />
//               No
//             </label>
//           </div>
//         </div>
//         <div className={styles.casePreference}>
//           <p>Do you prefer the case to be:</p>
//           <div className={styles.caseOptions}>
//             <label>
//               <input
//                 type="radio"
//                 name="casePreference"
//                 value="tower"
//                 checked={casePreference === "tower"}
//                 onChange={handleCasePreferenceChange}
//               />
//               Tower
//             </label>
//             <label>
//               <input
//                 type="radio"
//                 name="casePreference"
//                 value="mid tower"
//                 checked={casePreference === "mid tower"}
//                 onChange={handleCasePreferenceChange}
//               />
//               Mid Tower
//             </label>
//             <label>
//               <input
//                 type="radio"
//                 name="casePreference"
//                 value="mini tower"
//                 checked={casePreference === "mini tower"}
//                 onChange={handleCasePreferenceChange}
//               />
//               Mini Tower
//             </label>
//           </div>
//         </div>
//       </div>
//       <button
//         onClick={handleBuildNowClick}
//         className="bg-[--mainColor] text-white mx-auto mt-10 px-3 py-2 rounded"
//       >
//         Build Now <i className="fa-solid fa-arrow-right"></i>
//       </button>
//       {recommendation && (
//         <div className="mt-5">
//           <h2 className="text-center">Recommendations:</h2>
//           <div className="text-center">
//             <table className={styles.recommendationTable}>
//               <thead>
//                 <tr>
//                   <th>Category</th>
//                   <th>Item</th>
//                   <th>Price</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {Object.keys(recommendation).map((category, index) => (
//                   <tr key={index}>
//                     <td>{category}</td>
//                     <td>{recommendation[category][0]}</td>
//                     <td>
//                       {recommendation[category][1]
//                         ? `$${recommendation[category][1].toFixed(2)}`
//                         : "N/A"}
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Preference;

import { useState } from "react";
import styles from "../RecomendationHome/Recomendation.module.css";
import MultiSelectDropdown from "./Recomendation";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Preference() {
  const options1 = ["workstation", "desktop", "gaming"];
  const options2 = [
    "design",
    "engineering",
    "3d",
    "modeling",
    "simulation",
    "machine learning",
  ];

  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedSubCategories, setSelectedSubCategories] = useState([]);
  const [ssdPreference, setSsdPreference] = useState("");
  const [casePreference, setCasePreference] = useState("");
  const [budget, setBudget] = useState("");
  const [recommendation, setRecommendation] = useState(null);
  const [allSubcategoriesSelected, setAllSubcategoriesSelected] =
    useState(false);

  const navigate = useNavigate();

  const handleSsdPreferenceChange = (event) => {
    setSsdPreference(event.target.value);
  };

  const handleCasePreferenceChange = (event) => {
    setCasePreference(event.target.value);
  };

  const handleBudgetChange = (event) => {
    setBudget(event.target.value);
  };

  const handleBuildNowClick = async () => {
    if (
      selectedCategories.length === 0 ||
      (selectedSubCategories.length === options2.length &&
        allSubcategoriesSelected === false) ||
      ssdPreference === "" ||
      casePreference === "" ||
      budget === ""
    ) {
      console.log("Please fill in all fields.");
      return;
    }

    const urlbase =
      "https://recommendation-system-gradproj.onrender.com/recommsys/";

    let selectedSubCategoriesString = "";
    if (allSubcategoriesSelected) {
      selectedSubCategoriesString = "very capable for all categories";
    } else {
      selectedSubCategoriesString = selectedSubCategories.join(",");
    }

    const apiUrl = `${urlbase}${selectedCategories.join(
      ","
    )} ${selectedSubCategoriesString},${budget},${ssdPreference},${casePreference}`;

    try {
      const response = await axios.get(apiUrl);
      const data = response.data;
      setRecommendation(data);
      navigate("/build-table-recommendation", { state: { data } });
    } catch (error) {
      console.error("Error fetching recommendations:", error);
      setRecommendation("No matches found");
    }
  };

  const handleSelectAllSubcategories = () => {
    setSelectedSubCategories(options2);
    setAllSubcategoriesSelected(true);
  };

  return (
    <div className={styles.container}>
      <div className={styles.dropdownContainer}>
        <MultiSelectDropdown
          options={options1}
          label="Select Categories"
          onChange={setSelectedCategories}
        />
        <MultiSelectDropdown
          options={options2}
          label="Select SubCategories"
          onChange={(selected) => {
            setSelectedSubCategories(selected);
            setAllSubcategoriesSelected(selected.length === options2.length);
          }}
        />
        {/* <button onClick={handleSelectAllSubcategories}></button> */}
      </div>
      <div className={styles.budgetContainer}>
        <label>
          <input
            type="number"
            value={budget}
            onChange={handleBudgetChange}
            className={styles.budgetInput}
            placeholder="Please Enter Your Budget"
          />
        </label>
      </div>
      <div className={styles.preferenceContainer}>
        <div className={styles.ssdPreference}>
          <p>Do you prefer to invest in an SSD?</p>
          <div className={styles.ssdOptions}>
            <label>
              <input
                type="radio"
                name="ssdPreference"
                value="yes"
                checked={ssdPreference === "yes"}
                onChange={handleSsdPreferenceChange}
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="ssdPreference"
                value="no"
                checked={ssdPreference === "no"}
                onChange={handleSsdPreferenceChange}
              />
              No
            </label>
          </div>
        </div>
        <div className={styles.casePreference}>
          <p>Do you prefer the case to be:</p>
          <div className={styles.caseOptions}>
            <label>
              <input
                type="radio"
                name="casePreference"
                value="tower"
                checked={casePreference === "tower"}
                onChange={handleCasePreferenceChange}
              />
              Tower
            </label>
            <label>
              <input
                type="radio"
                name="casePreference"
                value="mid tower"
                checked={casePreference === "mid tower"}
                onChange={handleCasePreferenceChange}
              />
              Mid Tower
            </label>
            <label>
              <input
                type="radio"
                name="casePreference"
                value="mini tower"
                checked={casePreference === "mini tower"}
                onChange={handleCasePreferenceChange}
              />
              Mini Tower
            </label>
          </div>
        </div>
      </div>
      <button
        onClick={handleBuildNowClick}
        className="bg-[--mainColor] text-white mx-auto mt-10 mb-10 px-3 py-2 rounded"
      >
        Build Now <i className="fa-solid fa-arrow-right"></i>
      </button>
    </div>
  );
}

export default Preference;
