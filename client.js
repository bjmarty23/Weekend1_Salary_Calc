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
  money();
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

function money(){
  let totalSalary = 0;
  let outputElement = $('#total');
  //outputElement.empty();
for (salary of table) {
  totalSalary += parseInt(employee.salary);
  outputElement.empty();
  outputElement.append('Total Monthly Costs:$' + totalSalary.toFixed(2));
  //outputElement.append( totalSalary);
console.log('totalSalary', totalSalary);
if (totalSalary > 20000) {
  outputElement.css ('background-color', 'red');
}
}
}
//This is the mini challenge borders for the table

console.log('bottom');
