import { port } from "../config/port"

export const logout = () => {
    sessionStorage.removeItem('userName')
    window.location.assign(`http://localhost:${port}/login`)
  }
