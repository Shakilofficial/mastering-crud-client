import { useQuery } from "@tanstack/react-query";

import ServiceCard from "../../components/ServiceCard";
import Container from "../../components/ui/Container";
import Header from "../../components/ui/Header";
import useAxios from "../../hooks/useAxios";

const Services = () => {
  const axios = useAxios();
  const getServices = async () => {
    const res = await axios.get("/services");
    return res;
  };
  const {
    data: services,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ["service"],
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
      <div className="text-green-500 flex justify-center items-center w-3/4 mx-auto">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services?.data?.map((item) => (
            <ServiceCard key={item._id} service={item} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Services;
