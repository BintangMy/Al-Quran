import React from "react";
import { AudioPlayerProvider } from "react-use-audio-player";
import AudioPlayer from "../Button/Audio";

const MediumCardSurah = ({ oneAyat }) => {
  return (
    <>
      <div className="lg:mx-16 lg:translate-x-10 my-3 flex flex-col h-full p-4 bg-primary shadow-none rounded-xl dark:bg-gray-700  transition duration-1000 cursor-pointer hover:shadow-primary transform hover:-translate-y-2">
        <div className="relative items-start justify-between">
          <div className="flex flex-col">
            <p className="font-primary font-bold absolute text-xs text-emerald-600 h-8 w-8 flex items-center justify-center rounded-md bg-emerald-200">
              {oneAyat.nomorAyat}
            </p>
            <div className="absolute mt-8">
            <AudioPlayerProvider>
              <AudioPlayer file={oneAyat.audio["05"]} />
            </AudioPlayerProvider>
            </div>
          </div>

          <p className="font-arabic text-2xl font-primary text-secondary  text-right ml-10 mb-5">
            {oneAyat.teksArab}
          </p>
        </div>
        <div className="flex items-end justify-between mt-2">
          <div>
            <h2 className="font-primary tracking-wide text-sm text-emerald-400 my-2 ml-12">
              {oneAyat.teksLatin}
            </h2>
            <p className="text-sm font-primary mt-1 ml-12">
              {oneAyat.teksIndonesia}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MediumCardSurah;
