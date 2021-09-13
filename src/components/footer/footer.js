import React from 'react';
import logo from '../../assets/img/prueba.png';
import PhoneIcon from '@material-ui/icons/Phone';
import MarkunreadIcon from '@material-ui/icons/Markunread';
import FacebookIcon from '@material-ui/icons/Facebook';
import NearMeIcon from '@material-ui/icons/NearMe';
const Footer = () => {
    return ( 
        <>
            <footer>
                <div className="container background">
                    <div class="header">
                        <div class="col img">
                            <img src={logo} alt="" />
                        </div>
                        <div class="col doble">
                            <div>
                                <NearMeIcon className="icon" />
                            </div>
                            <div>
                                <span> Poccnr, <strong>Gonbwar aswckar</strong>, 44,</span>
                                <span>Mockba, 115093</span> 
                            </div>
                        </div>
                        <div class="col">
                            <div>
                                <PhoneIcon className="icon" />
                            </div>
                            <div>
                                <span>+7 (495) <strong>137-77-45</strong></span> 
                                <span>10:00 - 20:00</span> 
                            </div>
                        </div>
                        <div class="col">
                            <div>
                                <MarkunreadIcon className="icon" />
                            </div>
                            <div>
                                <span className="sub">info@ventasdistribution.ru</span> 
                                <span className="sub">order@ventadistribution.ru</span> 
                            </div>
                        </div>
                        <div class="col">
                            <div>
                                <button>3AKA3ATb 3BOHOK</button>
                            </div>
                            <div>
                                <span className="small">Mepknnchinm Banm A mpmumanu 15 inst</span> 
                            </div>
                        </div>
                    </div>
                    <div class="links">
                        <div className="column">
                            <h3>KATAAOI</h3>
                            <div className="half nomargin">
                                <a href="">Becb katanor</a>
                                <a href="">Bnho</a>
                                <a href="">Boaka</a>
                            </div>
                            <div className="half">
                                <a href="">Wamnahckoe</a>
                                <a href="">Kohbrk</a>
                                <a href="">Bnckn</a>
                            </div>
                        </div>
                        <div className="column">
                            <h3>VENTA DISTRIBUTION</h3>
                            <div className="col">
                                <a href="">O komnahnm</a>
                                <a href="">Anor</a>
                                <a href="" className="red">Ctatb Anctpn6biotopom</a>
                            </div>
                        </div>
                        <div className="column">
                            <h3>COLL CETN</h3>
                            <div className="col">
                                <div className="half d-flex">
                                    <FacebookIcon className="icon" />  
                                    <span className="margin">BKohtakte</span>   
                                </div>
                                <div className="half d-flex">
                                    <FacebookIcon className="icon" />
                                    <span className="margin">Facebook</span>   
                                </div>
                            </div>
                        </div>
                        <div className="column">
                            <h3>NHOOPMAHNR</h3>
                            <div className="col">
                                <a href="">O komnahnm</a>
                                <a href="">Anor</a>
                                <a href="">Ctatb Anctpn6biotopom</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="button">
                    <span>VENTA Distribution c 2019 r. Bce npaaa eawnwehbl Paepafoka cañta: <strong className="red">Spacecode</strong> </span>
                </div>
            </footer>
        </>
    );
}
 
export default Footer;