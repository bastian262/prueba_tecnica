import React,{useEffect, useState} from 'react';
import { useHistory } from 'react-router';
import { useCart } from '../../hooks/useCart';
import { useProduct } from '../../hooks/useProduct';
import grape from '../../assets/img/uva.PNG'
import pit from '../../assets/img/jarro.PNG'
import Navbar from '../../components/nav/nav';
import Footer from '../../components/footer/footer';
import ControlPointIcon from '@material-ui/icons/ControlPoint';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import ShoppingBasketOutlinedIcon from '@material-ui/icons/ShoppingBasketOutlined';
import ShareIcon from '@material-ui/icons/Share';

const DetailProductPage = () => {
    var localS = JSON.parse(localStorage.getItem("cart"));
    var cart = localS === null? [] : localS;
    const [onAdd,,,] = useCart(cart);
    const [products,,loading,redirec,getProducts4] = useProduct();
    const history = useHistory();
    const product = JSON.parse(localStorage.getItem("product"));
    const [quantity, setQuantity] = useState(1);
    useEffect(() => {
        if(product === null){
            history.push("/");
        }else{
            getProducts4();
            setQuantity(1);
        }
    }, []);

    const sumar = (num) => {
        if(quantity + num === 0){

        }else{
            setQuantity(quantity + num);
        }
    }
    return ( 
        <>
        <div className="fondo">
            <Navbar />
            <div class="container">
                <div class="row">
                    <div class="col-description">
                        <div class="flex">
                            <strong>RNABHAR</strong>
                            <div></div>
                            <strong>KATAMOR TOBAPOB</strong>
                        </div>
                        <div class="titleProduct">
                            <h2>{product.name}</h2>
                            <h5>VENTA DISTRIBUTION</h5>
                        </div>
                        <div class="flex-start">
                            <div><img src={grape} width="30"/><span>Kpachoe nonycnaakoe</span></div>
                            <div><img src={pit} width="30" /><span>0,75 N.</span></div>
                        </div>
                        <div class="desc">
                            <span>MponeboAntemb</span>
                            <span>VENTA DISTRIBUTION</span>
                        </div>
                        <div class="desc">
                            <span>Ctpaha rponcxoxaehnr</span>
                            <span>Poccnr</span>
                        </div>
                        <div class="desc">
                            <span>pernoh</span>
                            <span>LLnehkthenwlsk</span>
                        </div>
                        <div class="desc">
                            <span>Toa</span>
                            <span>2015 r.</span>
                        </div>
                        <div class="desc">
                            <span>Kpenoctb hamntika</span>
                            <span> 13% </span>
                        </div>
                        <div class="desc">
                            <span>bbaepxka b emkoctn</span>
                            <span>Boyka</span>
                        </div>
                        <div class="desc">
                            <span>Motehliman xpahehnr</span>
                            <span> 5-6 net</span>
                        </div>
                        <div class="box">
                            <span className="price">P 2600</span>
                            <div class="quantity">
                                <RemoveCircleOutlineIcon class="less" onClick={() => sumar(-1)} />
                                <span className="span">{quantity}</span>
                                <ControlPointIcon class="more" onClick={() => sumar(1)}/>
                                <div className="btnAbsolute"><ShoppingBasketOutlinedIcon className="icon" onClick={() => onAdd(product,quantity)} /></div>
                            </div>
                            <ShareIcon className="color"/>
                        </div>
                    </div>
                    <div class="col-product">
                        <div class="product">
                            <img src={product.image_url} alt="" className="absolute" />
                            {/* <div class="col-2">
                                <img src={product.image_url} alt="" />
                            </div> */}
                            <img src="" alt="" />
                            <img src="" alt="" />
                            <div class="col-2">
                                <div className="division">
                                    <div class="option"><img src={product.image_url} alt="" /></div>
                                    <div class="option"><img src={product.image_url} alt="" /></div>
                                    <div class="option"><img src={product.image_url} alt="" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="titleDesc">
                        <h3>OHNCAHNE</h3>
                    </div>
                        <div className="raw">
                            <div class="description">
                                <div>
                                    <span>Aeryctalnohhble xapaktepnctnkn</span>
                                    <span>{product.description}</span>
                                </div>
                                <div>
                                    <span>Tacpohomnr</span>
                                    <span>{product.description}</span>
                                </div>
                                <div>
                                    <span>Bnhorpaahnkm</span>
                                    <span>{product.description}</span>
                                </div>
                                <div>
                                    <span>Cnocoo BblAepxkn</span>
                                    <span>{product.description}</span>
                                </div>
                                <div>
                                    <span>Cnocoo  xapaktepnctnkn</span>
                                    <span>{product.description}</span>
                                </div>
                            </div>
                            <div class="description2">
                                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
                            </div>
                        </div>
                </div>
                <div class="row">
                    <div class="titleDesc">
                        <h2>NOXOXNE TOBAPBL</h2>
                    </div>
                    <div class="topProducts">
                        <div className="products">
                            {products.length > 0 ? 
                                products.map((element) => {
                                    const imagen = element.image_url;
                                    return (
                                        <>
                                            <div class="product">    
                                                <div class="card" onClick={() => redirec(element)}>
                                                    <div class="square"></div>
                                                    <div class="square2"></div>
                                                    <div class="circle"></div>
                                                    <div class="circle2"></div>
                                                    <div class="circle3"></div>
                                                    <div class="circle4"></div>
                                                    <span className="titleSmall">{element.tagline}</span>
                                                    <span className="titleProduct">{element.name}</span>
                                                    <div className="imagen">
                                                        <img src={imagen} alt="" />
                                                    </div>
                                                    <div className="price">
                                                        <span className="og">P  {Math.round(element.target_fg)}</span><span className="fg">{Math.round(element.target_og)}</span>
                                                    </div>
                                                    <span className="ph">{element.ph} π</span>
                                                    <div class="addCart">
                                                        <button></button>
                                                    </div>
                                                </div>
                                                <div className="buttonAdd" onClick={() => onAdd(element)}>
                                                    <ShoppingBasketOutlinedIcon className="icon"/>
                                                </div>
                                            </div>
                                        </>
                                    );
                                })
                                : null
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
        </>
    );
}
 
export default DetailProductPage;