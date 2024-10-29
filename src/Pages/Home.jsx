import React from "react";
import { Banner } from "../Constant/homeConstant.js";
import {
  Ladoo,
  Pooja,
  Suryabhagwan,
  Suryanarayan,
  Deepak,
  Narayan,
} from "../Constant/homeConstant.js";
import { Parisar1, Parisar2, Parisar3, Parisar4, Parisar5, Parisar6, Parisar7, Parisar8, Parisar9 } from "../Constant/homeConstant.js";
function Home() {
  const ObjectiveCard = ({ Photo, Heading, About }) => {
    return (
      <div className="flex  border-r-2 flex-col gap-2 mt-3 text-[#432B1E]  w-full p-3">
        <section className="flex flex-col items-center justify-center">
          <img src={Photo} className="h-36 " />
          <h1 className="text-md tracking-tighter font-bold">{Heading}</h1>
        </section>

        <p className="text-sm">{About}</p>
      </div>
    );
  };
  const ObjectiveConstants = () => {
    return (
      <div>
        <div className="lg:flex lg:mx-10 shadow-lg mt-2 w-[92vw]  justify-center items-center text-sm text-justify ">
          <ObjectiveCard
            Photo={Pooja}
            Heading={"पूजा का समय"}
            About={`परम शक्तिपीठ “श्री पीतांबरा सूर्य नारायण मंदिर” में संध्या आरती के लिए वेद पाठी ब्राह्मण और सेवादार मंदिर की साफ सफाई के पश्चात् पूजा की तैयारी करते हैं| संध्या आरती सायं 7 बजे आरम्भ होती है | आरती का थाल सजा कर पहले यज्ञशाला से आरती का क्रम आरम्भ किया जाता है और फिर मुख्य भवन में सभी देवी देवताओं की बारी-बारी से आरती की जाती है| इस मंगल आरती में बड़ी संख्या में स्थानीय निवासी व् भक्तजन सम्मिलित होते है| आरती के पश्चात् सभी भक्तो को भोग प्रसाद वितरित किया जाता है|`}
          />
          <ObjectiveCard
            Photo={Deepak}
            Heading={"प्रातः आरती"}
            About={`परम शक्ति पीठ श्री पीतांबरा सूर्यनारायण मंदिर में 5 बजे प्रातः पूजा आरम्भ हो जाती है| मुख्य पुरोहित के देखरेख में पुरे विधि विधान से पूजा का आयोजन किया जाता है| वेद पाठी ब्राह्मण मंत्रोचारण के साथ देवताओं का श्रृंगार करते हैं और फल-फूल, नैवैद्य इत्यादि का भोग लगा कर भगवान का संकीर्तन एवं आरती करते हैं| परम शक्ति पीठ श्री पीतांबरा सूर्यनारायण मंदिर में पूजा के पश्चात 8 बजे प्रातः आरती का समय रखा गया है| सभी भक्तगण भावपूर्ण हो कर सुबह की आरती में सम्मिलित होते है|`}
          />
          <ObjectiveCard
            Photo={Ladoo}
            Heading={"संध्या आरती"}
            About={`परम शक्तिपीठ “श्री पीतांबरा सूर्य नारायण मंदिर” में संध्या आरती के लिए वेद पाठी ब्राह्मण और सेवादार मंदिर की साफ सफाई के पश्चात् पूजा की तैयारी करते हैं| संध्या आरती सायं 7 बजे आरम्भ होती है | आरती का थाल सजा कर पहले यज्ञशाला से आरती का क्रम आरम्भ किया जाता है और फिर मुख्य भवन में सभी देवी देवताओं की बारी-बारी से आरती की जाती है| इस मंगल आरती में बड़ी संख्या में स्थानीय निवासी व् भक्तजन सम्मिलित होते है| आरती के पश्चात् सभी भक्तो को भोग प्रसाद वितरित किया जाता है|`}
          />
        </div>
      </div>
    );
  };

   const MandirParisarCard = ({ Photo }) => {
     return (
       <div className="flex  flex-wrap  mt-3 text-[#432B1E] ">
           <img src={Photo} className=" lg:w-[30vw] " />
       </div>
     );
   };
   const MandirPaisarConstants = () => {
     return (
       <div>
         <div className="lg:flex lg:flex-wrap  border p-4  lg:mx-10 shadow-lg  justify-center items-center  ">
           <MandirParisarCard Photo={Parisar1} />
           <MandirParisarCard Photo={Parisar2} />
           <MandirParisarCard Photo={Parisar3} />
           <MandirParisarCard Photo={Parisar4} />
           <MandirParisarCard Photo={Parisar5} />
           <MandirParisarCard Photo={Parisar6} />
           <MandirParisarCard Photo={Parisar7} />
           <MandirParisarCard Photo={Parisar8} />
           <MandirParisarCard Photo={Parisar9} />
         </div>
       </div>
     );
   };





 
  return (
    <div className="Home">
      <div className="HomeImg ">
        <img src={Banner} className=" w-full lg:h-[80vh]" />
      </div>

      <section className="Suryanarayan lg:flex justify-center items-center   gap-4  p-4 m-2 shadow-lg">
        <div className="card1 lg:h-fit lg:w-[30vw] border-2 drop-shadow-md p-2">
          <div className="Img-comntainer">
            <img
              src={Suryanarayan}
              alt=""
              className="lg:w-[40vw] lg:h-96 hover:scale-105 transition duration-200 ease-in "
            />
          </div>
          <div className="About flex flex-col">
            <h1 className="font-bold">माँ पीताम्बरा/ माँ बगलामुखी</h1>
            <p className="text-sm">
              माँ पीतांबरा को माँ बगलामुखी भी कहा जाता है| माँ पीतांबरा का मूल
              स्थान दतिया मध्य प्रदेश में है| इनके सिद्ध पीठ को हिमाचल प्रदेश
              में भी स्थापित किया गया है| माँ पीतांबरा इस ब्रह्मांड की परम शक्ति
              हैं| माँ पीतांबरा की पूजा के लिए भक्तों को विशेष रूप से पीला
              वस्त्र धारण करना चाहिए, पीला पुष्प अर्पित करना चाहिए और भोग प्रसाद
              में भी पीले रंग की ही मिठाइयां एवं फल - फूल इत्यादि का इस्तेमाल
              करना चाहिए| अपने गुरु के द्वारा दीक्षा लेकर माँ पीतांबरा की आराधना
              की जानी चाहिए| ऐसा करने से जो भी साधक माँ पीतांबरा यानी की माँ
              बगलामुखी की नित्य नियम पूजा अर्चना करते हैं उन पर माँ की विशेष
              कृपा होती है और उनकी सभी मनोकामना पूर्ण होती है| माँ पीतांबरा की
              आराधना करने वाले भक्तों के दुश्मनों का स्तंभन होता है और मां
              पीतांबरा के भक्त आध्यात्मिक रूप से शक्ति को प्राप्त करते हैं जिससे
              उनके जीवन में कभी किसी प्रकार का कष्ट या बाधा नहीं आती है| उनकी
              आराधना करने से भक्त को राजनीतिक लाभ, यश, कीर्ति और शक्ति की
              प्राप्ति होती है।
            </p>
          </div>
        </div>
        <div className="card2 lg:h-fit lg:w-[37vw]  border-2 drop-shadow-md p-2">
          <div className="Img-comntainer">
            <img
              src={Suryabhagwan}
              alt=""
              className="lg:w-[40vw] lg:h-96 hover:scale-105 transition duration-200 ease-in-out"
            />
          </div>
          <div className="About flex flex-col">
            <h1 className="font-bold">श्री सूर्य भगवान</h1>
            <p className="text-sm">
              सनातन धर्म में 36 कोटी देवी देवताओं की आराधना किया जाता है। एक
              सूर्य देव ऐसे हैं जो इस ब्रह्मांड में हमेशा सभी को प्रत्यक्ष रूप
              से दर्शन देते हैं| सूर्य देव की महिमा अपरंपार है। सूर्य देव के
              आशीर्वाद से ही यह सृष्टि चल रही है| इस ब्रह्मांड में रहने वाले सभी
              जीव जंतु,पशु-पक्षी और मानव, सूर्य देव की कृपा के पात्र है| सूर्य
              देव सभी पर एक समान आशीर्वाद देते हैं| ब्रह्मांड के सभी प्राणी उससे
              लाभान्वित होते हैं। सूर्य देव की पूजा करने से भक्तों को
              आध्यात्मिक-भौतिक शक्तियों व शांति की प्राप्ति होती है। वह
              सामर्थ्यवान बनते हैं और उन भक्तों के परिजनों पर भी किसी प्रकार का
              कोई कष्ट नहीं आता है।{" "}
            </p>
            <p className="text-sm">
              सूर्य देव की पूजा करने से भक्त निर्बाध रूप से अपने काम को कर पाते
              हैं। सूर्य देव की अर्चना रोज की जानी चाहिए| सूर्य देव को रोज जल
              अर्पित किया जाना चाहिए और विशेष कर छठ पूजा के समय सूर्य देव को
              संध्या अर्घ्य के समय दूध जल और प्रसाद अर्पित किया जाना चाहिए और
              फिर अगले दिन प्रातः काल की पूजा में भी सूर्य देव को दूध जल से
              अर्घ्य दिया जाना चाहिए और उनके प्रसाद को सभी भक्तों के बीच में
              वितरित किया जाना चाहिए। ऐसा करने से सूर्य देव की कृपा सभी पर सदा
              बनी रहती है। रोज प्रातःकाल सूर्य देव को जल अर्पित किया जाना चाहिए,
              इससे सूर्य देव का आशीर्वाद सदा बना रहता है।
            </p>
          </div>
        </div>
        <div className="card3 lg:h-[93vh] lg:w-[30vw] border-2  drop-shadow-md p-2">
          <div className="Img-comntainer">
            <img
              src={Narayan}
              alt=""
              className="lg:w-[40vw] lg:h-96 hover:scale-105 transition duration-200 ease-in-out"
            />
          </div>
          <div className="About flex flex-col">
            <h1 className="font-bold text-lg">माँ पीताम्बरा/ माँ बगलामुखी</h1>
            <p className="text-sm">
              भगवान श्री नारायण जी ने विभिन्न अवतार लिए है| कभी श्री रामचंद्र
              बनकर वह रावण का संघार करते हैं, कभी नरसिंह अवतार लेकर भक्त
              प्रह्लाद की रक्षा करते हैं तो कभी श्री कृष्ण बनकर पांडवों की मदद
              करते हैं और इस विश्व को भागवत गीता जैसी अनुपम कृति भी भेंट करते
              हैं| श्री नारायण जी इस पूरे जगत के पालनहार हैं, परम शक्ति हैं|
              श्री नारायण जी की पूजा हर व्यक्ति को अपने परिजनों के साथ करनी
              चाहिए| श्री सत्यनारायण व्रत की कथा का आयोजन अपने परिजनों के साथ घर
              में करना चाहिए| श्री नारायण जी की आराधना करने से भक्तों के सारे
              रोग दोष दूर होते हैं और सभी प्रकार के कष्टों से मुक्ति मिलती है|
            </p>
          </div>
        </div>
      </section>

      <section className="mandir font-serif  ">
        <div className="TextContainer   flex-col  p-4 ">
          <h1 className="lg:text-xl text-center  mb-4 text-2xl font-semibold text-dark-brown">
            मंदिर में व्यवस्था
          </h1>

          <div className="phone:w-full">
            <ObjectiveConstants />
          </div>
        </div>
      </section>

      <section className="lg:h-60 font-serif mb-4 bg-[#FFC107] p-8">
        <h1 className="text-white">परिकल्पना:</h1>
        <p className="text-red-700">
          परम शक्तिपीठ "श्री पीतांबरा सूर्यनारायण मंदिर" की आधारशिला भारत के
          पूज्य संतों एवं धर्माचार्यो के मत अनुसार किया गया है| यह परम शक्तिपीठ
          की स्थापना की गई है और इस परम शक्तिपीठ से सनातन धर्मवलंबियों को
          आध्यात्मिक जागरण व् संरक्षण का कार्य किया जाएगा| इस मंदिर की परिकल्पना
          के पीछे जो उद्देश्य है वह है, कि सनातन धर्म के अनुयायियों को हर तरह से
          आध्यात्मिक संरक्षण प्राप्त हो जिससे वह अपनी पूजा पद्धति को सही तरह से
          कर पाए| उसमें कोई भी सनातन विरोधी बाधा उत्पन्न न करें| यह परम शक्ति
          पीठ हर उस सनातनी को अपना आशीर्वाद प्रदान करेगा जो माँ भारती के लिए,
          सनातन के लिए सर्वोच्च बलिदान करने के लिए तैयार है| आज के युग में जिस
          प्रकार से विश्व भर में सनातन का विरोध किया जा रहा है उसे देखकर ऐसा
          लगता है की अपराध बोध से ग्रस्त यह सनातन विरोधी हर तरह से सनातन को
          समाप्त करने के लिए प्रयासरत है इसीलिए अब सनातन की रक्षा के लिए दैविक
          शक्तियों के जागरण के लिए विशेष आह्वान करने का समय आ गया है और यह कार्य
          परम शक्तिपीठ "श्री पीतांबरा सूर्यनारायण मंदिर" पर निरंतर किया जाएगा|
          इस भगवत कार्य के लिए पूज्य गुरु जी, पूज्य संतों और साधकों के द्वारा
          समय-समय पर उचित दिशा निर्देश दिए जाते हैं और इस निर्देश का पालन करते
          हुए सनातन की रक्षा के लिए, मानवता की रक्षा के लिए विशेष अनुष्ठान हवन
          यज्ञ इत्यादि का आयोजन किया जाता है| इसी परिकल्पना को ध्यान में रखते
          हुए परम शक्तिपीठ "श्री पीतांबरा सूर्यनारायण मंदिर" के आधारशिला रखी गई
          है|
        </p>
      </section>

      <section className="mandirParisar h-fit mb-4">
        <div className="TextContainer  flex-col  p-4 ">
          <h1 className="lg:text-xl text-center  mb-4 text-2xl font-semibold text-dark-brown">
            मंदिर में व्यवस्था
          </h1>
          </div>
          <div className="mandirParisargallary">
            <MandirPaisarConstants/>
          </div>
      </section>
    </div>
  );
}

export default Home;
