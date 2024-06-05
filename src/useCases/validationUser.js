import axios from 'axios'

const validationUser = async (userName, password) => {

  const users = await axios.get('http://localhost:3001/users')
    .then(response => response.data)
    .catch(error => console.error('Error: ', error))


    let access = false
    for (const user of users) {
      if (user.name === userName && user.password === password) access = true
    }

    return access
}


export default validationUser
