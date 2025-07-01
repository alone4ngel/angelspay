import React from 'react';
import { Card, CardBody, Input, Button } from '@heroui/react';
import { Icon } from '@iconify/react';
import AnimatedPage from './AnimatedPage';
import { useVibration } from '../hooks/useVibration';

const Payments: React.FC = () => {
  const vibrate = useVibration();

  const handlePaymentClick = () => {
    vibrate();
    // Implement payment logic here
  };

  return (
    <AnimatedPage>
      <div className="p-4 max-w-md mx-auto pb-20">
        <h1 className="text-2xl font-bold mb-4">Платежи</h1>

        <Card className="mb-4">
          <CardBody>
            <Input
              placeholder="Поиск платежей"
              startContent={<Icon icon="lucide:search" />}
            />
          </CardBody>
        </Card>

        <h2 className="text-lg font-semibold mb-2">Популярные платежи</h2>
        <div className="grid grid-cols-3 gap-4 mb-6">
          {['Мобильная связь', 'Интернет', 'ЖКХ', 'Штрафы', 'Налоги', 'Образование'].map((item, index) => (
            <Button
              key={index}
              variant="flat"
              className="flex flex-col items-center justify-center h-24"
              onPress={handlePaymentClick}
            >
              <Icon icon={`lucide:${item.toLowerCase()}`} className="text-2xl mb-2" />
              <span className="text-xs text-center">{item}</span>
            </Button>
          ))}
        </div>

        <h2 className="text-lg font-semibold mb-2">Недавние платежи</h2>
        <Card>
          <CardBody>
            {/* Add recent payments list here */}
            <p className="text-gray-400">Нет недавних платежей</p>
          </CardBody>
        </Card>
      </div>
    </AnimatedPage>
  );
};

export default Payments;