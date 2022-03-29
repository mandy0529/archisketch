import React, {useEffect, useState} from 'react';
import {Wrapper} from '../styles/List.styles';
import {ListType} from '../utils/type';
import ListItem from './ListItem';

const List: React.FC<ListType> = ({items, removeItem}) => {
  //   const [index, setIndex] = useState(0);

  //   const handleLeft = () => {
  //     setIndex((prev) => prev - 1);
  //     console.log(index, 'left');
  //   };

  //   const handleRight = () => {
  //     setIndex((prev) => prev + 1);
  //     console.log(index, 'right');
  //   };

  return (
    <Wrapper>
      <div className="list__title">
        <p>{items.length}개의 렌더샷</p>
        <h2>갤러리</h2>
      </div>

      <div className="list__item">
        {items.length === 0 ? <p>no items in your cart</p> : null}
        {items.map((item, index) => {
          return (
            <ListItem
              key={index}
              items={item}
              removeItem={removeItem}
              //   order={index}
              //   handleLeft={handleLeft}
              //   handleRight={handleRight}
              //   setIndex={setIndex}
            />
          );
        })}
      </div>
    </Wrapper>
  );
};

export default List;
