import axios from 'axios';
const employees=[];

export async function getAllEmployees(){
    await axios.get('http://localhost:8080/api/employees')
    .then((response) => employees.push(response.data))
    .catch(error => console.log(error));
    return  employees;
}

export async function getEmployeeById({params}){
    let employee = {id:'',firstName:'',lastName:'',email:''}
    await axios.get(`http://localhost:8080/api/employees/${params.employeeId}`)
    .then(response => {
        employee = response.data;  
    })
    .catch(error => console.log(error));
    return {employee};  
}