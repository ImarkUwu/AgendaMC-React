function ListaContactos({ contactos }) {
    return (
        <>
            <div className="d-flex justify-content-between align-items-center mb-2">
                <h5>Contactos</h5>
                <span className="badge bg-primary">
                    Total: <span>{contactos.length}</span>
                </span>
            </div>

            <div className="table-container">
                <table className="table table-striped table-hover">
                    <thead className="table-dark">
                        <tr>
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>Teléfono</th>
                        </tr>
                    </thead>
                    <tbody>
                        {contactos.map((c, index) => (
                            <tr key={index}>
                                <td>{c.nombre}</td>
                                <td>{c.apellido}</td>
                                <td>{c.telefono}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default ListaContactos;
