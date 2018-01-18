const express = require('express');

const app = express();
const port = 3001;

app.get('/api/friends', (req, res) => {
  const friends = [
    {
      id: 1,
      name: 'Harry Potter'
    },
    {
      id: 2,
      name: 'Hermione Granger'
    },
    {
      id: 3,
      name: 'Ron Weasley'
    }
  ];

  res.json(friends);
});

app.listen(port, () => console.log(`Server is running on port ${port}`));