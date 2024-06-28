// import { useState, useRef, useEffect } from "react";
// import styles from "./Recomendation.module.css";

// const MultiSelectDropdown = ({ options, label }) => {
//   const [selectedOptions, setSelectedOptions] = useState([]);
//   const [isOpen, setIsOpen] = useState(false);
//   const dropdownRef = useRef(null);

//   const handleCheckboxChange = (event) => {
//     const { value, checked } = event.target;
//     if (checked) {
//       setSelectedOptions([...selectedOptions, value]);
//     } else {
//       setSelectedOptions(selectedOptions.filter((option) => option !== value));
//     }
//   };

//   const handleButtonClick = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleOutsideClick = (event) => {
//     if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//       setIsOpen(false);
//     }
//   };
//   useEffect(() => {
//     document.addEventListener("mousedown", handleOutsideClick);
//     return () => {
//       document.removeEventListener("mousedown", handleOutsideClick);
//     };
//   }, []);
//   return (
//     <div className="dropdown" ref={dropdownRef}>
//       <button onClick={handleButtonClick} className={styles.dropdownButton}>
//         {label}
//       </button>
//       {isOpen && (
//         <div className={styles.dropdownContent}>
//           {options.map((option) => (
//             <label key={option}>
//               <input
//                 type="checkbox"
//                 value={option}
//                 checked={selectedOptions.includes(option)}
//                 onChange={handleCheckboxChange}
//               />
//               {option}
//             </label>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default MultiSelectDropdown;
import { useState, useRef, useEffect } from "react";
import styles from "./Recomendation.module.css";

const MultiSelectDropdown = ({ options, label, onChange }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    const newSelectedOptions = checked
      ? [...selectedOptions, value]
      : selectedOptions.filter((option) => option !== value);
    setSelectedOptions(newSelectedOptions);
    onChange(newSelectedOptions);
  };

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOutsideClick = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div className="dropdown" ref={dropdownRef}>
      <button onClick={handleButtonClick} className={styles.dropdownButton}>
        {label}
      </button>
      {isOpen && (
        <div className={styles.dropdownContent}>
          {options.map((option) => (
            <label key={option}>
              <input
                type="checkbox"
                value={option}
                checked={selectedOptions.includes(option)}
                onChange={handleCheckboxChange}
              />
              {option}
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default MultiSelectDropdown;
