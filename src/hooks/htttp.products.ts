import { useEffect, useState } from 'react';
import axios from 'axios';
import { IProduct } from '../models';

export const useProductsHttp = () => {

    const [product, setProduct] = useState<IProduct[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState(false);


    const fetchProducts = async () => {
        try {
            setLoading(true);
            const respons = await axios.get<IProduct[]>('https://fakestoreapi.com/products?limit=5');
            setProduct(respons.data);
            setLoading(false);
        } catch (e: unknown) {
            setLoading(false);
            setError(true)
        }
    }

    // console.log(product);

    useEffect(() => {
        fetchProducts()
    }, [])

    return {
        product,
        loading,
        error,
    }

}

