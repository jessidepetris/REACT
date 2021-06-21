import './styles.css';

export const CardComponent = () => {
    function saludar() {
        alert("Su producto fue agregado al carrito.");
    }
    return (
        <div className="card">
            <h1>Producto 1</h1>
            <strong>$1800</strong>
            <button className="boton" onClick={saludar}>Agregar al Carrito</button>
        </div>
    )
}