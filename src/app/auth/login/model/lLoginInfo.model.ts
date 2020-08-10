import { IUser } from '../../model/IUser.model';
import { ISysFunction } from '../../model/ISysFunction.model';
import { IResponsibility } from '../../model/IResponsibility.model';
import { IUserApp } from '../../model/IUserApp.model';

export class LoginInfo {
  constructor(
    public user: IUser,
    public responsibility: IResponsibility,
    public defFunctions: ISysFunction[],
    public trnFunctions: ISysFunction[],
    public repFunctions: ISysFunction[],
    public userApps: IUserApp[]
  ) {}
}
