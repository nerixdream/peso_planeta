const pesoIngresado = document.getElementById('peso-ingresado');
const spans = document.querySelectorAll('.resultado-planeta span');

const resultados = Array.from(spans);
const alerta = document.querySelector('.alerta');

pesoIngresado.addEventListener('keyup', () => {
    if (pesoIngresado.value > 1000) {
        alerta.style.display = "block";
        pesoIngresado.value = '';
        setTimeout(() => {
            alerta.style.display = "none";
        }, 2000);
    }
    const g_Mercurio = 3.7,
        g_Venus = 8.87,
        g_Tierra = 9.807,
        g_Marte = 3.711,
        g_Jupiter = 24.79,
        g_Saturno = 10.44,
        g_Urano = 8.87,
        g_Neptuno = 11.15,
        g_Pluton = 0.6,
        g_Sol = 274,
        g_Luna = 1.62;

    const gravedad = [g_Mercurio, g_Venus, g_Tierra, g_Marte, g_Jupiter, g_Saturno, g_Urano, g_Neptuno, g_Pluton, g_Sol, g_Luna];

    for (let i = 0; i < gravedad.length; i++) {
        calculo = (pesoIngresado.value * gravedad[i]) / g_Tierra;
        resultados[i].innerHTML = calculo.toFixed();
    }
});