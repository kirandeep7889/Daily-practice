import prod from "../assets/Product.png";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
    FaPinterest,
    FaCartPlus,
} from "react-icons/fa";


import "./MainContentArea.css"


export default function MainContentArea() {
    
    return (
        <div className="single-product-main-content">
            <div className="layout">
                <div className="single-product-page">
                    <div className="left">
                        <img  src="https://cdn.shopify.com/s/files/1/0057/8938/4802/products/ion-W_2500x.png?v=1678780574"/>
                    </div>
                    <div className="right">
                        <span className="name">Nirvana Ion</span>
                        <span className="price">&#8377;2,299</span>
                        <span className="desc">Bluetooth Wireless Earbuds with Crystal Bionic Sound powered by HiFi®️ DSP, 120 Hours Playback, Dual EQ Modes, Quad Mics with ENx™ Technology</span>

                        <div className="cart-buttons">
                            <div className="quantity-buttons">
                                <span>-</span>
                                <span>5</span>
                                <span>+</span>
                            </div>
                            <button className="add-to-cart-button">
                                <FaCartPlus size={20} />
                                ADD TO CART
                            </button>
                        </div>
                        <span className="divider" />
                        <div className="info-item">
                            <span className="text-bold">
                                Category:
                                <span>Headphones</span>
                            </span>
                            <span className="text-bold">
                                Share:
                                <span className="social-icons">
                                    <FaFacebookF size={16} />
                                    <FaTwitter size={16} />
                                    <FaInstagram size={16} />
                                    <FaLinkedinIn size={16} />
                                    <FaPinterest size={16} />
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
