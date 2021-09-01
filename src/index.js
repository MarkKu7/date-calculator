import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { weekDay } from './../src/js/date.js';

$(document).ready(function() {
  $('#date-form').submit(function(event) {
    event.preventDefault();
    let date = $('#date-input').val();
    let day = new Date(date);
    let response = day.getDay();
    let weekDayOut = weekDay(response);
    console.log(date);
    console.log(day);
    $('#weekday-response').append("<p>" + weekDayOut + "</p>");
  });
});