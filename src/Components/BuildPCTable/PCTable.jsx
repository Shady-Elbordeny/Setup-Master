import React, { useState } from "react";
import { useQuery } from "react-query";
import ProductBanner from "./ProductBanner";
import axios from "axios";
import { HashLoader } from "react-spinners";
import { useParams } from "react-router-dom";

function PCTable() {
  const { model = "Processor" } = useParams();
  const [searchQuery, setSearchQuery] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const [pageSize] = useState(10); // You can adjust the page size as needed

  const fetchProducts = async ({ queryKey }) => {
    const [_key, { searchQuery, pageNumber, pageSize }] = queryKey;
    const url = searchQuery
      ? `http://setupmaster.runasp.net/api/Processor/search`
      : `http://setupmaster.runasp.net/api/${model}`;
    const params = { searchQuery, pageNumber, pageSize };
    const response = await axios.get(url, { params });
    return response.data;
  };

  const { data, isLoading, error } = useQuery(
    ["products", { searchQuery, pageNumber, pageSize }],
    fetchProducts,
    {
      keepPreviousData: true,
    }
  );

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      setPageNumber(1); // Reset to the first page on a new search
    }
  };

  const handlePageChange = (newPage) => {
    setPageNumber(newPage);
  };

  if (error) {
    return <div>Error loading data...</div>;
  }

  return (
    <section className="py-10">
      <input
        type="search"
        className="w-1/2 py-2 rounded block mx-auto px-2 text-black"
        placeholder="Search ..."
        value={searchQuery}
        onChange={handleSearchChange}
        onKeyPress={handleKeyPress}
      />

      <table className="w-[90%] rounded mx-auto my-10 px-5 text-center">
        <thead className="border-b bg-[#15002A] py-3 grid grid-cols-5 md:grid-cols-6 text-xs sm:text-sm lg:text-lg">
          <tr>
            <th>Product</th>
            <th className="md:col-span-2">Title</th>
            <th>Price</th>
            <th>Product link</th>
            <th>Add Product</th>
          </tr>
        </thead>
        <tbody className="mx-auto">
          {isLoading ? (
            <div className="bg-[#00000096] h-screen absolute top-0 left-0 w-full flex justify-center items-center">
              <HashLoader color="#9D22CA" size={200} />
            </div>
          ) : (
            data?.items?.map((item, index) => (
              <tr
                className="py-3 border-b grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 mx-auto my-5"
                key={index}
              >
                <ProductBanner imgModel={model} {...item} />
              </tr>
            ))
          )}
        </tbody>
      </table>

      {/* Pagination Controls */}
      {data && data.totalPages > 1 && (
        <div className="flex justify-center mt-4">
          <button
            className="px-4 py-2 mx-2 bg-[#9D22CA] rounded"
            disabled={pageNumber === 1}
            onClick={() => handlePageChange(pageNumber - 1)}
          >
            Previous
          </button>
          <span className="px-4 py-2">{`Page ${pageNumber} of ${data.totalPages}`}</span>
          <button
            className="px-4 py-2 mx-2 bg-[#9D22CA] rounded"
            disabled={pageNumber === data.totalPages}
            onClick={() => handlePageChange(pageNumber + 1)}
          >
            Next
          </button>
        </div>
      )}
    </section>
  );
}

export default PCTable;
