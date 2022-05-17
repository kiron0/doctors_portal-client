import React, { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import UserDeleteConfirmModal from "./UserDeleteConfirmModal";
import UserRow from "./UserRow";

const Users = () => {
  const [deletingUser, setDeletingUser] = useState(null);
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery("users", () =>
    fetch("http://localhost:5000/user", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <h2 className="text-2xl">All Users: {users.length}</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <UserRow
                index={index}
                key={user._id}
                user={user}
                refetch={refetch}
                setDeletingUser={setDeletingUser}
              ></UserRow>
            ))}
          </tbody>
        </table>
      </div>
      {deletingUser && (
        <UserDeleteConfirmModal
          deletingUser={deletingUser}
          refetch={refetch}
          setDeletingUser={setDeletingUser}
        ></UserDeleteConfirmModal>
      )}
    </div>
  );
};

export default Users;
