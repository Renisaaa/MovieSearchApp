import React from 'react';
import Navbar from './Navbar';
import { createContext } from 'react';
import { useState, Suspense } from 'react';

const Movies =  React.lazy(() => import("./Movies.js"));
export const Data = createContext();

const Home = () => {
  const [input, setInput] = useState();
  const getVal = (val) => {
    setInput(val);
  }
  return (
    <Data.Provider value={{getVal:getVal}}>
      <>
        <Navbar/>
        <Suspense fallback={<div>Loading</div>}>
          <Movies val={input}/>
			</Suspense>
      </>
    </Data.Provider>
  )
}

export default Home