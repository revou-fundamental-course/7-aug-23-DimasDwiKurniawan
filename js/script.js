document.addEventListener('DOMContentLoaded', function () {
    const luasCalculateButton = document.getElementById('luas-calculate-button');
    const kelilingCalculateButton = document.getElementById('keliling-calculate-button');
    const triangleAreaForm = document.getElementById('triangle-area-form');
    const trianglePerimeterForm = document.getElementById('triangle-perimeter-form');
    const luasResult = document.getElementById('luas-result');
    const kelilingResult = document.getElementById('keliling-result');

    luasCalculateButton.addEventListener('click', function () {
        const alas = parseFloat(triangleAreaForm.elements.alas.value);
        const tinggi = parseFloat(triangleAreaForm.elements.tinggi.value);

        const luas = 0.5 * alas * tinggi;
        luasResult.textContent = `Luas: ${luas.toFixed(2)}`;
    });

    kelilingCalculateButton.addEventListener('click', function () {
        const sideA = parseFloat(trianglePerimeterForm.elements.sideA.value);
        const sideB = parseFloat(trianglePerimeterForm.elements.sideB.value);
        const sideC = parseFloat(trianglePerimeterForm.elements.sideC.value);

        const keliling = sideA + sideB + sideC;
        kelilingResult.textContent = `Keliling: ${keliling.toFixed(2)}`;
    });
});
