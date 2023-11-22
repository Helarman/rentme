'use client';

import { SquareLoader } from "react-spinners";

const Loader = () => {
  return ( 
    <div
    className="
      h-[70vh]
      flex 
      flex-col 
      justify-center 
      items-center 
    "
    >
      <SquareLoader
        size={100}
        color="#0ea5e9"
      />
    </div>
   );
}
 
export default Loader;