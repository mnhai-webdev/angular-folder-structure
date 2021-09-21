import { Employee } from './employee';

export interface Team {
  id: number;
  teamName: string;
  employees: Employee[];
}
