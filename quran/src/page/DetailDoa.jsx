import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchDetailDoa } from "../stores/actionCreator/doaActionCreator";
import Layout from "../components/Layout";
// import MediumCardTafsir from "../components/Card/MediumCardTafsir";

const DetailDoa = () => {
  const { oneDoa } = useSelector((state) => state.doa);
  const dispatch = useDispatch();
  const [loading, isLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchDetailDoa(id));
    isLoading(false);
  }, [id]);

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

  console.log(oneDoa, "<<<<<<<<<<<<<<<<<<<");

  return (
    <Layout rightSidebar={true}>
      <div className="mb-10 container mx-auto">
        <div className="flex flex-col items-center">
          <div className="font-bold text-md lg:text-3xl font-montserrat text-center whitespace-nowrap">
            {oneDoa.nama}
          </div>
        </div>
        <div className="font-arabic text-xl lg:text-3xl mt-3 items-center text-center ">
          بِسْـــــــــــــــــمِ اللهِ الرَّحْمَنِ الرَّحِيْمِ
        </div>
      </div>
      {/* <MediumCardTafsir  /> */}

      <div className="lg:mx-16 lg:translate-x-10 my-3 flex flex-col p-4 shadow-none rounded-xl dark:bg-gray-700  transition duration-1000 cursor-pointer hover:shadow-primary transform hover:-translate-y-2">
        <p className="text-lg lg:text-2xl font-arabic text-right mt-1 lg:mx-12">
          {oneDoa.ar}
        </p>
        <div className="flex flex-col gap-2">
          <p className="text-xs font-montserrat text-left  text-emerald-400 mt-1 lg:mx-12">
            {oneDoa.tr}
          </p>
          <p className="text-xs font-montserrat text-left mt-1 lg:mx-12">
            {oneDoa.idn}
          </p>
          <p className="text-xs font-montserrat text-left mt-1 lg:mx-12">
            {oneDoa.tentang}
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default DetailDoa;
