export class Exam {
  constructor(answer,weight){
    this.answer=answer;
    this.weight=weight;
    this.exams=[];
  }
  add(exam){
    this.exams.push(exam);
  }
  avg(){
    let soma=0;
    for (let i=0; i<this.exams.length; i++){
      let nota=0;
      for (let key in this.exams[i].values){
        if (this.exams[i].values[key] == this.answer.values[key]){
          nota+=this.weight[key]
        }
      }
      soma+=nota;
    }
  
    return soma / this.exams.length;
  }
  min(count=1){
    const notas=[]

    for(let i=0; i<this.exams.length; i++){
      let nota=0;
      for (let key in this.exams[i].values){
        if (this.exams[i].values[key] == this.answer.values[key]){
          nota+=this.weight[key]
        }
      }
      notas.push(nota);
    }
    notas.sort((a,b) => a-b);
    return notas.slice(0,count);
  }
  max(count=1){
    const notas=[]

    for(let i=0; i<this.exams.length; i++){
      let nota=0;
      for (let key in this.exams[i].values){
        if (this.exams[i].values[key] == this.answer.values[key]){
          nota+=this.weight[key]
        }
      }
      notas.push(nota);
    }
    notas.sort((a,b) => b-a);
    return notas.slice(0,count);
  }
  lt(limite){
    const menores=[]

    for(let i=0; i<this.exams.length; i++){
      let nota=0;
      for (let key in this.exams[i].values){
        if (this.exams[i].values[key] == this.answer.values[key]){
          nota+=this.weight[key]
        }
      }
      if (nota < limite){
        menores.push(nota);
      }
    }
    menores.sort((a,b) => a-b);
    return menores;
  }

  gt(limite){
    const maiores=[]

    for(let i=0; i<this.exams.length; i++){
      let nota=0;
      for (let key in this.exams[i].values){
        if (this.exams[i].values[key] == this.answer.values[key]){
          nota+=this.weight[key]
        }
      }
      if (nota > limite){
        maiores.push(nota);
      }

    }
    maiores.sort((a,b) => b-a);
    return maiores;
  }

}