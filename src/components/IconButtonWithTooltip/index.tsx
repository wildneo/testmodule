import React from 'react';
import Tooltip, { TooltipProps } from '@material-ui/core/Tooltip';
import IconButton, { IconButtonProps } from '@material-ui/core/IconButton';


export interface IconButtonWithTooltipProps extends IconButtonProps {
  /** Description of prop 'buttonIcon'. */
  buttonIcon: React.ReactNode
  /** Description of prop 'tooltipTitle'. */
  tooltipTitle?: TooltipProps['title']
  /** Description of prop 'tooltipProps'. 
   * @default 1111
  */
  tooltipProps?: Partial<TooltipProps>
  /** Description of prop 'Description'. */
  onClick?: (event: React.MouseEvent<HTMLButtonElement | HTMLLIElement, MouseEvent>) => void
}

/**
 * General component description in JSDoc format. Markdown is *supported*.
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
