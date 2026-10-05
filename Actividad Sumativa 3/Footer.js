/* =============================================================
   Componente Footer
   Estático, sin estado ni props: mismo contacto de siempre.
   ============================================================= */

function Footer() {
    return (
        <footer id="contacto" className="bg-dark text-center py-4 mt-5">
            <p className="mb-1">BonfireRest Videogames</p>
            <p className="mb-2">Av. Providencia 1234, Santiago, Chile</p>
            <a href="https://instagram.com/gamezone" className="me-3">Instagram</a>
            <a href="https://twitter.com/gamezone">Twitter</a>
        </footer>
    );
}
