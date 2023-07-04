/* <script type="text/javascript">     
        function convert(){
            var kms =document.getElementById('data').value;
            const factor =0.621371;
            var miles =kms*factor;
            document.getElementById('res').innerText=miles+'miles';
        }

    </script> */




var today = new Date();
var day = today.getDay();
var daylist = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saterday"];
document.getElementById('day').innerText = daylist[day];

var hour = today.getHours();
var minute = today.getMinutes();
var second = today.getSeconds();
var prepand = (hour >= 12) ? "PM" : "AM";
hour = (hour >= 12) ? hour - 12 : hour;
if (hour === 0 && prepand == 'PM') {
    if (minute === 0 && second === 0) {
        hour = 12;
        prepand = 'Noon';
    } else {
        hour = 12;
        prepand = 'PM';
    }
}
if (hour === 0 && prepand === 'AM') {
    if (minute === 0 && second === 0) {
        hour = 12;
        prepand = 'Midnight';
    } else {
        hour = 12;
        prepand = 'AM';
    }
}
document.getElementById('time').innerText = ["Current Time : " + hour + " : " + minute + " : " + second + "  " + prepand];