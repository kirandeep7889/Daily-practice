import Footer from "./Footer/Footer"
import Header from "./Header/Header"
import MainContent from "./MainContent/MainContent";


export default function  App() {

  const products = [
    { id: 1, name: 'Airdopes 161', description: 'Wireless Earbuds with Playback of upto 40 h', image: 'https://www.boat-lifestyle.com/cdn/shop/products/main_black_fa1c6ec3-93b7-443e-ae82-d5eeb34258f8_600x.png?v=1641206192' },
    { id: 2, name: 'Party Pal 200', description: 'Bluetooth speaker with 70W Sound Experience ', image: 'https://www.boat-lifestyle.com/cdn/shop/products/main-im_800x.png?v=1659552506' },
    { id: 3, name: 'Wave Call', description: 'Bluetooth Calling Smart watch with 2.0 inch display', image: 'https://www.boat-lifestyle.com/cdn/shop/products/wave-call-3_600x.png?v=1685530085' },
  ];


  return <>
    <Header />
    <MainContent products={products}/>
    <Footer/>
  </>
}