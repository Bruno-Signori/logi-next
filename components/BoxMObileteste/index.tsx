import * as React from "react";
import { useEffect, useState } from 'react';


export default function ScrollMembers(i) {
  const [scroll, setScroll] = useState([]);

  useEffect(() => {
    async function loadScroll() {
      
      const response = [{"image": "office.png", "image2": "predator.png"}]
      console.log(response);

      setScroll(response)
    }
    loadScroll();
    

  }, [])

  return (
    <div className="scroll-box">
    <div role="list" className="scroll-box__wrapper">
      {scroll.length === 0 ? (
        <div />
      ) : (
        scroll.map(scroll => (
          <div className=""
            key={scroll.id}
          >
            <img src={`/${setScroll[i]}`}/>
          </div>
        ))
      )}
    </div>
  </div>
);

  }