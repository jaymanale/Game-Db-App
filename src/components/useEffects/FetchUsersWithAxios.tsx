import React, { useEffect, useState } from "react";

import apiClient, {
  CanceledError,
  AxiosError,
} from "../../services/api-client";

interface User {
  id: number;
  name: string;
}
const FetchUsersWithAxios = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [errors, setErrors] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    const fetchUsers = async () => {
      try {
        const response = await apiClient.get<User[]>("/users", {
          signal: controller.signal,
        });

        setUsers(response.data);
        setLoading(false);
      } catch (error) {
        if (error instanceof CanceledError) return;

        setErrors((error as AxiosError).message);
        setLoading(false);
      }
      // Use Below logic for production, As this does not work in development mode as strict mode is active
      //   finally(() => {
      //     setLoading(false);
      //   })
    };
    fetchUsers();

    // clean up function, If we no longer need to wait for this calls response
    return () => controller.abort();
  }, []);

  const deleteUser = (user: User) => {
    // Bake backup of original state , if server calls fails then we can restore it
    const originalUsers = [...users];

    // Optimistic operation which will improvement user experience
    setUsers(users.filter((u) => u.id !== user.id));

    // Make actual call to server to make update
    apiClient.delete("/users/" + user.id).catch((error) => {
      setErrors(error.message);
      setUsers(originalUsers); // If any error restore state to original
    });
  };

  const addUser = () => {
    // Bake backup of original state , if server calls fails then we can restore it
    const originalUsers = [...users];

    // Mocked user object, in production ,it will come from form input
    const newUser = { id: 0, name: "jayram" };

    // Optimistic operation which will improvement user experience
    setUsers([newUser, ...users]);

    // Make actual call to server to add user
    apiClient
      .post("/users", newUser)
      .then(({ data: savedUser }) => setUsers([savedUser, ...users]))
      .catch((error) => {
        setErrors(error.message);
        setUsers(originalUsers); // If any error restore state to original
      });
  };

  const updateUser = (user: User) => {
    // Bake backup of original state , if server calls fails then we can restore it
    const originalUser = [...users];

    // Mocked user object, in production ,it will come from form input
    const updatedUser = { ...user, name: user.name + " updated " };

    // Optimistic operation which will improvement user experience
    setUsers(users.map((u) => (u.id === user.id ? updatedUser : u)));

    // Make actual call to server to make update
    apiClient.patch("/users/" + user.id, updatedUser).catch((error) => {
      setErrors(error.message);
      setUsers(originalUser); // If any error restore state to original
    });
  };

  return (
    <>
      {errors && <p className="text-danger">{errors}</p>}
      {isLoading && <div className="spinner-border"></div>}
      <button className="btn btn-primary my-2" onClick={addUser}>
        Add User
      </button>
      <ul className="list-group">
        {users &&
          users.map((user) => (
            <li
              className="list-group-item d-flex justify-content-between"
              key={user.id}
            >
              {user.name}
              <div>
                <button
                  className="btn btn-outline-secondary mx-2"
                  onClick={() => updateUser(user)}
                >
                  Update
                </button>
                <button
                  className="btn btn-outline-danger"
                  onClick={() => deleteUser(user)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
      </ul>
    </>
  );
};

export default FetchUsersWithAxios;
