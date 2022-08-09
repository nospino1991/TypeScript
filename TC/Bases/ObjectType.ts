type heroe={
     name :string,
     age:number,
     powers:string[],
     getName?:()=>string
}

let flash1:heroe={
    name:"Iroman",
    age:60,
    powers:["Super Velocidad"," Fuerza"],
    getName(){
      return this.name
    }
}