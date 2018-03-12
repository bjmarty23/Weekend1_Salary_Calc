/*jshint esversion: 6*/

console.log('top');
let table=[];

class Employee{
  constructor( first, last, id, title, salary) {
  this.first = first;
  this.last = last;
  this.id = id;
  this.title = title;
  this.salary = salary;
}//end constuctor
}// end employee

$(document).ready(readyNow);
function readyNow(){
  console.log('doc ready');
  onClick();
}// end doc ready

function onClick(){
  console.log('on click');
  $( '#submitButton').on('click',newEmployee);
//end button
}//end onClick func

function newEmployee( first, last, id, title, salary) {
  console.log('newEmployee');
  table.push( new Employee ( $('#firstIn').val(), $('#lastIn').val(), $('#idIn').val(), $('#titleIn').val(), $('#salaryIn').val() ));
  console.log($('#firstIn').val());
  updateTable();
}//end newEmployee

//update this function to append
function updateTable(){
  console.log('updateTable');
  let outputElement = $('#tableBody');
  outputElement.empty();
  for( employee of table){
  outputElement.append ( '<tr><td>' + employee.first + '</td><td>' + employee.last + '</td><td>' + employee.id + '</td><td>' + employee.title + '</td><td>' + employee.salary + '</td></tr>');
  //console.log($('#lastIn').val());
}// end for loop
}//end updateEmployees func

function totalMonthly() {
  $('#totalMonthly').val().append('$' + salaryIn + (toFixed(2)));

}

//This is the mini challenge borders for the table

console.log('bottom');
