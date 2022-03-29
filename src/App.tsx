import {useEffect, useState} from 'react';
import List from './components/List';
import {API_ENDPOINT} from './utils/api';
import {DataType} from './utils/type';

function App() {
  const [items, setItems] = useState<DataType[]>([]);

  const getData = async (): Promise<DataType[]> => {
    const response = await fetch(API_ENDPOINT);
    const {renderings} = await response.json();
    const tempList = renderings.map((item: any, index: number) => {
      return {_id: item._id, order: index};
    });
    setItems(tempList);
    return renderings;
  };

  const removeItem = (order: number) => {
    const removedItem = items.filter((item: any) => item.order !== order);
    setItems(removedItem);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <List removeItem={removeItem} items={items} />
    </div>
  );
}

export default App;
