import axios from "axios";

const baseUrl="http://localhost:3000/employees";
class EmployeeService{
getAllEmployee(){
    return axios.get(baseUrl);
}
getEmployee(id){
    return axios.get(`${baseUrl}/${id}`);
}
createEmployee(employee){
    console.log("xxxxx==>"+JSON.stringify(employee));
    return axios.post(baseUrl,employee);
}
deleteEmployee(id){
    return axios.delete(`${baseUrl}/${id}`);
}
updateStudent(id,employee){
    return axios.put(`${baseUrl}/${id}`,employee);
}
}
export default new EmployeeService();