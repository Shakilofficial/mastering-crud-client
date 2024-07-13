import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Container from "../../components/ui/Container";
import Error from "../../components/ui/Error";
import Header from "../../components/ui/Header";
import Loading from "../../components/ui/Loading";
import { auth } from "../../config/firebase.config";
import useAxios from "../../hooks/useAxios";
import toast from "react-hot-toast";
const TrackOrder = () => {
  const axios = useAxios();
  const queryClient = useQueryClient();
  const {
    data: bookings,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["booking"],
    queryFn: async () => {
      const email = auth.currentUser.email;
      const res = await axios.get(`/user/bookings/?email=${email}`);
      return res.data;
    },
  });
  const { mutate } = useMutation({
    mutationKey: ["booking"],
    mutationFn: (id) => {
      return axios.delete(`/user/cancel-booking/${id}`);
    },
    onSuccess: () => {
      toast.success("Successfully Deleted");
      queryClient.invalidateQueries({ queryKey: ["booking"] });
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
                      <button
                        onClick={() => mutate(booking._id)}
                        className="inline-block rounded bg-rose-600 px-4 py-2 text-xs font-medium text-white hover:bg-rose-800"
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
                            d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                          />
                        </svg>
                      </button>
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
