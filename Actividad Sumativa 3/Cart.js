/* =============================================================
   Componente Cart
   Muestra el carrito de compras. Recibe el arreglo `items` y la
   función `onEliminar` (evento onClick por item). Usa renderizado
   condicional: si el carrito está vacío muestra un mensaje; si no,
   la lista de productos + el total.
   ============================================================= */

function Cart({ items, onEliminar }) {
    const total = items.reduce((suma, item) => suma + item.precioOferta, 0);

    return (
        <section id="carrito" className="container my-5">
            <h2 className="text-center mb-4">Tu carrito</h2>

            {/* Renderizado condicional: carrito vacío vs. con productos */}
            {items.length === 0 ? (
                <p className="text-center fst-italic">Tu carrito está vacío.</p>
            ) : (
                <React.Fragment>
                    <ul className="list-group mb-3">
                        {items.map((item, indice) => (
                            <li
                                key={item.id + "-" + indice}
                                className="list-group-item d-flex justify-content-between align-items-center"
                            >
                                <span>{item.nombre}</span>
                                <span>
                                    {formatearPrecio(item.precioOferta)}
                                    <button
                                        className="btn btn-sm btn-outline-light ms-3"
                                        onClick={() => onEliminar(indice)}
                                    >
                                        Eliminar
                                    </button>
                                </span>
                            </li>
                        ))}
                    </ul>

                    <p className="text-end fw-bold fs-5">
                        Total ({items.length} {items.length === 1 ? "producto" : "productos"}):{" "}
                        {formatearPrecio(total)}
                    </p>
                </React.Fragment>
            )}
        </section>
    );
}
