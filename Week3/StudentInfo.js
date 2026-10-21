const dateofBirth="17/12/2006"
const getStudentName =    () =>
{
    return " Gaddam Thanusri"
}
const getCampusName = () =>
{
    return ("University Of East London")
}

exports.getName=getStudentName
exports.Location=getCampusName
exports.dob=dateofBirth

exports.Studentgrade=(marks)=>
{
    if(marks>50 && marks <70) return ("B grade")
        else
    return ("A grade")
}