import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent, screen } from '@testing-library/react';
import SearchInputBase from '..';

const messages = {
  searchPlaceholder: 'Начните печатать...',
  clearCommand: 'Очистить',
};

test('<SearchInputBase />', () => {
  let value = '';
  const onChange = jest.fn((e) => {
    value = e.target.value;
  });
  const onClear = jest.fn();

  const { rerender } = render(
    <SearchInputBase
      value={value}
      onClear={onClear}
      onChange={onChange}
      messages={messages}
    />,
  );
  // screen.debug();

  expect(screen.queryByPlaceholderText(messages.searchPlaceholder)).toBeInTheDocument();
  expect(screen.queryByTitle(messages.clearCommand)).not.toBeInTheDocument();

  const input = screen.getByRole('textbox') as HTMLInputElement;
  expect(input.value).toBe('');

  fireEvent.change(input, { target: { value: 'Hello!' } });

  rerender(
    <SearchInputBase
      value={value}
      onClear={onClear}
      onChange={onChange}
      messages={messages}
    />,
  );
  // screen.debug();

  expect(screen.queryByTitle(messages.clearCommand)).toBeInTheDocument();
  expect(onChange).toHaveBeenCalledTimes(1);
  expect(input.value).toBe('Hello!');

  const button = screen.getByRole('button');
  fireEvent.click(button);

  rerender(
    <SearchInputBase
      value={value}
      onClear={onClear}
      onChange={onChange}
      messages={messages}
    />,
  );
  // screen.debug();

  expect(screen.queryByTitle(messages.clearCommand)).not.toBeInTheDocument();
  expect(onClear).toHaveBeenCalledTimes(1);
  expect(input.value).toBe('');
});
