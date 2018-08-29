"use strict";
function HolaMundo(cadena) {
    console.log("Hola Mundo : " + cadena);
}
function MuestraHeroe(hero) {
    console.log("Hola Mundo : " + hero.nombre);
}
HolaMundo("Nada");
var nombre = "MiNombre";
HolaMundo(nombre);
var texto = "Variable nombre: " + nombre;
HolaMundo(texto);
var batman = {
    nombre: "Bruno Diaz",
    artesMarciales: ["Karate", "Aikido", "Wing Chun", "Jiu-Jitsu"]
};
MuestraHeroe(batman);
var resultadoDoble = function (a, b) { return (a + b) * 2; };
var testfuncionAnonima = function MuestraMensaje(msg) {
    console.log(msg);
};
var testfuncionAnonimaDos = function (msg) { console.log(msg); };
console.log(resultadoDoble(2, 1));
var objHeroe = {
    nombreH: "Hulk",
    Golpea: function () {
        var _this = this;
        setTimeout(function () {
            console.log(_this.nombreH + " Golpea!!!");
        }, 1000);
    }
};
var HeroeC = /** @class */ (function () {
    function HeroeC(nombre, poder) {
        var _this = this;
        this.poder = '';
        this.Ataca = function () { console.log("El " + _this.nombre + " ataca con " + _this.poder); };
        this.nombre = nombre;
        if (poder != undefined) {
            this.poder = poder;
        }
    }
    return HeroeC;
}());
var antman = new HeroeC("SpiderMan", 'Telaranya');
var otro = new HeroeC("Hulk");
antman.Ataca();
otro.Ataca();
objHeroe.Golpea();
