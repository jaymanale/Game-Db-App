import { useEffect, useState } from "react";
import UserService, { User } from "../services/user-service";
import { AxiosError, CanceledError } from "../services/api-client";

const useUser = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [errors, setErrors] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const { request, cancel } = UserService.getAllUsers();
    request
      .then((response) => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setErrors((error as AxiosError).message);
        setLoading(false);
      });

    // clean up function, If we no longer need to wait for this calls response
    return () => cancel();
  }, []);

  return { users, errors, isLoading, setUsers, setErrors };
};

export default useUser;
