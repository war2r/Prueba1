function HolaMundo( cadena:string)
{
    console.log("Hola Mundo : " + cadena );
}

function MuestraHeroe( hero:Heroe)
{
    console.log("Hola Mundo : " + hero.nombre );
}

HolaMundo("Nada");

let nombre:string= "MiNombre"

HolaMundo(nombre);

let texto=`Variable nombre: ${nombre}`;

HolaMundo(texto);

let batman= {
    nombre: "Bruno Diaz",
    artesMarciales : ["Karate","Aikido","Wing Chun","Jiu-Jitsu"]
}

interface Heroe
{
    nombre:string,
    artesMarciales:string[]
}

MuestraHeroe(batman);

let resultadoDoble =  (a:number,b:number) =>  (a+b) * 2
let testfuncionAnonima = 
    function MuestraMensaje (msg:string)
    {
        console.log(msg)
    }
let testfuncionAnonimaDos = function (msg:string){console.log(msg)}
console.log(resultadoDoble(2,1));

let objHeroe=
{
    nombreH:"Hulk",
    Golpea()
    {
       
        setTimeout( () =>
        {
            console.log(this.nombreH + " Golpea!!!");
        }
        ,1000)
    }
}

class HeroeC
{
    nombre:string;
    poder:string='';


    constructor(nombre:string,poder?:string)
    {
        this.nombre=nombre;
        if (poder != undefined){this.poder=poder;}
        
    }

    Ataca= ()=>{console.log("El " + this.nombre + " ataca con " + this.poder)}

}

let antman=new HeroeC("SpiderMan", 'Telaranya');
let otro=new HeroeC("Hulk");
antman.Ataca();
otro.Ataca();

objHeroe.Golpea();