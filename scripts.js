const button = document.getElementById("button")

async function ProgramClick() {// async await
    const input = document.getElementById("valorParaConverter").value
    const primeiroValor = document.getElementById("primeiraValor")
    const SegundoValor = document.getElementById("SegundoValor")
    const select1 = document.getElementById("select1").value
    const select2 = document.getElementById("select2").value

    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then(response => {
      return response.json()
      })
console.log(data)
    const dolar = data.USDBRL.high
    const euro = data.EURBRL.high
    const bitCoin = data.BTCBRL.high

if (select1 === "R$ Real brasileiro" && select2 === "US$ Dólar americano") {
    primeiroValor.innerHTML = new Intl.NumberFormat('pt-br',
    { style: 'currency', currency: 'BRL' }
  ).format(input); 

  SegundoValor.innerHTML = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(input / dolar)
} else if(select1 === "R$ Real brasileiro" && select2 === "€ Euro" ){
    primeiroValor.innerHTML = new Intl.NumberFormat('pt-br',
    { style: 'currency', currency: 'BRL' }
  ).format(input); 

  SegundoValor.innerHTML = new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
  }).format(input / euro)
} else if(select1 === "R$ Real brasileiro" && select2 === "Bitcoin"){
    primeiroValor.innerHTML = new Intl.NumberFormat('pt-br',
    { style: 'currency', currency: 'BRL' }
  ).format(input); 

  SegundoValor.innerHTML = (input / bitCoin).toFixed(2)
} else if(select1 === "US$ Dólar americano" && select2 === "R$ Real brasileiro"){
    primeiroValor.innerHTML = new Intl.NumberFormat('en-US',
    { style: 'currency', currency: 'USD' }
  ).format(input); 

  SegundoValor.innerHTML = new Intl.NumberFormat("pt-br", {
    style: "currency",
    currency: "BRL",
  }).format(input * dolar)
} else if (select1 === "US$ Dólar americano" && select2 === "€ Euro"){
    primeiroValor.innerHTML = new Intl.NumberFormat('en-US',
    { style: 'currency', currency: 'USD' }
  ).format(input); 

  SegundoValor.innerHTML = new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
  }).format(input * (dolar/euro))
} else if(select1 === "US$ Dólar americano" && select2 === "Bitcoin"){
    primeiroValor.innerHTML = new Intl.NumberFormat('en-US',
    { style: 'currency', currency: 'USD' }
  ).format(input); 

  SegundoValor.innerHTML = (input * (dolar/bitCoin)).toFixed(2)
} else if(select1 === "€ Euro" && select2 === "R$ Real brasileiro"){
    primeiroValor.innerHTML = new Intl.NumberFormat('de-DE',
    { style: 'currency', currency: 'EUR' }
  ).format(input); 

  SegundoValor.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format( input * euro )
} else if(select1 === "€ Euro" && select2 === "US$ Dólar americano"){
    primeiroValor.innerHTML = new Intl.NumberFormat('de-DE',
    { style: 'currency', currency: 'EUR' }
  ).format(input); 

  SegundoValor.innerHTML = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(input * (euro/dolar))
} else if(select1 === "€ Euro" && select2 === "Bitcoin"){
    primeiroValor.innerHTML = new Intl.NumberFormat('de-DE',
    { style: 'currency', currency: 'EUR' }
  ).format(input); 

  SegundoValor.innerHTML = (input * (euro/bitCoin)).toFixed(2)
}else if(select1 === "Bitcoin" && select2 === "R$ Real brasileiro"){
    primeiroValor.innerHTML = (input); 
  SegundoValor.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(input * bitCoin)
} else if(select1 === "Bitcoin" && select2 === "US$ Dólar americano"){
    primeiroValor.innerHTML = (input); 

    SegundoValor.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(input * (bitCoin/dolar))
}else if(select1 === "Bitcoin" && select2 === "€ Euro"){
    primeiroValor.innerHTML = (input); 

    SegundoValor.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(input * (bitCoin/euro))
}
}



function program() {
    const imagem1 = document.getElementById("PrimeiraImagem") 
    const moeda1 = document.getElementById("primeiraMoeda")
    const select1 = document.getElementById("select1").value


    if (select1 === "US$ Dólar americano") {
        imagem1.src = "./assets/dolar.png"
        moeda1.innerHTML = "Dólar americano"
    } else if (select1 === "€ Euro"){
        imagem1.src = "./assets/euro.png"
        moeda1.innerHTML = "Euro"
    } else if (select1 === "Bitcoin"){
        imagem1.src = "./assets/bitcoin.png"
        moeda1.innerHTML = "BitCoin"
    }else {
        imagem1.src = "./assets/brasil.png"
        moeda1.innerHTML = "Real"
    }
}

function program2 () {
    const imagem2 = document.getElementById("SegundaImagem")
    const moeda2 = document.getElementById("SegundaMoeda")
    const select2 = document.getElementById("select2").value


    if (select2 === "US$ Dólar americano") {
        imagem2.src = "./assets/dolar.png"
        moeda2.innerHTML = "Dólar americano"
    } else if (select2 === "€ Euro"){
        imagem2.src = "./assets/euro.png"
        moeda2.innerHTML = "Euro"
    } else if (select2 === "Bitcoin"){
        imagem2.src = "./assets/bitcoin.png"
        moeda2.innerHTML = "BitCoin"
    }else {
        imagem2.src = "./assets/brasil.png"
        moeda2.innerHTML = "Real"
    }

}

button.addEventListener(`click`, ProgramClick)
select1.addEventListener("change" , program)
select2.addEventListener("change", program2)



