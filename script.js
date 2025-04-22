document.getElementById('subForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const alimento = document.getElementById('alimento').value;
    const resultado = document.getElementById('resultado');

    // Simulação de substituições com base nas calorias (TACO/FatSecret simulado)
    const substituicoes = {
        "arroz branco": [
            { nome: "Arroz integral cozido", calorias: 130 },
            { nome: "Batata inglesa cozida", calorias: 77 },
            { nome: "Macarrão cozido", calorias: 131 }
        ],
        "batata-doce": [
            { nome: "Batata inglesa cozida", calorias: 77 },
            { nome: "Cenoura cozida", calorias: 41 },
            { nome: "Arroz integral", calorias: 130 }
        ],
        "frango grelhado": [
            { nome: "Peito de frango cozido", calorias: 165 },
            { nome: "Carne magra grelhada", calorias: 250 },
            { nome: "Peixe grelhado", calorias: 135 }
        ]
    };

    // Procurar substituições para o alimento
    if (substituicoes[alimento.toLowerCase()]) {
        resultado.innerHTML = `<p><strong>${alimento}</strong> pode ser substituído por:</p>
        <ul>`;
        substituicoes[alimento.toLowerCase()].forEach(item => {
            resultado.innerHTML += `<li>${item.nome} - ${item.calorias} kcal</li>`;
        });
        resultado.innerHTML += `</ul>`;
    } else {
        resultado.innerHTML = `<p>Desculpe, não encontramos substituições para <strong>${alimento}</strong>.</p>`;
    }
});
