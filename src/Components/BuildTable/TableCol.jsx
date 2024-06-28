import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductBanner from "../BuildPCTable/ProductBanner";
import { toast } from "react-toastify";

const TableCol = ({ title, link, model }) => {
  const items = JSON.parse(localStorage.getItem(model));
  const [loading, setLoading] = useState(false);
  const notify = () =>
    toast.warn("Product Removed Successfully", { autoClose: 1500 });

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  }, [loading]);
  return (
    <>
      <td className="font-bold text-lg ">{title}</td>
      {items ? (
        <>
          <ProductBanner {...items} />
          <td className="sm:flex justify-center items-center align-middle sm:col-span-3 md:col-span-4 my-3 lg:col-span-1">
            {loading ? (
              <RiseLoader color="#36d7b7" />
            ) : (
              <button
                onClick={() => {
                  setLoading(true);
                  localStorage.removeItem(model);
                  notify();
                }}
                className="bg-red-400 px-2 rounded text-2xl"
              >
                -
              </button>
            )}
          </td>
        </>
      ) : (
        <>
          <td className="mb-2">
            <Link to={`${link}/${model}`}>
              <button className="bg-[--hevColor]  py-1 px-2 rounded font-semibold">
                + Add Component
              </button>
            </Link>
          </td>
        </>
      )}
    </>
  );
};

export default TableCol;
