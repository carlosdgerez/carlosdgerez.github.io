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

function renderMap() {
    var location = {
        lat: 42.0963,
        lng: -111.8766
    };
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 13,
        center: location
    });
    var marker = new google.maps.Marker({
        position: location,
        map: map
    });


}

function getMessage(day) {
    if (day == "Friday") {
        document.getElementsByClassName("message")[0].classList.toggle("fridaymessage");
    }
}