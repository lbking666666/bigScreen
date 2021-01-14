import { getApi, postApi ,getJsonp} from './config.js'

export function addAreaUser(data) {
    const url = '/wep-oms/bigScreen/addAreaUser';
    return getApi(url, data)
}

export function addAreaExternal(data) {
    const url = '/wep-oms/bigScreen/addAreaExternal';
    return getApi(url, data)
}

export function areaExternalRank(data) {
    const url = '/wep-oms/bigScreen/areaExternalRank';
    return getApi(url, data)
}



export function showWechat(data) {
    const url = '/wep-oms/bigScreen/showWechat';
    return getApi(url, data)
}

export function trends(data) {
    const url = '/wep-oms/bigScreen/trends';
    return getApi(url, data)
}

export function areaExternal(data) {
    const url = '/wep-oms/bigScreen/areaExternal';
    return getApi(url, data)
}


export function showTask(data) {
    const url = '/wep-oms/bigScreen/showTask';
    return getApi(url, data)
}


export function showArea(data) {
    const url = '/wep-oms/bigScreen/showArea';
    return getApi(url, data)
}
export function showExternal(data) {
    const url = '/wep-oms/bigScreen/showExternal';
    return getApi(url, data)
}

//yaxin
export function getMapData(data){
    const url = '/ITTest/queryOtherCountAll';
    return getApi(url, data)
}
export function getBigData(data) {
    const url = '/ITTest/queryOtherCountByProvince';
    return getApi(url, data)
}
export function getModule6(data) {
    const url = '/ITTest/queryUserCountByProvince';
    return getApi(url, data)
}
export function getModule7(data) {
    const url = '/ITTest/queryCBSSTradeCount';
    return getApi(url, data)
}
export function getModule8(data) {
    const url = '/ITTest/queryCBSSMainCount';
    return getApi(url, data)
}
export function getModule9(data) {
    const url = '/ITTest/queryTop10ByProvince';
    return getApi(url, data)
}

export function geAllData(data){
    const url = '/ITTest/queryTodayInnet';
    return getApi(url, data)
}



export function AI_Cz_Users(){
    let data = {
        prov_code:'ZZ'
    }
    const url = 'http://10.161.67.41:9002/screenapi/AI_Cz_Users';
    return getJsonp(url, data)
}