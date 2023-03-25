import { Link } from "react-router-dom";
import React from "react";

const LargeCardDoa = ({oneDoa}) => {

  const limitWords = (str, num) => {
    let words = str.split(" ");
    if (words.length > num) {
      return words.slice(0, num).join(" ") + "...";
    } else {
      return str;
    }
  }

  return (
    <Link to={`/doa/${oneDoa.id}`}>
      <div className="flex flex-col h-full p-4 bg-primary shadow-none rounded-xl dark:bg-gray-700  transition duration-1000 cursor-pointer hover:shadow-primary transform hover:-translate-y-2">
        <div className="flex flex-grow items-start justify-between">
          <p className="font-primary text-xs font-bold text-emerald-600 h-6 w-6 flex items-center justify-center rounded-lg bg-emerald-200">
            {oneDoa.id}
          </p>
        </div>
        <div className="flex items-end justify-between">
          <div>
            <h2 className="font-primary tracking-wide text-sm font-bold mt-2 mb-1">
              {limitWords(oneDoa.nama, 6)}
            </h2>
            <p className="font-primary text-secondary text-xs">
             {oneDoa.tag}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default LargeCardDoa;
