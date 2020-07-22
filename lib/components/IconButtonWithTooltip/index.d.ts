import React from 'react';
import { TooltipProps } from '@material-ui/core/Tooltip';
import { IconButtonProps } from '@material-ui/core/IconButton';
export interface IconButtonWithTooltipProps extends IconButtonProps {
    buttonIcon: React.ReactNode;
    tooltipTitle?: TooltipProps['title'];
    tooltipProps?: Partial<TooltipProps>;
    onClick?: (event: React.MouseEvent<HTMLButtonElement | HTMLLIElement, MouseEvent>) => void;
}
declare const IconButtonWithTooltip: (props: IconButtonWithTooltipProps) => JSX.Element;
export default IconButtonWithTooltip;
