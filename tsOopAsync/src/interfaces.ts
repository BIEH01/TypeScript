// Interface is like an architecture of implements for more clases,
// like an inheritance but without using super, all in it is public

export interface Driver {
  database: string;
  password: string;
  port: number;

  connect(): void;
  disconnect(): void;
  isConnected(name: string): boolean;
}

// const driver: Driver = {
//   database: '',
//   password: '',
//   port: 23,
//   connect: function (): void {
//     throw new Error("Function not implemented.");
//   }
// }; > Normal object implementation

class PostgresDriver implements Driver {
  constructor(
    public database: string,
    public password: string,
    public port: number,
    private host: number
  ) {}
  disconnect(): void {
    // code
  }
  isConnected(name: string): boolean {
    // code
    return true;
  }
  connect(): void {
    //code
  }
}

class OracleDriver implements Driver {
  constructor(
    public database: string,
    public password: string,
    public port: number
  ) {}
  disconnect(): void {
    // code
  }
  isConnected(name: string): boolean {
    // code
    return true;
  }
  connect(): void {
    // code
  }
}
