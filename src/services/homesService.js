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
        url: `home/delete?homeId=${homeId}`,
        method: 'post',
    })
}

const searchMemberRequest = async (searchValue) => {
    return await request({
        url: `home/search?searchValue=${searchValue}`,
        method: 'get'
    })
}

const addMemberRequest = async (id, username) => {
    return await request({
        url: `home/addMember?homeId=${id}&username=${username}`,
        method: 'post'
    })
}

export {
    getUserHomesRequest,
    addHomeRequest,
    deleteHomeRequest,
    searchMemberRequest,
    addMemberRequest
}