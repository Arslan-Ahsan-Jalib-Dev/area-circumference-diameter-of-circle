//* This Example is the Explaination of Higher Order Functions
//* If We have to an array of radius and ask to calculate the area,circumference and diameter of         circle we have 3 ways to do that
//* 1st method is

var radius=[5,6,7,8,10];
//********************************** 1st method ********************************// 
function area(myarry){
    var arry=[];
    for(i=0;i< myarry.length ;i++){
        var result= Math.PI * myarry[i] * myarry[i];
        arry.push(result);
    }
    console.log(arry);
}
//area(radius);

function circumference(myarry){
    var arry=[];
    for(i=0;i<radius.length;i++){
        var result= 2 * Math.PI * myarry[i];
        arry.push(result);
    }
    console.log(arry);
}
//circumference(radius);

function diameter(myarry){
    var arry=[];
    for(i=0;i< myarry.length;i++){
        var result=2 * myarry[i];
        arry.push(result);
    }
    console.log(arry);
}
//diameter(radius);
//***********************************************************************************
//*In 1st method we have much duplicated code in among three functions which is iteration and array
//*to get rid of this duplication we use method 2 
//***********************************************************************************
//********************************** 1st method ********************************// 
var area = function(r){
    return Math.PI * r * r; 
}
var circumference = function(r){
    return 2 * Math.PI * r; 
}
var diameter = function(r){
    return 2 * r; 
}
var calculate=function(myarray,a){
    var arry=[];
    for(i=0;i<myarray.length;i++){
        var result=a(myarray[i]);
        arry.push(result);
    }
    console.log(arry);
}
//calculate(radius,area);
//calculate(radius,circumference);
//calculate(radius,diameter);