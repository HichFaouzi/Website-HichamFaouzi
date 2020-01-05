var bestelling = document.getElementById("bestelling");

    
function startTimer(duration, display)
 {
      var timer = duration, minutes, seconds;
      var interval = setInterval(function () {
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      display.textContent = minutes + ":" + seconds;

      if (--timer < 0) {
        document.getElementById("bestelling").textContent = "Uw bestelling is klaar om opgehaald/geleverd te worden";
        display.textContent = "";
      }
  }, 1000);
}

window.onload = function () {
    var fiveMinutes = 60 * 5;
    display = document.querySelector('#time');
    startTimer(fiveMinutes, display);
    var i = 0;
            if (i == 0)
            {
            i = 1;
            var elem = document.getElementById("myBar");
            var width = 1;
            var id = setInterval(frame, 3010);
            function frame() {
              if (width >= 100) {
                clearInterval(id);
                i = 0;
              } else {
                width++;
                elem.style.width = width + "%";
              }
            }
          }
        }
    