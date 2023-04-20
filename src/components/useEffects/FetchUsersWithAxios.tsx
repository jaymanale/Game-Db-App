import React, { useEffect, useState } from "react";
import axios, { AxiosError, CanceledError } from "axios";

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
        const response = await axios.get<User[]>(
          "https://jsonplaceholder.typicode.com/users",
          { signal: controller.signal }
        );

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
    axios
      .delete("https://jsonplaceholder.typicode.com/users/" + user.id)
      .catch((error) => {
        setErrors(error.message);
        setUsers(originalUsers);
      });
  };

  const addUser = () => {
    const originalUsers = [...users];

    const newUser = { id: 0, name: "jayram" };
    setUsers([newUser, ...users]);

    axios
      .post("https://jsonplaceholder.typicode.com/users", newUser)
      .then(({ data: savedUser }) => setUsers([savedUser, ...users]))
      .catch((error) => {
        setErrors(error.message);
        setUsers(originalUsers);
      });
  };

  return (
    <>
      {errors && <p className="text-danger">{errors}</p>}
      {isLoading && <div className="spinner-border"></div>}
      <button className="btn btn-primary" onClick={addUser}>
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
              <button
                className="btn btn-outline-danger"
                onClick={() => deleteUser(user)}
              >
                Delete
              </button>
            </li>
          ))}
      </ul>
    </>
  );
};

export default FetchUsersWithAxios;
