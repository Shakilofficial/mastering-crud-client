import { useQuery } from "@tanstack/react-query";

import { auth } from "../../config/firebase.config";

import useAxios from "../../hooks/useAxios";
import Loading from "../../components/ui/Loading";
import Error from "../../components/ui/Error";
import Container from "../../components/ui/Container";
import Header from "../../components/ui/Header";
import { Link } from "react-router-dom";
const TrackOrder = () => {
  const axios = useAxios();
  const {
    data: bookings,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["booking"],
    queryFn: async () => {
      const email = auth.currentUser.email;
      console.log(email);
      const res = await axios.get(`/user/bookings/?email=${email}`);
      return res.data;
    },
  });
  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <Error />;
  }
  return (
    <div>
      <Container className="my-12">
        <Header
          title="Your Bookings Services"
          description="Manage your all services"
        />
        <div className="overflow-x-auto text-center">
          {bookings && bookings.length > 0 ? (
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-4 py-2 font-medium text-gray-800 uppercase tracking-wider"
                  >
                    Service Name
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-2 font-medium text-gray-800 uppercase tracking-wider"
                  >
                    Date
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-2 font-medium text-gray-800 uppercase tracking-wider"
                  >
                    Time Slot
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-2 font-medium text-gray-800 uppercase tracking-wider"
                  >
                    Address
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-2 font-medium text-gray-800 uppercase tracking-wider"
                  >
                    Price
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-2 font-medium text-gray-800 uppercase tracking-wider"
                  >
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {bookings.map((booking) => (
                  <tr key={booking._id}>
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                      {booking.serviceName}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      {booking.date}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      {booking.timeSlot}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      {booking.address}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      ${booking.servicePrice}
                    </td>
                    <td className="">
                      <Link to={booking._id}
                        href="#"
                        className="inline-block rounded bg-rose-600 px-4 py-2 text-xs font-medium text-white hover:bg-rose-800"
                      >
                        Delete
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No bookings found for this email.</p>
          )}
        </div>
      </Container>
    </div>
  );
};

export default TrackOrder;
