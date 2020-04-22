const pesoIngresado = document.getElementById('peso-ingresado');
const botonCalcular = document.getElementById('calcular');
const res_Mercurio = document.querySelector('.resultadoMercurio');
const res_Venus = document.querySelector('.resultadoVenus');
const res_Tierra = document.querySelector('.resultadoTierra');
const res_Marte = document.querySelector('.resultadoMarte');
const res_Jupiter = document.querySelector('.resultadoJupiter');
const res_Saturno = document.querySelector('.resultadoSaturno');
const res_Urano = document.querySelector('.resultadoUrano');
const res_Neptuno = document.querySelector('.resultadoNeptuno');
const resultados = [res_Mercurio, res_Venus, res_Tierra, res_Marte, res_Jupiter, res_Saturno, res_Urano, res_Neptuno];

(() => {
    document.getElementById('formulario').addEventListener('submit', calcularPeso);
    botonCalcular.addEventListener('click', calcularPeso);
})();

function calcularPeso(e) {
    e.preventDefault();
    const g_Mercurio = 3.7,
        g_Venus = 8.87,
        g_Tierra = 9.807,
        g_Marte = 3.711,
        g_Jupiter = 24.79,
        g_Saturno = 10.44,
        g_Urano = 8.87,
        g_Neptuno = 11.15;

    const gravedad = [g_Mercurio, g_Venus, g_Tierra, g_Marte, g_Jupiter, g_Saturno, g_Urano, g_Neptuno];

    for (let i = 0; i < gravedad.length; i++) {
        // calculo = pesoIngresado.value * gravedad[i];
        calculo = (pesoIngresado.value * gravedad[i]) / g_Tierra;
        resultados[i].innerHTML = calculo.toFixed();
    }
}