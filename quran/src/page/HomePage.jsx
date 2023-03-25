import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllSurah } from "../stores/actionCreator/quranActionCreator";
import SurahList from "../components/List/SurahList";
import Layout from "../components/Layout";
const HomePage = () => {
  const [loading, isLoading] = useState(true);
  const { surah } = useSelector((state) => state.quran);

  const dispatcher = useDispatch();

  useEffect(() => {
    dispatcher(fetchAllSurah());
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
    <Layout rightSidebar={true} title={""}>
      <SurahList listSurat={surah} type={"quran"} />
    </Layout>
  );
};

export default HomePage;
