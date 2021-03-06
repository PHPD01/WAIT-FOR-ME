import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Page0 from "./Pages/Page0/Page0";
import Page1 from "./Pages/Page1/Page1";
import Page2 from "./Pages/Page2/Page2";
import Page3 from "./Pages/Page3/Page3";
import Navbar from "./syuan/components/Navbar";
import Navbar1 from "./syuan/components/Navbarr";
import Footer from "./syuan/components/Footer";

// <<<<<<< main
import FMemberPage from "./Chi/pages/MemberPage";
import FLoginPage from "./Chi/pages/Login";
import FRegisterpage from "./Chi/pages/Register";
import FRevisePage from "./Chi/pages/Revise";

import SData from "./SData"; //後台
// >>>>>>> main

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Navbar1 />
        <Switch>
          <Route exact path="/" component={Page0} />
          <Route exact path="/Page1" component={Page1} />
          <Route exact path="/Page2" component={Page2} />
          <Route path="/Page3/:id" component={Page3} />
          <Route path="/memberpage" component={FMemberPage} />
          <Route path="/revisepage" component={FRevisePage} />
          <Route exact path="/login" component={FLoginPage} />
          <Route exact path="/registerpage" component={FRegisterpage} />
          <Route exact path="/sdata" component={SData} />
        </Switch>
        <Footer></Footer>
      </Router>
    </>
  );
}

export default App;
