class Grado{
    private pizarron:number=1;
    private sillas:number=30;
    private mesas:number=15;
    private puertas:number=1;
    private ventanas:number=2;
    private anio:number=0;    
    public division:string;
    protected maestra:string;
    protected aprobados:number=0;
    protected desaprobados:number=0;
    protected cantidadAlumnos:number=0;
    protected titulo:string="primario";
    constructor (maestra:string,anio:number,division:string){
        this.maestra=maestra;
        this.division=division;
        this.anio=anio;
    }
    
    

   
    get Titulo(){
        return this.titulo;
    }
     get CantidadPizarron(){
        return this.pizarron;
    }
    get CantidadSillas(){
        return this.sillas;
    }
    get CantidadMesas(){
        return this.mesas;
    }
    get CantidadPuertas(){
        return this.puertas;
    }
     get CantidadVentanas(){
        return this.ventanas;
    }
    get Anio(){
        return this.anio;
    }
    
}

class AnioDivision extends Grado{

    set Aprobados(cantidad:number){
        this.aprobados=cantidad;
    }    
    set Desaprobados(cantidad:number){
        this.desaprobados=cantidad;
    }
    set CantidadAlumnos(cantidad:number){
        this.cantidadAlumnos=cantidad;
    }
    get CantidadAlumnos(){
        return this.cantidadAlumnos;
    }
    get Aprobados(){
        return this.aprobados;
    }
    get Desaprobados(){
        return this.desaprobados;

    }
  
    
    get Maestra(){
        return this.maestra;
    }
    get Division(){
        return this.division;
    }

    
}

let Grado1A=new AnioDivision("María Montessori",1,"C");
Grado1A.Aprobados=25;
Grado1A.Desaprobados=5;
Grado1A.CantidadAlumnos=30;

console.log("Maestra a cargo: "+Grado1A.Maestra);
console.log("Año: "+Grado1A.Anio);
console.log("Division: "+Grado1A.Division);
console.log("Titulo: "+Grado1A.Titulo);
console.log("Alumnos: "+Grado1A.CantidadAlumnos);
console.log("Aprobados: "+Grado1A.Aprobados);
console.log("Desaprobados: "+Grado1A.Desaprobados);
console.log("Cantidad de pizarrones: "+Grado1A.CantidadPizarron);
console.log("Cantidad de puertas: "+Grado1A.CantidadPuertas);
console.log("Cantidad de sillas: "+Grado1A.CantidadSillas);
console.log("Cantidad de mesas: "+Grado1A.CantidadMesas);
console.log("Cantidad de ventanas: "+Grado1A.CantidadVentanas);

;