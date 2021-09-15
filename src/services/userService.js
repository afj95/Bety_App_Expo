import { request } from "../tools"

const changeProfileImageRequest = async (params) => {
    return await request({
        url: 'user/profile/change-profile',
        method: 'put',
        headers: {
            'Content-Type': 'multipart/form-data; ',
        },
        params: params
    }).then(response => {
        console.log(`response`, response)
        return response
    }).catch(error => {
        console.log(`error`, error)
        return error
    })
    // console.log(`params`, params)
    // return await request({
    //     url: 'user/profile/change-profile',
    //     method: 'put',
    //     headers: {
    //         'Content-Type': 'multipart/form-data; ',
    //     },
    //     params: params
    // })
}

export {
    changeProfileImageRequest
}