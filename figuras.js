// Codigo Triangulo
function perimetroCuadrado(lado) {
    return lado * 4
}

function areaCuadrado(lado) {
    return lado ** 2
}

// Codigo del triangulo

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base
}

function areaTriangulo(base, altura) {
    return (base * altura) / 2
}

function alturaTrianguloIso(lado, base) {
    const cat = (base / 2) ** 2
    return ((lado ** 2) / cat) ** 0.5
}

// Codigo del Circulo

const PI = Math.PI

function diametroCirculo(radio) {
    return radio *2
}

function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI
}

function areaCiculo(radio) {
    return (radio ** 2) * PI
}

// funciones HTML

function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);

    alert(perimetro)
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);

    alert(area)
}

function calcularAlturaTriangulo() {
    const inputLado1 = document.getElementById("InputLado1")
    const inputLado2 = document.getElementById("InputLado2");
    const inputBase = document.getElementById("InputBase");
    const lado1 = inputLado1.value
    const lado2 = inputLado2.value
    const base = inputBase.value

    if (lado1 === lado2) {
      const altura = alturaTrianguloIso(lado1, base);

      alert(altura)
    } else {
        alert("No es un triangulo isosceles")
    }
}