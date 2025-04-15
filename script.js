document.querySelector('#search-btn').addEventListener('click', function () {
    const trip = {
        departure: document.querySelector("#DepartureInput").value,
        arrival: document.querySelector("#ArrivalInput").value,
        date: document.querySelector("#dateInput").value,
    }
    if (trip.departure && trip.arrival && trip.date) {
        fetch('localhost:3000/trips/search',{
            method: 'POST',
            headers: { 'Content-Type' : 'application/json'},
            body: JSON.stringify({ trip }),
        }).then(response => response.json())
        .then(data => {
            if (data.result === true) {
//alors on affiche 
            }
        })
    }
})