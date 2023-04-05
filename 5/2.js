function tk(name, workdays) {
    this.fullname = name;
    this.days = workdays;
    this.salary = workdays * 2000;
}
let t1 = new tk("Bond", 25);
let t2 = new tk("Tom", 21);
let t3 = new tk("Arthur", 26);
let t4 = new tk("Jack", 31);
let t5 = new tk("John", 30);
persons = [t1, t2, t3, t4, t5];

for (let i = 0; i < 5; i++) {
    alert("Name : " + persons[i].fullname + " Days Worked : " + persons[i].days + " Salary : " + persons[i].salary);
}
