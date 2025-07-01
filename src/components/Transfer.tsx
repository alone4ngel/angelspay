import React, { useState } from 'react';
import { Input, Button, Card, CardBody, Avatar, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from '@heroui/react';
import { Icon } from '@iconify/react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedPage from './AnimatedPage';
import { useBalance } from '../hooks/useBalance';
import { useVibration } from '../hooks/useVibration';

const Transfer: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [amount, setAmount] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { balance, updateBalance } = useBalance();
  const vibrate = useVibration();

  const handleTransfer = () => {
    vibrate();
    if (Number(amount) > balance) {
      alert('Недостаточно средств');
      return;
    }
    setIsModalOpen(true);
    updateBalance(balance - Number(amount));
  };

  return (
    <AnimatedPage>
      <div className="p-4 max-w-md mx-auto pb-20">
        <h1 className="text-2xl font-bold mb-4">Перевод</h1>

        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <Card className="mb-6">
            <CardBody>
              <Input
                label="Имя или номер телефона"
                placeholder="+7 (___) ___-__-__"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                startContent={<Icon icon="lucide:search" />}
              />
            </CardBody>
          </Card>
        </motion.div>

        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <Card className="mb-6">
            <CardBody>
              <Input
                label="Сумма перевода"
                placeholder="0 ₽"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                startContent={<Icon icon="lucide:currency-rub" />}
              />
            </CardBody>
          </Card>
        </motion.div>

        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button color="primary" className="w-full" onPress={handleTransfer}>
            Перевести
          </Button>
        </motion.div>

        <h2 className="text-lg font-semibold mt-6 mb-2">Последние переводы</h2>
        <div className="space-y-4 mb-6">
          {[
            { name: 'Виктор А.', phone: '+7 920 444-99-45', icon: 'logos:russian-post' },
            { name: 'Анжелика Д.', phone: '+7 983 325-77-15', icon: 'logos:mts' },
          ].map((contact, index) => (
            <motion.div key={index} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Card isPressable>
                <CardBody className="flex items-center">
                  <Avatar
                    icon={<Icon icon={contact.icon} />}
                    className="mr-4"
                  />
                  <div>
                    <p className="font-medium">{contact.name}</p>
                    <p className="text-sm text-gray-400">{contact.phone}</p>
                  </div>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {isModalOpen && (
            <Modal 
              isOpen={isModalOpen} 
              onClose={() => setIsModalOpen(false)}
              size="full"
              motionProps={{
                variants: {
                  enter: { opacity: 1, scale: 1 },
                  exit: { opacity: 0, scale: 0.95 }
                },
                transition: { duration: 0.3 }
              }}
            >
              <ModalContent>
                <ModalBody className="flex flex-col items-center justify-center h-screen">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                  >
                    <Icon icon="lucide:check-circle" className="text-success text-6xl mb-4" />
                  </motion.div>
                  <h2 className="text-2xl font-bold mb-4">Перевод выполнен</h2>
                  <p className="text-lg mb-2">Сумма: {amount} ₽</p>
                  <p className="text-lg mb-4">Получатель: {phoneNumber}</p>
                  <Button color="primary" onPress={() => setIsModalOpen(false)}>
                    Закрыть
                  </Button>
                </ModalBody>
              </ModalContent>
            </Modal>
          )}
        </AnimatePresence>
      </div>
    </AnimatedPage>
  );
};

export default Transfer;