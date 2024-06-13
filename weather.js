const search=document.getElementById('search')
const input= document.getElementById('input')

async function getData(cityName){
   const promise=await fetch(`http://api.weatherapi.com/v1/current.json?key=da2b63a758864e3dbc5180535241106&q=${cityName}&aqi=yes`)

   return await promise.json();
}
search.addEventListener('click',async()=>
{
    const value=input.value;
    const result= await getData(value)
    const p =document.createElement('p')
    p.setAttribute('id','desc')
    p.innerHTML = JSON.stringify(result);
    p.style.color='white';
    p.style.backgroundColor='black';
    p.style.fontFamily='Algerian';
    p.style.fontSize='1.5rem'
    document.body.appendChild(p);

})