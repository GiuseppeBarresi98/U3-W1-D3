abstract class LavoratoreAutonomo {
  codredd: number;
  redditoannuolordo: number;
  tasseinps: number;
  tasseirpef: number;
  constructor(
    _codredd: number,
    _redditoannualelordo: number,
    _tasseinps: number,
    _tasseirpef: number
  ) {
    this.codredd = _codredd;
    this.redditoannuolordo = _redditoannualelordo;
    this.tasseinps = _tasseinps;
    this.tasseirpef = _tasseirpef;
  }
  abstract getTasseIrpef(): number;
  abstract getTasseInps(): number;
  abstract getUtileTasse(): number;
  abstract getRedditoNetto(): number;
}

class Phisioterapists extends LavoratoreAutonomo {
  name: string;
  location: string;
  constructor(
    _codredd: number,
    _redditoannuolordo: number,
    _tasseinps: number,
    _tasseirpef: number,
    _name: string,
    _location: string
  ) {
    super(_codredd, _redditoannuolordo, _tasseinps, _tasseirpef);
    this.name = _name;
    this.location = _location;
  }
  getTasseIrpef(): number {
    return this.redditoannuolordo * this.tasseirpef;
  }

  getTasseInps(): number {
    return this.redditoannuolordo * this.tasseinps;
  }
  getUtileTasse(): number {
    return this.getTasseInps() + this.getTasseIrpef();
  }
  getRedditoNetto(): number {
    return this.redditoannuolordo - this.getUtileTasse();
  }
}

let fiosioterapistaOne = new Phisioterapists(
  1,
  30000,
  0.1,
  0.05,
  "paolo",
  "roma"
);

console.log(fiosioterapistaOne.getRedditoNetto());

let fiosioterapistaTwo = new Phisioterapists(
  2,
  15000,
  0.1,
  0.05,
  "giuseppe",
  "cagliari"
);

console.log(fiosioterapistaTwo.getRedditoNetto());
