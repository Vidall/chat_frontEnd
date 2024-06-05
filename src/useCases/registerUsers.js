const registerUser = (newUser) => {

  const sendUser = (newUser) => {
    axios.post('http://localhost:3001/users', newUser)
  }

  sendUser(novoUser)

}

// const novoUser = {
//   id: 4,
//   name: "Marcos",
//   senha: "1234",
//   user: false
// }

export default registerUser
