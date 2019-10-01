const User = require('../models/user')

module.exports.createUser = (req, res) => {
  const { name, about, avatar } = req.body
  console.log(req)
  console.log(name, about, avatar)

  User.create({ name, about, avatar })
    .then((user) => res.send({ data: user }))
    .catch(() => res.status(500).send({ message: 'Server Controller Error' }))
}
