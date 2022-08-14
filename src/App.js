import React from 'react';
import {Nav,Container,Button} from 'react-bootstrap';

import {

BrowserRouter,

Routes,

Route,

Link

} from "react-router-dom";











export const Home =() => {

return(

<div>

<h3>This is My home page. My home is in brampton,ontario</h3>

</div>

)

}

export const Contact =() => {

return(

<div>

<h3>This is my Contact page,You can contact me on my email nishantbhandari8123@gmail.com</h3>

</div>

)

}

export const About =() => {

return(

<div>

<h3>This is About me,My name is nishant and i am 24 years old.!</h3>

</div>

)

}



function App() {

return (

<BrowserRouter>

<div className="App">

<Button color="warning" active={true}>button1</Button>{''}







<Container>





<Nav.Link as={Link} to="/Home">Home</Nav.Link>

<Nav.Link as={Link} to="/About">About</Nav.Link>

<Nav.Link as={Link} to="/Contact">Contact</Nav.Link>



</Container>

<Button color="red" active={true}>button2</Button>{''}



<div>

<Routes>

<Route path="/About" element={<About/>}/>

<Route path="/Contact" element={<Contact/>}/>

<Route path="/Home" element={<Home/>}/>

</Routes>

</div>



</div>

</BrowserRouter>



);

}





export default App;