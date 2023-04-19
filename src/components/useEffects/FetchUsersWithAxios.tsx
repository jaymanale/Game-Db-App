import React, { useEffect, useState } from "react";
import axios from "axios";

interface User {
  id: number;
  name: string;
}
const FetchUsersWithAxios = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [errors, setErrors] = useState("");

  useEffect(() => {
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/xusers")
      .then((response) => setUsers(response.data))
      .catch((error) => setErrors(error.message));
  }, []);
  return (
    <>
      {errors && <p className="text-danger">{errors}</p>}
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
};

export default FetchUsersWithAxios;
