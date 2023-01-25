export const storeUserData = (data, user) => {
    localStorage.setItem('idToken', data)
    localStorage.setItem('user', user)
}

export const getUserData = () => {
    return localStorage.getItem('idToken');
}

export const removeUserData = () => {
    localStorage.removeItem('idToken')
    localStorage.removeItem('user')
}