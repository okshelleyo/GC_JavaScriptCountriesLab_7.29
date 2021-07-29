
class Country {

    constructor(name, lang, greeting, colors) {
        this.name = name;
        this.lang = lang;
        this.greeting = greeting;
        this.colors = colors;
    }  

}

let usa = new Country("USA", "English", "Hello, World!", ["red", "blue", "white"]);
let mexico = new Country("Mexico", "Spanish", "Hola, Mundo!", ["red", "white", "green"]);
let algeria = new Country("Algeria", "Arabic and Berber", "Salam, Alealeamia!", ["blue", "yellow", "red"]);
let norway = new Country("Norway", "Norwegian", "Hallo, Verden!", ["red", "white", "white"]);
let france = new Country("France", "French", "Bonjour, le Monde!", ["red", "blue", "white"])

let countries = [usa, mexico, algeria, norway, france];

function SwitchCountry() {
    input = document.getElementById("CountryList").value;
    let country;

    if (input === "USA") {
        //set country to usa 
        country = usa;
        DisplayColors(country);
    }
    else if (input === "Mexico") {
        country = mexico;
        DisplayColors(country);
    }
    else if (input === "Algeria") {
        country = algeria;
        DisplayColors(country);
    }
    else if (input === "Norway") {
        country = norway;
        DisplayColors(country);
    }
    else if (input === "France") {
        country = france;
        DisplayColors(country);
    }
} 

function DisplayColors(country) {

    document.getElementById("CountryName").innerHTML = country.name;
    document.getElementById("OfficialLanguage").innerHTML = country.lang;
    document.getElementById("HelloWorld").innerHTML = country.greeting;
   
    let color1 = document.getElementById("Color1").style.backgroundColor = country.colors[0];
    let color2 = document.getElementById("Color2").style.backgroundColor = country.colors[1];
    let color3 = document.getElementById("Color3").style.backgroundColor = country.colors[2];

}


