//--------------Real-time date update----------------//
function displayDate() {
    var currentDate = new Date();
    var options = {
        weekday: 'short',
        day: 'numeric',
        month: 'short',
    };
    var dateString = currentDate.toLocaleDateString(undefined, options);

    var hours = currentDate.getHours();
    var minutes = currentDate.getMinutes();
    var amPm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    var timeString =
        hours + ':' + (minutes < 10 ? '0' : '') + minutes + ' ' + amPm;

    return dateString + ', ' + timeString;
}

setInterval(function () {
    let currentTime = document.getElementById('time');
    currentTime.innerHTML = displayDate();
}, 1000);
