
import { Request, Response } from 'express'
import { User } from '../schemas/User'

class UserController {
  public async index (req: Request, res: Response): Promise<Response> {
    const users = await User.find()
    
    return res.json(users)
  }

  public async store (req: Request, res: Response): Promise<Response> {
    const user = await User.create(req.body)

    return res.json(user)
  }

  public async updateUser (req: Request, res: Response): Promise<Response> {
    await User.findByIdAndUpdate(req.params.id,req.body)

    return res.send({message: 'usuario atualizado com sucesso'})
  }

  public async deleteUser (req: Request, res: Response): Promise<Response> {
    await User.findByIdAndDelete(req.params.id)
    return res.send({message:'usuario apagado com sucesso'})
    
  }


}

export default new UserController()