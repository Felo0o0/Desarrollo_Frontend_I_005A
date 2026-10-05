/* =============================================================
   Componente App (raíz)

   Cambios de esta semana respecto a la Semana 7:
   - El catálogo YA NO es una constante fija: ahora es estado
     (useState) que arranca vacío y se llena con useEffect al
     montar el componente, simulando la carga desde una fuente
     externa (productos.json).
   - Se agregan estados de "cargando" y "errorCarga" para dar
     feedback mientras se espera la respuesta, con renderizado
     condicional de tres vías (cargando / error / listo).
   - idsEnCarrito se deriva del carrito en cada render (no hace
     falta guardarlo como estado aparte) y se le pasa a
     ProductList para que cada card sepa si ya fue agregada.
   ============================================================= */

function App() {
    const [productos, setProductos] = React.useState([]);
    const [cargando, setCargando] = React.useState(true);
    const [errorCarga, setErrorCarga] = React.useState(null);
    const [carrito, setCarrito] = React.useState([]);

    // useEffect con arreglo de dependencias vacío [] -> se ejecuta
    // una sola vez, justo después del primer render (igual que
    // "cargar datos al iniciar la página").
    React.useEffect(() => {
        fetch("productos.json")
            .then((respuesta) => {
                if (!respuesta.ok) {
                    throw new Error("No se pudo obtener productos.json (HTTP " + respuesta.status + ")");
                }
                return respuesta.json();
            })
            .then((datos) => {
                setProductos(datos);
                setCargando(false);
            })
            .catch((error) => {
                setErrorCarga(error.message);
                setCargando(false);
            });
    }, []);

    function agregarAlCarrito(producto) {
        setCarrito((carritoActual) => [...carritoActual, producto]);
    }

    function eliminarDelCarrito(indice) {
        setCarrito((carritoActual) => carritoActual.filter((_, i) => i !== indice));
    }

    // Ids de productos que ya están en el carrito, para que
    // ProductCard pueda mostrarse como "En el carrito".
    const idsEnCarrito = carrito.map((item) => item.id);

    return (
        <React.Fragment>
            <Navbar cantidadEnCarrito={carrito.length} />

            <main id="inicio">
                {/* Renderizado condicional de 3 vías: cargando / error / catálogo listo */}
                {cargando ? (
                    <p className="text-center my-5 fst-italic">Cargando productos...</p>
                ) : errorCarga ? (
                    <p className="text-center my-5 text-danger">
                        No pudimos cargar el catálogo: {errorCarga}
                    </p>
                ) : (
                    <ProductList
                        productos={productos}
                        idsEnCarrito={idsEnCarrito}
                        onAgregar={agregarAlCarrito}
                    />
                )}

                <Cart items={carrito} onEliminar={eliminarDelCarrito} />
            </main>

            <Footer />
        </React.Fragment>
    );
}

// Punto de entrada: monta <App /> en el div#root del HTML.
const raiz = ReactDOM.createRoot(document.getElementById("root"));
raiz.render(<App />);
