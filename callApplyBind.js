
function Person(name, subject){
    this.name = name;
    this.subject = subject
}
function Teacher1(name, subject){
    Person.call(this,name,subject);
    this.salary = "200kpm"
}
function Teacher2(name, subject){
    Person.apply(this,[name,subject]);
    this.salary = "100kpm"
}
function Teacher3(name, subject){
    Person.bind(this);
    this.salary = "300kpm"
}
console.log(new Teacher1("Aman","Algo"))
console.log(new Teacher2("Albert","React"))
console.log(new Teacher2("Nrupul","DBMS"))