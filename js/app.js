const pesoIngresado = document.getElementById('peso-ingresado');
const res_Mercurio = document.querySelector('.resultadoMercurio');
const res_Venus = document.querySelector('.resultadoVenus');
const res_Tierra = document.querySelector('.resultadoTierra');
const res_Marte = document.querySelector('.resultadoMarte');
const res_Jupiter = document.querySelector('.resultadoJupiter');
const res_Saturno = document.querySelector('.resultadoSaturno');
const res_Urano = document.querySelector('.resultadoUrano');
const res_Neptuno = document.querySelector('.resultadoNeptuno');
const res_Pluton = document.querySelector('.resultadoPluton');
const res_Sol = document.querySelector('.resultadoSol');
const res_Luna = document.querySelector('.resultadoLuna');
const resultados = [res_Mercurio, res_Venus, res_Tierra, res_Marte, res_Jupiter, res_Saturno, res_Urano, res_Neptuno, res_Pluton, res_Sol, res_Luna];

pesoIngresado.addEventListener('keyup', () => {
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