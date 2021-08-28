import { request } from "../tools"

const loginRequest = async (username, password) => {
    return await request({
        url: 'auth/login',
        method: 'post',
        params: {
            user: {
                username: username,
                password: password
            }
        }
    })
}

export {
    loginRequest,
}