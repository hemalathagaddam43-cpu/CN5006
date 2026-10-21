function EmployeeInfo(name, Salary)
{
   console.log("Welcome" + name + " Your monthly salary is "+ Salary)
}

const currentDateTime = new Date();
console.log("Thia is my first program");
console.log("Program run on : " + currentDateTime.toLocaleString());

var EmpName="Thanusri"
var EmpSalary= 50000

EmployeeInfo(EmpName,EmpSalary);

const EmpSkills= (skills,Name,LabGrp) => {
   console.log("Hi "+ Name + "Expert in " + skills)
   console.log("Lab Group Number is ",LabGrp)

}
EmpSkills(" java , Python, c++","Thanusri","09")

const student= require('./StudentInfo')
const person = require('./Person')
// because getName is the function so we use ()
console.log("Student Name:" +student.getName())
console.log(student.Location())
console.log(student.dob)
// because dob is a variable so we do nt use ()
console.log(student.Studentgrade())
console.log("grade is "+student.Studentgrade(55) )
person1= new person("Sathwika","Australia","marampallysathwika@gmail.com")
console.log("using Person Module",person1.getPersonInfo())
console.log("Programe ended")

os=require("os")
const util=require('util')
console.log("temporary directory"+ os.tmpdir() )
console.log("hostname: "+ os.hostname())
console.log("OS : " + os.platform() +"release:"+ os.release())
console.log("Uptime"+ (os.uptime())/3600 +" hours")
console.log("userInfo" + util.inspect(os.userInfo()))
console.log("Memory "+ os.totalmem()/1000000000 + "Giga byte")
console.log(" free: "+os.freemem()/1000000000 + "Giga byte")
console.log("CPU "+ util.inspect(os.cpus()))
console.log("Network"+ util.inspect(os.networkInterfaces()))
console.log("programe end")
