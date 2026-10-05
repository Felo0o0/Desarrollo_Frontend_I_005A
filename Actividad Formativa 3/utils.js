/* =============================================================
   Utilidades compartidas. Antes esta función vivía repetida
   dentro de data.js -- se separa acá para que cualquier
   componente la reutilice sin duplicar código.
   ============================================================= */

function formatearPrecio(numero) {
    return "$" + numero.toLocaleString("es-CL");
}
