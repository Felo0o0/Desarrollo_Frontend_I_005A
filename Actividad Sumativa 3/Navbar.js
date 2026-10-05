/* =============================================================
   Componente Navbar
   Recibe por props la cantidad de items del carrito para mostrar
   el contador. No maneja estado propio.
   ============================================================= */

function Navbar({ cantidadEnCarrito }) {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <a className="navbar-brand" href="#inicio">BonfireRest Videogames</a>

                    <a href="#carrito" className="btn btn-outline-light position-relative">
                        Carrito
                        <span className="badge rounded-pill bg-danger">{cantidadEnCarrito}</span>
                    </a>
                </div>
            </nav>
        </header>
    );
}
