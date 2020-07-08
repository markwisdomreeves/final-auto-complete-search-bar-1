export function CategoriesData() {
    return [
        { "name": "Arte", "id": "01" },
        { "name": "Moda", "id": "02" },
        { "name": "Sport", "id": "03" },
        { "name": "Medico", "id": "04" },
        { "name": "Cucina", "id": "05" },
        { "name": "Cultura", "id": "06" },
        { "name": "Docente", "id": "07" },
        { "name": "Finanza", "id": "08" },
        { "name": "Start up", "id": "09" },
        { "name": "Manager", "id": "10" },
        { "name": "Tuirismo", "id": "11" },
        { "name": "Benessere", "id": "12" },
        { "name": "Spettacolo", "id": "13" },
        { "name": "Fotografia", "id": "14" },
        { "name": "Sociologia", "id": "15" },
        { "name": "Immobiliare", "id": "16" },
        { "name": "Giornalismo", "id": "17" },
        { "name": "Social Network", "id": "18" },
        { "name": "Arredamento e Disign", "id": "19" },
        { "name": "Marketing e Communicationi", "id": "20" },
    ]
}


export function renderCategoriesName(state, val) {
    return (
        state.name.toLowerCase().indexOf(val.toLowerCase().trim()) !== -1
    )
}

