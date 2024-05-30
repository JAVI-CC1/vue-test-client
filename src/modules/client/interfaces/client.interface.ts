import { ClientTableColumns } from './client.type';

export interface ClientDirectlyBackend {
  _id: number;
  docType: string;
  docNum: string;
  email: string;
  customerId: string;
  givenName: string;
  familyName1: string;
  phone: string;
}

export interface Client {
  id: number;
  docType: string;
  docNum: string;
  email: string;
  customerId: string;
  givenName: string;
  familyName1: string;
  phone: string;
}

export interface ClientTableFilter {
  filter: string;
  sortBy: ClientTableColumns;
  isDescending: boolean;
}

export interface ClientSelectOption {
  label: string;
  value: ClientTableColumns;
}
