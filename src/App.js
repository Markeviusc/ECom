import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import ProductList from './ProductList';
import Cart from './Cart';
import Login from './Login'; // Your login component
import ProtectedRoute from './ProtectedRoute'; // A custom protected route component
import { auth } from './firebase'; // Use your chosen authentication solution

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Listen for authentication changes
    const unsubscribe = auth.onAuthStateChanged(currentUser => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  return (
    <Router>
      <div className="App">
        <header>
          <h1>E-Commerce Platform</h1>
        </header>
        <main>
          <Switch>
            <Route path="/login" component={Login} />
            <ProtectedRoute path="/products" component={ProductList} />
            <ProtectedRoute path="/cart" component={Cart} />
            <ProtectedRoute path="/product/:id" component={ProductDetails} />
            <Redirect exact from="/" to="/products" />
          </Switch>
        </main>
        <footer>
          <p>&copy; 2023 E-Commerce Platform</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;