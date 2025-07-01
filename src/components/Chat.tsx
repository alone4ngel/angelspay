import React, { useState } from 'react';
import { Card, CardBody, Input, Button } from '@heroui/react';
import { Icon } from '@iconify/react';
import AnimatedPage from './AnimatedPage';
import { useVibration } from '../hooks/useVibration';

const Chat: React.FC = () => {
  const [message, setMessage] = useState('');
  const vibrate = useVibration();

  const handleSendMessage = () => {
    vibrate();
    // Implement send message logic here
    console.log('Sending message:', message);
    setMessage('');
  };

  return (
    <AnimatedPage>
      <div className="p-4 max-w-md mx-auto pb-20">
        <h1 className="text-2xl font-bold mb-4">Чат поддержки</h1>

        <Card className="mb-4 h-[calc(100vh-200px)]">
          <CardBody className="flex flex-col">
            <div className="flex-grow overflow-y-auto mb-4">
              {/* Chat messages would go here */}
              <p className="text-gray-400 text-center">Начните чат с поддержкой</p>
            </div>
            <div className="flex">
              <Input
                placeholder="Введите сообщение"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="flex-grow mr-2"
              />
              <Button color="primary" onPress={handleSendMessage}>
                <Icon icon="lucide:send" />
              </Button>
            </div>
          </CardBody>
        </Card>
      </div>
    </AnimatedPage>
  );
};

export default Chat;