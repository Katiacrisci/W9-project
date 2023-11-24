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
