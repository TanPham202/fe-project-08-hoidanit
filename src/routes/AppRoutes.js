import { Switch, Route } from 'react-router-dom';
import Login from '../components/Login/Login';
import Register from '../components/Register/Register';
import Users from '../components/ManageUsers/Users';
import PrivateRoutes from './PrivateRoutes';

const AppRoutes = (props) => {
    const Project = () => {
        return(
            <span> projects </span>
        )
    }

    return (
        <>
            <Switch>
                <PrivateRoutes path="/users" component={Users} />
                <PrivateRoutes path="/projects" component={Project} />
                <Route path="/login"> <Login /> </Route>
                <Route path="/register"> <Register /> </Route>
                <Route path="/users"> <Users /> </Route>
                <Route path="/" exact> Home </Route>
                <Route path="*"> 404 Not Found </Route>
            </Switch>
        </>
    )
}

export default AppRoutes
