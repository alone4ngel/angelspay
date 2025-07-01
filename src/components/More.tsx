import React, { useState } from 'react';
import { Card, CardBody, Input, Button, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from '@heroui/react';
import { Icon } from '@iconify/react';
import AnimatedPage from './AnimatedPage';
import { useVibration } from '../hooks/useVibration';

const More: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);
  const [embeddedUrl, setEmbeddedUrl] = useState('https://sex-studentki.love/');
  const vibrate = useVibration();

  const handleEmbedWebsite = () => {
    vibrate();
    setIsModalOpen(true);
  };

  const handleSettings = () => {
    vibrate();
    setIsSettingsModalOpen(true);
  };

  return (
    <AnimatedPage>
      <div className="p-4 max-w-md mx-auto pb-20">
        <h1 className="text-2xl font-bold mb-4">Ещё</h1>

        <Card className="mb-4">
          <CardBody>
            <Button
              variant="flat"
              className="w-full justify-start"
              onPress={handleEmbedWebsite}
            >
              <Icon icon="lucide:globe" className="mr-2" />
              Госуслуги
            </Button>
          </CardBody>
        </Card>

        <Card className="mb-4">
          <CardBody>
            <Button
              variant="flat"
              className="w-full justify-start"
              onPress={handleSettings}
            >
              <Icon icon="lucide:settings" className="mr-2" />
              Настройки
            </Button>
          </CardBody>
        </Card>

        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <ModalContent>
            <ModalHeader>Добавлю чуть позже ща впадлу. тут короче будет открываться тип окошко госуслуг, там как по кайфу можно будет настроить возраст тд тп вся хуйня</ModalHeader>
            <ModalBody>
              <iframe
                src={embeddedUrl}
                title="Embedded Website"
                width="100%"
                height="400px"
                style={{ border: 'none' }}
              />
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={() => setIsModalOpen(false)}>
                Закрыть
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>

        <Modal isOpen={isSettingsModalOpen} onClose={() => setIsSettingsModalOpen(false)}>
          <ModalContent>
            <ModalHeader>О разработчике</ModalHeader>
            <ModalBody>
              <p>Копирайтед бай 444 | 
                 тгк разраба - @angelspay</p>
              {/* Добавьте элементы управления настройками здесь */}
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={() => setIsSettingsModalOpen(false)}>
                Закрыть
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </div>
    </AnimatedPage>
  );
};

export default More;