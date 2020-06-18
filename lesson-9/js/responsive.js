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