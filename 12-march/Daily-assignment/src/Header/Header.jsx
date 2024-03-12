import {CgShoppingCart} from 'react-icons/cg';
import {TbSearch} from 'react-icons/tb';
import {AiOutlineHeart} from 'react-icons/ai'
import "./Header.css";


 export default function Header() {
    return <header className="main-header">
        <div className="header-content">
            <ul className="left">
                <li>Home</li>
                <li>About</li>
                <li>Categories</li>
            </ul>
            <div className="center">MYSTORE</div>
            <div className="right">
                <TbSearch/>
                <AiOutlineHeart />
                <span className='cart-icon'>
                  <CgShoppingCart/>
                  <span>5</span>
                </span>

            </div>
        </div>
    </header>
}