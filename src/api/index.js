import { getApi, postApi } from './config.js'

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


// @Param("prov_code") String
export function AI_Cz_Users(data){
    const url = `/webapi/screenapi/AI_Cz_Users`
    return getApi(url, data)
}

// @Param("prov_code") String
// @Param("cycle") Number
export function AI_Cz_Process_Card(data){
    const url = `/webapi/screenapi/AI_Cz_Process_Card`
    return getApi(url, data)
}

// @Param("prov_code") String
export function AI_Billing(data){
    const url = `/webapi/screenapi/AI_Billing_00001`
    return getApi(url, data)
}

// @Param("busi") Number
// @Param("date") String ['H', 'D', 'M']
// @Param("end") String ['2021-01-14-23', '2021-01-14', '2021-01']
// @Param("prov_code") String
// @Param("start") String ['2021-01-14-23', '2021-01-14', '2021-01']
export function Trade(data){
    const url = `/webapi/asyn/trade`
    return getApi(url, data)
}

// @Param("busi") String
// @Param("city_code") String
// @Param("date") String '2021-01-14'
// @Param("prov_code") String
export function Openbusi(data){
    const url = `/webapi/asyn/openbusi`
    return getApi(url, data)
}

export function ServiceOrder(data){
    const url = `/webapi/cloudwise/business/serviceOrder`
    return getApi(url, data)
}

// @Param("prov_code") String
// @Param("sqltype") String  'month'
export function AI_Credit(data){
    const url = `/webapi/screenapi/AI_Credit_00004_YMD`
    return getApi(url, data)
}

// @Param("prov_code") String
// @Param("sqltype") String 'day'
export function AI_Produce(data){
    const url = `/webapi/screenapi/AI_Produce_00001_YMD`
    return getApi(url, data)
}

// @Param("city_code") String
// @Param("prov_code") String
// @Param("date") String '2021-01-14'
export function AsynOpen(data){
    const url = `/webapi/asyn/open`
    return getApi(url, data)
}

export function queryUserCountByProvince(data){
    const url = `/ITTest/queryUserCountByProvince`
    return getApi(url, data)
}

export function queryOrderCount(data){
    const url = `/ITTest/queryOrderCount`
    return getApi(url, data)
}

export function queryTop10ByProvince(data){
    const url = `/ITTest/queryTop10ByProvince`
    return getApi(url, data)
}

export function AI_Billing_00003_YMD(data){
    const url = `/webapi/screenapi/AI_Billing_00003_YMD`
    return getApi(url, data)
}

export function AI_Billing_00002_YMD(data){
    const url = `/webapi/screenapi/AI_Billing_00002_YMD`
    return getApi(url, data)
}
export function queryCBSSOpenCount(data){
    const url = `/ITTest/queryCBSSOpenCount`
    return getApi(url, data)
}

