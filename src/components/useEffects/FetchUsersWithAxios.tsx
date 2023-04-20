import React, { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";

interface User {
  id: number;
  name: string;
}
const FetchUsersWithAxios = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [errors, setErrors] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        console.log("before call");
        const response = await axios.get<User[]>(
          "https://jsonplaceholder.typicode.com/users"
        );
        console.log("after all", response);
        setUsers(response.data);
      } catch (error) {
        console.log(error);
        setErrors((error as AxiosError).message);
      }
    };
    fetchUsers();
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
