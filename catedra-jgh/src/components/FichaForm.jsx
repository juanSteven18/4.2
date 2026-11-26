import { useState, useEffect, useRef } from 'react';
import { CATEGORIAS_CATEDRA } from '../data/fichasIniciales';

const ESTADO_VACIO = {
    titulo: '',
    categoria: CATEGORIAS_CATEDRA[0],
    anio: '',
    lugarFuente: '',
    descripcion: '',
    destacada: false
};

export default function FichaForm({ onGuardar, fichaEditando, onCancelarEdicion }) {
    const [formulario, setFormulario] = useState(ESTADO_VACIO);
    const [errorForm, setErrorForm] = useState('');

    // Referencias para manipulacion directa del DOM
    const formRef = useRef(null);
    const inputTituloRef = useRef(null);

    useEffect(() => {
        if (fichaEditando) {
            setFormulario({
                titulo: fichaEditando.titulo,
                categoria: fichaEditando.categoria,
                anio: fichaEditando.anio,
                lugarFuente: fichaEditando.lugarFuente,
                descripcion: fichaEditando.descripcion,
                destacada: Boolean(fichaEditando.destacada)
            });
            setErrorForm('');

            // Manipulacion del DOM
            if (formRef.current) {
                formRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
            if (inputTituloRef.current) {
                inputTituloRef.current.focus();
            }
        } else {
            setFormulario(ESTADO_VACIO);
            setErrorForm('');
        }
    }, [fichaEditando]);

    const manejarCambio = (e) => {
        const { name, value, type, checked } = e.target;
        setFormulario((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const manejarEnvio = (e) => {
        e.preventDefault();

        if (!formulario.titulo.trim() || !formulario.anio.trim() || !formulario.descripcion.trim()) {
            setErrorForm('Por favor completa el titulo, el ano o fecha y la descripcion de la ficha.');
            if (inputTituloRef.current) {
                inputTituloRef.current.focus();
            }
            return;
        }

        onGuardar({
            ...formulario,
            titulo: formulario.titulo.trim(),
            anio: formulario.anio.trim(),
            lugarFuente: formulario.lugarFuente.trim() || 'Archivo de la Catedra',
            descripcion: formulario.descripcion.trim()
        });

        setFormulario(ESTADO_VACIO);
        setErrorForm('');

        if (inputTituloRef.current) {
            inputTituloRef.current.focus();
        }
    };

    return (
        <section ref={formRef} className="panel-formulario" aria-labelledby="titulo-form-catedra">
            <header className="panel-header">
                <h2 id="titulo-form-catedra">
                    {fichaEditando ? 'Editar Registro de la Bitacora' : 'Nuevo Registro en la Bitacora'}
                </h2>
                <p>Documenta aportes cientificos, valores, testimonios o hechos vinculados al Dr. Jose Gregorio Hernandez.</p>
            </header>

            {errorForm && (
                <div className="mensaje-alerta alerta-error" role="alert">
                    {errorForm}
                </div>
            )}

            <form onSubmit={manejarEnvio} className="form-grid" noValidate>
                <div className="campo-grupo campo-completo">
                    <label htmlFor="titulo">Titulo del registro *</label>
                    <input
                        ref={inputTituloRef}
                        type="text"
                        id="titulo"
                        name="titulo"
                        value={formulario.titulo}
                        onChange={manejarCambio}
                        placeholder="Ej. Tratado Elementos de Bacteriologia"
                        required
                    />
                </div>

                <div className="campo-grupo">
                    <label htmlFor="categoria">Eje tematico *</label>
                    <select
                        id="categoria"
                        name="categoria"
                        value={formulario.categoria}
                        onChange={manejarCambio}
                    >
                        {CATEGORIAS_CATEDRA.map((cat) => (
                            <option key={cat} value={cat}>{cat}</option>
                        ))}
                    </select>
                </div>

                <div className="campo-grupo">
                    <label htmlFor="anio">Ano o fecha *</label>
                    <input
                        type="text"
                        id="anio"
                        name="anio"
                        value={formulario.anio}
                        onChange={manejarCambio}
                        placeholder="Ej. 1906 o 26/10/1864"
                        required
                    />
                </div>

                <div className="campo-grupo campo-completo">
                    <label htmlFor="lugarFuente">Lugar o fuente documental</label>
                    <input
                        type="text"
                        id="lugarFuente"
                        name="lugarFuente"
                        value={formulario.lugarFuente}
                        onChange={manejarCambio}
                        placeholder="Ej. Hospital Vargas / Isnotu / Archivo Universitario"
                    />
                </div>

                <div className="campo-grupo campo-completo">
                    <label htmlFor="descripcion">Descripcion / Relato de la ficha *</label>
                    <textarea
                        id="descripcion"
                        name="descripcion"
                        rows="4"
                        value={formulario.descripcion}
                        onChange={manejarCambio}
                        placeholder="Redacta el contexto, el aporte academico, el testimonio o la reflexion de la catedra..."
                        required
                    />
                </div>

                <div className="campo-check campo-completo">
                    <input
                        type="checkbox"
                        id="destacada"
                        name="destacada"
                        checked={formulario.destacada}
                        onChange={manejarCambio}
                    />
                    <label htmlFor="destacada">Marcar como ficha destacada de estudio</label>
                </div>

                <div className="acciones-form campo-completo">
                    <button type="submit" className="btn-primario">
                        {fichaEditando ? 'Guardar Cambios' : 'Registrar en Bitacora'}
                    </button>

                    {fichaEditando && (
                        <button type="button" className="btn-secundario" onClick={onCancelarEdicion}>
                            Cancelar Edicion
                        </button>
                    )}
                </div>
            </form>
        </section>
    );
}