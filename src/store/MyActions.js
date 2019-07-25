export const loadUsers = () => {
    return dispatch => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => dispatch({ type: "LOAD_USERS", users }))
    }
}