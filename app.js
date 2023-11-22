var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var LavoratoreAutonomo = /** @class */ (function () {
    function LavoratoreAutonomo(_codredd, _redditoannualelordo, _tasseinps, _tasseirpef) {
        this.codredd = _codredd;
        this.redditoannuolordo = _redditoannualelordo;
        this.tasseinps = _tasseinps;
        this.tasseirpef = _tasseirpef;
    }
    return LavoratoreAutonomo;
}());
var Phisioterapists = /** @class */ (function (_super) {
    __extends(Phisioterapists, _super);
    function Phisioterapists(_codredd, _redditoannuolordo, _tasseinps, _tasseirpef, _name, _location) {
        var _this = _super.call(this, _codredd, _redditoannuolordo, _tasseinps, _tasseirpef) || this;
        _this.name = _name;
        _this.location = _location;
        return _this;
    }
    Phisioterapists.prototype.getTasseIrpef = function () {
        return this.redditoannuolordo * this.tasseirpef;
    };
    Phisioterapists.prototype.getTasseInps = function () {
        return this.redditoannuolordo * this.tasseinps;
    };
    Phisioterapists.prototype.getUtileTasse = function () {
        return this.getTasseInps() + this.getTasseIrpef();
    };
    Phisioterapists.prototype.getRedditoNetto = function () {
        return this.redditoannuolordo - this.getUtileTasse();
    };
    return Phisioterapists;
}(LavoratoreAutonomo));
var fiosioterapistaOne = new Phisioterapists(1, 30000, 0.1, 0.05, "paolo", "roma");
console.log(fiosioterapistaOne.getRedditoNetto());
var fiosioterapistaTwo = new Phisioterapists(2, 15000, 0.1, 0.05, "giuseppe", "cagliari");
console.log(fiosioterapistaTwo.getRedditoNetto());
