import '../../UI styles/Consulta.css';

export const Consulta = ({ fecha, padecimiento, tratamiento, notas}) => {

    return(
        <div className="consulta">
            <p><b>Fecha de consulta:</b>  { fecha }</p>
            <p><b>Padecimiento:</b>  { padecimiento }</p>
            <p><b>Tratamiento y/o medicación:</b>  { tratamiento }</p>
            <p><b>Notas adicionales:</b>  { notas }</p>
        </div>
    )
}