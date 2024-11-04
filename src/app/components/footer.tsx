import Image from "next/image";

export default function Footer() {
    return(
        <div className="footer">
            <div className="center">
                <div>
                   <Image src={"/Logo.png"} alt="logo of brand" width={65.4} height={22.87}></Image>
                   <p>We are a residential interior design firm located in Portland. Our boutique-studio offers more than</p>
                </div>
                <div>
                    <ul className="services">
                    <li><h2>Services</h2></li>
                        <li>Bonus program</li>
                        <li>Gift cards</li>
                        <li>Credit and payment</li>
                        <li>Service contracts</li>
                        <li>Non-cash account</li>
                        <li>Payment</li>
                    </ul>
                    <ul className="assistance">
                    <li><h2>Assistance to the buyer</h2></li>
                        <li>Find an order</li>
                        <li>Terms of delivery</li>
                        <li>Exchange and return of goods</li>
                        <li>Guarantee</li>
                        <li>Frequently asked questions</li>
                        <li>Terms of use of the site</li>
                    </ul>
                </div>
            </div>
            <ul className="footicons">
                <li><Image src={"/Twitter.png"} alt="Twitter Icon" width={16} height={16}></Image></li>
                <li><Image src={"/Facebook.png"} alt="Facebook Icon" width={16} height={16}></Image></li>
                <li><Image src={"/Tiktok.png"} alt="Tiktok Icon" width={16} height={16}></Image></li>
                <li><Image src={"/Instagram.png"} alt="Instagram Icon" width={16} height={16}></Image></li>
            </ul>
        </div>
    )
}