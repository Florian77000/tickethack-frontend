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
      if (data.dataTrip.length != 0) {
        document.querySelector("#timeToBook").style.display = "none";
        document.querySelector("#noTrip").style.display = "none";
        for (let i = 0; i < data.dataTrip.length; i++) {
          let tripOk = `
                <div class="row">
                    <div class="pointApointB">${data.dataTrip[i].departure} > ${data.dataTrip[i].arrival}</div>
                    <div class="departureTime">${moment(data.dataTrip[i].date).format("HH:mm")}</div>
                    <div class="tripPrice">${data.dataTrip[i].price} €</div>
                    <button type='button' class="addtoCart" id="${data.dataTrip[i]._id}">Book</button>
                </div>
                `;
          document.querySelector("#right-container").innerHTML += tripOk;
        }
      } else {
        document.querySelector("#timeToBook").style.display = "none";
        const noTrip = `
                <div id="noTrip">
                    <img class="logo" src="images/notfound.png" />
                    <p class="text">No trip found</p>
                </div>
                `;
        document.querySelector("#right-container").innerHTML += noTrip;
      }
    })
    .then(() => {      for (let j = 0; j < document.querySelectorAll(".addtoCart").length; j++) {
        document
          .querySelectorAll(".addtoCart")
          [j].addEventListener("click", function () {
            console.log(this.id);
          });
      }
    });
});
 //version4