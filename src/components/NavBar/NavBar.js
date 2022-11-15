import React, { useState } from 'react';
import LInk from '../Link/LInk';
import { Bars3Icon,XMarkIcon } from '@heroicons/react/24/solid'


const NavBar = () => {
    const[open,setOpen]=useState(false);

    const routes=[
        {id:1,name:'Home',path:'/home'},
        {id:2,name:'Products',path:'/products'},
        {id:3,name:'Order',path:'/orders'},
        {id:4,name:'Contact',path:'/contact'},
        {id:5,name:'About',path:'/about'},
    ]
    return (
        <nav className='bg-purple-200 w-100 h-12'>
            <div onClick={()=>setOpen(!open)} className="h-6 w-6 md:hidden">
            {
                open ?
                <XMarkIcon />
                 : 
                 <Bars3Icon/>
            }
            </div>
        
            <ul className={`bg-purple-200 md:flex justify-center absolute md:static duration-500 w-full ease-in ${open ? 'top-6':'top-[-120px]'}`}>
                {
                    routes.map(route=><LInk key={route.id} 
                    route={route}
                    ></LInk>)
                }
            </ul>
        </nav>
    );
};

export default NavBar;