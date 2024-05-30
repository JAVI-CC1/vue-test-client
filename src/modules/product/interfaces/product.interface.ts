export interface ProductDirectlyBackend {
  _id: number;
  productName: string;
  mbSpeed: number | null;
  gbData: number | null;
  productTypeName: string;
  numeracioTerminal: number;
  soldAt: string;
  customerId: string;
}

export interface Product {
  id: number;
  productName: string;
  mbSpeed: number | null;
  gbData: number | null;
  productTypeName: string;
  terminalNumbering: number;
  soldAt: string;
  customerId: string;
}
