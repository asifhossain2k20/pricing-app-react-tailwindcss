import React from 'react';
import PriceOption from '../PriceOption/PriceOption';

const Pricing = () => {
    const pricingOption=[
        {id:1,name:'Free',price:0,features:[
            'Awsome Featue',
            'Extra Feature',
            'Unnecssary Feature',
            'Hudai',
            'Ac Hey'
        ]},
        {id:2,name:'Medium',price:9.99,features:[
            'Awsome Featue',
            'Extra Feature',
            'Unnecssary Feature',
            'Hudai',
            'Ac Hey'
        ]},
        {id:3,name:'Premium',price:19.99,features:[
            'Awsome Featue',
            'Extra Feature',
            'Unnecssary Feature',
            'Hudai',
            'Ac Hey'
        ]},
    ]
    return (
        <div>
            <h2 className='text-5xl font-bold bg-indigo-800 text-white'>Best Price</h2>
            <div className='grid md:grid-cols-3 gap-3 mt-4'>
                {
                    pricingOption.map(option=><PriceOption
                    key={option.id}
                    option={option}
                    ></PriceOption>)
                }
            </div>
        </div>
    );
};

export default Pricing;