import '../../UI styles/Consulta.css';

export const Consulta = ({ fecha, padecimiento, tratamiento, notas}) => {

    return(
        <table className="consulta">
            <tbody>
            <tr><th>Fecha de consulta:</th><td>{ fecha }</td></tr>
            <tr><th>Padecimiento:</th><td>{ padecimiento }</td></tr>
            <tr><th>Tratamiento y/o medicación:</th><td>{ tratamiento }</td></tr>
            <tr><th>Notas adicionales:</th><td>{(notas === '') ? `sin notas` : `${notas}`  }</td></tr>
            </tbody>
            
        </table>
    )
}