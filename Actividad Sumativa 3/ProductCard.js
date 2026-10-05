/* =============================================================
   Componente ProductCard
   Muestra un producto individual. Dos cosas nuevas esta semana:

   1. useState propio (mostrarDetalle): un botón "Ver más / Ver
      menos" que cambia de texto al hacer click -- el elemento
      interactivo simple que pide la pauta.

   2. Renderizado condicional en el botón principal: si el
      producto YA está en el carrito (prop enCarrito, calculada
      en App a partir del estado del carrito), el botón muestra
      "En el carrito" y se deshabilita, en vez de "Agregar al
      carrito".
   ============================================================= */

function ProductCard({ producto, enCarrito, onAgregar }) {
    const [mostrarDetalle, setMostrarDetalle] = React.useState(false);

    return (
        <div className="col-12 col-md-6 col-lg-4">
            <div className="card h-100">
                <img src={producto.imagen} className="card-img-top" alt={producto.nombre} />
                <div className="card-body d-flex flex-column">
                    <h3 className="card-title h5">{producto.nombre}</h3>
                    <p className="card-text">{producto.descripcion}</p>

                    {/* Renderizado condicional: solo aparece si mostrarDetalle es true */}
                    {mostrarDetalle && (
                        <p className="card-text fst-italic text-muted">
                            Incluye garantía oficial de 1 año y despacho a todo Chile.
                        </p>
                    )}

                    <button
                        className="btn btn-sm btn-outline-light mb-2 align-self-start"
                        onClick={() => setMostrarDetalle(!mostrarDetalle)}
                    >
                        {mostrarDetalle ? "Ver menos" : "Ver más"}
                    </button>

                    <p className="mb-1">
                        <span className="text-decoration-line-through text-muted me-2">
                            {formatearPrecio(producto.precioNormal)}
                        </span>
                        <span className="fw-bold">{formatearPrecio(producto.precioOferta)}</span>
                    </p>

                    {/* Renderizado condicional: texto/estado del botón según si ya está en el carrito */}
                    <button
                        className={"btn mt-auto " + (enCarrito ? "btn-secondary" : "btn-primary")}
                        onClick={() => onAgregar(producto)}
                        disabled={enCarrito}
                    >
                        {enCarrito ? "En el carrito" : "Agregar al carrito"}
                    </button>
                </div>
            </div>
        </div>
    );
}
