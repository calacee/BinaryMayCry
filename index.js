class Calculadora {
  constructor() {}

  convertToDecimal(valor, base) {
    switch (base) {
      case "binary":
        return Number(`0b${valor}`);
      case "octal":
        return Number(`0o${valor}`);
      case "decimal":
        return Number(`${valor}`);
      case "hexadecimal":
        return Number(`0x${valor}`);
    }
    return undefined;
  }

  convertToBaseFinal(valor, baseFinal) {
    switch (baseFinal) {
      case "binary":
        return valor.toString(2);
      case "octal":
        return valor.toString(8);
      case "decimal":
        return valor.toString(10);
      case "hexadecimal":
        return valor.toString(16);
    }
    return undefined;
  }

  converter(valor, base, baseFinal) {
    const valDecimal = this.convertToDecimal(valor, base);

    return this.convertToBaseFinal(valDecimal, baseFinal);
  }
}

// função para baskhara
function bhaskara() {
  let delta =
    Number(iptBhaskaraB.value) * Number(iptBhaskaraB.value) -
    4 * Number(iptBhaskaraA.value) * Number(iptBhaskaraC.value);
  let raizDeDelta = Math.sqrt(delta);

  if (raizDeDelta >= 0) {
    let x1Bhaskara =
      (-Number(iptBhaskaraB.value) + raizDeDelta) / (2 * iptBhaskaraA.value);
    let x2Bhaskara =
      (-Number(iptBhaskaraB.value) - raizDeDelta) / (2 * iptBhaskaraA.value);

    let saidaPositivo = x1Bhaskara;
    let saidaNegativo = x2Bhaskara;
    let saidaPositivoOut = "";
    let saidaNegativoOut = "";

    if (x1Bhaskara < 0) {
      saidaPositivoOut = `Raiz negativa, Ou seja raiz imaginaria ${saidaPositivo} Continue com outro valor!`;
    }

    if (x2Bhaskara < 0) {
      saidaNegativoOut = `Raiz negativa, Ou seja raiz imaginaria ${saidaNegativo} Continue com outro valor!`;
    }

    divMsgBhaskara.innerHTML = `Raiz1: ${saidaPositivoOut} 
                                  <br>
                                  Raiz2: ${saidaNegativoOut}`;
  } else {
    divMsgBhaskara.innerHTML = `A equação não possui raizes reais`;
  }
}
// funçao calorimetria
function calorimetria() {
  let massa = Number(iptCalorimetriaMassa.value);
  let calor = Number(iptCalorimetriaCalor.value);
  let delta = Number(iptCalorimetriaDelta.value);

  let conta = massa * calor * delta;

  divMsgCalorimetria.innerHTML = `Seu ΔQ é igual à ${conta}`;
}
// função catetos
function catetos() {
  console.log("adfjadklsfl");
  let catA = Number(iptCatA.value);
  let catB = Number(iptCatB.value);
  let hip = Number(iptHip.value);

  if (hip == 0 || hip == "") {
    let conta = Math.sqrt(Math.pow(catA, 2) + Math.pow(catB, 2));
    divMsgCatetos.innerHTML = conta;
    return;
  }
  if (hip < catA || hip < catB) {
    divMsgCatetos.innerHTML = `A hipotenusa não pode ser menor que os catetos!`;
    return;
  }
  if (catA == 0) {
    let conta = Math.sqrt(Math.pow(hip, 2) - Math.pow(catB, 2));

    divMsgCatetos.innerHTML = conta;
    return;
  }
  if (catB == 0) {
    let conta = Math.sqrt(Math.pow(hip, 2) - Math.pow(catA, 2));

    divMsgCatetos.innerHTML = conta;
    return;
  }
}

// equaçao primeiro grau
function equacaoPrimeiroGrau() {
  let x = Number(iptEquacaoPrimeiroGrauX.value);
  let a = Number(iptEquacaoPrimeiroGrauA.value);
  let b = Number(iptEquacaoPrimeiroGrauB.value);

  let resultadoEquacaoPrimeiroGrau = (a + b) / x;

  divMsgEquacaoPrimeiroGrau.innerHTML = `Resultado: ${resultadoEquacaoPrimeiroGrau}`;
}

function jurosSimples() {
  let valor = Number(iptValJuros.value);
  let juros = Number(iptJuros.value);
  let tempo = Number(iptTempoJuros.value);

  let conta = valor * tempo * (juros / 100 + 1);

  divJurosSimples.innerHTML = `Seu valor de R$${valor}, com juros de ${juros}% ao mês, aplicado por ${tempo} meses renderá aproximadamente R$${conta}`;
}

// função juros compostos
function jurosCompostos() {
  let juros = Number(iptJurosComp.value);
  let tempo = Number(iptTempoMesJuros.value);
  let capital = Number(iptCapitalJuros.value);

  let montante = capital * Math.pow(1 + juros / 100, tempo);

  divJurosComposto.innerHTML = `Seu valor de R$${capital}, com juros de ${juros}% ao mês, aplicado por ${tempo} meses renderá aproximadamente R$${montante}`;
}
// funçao media
function calcularMedia() {
  let conta = (Number(iptNumMedia.value) + Number(iptNumdoisMedia.value)) / 2;

  divMsgMedia.innerHTML = conta;
}
// função Montante
function Montante() {
  let jurosMontante = Number(iptMontantejuros.value);
  let capital = Number(iptMontantecapital.value);
  let montante = capital * jurosMontante;
  divMsgMontante.innerHTML = `O montante é: ${montante}`;
}
// função regra de 3
function regraDeTres() {
  let x1 = Number(iptRegraX1.value);
  let x2 = Number(iptRegraX2.value);
  let y1 = Number(iptRegraY1.value);
  let y2 = Number("1");

  let resultadoEquacao1 = (x2 * y1);
  let resultadoEquacao2 = resultadoEquacao1 / x1;


  divMsgRegraDeTres.innerHTML = `
    <math display="block"><mfrac linethickness="1">
    <mn>${y1}</mn>
    <mn>${resultadoEquacao2}</mn>
    </mfrac></math> `;
}