import Navbar from "./Navbar";
import Anasayfa from "./Home";  
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Create from "./Create";
import BlogDetails from "./BlogDetails";
import notFound from "./notFound";

function App() {

  // const baslik ="fatmanur"
  // let okunmaSayisi=300;
  // //const durum = true
  // const blog = {ad:"ilk",aciklama:"ilk açıklama"}
  // const link ="www.google.com"
  return (
    <Router>
        <div className="App">
        <Navbar/>
        <div className="content">
           <Switch>
            <Route exact path="/">
              <Anasayfa/>
            </Route>
            <Route path="/create">
              <Create/>
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails/>
            </Route>
            <Route path="*">
              <notFound/>
            </Route>
           </Switch>
        
        </div>
        </div>
    </Router>
  );
}

export default App;
