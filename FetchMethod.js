// Example using async/await and fetch to make HTTP requests with different methods

// URL endpoint for the API
const apiUrl = 'https://example.com/api/';

// Example POST request
async function createUser() {
  try {
    const response = await fetch(apiUrl + 'users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: 'John Doe',
        email: 'johndoe@example.com'
      })
    });
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

// Example PUT request
async function updateUser() {
  try {
    const response = await fetch(apiUrl + 'users/123', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: 'Jane Smith',
        email: 'janesmith@example.com'
      })
    });
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

// Example PATCH request
async function updateUserName() {
  try {
    const response = await fetch(apiUrl + 'users/123', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: 'Jane Doe'
      })
    });
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

// Example GET request
async function getUsers() {
  try {
    const response = await fetch(apiUrl + 'users');
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

// Example FIND request
async function findUsers() {
  try {
    const response = await fetch(apiUrl + 'users?name=John');
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

// Call the functions to make the requests
createUser();
updateUser();
updateUserName();
getUsers();
findUsers();



// Example using the fetch method to make HTTP requests with different methods



// Example POST request
fetch(apiUrl + 'users', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: 'John Doe',
    email: 'johndoe@example.com'
  })
})
.then(response => {
  // Handle the response from the server
  console.log(response);
})
.catch(error => {
  // Handle any errors that occur
  console.error(error);
});

// Example PUT request
fetch(apiUrl + 'users/123', {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: 'Jane Smith',
    email: 'janesmith@example.com'
  })
})
.then(response => {
  // Handle the response from the server
  console.log(response);
})
.catch(error => {
  // Handle any errors that occur
  console.error(error);
});

// Example PATCH request
fetch(apiUrl + 'users/123', {
  method: 'PATCH',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: 'Jane Doe'
  })
})
.then(response => {
  // Handle the response from the server
  console.log(response);
})
.catch(error => {
  // Handle any errors that occur
  console.error(error);
});

// Example GET request
fetch(apiUrl + 'users')
.then(response => {
  // Handle the response from the server
  console.log(response);
})
.catch(error => {
  // Handle any errors that occur
  console.error(error);
});

// Example FIND request
fetch(apiUrl + 'users?name=John')
.then(response => {
  // Handle the response from the server
  console.log(response);
})
.catch(error => {
  // Handle any errors that occur
  console.error(error);
});


// The fetch() method is a built-in function in modern web browsers that allows JavaScript to make HTTP requests to a server and handle the response. It returns a Promise object that resolves with the Response object representing the server's response.

// In the code above, we are using the fetch() method to make different types of HTTP requests to the server using different methods:

// POST: Used to create new resources on the server. In the example above, we are creating a new user with a name and email.
// PUT: Used to update existing resources on the server. In the example above, we are updating an existing user with a new name and email.
// PATCH: Used to update a portion of an existing resource on the server. In the example above, we are updating an existing user's name only.
// GET: Used to retrieve resources from the server. In the example above, we are retrieving a list of users.
// FIND: This is not a standard HTTP method, but it is commonly used to perform searches on a server. In the example above, we are searching for users with a name containing "John".