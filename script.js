document.getElementById('subForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const alimento = document.getElementById('alimento').value;
    const resultado = document.getElementById('resultado');

    // Simulação de substituições - será conectado a TACO/FatSecret depois
    resultado.innerHTML = `<p><strong>${alimento}</strong> pode ser substituído por:</p>
        <ul>
            <li>Arroz integral cozido (mesma caloria)</li>
            <li>Batata inglesa cozida</li>
            <li>Macarrão cozido sem óleo</li>
        </ul>`;
});