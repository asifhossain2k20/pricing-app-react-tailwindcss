import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid'
import Feature from '../../Feature/Feature';

const PriceOption = ({option}) => {
    const {features}=option;
    return (
        <div className='bg-indigo-300 m-3 rounded-md p-6'>
            <div>
                <h3>
                    <span className='text-3xl text-white font-bold'>{option.price}</span>
                    <span className='text-md text-grey my-3'>/Month</span>
                </h3>
                <p className='text-xl my-4'>{option.name}</p>
            </div>
            {
                features.map((feature,idx)=><Feature 
                id={idx} 
                feature={feature}
                ></Feature>)
            }
            <button className='bg-green-500 w-full mt-4 rounded-md py-2 text-white font-bold '>Buy Now</button>
        </div>
    );
};

export default PriceOption;