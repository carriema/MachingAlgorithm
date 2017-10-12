export class User {
  public firstName: string;
  public lastName: string;
  public country: string;
  public bugFix: number;
  public lastLogin: string;


  constructor(firstName: string, lastName: string, country:string, bugFix: number, lastLogin:string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.country = country;
    this.bugFix = bugFix;
    this.lastLogin = lastLogin;
  }

}
