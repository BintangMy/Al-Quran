import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllDoa } from "../stores/actionCreator/doaActionCreator";
import DoaList from "../components/List/DoaList";
import Layout from "../components/Layout";
const DoaPage = () => {
  const [loading, isLoading] = useState(true);
  const { doa } = useSelector((state) => state.doa);

  const dispatcher = useDispatch();

  useEffect(() => {
    dispatcher(fetchAllDoa());
    isLoading(false);
  }, []);

  if (loading) {
    return (
      <div class="flex items-center justify-center min-h-screen">
        <div
          style={{ "border-top-color": "transparent" }}
          class="w-8 h-8 border-4 border-blue-200 rounded-full animate-spin"
        ></div>
        <p class="ml-2">Processing...</p>
      </div>
    );
  }

  return (
    <Layout rightSidebar={true} title={"Doa"}>
      <DoaList listDoa={doa} />
    </Layout>
  );
};

export default DoaPage;
