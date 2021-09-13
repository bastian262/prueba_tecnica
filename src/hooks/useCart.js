import {useEffect, useState} from 'react';

export const useCart = ( initial = []) => {
    const [productsCart, setProductos] = useState(initial);
    const [total, setTotal] = useState(0);
    const onAdd = async (product, quantity = 1) => {
        var localS = localStorage.getItem("cart");
        setProductos(JSON.parse(localS));
        var filter = productsCart.filter(e => e.id === product.id);
        if(filter.length === 1){
            var array = [];
            productsCart.forEach((element) => {
                if(element.id === product.id){
                    if(element.quantity + quantity <= 0){

                    }else{
                        element.quantity += quantity;      
                    }
                }
                array.push(element);
            });
            setProductos(array);
        }else{
            const data = {
                id: product.id,
                name: product.name,
                url: product.image_url,
                price: product.target_fg,
                quantity:quantity,
                tag:product.tagline,
            }
            if(localS != null){
                setProductos([...productsCart, data]);
            }else{
                setTotal(data.price);
                setProductos(data);
            } 
        }
    };
    useEffect(() => {
        localStorage.setItem("cart",JSON.stringify(productsCart));
        setTotal(0);
        var contador = 0;
        productsCart.forEach((element) => {
            contador = contador + (parseInt(element.price) * element.quantity);
        })
        setTotal(contador);
    }, [productsCart]);
    const eliminarProducto = ( id ) => {
        if(productsCart.length === 0){
            var productosTemporal = JSON.parse(localStorage.getItem("cart"));
            if(productosTemporal === null){

            }else{
                setProductos(productosTemporal);
            }

        }
        var productsTemporales = productsCart.filter((e) => e.id !== id);
        setProductos(productsTemporales);
    }

    return [onAdd, eliminarProducto, productsCart, total];
} 