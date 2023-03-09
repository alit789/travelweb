import HomePage from "../Layout/HomePage";
import LoginPage from "../Layout/LoginPage";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
const Root = () => {
    return(

    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/login" element={<LoginPage/>}></Route>
      </Routes>
    </Router>

    )
}
export default Root;