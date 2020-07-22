import React from 'react';
import '@testing-library/jest-dom';
// eslint-disable-next-line object-curly-newline
import { render, fireEvent, screen, act } from '@testing-library/react';
import CheckIcon from '@material-ui/icons/Check';
import IconButtonWithTooltip from '..';

jest.useFakeTimers();

describe('<IconButtonWithTooltip />', () => {
  test('should be shown', () => {
    const title = 'Confirm';

    render(
      <IconButtonWithTooltip
        buttonIcon={<CheckIcon />}
        tooltipTitle={title}
      />,
    );
    // screen.debug();

    expect(screen.queryByTitle(title)).toBeInTheDocument();
    expect(screen.queryByText(title)).not.toBeInTheDocument();
    expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();

    const btnWrapper = screen.getByTitle(title);

    act(() => {
      fireEvent.mouseEnter(btnWrapper);
      jest.runAllTimers();
    });
    // screen.debug();

    expect(screen.queryByRole('tooltip')).toBeInTheDocument();
    expect(screen.queryByText(title)).toBeInTheDocument();
  });
});
