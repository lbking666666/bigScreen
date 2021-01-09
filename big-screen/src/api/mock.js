// 引入mockjs
const Mock = require('mockjs');
//全国新增内部员工量
const addAreaUser = function() {
    return {
        code: "200", //类型:String  必有字段  备注:状态码
        "message": "操作成功", //类型:String  必有字段  备注:返回文本信息
        data: Mock.mock({ //类型:Object  必有字段  备注:返回数据对象
            "list|20": [ //类型:Array  必有字段  备注:内部员工数组
                { //类型:Object  必有字段  备注:无
                    addNum: Mock.mock('@integer(1, 20)'), //类型:String  必有字段  备注:新增内部员工数
                    objDate: Mock.mock("@date('MM/dd')"), //类型:String  必有字段  备注:业务日期
                    areaName: Mock.mock("@city"), //类型:String  必有字段  备注:区域名称
                    areaCode: "3401" //类型:String  必有字段  备注:区域编码
                }
            ]
        })
    }
}

//全国新增外部客户量接口
const addAreaExternal = function() {
    return {
        code: "200", //类型:String  必有字段  备注:状态码
        "message": "操作成功", //类型:String  必有字段  备注:返回文本信息
        data: Mock.mock({ //类型:Object  必有字段  备注:返回数据对象
            "list|20": [ //类型:Array  必有字段  备注:内部员工数组
                { //类型:Object  必有字段  备注:无
                    addNum: Mock.mock('@integer(1, 20)'), //类型:String  必有字段  备注:新增内部员工数
                    objDate: Mock.mock("@date('MM/dd')"), //类型:String  必有字段  备注:业务日期
                    areaName: Mock.mock("@city"), //类型:String  必有字段  备注:区域名称
                    areaCode: "3401" //类型:String  必有字段  备注:区域编码
                }
            ]
        })
    }
}

//全国涨幅省份排行榜接口
const areaExternalRank = function() {
    return {
        code: "200", //类型：String  必有字段  备注：状态码
        "message": "操作成功", //类型：String  必有字段  备注：返回文本信息
        data: Mock.mock({ //类型：Object  必有字段  备注：返回数据对象
            "list|20": [ //类型：Array  必有字段  备注：内部员工数组
                { //类型：Object  必有字段  备注：无

                    "num": Mock.mock('@integer(1, 20)'), //类型：String  必有字段  备注：序号
                    "areaName": Mock.mock("@city"), //类型：String  必有字段  备注：区域名称
                    "monthExternalNum": Mock.mock('@integer(1, 20)'), //类型：String  必有字段  备注：近30天客户量
                    "lastMonthExternalNum": Mock.mock('@integer(1, 20)'), //类型：String  必有字段  备注：上30天客户量
                    "rate": Mock.mock('@integer(1, 20)') + '%' //类型：String  必有字段  备注：增幅
                }
            ]
        })
    }
}
//发展客户互动数接口
const showWechat = function() {
    return {
        code: "200", //类型：String  必有字段  备注：状态码
        "message": "操作成功", //类型：String  必有字段  备注：返回文本信息
        data: Mock.mock({ //类型：Object  必有字段  备注：返回数据对象
            "chatCnt": Mock.mock('@integer(1, 20)'), //类型：String  必有字段  备注：聊天总数
            "messageCnt": Mock.mock('@integer(1, 20)'), //类型：String  必有字段  备注：发消息数
            "avgReplyTime": Mock.mock('@integer(1, 20)'), //类型：String  必有字段  备注：回复时长
            "replyPercentage": Mock.mock('@integer(1, 20)') //类型：String  必有字段  备注：回复占比
        })
    }
}
//发展趋势接口
const trends = function() {
    return {
        code: "200", //类型：String  必有字段  备注：状态码
        "message": "操作成功", //类型：String  必有字段  备注：返回文本信息
        data: { //类型：Object  必有字段  备注：返回数据对象
            "userData": { //类型：Object  必有字段  备注：用户数据对象
                "areaName": "安徽", //类型：String  必有字段  备注：区域名称
                "objDate": "2020-12-01", //类型：String  必有字段  备注：业务日期
                "addNum": "100", //类型：String  必有字段  备注：用户新增数
                "totalNum": "30000", //类型：String  必有字段  备注：用户汇总数
                "lastRate": "34%", //类型：String  必有字段  备注：上日涨幅
                "sevenRate": "-12%", //类型：String  必有字段  备注：7日均值涨幅
                "lastMonthRate": "21%" //类型：String  必有字段  备注：上月涨幅
            },
            "externalData": { //类型：Object  必有字段  备注：客户数据对象
                "areaName": "安徽", //类型：String  必有字段  备注：区域名称
                "objDate": "2020-12-01", //类型：String  必有字段  备注：业务日期
                "addNum": "100", //类型：String  必有字段  备注：客户新增数
                "totalNum": "30000", //类型：String  必有字段  备注：客户汇总数
                "lastRate": "34%", //类型：String  必有字段  备注：上日涨幅
                "sevenRate": "-12%", //类型：String  必有字段  备注：7日均值涨幅
                "lastMonthRate": "21%" //类型：String  必有字段  备注：上月涨幅
            }
        }
    }
}
//各省客户汇总数据接口
const areaExternal = function() {
    return {
        code: "200", //类型：String  必有字段  备注：状态码
        "message": "操作成功", //类型：String  必有字段  备注：返回文本信息
        data: Mock.mock({ //类型：Object  必有字段  备注：返回数据对象
            "list|20": [ //类型：Array  必有字段  备注：内部员工数组
                { //类型：Object  必有字段  备注：无
                    totalNum: Mock.mock('@integer(1, 20)'), //类型：String  必有字段  备注：新增内部员工数
                    areaName: Mock.mock("@city"), //类型：String  必有字段  备注：区域名称
                    areaCode: "3401" //类型：String  必有字段  备注：区域编码
                }
            ]
        })
    }
}
//维系任务统计接口
const showTask = function() {
    return {
        code: "200", //类型：String  必有字段  备注：状态码
        "message": "操作成功", //类型：String  必有字段  备注：返回文本信息
        data: { //类型：Object  必有字段  备注：返回数据
            "taskNum": "2658", //类型：String  必有字段  备注：任务下发量
            "taskRate": "85.6%" //类型：String  必有字段  备注：维系任务完成占比
        }
    }
}
//各省客户汇总数据接口
const showArea = function() {
    return {
        "code": 200,
        "data": [{
                "areaCode": "1",
                "areaName": "中国",
                "colors": "-1",
                "flag": "-1",
                "num": "1320"
            },
            {
                "areaCode": "110000",
                "areaName": "北京",
                "colors": "-1",
                "flag": "-1",
                "num": "0"
            },
            {
                "areaCode": "120000",
                "areaName": "天津",
                "colors": "1",
                "flag": "1",
                "num": "10"
            },
            {
                "areaCode": "130000",
                "areaName": "河北",
                "colors": "-1",
                "flag": "-1",
                "num": "0"
            },
            {
                "areaCode": "140000",
                "areaName": "山西",
                "colors": "-1",
                "flag": "-1",
                "num": "0"
            },
            {
                "areaCode": "150000",
                "areaName": "内蒙古",
                "colors": "1",
                "flag": "1",
                "num": "629"
            },
            {
                "areaCode": "210000",
                "areaName": "辽宁",
                "colors": "-1",
                "flag": "1",
                "num": "309"
            },
            {
                "areaCode": "220000",
                "areaName": "吉林",
                "colors": "1",
                "flag": "1",
                "num": "1547"
            },
            {
                "areaCode": "230000",
                "areaName": "黑龙江",
                "colors": "1",
                "flag": "1",
                "num": "0"
            },
            {
                "areaCode": "310000",
                "areaName": "上海",
                "colors": "1",
                "flag": "1",
                "num": "162"
            },
            {
                "areaCode": "320000",
                "areaName": "江苏",
                "colors": "-1",
                "flag": "1",
                "num": "2184"
            },
            {
                "areaCode": "330000",
                "areaName": "浙江",
                "colors": "-1",
                "flag": "-1",
                "num": "0"
            },
            {
                "areaCode": "340000",
                "areaName": "安徽",
                "colors": "-1",
                "flag": "-1",
                "num": "0"
            },
            {
                "areaCode": "350000",
                "areaName": "福建",
                "colors": "1",
                "flag": "1",
                "num": "106"
            },
            {
                "areaCode": "360000",
                "areaName": "江西",
                "colors": "1",
                "flag": "1",
                "num": "158"
            },
            {
                "areaCode": "370000",
                "areaName": "山东",
                "colors": "1",
                "flag": "1",
                "num": "2602"
            },
            {
                "areaCode": "410000",
                "areaName": "河南",
                "colors": "1",
                "flag": "1",
                "num": "3049"
            },
            {
                "areaCode": "420000",
                "areaName": "湖北",
                "colors": "1",
                "flag": "1",
                "num": "125"
            },
            {
                "areaCode": "430000",
                "areaName": "湖南",
                "colors": "-1",
                "flag": "1",
                "num": "0"
            },
            {
                "areaCode": "440000",
                "areaName": "广东",
                "colors": "1",
                "flag": "1",
                "num": "327"
            },
            {
                "areaCode": "450000",
                "areaName": "广西",
                "colors": "1",
                "flag": "1",
                "num": "360"
            },
            {
                "areaCode": "460000",
                "areaName": "海南",
                "colors": "1",
                "flag": "1",
                "num": "102"
            },
            {
                "areaCode": "500000",
                "areaName": "重庆",
                "colors": "1",
                "flag": "1",
                "num": "41"
            },
            {
                "areaCode": "510000",
                "areaName": "四川",
                "colors": "-1",
                "flag": "-1",
                "num": "0"
            },
            {
                "areaCode": "520000",
                "areaName": "贵州",
                "colors": "-1",
                "flag": "1",
                "num": "719"
            },
            {
                "areaCode": "530000",
                "areaName": "云南",
                "colors": "1",
                "flag": "1",
                "num": "1298"
            },
            {
                "areaCode": "540000",
                "areaName": "西藏",
                "colors": "1",
                "flag": "1",
                "num": "0"
            },
            {
                "areaCode": "610000",
                "areaName": "陕西",
                "colors": "1",
                "flag": "1",
                "num": "632"
            },
            {
                "areaCode": "620000",
                "areaName": "甘肃",
                "colors": "1",
                "flag": "1",
                "num": "0"
            },
            {
                "areaCode": "630000",
                "areaName": "青海",
                "colors": "1",
                "flag": "1",
                "num": "0"
            },
            {
                "areaCode": "640000",
                "areaName": "宁夏",
                "colors": "1",
                "flag": "1",
                "num": "0"
            },
            {
                "areaCode": "650000",
                "areaName": "新疆",
                "colors": "1",
                "flag": "1",
                "num": "1300"
            },
            {
                "areaCode": "710000",
                "areaName": "台湾",
                "colors": "-1",
                "flag": "-1",
                "num": "0"
            },
            {
                "areaCode": "810000",
                "areaName": "香港",
                "colors": "-1",
                "flag": "-1",
                "num": "0"
            },
            {
                "areaCode": "820000",
                "areaName": "澳门",
                "colors": "-1",
                "flag": "-1",
                "num": "0"
            },
            {
                "areaCode": "990000",
                "areaName": "海外",
                "colors": "-1",
                "flag": "-1",
                "num": "0"
            }
        ],
        "errorStack": "",
        "message": "操作成功"

    }
}
//客户新增量和客户总量查询接口
const showExternal = function() {
    return {
        code: "200", //类型：String  必有字段  备注：状态码
        "message": "操作成功", //类型：String  必有字段  备注：返回文本信息
        data: Mock.mock({ //类型：Object  必有字段  备注：返回数据对象
            "totalExternal": "365247", //类型：String  必有字段  备注：客户总量
            "addExternal": "1254" //类型：String  必有字段  备注：客户新增量
        })
    }
}

Mock.mock('/wep-oms/bigScreen/addAreaUser', 'get', addAreaUser);
Mock.mock('/wep-oms/bigScreen/addAreaExternal', 'get', addAreaExternal);
Mock.mock('/wep-oms/bigScreen/areaExternalRank', 'get', areaExternalRank);
Mock.mock('/wep-oms/bigScreen/showWechat', 'get', showWechat);
Mock.mock('/wep-oms/bigScreen/trends', 'get', trends);
Mock.mock('/wep-oms/bigScreen/areaExternal', 'get', areaExternal);
Mock.mock('/wep-oms/bigScreen/showTask', 'get', showTask);
Mock.mock('/wep-oms/bigScreen/showArea', 'get', showArea);
Mock.mock('/wep-oms/bigScreen/showExternal', 'get', showExternal);





//yaxin
const bigData = function() {
    return {
        "code": 200, //类型：String  必有字段  备注：状态码
        "message": "操作成功", //类型：String  必有字段  备注：返回文本信息
        "data": [ //类型：Array  必有字段  备注：返回数据集合
            {
                "name": "全国", //名称
                "value": {
                    "usercount": Mock.mock('@integer(1000, 20000)'),
                    "mobile": 12345,
                    "broadband": 222,
                    "province_code":"010",
                    "iptv": 2123,
                    "telephone": 2123,
                    "otheruser": 2123,
                    "billuser": 2123,
                    "arpu": 2123,
                    "cbinnetmonth": 2222,
                    "cbinnetday": 2222,
                    "cbfrontinnetmonth": 2222,
                    "cbfrontinnetday": 2222,
                    "woinnetmonth": 2222,
                    "woinnetday": 2222,
                    "otherinnetmonth": 2222,
                    "otherinnetday": 2222,
                }
            },
            {
                "name": "北京", //名称
                "value": {
                    "usercount": Mock.mock('@integer(1000, 20000)'),
                    "mobile": 12345,
                    "broadband": 222,
                    "province_code":"010",
                    "iptv": 2123,
                    "telephone": 2123,
                    "otheruser": 2123,
                    "billuser": 2123,
                    "arpu": 2123,
                    "cbinnetmonth": 2222,
                    "cbinnetday": 2222,
                    "cbfrontinnetmonth": 2222,
                    "cbfrontinnetday": 2222,
                    "woinnetmonth": 2222,
                    "woinnetday": 2222,
                    "otherinnetmonth": 2222,
                    "otherinnetday": 2222,
                }
            },
            {
                "name": "天津", //名称
                "value": {
                    "usercount": Mock.mock('@integer(1000, 20000)'),
                    "mobile": 12345,
                    "broadband": 222,
                    "province_code":"010",
                    "iptv": 2123,
                    "telephone": 2123,
                    "otheruser": 2123,
                    "billuser": 2123,
                    "arpu": 2123,
                    "cbinnetmonth": 2222,
                    "cbinnetday": 2222,
                    "cbfrontinnetmonth": 2222,
                    "cbfrontinnetday": 2222,
                    "woinnetmonth": 2222,
                    "woinnetday": 2222,
                    "otherinnetmonth": 2222,
                    "otherinnetday": 2222,
                }
            },
            {
                "name": "内蒙古", //名称
                "value": {
                    "usercount": Mock.mock('@integer(1000, 20000)'),
                    "mobile": 12345,
                    "broadband": 222,
                    "province_code":"010",
                    "iptv": 2123,
                    "telephone": 2123,
                    "otheruser": 2123,
                    "billuser": 2123,
                    "arpu": 2123,
                    "cbinnetmonth": 2222,
                    "cbinnetday": 2222,
                    "cbfrontinnetmonth": 2222,
                    "cbfrontinnetday": 2222,
                    "woinnetmonth": 2222,
                    "woinnetday": 2222,
                    "otherinnetmonth": 2222,
                    "otherinnetday": 2222,
                }
            },
            {
                "name": "山东", //名称
                "value": {
                    "usercount": Mock.mock('@integer(1000, 20000)'),
                    "mobile": 12345,
                    "broadband": 222,
                    "province_code":"010",
                    "iptv": 2123,
                    "telephone": 2123,
                    "otheruser": 2123,
                    "billuser": 2123,
                    "arpu": 2123,
                    "cbinnetmonth": 2222,
                    "cbinnetday": 2222,
                    "cbfrontinnetmonth": 2222,
                    "cbfrontinnetday": 2222,
                    "woinnetmonth": 2222,
                    "woinnetday": 2222,
                    "otherinnetmonth": 2222,
                    "otherinnetday": 2222,
                }
            },
            {
                "name": "河北", //名称
                "value": {
                    "usercount": Mock.mock('@integer(1000, 20000)'),
                    "mobile": 12345,
                    "broadband": 222,
                    "province_code":"010",
                    "iptv": 2123,
                    "telephone": 2123,
                    "otheruser": 2123,
                    "billuser": 2123,
                    "arpu": 2123,
                    "cbinnetmonth": 2222,
                    "cbinnetday": 2222,
                    "cbfrontinnetmonth": 2222,
                    "cbfrontinnetday": 2222,
                    "woinnetmonth": 2222,
                    "woinnetday": 2222,
                    "otherinnetmonth": 2222,
                    "otherinnetday": 2222,
                }
            },
            {
                "name": "山西", //名称
                "value": {
                    "usercount": Mock.mock('@integer(1000, 20000)'),
                    "mobile": 12345,
                    "broadband": 222,
                    "province_code":"010",
                    "iptv": 2123,
                    "telephone": 2123,
                    "otheruser": 2123,
                    "billuser": 2123,
                    "arpu": 2123,
                    "cbinnetmonth": 2222,
                    "cbinnetday": 2222,
                    "cbfrontinnetmonth": 2222,
                    "cbfrontinnetday": 2222,
                    "woinnetmonth": 2222,
                    "woinnetday": 2222,
                    "otherinnetmonth": 2222,
                    "otherinnetday": 2222,
                }
            },
            {
                "name": "安徽", //名称
                "value": {
                    "usercount": Mock.mock('@integer(1000, 20000)'),
                    "mobile": 12345,
                    "broadband": 222,
                    "province_code":"010",
                    "iptv": 2123,
                    "telephone": 2123,
                    "otheruser": 2123,
                    "billuser": 2123,
                    "arpu": 2123,
                    "cbinnetmonth": 2222,
                    "cbinnetday": 2222,
                    "cbfrontinnetmonth": 2222,
                    "cbfrontinnetday": 2222,
                    "woinnetmonth": 2222,
                    "woinnetday": 2222,
                    "otherinnetmonth": 2222,
                    "otherinnetday": 2222,
                }
            },
            {
                "name": "上海", //名称
                "value": {
                    "usercount": Mock.mock('@integer(1000, 20000)'),
                    "mobile": 12345,
                    "broadband": 222,
                    "province_code":"010",
                    "iptv": 2123,
                    "telephone": 2123,
                    "otheruser": 2123,
                    "billuser": 2123,
                    "arpu": 2123,
                    "cbinnetmonth": 2222,
                    "cbinnetday": 2222,
                    "cbfrontinnetmonth": 2222,
                    "cbfrontinnetday": 2222,
                    "woinnetmonth": 2222,
                    "woinnetday": 2222,
                    "otherinnetmonth": 2222,
                    "otherinnetday": 2222,
                }
            },
            {
                "name": "江苏", //名称
                "value": {
                    "usercount": Mock.mock('@integer(1000, 20000)'),
                    "mobile": 12345,
                    "broadband": 222,
                    "province_code":"010",
                    "iptv": 2123,
                    "telephone": 2123,
                    "otheruser": 2123,
                    "billuser": 2123,
                    "arpu": 2123,
                    "cbinnetmonth": 2222,
                    "cbinnetday": 2222,
                    "cbfrontinnetmonth": 2222,
                    "cbfrontinnetday": 2222,
                    "woinnetmonth": 2222,
                    "woinnetday": 2222,
                    "otherinnetmonth": 2222,
                    "otherinnetday": 2222,
                }
            },
            {
                "name": "浙江", //名称
                "value": {
                    "usercount": Mock.mock('@integer(1000, 20000)'),
                    "mobile": 12345,
                    "broadband": 222,
                    "province_code":"010",
                    "iptv": 2123,
                    "telephone": 2123,
                    "otheruser": 2123,
                    "billuser": 2123,
                    "arpu": 2123,
                    "cbinnetmonth": 2222,
                    "cbinnetday": 2222,
                    "cbfrontinnetmonth": 2222,
                    "cbfrontinnetday": 2222,
                    "woinnetmonth": 2222,
                    "woinnetday": 2222,
                    "otherinnetmonth": 2222,
                    "otherinnetday": 2222,
                }
            },
            {
                "name": "福建", //名称
                "value": {
                    "usercount": Mock.mock('@integer(1000, 20000)'),
                    "mobile": 12345,
                    "broadband": 222,
                    "province_code":"010",
                    "iptv": 2123,
                    "telephone": 2123,
                    "otheruser": 2123,
                    "billuser": 2123,
                    "arpu": 2123,
                    "cbinnetmonth": 2222,
                    "cbinnetday": 2222,
                    "cbfrontinnetmonth": 2222,
                    "cbfrontinnetday": 2222,
                    "woinnetmonth": 2222,
                    "woinnetday": 2222,
                    "otherinnetmonth": 2222,
                    "otherinnetday": 2222,
                }
            },
            {
                "name": "海南", //名称
                "value": {
                    "usercount": Mock.mock('@integer(1000, 20000)'),
                    "mobile": 12345,
                    "broadband": 222,
                    "province_code":"010",
                    "iptv": 2123,
                    "telephone": 2123,
                    "otheruser": 2123,
                    "billuser": 2123,
                    "arpu": 2123,
                    "cbinnetmonth": 2222,
                    "cbinnetday": 2222,
                    "cbfrontinnetmonth": 2222,
                    "cbfrontinnetday": 2222,
                    "woinnetmonth": 2222,
                    "woinnetday": 2222,
                    "otherinnetmonth": 2222,
                    "otherinnetday": 2222,
                }
            },
            {
                "name": "广东", //名称
                "value": {
                    "usercount": Mock.mock('@integer(1000, 20000)'),
                    "mobile": 12345,
                    "broadband": 222,
                    "province_code":"010",
                    "iptv": 2123,
                    "telephone": 2123,
                    "otheruser": 2123,
                    "billuser": 2123,
                    "arpu": 2123,
                    "cbinnetmonth": 2222,
                    "cbinnetday": 2222,
                    "cbfrontinnetmonth": 2222,
                    "cbfrontinnetday": 2222,
                    "woinnetmonth": 2222,
                    "woinnetday": 2222,
                    "otherinnetmonth": 2222,
                    "otherinnetday": 2222,
                }
            },
            {
                "name": "广西", //名称
                "value": {
                    "usercount": Mock.mock('@integer(1000, 20000)'),
                    "mobile": 12345,
                    "broadband": 222,
                    "province_code":"010",
                    "iptv": 2123,
                    "telephone": 2123,
                    "otheruser": 2123,
                    "billuser": 2123,
                    "arpu": 2123,
                    "cbinnetmonth": 2222,
                    "cbinnetday": 2222,
                    "cbfrontinnetmonth": 2222,
                    "cbfrontinnetday": 2222,
                    "woinnetmonth": 2222,
                    "woinnetday": 2222,
                    "otherinnetmonth": 2222,
                    "otherinnetday": 2222,
                }
            },
            {
                "name": "青海", //名称
                "value": {
                    "usercount": Mock.mock('@integer(1000, 20000)'),
                    "mobile": 12345,
                    "broadband": 222,
                    "province_code":"010",
                    "iptv": 2123,
                    "telephone": 2123,
                    "otheruser": 2123,
                    "billuser": 2123,
                    "arpu": 2123,
                    "cbinnetmonth": 2222,
                    "cbinnetday": 2222,
                    "cbfrontinnetmonth": 2222,
                    "cbfrontinnetday": 2222,
                    "woinnetmonth": 2222,
                    "woinnetday": 2222,
                    "otherinnetmonth": 2222,
                    "otherinnetday": 2222,
                }
            },
            {
                "name": "湖北", //名称
                "value": {
                    "usercount": Mock.mock('@integer(1000, 20000)'),
                    "mobile": 12345,
                    "broadband": 222,
                    "province_code":"010",
                    "iptv": 2123,
                    "telephone": 2123,
                    "otheruser": 2123,
                    "billuser": 2123,
                    "arpu": 2123,
                    "cbinnetmonth": 2222,
                    "cbinnetday": 2222,
                    "cbfrontinnetmonth": 2222,
                    "cbfrontinnetday": 2222,
                    "woinnetmonth": 2222,
                    "woinnetday": 2222,
                    "otherinnetmonth": 2222,
                    "otherinnetday": 2222,
                }
            },
            {
                "name": "湖南", //名称
                "value": {
                    "usercount": Mock.mock('@integer(1000, 20000)'),
                    "mobile": 12345,
                    "broadband": 222,
                    "province_code":"010",
                    "iptv": 2123,
                    "telephone": 2123,
                    "otheruser": 2123,
                    "billuser": 2123,
                    "arpu": 2123,
                    "cbinnetmonth": 2222,
                    "cbinnetday": 2222,
                    "cbfrontinnetmonth": 2222,
                    "cbfrontinnetday": 2222,
                    "woinnetmonth": 2222,
                    "woinnetday": 2222,
                    "otherinnetmonth": 2222,
                    "otherinnetday": 2222,
                }
            },
            {
                "name": "江西", //名称
                "value": {
                    "usercount": Mock.mock('@integer(1000, 20000)'),
                    "mobile": 12345,
                    "broadband": 222,
                    "province_code":"010",
                    "iptv": 2123,
                    "telephone": 2123,
                    "otheruser": 2123,
                    "billuser": 2123,
                    "arpu": 2123,
                    "cbinnetmonth": 2222,
                    "cbinnetday": 2222,
                    "cbfrontinnetmonth": 2222,
                    "cbfrontinnetday": 2222,
                    "woinnetmonth": 2222,
                    "woinnetday": 2222,
                    "otherinnetmonth": 2222,
                    "otherinnetday": 2222,
                }
            },
            {
                "name": "河南", //名称
                "value": {
                    "usercount": Mock.mock('@integer(1000, 20000)'),
                    "mobile": 12345,
                    "broadband": 222,
                    "province_code":"010",
                    "iptv": 2123,
                    "telephone": 2123,
                    "otheruser": 2123,
                    "billuser": 2123,
                    "arpu": 2123,
                    "cbinnetmonth": 2222,
                    "cbinnetday": 2222,
                    "cbfrontinnetmonth": 2222,
                    "cbfrontinnetday": 2222,
                    "woinnetmonth": 2222,
                    "woinnetday": 2222,
                    "otherinnetmonth": 2222,
                    "otherinnetday": 2222,
                }
            },
            {
                "name": "西藏", //名称
                "value": {
                    "usercount": Mock.mock('@integer(1000, 20000)'),
                    "mobile": 12345,
                    "broadband": 222,
                    "province_code":"010",
                    "iptv": 2123,
                    "telephone": 2123,
                    "otheruser": 2123,
                    "billuser": 2123,
                    "arpu": 2123,
                    "cbinnetmonth": 2222,
                    "cbinnetday": 2222,
                    "cbfrontinnetmonth": 2222,
                    "cbfrontinnetday": 2222,
                    "woinnetmonth": 2222,
                    "woinnetday": 2222,
                    "otherinnetmonth": 2222,
                    "otherinnetday": 2222,
                }
            },
            {
                "name": "四川", //名称
                "value": {
                    "usercount": Mock.mock('@integer(1000, 20000)'),
                    "mobile": 12345,
                    "broadband": 222,
                    "province_code":"010",
                    "iptv": 2123,
                    "telephone": 2123,
                    "otheruser": 2123,
                    "billuser": 2123,
                    "arpu": 2123,
                    "cbinnetmonth": 2222,
                    "cbinnetday": 2222,
                    "cbfrontinnetmonth": 2222,
                    "cbfrontinnetday": 2222,
                    "woinnetmonth": 2222,
                    "woinnetday": 2222,
                    "otherinnetmonth": 2222,
                    "otherinnetday": 2222,
                }
            },
            {
                "name": "重庆", //名称
                "value": {
                    "usercount": Mock.mock('@integer(1000, 20000)'),
                    "mobile": 12345,
                    "broadband": 222,
                    "province_code":"010",
                    "iptv": 2123,
                    "telephone": 2123,
                    "otheruser": 2123,
                    "billuser": 2123,
                    "arpu": 2123,
                    "cbinnetmonth": 2222,
                    "cbinnetday": 2222,
                    "cbfrontinnetmonth": 2222,
                    "cbfrontinnetday": 2222,
                    "woinnetmonth": 2222,
                    "woinnetday": 2222,
                    "otherinnetmonth": 2222,
                    "otherinnetday": 2222,
                }
            },
            {
                "name": "陕西", //名称
                "value": {
                    "usercount": Mock.mock('@integer(1000, 20000)'),
                    "mobile": 12345,
                    "broadband": 222,
                    "province_code":"010",
                    "iptv": 2123,
                    "telephone": 2123,
                    "otheruser": 2123,
                    "billuser": 2123,
                    "arpu": 2123,
                    "cbinnetmonth": 2222,
                    "cbinnetday": 2222,
                    "cbfrontinnetmonth": 2222,
                    "cbfrontinnetday": 2222,
                    "woinnetmonth": 2222,
                    "woinnetday": 2222,
                    "otherinnetmonth": 2222,
                    "otherinnetday": 2222,
                }
            },
            {
                "name": "贵州", //名称
                "value": {
                    "usercount": Mock.mock('@integer(1000, 20000)'),
                    "mobile": 12345,
                    "broadband": 222,
                    "province_code":"010",
                    "iptv": 2123,
                    "telephone": 2123,
                    "otheruser": 2123,
                    "billuser": 2123,
                    "arpu": 2123,
                    "cbinnetmonth": 2222,
                    "cbinnetday": 2222,
                    "cbfrontinnetmonth": 2222,
                    "cbfrontinnetday": 2222,
                    "woinnetmonth": 2222,
                    "woinnetday": 2222,
                    "otherinnetmonth": 2222,
                    "otherinnetday": 2222,
                }
            },
            {
                "name": "云南", //名称
                "value": {
                    "usercount": Mock.mock('@integer(1000, 20000)'),
                    "mobile": 12345,
                    "broadband": 222,
                    "province_code":"010",
                    "iptv": 2123,
                    "telephone": 2123,
                    "otheruser": 2123,
                    "billuser": 2123,
                    "arpu": 2123,
                    "cbinnetmonth": 2222,
                    "cbinnetday": 2222,
                    "cbfrontinnetmonth": 2222,
                    "cbfrontinnetday": 2222,
                    "woinnetmonth": 2222,
                    "woinnetday": 2222,
                    "otherinnetmonth": 2222,
                    "otherinnetday": 2222,
                }
            },
            {
                "name": "甘肃", //名称
                "value": {
                    "usercount": Mock.mock('@integer(1000, 20000)'),
                    "mobile": 12345,
                    "broadband": 222,
                    "province_code":"010",
                    "iptv": 2123,
                    "telephone": 2123,
                    "otheruser": 2123,
                    "billuser": 2123,
                    "arpu": 2123,
                    "cbinnetmonth": 2222,
                    "cbinnetday": 2222,
                    "cbfrontinnetmonth": 2222,
                    "cbfrontinnetday": 2222,
                    "woinnetmonth": 2222,
                    "woinnetday": 2222,
                    "otherinnetmonth": 2222,
                    "otherinnetday": 2222,
                }
            },
            {
                "name": "宁夏", //名称
                "value": {
                    "usercount": Mock.mock('@integer(1000, 20000)'),
                    "mobile": 12345,
                    "broadband": 222,
                    "province_code":"010",
                    "iptv": 2123,
                    "telephone": 2123,
                    "otheruser": 2123,
                    "billuser": 2123,
                    "arpu": 2123,
                    "cbinnetmonth": 2222,
                    "cbinnetday": 2222,
                    "cbfrontinnetmonth": 2222,
                    "cbfrontinnetday": 2222,
                    "woinnetmonth": 2222,
                    "woinnetday": 2222,
                    "otherinnetmonth": 2222,
                    "otherinnetday": 2222,
                }
            },
            {
                "name": "新疆", //名称
                "value": {
                    "usercount": Mock.mock('@integer(1000, 20000)'),
                    "mobile": 12345,
                    "broadband": 222,
                    "province_code":"010",
                    "iptv": 2123,
                    "telephone": 2123,
                    "otheruser": 2123,
                    "billuser": 2123,
                    "arpu": 2123,
                    "cbinnetmonth": 2222,
                    "cbinnetday": 2222,
                    "cbfrontinnetmonth": 2222,
                    "cbfrontinnetday": 2222,
                    "woinnetmonth": 2222,
                    "woinnetday": 2222,
                    "otherinnetmonth": 2222,
                    "otherinnetday": 2222,
                }
            },
            {
                "name": "吉林", //名称
                "value": {
                    "usercount": Mock.mock('@integer(1000, 20000)'),
                    "mobile": 12345,
                    "broadband": 222,
                    "province_code":"010",
                    "iptv": 2123,
                    "telephone": 2123,
                    "otheruser": 2123,
                    "billuser": 2123,
                    "arpu": 2123,
                    "cbinnetmonth": 2222,
                    "cbinnetday": 2222,
                    "cbfrontinnetmonth": 2222,
                    "cbfrontinnetday": 2222,
                    "woinnetmonth": 2222,
                    "woinnetday": 2222,
                    "otherinnetmonth": 2222,
                    "otherinnetday": 2222,
                }
            },
            {
                "name": "辽宁", //名称
                "value": {
                    "usercount": Mock.mock('@integer(1000, 20000)'),
                    "mobile": 12345,
                    "broadband": 222,
                    "province_code":"010",
                    "iptv": 2123,
                    "telephone": 2123,
                    "otheruser": 2123,
                    "billuser": 2123,
                    "arpu": 2123,
                    "cbinnetmonth": 2222,
                    "cbinnetday": 2222,
                    "cbfrontinnetmonth": 2222,
                    "cbfrontinnetday": 2222,
                    "woinnetmonth": 2222,
                    "woinnetday": 2222,
                    "otherinnetmonth": 2222,
                    "otherinnetday": 2222,
                }
            },
            {
                "name": "黑龙江", //名称
                "value": {
                    "usercount": Mock.mock('@integer(1000, 20000)'),
                    "mobile": 12345,
                    "broadband": 222,
                    "province_code":"010",
                    "iptv": 2123,
                    "telephone": 2123,
                    "otheruser": 2123,
                    "billuser": 2123,
                    "arpu": 2123,
                    "cbinnetmonth": 2222,
                    "cbinnetday": 2222,
                    "cbfrontinnetmonth": 2222,
                    "cbfrontinnetday": 2222,
                    "woinnetmonth": 2222,
                    "woinnetday": 2222,
                    "otherinnetmonth": 2222,
                    "otherinnetday": 2222,
                }
            },

        ]
    }
}
const module1Data = function() {
    return {
        "code": 200,
        "data": {
            "userCount": 410000000,
            "onlineCount": 1900,
            "todayCount": 302900,
            "lastDayPercent": -0.68,
            "lastSevenPercent": 0.5
        }
    }
}

const module3Data = function() {
    return {
        code: "200", //类型：String  必有字段  备注：状态码
        "message": "操作成功", //类型：String  必有字段  备注：返回文本信息
        data: [{ value: 10, name: '移网' },
            { value: 5, name: '宽带' },
            { value: 20, name: 'iptv' },
            { value: 15, name: '固话' },
            { value: 25, name: '其它' },
        ]
    }
}

const module5Data = function() {
    return {
        "code": 200, //类型：String  必有字段  备注：状态码
        "message": "操作成功", //类型：String  必有字段  备注：返回文本信息
        "data": [ //类型：Array  必有字段  备注：返回数据集合
            { "name": "呼和浩特市", "value": { "usercount": 2223, "arpu": 2333 } },
            { "name": "包头市", "value": { "usercount": 2223, "arpu": 2333 } },
            { "name": "乌海市", "value": { "usercount": 2223, "arpu": 2333 } },
            { "name": "赤峰市", "value": { "usercount": 2223, "arpu": 2333 } },
            { "name": "通辽市", "value": { "usercount": 2223, "arpu": 2333 } },
            { "name": "鄂尔多斯市", "value": { "usercount": 22123, "arpu": 2333 } },
            { "name": "呼伦贝尔市", "value": { "usercount": 223, "arpu": 2333 } },
            { "name": "巴彦淖尔市", "value": { "usercount": 2223, "arpu": 2333 } },
            { "name": "呼和浩特市", "value": { "usercount": 2223, "arpu": 2333 } },
            { "name": "包头市", "value": { "usercount": 2223, "arpu": 2333 } },
            { "name": "呼和浩特市", "value": { "usercount": 2223, "arpu": 2333 } },
            { "name": "包头市", "value": { "usercount": 2223, "arpu": 2333 } },
            { "name": "乌海市", "value": { "usercount": 323, "arpu": 133 } },
            { "name": "赤峰市", "value": { "usercount": 2223, "arpu": 2333 } },
            { "name": "通辽市", "value": { "usercount": 2223, "arpu": 633 } },
            { "name": "鄂尔多斯市", "value": { "usercount": 2223, "arpu": 2333 } },
            { "name": "呼伦贝尔市", "value": { "usercount": 70923, "arpu": 2333 } },
            { "name": "巴彦淖尔市", "value": { "usercount": 2223, "arpu": 2333 } },
            { "name": "呼和浩特市", "value": { "usercount": 8003, "arpu": 2333 } },
            { "name": "包头市", "value": { "usercount": 2223, "arpu": 2333 } },
            { "name": "呼和浩特市", "value": { "usercount": 12223, "arpu": 2333 } },
            { "name": "包头市", "value": { "usercount": 2223, "arpu": 2333 } },
            { "name": "乌海市", "value": { "usercount": 2223, "arpu": 2333 } },
            { "name": "赤峰市", "value": { "usercount": 2223, "arpu": 2333 } },
            { "name": "克孜勒苏柯尔克孜", "value": { "usercount": 122223, "arpu": 2333 } },
        ],
    }
}
const module6Data = function() {
    // let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    //     arr2 = [100, 30, 40, 50, 80, 100, 30, 40, 50, 80, 200, 400]
    return {
        "code": 200, //类型：String  必有字段  备注：状态码
        "message": "操作成功", //类型：String  必有字段  备注：返回文本信息
        "data": [ //类型：Array  必有字段  备注：返回数据集合
            {
                'name': '营业厅订单',
                'value': [
                    { 'date': ' 2020-01-01', 'malltrade': 2421422 },
                    { 'date': ' 2020-01-02', 'malltrade': 242122 },
                    { 'date': ' 2020-01-03', 'malltrade': 2426622 },
                    { 'date': ' 2020-01-04', 'malltrade': 241422 },
                    { 'date': ' 2020-01-05', 'malltrade': 4421422 },
                    { 'date': ' 2020-01-06', 'malltrade': 6421422 },
                ]
            },
            {
                'name': '外围订单',
                'value': [
                    { 'date': ' 2020-01-07', 'malltrade': 2422 },
                    { 'date': ' 2020-01-08', 'malltrade': 2782 },
                    { 'date': ' 2020-01-09', 'malltrade': 6622 },
                    { 'date': ' 2020-01-10', 'malltrade': 422 },
                    { 'date': ' 2020-01-11', 'malltrade': 4482 },
                    { 'date': ' 2020-01-12', 'malltrade': 11422 },
                ]
            },
        ]
    }
    // {
    //     code: "200", //类型：String  必有字段  备注：状态码
    //     "message": "操作成功", //类型：String  必有字段  备注：返回文本信息
    //     data: {
    //         externalX: arr1,
    //         externalY: arr2
    //     }
    // }
}
const module7Data = function() {
    return {
        "code": 200,
        "message": "操作成功",
        "data": [{
            "name": "全国",
            "value": {
                "order5g": "12345", //5G订购数
                "crossuser": "12345", //跨域用户数
                "crossmixmenu": "222", // 跨域融合套餐数
                "crossmixuser": "2123", // 跨域融合用户数
                "portability": "2123", // 携号转网
                "portabilityIn": "2123", // 携入数
                "portabilityOut": "2123" // 携出数
            }
        }]
    }
}
const module8Data = function() {
    // let fakeArrayA = []
    // let fakeArrayB = []
    // for (let i = 1; i <= 10; i++) {
    //     let newObj = {
    //         name: '热销产品' + String(i),
    //         number: String(i * 1000)
    //     }
    //     fakeArrayA.push(newObj)
    //     let newObjB = {
    //         name: '常用功能' + String(i),
    //         number: String(i * 10000)
    //     }
    //     fakeArrayB.push(newObjB)
    // }
    return {
        code: "200", //类型：String  必有字段  备注：状态码
        "message": "操作成功", //类型：String  必有字段  备注：返回文本信息
        data: [ // 类型：Array  必有字段  备注：返回数据集合
            {
                'name': '产品名称',
                'value': [
                    { 'ranking': 1, 'product_name': '腾讯大王卡', 'product_count': 12333 },
                    { 'ranking': 2, 'product_name': '腾讯大王卡', 'product_count': 12333 },
                    { 'ranking': 3, 'product_name': '腾讯大王卡', 'product_count': 12333 },
                    { 'ranking': 4, 'product_name': '腾讯大王卡', 'product_count': 12333 },
                    { 'ranking': 5, 'product_name': '腾讯大王卡', 'product_count': 12333 },
                    { 'ranking': 6, 'product_name': '腾讯大王卡', 'product_count': 12333 },
                    { 'ranking': 7, 'product_name': '腾讯大王卡', 'product_count': 12333 },
                    { 'ranking': 8, 'product_name': '腾讯大王卡', 'product_count': 12333 },
                    { 'ranking': 9, 'product_name': '腾讯大王卡', 'product_count': 12333 },
                    { 'ranking': 10, 'product_name': '腾讯大王卡', 'product_count': 12333 },
                ]
            },
            {
                'name': '常用功能',
                'value': [
                    { 'ranking': 1, 'function_name': '移网变更', 'function_count': 12333 },
                    { 'ranking': 2, 'function_name': '移网变更', 'function_count': 12333 },
                    { 'ranking': 3, 'function_name': '移网变更', 'function_count': 12333 },
                    { 'ranking': 4, 'function_name': '移网变更', 'function_count': 12333 },
                    { 'ranking': 5, 'function_name': '移网变更', 'function_count': 12333 },
                    { 'ranking': 6, 'function_name': '移网变更', 'function_count': 12333 },
                    { 'ranking': 7, 'function_name': '移网变更', 'function_count': 12333 },
                    { 'ranking': 8, 'function_name': '移网变更', 'function_count': 12333 },
                    { 'ranking': 9, 'function_name': '移网变更', 'function_count': 12333 },
                    { 'ranking': 10, 'function_name': '移网变更', 'function_count': 12333 },
                ]
            }
        ]
        // {
        //     hot: fakeArrayA,
        //     normal: fakeArrayB
        // }
    }
}

Mock.mock('/queryOtherCountByProvince', 'get', bigData);
Mock.mock('/api/getModule1', 'get', module1Data);
Mock.mock('/queryUserCountByProvince', 'get', module5Data);
Mock.mock('/api/getModule6', 'get', module6Data);
Mock.mock('/queryMainCountByProvince', 'get', module7Data);
Mock.mock('/queryTop10', 'get', module8Data);