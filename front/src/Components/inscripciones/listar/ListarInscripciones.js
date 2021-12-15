import React from 'react'
import { useQuery } from '@apollo/client';
import { NavLink, useParams } from 'react-router-dom'
import GET_INSCRIPTION from '../../../Apollo/gql/getInscription';



export const ListarInscripciones = () => {
    const { loading, data, error } = useQuery(GET_INSCRIPTION);
    console.log(data)
    const { action } = useParams();
    return (
        <>
            {loading && <p>Cargando ...</p>}
            {error && <p>Se ha producido un error</p>}
            {
                data &&
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th>ID project</th>
                            <th>Student</th>
                            <th>State </th>
                            <th>Admission</th>
                            <th>Egress </th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {

                            data.Inscripciones.map((inscripcion, index) => (
                                <tr key={inscripcion.id}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{inscripcion.idproject.id_project}</td>
                                    <td>{inscripcion.student.name_user}</td>
                                    <td>{inscripcion.state_inscription}</td>
                                    <td>{inscripcion.date_admission}</td>
                                    <td>{inscripcion.egress_date}</td>
                                    <td>
                                        <NavLink className="btn btn-success" to={`/users}`}>Edit</NavLink>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            }
        </>
    )
}

export default ListarInscripciones