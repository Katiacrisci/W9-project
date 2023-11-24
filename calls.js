var User = /** @class */ (function () {
    function User(_credito, _numChiamate) {
        this.credito = _credito;
        this.numChiamate = _numChiamate;
    }
    User.prototype.ricarica = function (unaRicarica) {
        console.log("credito prima della ricarica: " + this.numero404() + "€");
        console.log("Stai per effettuare una ricarica di " + unaRicarica + "€");
        this.credito += unaRicarica;
        console.log(this.credito);
    };
    User.prototype.chiamata = function (minutiDurata) {
        console.log("Hai effettuato una chiamata di " + minutiDurata + " minuti");
        this.numChiamate++;
        console.log("Hai effettuato un totale di " + this.getNumeroChiamate() + " chiamate");
        this.credito -= minutiDurata * 0.2;
        console.log("Credito residuo: ".concat(this.numero404(), "\u20AC"));
    };
    User.prototype.numero404 = function () {
        return this.credito;
    };
    User.prototype.getNumeroChiamate = function () {
        return this.numChiamate;
    };
    User.prototype.azzeraChiamate = function () {
        this.numChiamate = 0;
        return this.numChiamate;
    };
    return User;
}());
var firstUser = new User(50, 4);
firstUser.ricarica(20);
firstUser.chiamata(5);
var secondUser = new User(0, 0);
secondUser.ricarica(3);
secondUser.chiamata(10);
var thirdUser = new User(0, 0);
thirdUser.ricarica(7);
thirdUser.chiamata(3);
var apriApp = function () {
    var icons = document.getElementById("app-grid");
    icons.style.display = "none";
    var phoneApp = document.getElementById("phone-app");
    phoneApp.classList.remove("d-none");
    var wallpaper = document.querySelector(".screen");
    wallpaper.style.background = "none";
    wallpaper.remove();
    var dock = document.querySelector(".dock");
    dock.style.display = "none";
};
var phone = document.getElementById("phone");
phone.addEventListener("click", apriApp);
var intervalId;
var toggleBtn = function (btn, id) {
    if (id) {
        clearInterval(id);
    }
    if (btn.classList.contains("dialing")) {
        btn.classList.remove("dialing");
        return;
    }
    btn.classList.add("dialing");
};
var parseTimeToString = function (time) {
    return new Date(time * 1000).toISOString().substring(14, 19);
};
var parseTimeFromString = function (timeString) {
    var time = timeString.split(":").reduce(function (acc, time) { return 60 * parseInt(acc) + time; });
    return parseInt(time);
};
var timer = document.querySelector("#phone-app .row h1");
var updateTimeStamp = function (prevValue) {
    return setInterval(function () {
        var newValue = ++prevValue;
        timer.innerText = parseTimeToString(newValue);
    }, 1000);
};
function dial() {
    toggleBtn(dialBtn);
    var timer = document.querySelector("#phone-app .row h1");
    timer.innerText = "00:00";
    intervalId = updateTimeStamp(parseTimeFromString(timer.innerText));
}
var dialBtn = document.getElementById("dial");
console.log(dialBtn);
dialBtn.addEventListener("click", dial);
