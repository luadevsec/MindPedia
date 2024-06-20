import React from 'react';

function Ficha() {
    return (
        <>
            <header>
                <foto></foto>
                <campo className="nome"></campo>
                <botao></botao>
            </header>

            <main>
                <section>
                    <article>
                        <campo></campo>
                        <campo></campo>
                        <campo></campo>
                    </article>
                    <aside></aside>
                </section>
                <section>
                    <h2>contatos</h2>
                </section>
            </main>

            <footer>
                <button></button>
                <button></button>
            </footer>
        </>
    );
}

export default Ficha;
