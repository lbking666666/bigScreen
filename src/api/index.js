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
//地图
export function getMapData(data) {
    const url = '/ITTest/queryOtherCountAll';
    return getApi(url, data)
}
//用户类型分布
export function getBigData(data) {
    const url = '/ITTest/queryOtherCountByProvince';
    return getApi(url, data)
}



// @Param("prov_code") String
//出账用户
export function AI_Cz_Users(data) {
    const url = `/webapi/screenapi/AI_Cz_Users`
    return getApi(url, data)
}

// @Param("prov_code") String
// @Param("cycle") Number
//上月出账金额
export function AI_Cz_Process_Card(data) {
    const url = `/webapi/screenapi/AI_Cz_Process_Card`
    return getApi(url, data)
}

// 今日缴费金额
export function AI_Billing(data) {
    const url = `/webapi/screenapi/AI_Billing_00001`
    return getApi(url, data)
}

// @Param("busi") Number
// @Param("date") String ['H', 'D', 'M']
// @Param("end") String ['2021-01-14-23', '2021-01-14', '2021-01']
// @Param("prov_code") String
// @Param("start") String ['2021-01-14-23', '2021-01-14', '2021-01']
//订单量
export function Trade(data) {
    const url = `/webapi/asyn/trade`
    return getApi(url, data)
}

// @Param("busi") String
// @Param("city_code") String
// @Param("date") String '2021-01-14'
// @Param("prov_code") String

//用户类型分布 新增
export function Openbusi(data) {
    const url = `/webapi/asyn/openbusi`
    return getApi(url, data)
}
//生产运营情况服务工单数
export function ServiceOrder(data) {
    const url = `/webapi/cloudwise/business/serviceOrder`
    return getApi(url, data)
}

// @Param("prov_code") String
// @Param("sqltype") String  'month'
//生产运营情况停机量开机量
export function AI_Credit(data) {
    const url = `/webapi/screenapi/AI_Credit_00004_YMD`
    return getApi(url, data)
}

// @Param("prov_code") String
// @Param("sqltype") String 'day'
//概览-收入情况当月实时收入
export function AI_Produce(data) {
    const url = `/webapi/screenapi/AI_Produce_00001_YMD`
    return getApi(url, data)
}

// @Param("city_code") String
// @Param("prov_code") String
// @Param("date") String '2021-01-14'
//今日开户量
export function AsynOpen(data) {
    const url = `/webapi/asyn/open`
    return getApi(url, data)
}
//31省柱状图
export function queryUserCountByProvince(data) {
    const url = `/ITTest/queryUserCountByProvince`
    return getApi(url, data)
}
//重点业务场景
export function queryOrderCount(data) {
    //const url = `/ITTest/QueryOrderCount`
    const url = `/webapi/queryOrderCount`
    return getApi(url, data)
}
//热销产品/常用功能TOP5
export function queryTop10ByProvince(data) {
    //const url = `/ITTest/queryTop10ByProvince`
    const url = `/webapi/queryTop10ByProvince`
    return getApi(url, data)
}
//收入TOP5产品
export function AI_Billing_00003_YMD(data) {
  //const url = `/ITTest/getAI_Billing_00003_YMD`
    const url = `/webapi/screenapi/BILLING_YMD`
    return getApi(url, data)
}
//收入TOP5费用项
export function AI_Billing_00002_YMD(data) {
    //const url = `/ITTest/AI_Billing_00002_Data`
     const url = `/webapi/screenapi/AI_Billing_00002_YMD`
    return getApi(url, data)
}

//异地缴费
export function yd_payment(data) {
    // const url = `/ITTest/yd_payment`
    const url = `/webapi/screenapi/yd_payment`
    return getApi(url, data)
}

//异地单产品套餐变更
export function yd_change(data) {
     //const url = `/ITTest/yd_change`
    const url = `/webapi/screenapi/yd_change`
    return getApi(url, data)
}

//异地补换卡
export function yd_chg_card(data) {
     //const url = `/ITTest/yd_chg_card`
   const url = `/webapi/screenapi/yd_chg_card`
    return getApi(url, data)
}
