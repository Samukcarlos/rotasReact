import { Outlet } from "react-router-dom";

import Promotion from '../../Products';

export default function Products(){
    return(
        <>
            <Promotion />                                        
            <Outlet />
        </>
        
    )
}


