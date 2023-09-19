import { useState } from "react";
import Tem from "../item/Tem";
import { AiOutlineMenu,AiOutlineClose} from 'react-icons/ai';


const Nav = () => {

    const [open,setopen]=useState(false)

    const routes = [
        { id: 1, name: 'Home', path: '/' },
        { id: 2, name: 'About', path: '/about' },
        { id: 3, name: 'Products', path: '/products' },
        { id: 4, name: 'Contact', path: '/contact' },
        { id: 5, name: 'Dashboard', path: '/dashboard' },
      ];
      
      




    return (
        <div className=" " >
           
<div onClick={()=>setopen(!open)} className="md:hidden text-3xl bg-rose-600">
    {
        open === true ? <AiOutlineClose className="text-white"></AiOutlineClose>: <AiOutlineMenu className='text-white '></AiOutlineMenu>
    }
    {/* <AiOutlineClose></AiOutlineClose> */}

</div>
<nav className={`md:flex space-x-6 duration-1000 ${open ? 'top-7': '-top-60'} absolute md:static bg-rose-600 p-5`}>
{
    routes.map(route => <Tem tem={route}></Tem>)
}

</nav>





        </div>
    );
};

export default Nav;