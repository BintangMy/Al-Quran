import React from "react";

const LargeCardJadwal = ({oneTime, name, image}) => {

  return (
    <>
      <div className="flex justify-around h-full p-4 bg-primary shadow-none rounded-xl dark:bg-gray-500  transition duration-1000 cursor-pointer hover:shadow-primary transform hover:-translate-y-2">
        <div className="font-montserrat">
          <div>
            {name}
          </div>
          <h1 className="text-xl font-semibold">
            {oneTime}
          </h1>
        </div>
        <img src={image} width={70} alt="" />
      </div>
    </>
  );
};

export default LargeCardJadwal;
