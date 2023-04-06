let slideIndex = 1;
// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}
// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("carousel-item");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
setInterval(() => {
  plusSlides(1);
}, 3000);


//validating form using a function
function  validate(){


  const form = document.getElementById("#myform");


  const firstname  = document.getElementById("firstname").value;
  const lastname = document.getElementById("lastname").value;
  const username = document.getElementById("username").value;
  const  city = document.getElementById("city").value;
  const estate = document.getElementById("estate").value;
  const zip = document.getElementById("zip").value;
  const invalidCheck2 = document.getElementById("invalidCheck2").value;



  if(firstname==""|| lastname =="" || username == "" || city =="" ||estate ==""||zip == ""|| invalidCheck2==""){
    
      Swal.fire('oop','validate all the fields','error' );


  }else{


  alert("error");





}
}


//fetching
const bikeList = document.querySelector('#bikes');

// Fetch the movie data
fetch(" http://localhost:3000/bikes")
  .then(function (response) {
    return response.json();
  })
.then(function (data) {
    // Loop through each bike in the data and add it to the bikeList
    data.forEach(function (bike) {
      const listItem = document.createElement('li');
      listItem.classList.add('bike', 'item');
      listItem.textContent = bike.Bike_type;
      bikeList.appendChild(listItem);
    });

    // Select the .body element
    const bikes = document.querySelector('.details');
    data.forEach(function (bike) {
      const card = document.createElement('div');
      card.classList.add('card');
     
      card.innerHTML = `
        <div class="con">
          <img src="${bike.image}" alt="Product Image" style="width:99.60%; height:60%">
          <h1><b>${bike.Bike_type}</b></h1>
          <p>Hiring-price: ${bike.Hiring_Price}</p>
          <p>Time: ${bike.Time}</p>
          <p>Available Bikes: <span class="available-bikes">${bike.capacity - bike.Hired_Bikes}</span></p>
          <button class="Hire-bike" id="hire"  role="button">Hire Bike</button>
        </div>
      `;
      bikes.appendChild(card);

      // Add a click event listener to the "Hire  Bike" button
      const HireButton = card.querySelector('.Hire-bike');
      HireButton.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the page from reloading
        // Check if there are any available bikes
        const availableBikes = card.querySelector('.available-bikes');
        const numAvailableBikes = parseInt(availableBikes.textContent);
        if (numAvailableBikes > 0) {
          // Update the number of available Bikes and display it on the frontend
          availableBikes.textContent = numAvailableBikes - 1;

          // Update the movie data in the backend
          const newHired_Bikes = bike.Hired_Bikes + 1;
          fetch('http://localhost:3000/bikes${bike.id}', {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ Hired_Bikes: newHired_Bikes })
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
          alert('Sorry, this showing is hired out!');
        }
      });
    });
  })
  .catch(function(error) {
    console.log('There was an error fetching the bike data:', error);
  });

  // nko idea wacha tu capture hizi cards kwa css using id



//function that is adding customer details

// Get the reference to the form and attach an event listener for form submit
const form = document.getElementById('#myform"').addEventListener('submit', handleSubmit);


// Define the function that will be called when the form is submitted
function handleSubmit(e) {
  e.preventDefault();
 
    const firstname = document.getElementById("firstname").value
    const lastname = document.getElementById("lastname").value
    const username = document.getElementById("username").value
    const city = document.getElementById("city").value
    const estate  = document.getElementById("estate").value
    const  zip = document.getElementById("zip").value

       // Fixed typo here, should be price
  
       fetch(' http://localhost:3000/details', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
        
          firstname: firstname,
          lastname: lastname,
          username: username,
          city: city,
          estate: estate,
          zip: zip






        })
      })
      .then(res => res.json())
    
        .then(product => console.log(product))
        .catch(err => console.error(err)); 
      

}



  




