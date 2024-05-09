const express = require('express')
const app = express()
const myFunction = require('./myfunction');

app.get('/myprofilepicture', function (req, res) {
  res.send('my name is blessing')
})



app.listen(3000, function () {
    console.log('server is runing at http//localhost:3000!');
  });
  
  // CREATE API
app.post('/ihechi/github', async(req, res) => {
  try {
    const userData = req.body;

    const newUser = new User(userData);
    await newUser.save();
    res.status(201).json({ message: 'User added successfully', user: newUser });
} catch (error) {
    res.status(500).json({ message: 'Failed to add user', error: error.message });
}
})

// GET API
app.get('/users', async (req, res) => {
  try {
    
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    
    res.status(500).json({ message: 'Failed to fetch users', error: error.message });
  }
});
