import { useState } from "react";
import TableCol from "./TableCol";
import { toast } from "react-toastify";

const tableCol = [
  { title: "Processor", link: "/pc-table", model: "Processor" },
  { title: "Motherboard", link: "/pc-table", model: "Motherboard" },
  { title: "Video Card", link: "/pc-table", model: "GPU" },
  { title: "RAM", link: "/pc-table", model: "RAM" },
  { title: "CPU Cooler", link: "/pc-table", model: "CPUCOOLER" },
  { title: "Case", link: "/pc-table", model: "CASE" },
  { title: "Power Supply", link: "/pc-table", model: "PowerSupply" },
  { title: "HDD Storage", link: "/pc-table", model: "HDD" },
  { title: "SDD Storage", link: "/pc-table", model: "SSD" },
];
export default function BuildTable() {
  return (
    <>
      <table className="w-full   mx-auto my-10">
        <thead className="border-b bg-[#15002A]  text-xs sm:text-sm grid grid-cols-5 md:grid-cols-8">
          <th>Component</th>
          <th>Product</th>
          <th className="col-span-2">Title</th>
          <th>Price</th>
          <th>Product link</th>
          <th>Add</th>
          <th>Remove</th>
        </thead>
        <tbody className="pb-2 text-center py-4 text-sm">
          {tableCol?.map((tr, index) => (
            <tr className="border-b pb-3 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-8 my-10">
              <TableCol
                key={index}
                title={tr.title}
                link={tr.link}
                model={tr.model}
              />
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
