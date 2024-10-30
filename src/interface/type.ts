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
  shelter: {
    name: string
  },
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
export interface PetDetail {
  photo: string,
  name : string,
  breed: string,
  gender: string,
  species: string,
  age: number,
  shelter: string,
  status: string,
  statusClass: string,
}
export interface AdoptForm {
  housing_type: string,
  availability: number | null,
  experience: string,
  other_animals: string,
  reason: string,
}
