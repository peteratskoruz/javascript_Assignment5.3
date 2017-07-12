/**
 * Created by peter joseph on 7/6/2017.
 */


/***************javascriptobject*****************/


var data=
{
    studentDetails:{
        "studentName":"peter",
        "age":28,
        "skills":{"a":"java","b":"javascript"}
    },

    Address:{
        "state": "Tamilnadu",
        "city":"Chennai",
        "country":"India",
        "pincode":600054
    }
}

/*********************displaying the data of student ********************/

document.getElementById('div1').innerHTML="The Student name is" + " " + data.studentDetails.studentName+ "." + " " + "He is" + " " + data.studentDetails.age + " " + "years old" + "." + " " +
 "His skils are" + " " + data.studentDetails.skills.a  + "," + " " + data.studentDetails.skills.b + "."+ "<br>" + "The student address is" + "<br>" +
    "City" + ":" + " " + data.Address.city + "<br>" + "State" + ":" + " " + data.Address.state + "<br>" + "Country" + ":" + " " + data.Address.country + "<br>" +
    "Pincode" + ":" + " " + data.Address.pincode + "<br>";




/*********************andding new property and displaying the data of student ********************/

data.studentDetails.eyeColor="blue";

data.studentDetails.motherName="mary";


document.getElementById('div2').innerHTML="The Student name is" + " " + data.studentDetails.studentName+ "." + " " + "He is" + " " + data.studentDetails.age + " " + "years old" + "." + " " +
    "His eyes are" + " " + "<b>" + data.studentDetails.eyeColor + "</b>" + " " + "color" + "." + " " + "His skils are" + " " +
    data.studentDetails.skills.a + "," + " " + data.studentDetails.skills.b + "." + " " + "His mother name is" + " " + "<b>"+ data.studentDetails.motherName + "</b>" +
        "." + "<br>" + "The student address is" + "<br>" +
    "City" + ":" + " " + data.Address.city + "<br>" + "State" + ":" + " " + data.Address.state + "<br>" + "Country" + ":" + " " + data.Address.country + "<br>" +
    "Pincode" + ":" + " " + data.Address.pincode + "<br>";




/*********************deleting one property and displaying the data of student ********************/

delete data.Address.country;

document.getElementById('div3').innerHTML="The Student name is" + " " + data.studentDetails.studentName+ "." + " " + "He is" + " " + data.studentDetails.age + " " + "years old" + "." + " " +
    "His eyes are" + " " + data.studentDetails.eyeColor + " " + "color" + "." + " " + "His skils are" + " " + data.studentDetails.skills.a + "," + " " + data.studentDetails.skills.b + "." + " " + "His mother name is" + " " + data.studentDetails.motherName +
    "." + "<br>" + "The student address is" + "<br>" +
    "City" + ":" + " " + data.Address.city + "<br>" + "State" + ":" + " " + data.Address.state + "<br>" + "Country" + ":" + " " + "<b>" + data.Address.country + "</b>" + "<br>" +
    "Pincode" + ":" + " " + data.Address.pincode + "<br>";

console.log(data);


console.log(0.1 + 0.2);
console.log(0.1 + 0.2 == 0.3);