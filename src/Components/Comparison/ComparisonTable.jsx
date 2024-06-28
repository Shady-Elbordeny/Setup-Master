import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import cpuImg from "../../assets/images/cpu cooler 1.png";

import processor from "../../assets/images/processor.png";

const ComparisonTable = () => {
  let navigate = useNavigate();
  const { model } = useParams();

  const [item1, setitem1] = useState(
    JSON.parse(localStorage.getItem(`${model}1`))
  );
  const [item2, setitem2] = useState(
    JSON.parse(localStorage.getItem(`${model}2`))
  );

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex gap-5  justify-center items-center  p-0 rounded-lg">
        {/* AMD Ryzen Card */}
        {item1 !== null ? (
          <div className="flex-1 bg-gray-800 text-white rounded-lg  p-10  m-2 relative flex flex-col justify-content-center items-center">
            {model === "GPU" ? (
              <img
                src={cpuImg}
                alt={name}
                className="mb-4 w-64 h-64 object-contain rounded"
              />
            ) : (
              <img
                src={processor}
                alt={name}
                className="mb-4 w-64 h-64 object-contain rounded"
              />
            )}
            <h2 className="text-center text-xl font-semibold">{item1?.name}</h2>
            {model === "GPU" ? (
              <div className="text-center mt-4">
                <p className="font-bold">Technical Details</p>
                <hr className="mb-2" />
                <div className="mt-2">
                  <p className="font-semibold">
                    memory Clock: {item1?.memoryClock}
                  </p>
                  <p className="font-semibold">tdp: {item1?.tdp}</p>
                  <p className="font-semibold">vRam: {item1?.vRam}</p>
                  <p className="font-semibold"> price: {item1?.price}$</p>
                </div>
              </div>
            ) : (
              <div className="text-center mt-4">
                <p className="font-bold">Technical Details</p>
                <hr className="mb-2" />
                <p className="font-semibold">
                  integerated GPU:{" "}
                  {item1?.integeratedGPU === "FALSE" ? (
                    <i className="fa fa-xmark text-red-600 fa-x ms-2 "></i>
                  ) : (
                    <i className="fa fa-check text-green-600 fa-xl ms-2"></i>
                  )}
                </p>
                <div className="mt-2">
                  <p className="font-semibold">
                    Base Clock: {item1?.baseClock}
                  </p>
                  <p className="font-semibold">Cores: {item1?.cores}</p>
                  <p className="font-semibold">socket: {item1?.socket}</p>
                  <p className="font-semibold">tdp: {item1?.tdp}</p>

                  <p className="font-semibold"> price: {item1?.price}$</p>
                </div>
              </div>
            )}
            <Link
              className="bg-blue-600 px-10  rounded py-2 my-2"
              to={`${item1?.productPage}`}
              target="_blank"
            >
              <button>View</button>
            </Link>

            <button
              className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded-full w-8 h-8 hover:bg-red-700 transition duration-300"
              onClick={() => {
                localStorage.removeItem(`${model}1`);
                setitem1(null);
              }}
            >
              <i className="fa fa-xmark text-white"> </i>
            </button>
          </div>
        ) : (
          <div className="flex-1  flex  justify-center items-center   text-white rounded-lg p-6 m-2 px-20 border-[--mainColor] border-4 border-gray-800 rounded-6">
            <div
              className="border-[--mainColor] border-4 border-gray-800 rounded-full flex  justify-center items-center  border w-24 h-24  circle fa-3x cursor-pointer hover:border-[--hevColor] group   transition duration-300 m-5"
              onClick={() => navigate(`/pc-table/${model}/compare/1`)}
            >
              <i className="fa fa-plus text-[--mainColor] transition duration-300  group-hover:text-[--hevColor]"></i>
            </div>
          </div>
        )}

        {/* VS Divider */}
        <div className="flex items-center  border w-24 h-24  circle rounded-full  flex  justify-center items-center ">
          <h2 className="text-white text-3xl font-bold">VS</h2>
        </div>

        {/* Intel Core Card */}
        {/* AMD Ryzen Card */}
        {item2 ? (
          <div className="flex-1 bg-gray-800 text-white rounded-lg flex flex-col justify-content-center items-center p-10 m-2 relative">
            {model === "GPU" ? (
              <img
                src={cpuImg}
                alt={name}
                className="mb-4 w-64 h-64 object-contain rounded"
              />
            ) : (
              <img
                src={processor}
                alt={name}
                className="mb-4 w-64 h-64 object-contain rounded"
              />
            )}
            <h2 className="text-center text-xl font-semibold">{item2?.name}</h2>
            <div className="text-center mt-4">
              <p>Technical Details</p>
              {model === "GPU" ? (
                <div className="mt-2">
                  <p>memory Clock: {item2?.memoryClock}</p>
                  <p>tdp: {item2?.tdp}</p>
                  <p>vRam: {item2?.vRam}</p>
                  <p> price: {item2?.price}$</p>
                </div>
              ) : (
                <div className="text-center mt-4">
                  <p className="font-bold">Technical Details</p>
                  <hr className="mb-2" />
                  <p className="font-semibold">
                    integerated GPU:{" "}
                    {item2?.integeratedGPU === "FALSE" ? (
                      <i className="fa fa-xmark text-red-600 fa-x ms-2 "></i>
                    ) : (
                      <i className="fa fa-check text-green-600 fa-xl ms-2"></i>
                    )}
                  </p>
                  <div className="mt-2">
                    <p className="font-semibold">
                      Base Clock: {item2?.baseClock}
                    </p>
                    <p className="font-semibold">Cores: {item2?.cores}</p>
                    <p className="font-semibold">socket: {item2?.socket}</p>
                    <p className="font-semibold">tdp: {item2?.tdp}</p>

                    <p className="font-semibold"> price: {item2?.price}$</p>
                  </div>
                </div>
              )}
            </div>
            <Link
              className="bg-blue-600 px-10  rounded py-2 my-2"
              to={`${item2?.productPage}`}
              target="_blank"
            >
              <button>View</button>
            </Link>

            <button
              className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded-full w-8 h-8 hover:bg-red-700 transition duration-300"
              onClick={() => {
                localStorage.removeItem(`${model}2`);
                setitem2(null);
              }}
            >
              <i className="fa fa-xmark text-white"> </i>
            </button>
          </div>
        ) : (
          <div className="flex-1  flex  justify-center items-center   text-white rounded-lg p-6 m-2 px-20 border-[--mainColor] border-4 border-gray-800 rounded-6">
            <div
              className="border-[--mainColor] border-4 border-gray-800 rounded-full flex  justify-center items-center  border w-24 h-24  circle fa-3x cursor-pointer hover:border-[--hevColor] group   transition duration-300 m-5"
              onClick={() => navigate(`/pc-table/${model}/compare/2`)}
            >
              <i className="fa fa-plus text-[--mainColor] transition duration-300  group-hover:text-[--hevColor]"></i>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ComparisonTable;
