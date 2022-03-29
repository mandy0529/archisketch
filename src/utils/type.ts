export type DataType = {
  _id: string;
  order: number;
};

export type ItemType = {
  items: DataType;
};

export type ModalType = {
  items: DataType;

  setModalOpen: (state: boolean) => void;
};

export type ListType = {
  items: DataType[];
  removeItem: (order: number) => void;
};

export type ListItemType = {
  items: DataType;
  removeItem: (order: number) => void;
};
