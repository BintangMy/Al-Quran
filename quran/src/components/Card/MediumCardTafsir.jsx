import React from "react";


const MediumCardTafsir = ({ oneAyat }) => {
  return (
    <>
      <div className="lg:mx-16 lg:translate-x-10 my-3 flex flex-col h-full p-4 bg-primary shadow-none rounded-xl dark:bg-gray-700  transition duration-1000 cursor-pointer hover:shadow-primary transform hover:-translate-y-2">
        <div className="relative items-start justify-between">
          <div className="flex flex-col">
            <p className="font-primary font-bold absolute text-xs text-emerald-600 h-8 w-8 flex items-center justify-center rounded-md bg-emerald-200">
              {oneAyat.ayat}
            </p>
          </div>
        </div>
        <div className="flex items-end justify-between mt-2">
            <p className="text-sm font-primary mt-1 ml-12">
            {oneAyat.teks}
            </p>
        </div>
      </div>
    </>
  );
};

export default MediumCardTafsir;
