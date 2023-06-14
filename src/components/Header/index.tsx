import { NavLink } from 'react-router-dom';
import homeImg from '../../assets/Vector.svg';
import './styles.css';

export default function Header(){
    return(

        <header>
            <div className='header-content-conteiner container'>
                      
                <nav className='navBar'>
                    <NavLink to="home" className={({isActive})=>isActive ? 'menu-item menu-active':'menu-item'}>
                        Início
                    </NavLink  >
                    <NavLink to="Products" className={({isActive})=>isActive ? 'menu-item menu-active':'menu-item'}>
                        Produtos
                    </NavLink >
                    <NavLink to="subscription" className={({isActive})=>isActive ? 'menu-item menu-active':'menu-item'}>
                        Sobre nós
                    </NavLink >                    
                </nav>   
                     <div className="dsc-menu-item">
                     <img  src= {homeImg} alt="homeImg"/>
                    </div>     
            </div>
        </header>
        
    )
}