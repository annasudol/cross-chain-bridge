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

import { Alert } from '@/components/Alert';
import { useNotifications } from '@/providers/Notifications';

import MyButton, { ButtonLeftIcon, ButtonRightIcon } from './button/MyButton';

export function NotificationsDrawer() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { notifications, Clear } = useNotifications();
  return (
    <>
      <Button onPress={onOpen} variant="light">
        <Badge color="primary" content={notifications.length}>
          <svg
            fill="none"
            height={24}
            viewBox="0 0 24 24"
            width={24}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              d="M18.707 8.796c0 1.256.332 1.997 1.063 2.85.553.628.73 1.435.73 2.31 0 .874-.287 1.704-.863 2.378a4.537 4.537 0 01-2.9 1.413c-1.571.134-3.143.247-4.736.247-1.595 0-3.166-.068-4.737-.247a4.532 4.532 0 01-2.9-1.413 3.616 3.616 0 01-.864-2.378c0-.875.178-1.682.73-2.31.754-.854 1.064-1.594 1.064-2.85V8.37c0-1.682.42-2.781 1.283-3.858C7.861 2.942 9.919 2 11.956 2h.09c2.08 0 4.204.987 5.466 2.625.82 1.054 1.195 2.108 1.195 3.745v.426zM9.074 20.061c0-.504.462-.734.89-.833.5-.106 3.545-.106 4.045 0 .428.099.89.33.89.833-.025.48-.306.904-.695 1.174a3.635 3.635 0 01-1.713.731 3.795 3.795 0 01-1.008 0 3.618 3.618 0 01-1.714-.732c-.39-.269-.67-.694-.695-1.173z"
              fill="currentColor"
              fillRule="evenodd"
            />
          </svg>
        </Badge>
      </Button>
      <Drawer isOpen={isOpen} onOpenChange={onOpenChange}>
        <DrawerContent>
          {(onClose) => (
            <>
              <DrawerHeader className="flex flex-col gap-1">
                {notifications.length === 0 && (
                  <h3 className="text-md mb-4">No notifications</h3>
                )}
                {notifications.length > 0 && (
                  <h3 className="text-md mb-4">
                    {notifications.length} Notification(s)
                  </h3>
                )}
              </DrawerHeader>
              <DrawerBody>
                <>
                  <div className="drawer-side z-[1]">
                    <div className="min-h-full w-full p-4 md:w-1/2">
                      {notifications.length > 0 && (
                        <div className="flex flex-col gap-2">
                          {notifications.map((notification, index) => (
                            <Alert
                              key={`notification_${index}_${notification.timestamp}`}
                              type={notification.type || 'info'}
                              message={notification.message}
                              href={notification.href}
                              timestamp={notification.timestamp}
                              from={notification.from}
                            />
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
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
