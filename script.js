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
                let tripOk = `
                <div class="row">
                    <div class="pointApointB">${trip.departure}+" > "+${trip.arrival}</div>
                    <div class="departureTime"></div>
                    <div class="tripPrice">${trip.price}+" €"</div>
                    <button class="addtoCart">Book</button>
                </div>
                `
                document.querySelector('#right-container').innerHTML += tripOk;
            } else {
                const noTrip = `
                <div class="noTrip">
                    <img id="logo" src="images/notfound.png" />
                    <h6>No trip found</h6>
                </div>
                `
                document.querySelector('#right-container').innerHTML += noTrip;
            }
        })
    }
})