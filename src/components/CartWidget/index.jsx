import './styles.css';

export const CartWidget= () => {
    return (
        <div className="Carrito" >
            <img className="logoCarrito" src="punto-pastelero-\src\components\NavBar\images\carrito.png" width="20" height="20" alt="" />
            <div className="carritoText">
                <ul>
                    <a href="carrito.html"><li>Carrito</li></a>
                </ul>
            </div>
        </div>
    )
}