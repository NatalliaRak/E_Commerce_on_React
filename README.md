# The React E-Commerce web app 
13 January 2023
The deployed web app is on [link](https://steady-ganache-1fe537.netlify.app)

## OBJECTIVE
The web-app is on React.js. It uses the [Fake API](https://fakestoreapi.com/docs) to fill in content with the real-like E-commerce content. The app uses Bootstrap for styling and creating **Layouts** **Popovers** and Axios as the HTTP-client.

## BACKGROUND
The E-Coomerce on React web-app creates the Template for the commercial web-app. The Fake API helps to create the inner logic of the commercial web-app: categories of goods, all goods on the first page. Also there is the possibilty to move the goods to the **Cart**.


## TECHNICAL DESIGN
The app uses:

- React;
- React Router;
- Bootstrap;
- Fake API;
- Axios;


The app uses **{useContext}** and **{useReducer}** - the React Hooks for creating globalContext and keeping and using the state of the **ADD** and **REMOVE** in the **Cart**.
Axios is used as the HTTP-client.

## CAVEATS
The web-app uses the FakeAPI for the content but in the real-world app its better to use the content in JSON file to escape the **key prop** problem.
