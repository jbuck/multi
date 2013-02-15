var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

document.body.addEventListener('touchmove', function (event) {
  event.preventDefault();
}, false);

canvas.addEventListener('touchstart', function (event) {
  for (var i = 0; i < event.touches.length; i ++) {
    var touch = event.touches[i];

    ctx.beginPath();
    ctx.arc(px, py, 20, 0, 2 * Math.PI, true);

    ctx.fillStyle = '#f00';
    ctx.fill();
    ctx.lineWidth = 2.0;
    ctx.strokeStyle = '#367dbc';
    ctx.stroke();
  }
}, false);

canvas.addEventListener('touchmove', function () {}, false);
canvas.addEventListener('touchend', function () {}, false);
