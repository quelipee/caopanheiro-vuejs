export interface User {
  name? : string,
  email : string,
  password : string,
  confirm_password? : string,
  phone_number? : string,
  address? : string,
}

export interface Pet {
  age : number,
  breed: string,
  color: string,
  created_at: Date,
  description: string,
  gender: string,
  id: string,
  name: string,
  photo: string,
  shelter_id: string,
  size: number,
  species: string,
  status: string,
  updated_at: Date
}
export interface Petlist {
  id: string,
  name: string,
  age: number,
  breed: string,
  shelter_id: string,
  description: string,
  imageUrl: string
}
