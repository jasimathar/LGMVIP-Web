var list1 = [];
var list2 = [];
var list3 = [];
var list4 = [];
var list5 = [];

var n = 1;
var x = 0;
function AddRow(){
    var Addrown = document.getElementById('fname');
    var NewRow = AddRown.insert(n);

    list1[x] = document.getElementById("fname").Value;
    list1[x] = document.getElementById("lname").Value;
    list1[x] = document.getElementById("Gender").Value;
    list1[x] = document.getElementById("Email").Value;
    list1[x] = document.getElementById("Pnumber").Value;
    
    var cel1 = NewRow.insertCell(0);
    var cel2 = NewRow.insertCell(1);
    var cel3 = NewRow.insertCell(2);
    var cel4 = NewRow.insertCell(3);
    var cel5 = NewRow.insertCell(4);

    cel1.innerHTML = list1[x];
    cel2.innerHTML = list2[x];
    cel3.innerHTML = list3[x];
    cel4.innerHTML = list4[x];
    cel5.innerHTML = list5[x];

    n++;
    x++;


}