import { useState } from 'react';
import { CATEGORIAS_CATEDRA } from '../data/fichasIniciales';

export default function FichaLista({ fichas, onEditar, onEliminar, onRestaurarDemo }) {
    const [busqueda, setBusqueda] = useState('');
    const [categoriaFiltro, setCategoriaFiltro] = useState('Todas');

    const fichasFiltradas = fichas.filter((ficha) => {
        const coincideCategoria =
            categoriaFiltro === 'Todas' || ficha.categoria === categoriaFiltro;

        const texto = busqueda.toLowerCase();
        const coincideTexto =
            ficha.titulo.toLowerCase().includes(texto) ||
            ficha.descripcion.toLowerCase().includes(texto) ||
            ficha.lugarFuente.toLowerCase().includes(texto) ||
            ficha.anio.toLowerCase().includes(texto);

        return coincideCategoria && coincideTexto;
    });

    const confirmarEliminacion = (ficha) => {
        const aceptado = window.confirm(
            `Deseas eliminar el registro "${ficha.titulo}" de la bitacora?`
        );
        if (aceptado) {
            onEliminar(ficha.id);
        }
    };

    return (
        <section className="panel-listado" aria-labelledby="titulo-listado-catedra">
            <div className="listado-cabecera">
                <div>
                    <h2 id="titulo-listado-catedra">Registros de la Bitacora ({fichasFiltradas.length})</h2>
                    <p>Consulta, filtra, actualiza o elimina fichas almacenadas en localStorage.</p>
                </div>

                <button type="button" className="btn-restaurar" onClick={onRestaurarDemo}>
                    Restaurar ejemplos iniciales
                </button>
            </div>

            <div className="barra-filtros">
                <input
                    type="search"
                    className="input-busqueda"
                    placeholder="Buscar por titulo, ano, lugar o palabra clave..."
                    value={busqueda}
                    onChange={(e) => setBusqueda(e.target.value)}
                    aria-label="Buscar fichas"
                />

                <div className="pills-categorias" role="group" aria-label="Filtrar por eje tematico">
                    <button
                        type="button"
                        className={`pill-btn ${categoriaFiltro === 'Todas' ? 'activo' : ''}`}
                        onClick={() => setCategoriaFiltro('Todas')}
                    >
                        Todas
                    </button>
                    {CATEGORIAS_CATEDRA.map((cat) => (
                        <button
                            key={cat}
                            type="button"
                            className={`pill-btn ${categoriaFiltro === cat ? 'activo' : ''}`}
                            onClick={() => setCategoriaFiltro(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            {fichasFiltradas.length === 0 ? (
                <div className="estado-vacio">
                    <p>No se encontraron registros con los criterios actuales.</p>
                </div>
            ) : (
                <div className="fichas-grid">
                    {fichasFiltradas.map((ficha) => (
                        <article
                            key={ficha.id}
                            className={`tarjeta-ficha ${ficha.destacada ? 'ficha-destacada' : ''}`}
                        >
                            <div className="ficha-top">
                                <span className="etiqueta-categoria">{ficha.categoria}</span>
                                <time className="etiqueta-anio" dateTime={ficha.anio}>
                                    {ficha.anio}
                                </time>
                            </div>

                            <h3>
                                {ficha.destacada && <mark className="marca-destacado">Destacada</mark>}{' '}
                                {ficha.titulo}
                            </h3>

                            <p className="ficha-fuente">
                                <strong>Fuente / Lugar:</strong> {ficha.lugarFuente}
                            </p>

                            <details className="ficha-detalle" open>
                                <summary>Ver relato y contexto completo</summary>
                                <p>{ficha.descripcion}</p>
                            </details>

                            <div className="ficha-acciones">
                                <button
                                    type="button"
                                    className="btn-editar"
                                    onClick={() => onEditar(ficha)}
                                >
                                    Editar
                                </button>
                                <button
                                    type="button"
                                    className="btn-eliminar"
                                    onClick={() => confirmarEliminacion(ficha)}
                                >
                                    Eliminar
                                </button>
                            </div>
                        </article>
                    ))}
                </div>
            )}
        </section>
    );
}