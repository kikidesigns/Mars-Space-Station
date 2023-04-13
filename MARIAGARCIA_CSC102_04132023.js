function simpleCount() {
    var currTime = 10;
    for (var i = 1; i <= 11; i++) {
        if (i == 11) {
            setTimeout(function () {
                document.getElementById("countdownTimer").innerHTML = "Blastoff!";
            }, 1000 * i);
        } else if (i > 6) {
            setTimeout(function () {
                document.getElementById("countdownTimer").innerHTML =
                    "Warning Less than half way to launch= " + currTime;
                currTime = currTime - 1;
            }, 1000 * i);
        } else {
            setTimeout(function () {
                document.getElementById("countdownTimer").innerHTML = "" + currTime;
                currTime = currTime - 1;
            }, 1000 * i);
        }
    }
}