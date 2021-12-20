import React from 'react'
import { useQuery } from '@apollo/client';
import GET_PROGRESS from '../../../Apollo/gql/getProgress';



export const ListarAvances = () => {
    const { loading, data, error } = useQuery(GET_PROGRESS);
    console.log(data)

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
                            <th>Date progress</th>
                            <th>Descript</th>
                            <th>obsers </th>
                        </tr>
                    </thead>
                    <tbody>
                        {

                            data.Avances.map((avance, index) => (
                                <tr key={avance.id}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{avance.date_progress}</td>
                                    <td>{avance.descript}</td>
                                    <td>{avance.obsers}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            }
        </>
    )
}

export default ListarAvances