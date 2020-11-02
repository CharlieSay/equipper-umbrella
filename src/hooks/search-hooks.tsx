import React, { useEffect, useState } from "react";
import Loading from "../pages/utility-pages/loading/loading";

const getSearch = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(
    () => {
      const timer1 = setTimeout(() => setIsLoading(false), 1000);
      // this will clear Timeout when component unmount like in willComponentUnmount
      return () => {
        clearTimeout(timer1);
      };
    },
    [] //useEffect will run only one time
    //if you pass a value to array, like this [data] than clearTimeout will run every time this value changes (useEffect re-run)
  );

  return isLoading;
};

export default getSearch;
