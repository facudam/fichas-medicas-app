
export const formatearDNI = (numero) => {
    const numeroFormateado = numero.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return numeroFormateado;
}