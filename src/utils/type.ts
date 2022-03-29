export type DataType = {
  _id: string;
};

export type ItemType = {
  items: DataType;
};

export type ListType = {
  items: DataType[];
  singleItem: (clickedItem: DataType) => void;
};

export type ListItemType = {
  items: DataType;
  singleItem: (clickedItem: DataType) => void;
};
