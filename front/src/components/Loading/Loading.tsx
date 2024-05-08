import { TLoading } from "@customTypes/shared";
import React from "react";

type LoadingProps = {
  status: TLoading;
  error: string | null;
  children: React.ReactNode;
};
const Loading = ({ status, error, children }: LoadingProps) => {
  if (status === "pending") {
    return <div>Loading...</div>;
  }
  if (status === "failed") {
    return <div>{error}</div>;
  }
  return <div>{children}</div>;
};

export default Loading;
