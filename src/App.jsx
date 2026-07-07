import { useState, useEffect } from "react";
import FormularioContacto from "./components/FormularioContacto.jsx";
import ListaContactos from "./components/ListaContactos.jsx";

const URL = "http://www.raydelto.org/agenda.php";

function App() {
    const [contactosGlobal, setContactosGlobal] = useState([]);
    const [contactosFiltrados, setContactosFiltrados] = useState([]);
    const [buscar, setBuscar] = useState("");
    const [mensaje, setMensaje] = useState(null); // { texto, tipo }

    useEffect(() => {
        cargarContactos();
    }, []);

    // =========================
    // GET CONTACTOS
    // =========================
    async function cargarContactos() {
        try {
            const res = await fetch(URL);
            const data = await res.json();
            setContactosGlobal(data);
            setContactosFiltrados(data);
        } catch (error) {
            mostrarMensaje("Error al cargar contactos", "danger");
        }
    }

    // =========================
    // POST CONTACTO
    // Se llama desde FormularioContacto.
    // Si "contacto" viene null, es porque falló una validación
    // y solo se debe mostrar el mensaje de error.
    // =========================
    async function guardarContacto(contacto, textoError, tipoError) {
        if (!contacto) {
            mostrarMensaje(textoError, tipoError);
            return;
        }

        try {
            await fetch(URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(contacto)
            });
            mostrarMensaje("Contacto guardado correctamente", "success");
            cargarContactos();
        } catch (error) {
            mostrarMensaje("Error al guardar contacto", "danger");
        }
    }

    // =========================
    // BUSCAR
    // =========================
    function handleBuscar() {
        const text = buscar.toLowerCase();
        const filtrados = contactosGlobal.filter(
            (c) =>
                c.nombre.toLowerCase().includes(text) ||
                c.apellido.toLowerCase().includes(text)
        );
        setContactosFiltrados(filtrados);
    }

    // =========================
    // RECARGAR
    // =========================
    function handleRecargar() {
        setBuscar("");
        cargarContactos();
    }

    // =========================
    // MENSAJES
    // =========================
    function mostrarMensaje(texto, tipo) {
        setMensaje({ texto, tipo });
        setTimeout(() => {
            setMensaje(null);
        }, 3000);
    }

    return (
        <div className="container mt-5 d-flex justify-content-center">
            <div className="card">
                <div className="card-header">
                    <h2 className="mb-0">Agenda Web</h2>
                </div>
                <div className="card-body">
                    {/* COMPONENTE HIJO: FORMULARIO */}
                    <FormularioContacto onGuardar={guardarContacto} />

                    {mensaje && (
                        <div className="mt-3">
                            <div className={`alert alert-${mensaje.tipo}`}>
                                {mensaje.texto}
                            </div>
                        </div>
                    )}

                    <hr />

                    {/* BOTONES DE BÚSQUEDA */}
                    <div className="d-flex gap-2 mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Buscar contacto..."
                            value={buscar}
                            onChange={(e) => setBuscar(e.target.value)}
                        />
                        <button className="btn btn-primary" onClick={handleBuscar}>
                            🔎 Buscar
                        </button>
                        <button className="btn btn-secondary" onClick={handleRecargar}>
                            🔄 Recargar
                        </button>
                    </div>

                    {/* COMPONENTE HIJO: LISTADO */}
                    <ListaContactos contactos={contactosFiltrados} />
                </div>
            </div>
            <footer className="text-center mt-4 text-muted">
                Agenda Web | Made by GM
            </footer>
        </div>
    );
}

export default App;
