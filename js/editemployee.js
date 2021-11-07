// function getParameter(parameterName){
//   let parameters = new URLSearchParams(window.location.search)
//   return parameters.get(parameterName)

// }


function init(){
    let data =localStorage.getItem('rowValue');
    employeeData = data ? JSON.parse(data):"nothing";
    if(employeeData){
        view();
    }else{
        updateEmployee();
    }
}

init();

function view(){

  const queryString = window.location.search;
  console.log(queryString);
  const urlParams = new URLSearchParams(queryString);
  const empl = urlParams.get('idx')
  console.log(empl)

  const val = empl;
  let data= localStorage.getItem('employees');
  const employee = JSON.parse(data);
  
  document.getElementById("name").value = employee[val].name;
  document.getElementById("number").value =employee[val].number;
  document.getElementById("email").value = employee[val].email;
  document.getElementById("address").value = employee[val].address;
  document.getElementById("city").value = employee[val].city;
  document.getElementById("role").value = employee[val].role;
    
}
let employees = [];
let nameElem = document.getElementById("name");
let numberElem = document.getElementById("number");
let emailElem = document.getElementById("email");
let addressElem = document.getElementById("address");
let cityElem = document.getElementById("city");
let roleElem = document.getElementById("role");
let employeeIndex = null;



function updateEmployee(e){
  let datas= localStorage.getItem('employees');
  const employees = JSON.parse(datas);
  const queryString = window.location.search;
  console.log(queryString);
  const urlParams = new URLSearchParams(queryString);
  const emp = urlParams.get('idx')
  console.log(emp)

  const val = emp;

    
    event.preventDefault();
        let employee = {
        name: nameElem.value,
        number: numberElem.value,
        email: emailElem.value,
        address: addressElem.value,
        city: cityElem.value,
        role: roleElem.value,
       
      }
      employees[val].name = employee.name
      employees[val].number = employee.number
      employees[val].email = employee.email,
      employees[val].address = employee.address,
      employees[val].city =employee.city,
      employees[val].role = employee.role,
      
      
    
  
      
      localStorage.setItem('employees',JSON.stringify(employees))
   
      location.href = "showemployee.html";
     
     
  }
