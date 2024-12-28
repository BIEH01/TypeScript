export interface BaseModel {
  readonly id: string; //> readonly prohibits to rewrite the value
  readonly createdAt: Date;
  updatedAt: Date;
}
