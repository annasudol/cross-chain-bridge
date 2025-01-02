import {
  Badge,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  useDisclosure,
} from '@nextui-org/react';
import { FaBell } from 'react-icons/fa';

import { MyAlert } from '@/components/MyAlert';
import { useMyNotifications } from '@/providers/Notifications';

import MyButton, { ButtonLeftIcon, ButtonRightIcon } from './button/MyButton';

export function MyNotificationsDrawer() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { notifications, Clear } = useMyNotifications();
  return (
    <>
      <Button onPress={onOpen} variant="light">
        <Badge color="primary" content={notifications.length}>
          <FaBell size={20} />
        </Badge>
      </Button>
      <Drawer isOpen={isOpen} onOpenChange={onOpenChange}>
        <DrawerContent>
          {(onClose) => (
            <>
              <DrawerHeader className="flex flex-col gap-1">
                {notifications.length === 0 && (
                  <h3 className="text-md mb-4">No MyNotifications</h3>
                )}
                {notifications.length > 0 && (
                  <h3 className="text-md mb-4">
                    {notifications.length} MyNotification(s)
                  </h3>
                )}
              </DrawerHeader>
              <DrawerBody>
                <>
                  {notifications.length > 0 && (
                    <div className="flex flex-col">
                      {notifications.map((n, index: number) => (
                        <MyAlert
                          key={`MyNotification_${index}_${n.id}`}
                          {...n}
                        />
                      ))}
                    </div>
                  )}
                </>
              </DrawerBody>
              <DrawerFooter className="flex w-full justify-stretch">
                <MyButton
                  color="primary"
                  onPress={onClose}
                  className="w-1/2"
                  iconLeft={ButtonLeftIcon.Cancel}
                >
                  Close
                </MyButton>
                <MyButton
                  color="danger"
                  onPress={Clear}
                  className="w-1/2"
                  variant="bordered"
                  iconRight={ButtonRightIcon.Trash}
                >
                  Clear All Notifications
                </MyButton>
              </DrawerFooter>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </>
  );
}
