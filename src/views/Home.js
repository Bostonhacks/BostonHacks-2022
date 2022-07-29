import * as React from "react";

// Home page
const Home = ({ user }) => {
  if (user == null) {
    return (
      <div>
         <h1>Home (Public)</h1>
      </div>
    )
  } else {
    return (
      <div>
        <h1>Hello, <span></span>{user.displayName}</h1>
      </div>
    )
  }
}
  
export default Home;