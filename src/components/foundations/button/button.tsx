'use client';

import * as React from 'react';
import { Button as BaseButton } from '@base-ui/react/button';

export type ButtonProps = Omit<BaseButton.Props, 'className'> & {
  className?: string;
  variant?: 'primary' | 'secondary' | 'quiet';
};

const Button = React.forwardRef<HTMLElement, ButtonProps>(
  ({ className = '', variant = 'primary', ...props }, ref) => {
    return (
      <BaseButton
        ref={ref}
        className={`button button-${variant} ${className}`.trim()}
        {...props}
      />
    );
  },
);

Button.displayName = 'Button';

export default Button;
