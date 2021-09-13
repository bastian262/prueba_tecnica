import {useState} from 'react';
import { getBeers } from '../api/beers';
import { useHistory } from 'react-router';

export const useProduct = ( ) => {

    const history = useHistory();

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    const getProducts = async (page = 1) => {
        setLoading(true);
        const result = await getBeers(page);
        if(page > 1){
            let array = [];
            let arraTemporal = array.concat(products,result);
            setProducts(arraTemporal);
        }else{
            setProducts(result);
        }
        setLoading(false);
    }

    const redirec = (product) => {
        localStorage.setItem("product", JSON.stringify(product));
        history.push(`/product/${product.id}`);
    }

    return [products, getProducts, loading,redirec]

}