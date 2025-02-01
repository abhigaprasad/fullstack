import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';

function App() {
  const [userId, setUserId] = useState(null);
  const [userRole, setUserRole] = useState(null);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login setUserId={setUserId} setUserRole={setUserRole} />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/dashboard">
            {userId ? <Dashboard userId={userId} userRole={userRole} /> : <Redirect to="/login" />}
          </Route>
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
