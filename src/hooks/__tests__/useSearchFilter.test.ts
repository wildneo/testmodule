import { renderHook, act } from '@testing-library/react-hooks';
import useSearchFilter from '../useSearchFilter';


const cities = [
  { id: '1', name: 'London', code: 4420 },
  { id: '2', name: 'Liverpool', code: 44151 },
  { id: '3', name: 'Manchester', code: 44161 },
];

test('should reset counter to updated initial value', () => {
  const { result } = renderHook(() => useSearchFilter(cities, ['name'], { minQueryLength: 3 }));

  act(() => {
    result.current.inputProps
      .onChange({ target: { value: 'lo' } } as React.ChangeEvent<HTMLInputElement>);
  });

  expect(result.current.inputProps.value).toBe('lo');
  expect(result.current.filteredCollection).toEqual(cities);

  act(() => {
    result.current.inputProps
      .onChange({ target: { value: 'lon' } } as React.ChangeEvent<HTMLInputElement>);
  });

  expect(result.current.inputProps.value).toBe('lon');
  expect(result.current.filteredCollection).toEqual([cities[0]]);
});
