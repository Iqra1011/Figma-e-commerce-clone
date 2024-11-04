import Image from "next/image";

export default function Browser(){
    return(
        <div className="browser">
            <div className="top">
                <h3>Browse By Category</h3>
                <Image src={'/Arrow`s.png'} alt="Arrows" width={80} height={32}></Image>
            </div>
            <div className="cards">
                <div className="card">
                    <Image src={'/Phones.png'} alt="Smart Watch Icon" width={48} height={48}></Image>
                    <p>Phones</p>
                    </div>
                <div className="card">
                    <Image src={'/Smart Watches.png'} alt="Smart Watch Icon" width={48} height={48}></Image>
                    <p>Smart Watches</p>
                </div>
                <div className="card">
                    <Image src={'/Cameras.png'} alt="Camera Icon" width={48} height={48}></Image>
                    <p>Cameras</p>
                </div>
                <div className="card">
                    <Image src={'/Headphone.png'} alt="Phones Icon" width={48} height={48}></Image>
                    <p>Headphones</p>
                </div>
                <div className="card">
                    <Image src={'/Computers.png'} alt="Phones Icon" width={48} height={48}></Image>
                    <p>Computers</p>
                </div>
                <div className="card">
                    <Image src={'/Gaming.png'} alt="Phones Icon" width={48} height={48}></Image>
                    <p>Gaming</p>
                </div>
            </div>
        </div>
    )
}