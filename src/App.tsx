import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Transfer from './components/Transfer';
import History from './components/History';
import Navigation from './components/Navigation';
import Payments from './components/Payments';
import Chat from './components/Chat';
import More from './components/More';

const App: React.FC = () => {
  const location = useLocation();

  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <AnimatePresence mode="wait">
        <Switch location={location} key={location.pathname}>
          <Route exact path="/" component={Login} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/transfer" component={Transfer} />
          <Route path="/history" component={History} />
          <Route path="/payments" component={Payments} />
          <Route path="/chat" component={Chat} />
          <Route path="/more" component={More} />
        </Switch>
      </AnimatePresence>
      {location.pathname !== '/' && <Navigation />}
    </div>
  );
};

export default App;