import React, { PropsWithChildren, useEffect } from "react";
import { useGetMe } from "../../hooks/useGetMe";
import { excludedRoutes } from "../../constants/excluded-routes";
import { authenticatedVar } from "../../constants/authenticated";

const Guard: React.FC<PropsWithChildren> = ({ children }) => {
  const { data: user } = useGetMe();

  useEffect(() => {
    if (user) {
      authenticatedVar(true);
    }
  }, [user]);

  const isWhiteList = excludedRoutes.includes(window.location.pathname);

  if (isWhiteList) {
    return <>{children}</>;
  }

  return <>{user && children}</>;
};

export default Guard;
