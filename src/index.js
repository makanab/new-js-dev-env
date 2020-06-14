import './styles/main.scss';
import getUsers from './api/userApI'

getUsers().then(results=>{
    let usersBody = "";
     results.forEach(user => {

        usersBody +=         `        
        <tr>
        <td><a href="#"  data-id="${user.id}"  class="deleteUser">Delete</a></td>
        <td>${user.id}</td>
        <td>${user.firstName}</td>
        <td>${user.lastName}</td>
        <td>${user.email}</td>
        </tr>

        `
     
         
     });
     global.document.getElementById('user').innerHTML = usersBody;
});

