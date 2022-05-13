import { format } from "date-fns";
import React, { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../Shared/firebase.init";
import AvailableCard from "./AvailableCard";
import BookingModal from "./BookingModal";
import Service from "./Service";

const AvailableAppointments = ({ date }) => {
  const [user] = useAuthState(auth);
  const [services, setServices] = useState([]);
  const [treatment, setTreatment] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="my-10 px-6 lg:px-12">
      <div className="my-10">
        <h4 className="text-xl text-secondary text-center my-2">
          Available Services on {format(date, "PP")}
        </h4>
        <p className="text-xl text-gray-400 text-center">
          Please select a service
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {services.map((service) => (
          <AvailableCard key={service.id} service={service} date={date} />
        ))}
      </div>{" "}
      <div>
        <h2 class="text-xl text-secondary text-center my-28">
          Available slots for{" "}
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <Service
            key={service._id}
            service={service}
            setTreatment={setTreatment}
          ></Service>
        ))}
      </div>
      {services.length === 0 && (
        <p className="text-red-600 text-center w-full">
          No service available for now
        </p>
      )}
      {treatment && (
        <BookingModal
          date={date}
          treatment={treatment}
          setTreatment={setTreatment}
          user={user}
        ></BookingModal>
      )}
    </div>
  );
};

export default AvailableAppointments;
