export class Issue {
  static id(id: any) {
    throw new Error('Method not implemented.');
  }
    id!: number;
    name!: string;
    status!: string;
    desc!: string;
    stdt!: string;
    cldt!: string;
  static status: string;
  static cldt: Date;
    static newId: number;
    
}
