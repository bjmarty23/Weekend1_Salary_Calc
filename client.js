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

function newEmployee( first, last, id, title, salary) {
  table.push( new Employee ( $('#firstIn').val(), $('#lastIn').val(), $('#idIn').val(), $('#titleIn').val(), $('#salaryIn').val()));
  console.log($('#firstIn').val());
  updateEmployees();
}

$ (document).ready (function(){

$( '#submitButton').on('click', function(){
  newEmployee( );

});//end on click
});// end doc ready
//update this function to append
function updateEmployees(){
  let outputElement = $('#employeeList');
  outputElement.empty();
  for( employee of table){
  outputElement.append('<li>'+ employee.first + ' ' + employee.last + ' ' + employee.id + ' ' + employee.title + ' ' + employee.salary + ' ' + '</li>');// figure out how to input these into my table.
  console.log('something');
}// end for loop
}//end updateEmployees func




console.log('bottom');
