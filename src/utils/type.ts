import React from 'react';

export type DataType = {
  _id: string;
  order: number;
};

export type ItemType = {
  items: DataType;
};

export type ModalType = {
  items: DataType;
  // itemId: number;
  setModalOpen: (state: boolean) => void;
  // handleLeft: () => void;
  // handleRight: () => void;
};

export type ListType = {
  items: DataType[];
  removeItem: (order: number) => void;
};

export type ListItemType = {
  items: DataType;
  removeItem: (order: number) => void;
  // order: number;
  // handleLeft: () => void;
  // handleRight: () => void;
  // setIndex: (state: number) => void;
};
