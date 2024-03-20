
import { IProvinces } from "../interfaces/ProvinceInterface";
 
  const provinces: IProvinces[] = [
    { id: 1, name: 'Alberta', code: 'AB' },
    { id: 2, name: 'British Columbia', code: 'BC' },
    { id: 3, name: 'Manitoba', code: 'MB' },
    { id: 4, name: 'New Brunswick', code: 'NB' },
    { id: 5, name: 'Newfoundland and Labrador', code: 'NL' },
    { id: 6, name: 'Nova Scotia', code: 'NS' },
    { id: 7, name: 'Ontario', code: 'ON' },
    { id: 8, name: 'Prince Edward Island', code: 'PE' },
    { id: 9, name: 'Quebec', code: 'QC' },
    { id: 10, name: 'Saskatchewan', code: 'SK' },
  ];
  
  export function getProvinces(): IProvinces[] {
    return provinces;
  }
  