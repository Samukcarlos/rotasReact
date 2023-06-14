import { NavLink} from 'react-router-dom';

import './styles.css';

export default function Products(){
    return(
<main className='main-product'>
        <section >
            <div className='products-content-conteiner container'>
                      
                <nav className='navBar-Products'>
                    <NavLink to="computers" className={({isActive})=>isActive ? 'menu-item menu-active':'menu-item'}>
                        Computadores
                    </NavLink  >
                    <NavLink to="eletronicos" className={({isActive})=>isActive ? 'menu-item menu-active':'menu-item'}>
                        Eletrônicos
                    </NavLink >
                    <NavLink to="Livros" className={({isActive})=>isActive ? 'menu-item menu-active':'menu-item'}>
                        Livros
                    </NavLink > 
                                  
                </nav>   
                
                       
            </div>            
          
        </section>
        </main>

        
        
    )
}