import { Route, Routes as ReactRoutes } from "react-router"
import ToDo from "../pages/ToDo"
import Home from "../pages/Home"
import Voting from "../pages/Voting"

const Routes = () => {
    return (
        <ReactRoutes>
            <Route path="/" element={<Home />} />
            <Route path="/to-do" element={<ToDo />} />
            <Route path="/voting" element={<Voting />} />
        </ReactRoutes>
    )
}

export default Routes