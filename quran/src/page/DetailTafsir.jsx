import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchDetailTafsir } from "../stores/actionCreator/tafsirActionCreator";
import Layout from "../components/Layout";
import MediumCardTafsir from "../components/Card/MediumCardTafsir";

const DetailTafsir = () => {
  const { oneTafsir } = useSelector((state) => state.tafsir);
  const dispatch = useDispatch();
  const [loading, isLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchDetailTafsir(id));
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

  return (
    <Layout rightSidebar={true}>
      <div className="mb-10 container mx-auto font-montserrat">
        <div className="flex flex-col items-center">
          <div className="font-bold text-xl sm:text-2xl font-montserrat text-center whitespace-nowrap">
            {oneTafsir.namaLatin}
          </div>
          <div className="flex gap-8 sm:gap-36 text-base sm:text-xl font-montserrat mb-10">
            <div className="border-solid border-2 border-emerald-300 py-1 px-2 sm:py-1 sm:px-5 rounded-xl">
              {oneTafsir.tempatTurun}
            </div>
            <div className="text-emerald-300 text-center">{oneTafsir.arti}</div>
            <div className="border-solid border-2 border-emerald-300 py-1 px-2 sm:py-1 sm:px-5 rounded-xl">
              {oneTafsir.jumlahAyat} Ayat
            </div>
          </div>
        </div>
        <div className="font-arabic text-2xl items-center text-center">
          بِسْـــــــــــــــــمِ اللهِ الرَّحْمَنِ الرَّحِيْمِ
        </div>
      </div>
      {/* <MediumCardTafsir  /> */}
      {oneTafsir.tafsir.map((el) => {
        return <MediumCardTafsir oneAyat={el} />;
      })}
    </Layout>
  );
};

export default DetailTafsir;
