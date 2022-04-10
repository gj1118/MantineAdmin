import db from '../configs/db'

type User = {
  firstName: string
  lastName: string
}

type UserCreate = User & {
  createdAt?: string | Date
  updatedAt?: string | Date
}

type UserResult = Required<UserCreate> &
  {
    _id: string
    _rev: string
  }[]

/**
 * @see https://www.youtube.com/watch?v=Ik2abkbVfd8
 * @desc Let's Build a Notes App with React + PouchDB - #4
 */
class Users {
  private db: PouchDB.Database

  constructor() {
    this.db = db
  }

  async getAll() {
    const result = await this.db.allDocs({ include_docs: true })

    return result.rows.map(row => row.doc) as UserResult
  }

  async create(user: UserCreate) {
    user.createdAt = new Date()
    user.updatedAt = new Date()
    // Mutators
    // user.firstName = user.firstName.toLowerCase();
    // user.lastName = user.lastName.toLowerCase();

    const result = await this.db.post({ ...user })
    return result
  }
}

export default new Users()
