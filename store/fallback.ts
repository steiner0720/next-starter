type user = {
  name: string
}

type app = {
  user?: user
}

type home = {
  count?: number
}

export const app: app = { user: undefined }

export const home = { count: 0 }

export default { app, home }
