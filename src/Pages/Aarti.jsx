import React from 'react'
import { BanglAarti, GaneshArti, ArtiBanner, SaniArti, SuryajiArti, ShivArti, VshnuArti } from '../utility/AllImages'

function Aarti() {
  return (
    <div className="Aarti">
      <div className="AartiImg ">
        <img src={ArtiBanner} className=" w-full lg:h-[70vh]" />
      </div>

      <section className="AArti-Gallary m-4">
        <div className="img-gallary lg:flex lg:flex-wrap items-center justify-center gap-4 mt-6">
          <img
            src={GaneshArti}
            alt=""
            className=" lg:h-[70vh] lg:w-[30vw]  drop-shadow-2xl"
          />
          <img
            src={VshnuArti}
            alt=""
            className=" lg:h-[70vh] lg:w-[30vw]  drop-shadow-2xl"
          />
          <img
            src={BanglAarti}
            alt=""
            className=" lg:h-[70vh] lg:w-[30vw]  drop-shadow-2xl"
          />
         
          <img
            src={SaniArti}
            alt=""
            className=" lg:h-[70vh] lg:w-[30vw]  drop-shadow-2xl"
          />
          <img
            src={ShivArti}
            alt=""
            className=" lg:h-[70vh] lg:w-[30vw]  drop-shadow-2xl"
          />
          <img
            src={SuryajiArti}
            alt=""
            className=" lg:h-[70vh] lg:w-[30vw]  drop-shadow-2xl"
          />
        </div>
      </section>
    </div>
  );
}

export default Aarti
