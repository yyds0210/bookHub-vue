import request from '../request'

// 返回数据类型声明
interface ReposeeData<T = any> {
    code: number;
    message: string;
    msg: string;
    response: {
        headers: { [key: string]: string; };
        body: string;
    };
}

export const getSignRegister = async (obj: object) => {
    return await request<ReposeeData>({
        method: 'POST',
        url: '/user/register',
        data: obj
    })
}
export const getSendVerification = async (obj: object) => {
    return await request<ReposeeData>({
        method: 'POST',
        url: '/user/code',
        data: obj
    })
}


