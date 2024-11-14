import React from 'react';
import { Button, Icon, Tooltip, TooltipProps } from '@patternfly/react-core';

export interface ResponseActionButtonProps {
  /** Aria-label for the button. Defaults to the value of the tooltipContent if none provided */
  ariaLabel?: string;
  /** Icon for the button */
  icon: React.ReactNode;
  /** On-click handler for the button */
  onClick?: ((event: MouseEvent | React.MouseEvent<Element, MouseEvent> | KeyboardEvent) => void) | undefined;
  /** Class name for the button */
  className?: string;
  /** Props to control if the attach button should be disabled */
  isDisabled?: boolean;
  /** Content shown in the tooltip */
  tooltipContent?: string;
  /** Props to control the PF Tooltip component */
  tooltipProps?: TooltipProps;
  /** Text to be displayed */
  text?: string;
  /** Button variant */
  variant?: 'primary' | 'secondary' | 'tertiary' | 'danger' | 'warning' | 'link' | 'plain' | 'control' | 'stateful';
}

export const ResponseActionButton: React.FunctionComponent<ResponseActionButtonProps> = ({
  ariaLabel,
  className,
  icon,
  isDisabled,
  onClick,
  tooltipContent,
  tooltipProps,
  text='',
  variant='plain'
}) => (
  <Tooltip
    id={`pf-chatbot__tooltip-response-action-${tooltipContent}`}
    content={tooltipContent}
    position="bottom"
    entryDelay={tooltipProps?.entryDelay || 0}
    exitDelay={tooltipProps?.exitDelay || 0}
    distance={tooltipProps?.distance || 8}
    animationDuration={tooltipProps?.animationDuration || 0}
    {...tooltipProps}
  >
    <Button
      variant={variant}
      className={`pf-chatbot__button--response-action ${className ?? ''}`}
      aria-label={ariaLabel ?? tooltipContent}
      icon={
        icon && <Icon isInline size="lg">
          {icon}
        </Icon> 
      }
      isDisabled={isDisabled}
      onClick={onClick}
      size="sm"
    >{text}</Button>
  </Tooltip>
);

export default ResponseActionButton;
