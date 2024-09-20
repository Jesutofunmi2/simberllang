
export interface Profile {
    id:number
    name: string,
    email: string
  }

export interface InitialState {
    currentUser: {
      data: Profile
    } | null
  }