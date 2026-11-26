export default function Html5Ejemplos() {
    return (
        <section className="panel-html5" aria-labelledby="titulo-html5-guia">
            <header className="panel-header">
                <span className="badge-tecnico">Arquitectura Semantica HTML5</span>
                <h2 id="titulo-html5-guia">Ejemplos de Etiquetas HTML5 Aplicadas en esta Bitacora</h2>
                <p>
                    Cada bloque de esta interfaz utiliza elementos semanticos nativos de HTML5 para estructurar
                    el contenido academico sin depender de contenedores genericos innecesarios.
                </p>
            </header>

            <div className="html5-grid">
                <article className="tarjeta-html5">
                    <div className="html5-cabecera">
                        <code>&lt;article&gt; y &lt;time&gt;</code>
                    </div>
                    <p className="html5-explicacion">
                        <strong>Explicacion:</strong> <code>&lt;article&gt;</code> encapsula una ficha independiente
                        y autocontenida de la catedra, mientras que <code>&lt;time datetime="..."&gt;</code> identifica
                        de forma legible para navegadores y buscadores el ano o fecha historica del registro.
                    </p>
                    <div className="html5-demo">
                        <time dateTime="1864-10-26">26 de octubre de 1864</time> — Natalicio en Isnotu, Trujillo.
                    </div>
                </article>

                <article className="tarjeta-html5">
                    <div className="html5-cabecera">
                        <code>&lt;details&gt; y &lt;summary&gt;</code>
                    </div>
                    <p className="html5-explicacion">
                        <strong>Explicacion:</strong> Permiten crear bloques desplegables interactivos de forma nativa
                        en HTML5 sin necesidad de scripts externos, ideales para expandir relatos o notas de estudio.
                    </p>
                    <div className="html5-demo">
                        <details>
                            <summary>Pulsa aqui para desplegar nota academica</summary>
                            <p>
                                El Dr. Jose Gregorio Hernandez fue miembro fundador de la Academia Nacional de Medicina en 1904.
                            </p>
                        </details>
                    </div>
                </article>

                <article className="tarjeta-html5">
                    <div className="html5-cabecera">
                        <code>&lt;mark&gt; y &lt;blockquote&gt;</code>
                    </div>
                    <p className="html5-explicacion">
                        <strong>Explicacion:</strong> <code>&lt;mark&gt;</code> resalta conceptos clave dentro de un
                        contexto de lectura, y <code>&lt;blockquote&gt;</code> delimita citas textuales o pensamientos
                        atribuidos con valor documental.
                    </p>
                    <div className="html5-demo">
                        <blockquote>
                            "El deber del medico es aliviar el dolor con <mark>ciencia y caridad</mark>."
                        </blockquote>
                    </div>
                </article>

                <article className="tarjeta-html5">
                    <div className="html5-cabecera">
                        <code>&lt;figure&gt;, &lt;figcaption&gt; y &lt;progress&gt;</code>
                    </div>
                    <p className="html5-explicacion">
                        <strong>Explicacion:</strong> <code>&lt;figure&gt;</code> agrupa elementos ilustrativos con su
                        leyenda descriptiva (<code>&lt;figcaption&gt;</code>), y <code>&lt;progress&gt;</code> representa
                        el avance cuantitativo de una meta o coleccion documental.
                    </p>
                    <div className="html5-demo">
                        <figure className="figura-ejemplo">
                            <progress value="85" max="100">85%</progress>
                            <figcaption>Indice de digitalizacion del archivo de la Catedra (85%)</figcaption>
                        </figure>
                    </div>
                </article>
            </div>
        </section>
    );
}