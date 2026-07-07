import { useState } from "react";

function FormularioContacto({ onGuardar }) {
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const nombreTrim = nombre.trim();
        const apellidoTrim = apellido.trim();
        const telefonoTrim = telefono.trim();

        // VALIDACIONES (idénticas a la versión original)
        if (!nombreTrim || !apellidoTrim || !telefonoTrim) {
            onGuardar(null, "Todos los campos son obligatorios", "warning");
            return;
        }
        if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(nombreTrim)) {
            onGuardar(null, "Nombre inválido", "warning");
            return;
        }
        if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(apellidoTrim)) {
            onGuardar(null, "Apellido inválido", "warning");
            return;
        }
        if (!/^\d+$/.test(telefonoTrim)) {
            onGuardar(null, "Teléfono solo números", "warning");
            return;
        }
        if (telefonoTrim.length < 7 || telefonoTrim.length > 15) {
            onGuardar(null, "Teléfono entre 7 y 15 dígitos", "warning");
            return;
        }

        const contacto = { nombre: nombreTrim, apellido: apellidoTrim, telefono: telefonoTrim };
        onGuardar(contacto);

        // Limpiar el formulario
        setNombre("");
        setApellido("");
        setTelefono("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="row">
                <div className="col-md-4 mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Nombre"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                    />
                </div>
                <div className="col-md-4 mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Apellido"
                        value={apellido}
                        onChange={(e) => setApellido(e.target.value)}
                    />
                </div>
                <div className="col-md-4 mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Teléfono"
                        value={telefono}
                        onChange={(e) => setTelefono(e.target.value)}
                    />
                </div>
            </div>
            <button className="btn btn-success" type="submit">
                Guardar Contacto
            </button>
        </form>
    );
}

export default FormularioContacto;
