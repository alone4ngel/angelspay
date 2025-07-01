import React from 'react';
import { Card, CardBody, Button } from '@heroui/react';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AnimatedPage from './AnimatedPage';
import { useBalance } from '../hooks/useBalance';

const Dashboard: React.FC = () => {
  const { balance } = useBalance();

  return (
    <AnimatedPage>
      <div className="p-4 max-w-md mx-auto pb-20">
        <h1 className="text-2xl font-bold mb-4">Angels Pay</h1>
        
        <div className="grid grid-cols-3 gap-4 mb-6">
          <Card>
            <CardBody className="p-4 text-center">
              <p className="text-sm text-gray-400">Всего средств</p>
              <p className="text-xl font-bold">{balance.toLocaleString()} ₽</p>
            </CardBody>
          </Card>
          <Card>
            <CardBody className="p-4 text-center">
              <p className="text-sm text-gray-400">Мне одобрено</p>
              <p className="text-xl font-bold">50 000 ₽</p>
            </CardBody>
          </Card>
          <Card>
            <CardBody className="p-4 text-center">
              <p className="text-sm text-gray-400">Расходы за месяц</p>
              <p className="text-xl font-bold">34 556 ₽</p>
            </CardBody>
          </Card>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-6">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              as={Link}
              to="/qr-payment"
              variant="flat"
              className="flex flex-col items-center justify-center h-24 w-full"
            >
              <Icon icon="lucide:qr-code" className="text-2xl mb-2" />
              <span className="text-xs text-center">Оплата по QR</span>
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              as={Link}
              to="/transfer"
              variant="flat"
              className="flex flex-col items-center justify-center h-24 w-full"
            >
              <Icon icon="lucide:send" className="text-2xl mb-2" />
              <span className="text-xs text-center">Перевод</span>
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              as={Link}
              to="/payments"
              variant="flat"
              className="flex flex-col items-center justify-center h-24 w-full"
            >
              <Icon icon="lucide:credit-card" className="text-2xl mb-2" />
              <span className="text-xs text-center">Платежи</span>
            </Button>
          </motion.div>
        </div>

        <Card className="mb-6">
          <CardBody className="p-4">
            <h2 className="text-lg font-semibold mb-2">Кешбэк</h2>
            <p className="text-sm text-gray-400 mb-2">Совершайте покупки</p>
            <Button color="primary" variant="flat" className="w-full">
              1% за всё
            </Button>
          </CardBody>
        </Card>

        <Card>
          <CardBody className="p-4">
            <h2 className="text-lg font-semibold mb-4">Карты</h2>
            <div className="flex justify-between items-center mb-2">
              <div>
                <p className="font-medium">Карта CASHBACK Lite</p>
                <p className="text-sm text-gray-400">••2362</p>
              </div>
              <p className="font-bold">{balance.toLocaleString()} ₽</p>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <p className="font-medium">MIR•8206</p>
                <p className="text-sm text-gray-400">••••••••8206</p>
              </div>
              <Icon icon="logos:mir" className="text-3xl" />
            </div>
          </CardBody>
        </Card>
      </div>
    </AnimatedPage>
  );
};

export default Dashboard;