import { Document, Model,Schema, model } from 'mongoose'

export interface UserInterface extends Document {
  email?: String,
  firstName?: String,
  lastName?: String
}

const UserSchema = new Schema({
  email: String,
  firstName: String,
  lastName: String
},{  timestamps: true
})



export const User: Model<UserInterface> = model<UserInterface>('User', UserSchema)