import { useEffect, useState } from 'react';
import axios from 'axios';
import { IProduct } from '../models';

export const useProductsHttp = () => {

    const [product, setProduct] = useState<IProduct[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState('');

    const addProduct = (product: IProduct) => {
        setProduct(prev => [...prev, product])
    }


    const fetchProducts = async () => {
        try {
            setError('')
            setLoading(true);
            const respons = await axios.get<IProduct[]>('https://fakestoreapi.com/products/category/jewelery?limit=5');
            setProduct(respons.data);
            setLoading(false);
        } catch (e: unknown) {
            setLoading(false);
            setError('Error data')
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
        addProduct,
    }

}

