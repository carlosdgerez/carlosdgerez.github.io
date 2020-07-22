function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}

function renderDate() {
    let d = new Date();
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[d.getDay()];
    let daynumber = d.getDate();
    var m = new Date();
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let month = months[m.getMonth()];

    let year = d.getFullYear();

    document.getElementById("date").innerHTML = day + ",   " + daynumber + " of " + month + "   " + year;




}

function update() {
    document.getElementById("update").textContent = document.lastModified;



}

function loadTowns() {
    const requestURL = 'data/data2.json';
    fetch(requestURL)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonObject) {


            addTour(jsonObject);





        });
}

function addTour(myObj) {
    for (x in myObj.tours) {


        /* create elements to show */
        let card = document.createElement('section');
        let div = document.createElement('div');
        let h1 = document.createElement('h1')
        let p = document.createElement('p');
        let h2 = document.createElement('h2');
        let h3 = document.createElement('h3')
        let a = document.createElement('a')
        let image = document.createElement('img');

        /*fill up elements with the object content*/

        h1.innerHTML = `<strong>${myObj.tours[x].name}</strong>`;
        p.innerHTML = `${myObj.tours[x].atraction}`;
        h2.innerHTML = `${myObj.tours[x].rating}`;
        h3.innerHTML = `${myObj.tours[x].open}`;
        a.innerHTML = ` Web Link `;

        image.setAttribute('src', `${myObj.tours[x].picture}`);
        image.setAttribute('alt', `Picture of  ${myObj.tours[x].name}`);
        image.setAttribute('id', 'hometown');
        h1.setAttribute('class', 'data');
        p.setAttribute('class', 'data');
        h2.setAttribute('class', 'data');
        h3.setAttribute('class', 'data');
        a.setAttribute('class', 'data');
        a.setAttribute('href', `${myObj.tours[x].link}`);
        div.setAttribute('class', 'information');


        /*Add content to the card and set it in div */

        div.appendChild(h1);
        div.appendChild(h2);
        div.appendChild(p);
        div.appendChild(h3);
        div.appendChild(a);
        card.appendChild(div);
        card.appendChild(image);

        document.querySelector('div.cards').appendChild(card);
    }
}

function setValue() {
    var message = document.getElementById("value").value;
    document.getElementById("severity").innerHTML = message;
}

function setActivity(townName) {
    const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
    fetch(requestURL)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonObject) {

            const towns = jsonObject['towns'];

            const townResult = towns.filter(town => (town.name == townName));





            addTownActivity(townResult);

        });


    function addTownActivity(town) {

        /* create elements to show and titles*/

        let div = document.createElement('div');

        let h2 = document.createElement('h2');
        h2.innerHTML = `Upcoming Events`;
        let hr = document.createElement('hr');
        h2.setAttribute('id', 'eventTitle');
        hr.setAttribute('id', 'eventLine');
        div.appendChild(h2);
        div.appendChild(hr);


        /*take information from events in town*/
        var x;
        var h3;
        for (x in town[0].events) {

            h3 = document.createElement('h3');
            h3.innerHTML = `${town[0].events[x]}`;
            h3.setAttribute('class', 'event');
            div.appendChild(h3);
        }




        div.setAttribute('class', 'townEvents');


        /*Add content to the card and set it in div */





        document.querySelector('div.cards2').appendChild(div);


    }
}

function loadRents() {
    const requestURL = 'data/data.json';
    fetch(requestURL)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonObject) {

            const myObj = jsonObject['rental'];

            document.getElementById("rents").innerHTML = myObj[0].name;


            let txt;
            var x;


            txt = "<table 'border='1' >";
            txt += "<tr><th colspan = '6'>Max Persons and Price Chart (includes tax)</th></tr>"
            txt += "<tr><th colspan = '2'></th><th colspan = '2'>Reservation</th><th colspan = '2'>Walk Inn</th></tr>"
            txt += "<tr><th>Rental Type</th><th>Max. Persons</th><th>Half Day (3 hrs)</th><th>Full Day</th><th>Half Day (3 hrs)</th><th>Full Day</th></tr>";



            for (x = 0; x < myObj.length; x++) {



                txt += "<tr >";

                txt += "<td>" + myObj[x].name + "</td>";
                txt += "<td>" + myObj[x].maxpers + "</td>";
                txt += "<td>" + '$' + myObj[x].halfDayR + "</td>";

                txt += "<td>" + '$' + myObj[x].fullDayR + "</td>";
                txt += "<td>" + '$' + myObj[x].halfDayW + "</td>";
                txt += "<td>" + '$' + myObj[x].fullDayW + "</td>";
                txt += "</tr>";


            }
            txt += "</table>";
            document.getElementById("rents").innerHTML = txt;

        });
}