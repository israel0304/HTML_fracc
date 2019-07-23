function m(m){
  console.log(m);
}

function d(d){
  document.write(d);
}

class Numero{
  constructor(min,max){
    this.min = min;
    this.max = max;
  }
  
  ale(){
    return parseInt(Math.random()*(this.max-this.min)+this.min);
  }
}

class Fracc{
  constructor(){
    this.al= new Numero(1,11);
    this.num=this.al.ale();
    this.den=this.al.ale();
  }
  
  generar(){
    while(this.num>this.den||this.den===1||this.num===this.den){
      this.num = this.al.ale();
      this.den = this.al.ale();
    }
    return {num: this.num , den : this.den};
  }
}



class Cajas{
  constructor(){
    this.fracc = new Fracc().generar();
    this.num = this.fracc.num;
    this.den = this.fracc.den;
  }
  
  dibujar(){
    m(this.fracc.num+"/"+this.fracc.den);
    for(this.i=0;this.i<this.num;this.i++){
      $("#cont").append('<div>caja1<div>');
    }
    for(this.i=0;this.i<(this.den-this.num);this.i++){
      $("#cont").append('<div>caja2<div>');
    }
    
  }
}
let contener = new Cajas().dibujar();