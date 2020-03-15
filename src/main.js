/* eslint-disable indent */
/* eslint-disable no-unused-vars */
import $ from 'jquery';
import './style.css';

$(document).ready(function() {
  $('#weatherLocation').click(function() {
    let city = $('#location').val();
    $('#location').val("");

    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=129d36f95d0264a22fce62f61459dad0`)
      .then(function(response) {
        if (response.ok && response.status ==200) {
          return response.json();
        } else {
          return false;
        }
      })
      .catch(function(error) {
        return false;
      })
      .then(function(jsonifiedResponse) {
        getElements(jsonifiedResponse);
      });

      const getElements = function(response) {
        if (response) {
          $('.showHumidity').text(`The humidity in ${city} is ${response.main.humidity}%`);
          $('.showTemp').text(`The temperature in Kelvins is ${response.main.temp} degrees.`);
        } else {
          $('.showHumidity').text(`There was an error handling your request.`);
          $('.showTemp').text(`Please check your inputs and try again!`);
        }
      };
    });
  });

// $(document).ready(function() {

//   //129d36f95d0264a22fce62f61459dad0
//   $('#weatherLocation').click(function() {
//     const city = $('#location').val();
//     $('#location').val("");

//     let ourPromise = new Promise(function(resolve, reject) {
//       let request = new XMLHttpRequest();
//       let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=129d36f95d0264a22fce62f61459dad0`;

//       request.onload = function() {
//         if (this.status === 200) {
//           resolve(request.response);
//         } else {
//           reject(Error(request.statusText));
//         }
//       };
//       request.open("GET", url, true);
//       request.send();
//     });
    
//     ourPromise.then(function(response) {
//       let body = JSON.parse(response);
//       $('.showHumidity').text(`The humidity in ${city} is ${response.main.humidity}%`);
//       $('.showTemp').text(`The temperature in Kelvins is ${response.main.temp} degrees.`);
//     }, function(error) {
//       $('.showErrors').text(`There was an error processing your request: ${error.message}`);

//     };
//   });

// });