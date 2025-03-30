function ListaHero({ testoLista, elencoLista }) {
    return (
        <div>
            {/* Visualizza il testo della lista */}
            {testoLista && <p>{testoLista}</p>}

            {/* Visualizza l'elenco dei bullet point */}
            {elencoLista && (
                <ul>
                    {elencoLista.map((item, index) => (
                        <li key={index}>{item.bullet_point}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default ListaHero;