import React from 'react';
import Navbar from '../../components/nav/nav';
import Footer from '../../components/footer/footer';
import { useCart } from '../../hooks/useCart';
import ControlPointIcon from '@material-ui/icons/ControlPoint';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
const Cart = () => {

    var localS = JSON.parse(localStorage.getItem("cart"));
    var cart = localS === null? [] : localS;
    const [onAdd,eliminarProducto, productsCart, total] = useCart(cart);    

    return ( 
        <>
            <div className="fondo">
                <Navbar />
                <div class="container">
                    <div class="title">
                        <div>
                            <strong>RNABHAR</strong>
                            <div></div>
                            <span>KOP3NHA</span>
                        </div>
                        <h2>KOP3NHA</h2>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        {productsCart.length > 0?

                            <div class="cart">
                                {productsCart.map((element) => {
                                    return (
                                        <>
                                            <div class="productCart">
                                                <div class="square"></div>
                                                <div class="square2"></div>
                                                <div class="circle"></div>
                                                <div class="circle2"></div>
                                                <div class="circle3"></div>
                                                <div class="circle4"></div>
                                                <div className="div">
                                                    <div class="imagen">
                                                        <img src={element.url} alt="" />
                                                    </div>
                                                    <div class="names">
                                                        <span class="tag">{element.tag}</span>
                                                        <span class="name">{element.name}</span>
                                                        <span class="price">P {element.price}</span>
                                                        <span class="quantity">{element.quantity} π</span>
                                                    </div>
                                                </div>
                                                <div class="quantities">
                                                    <span onClick={() => onAdd(element, 1)}><ControlPointIcon className="moreIcon" /></span>
                                                    <span className="quantityTotal">{element.quantity}</span>
                                                    <span onClick={() => onAdd(element, -1)}><RemoveCircleOutlineIcon className="lessIcon" /></span>
                                                </div>

                                                <div class="subtotal desktop">
                                                    <span class="sub">P {element.quantity * element.price}</span>
                                                </div>

                                                <div class="deleted">
                                                    <button onClick={() => eliminarProducto(element.id)}>x</button>
                                                </div>
                                            </div>
                                        </>
                                    );
                                })}
                                

                                <div class="details">
                                    <div class="total">
                                        <span className="sub">
                                            NTOTO:
                                        </span>
                                        <div>
                                            {productsCart.map((element, i) => {
                                                return (
                                                    <>
                                                       {i === (element.length - 1)? <span className="detailsName">{element.quantity} {element.name}</span> : <span className="detailsName">{element.quantity} {element.name},</span>}  
                                                    </>
                                                );
                                            })}
                                            <span className="totalFinal">P {total}</span>
                                        </div>
                                    </div>
                                    <div class="btn">
                                        <button>
                                            D0OPMHTb 3AKA3
                                        </button>
                                    </div>
                                </div>
                            </div>

                            :

                            <h2>Empty</h2>

                        }
                    </div>
                </div>
            </div>
            <Footer />
        </>
     );
}
 
export default Cart;