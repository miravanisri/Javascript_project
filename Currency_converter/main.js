
  let ans = document.querySelectorAll('.curr1');
  console.log(ans);
  fetch('https://api.frankfurter.app/currencies')
  .then(msg => msg.json())
  .then(res => dropdown(res));


function dropdown(res) {
  let curr = Object.keys(res);
  console.log(curr);
  for (let i = 0; i < curr.length; i++) {
    let option1 = document.createElement('option');
    option1.value = curr[i];
    option1.textContent = curr[i]; 
    ans[0].appendChild(option1);

    let option2 = document.createElement('option');
    option2.value = curr[i];
    option2.textContent = curr[i];
    ans[1].appendChild(option2);
  }
}
function find()
{
    let val=document.getElementById('num1');
    let currency1=ans[0].value;
    let currency2=ans[1].value;
    console.log(currency1);
    let val2=convert(val,currency1,currency2);
    let val3=document.getElementById('num2');
    val3.value=val2;
    





    
    
    

}
function convert(val,currency1,currency2)
{
 
      const host = 'api.frankfurter.app';
      fetch(`https://${host}/latest?amount=10&from=${currency1}&to=${currency2}`)
        .then(resp => resp.json())
        .then((data) => {
      let fet=data.rates;
      mainans=Object.values(fet);
      
      
        });

   
   
  console.log(mainans);
  return mainans[0];


}