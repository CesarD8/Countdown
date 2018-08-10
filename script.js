"use strict";

window.onload = function CountDown()
{
    var targetDate = new Date("Jan 1, 2020 12:00:00").getTime();

    setInterval(function() 
    {
      var currentDate = new Date().getTime();
      var timeLeft = targetDate - currentDate;
    
      var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

      document.getElementById("days").innerHTML = days;    
      document.getElementById("hours").innerHTML = hours;
      document.getElementById("minutes").innerHTML = minutes;
      document.getElementById("seconds").innerHTML = seconds;
    }, 1000);
}