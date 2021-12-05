import { Route } from "react-router-dom";

function PrivateRoute({ children, ...rest }) {
    return (
        <Route
        {...rest}
        render={
            children
        }
        />
    );
}

export default PrivateRoute