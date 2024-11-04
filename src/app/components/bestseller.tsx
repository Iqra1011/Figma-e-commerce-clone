import Image from "next/image";

export default function BestSelling() {
  return (
    <div className="Selling">
      <ul>
        <li>New Arrival</li>
        <li>Bestseller</li>
        <li>Featured Products</li>
      </ul>
      <div>
        <ul className="firstrow">
        <li className="items">
            <div className="heart-icon">&#9825;</div>
            <Image
              src={"/Iphone 15.png"}
              alt="Iphone image"
              height={160}
              width={160}
              className="device"
            ></Image>
            <div className="bottom">
              <div className="text">
                <h3>Apple iPhone 14 Pro Max 128GB Deep Purple</h3>
                <p>$900</p>
              </div>
              <button>Buy Now</button>
            </div>
          </li>
          <li className="items">
            {" "}
            <div className="heart-icon">&#9825;</div>
            <Image
              src={"/camera.png"}
              alt="camera"
              height={160}
              width={160}
              className="device"
            ></Image>
            <div className="camera.png">
              <div className="text">
                <h3>Blackmagic Pocket Cinema Camera 6k</h3>
                <p>$2535</p>
              </div>
              <button>Buy Now</button>
            </div>
          </li>
          <li className="items">
            {" "}
            <div className="heart-icon">&#9825;</div>
            <Image
              src={"/smart.png"}
              alt="smartwatch"
              height={160}
              width={160}
              className="device"
            ></Image>
            <div className="smart.png">
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
              src={"/headphone.png"}
              alt="headphone"
              height={160}
              width={160}
              className="device"
            ></Image>
            <div className="bottom">
              <div className="text">
                <h3>AirPods Max Silver Starlight Aluminium </h3>
                <p>$549</p>
              </div>
              <button>Buy Now</button>
            </div>
          </li>
        </ul>
        <ul className="secondrow">
        <li className="items">
            <div className="heart-icon">&#9825;</div>
            <Image
              src={"/ghadi.png"}
              alt="smartwatch.png"
              height={160}
              width={160}
              className="device"
            ></Image>
            <div className="ghadi.png">
              <div className="text">
                <h3>Samsung Galaxy Watch6 Classic 47mm Black</h3>
                <p>$369</p>
              </div>
              <button>Buy Now</button>
            </div>
          </li>
          <li className="items">
            {" "}
            <div className="heart-icon">&#9825;</div>
            <Image
              src={"/galaxy.png"}
              alt="Samsung"
              height={160}
              width={160}
              className="device"
            ></Image>
            <div className="bottom">
              <div className="text">
                <h3>Galaxy Z Fold5 Unlocked | 256GB | Phantom Black</h3>
                <p>$1799</p>
              </div>
              <button>Buy Now</button>
            </div>
          </li>
          <li className="items">
            {" "}
            <div className="heart-icon">&#9825;</div>
            <Image
              src={"/airbudse.png"}
              alt="airbuds"
              height={160}
              width={160}
              className="device"
            ></Image>
            <div className="bottom">
              <div className="text">
                <h3>Galaxy Buds FE
                Graphite</h3>
                <p>$99.99</p>
              </div>
              <button>Buy Now</button>
            </div>
          </li>
          <li className="items">
            {" "}
            <div className="heart-icon">&#9825;</div>
            <Image
              src={"/tablet.png"}
              alt="ipad.png"
              height={160}
              width={160}
              className="device"
            ></Image>
            <div className="bottom">
              <div className="text">
                <h3>Apple iPad 9 10.2" 64GB Wi-Fi Silver (MK2L3) 2021</h3>
                <p>$398</p>
              </div>
              <button>Buy Now</button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}