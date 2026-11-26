import { useState, useEffect, useRef } from 'react';
import { FICHAS_INICIALES } from './data/fichasIniciales';
import FichaForm from './components/FichaForm';
import FichaLista from './components/FichaLista';
import Html5Ejemplos from './components/Html5Ejemplos';

const STORAGE_KEY = 'catedra_jgh_bitacora_v1';

export default function App() {
    const [fichas, setFichas] = useState(() => {
        try {
            const guardado = window.localStorage.getItem(STORAGE_KEY);
            if (guardado) {
                const parsed = JSON.parse(guardado);
                if (Array.isArray(parsed)) {
                    return parsed;
                }
            }
        } catch (error) {
            console.error('Error al leer localStorage:', error);
        }
        return FICHAS_INICIALES;
    });

    const [fichaEditando, setFichaEditando] = useState(null);
    const [notificacion, setNotificacion] = useState('');
    const bannerNotifRef = useRef(null);

    // Sincronizar con localStorage y actualizar titulo del documento (DOM)
    useEffect(() => {
        try {
            window.localStorage.setItem(STORAGE_KEY, JSON.stringify(fichas));
        } catch (error) {
            console.error('Error al guardar en localStorage:', error);
        }
        document.title = `Catedra Dr. Jose Gregorio Hernandez (${fichas.length} registros)`;
    }, [fichas]);

    // Mostrar aviso temporal manipulando clase/visibilidad del DOM
    const mostrarAviso = (texto) => {
        setNotificacion(texto);
        if (bannerNotifRef.current) {
            bannerNotifRef.current.dataset.activo = 'true';
        }
    };

    useEffect(() => {
        if (!notificacion) return;
        const timer = setTimeout(() => {
            setNotificacion('');
            if (bannerNotifRef.current) {
                bannerNotifRef.current.dataset.activo = 'false';
            }
        }, 3200);
        return () => clearTimeout(timer);
    }, [notificacion]);

    const manejarGuardar = (datosFicha) => {
        if (fichaEditando) {
            setFichas((prev) =>
                prev.map((item) =>
                    item.id === fichaEditando.id ? { ...item, ...datosFicha } : item
                )
            );
            setFichaEditando(null);
            mostrarAviso('Registro actualizado y persistido en localStorage.');
        } else {
            const nuevaFicha = {
                ...datosFicha,
                id: `ficha-${Date.now()}`
            };
            setFichas((prev) => [nuevaFicha, ...prev]);
            mostrarAviso('Nuevo registro agregado a la bitacora.');
        }
    };

    const manejarEliminar = (id) => {
        setFichas((prev) => prev.filter((item) => item.id !== id));
        if (fichaEditando && fichaEditando.id === id) {
            setFichaEditando(null);
        }
        mostrarAviso('Registro eliminado de la bitacora.');
    };

    const manejarRestaurarDemo = () => {
        const confirmar = window.confirm(
            'Deseas restaurar los 5 registros de ejemplo iniciales de la catedra?'
        );
        if (confirmar) {
            setFichas(FICHAS_INICIALES);
            setFichaEditando(null);
            mostrarAviso('Datos iniciales de la catedra restaurados.');
        }
    };

    return (
        <div className="app-shell">
            <header className="hero-catedra">
                <div className="contenedor hero-contenido">
                    <span className="badge-catedra">Catedra Libre Universitaria</span>
                    <h1>Catedra Dr. Jose Gregorio Hernandez</h1>
                    <p>
                        Bitacora interactiva de aportes cientificos, valores humanitarios, testimonios y memoria historica.
                    </p>
                </div>
            </header>

            <div
                ref={bannerNotifRef}
                data-activo="false"
                className={`toast-estado ${notificacion ? 'visible' : ''}`}
                role="status"
                aria-live="polite"
            >
                {notificacion}
            </div>

           <main className="contenedor layout-principal">
                <FichaForm
                    onGuardar={manejarGuardar}
                    fichaEditando={fichaEditando}
                    onCancelarEdicion={() => setFichaEditando(null)}
                />

                <FichaLista
                    fichas={fichas}
                    onEditar={setFichaEditando}
                    onEliminar={manejarEliminar}
                    onRestaurarDemo={manejarRestaurarDemo}
                />

                <Html5Ejemplos />
            </main>

            <footer className="footer-catedra">
                <div className="contenedor">
                    <p>
                        Proyecto Academico · Catedra Dr. Jose Gregorio Hernandez · Persistencia local con API localStorage y ReactJS.
                    </p>
                </div>
            </footer>
        </div>
    );
}