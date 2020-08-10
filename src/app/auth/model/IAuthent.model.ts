import { IResponsibility } from './IResponsibility.model';

export interface IAuthent {
  userId: number;
  username: string;
  empId: number;
  empName: string;
  personType: string;
  resp: IResponsibility[];
}
