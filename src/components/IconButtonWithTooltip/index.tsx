import React from 'react';
import Tooltip, { TooltipProps } from '@material-ui/core/Tooltip';
import IconButton, { IconButtonProps } from '@material-ui/core/IconButton';


export interface IconButtonWithTooltipProps extends IconButtonProps {
  /** Иконка кнопки см. [`IconButton`](https://material-ui.com/components/buttons/#icon-buttons) */
  buttonIcon: React.ReactNode

  /** Текст всплывающей подсказки */
  tooltipTitle?: TooltipProps['title']

  /** См. [`TooltipProps`](https://material-ui.com/api/tooltip/) */
  tooltipProps?: Partial<TooltipProps>

  /** Срабатывает при нажатии на кнопку */
  onClick?: (event: React.MouseEvent<HTMLButtonElement | HTMLLIElement, MouseEvent>) => void
}

/**
 * Компонент на основе [`IconButton`](https://material-ui.com/components/buttons/#icon-buttons) и [`Tooltip`](https://material-ui.com/components/tooltips/)
 * Позволяет отопразить произвольный текст подсказки когда пользователь наводит
 * курсор мыши на элемент, фокусируется на нем или нажимает на него.
 */
const IconButtonWithTooltip = (props: IconButtonWithTooltipProps) => {
  const {
    tooltipTitle, buttonIcon, tooltipProps, ...buttonProps
  } = props;

  return (
    tooltipTitle ? (
      <Tooltip
        title={tooltipTitle}
        {...tooltipProps}
      >
        <span>
          <IconButton {...buttonProps}>
            {buttonIcon}
          </IconButton>
        </span>
      </Tooltip>
    ) : (
      <IconButton {...buttonProps}>
        {buttonIcon}
      </IconButton>
    )
  );
};

export default IconButtonWithTooltip;
