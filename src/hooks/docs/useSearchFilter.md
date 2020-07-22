Хук **принимает** на вход коллекцию элементов `collection: Array<T>`, Массив свойств элемента, 
по которым будет осуществляться поиск `includeProps: Array<keyof T>` и дополнительные опции `Options`.

**Возвращает** отфильтрованную колекцию `collection: Array<T>` и `inputProps`.

### Зачем?:
* Позволяет легко создать фильтруемый список элементов;
* Заботится о состоянии значения поля `input`.

### Использование:
```tsx
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import TextField from '@material-ui/core/TextField';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { useSearchFilter, SearchInputBase } from 'react-components-workbench';

const cities = [
  { id: '1', name: 'London', code: 4420 },
  { id: '2', name: 'Liverpool', code: 44151 },
  { id: '3', name: 'Manchester', code: 44161 },
];

const Example = () => {
  const { inputProps, filteredCollection } = useSearchFilter(
    cities, ['name', 'code'], { minQueryLength: 3 },
  );

  return (
    <div style={{ width: '25%' }}>
      <SearchInputBase
        {...inputProps}
        messages={{
          searchPlaceholder: 'Начните печатать...',
          clearCommand: 'Очистить',
        }}
      />
      <Divider />
      <List dense>
        {filteredCollection.map((city) => (
          <ListItem key={city.id}>
            <ListItemText
              primary={city.name}
              secondary={`code: ${city.code}`}
            />
          </ListItem>
        ))}
      </List>
    </div>
  )
};

<Example />
```

### `options`:
#### `minQueryLength?: number`
Минимальное кол-во знаков, необходимое для начала поиска.