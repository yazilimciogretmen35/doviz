const currencyFirst=document.getElementById('currencyFirst');
const currencySecond=document.getElementById('currencySecond');
const count=document.getElementById('count');
const equal=document.getElementById('equal');
const exchangeRate=document.getElementById('exchangeRate');


updateRate();


function updateRate(){
  fetch(`https://v6.exchangerate-api.com/v6/ee6ed503c7d8071d9b309015/latest/${currencyFirst.value}` // her zaman usd yollamayacağım için sonunu değiştiriyorum apinin
  ).then((res)=>res.json()).then((data)=>{
    console.log(data)
    const rate=data.conversion_rates[currencySecond.value]

    exchangeRate.textContent=`1 ${currencyFirst.value} =${rate} ${currencySecond.value} `

    equal.textContent=((count.value*rate).toFixed(3));
  });
} 


currencyFirst.addEventListener('change',updateRate); // currencyFirst değiştiğinde updateRate tetiklensin
currencySecond.addEventListener('change',updateRate);
count.addEventListener('input',updateRate);