import React from "react";
import "../style/layout/footer.scss";


const about = ["Lörem ipsum garanterad traditionell specialitet bask vat. Döngar logotos inaskad. Kringtidskort krore jag nyra. Fabel stenov poledes rer pod supramelig. Dosk stenoligt doss. Pseudologi paragunöktig heminde geov. Nyliga teradåfarar euheten dede. Pneumaception nyfanat ifall pressade mytopatologi esade att äggkonto. Georevis global hektar i jövaren astrofaska att telebande. Sar bäkrovis eftersom inrymning vikevis då suprans. Resosam umos vudevav astropeng. Hyperitet bogt nåsk, ater, eftersom psykotism, resam. "];

const Footer = () =>{
  return (
    <>
      <footer>
        <div>
          <h1>ABOUT</h1>
          <p>{about}</p>
        </div>
        <div>
          <h1>ADRESS</h1>
          <p>대전 서구 대덕대로 182</p>
          <div className="imagesBox">
            <img src="/images/YouTube.png"></img>
            <img src="/images/Twitter.png"></img>
            <img src="/images/Instagram.png"></img>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer;