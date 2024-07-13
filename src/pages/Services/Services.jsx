import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import ServiceCard from "../../components/ServiceCard";
import Container from "../../components/ui/Container";
import Error from "../../components/ui/Error";
import Header from "../../components/ui/Header";
import useAxios from "../../hooks/useAxios";
import { capitalizeWords } from "../../utils/capitalizeWords";
import Loading from "../../components/ui/Loading";

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

const Services = () => {
  const axios = useAxios();

  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [page, setPage] = useState(1);

  const limit = 9;

  const getServices = async () => {
    const res = await axios.get(
      `/services?sortField=price&sortOrder=${price}&category=${category}&page=${page}&limit=${limit}`
    );
    return res;
  };
  const {
    data: services,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ["service", price, category, page],
    queryFn: getServices,
  });

  if (isLoading) {
    return <Loading />;
  }
  const handlePrevious = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };
  const handleNext = () => {
    if (page < totalPage) {
      setPage(page + 1);
    }
  };
  const totalPage = Math.ceil(services?.data?.total / limit);

  if (isError) {
    return <Error />;
  }
  return (
    <div>
      <Container className="mb-64">
        <Header
          title="Services"
          description="We Provide Different Types of Services"
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
        <div className="flex justify-center items-center my-12">
          <div className="join border-2 border-green-500">
            <button
              onClick={handlePrevious}
              className="join-item btn btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5 8.25 12l7.5-7.5"
                />
              </svg>
            </button>
            {[...Array(totalPage).fill(0)].map((item, index) => {
              const pageNumber = index + 1;
              return (
                <button
                  key={pageNumber}
                  onClick={() => setPage(pageNumber)}
                  className={`${
                    pageNumber === page
                      ? "join-item btn btn-primary"
                      : "join-item btn btn-ghost"
                  }`}
                >
                  {pageNumber}
                </button>
              );
            })}

            <button onClick={handleNext} className="join-item btn btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Services;
