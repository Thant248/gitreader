import axios from "axios";


const employee = [];

export async function getAllEmployee(){

        
       await axios.get('http://localhost:8080/api/employees')
            .then( resp => employee.push(resp.data))
            .catch( error => console.log(error));

        return employee;    
}

export async  function getAllEmployeeByiD({params}){


    let employee = {id: '' , firstName: '', lastName: '', email: ''};
    await axios.get(`http://localhost:8080/api/employees/${params.employeeId}`)
            .then(resp => {employee = resp.data})
            .catch(error => console.log(error));

    return {employee};
}

export async function deleteEmployeeById({id}){

    await axios.delete(`http://localhost:8080/api/employees/${id}`)
                .then( () =>  navigator("/employee"))
                .catch(error => console.log(error))
                return employee;

}