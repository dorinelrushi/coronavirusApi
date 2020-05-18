window.onload =  function(){function1()}
 function  function1(){
 fetch("https://api.thevirustracker.com/free-api?countryTotals=ALL")
.then(res => res.json())
.then(data => {
  for(let i = 0;i< data.countryitems.length;i++){
   for(let j = 1;i<data.countryitems.length;j++){
    var data1 = data.countryitems[i][j].title;
    var totalcases = data.countryitems[i][j].total_cases;
    var totaldeaths = data.countryitems[i][j].total_deaths;
    var today = data.countryitems[i][j].total_new_cases_today;
    var deaths = data.countryitems[i][j].total_new_deaths_today;
    var cases = data.countryitems[i][j].total_active_cases;
    console.log( data.countryitems[i][j].total_cases)
    var demo = document.getElementById("demo");
    var list = document.createElement("tr");
    list.innerHTML += `<tr>
    <td>${data1}</td>
    <td>${totalcases}</td>
    <td>${totaldeaths}</td>
    <td>${today}</td>
    <td>${deaths}</td>
    <td>${cases}</td>
    </tr>`;
    demo.appendChild(list)
    if(data1 =='Albania'){
      list.style.color = 'rgb(250, 43, 78)';
    }
   }
  }
})
}