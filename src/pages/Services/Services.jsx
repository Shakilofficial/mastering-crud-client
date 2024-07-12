import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import ServiceCard from "../../components/ServiceCard";
import Container from "../../components/ui/Container";
import Header from "../../components/ui/Header";
import useAxios from "../../hooks/useAxios";
import { capitalizeWords } from "../../utils/capitalizeWords";

const categories = [
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

const Services = () => {
  const axios = useAxios();

  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");

  const getServices = async () => {
    const res = await axios.get(
      `/services?sortField=price&sortOrder=${price}&category=${category}`
    );
    return res;
  };
  const {
    data: services,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ["service", price, category],
    queryFn: getServices,
  });

  if (isLoading) {
    return (
      <div className="text-green-500 flex justify-center items-center w-3/4 mx-auto">
        <span className="loading loading-bars loading-xs"></span>
        <span className="loading loading-bars loading-sm"></span>
        <span className="loading loading-bars loading-md"></span>
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="text-green-500 flex justify-center items-center w-3/4 mx-auto mt-24">
        <div role="alert" className="alert alert-error">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 shrink-0 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>Error! Task failed successfully.</span>
        </div>
      </div>
    );
  }
  return (
    <div>
      <Container className="mb-64">
        <Header
          title="Services"
          description="We Provide Different Cleaning Services"
        />
        <div className="flex justify-center space-x-4 p-4 bg-green-300 rounded-lg shadow-lg mb-10">
          <div>
            <label
              htmlFor="category"
              className="block text-sm font-medium text-gray-700 pl-2"
            >
              Category
            </label>
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base bg-green-200 border-green-300 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm rounded-md"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {capitalizeWords(cat)}
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
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base bg-green-200 border-gray-300 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm rounded-md"
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services?.data?.result.map((item) => (
            <ServiceCard key={item._id} service={item} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Services;
