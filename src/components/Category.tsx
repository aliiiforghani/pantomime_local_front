"use client";
import { useEffect, useState } from "react";

const Category = () => {
  const [category, setCategory] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:2000/category/all");
        const { data } = await res.json();
        setCategoryata(data.category);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <select
      id="countries"
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    >
      {category.map((c) => (
        <option key={c._id} value={c._id}>
          {c.title}
        </option>
      ))}
    </select>
  );
};

export default Category;
