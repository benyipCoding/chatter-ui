import { API_URL } from "../constants/urls";

export const useLogout = () => {
  const logout = () => {
    return fetch(`${API_URL}/auth/logout`, { method: "POST" });
  };

  return { logout };
};
