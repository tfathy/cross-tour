export class AppUser{
    constructor(
        public userId: number,
        public username: string,
        public empId: number,
        public empName: string,
        public personType: string,
        public idToken: string){}
}