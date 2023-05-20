export function formatearFecha(fechaString) {
    const fecha = new Date(fechaString)
    /* actualizamos al dia siguiente porque por alguna razon desconocida
    al llamar a la funcion dentro de Ficha.jsx nos devuelve la fecha anterior */
    fecha.setDate(fecha.getDate() + 1 )
    const dia = fecha.getDate().toString().padStart(2, '0');
    const mes = (fecha.getMonth() + 1).toString().padStart(2, '0');
    const año = fecha.getFullYear();
    return `${dia}/${mes}/${año}`;
  }