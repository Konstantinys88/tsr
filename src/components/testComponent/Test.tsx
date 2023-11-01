import React, { useState } from 'react';
import { IProduct } from '../../models';

import './test.scss';

interface ProductProps {
    products: IProduct
}

const Test = ({ products }: ProductProps) => {

    const [details, setDetails] = useState(false);

    const btnColor = details ? 'bg-yellow-400' : 'bg-blue-400';
    const btnClasses = [
        'test__btn',
        btnColor,
    ]

    return (
        <div className='border py-2 px-4 rounded flex flex-col items-center mb-2 test'>
            <img src={products.image} alt={products.title} className='w-1/6' />
            <p>{products.title}</p>
            <p className='font-bold'>{products.price}</p>
            <button
                onClick={() => setDetails(prevState => !prevState)}
                className={btnClasses.join(' ')}>
                {details ? 'Hide Details' : 'Show Details'}
            </button>

            {details &&
                <div>
                    <p>{products.description}</p>
                    <p style={{fontSize: '24px'}}>Rate: <span style={{fontWeight: 'bold'}}>{products.rating.rate}</span></p>
                </div>}


        </div>


    )
}

export default Test;

