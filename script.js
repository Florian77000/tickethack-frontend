document.querySelector("#search-btn").addEventListener("click", function () {
  const trip = {
    departure: document.querySelector("#DepartureInput").value,
    arrival: document.querySelector("#ArrivalInput").value,
    date: document.querySelector("#dateInput").value,
  };
  fetch("http://localhost:3000/trips/search", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(trip),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if (data.dataTrip.length != 0) {
        document.querySelector("#right-container").style.display = "none";
        for (let i = 0; i < data.dataTrip.length; i++) {
          let tripOk = `
                <div class="row">
                    <div class="pointApointB">${data.dataTrip[i].departure} > ${
            data.dataTrip[i].arrival
          }</div>
                    <div class="departureTime">${moment(
                      data.dataTrip[i].date
                    ).format("HH:mm")}</div>
                    <div class="tripPrice">${data.dataTrip[i].price} €</div>
                    <button class="addtoCart">Book</button>
                </div>
                `;
          document.querySelector("#newright-container").innerHTML += tripOk;
        }
      } else {
        const noTrip = `
                <div class="noTrip">
                    <img id="logo" src="images/notfound.png" />
                    <h6>No trip found</h6>
                </div>
                `;
        document.querySelector("#right-container").innerHTML += noTrip;
      }
    });
});
