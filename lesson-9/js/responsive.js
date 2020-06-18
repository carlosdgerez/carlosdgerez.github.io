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


    getMessage(day);

}





function getMessage(day) {
    if (day == "Friday") {
        document.getElementsByClassName("message")[0].classList.toggle("fridaymessage");
    }
}

function loadTowns() {
    const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
    fetch(requestURL)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonObject) {
            console.table(jsonObject); /*temporary checking for valid response and data parsing*/
            const towns = jsonObject['towns'];
            const preston = towns.filter(town => (town.name == 'Preston'));
            console.table(preston);
            const fishhaven = towns.filter(town => (town.name == 'Fish Haven'));
            console.table(fishhaven);
            const sodasprings = towns.filter(town => (town.name == 'Soda Springs'));
            console.table(sodasprings);

            addTown(preston);
            addTown(fishhaven);
            addTown(sodasprings);
            console.table(fishhaven[0].name);

            /*   const prophets = jsonObject['prophets'];
               for (let i = 0; i < prophets.length; i++) {

                   // create elements to show
                   let card = document.createElement('section');
                   let h2 = document.createElement('h2');
                   let h3 = document.createElement('h3')
                   let h3b = document.createElement('h3')
                   let image = document.createElement('img');

                   // Add content to the elements
                   h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;
                   image.setAttribute('src', prophets[i].imageurl);
                   image.setAttribute('alt', prophets[i].name + prophets[i].lastname + "-" + prophets[i].order);
                   h3.textContent = "Date of Birth: " + prophets[i].birthdate;
                   h3b.textContent = "Place of Birth: " + prophets[i].birthplace;


                   // Add content to the card and set it in div 
                   card.appendChild(h2);
                   card.appendChild(h3);
                   card.appendChild(h3b);
                   card.appendChild(image);

                   document.querySelector('div.cards').appendChild(card);


               }*/

        });
}

function addTown(town) {
    console.table(town);
    /* create elements to show */
    let card = document.createElement('section');
    let h1 = document.createElement('h1')
    let p = document.createElement('p');
    let h2 = document.createElement('h2');
    let h3 = document.createElement('h3')
    let h3b = document.createElement('h3')
    let image = document.createElement('img');

    h1.innerHTML = `${town[0].name}`;
    p.innerHTML = `${town[0].motto}`;
    h2.innerHTML = `Founded in :${town[0].yearFounded}`;
    h3.innerHTML = `Current Population: ${town[0].currentPopulation}`;
    h3b.innerHTML = `Average Rainfall: ${town[0].averageRainfall}`;

    image.setAttribute('src', `images/${town[0].photo}`);
    image.setAttribute('alt', `Picture of the city of  ${town[0].name}`);


    /*Add content to the card and set it in div */
    card.appendChild(h1);
    card.appendChild(h2);
    card.appendChild(p);
    card.appendChild(h3);
    card.appendChild(h3b);
    card.appendChild(image);

    document.querySelector('div.cards').appendChild(card);

}