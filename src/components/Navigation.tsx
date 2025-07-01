import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import { useVibration } from '../hooks/useVibration';

const Navigation: React.FC = () => {
  const location = useLocation();
  const vibrate = useVibration();

  const handleNavClick = () => {
    vibrate();
  };

  const navItems = [
    { path: '/dashboard', icon: 'lucide:home' },
    { path: '/payments', icon: 'lucide:credit-card' },
    { path: '/transfer', icon: 'lucide:send' },
    { path: '/chat', icon: 'lucide:message-circle' },
    { path: '/more', icon: 'lucide:more-horizontal' },
  ];

  return (
    <motion.nav
      className="fixed bottom-0 left-0 right-0 bg-background border-t border-divider"
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex justify-around items-center h-16">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center justify-center w-12 h-12 ${
              location.pathname === item.path ? 'text-primary' : 'text-foreground-500'
            }`}
            onClick={handleNavClick}
          >
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Icon icon={item.icon} className="text-2xl" />
            </motion.div>
          </Link>
        ))}
      </div>
    </motion.nav>
  );
};

export default Navigation;