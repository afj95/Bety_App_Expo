import { request } from "../tools"

const changeProfileImageRequest = async (params) => {
    return await request({
        url: 'user/profile/change-profile',
        method: 'put',
        headers: {
            'Content-Type': 'multipart/form-data;',
        },
        params: params
    })
}

export {
    changeProfileImageRequest,
}