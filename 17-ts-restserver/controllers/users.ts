import { Request, Response } from "express";

export const getUsers = (req: Request, res: Response) => {
  res.json({
    message: 'getUsers',
  })
}
export const getUser = (req: Request, res: Response) => {

  const { id } = req.params;

  res.json({
    message: 'getUser',
    id
  })
}

export const createUser = (req: Request, res: Response) => {
  const { id, name } = req.body;
  res.json({
    message: 'createUser',
    user: {
      id,
      name
    }
  })
}

export const updateUser = (req: Request, res: Response) => {
  const { id, name, ...rest } = req.body;
  res.json({
    message: 'updateUser',
    user: {
      id,
      name,
      ...rest
    }
  })
}

export const deleteUser = (req: Request, res: Response) => {

  const { id } = req.params;
  res.json({
    message: 'deleteUser',
  })
}