import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { motion } from 'framer-motion';
import { InputOtp, Card, CardBody, CardHeader, Button } from '@heroui/react';
import { Icon } from '@iconify/react';
import AnimatedPage from './AnimatedPage';

const Login: React.FC = () => {
  const [pin, setPin] = useState('');
  const history = useHistory();

  useEffect(() => {
    if (pin.length === 4) {
      handleLogin();
    }
  }, [pin]);

  const handleLogin = () => {
    if (pin === '4444') {
      history.push('/dashboard');
    } else {
      alert('Неверный PIN-код');
      setPin('');
    }
  };

  const handleKeyPress = (value: string) => {
    if (pin.length < 4) {
      setPin(prev => prev + value);
    }
  };

  const handleDelete = () => {
    setPin(prev => prev.slice(0, -1));
  };

  return (
    <AnimatedPage>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="flex flex-col items-center justify-center min-h-screen p-4"
      >
        <Card className="w-full max-w-md">
          <CardHeader className="flex flex-col items-center gap-2">
            <Icon icon="lucide:shield" className="text-primary text-4xl" />
            <h1 className="text-2xl font-bold">Angels Pay</h1>
            <h2 className="text-xl">Введите код доступа</h2>
          </CardHeader>
          <CardBody className="flex flex-col items-center gap-4">
            <InputOtp
              length={4}
              value={pin}
              onValueChange={setPin}
              classNames={{
                input: "text-2xl",
                inputWrapper: "gap-2",
              }}
            />
            <div className="grid grid-cols-3 gap-2 w-full max-w-xs">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, '', 0, 'del'].map((key, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    color={key === 'del' ? 'danger' : 'default'}
                    onPress={() => key === 'del' ? handleDelete() : handleKeyPress(key.toString())}
                    className="w-full h-12 text-xl"
                  >
                    {key === 'del' ? <Icon icon="lucide:delete" /> : key}
                  </Button>
                </motion.div>
              ))}
            </div>
          </CardBody>
        </Card>
      </motion.div>
    </AnimatedPage>
  );
};

export default Login;