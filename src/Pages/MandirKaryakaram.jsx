import React from 'react'
import { Karyakaram1, Karyakaram2, MandirKaryaKarambanner } from '../utility/AllImages'

function MandirKaryakaram() {
  return (
    <div className="MandirKaryakaram">
      <div className="HomeImg ">
        <img src={MandirKaryaKarambanner} className=" w-full lg:h-[80vh]" />
      </div>
      <section className="KarykaramGallery m-4">
        <div className="img-gallary lg:flex items-center justify-center gap-4 mt-6">
          <img
            src={Karyakaram1}
            alt=""
            className="hover:w-[40vw] hover:h-[75vh] lg:h-[70vh] lg:w-[30vw] transition-all duration-500 ease-in-out  backdrop-brightness-50 drop-shadow-2xl"
          />
          <img
            src={Karyakaram2}
            alt=""
            className="hover:w-[40vw] hover:h-[75vh] lg:h-[70vh] lg:w-[30vw] transition-all duration-500 ease-in-out  backdrop-brightness-50 drop-shadow-2xl"
          />
        </div>
      </section>
    </div>
  );
}

export default MandirKaryakaram
