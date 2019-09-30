export class UserInfo {
  constructor(
    public name: string,
    public lastname: string,
    public country: string,
    public city: string,
    public age: string,
    public description: string,
    public email?: string
  ) {
  }
}
