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
  let outputElement = $('#employeeList');
  outputElement.empty();
  for( employee of table){
  outputElement.append('<li>'+ employee.first + ' ' + employee.last + ' ' + employee.id + ' ' + employee.title + ' ' + employee.salary + ' ' + '</li>');// figure out how to input these into my table.
  console.log($('#lastIn').val());
}// end for loop
}//end updateEmployees func




console.log('bottom');
