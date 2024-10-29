import React from 'react'
import { SamitiBanner } from '../utility/AllImages'

function MandirSamiti() {

  return (
    <div className="Mandirsamiti">
      <div className="AartiImg ">
        <img src={SamitiBanner} className=" w-full lg:h-[70vh]" />
      </div>
      {/* PujariCard */}
      <div className="pujariCard flex flex-wrap gap-6 justify-center items-center mb-4 shadow-lg mt-10 p-6">
        <div className="card1 border bg-yellow-500 text-red-700 p-4 text-center h-44 w-96 shadow-lg">
          <h1>मुख्य पुजारी</h1>
          <h2>श्री अशोक कुमार तिवारी</h2>
          <p>मातृ उपासक, दैवज्ञ एवं साधक</p>
        </div>
        <div className="card1 border bg-yellow-500 text-red-700 p-4 text-center h-44 w-96 shadow-lg">
          <h1>मुख्य संयोजक</h1>
          <h2>महंत रोहित शर्मा</h2>
          <p>श्री पीतांबरा सूर्य नारायण मन्दिर</p>
          <p>राष्ट्रीय महासचिव अखिल भारतीय मंदिर परिषद</p>
        </div>
        <div className="card1 border bg-yellow-500 text-red-700 p-4 text-center h-44 w-96 shadow-lg">
          <h1>उपदेशक :</h1>
          <h2>अजीत स्वामी</h2>
          <p>अध्यक्ष अखिल भारतीय मंदिर परिषद</p>
        </div>
        <div className="card1 border bg-yellow-500 text-red-700 p-4 text-center h-44 w-[40vw] shadow-lg">
          <h1>मार्गदर्शक एवं प्रमुख सलाहकार</h1>
          <h2>
            डॉ. चन्द्रशेखर रॉय, श्री तेजदार सिंगरिया, डॉ. सुरेश आनंद, श्री पिंकी
            पुरी, डॉ. वेद टंडन, श्री संजय अग्रवाल, श्री आर के सिंह, श्री अमन
            शर्मा, श्री जीतेन्द्र अरोड़ा, श्री विवेक खन्ना, श्री किशन मोहन
            तिवारी, श्री राजेश भारद्वाज, श्री अनिल शर्मा.
          </h2>
        </div>
        <div className="card1 border bg-yellow-500 text-red-700 p-4 text-center h-44 w-[40vw] shadow-lg">
          <h1>मंदिर संचालन समिति</h1>
          <h2>
            पंडित रविकांत भारद्वाज, पंडित प्रवीण शर्मा, श्री संजय अग्रवाल, श्री
            मदन सिंगला,श्री अंकुर, श्री अनिल झा, श्री भगवान दास साधना, श्री कुशल
            मोंगा, श्री अजय अरोड़ा, श्रीमती संध्या सिंह, श्री राकेश
            शर्मा,श्रीमती निधि गुप्ता, श्री प्रवीण राणा, श्री मुकेश यादव, श्री
            संदीप शर्मा, श्री राकेश शर्मा, श्री योगेन्द्र, श्री घनश्याम
            मदान,श्री मृत्युंजय सिंह, श्री अवधेष मिश्रा , श्री संजय मिश्र, श्री
            सुशील पांडे, श्री विवेक मिश्रा श्री अशोक सिंह, श्री राधे.
          </h2>
        </div>
      </div>
    </div>
  );
}

export default MandirSamiti
