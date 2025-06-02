  const tempInput=document.getElementById("tempInput");
  const toFahrenheitBtn=document.getElementById("toFahrenheit");
  const toCelciusBtn=document.getElementById("toCelcius");
  const result=document.getElementById("result");
  let temp;
  
  function convert(){
  if(toFahrenheitBtn.checked){
   temp=Number(tempInput.value);
  let fahrenheit=(temp * 9/5) + 32;
  result.textContent=`${temp} Celsius is equal to ${fahrenheit} Fahrenheit.`;
  }
  else if(toCelciusBtn.checked){
   temp=Number(tempInput.value);
   let celsius=(temp-32)*5/9;
   result.textContent=`${temp} Fahrenheit is equal to ${celsius} Celsius.`;
  }
  else{
    result.textContent="Please select a conversion option.";

  }
}
