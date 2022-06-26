var request = new XMLHttpRequest();
request.open('GET',"https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send();
request.onload=function() {
    var data=JSON.parse(request.response);
    console.log(data);

    // Get all the countries from Asia continent /region using Filter function
    let RegionCountries = data.filter((x) => x.region === "Asia");
    console.log(RegionCountries);

    // // Get all the countries with a population of less than 2 lakhs using Filter function
    let PopCountries = data.filter((x) => x.population < 200000);
    console.log(PopCountries);

    // // Print the total population of countries using reduce function
    let TotalPopulation = data.map(x => x.population).reduce((acc, y) => acc + y)
    console.log(TotalPopulation);

    // Print the country which uses US Dollars as currency.

    let currencies= data.map((x) => x.currencies).filter((x) => x.currencies === "US");
        console.log(currencies);

      
}