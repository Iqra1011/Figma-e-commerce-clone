import Image from "next/image";

export default function Discount() {
  return (
    <div className="discount">
      <h2>Discounts up to -50%</h2>

      <ul className="discounts">
        <li className="items">
          <div className="heart-icon">&#9825;</div>
          <Image
            src={"/Iphone 14 pro 2.png"}
            alt="Iphone image"
            height={160}
            width={160}
            className="device"
          ></Image>
          <div className="bottom">
            <div className="text">
              <h3>Apple iPhone 14 Pro 512GB Gold (MQ233)</h3>
              <p>$1437</p>
            </div>
            <button>Buy Now</button>
          </div>
        </li>
        <li className="items">
          {" "}
          <div className="heart-icon">&#9825;</div>
          <Image
            src={"/headphon.png"}
            alt="headphone"
            height={160}
            width={160}
            className="device"
          ></Image>
          <div className="bottom">
            <div className="text">
              <h3>AirPods Max Silver
              Starlight Aluminium </h3>
              <p>$549</p>
            </div>
            <button>Buy Now</button>
          </div>
        </li>
        <li className="items">
          {" "}
          <div className="heart-icon">&#9825;</div>
          <Image
            src={"/smart 1.png"}
            alt="smart 1.png"
            height={160}
            width={160}
            className="device"
          ></Image>
          <div className="smart 1.png">
            <div className="text">
              <h3>Apple Watch Series 9 GPS 41mm Starlight Aluminium </h3>
              <p>$399</p>
            </div>
            <button>Buy Now</button>
          </div>
        </li>
        <li className="items">
          {" "}
          <div className="heart-icon">&#9825;</div>
          <Image
            src={"/Iphone 14 pro 1 (2) 1.png"}
            alt="Iphone 14 pro1(2)1"
            height={160}
            width={160}
            className="device"
          ></Image>
          <div className="bottom">
            <div className="text">
              <h3>Apple iPhone 14 Pro 1TB Gold (MQ2V3)</h3>
              <p>$1499</p>
            </div>
            <button>Buy Now</button>
          </div>
        </li>
      </ul>
    </div>
  );
}