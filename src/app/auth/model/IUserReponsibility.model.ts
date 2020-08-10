
import { IUser } from './IUser.model';
import { ISysFunction } from './ISysFunction.model';
import { IUserApp } from './IUserApp.model';
import { IResponsibility } from './IResponsibility.model';

export interface IUserReponsibility{
    user: IUser;
    responsibility: IResponsibility;
    defFunction: ISysFunction [];
    trnFunction: ISysFunction [];
    repFunction: ISysFunction [];
    userApps: IUserApp[];
}