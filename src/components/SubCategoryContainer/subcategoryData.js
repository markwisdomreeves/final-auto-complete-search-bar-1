export function CategoriesData() {
    return [
        { "name": "Arte", "id": "001" },
        { "name": "Moda", "id": "002" },
        { "name": "Sport", "id": "003" },
        { "name": "Medico", "id": "004" },
        { "name": "Cucina", "id": "005" },
        { "name": "Cultura", "id": "005" },
        { "name": "Docente", "id": "006" },
        { "name": "Finanza", "id": "007" },
        { "name": "Start up", "id": "008" },
        { "name": "Manager", "id": "009" },
        { "name": "Tuirismo", "id": "0010" },
        { "name": "Benessere", "id": "0011" },
        { "name": "Spettacolo", "id": "0012" },
        { "name": "Fotografia", "id": "0013" },
        { "name": "Sociologia", "id": "0014" },
        { "name": "Immobiliare", "id": "0015" },
        { "name": "Giornalismo", "id": "0016" },
        { "name": "Social Network", "id": "0017" },
        { "name": "Arredamento e Disign", "id": "0018" },
        { "name": "Marketing e Communicationi", "id": "0019" },
    ]
}


export function renderCategoriesName(state, val) {
    return (
        state.name.toLowerCase().indexOf(val.toLowerCase().trim()) !== -1
    )
}

