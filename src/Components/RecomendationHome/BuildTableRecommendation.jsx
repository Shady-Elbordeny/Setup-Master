import React from "react";
import { useLocation } from "react-router-dom";
import styles from "../BuildTable/BuildRecomendatoin.module.css";

const BuildTableRecommendation = () => {
  const location = useLocation();
  const { data } = location.state;

  return (
    <div className={styles.recomendationbuildcontainer}>
      <h2>Recommendations:</h2>
      <table>
        <thead>
          <tr>
            <th>Category</th>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            Object.keys(data).map((category, index) => (
              <tr key={index}>
                <td>{category}</td>
                <td>{data[category][0]}</td>
                <td>{`$${data[category][1].toFixed(2)}`}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default BuildTableRecommendation;
