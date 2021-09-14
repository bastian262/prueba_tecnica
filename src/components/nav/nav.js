import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingBasketOutlinedIcon from '@material-ui/icons/ShoppingBasketOutlined';
import logo from '../../assets/img/prueba.png';
import decoration from '../../assets/img/decoration2.png'
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import FacebookIcon from '@material-ui/icons/Facebook';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
const Navbar = () => {

    const history = useHistory();

    // metodo para abrir y cerrar el menu de la versión movil
    const openCloseNav = open => {
        let links = document.getElementById("links");
        let opacity = document.getElementById("opacity");
        let close = document.getElementById("close");
        if(!open){
            links.classList.remove("links");
            links.classList.add("linksClose");
            opacity.classList.remove("opacity");
            opacity.classList.add("opacityClose");
            close.classList.remove("close");
            close.classList.add("close2");
        }else{
            links.classList.remove("linksClose");
            links.classList.add("links");
            opacity.classList.remove("opacityClose");
            opacity.classList.add("opacity");
            close.classList.remove("close2");
            close.classList.add("close");
        }
    }
    const redirectCart = () => {
        history.push("/cart");
    }
    return ( 
        <>
            <nav>
                <div className="container">
                    <div className="header">
                        <div className="col-1 desktop">
                            <span>OKOMNAHNN</span>
                            <span>AMOR</span>
                            <FacebookIcon className="icon"/>
                            <FacebookIcon className="icon"/>
                        </div>
                        <div className="col-1 movil">
                            <MenuIcon className="icon" onClick={() => openCloseNav(true)} />
                        </div>
                        <div className="col-2">
                            <img src={logo} alt="" />
                        </div>
                        <div className="col-1">
                            <button className="desktop">
                                CTACB ANCTPNBIOTOM
                            </button>
                            <div className="shopIcon" onClick={() => redirectCart()}>
                                <ShoppingBasketOutlinedIcon className="icon"/>
                            </div>
                        </div>
                    </div>
                    <div className="opacityClose" id="opacity" onClick={() => openCloseNav(false)}></div>
                    <CloseOutlinedIcon id="close" className="close2" onClick={() => openCloseNav(false)} />
                    <div className="linksClose" id="links">
                        <div className="ul">
                            <h3 className="movil">Links</h3>
                            <Link to="/">NECN KATANOR</Link>
                            <div className="cuadrado desktop"></div>
                            <Link to="/">BNHO</Link>
                            <div className="cuadrado desktop"></div>
                            <Link to="/">BODKA</Link>
                            <div className="cuadrado desktop"></div>
                            <Link to="/">WAMNAHCKOE</Link>
                            <div className="cuadrado desktop"></div>
                            <Link to="/">KOHBRK</Link>
                            <div className="cuadrado desktop"></div>
                            <Link to="/contact">BNCKN</Link>
                        </div>
                        <div className="social movil">
                            <FacebookIcon className="iconSocial" />
                            <FacebookIcon className="iconSocial" />
                        </div>
                        <button className="movil">CTACB ANCTPNBIOTOM</button>
                        <img src={decoration} alt="decoration" className="decoration desktop" />
                    </div>				
                </div>
            </nav>
        </> 
    );
}
 
export default Navbar;