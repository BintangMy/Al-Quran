import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchDetailSurah } from "../stores/actionCreator/quranActionCreator";
import Layout from "../components/Layout";
import MediumCardSurah from "../components/Card/MediumCardSurah";

const DetailSurah = () => {
  const { oneSurah } = useSelector((state) => state.quran);
  const dispatch = useDispatch();
  const [loading, isLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchDetailSurah(id));
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
          <div className="font-bold text-xl sm:text-2xl  text-center whitespace-nowrap">
            {oneSurah.namaLatin}
          </div>
          <div className="flex gap-8 sm:gap-36 text-sm lg:text-xl  mb-10">
            <div className="border-solid border-2 border-emerald-300 py-1 px-2 sm:py-1 sm:px-5 rounded-xl">
              {oneSurah.tempatTurun}
            </div>
            <div className="text-emerald-300 text-center">{oneSurah.arti}</div>
            <div className="border-solid border-2 border-emerald-300 py-1 px-2 sm:py-1 sm:px-5 rounded-xl">
              {oneSurah.jumlahAyat} Ayat
            </div>
          </div>
        </div>
        {oneSurah.namaLatin !== "Al-Fatihah" ? (
          <div className="font-arabic text-2xl lg:text-3xl items-center text-center">
            بِسْـــــــــــــــــمِ اللهِ الرَّحْمَنِ الرَّحِيْمِ
          </div>
        ) : (
          ""
        )}
      </div>

      {oneSurah.ayat.map((el) => {
        return <MediumCardSurah oneAyat={el} />;
      })}
    </Layout>
  );
};

export default DetailSurah;
