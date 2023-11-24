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
    console.log(
      "Hai effettuato un totale di " + this.getNumeroChiamate() + " chiamate"
    );
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

const secondUser = new User(0, 0);
secondUser.ricarica(3);
secondUser.chiamata(10);

const thirdUser = new User(0, 0);
thirdUser.ricarica(7);
thirdUser.chiamata(3);

const apriApp = () => {
  const icons = document.getElementById("app-grid") as HTMLDivElement;
  icons.style.display = "none";
  const phoneApp = document.getElementById("phone-app") as HTMLDivElement;
  phoneApp.classList.remove("d-none");
  const wallpaper = document.querySelector(".screen") as HTMLDivElement;
  wallpaper.style.background = "none";
  wallpaper.remove();
  const dock = document.querySelector(".dock") as HTMLDivElement;
  dock.style.display = "none";
};
const phone = document.getElementById("phone") as HTMLButtonElement;
phone.addEventListener("click", apriApp);
let intervalId;
const toggleBtn = (btn: HTMLButtonElement, id?: number) => {
  if (id) {
    clearInterval(id);
  }

  if (btn.classList.contains("dialing")) {
    btn.classList.remove("dialing");
    return;
  }
  btn.classList.add("dialing");
};

const parseTimeToString = (time: number) => {
  return new Date(time * 1000).toISOString().substring(14, 19);
};

const parseTimeFromString = (timeString: string): number => {
  let time = timeString.split(":").reduce((acc, time) => 60 * parseInt(acc) + time);
  return parseInt(time);
};
const timer = document.querySelector(
  "#phone-app .row h1"
) as HTMLHeadingElement;

const updateTimeStamp = (prevValue: number) => {
  return setInterval(() => {
    const newValue = ++prevValue;
    timer.innerText = parseTimeToString(newValue);
  }, 1000);
};

function dial() {
  toggleBtn(dialBtn);
  const timer = document.querySelector(
    "#phone-app .row h1"
  ) as HTMLHeadingElement;
  timer.innerText = "00:00";
  intervalId = updateTimeStamp(parseTimeFromString(timer.innerText));
}
const dialBtn = document.getElementById("dial") as HTMLButtonElement;
console.log(dialBtn);

dialBtn.addEventListener("click", dial);
