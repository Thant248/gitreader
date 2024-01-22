import axios from "axios";

const student=[]

const   STUDENT_API_BACKEND_UR = 'http://localhost:8080/api/students';


export const getAllStudents = () =>  axios.get(STUDENT_API_BACKEND_UR);

export const createStudent  = (student) =>  axios.post(STUDENT_API_BACKEND_UR, student);

export const getStudentById = (id) => axios.get(STUDENT_API_BACKEND_UR +'/'+ id);

export const updateStudents =  (id, student) =>  axios.put(STUDENT_API_BACKEND_UR +'/'+ id, student);

export const deleteEmployee = (id) => axios.delete(STUDENT_API_BACKEND_UR + '/'+ id);



