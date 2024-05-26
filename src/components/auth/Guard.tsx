import React, { PropsWithChildren } from "react";
import { useGetMe } from "../../hooks/useGetMe";
import { excludedRoutes } from "../../constants/excluded-routes";

const Guard: React.FC<PropsWithChildren> = ({ children }) => {
  const { data: user } = useGetMe();
  console.log(user);
  const isWhiteList = excludedRoutes.includes(window.location.pathname);

  if (isWhiteList) {
    return <>{children}</>;
  }

  return <>{user && children}</>;
};

export default Guard;
