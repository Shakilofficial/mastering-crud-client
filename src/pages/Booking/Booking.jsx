import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Container from "../../components/ui/Container";
import Error from "../../components/ui/Error";
import Header from "../../components/ui/Header";
import Loading from "../../components/ui/Loading";
import useAxios from "../../hooks/useAxios";
import toast from "react-hot-toast";

const Booking = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [timeSlot, setTimeSlot] = useState("");
  const [address, setAddress] = useState("");

  const { id } = useParams();
  const axios = useAxios();

  const {
    data: serviceData,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ["service", id],
    queryFn: async () => {
      const res = await axios.get(`/service/${id}`);
      return res;
    },
  });

  if (isLoading) {
    return <Loading />;
  }

  const service = serviceData.data;

  if (isError) {
    return <Error />;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const bookingData = {
      name,
      email,
      date,
      timeSlot,
      address,
      serviceId: id,
      serviceName: service.name,
      servicePrice: service.price,
    };
    try {
      const res = await axios.post("/user/create-booking", bookingData);
      toast.success("Booking successful!");
      console.log("Booking successful", res.data);
    } catch (error) {
      toast.error("Booking failed. Please try again.");
      console.error("Booking failed", error);
    }
  };

  return (
    <Container className="my-24">
      <Header
        title="Booking Our Services"
        description={`Your selected service: ${service?.name}`}
      />
      <div className="lg:flex justify-center items-center flex-col lg:flex-row space-y-10">
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold">{service?.name}</h1>
            <p className="max-w-[60ch] text-xl mt-5">{service?.description}</p>
            <div className="space-y-4 mt-10">
              {service?.features?.map((feature, index) => (
                <p key={index}>{feature}</p>
              ))}
            </div>
          </div>
          <div>
            <div className="divider max-w-2xl"></div>
            <p className="text-4xl font-semibold">
              {service?.price}
              <span className="text-xs">vat included</span>
            </p>
          </div>
        </div>
        <div className="card w-full max-w-md shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                className="input input-bordered"
                required
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Date</span>
              </label>
              <input
                type="date"
                className="input input-bordered"
                required
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Time Slot</span>
              </label>
              <select
                className="input input-bordered"
                required
                onChange={(e) => setTimeSlot(e.target.value)}
              >
                <option value="">Select a time slot</option>
                <option value="8am - 12pm">8am - 12pm</option>
                <option value="12pm - 6pm">12pm - 6pm</option>
                <option value="6pm - 10pm">6pm - 10pm</option>
              </select>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Address</span>
              </label>
              <textarea
                rows={12}
                className="input input-bordered"
                required
                onChange={(e) => setAddress(e.target.value)}
              ></textarea>
            </div>
            <div className="form-control mt-2">
              <button className="btn btn-primary">Book</button>
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default Booking;
