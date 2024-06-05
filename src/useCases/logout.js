export const logout = () => {
    sessionStorage.removeItem('userName')
    window.location.assign('http://localhost:80/login')
  }
