import { request } from "../tools"

const getUserHomesRequest = async () => {
    return await request({
        url: 'home/getHomes',
        method: 'get',
    })
}

const addHomeRequest = async (name) => {
    return await request({
        url: 'home/addHome',
        method: 'post',
        params: {
            home: {
                name
            }
        }
    })
}

const deleteHomeRequest = async (homeId) => {
    return await request({
        url: `home/delete/?homeId=${homeId}`,
        method: 'post',
    })
}

export {
    getUserHomesRequest,
    addHomeRequest,
    deleteHomeRequest,
}