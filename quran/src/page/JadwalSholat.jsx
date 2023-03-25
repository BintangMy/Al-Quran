import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../components/Layout";
import LargeCardJadwal from "../components/Card/LargeCardJadwal";
import { fetchCity, fetchOneCity } from "../stores/actionCreator/jadwalActionCreator";
import { FaRegWindowClose } from "react-icons/fa";
import { hijriahDete, masehiDate } from "../helpers/date";
const JadwalSholat = () => {
  const [loading, isLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [city, setCity] = useState("BANDUNG");
  const [cityCode, setCityCode] = useState(679);
  const dispatcher = useDispatch();
  const { allCity, oneCity } = useSelector((state) => state.schedule);

  const data = {
    city,
    cityCode
  }

  useEffect(() => {
    async function fetchData() {
      await dispatcher(fetchCity());
      await dispatcher(fetchOneCity(data));
      isLoading(false);
    }
    fetchData();
  }, []);

  const handleCitySelection = (nama, kode) => {
    setCity(nama);
    setCityCode(kode);
    setShowModal(false);
  };

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
    <Layout rightSidebar={true} title={"Jadwal"}>
      <div className="lg:mt-10 flex gap-2 justify-center text-md lg:text-3xl font-semibold font-montserrat">
        <div>Waktu Sholat Daerah</div>
        <div>{city}</div>
        <div
          className="text-white font-bold lg:text-2xl text-center lg:pt-1 hover:cursor-pointer"
          onClick={() => setShowModal(true)}
        >
          ◢
        </div>
        <>
          {showModal ? (
            <>
              <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-96 bg-white outline-none focus:outline-none">
                    <div className="flex items-start justify-between p-3 border-b border-solid border-slate-200 rounded-t">
                      <h3 className="text-xl font-montserrat text-emerald-500 font-semibold">
                        Daftar Kota
                      </h3>
                      <button
                        className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => setShowModal(false)}
                      >
                        <FaRegWindowClose />
                      </button>
                    </div>
                    <div
                      className="relative p-6 flex-auto overflow-y-auto text-lg text-black font-montserrat"
                      style={{ maxHeight: "calc(70vh - 200px)" }}
                    >
                       {allCity.map((el) => {
                        return (
                          <p
                          className="text-sm hover:bg-gray-300"
                          onClick={() => {
                            setCity(el.nama); 
                            setCityCode(el.id);
                            setShowModal(false);
                            isLoading(true);
                            dispatcher(fetchOneCity({city: el.nama, cityCode: el.id}),isLoading(false)); // fetch data baru berdasarkan kota yang dipilih
                          }}
                        >
                          {el.nama}
                        </p>
                        );
                      })}
                    </div>
                    <div className="w-full h-3"></div>
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
          ) : null}
        </>
      </div>
      <div className="text-center font-montserrat">
        <div className="text-md lg:text-2xl font-semibold">{masehiDate()}</div>
        <div className="lg:text-xl text-sm">{hijriahDete()}</div>
      </div>
      <div className="mt-4 grid lg:px-16 md:px-2 gap-4 md:gap-x-5 md:gap-y-6 grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
        <LargeCardJadwal oneTime={oneCity.data.imsak} name={"Imsak"} image={"https://ik.imagekit.io/bintangtopup/Quran/imsak.png?updatedAt=1679734493565"}/>
        <LargeCardJadwal oneTime={oneCity.data.subuh} name={"Subuh"} image={"https://ik.imagekit.io/bintangtopup/Quran/subuh.png?updatedAt=1679734492628"}/>
        <LargeCardJadwal oneTime={oneCity.data.terbit} name={"Terbit"} image={"https://ik.imagekit.io/bintangtopup/Quran/terbit.png?updatedAt=1679734492888"}/>
        <LargeCardJadwal oneTime={oneCity.data.dhuha} name={"Dhuha"} image={"https://ik.imagekit.io/bintangtopup/Quran/dhuha.webp?updatedAt=1679754936759"}/>
        <LargeCardJadwal oneTime={oneCity.data.dzuhur} name={"Dzuhur"} image={"https://ik.imagekit.io/bintangtopup/Quran/dzuhur.png?updatedAt=1679734492876"}/>
        <LargeCardJadwal oneTime={oneCity.data.ashar} name={"Ashar"} image={"https://ik.imagekit.io/bintangtopup/Quran/ashar.png?updatedAt=1679734495227"}/>
        <LargeCardJadwal oneTime={oneCity.data.maghrib} name={"Maghrib"} image={"https://ik.imagekit.io/bintangtopup/Quran/maghrib.png?updatedAt=1679734494903"}/>
        <LargeCardJadwal oneTime={oneCity.data.isya} name={"Isya"} image={"https://ik.imagekit.io/bintangtopup/Quran/isya_.png?updatedAt=1679734494284"}/>
      </div>
    </Layout>
  );
};

export default JadwalSholat;
