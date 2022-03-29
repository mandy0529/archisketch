import {useEffect, useState} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import List from './components/List';
import SingleItem from './components/SingleItem';
import Modal from './components/SingleItem';
import {API_ENDPOINT} from './utils/api';
import {DataType} from './utils/type';

function App() {
  const [items, setItems] = useState<DataType[]>([]);

  const getData = async (): Promise<DataType[]> => {
    const response = await fetch(API_ENDPOINT);
    const {renderings} = await response.json();
    setItems(renderings);
    return renderings;
  };

  const getSingleItem = (clickedItem: DataType) => {};

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<List items={items} singleItem={getSingleItem} />}
          />
          <Route path="/minji" element={<SingleItem />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
