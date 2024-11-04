import Image from "next/image";
import Product from "./components/product";
import Browse from "./components/browser";
import BestSelling from "./components/bestseller";
import Ads from "./components/advertisement";
import Discount from "./components/discount";

export default function Home() {
  return (
    <div>
      <div className="main">
        <div className="text">
          <div className="heading">
            <h2>Pro.Beyond.</h2>
            <div className="iphonetext">
              <h1 className="title">
                IPhone 14 <span className="pro">Pro</span>
              </h1>
            </div>
          </div>
          <p>Created to change everything for the better. For everyone</p>
          <button>Shop Now</button>
        </div>
        <div>
          <Image
            src={"/Iphone Image.png"}
            alt="Iphone image"
            width={406}
            height={632}
          />
        </div>
      </div>
    <Product/>
    <Browse/>
    <BestSelling/>
    <Ads/>
    <Discount/>
    <img src="Banner 2.png" alt="banner" className="banner"/>
    </div>
  );
}