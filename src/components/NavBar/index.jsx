import './styles.css';
import './images/logo.png';

export const NavBar = () => {
    return (
        <div>
            <img className="logo" src="punto-pastelero-\src\components\NavBar\images\logo.png" width="80" height="80" alt="" />
            <div className="navbar">
                <nav>
                    <ul>
                        <a href="index.html"><li>Inicio</li></a>
                        <a href="index.html"><li>Productos</li></a>
                        <a href="index.html"><li>Nosotros</li></a>
                        
                    </ul>
                </nav>
            </div>
        </div>
    )
}