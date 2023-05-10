const express = require('express');
const bodyParser = require('body-parser');
const usersRouter = require('./routes/users');

const app = express();
app.use(bodyParser.json());

// Configure the '/users' route to be handled by the router we created earlier
app.use('/users', usersRouter);

// Configure an example route for the home page
app.get('/', (req, res) => {
  res.send('Welcome to my Express application!');
});

// Handle 404 errors
app.use((req, res, next) => {
  const error = new Error('Page not found');
  error.status = 404;
  next(error);
});

// Handle application errors
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port ${port}...`));
