import { useState } from "react";

const categories = [
  "All",
  "Hosting",
  "Marketing",
  "Design",
  "Development",
  "Photography",
  "Video",
  "Writing",
  "Support",
];

const sortOptions = [
  { label: "Price: Low to High", value: "asc" },
  { label: "Price: High to Low", value: "desc" },
];

const FilteringDropdown = ({ onFilterChange, onSortChange }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedSort, setSelectedSort] = useState("asc");

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setSelectedCategory(category);
    onFilterChange(category);
  };

  const handleSortChange = (e) => {
    const sort = e.target.value;
    setSelectedSort(sort);
    onSortChange(sort);
  };

  return (
    <div className="flex justify-center space-x-4 p-4 bg-gray-100 rounded-lg shadow-lg">
      <div>
        <label
          htmlFor="category"
          className="block text-sm font-medium text-gray-700"
        >
          Category
        </label>
        <select
          id="category"
          value={selectedCategory}
          onChange={handleCategoryChange}
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label
          htmlFor="sort"
          className="block text-sm font-medium text-gray-700"
        >
          Sort by Price
        </label>
        <select
          id="sort"
          value={selectedSort}
          onChange={handleSortChange}
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        >
          {sortOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default FilteringDropdown;
