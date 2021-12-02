const users = []

const bcrypt = require('bcryptjs')

module.exports = {
    login: (req, res) => {
      // console.log('Logging In User')
      // console.log(req.body)
      const { username, password } = req.body
      for (let i = 0; i < users.length; i++) {
        if (users[i].username === username){
          console.log(username)
          const authorized = bcrypt.compareSync(password, users[i].passHash)
          console.log(authorized)
          if (authorized){
           let userToReturn = {...users[i]}
           delete userToReturn.passHash
           res.status(200).send(userToReturn)
           return
        }
      }
    }
  
      res.status(400).send("User not found.")
    },
    register: (req, res) => {
        const {username, email, firstName, lastName, password} = req.body

        let salt = bcrypt.genSaltSync(5)
        let passHash = bcrypt.hashSync(password, salt)

       let user = {
         username,
         email,
         firstName,
         lastName,
         passHash
       }

       users.push(user)
       console.log('Registering User')
       let userToReturn = {...user}
       delete userToReturn.passHash
       res.status(200).send(userToReturn)

        
    }
    
}