/* =============================================================
   Componente ProductList
   Recibe el catálogo (estado que ahora viene de App, cargado por
   useEffect) y los ids que ya están en el carrito, para decirle a
   cada ProductCard si debe mostrarse como "En el carrito".
   ============================================================= */

function ProductList({ productos, idsEnCarrito, onAgregar }) {
    return (
        <section id="catalogo" className="container my-5">
            <h2 className="text-center mb-4">Catálogo</h2>

            <div className="row g-4">
                {productos.map((producto) => (
                    <ProductCard
                        key={producto.id}
                        producto={producto}
                        enCarrito={idsEnCarrito.includes(producto.id)}
                        onAgregar={onAgregar}
                    />
                ))}
            </div>
        </section>
    );
}
