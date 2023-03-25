import React, { useCallback } from "react";
import MediumCardSurah from "../Card/MediumCardSurah";
import LargeCardDoa from "../Card/LargeCardDoa";
import cls from "classnames";

const DoaList = ({ listDoa }) => {
  const myDoa = "grid";
  // const [myDoa] = useContext("grid");

  return (
    <div
      className={cls("grid lg:px-16 :px-2 gap-4 md:gap-x-5 md:gap-y-6", {
        "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6":
          myDoa === "list",
        "grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4":
          myDoa === "grid",
        })}
    >
      {myDoa === "list" && (
        <>
          <MediumCardSurah />
        </>
      )}
      {myDoa === "grid" && (
        <>
          {listDoa.map((el) => {
            // console.log(el, "listDoa ::::::::::::::::::::;")
            return <LargeCardDoa oneDoa={el}/>;
          })}
        </>
      )}
    </div>
  );
};

export default DoaList;
