import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllSurahTafsir } from "../stores/actionCreator/tafsirActionCreator";
import SurahList from "../components/List/SurahList";
import Layout from "../components/Layout";
const TafsirPage = () => {
  const [loading, isLoading] = useState(true);
  const { surah } = useSelector((state) => state.tafsir);

  const dispatcher = useDispatch();

  useEffect(() => {
    dispatcher(fetchAllSurahTafsir());
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
    <Layout rightSidebar={true} title={"Tafsir"}>
      <SurahList listSurat={surah} type={"tafsir"} />
    </Layout>
  );
};

export default TafsirPage;
