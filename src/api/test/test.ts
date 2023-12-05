import request  from "../../utils/reuqest";


export const getCatImg = () => {
    return request({
        url: "/imgs",
        method: 'GET'
    });
}

export const getText = () => {
    return request({
        url: "/test",
        method: "GET",
    });
};