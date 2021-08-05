
function showTime(){
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    var myDate = new Date();
    var hours = myDate.getHours();
    var minutes = myDate.getMinutes();
    var seconds = myDate.getSeconds();
    
    if (hours < 10) hours = 0 + hours;

    if (minutes < 10) minutes = "0" + minutes;

    if (seconds < 10) seconds = "0" + seconds;

    fecha = myDate.toLocaleDateString(undefined, options);

$("#HoraActual").text(fecha + " | " + hours + ":" + minutes + ":" +seconds);
setTimeout("showTime()", 1000);
}