import React from "react";
import Layout from "../components/Layout";
import useControl from "../hooks/useControl";

const Progress = () => {
  useControl();
  return <Layout contentsName={<progress />} />;
};

export default Progress;
