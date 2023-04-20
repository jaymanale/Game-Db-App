import apiClient from "./api-client";

export interface User {
  id: number;
  name: string;
}

class UserService {
  // #1 : GET ALL USERS
  getAllUsers() {
    const controller = new AbortController();

    const request = apiClient.get<User[]>("/users", {
      signal: controller.signal,
    });

    return { request, cancel: () => controller.abort() };
  }

  // #2 : DELETE USER
  deleteUser(id: number) {
    return apiClient.delete("/users/" + id);
  }

  // #3 : ADD USER
  addUser(newUser: User) {
    return apiClient.post("/users", newUser);
  }

  // #4: UPDATE USER
  updateUser(id: number, updatedUser: User) {
    return apiClient.patch("/users/" + id, updatedUser);
  }
}

export default new UserService();
