interface Smartphone {
  credito: number;
  numChiamate: number;

  ricarica(unaRicarica: number): void;
  chiamata(minutiDurata: number): void;
  numero404(): number;
  getNumeroChiamate(): number;
  azzeraChiamate(): number;
}

class User implements Smartphone {
  credito: number;
  numChiamate: number;
  constructor(_credito: number, _numChiamate: number) {
    this.credito = _credito;
    this.numChiamate = _numChiamate;
  }

  ricarica(unaRicarica: number): void {
    console.log("credito prima della ricarica: " + this.numero404() + "€");
    console.log("Stai per effettuare una ricarica di " + unaRicarica + "€");

    this.credito += unaRicarica;
    console.log(this.credito);
  }
  chiamata(minutiDurata: number): void {
    console.log("Hai effettuato una chiamata di " + minutiDurata + " minuti");
    this.numChiamate++;
    console.log("Hai effettuato un totale di " + this.getNumeroChiamate() +  " chiamate" );
    this.credito -= minutiDurata * 0.2;
    console.log(`Credito residuo: ${this.numero404()}€`);
  }
  numero404(): number {
    return this.credito;
  }
  getNumeroChiamate(): number {
    return this.numChiamate;
  }
  azzeraChiamate(): number {
    this.numChiamate = 0;
    return this.numChiamate;
  }
}

const firstUser = new User(50, 4);
firstUser.ricarica(20);
firstUser.chiamata(5);
