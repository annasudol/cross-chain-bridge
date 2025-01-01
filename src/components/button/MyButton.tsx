import type { ButtonProps } from '@nextui-org/button';
import { Button } from '@nextui-org/button';
import { cn } from '@nextui-org/react';
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardBackspace,
} from 'react-icons/md';

export enum ButtonRightIcon {
  ArrowRight = 'ArrowRight',
}

export enum ButtonLeftIcon {
  ArrowLeft = 'ArrowLeft',
}
const buttonRightIcons: Record<ButtonRightIcon, JSX.Element> = {
  [ButtonRightIcon.ArrowRight]: <MdOutlineKeyboardArrowRight />,
};

const buttonLeftIcons: Record<ButtonLeftIcon, JSX.Element> = {
  [ButtonLeftIcon.ArrowLeft]: <MdOutlineKeyboardBackspace />,
};

interface MyButtonProps extends ButtonProps {
  children: React.ReactNode;
  className?: string;
  iconRight?: ButtonRightIcon;
  iconLeft?: ButtonLeftIcon;
}

const MyButton = ({
  children,
  iconRight,
  iconLeft,
  className,
  variant,
  isLoading,
  ...props
}: MyButtonProps) => {
  const buttonIconLefi = iconLeft && !isLoading && buttonLeftIcons[iconLeft];
  const buttonIconRight =
    iconRight && !isLoading && buttonRightIcons[iconRight];

  return (
    <Button
      {...props}
      radius="full"
      variant="solid"
      className={cn(
        'rounded-full bg-gradient-to-r from-blue-500 to-purple-500 p-0.5 font-semibold text-white text-center',
        variant === 'solid' && 'px-4',
        className,
      )}
      isLoading={isLoading}
    >
      {variant === 'bordered' ? (
        <span className="flex size-full justify-center rounded-full bg-gray-900 px-3 py-2 text-center text-white">
          {buttonIconLefi} {children} {buttonIconRight}
        </span>
      ) : (
        <>
          {' '}
          {buttonIconLefi} {children} {buttonIconRight}
        </>
      )}
    </Button>
  );
};
export default MyButton;
