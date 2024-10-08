"use client";
import { FC } from "react";
import { Provider } from "react-redux";
import { createReduxStore } from "../store";

interface ProviderProps {
  children: JSX.Element;
}

const Providers: FC<ProviderProps> = ({ children }) => {
  return <Provider store={createReduxStore()}>{children}</Provider>;
};

export default Providers;
