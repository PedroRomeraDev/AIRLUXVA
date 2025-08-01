document.addEventListener('DOMContentLoaded', () => {
    const fields = document.getElementById('fields');
    const departureSpan = document.getElementById('departure');
    const arrivalSpan = document.getElementById('arrival');
    const standSpan = document.getElementById('stand');
    const pobSpan = document.getElementById('pob');
    const lrSpan = document.getElementById('lr');
    const postflightFobSpan = document.getElementById('postflight-fob');
    const previousFobSpan = document.getElementById('previous-fob');
    const addedFuelSpan = document.getElementById('added-fuel');
    const totalFuelSpan = document.getElementById('fob');
    const fuelEuroSpan = document.getElementById('fuel-euro');
    const passengerSpan = document.getElementById('passenger');
    const passengerEuroSpan = document.getElementById('passenger-euro');
    const benefitsSpan = document.getElementById('benefits');
    const losesSpan = document.getElementById('loses');
    const totalBenefitsSpan = document.getElementById('total-benefits');
    const totalBenefitSpan = document.getElementById('total-benefit');
    const totalSpan = document.getElementById('total');
    const neccesarySpan = document.getElementById('neccesary');
    const inputScreen = document.getElementById('input-screen');
    const resultScreen = document.getElementById('result-screen-summary');

    fields.addEventListener('submit', (e) => {
        e.preventDefault();
        inputScreen.classList.add('hidden');
        resultScreen.classList.remove('hidden');

        const departure = document.getElementById('input-departure').value;
        const arrival = document.getElementById('input-arrival').value;
        const stand = document.getElementById('input-stand').value;

        const passenger = parseInt(document.getElementById('input-passenger').value);
        const passengerPrice = parseInt(document.getElementById('input-passenger-price').value);
        const lr = parseFloat(document.getElementById('input-lr').value);
        const postflightFob = parseInt(document.getElementById('input-postflight-fob').value);
        const previousFob = parseInt(document.getElementById('input-previous-fob').value);
        const totalFlightFuel = parseInt(document.getElementById('input-total-flight-fuel').value);

        departureSpan.textContent = departure.toUpperCase();
        arrivalSpan.textContent = arrival.toUpperCase();
        standSpan.textContent = stand;

        pobSpan.textContent = passenger;
        lrSpan.textContent = lr;
        postflightFobSpan.textContent = postflightFob;
        previousFobSpan.textContent = previousFob;

        const addedFuel = totalFlightFuel - previousFob;
        addedFuelSpan.textContent = addedFuel;
        totalFuelSpan.textContent = totalFlightFuel;

        const fuelEuro = (addedFuel * 0.53).toFixed(1);
        fuelEuroSpan.textContent = fuelEuro;

        const passengerEuro = (passenger * passengerPrice).toFixed(1);
        passengerEuroSpan.textContent = passengerEuro;

        const benefits = passenger * passengerPrice;
        const loses = addedFuel * 0.53;
        const totalBenefits = benefits - loses;

        passengerSpan.textContent = passenger;
        benefitsSpan.textContent = benefits.toFixed(1);
        losesSpan.textContent = loses.toFixed(1);
        totalBenefitsSpan.textContent = totalBenefits.toFixed(1);
        totalBenefitSpan.textContent = totalBenefits.toFixed(1);

        const total = (totalBenefits * 15).toFixed(1);
        totalSpan.textContent = total;

        if (lr < -1000) {
            neccesarySpan.innerHTML = "REPARACI&Oacute;N NECESARIA.";
        } else {
            neccesarySpan.innerHTML = "REPARACI&Oacute;N NO NECESARIA.";
        }
    });
});

let texto = document.getElementById('result').innerHTML;
const copiarContenido = async () => {
    try {
      await navigator.clipboard.writeText(texto);
      console.log('Contenido copiado al portapapeles');
    } catch (err) {
      console.error('Error al copiar: ', err);
    }
  }