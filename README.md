# BookWave: A Library Management System

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

## Authentication:

For authentication we have used developer 
Third party authentication provider:   

### Okta           

- Adding users & defining their user roles is done by Okta
- Used OIDC of Okta: Token based OAuth for Single Sign-On(SSO) through API endpoints


## Pagination
 
 - Pagination is useful for handling large amount of data
 - Way for users to navigate over large amount of data
 - It is implemented on Search books page and on admin section on Change Quantity page
 - Pagination is implemented on both frontend and backend
 - For example,
    (By default springboot gets default of 20 data objects)

    Get first page, with page size of 10
    call API like: http://localhost:8080/api/books?page=0&size=10
    
    Get second page, with page size of 10
    call API like: http://localhost:8080/api/books?page=1&size=10
- Spring Response gives us metadata :
    <<array of books>>
    "page":
    {
        "size": 10,
        "totalElements": 200,
        "totolPages": 20,
        "number": 0
    }