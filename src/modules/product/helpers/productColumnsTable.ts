import type { Product } from '../interfaces';

const productColumnsTable = [
  {
    name: 'id',
    label: 'Identifier',
    align: 'left',
    field: (row: Product) => row.id,
  },
  {
    name: 'productName',
    label: 'Product name',
    align: 'left',
    field: (row: Product) => row.productName,
  },
  {
    name: 'mbSpeed',
    label: 'MB Speed',
    align: 'center',
    field: (row: Product) => row.mbSpeed,
  },
  {
    name: 'gbData',
    label: 'GB Data',
    align: 'center',
    field: (row: Product) => row.gbData,
  },
  {
    name: 'productTypeName',
    label: 'Product type name',
    align: 'center',
    field: (row: Product) => row.productTypeName,
  },
  {
    name: 'terminalNumbering',
    label: 'Terminal numbering',
    align: 'center',
    field: (row: Product) => row.terminalNumbering,
  },
  {
    name: 'soldAt',
    label: 'Sold At',
    align: 'left',
    field: (row: Product) => row.soldAt,
  },
  {
    name: 'customerId',
    label: 'Customer ID',
    align: 'left',
    field: (row: Product) => row.customerId,
  },
];

export { productColumnsTable };
