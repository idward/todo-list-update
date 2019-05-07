import axios from 'axios';

export default {
  login(value){
    //return promise
    return new Promise(async (resolve,reject) => {
      const response = await axios.get('http://localhost:3001/users');
      const user = response.data.find(data => {
        return data.name === value.username && data.password === value.password;
      });

      if(user){
        resolve(user);
      } else {
        reject(new Error('user is not exist'));
      }
    });
  }
}