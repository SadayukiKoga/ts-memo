import type { ComponentProps } from 'react';

import { Slot } from '@radix-ui/react-slot';
import clsx from 'clsx';

import styles from './styles.module.css';

type ColorOption = 'primary' | 'secondary';
type SizeOption = 'small' | 'large';

type CommonProps = {
  color?: ColorOption;
  size?: SizeOption;
  children: React.ReactNode;
};

type ButtonProps = CommonProps &
  Pick<ComponentProps<'button'>, 'type' | 'onClick' | 'name' | 'value' | 'disabled'> & {
    asChild?: false;
  };
type AsChildProps = CommonProps & {
  asChild: true;
};

type Props = ButtonProps | AsChildProps;

export const MyButton = ({ color, size, children, asChild, ...rest }: Props) => {
  const RootComponent = asChild ? Slot : 'button';

  return (
    <RootComponent className={clsx([styles.root, color && styles[color]], size && styles[size])} {...rest}>
      {children}
    </RootComponent>
  );
};
