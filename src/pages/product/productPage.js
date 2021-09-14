import React,{useState, useEffect} from 'react';
import Footer from '../../components/footer/footer';
import Navbar from '../../components/nav/nav';
import { useProduct } from '../../hooks/useProduct';
import { useCart } from '../../hooks/useCart';
import decoration from '../../assets/img/esquina.PNG';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import ShoppingBasketOutlinedIcon from '@material-ui/icons/ShoppingBasketOutlined';
import CircularProgress from '@material-ui/core/CircularProgress';

const ProductPage = () => {
    
    var localS = JSON.parse(localStorage.getItem("cart"));
    var cart = localS === null? [] : localS;
    const [onAdd,,,] = useCart(cart);
    const [products, getProducts, loading,redirec] = useProduct();
    const [page, setPage] = useState(1);

    // Metodo para obtener productos de la siguiente página
    useEffect(() => {
        getProducts(page);
    }, [page]);
    // Metodo para obtener productos de la primera pagina
    useEffect(() => {
        getProducts(page);
    }, []);
    // Metodo para manejar collapse (Acordion)
    const openCloseCollapse = (num) => {
        let name = "collapse"+num;
        let name2 = "title"+num;
        let doc = document.getElementById(name);
        let doc2 = document.getElementById(name2);
        if(doc.className === "collapse")
        {
            doc.classList.remove("collapse");
            doc.classList.add("collapseClose");
            doc2.classList.remove("title3");
            doc2.classList.add("title2");
        }else{
            doc.classList.remove("collapseClose");
            doc.classList.add("collapse");
            doc2.classList.remove("title2");
            doc2.classList.add("title3");
        }
    }

    // Metodo para abrir y cerrar los filtros en versión movil
    const openCloseFilter = (open) => {
        let doc = document.getElementById("filter");
        let doc2 = document.getElementById("opacityFilter");
        let doc3 = document.getElementById("closeFilter");
        if(!open){
            doc.style.left = "-320px";
            doc2.classList.remove("opacityFilter");
            doc2.classList.add("opacityFilterClose");
            doc3.classList.remove("closeFilter");
            doc3.classList.add("closeFilter2");
        }else{
            doc.style.left = "0px";
            doc2.classList.remove("opacityFilterClose");
            doc2.classList.add("opacityFilter");
            doc3.classList.remove("closeFilter2");
            doc3.classList.add("closeFilter");
        }
    }

    return ( 
        <>
        <div className="fondo">
            <Navbar />
            <div class="container">
                <div class="title">
                    <div>
                        <strong>RNABHAR</strong>
                        <div></div>
                        <span>KATAMOR ROBAPOB</span>
                    </div>
                    <h2>KATAMOR ROBAPOB</h2>
                </div>
            </div>
            <div class="container">
                <div class="row">
                    <div className="opacityFilterClose" id="opacityFilter">
                    </div>
                    <CloseOutlinedIcon id="closeFilter" className="closeFilter2" onClick={() => openCloseFilter(false) }  />
                    <div class="movil">
                        <button onClick={() => openCloseFilter(true)}>Open Filters</button>
                    </div>
                    <div className="filter" id="filter">
                        <div className="fondo">
                            <img src={decoration} alt="decoration" width="50" />
                            <h2>0HABTP</h2>
                            <span class="title2" id="title1" onClick={() => openCloseCollapse(1)}>WEHA</span>
                            <div class="collapseClose"  id="collapse1">
                                <div class="price">

                                </div>
                            </div>
                            <div class="divider"></div>
                            <span class="title2" id="title2" onClick={() => openCloseCollapse(2)}>UBET</span>
                            <div class="collapseClose" id="collapse2">
                                <span class="options">Kpachnoe </span>
                                <span class="options">Genoe </span>
                                <span class="options">Poseboe </span>
                            </div>
                            <div class="divider"></div>
                            <span class="title2" id="title3" onClick={() => openCloseCollapse(3)}>Caxap</span>
                            <div class="collapseClose" id="collapse3">
                                <span class="options">Kpachnoe </span>
                                <span class="options">Genoe </span>
                                <span class="options">Poseboe </span>
                            </div>
                            <div class="divider"></div>
                            <span class="title2" id="title4" onClick={() => openCloseCollapse(4)}>OGBEM</span>
                            <div class="collapseClose" id="collapse4">
                                <span class="options">Kpachnoe </span>
                                <span class="options">Genoe </span>
                                <span class="options">Poseboe </span>
                            </div>
                            <div class="divider"></div>
                            <span class="title2" id="title5" onClick={() => openCloseCollapse(5)}>CTPAHA</span>
                            <div class="collapseClose" id="collapse5">
                                <span class="options">Kpachnoe </span>
                                <span class="options">Genoe </span>
                                <span class="options">Poseboe </span>
                            </div>
                        </div>
                    </div>
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
                        {!loading?
                        
                            <div class="more">
                                <button onClick={() => setPage(page + 1)}>NEXT PAGE</button>
                            </div>
                        :
                        <div className="loading">
                            <CircularProgress />
                        </div>
                        }
                    </div>
                </div>
            </div>
        </div>
        <Footer />
        </> 
    );
}
 
export default ProductPage;