export const refreshLocalStorage = state => {
    const localState = JSON.stringify(state)
    localStorage.setItem('state', localState)
}