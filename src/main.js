/* eslint-disable no-unused-vars */
import $ from 'jquery';
import './style.css';

$(document).ready(function() {
  $('#weatherLocation').click(function() {
    let city = $('#location').val();
    $('#location').val("");

    let promise = new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=129d36f95d0264a22fce62f61459dad0`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }
      request.open("GET", url, true);
      request.send();
    });

    promise.then(function(response) {
      let body = JSON.parse(response);
      $('.showHumidity').text(`The humidity in ${city} is ${body.main.humidity}%`);
      $('.showTemp').text(`The temperature in Kelvins is ${body.main.temp} degrees.`);
    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    });
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