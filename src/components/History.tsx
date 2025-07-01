import React from 'react';
import { Card, CardBody, Button } from '@heroui/react';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import AnimatedPage from './AnimatedPage';

const History: React.FC = () => {
  const transactions = [
    { name: 'Матвей Даниилович Т.', amount: -500, type: 'Перевод СБП', date: '29 ИЮНЯ' },
    { name: 'Матвей Даниилович Т', amount: 23, type: 'Перевод СБП', date: '29 ИЮНЯ' },
    { name: 'Матвей Даниилович Т', amount: 4.44, type: 'Перевод СБП', date: '29 ИЮНЯ' },
    { name: 'Перевод на карту', amount: 511, type: 'Переводы', date: '29 ИЮНЯ' },
  ];

  return (
    <AnimatedPage>
      <div className="p-4 max-w-md mx-auto">
        <h1 className="text-2xl font-bold mb-4">История</h1>

        <div className="flex space-x-2 mb-4">
          <Button variant="flat" size="sm">
            Период <Icon icon="lucide:chevron-down" className="ml-1" />
          </Button>
          <Button variant="flat" size="sm">
            Движение средств <Icon icon="lucide:chevron-down" className="ml-1" />
          </Button>
          <Button variant="flat" size="sm">
            Карты <Icon icon="lucide:chevron-down" className="ml-1" />
          </Button>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="mb-4">
            <CardBody className="flex items-center p-3">
              <Icon icon="lucide:heart" className="text-red-500 mr-3" />
              <div>
                <p className="font-medium">Округляйте стоимость покупок</p>
                <p className="text-sm text-gray-400">И помогайте детям – сиротам</p>
              </div>
            </CardBody>
          </Card>
        </motion.div>

        {transactions.map((transaction, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="mb-2">
              <CardBody className="flex justify-between items-center p-3">
                <div>
                  <p className="font-medium">{transaction.name}</p>
                  <p className="text-sm text-gray-400">{transaction.type}</p>
                </div>
                <p className={`font-bold ${transaction.amount > 0 ? 'text-green-500' : 'text-red-500'}`}>
                  {transaction.amount > 0 ? '+' : ''}{transaction.amount} ₽
                </p>
              </CardBody>
            </Card>
          </motion.div>
        ))}
      </div>
    </AnimatedPage>
  );
};

export default History;