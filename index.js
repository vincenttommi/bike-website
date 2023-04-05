// Select the ul#films element
const bikeList = document.querySelector('#bikes');

// Fetch the movie data
fetch(" http://localhost:4580/bikes")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    // Loop through each movie in the data and add it to the filmList
    data.forEach(function (bikes) {
      const listItem = document.createElement('li');
      listItem.classList.add('bike', 'item');
      listItem.textContent = bike.Bike_type;
      bikeList.appendChild(listItem);
    });

    // Select the  div details
    const bikes = document.querySelector('.details');

    // Loop through each movie in the data and create a new card for it
    data.forEach(function (bike) {
      const card = document.createElement('div');
      card.classList.add('card');
      card.innerHTML = `
        <div class="container">
          <img src="${bike.image}" alt="Product Image" style="width:50%; height:50%">
          <h1><b>${bike.Bike_type}</b></h1>
          <p>Time: ${bike.Time}</p>
          <p>Hiring_Price: ${bike.Hiring_Price}</p>

          <p>Available Bikes: <span class="available-bikes">${bike.capacity - Hired_Bikes}</span></p>
          <button class="Hired_Bikes">Hired_Bikes</button>
        </div>
      `;
      bikes.appendChild(card);

      // Add a click event listener to the "Hire Ticket" button
      const HireBike = card.querySelector('.Hired_Bikes');
      HireBike.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the page from reloading
        // Check if there are any available bikes
        const availableBikes = card.querySelector('.available-bikes');
        const numAvailablebikes = parseInt(availablebikes.textContent);
        if (numAvailablebikes > 0) {
          // Update the number of available bikes and display it on the frontend
          availableBikes.textContent = numAvailablebikes - 1;

          // Update the bikes data in the backend
          const newHiredBikes = bike.tickets_sold + 1;
          fetch(`http://localhost:4580/bikes${bike.id}`, {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ Hired_Bikes: newHiredBikes })
          })
            .then(function(response) {
              if (!response.ok) {
                throw new Error('Network response was not ok');
              }
            })
            .catch(function(error) {
              console.error('There was a problem updating the bike data:', error);
            });
        } else {
          alert('Sorry, this showing is hired bikes');
        }
      });
    });
  })
  .catch(function(error) {
    console.log('There was an error fetching the bike data:', error);
  });