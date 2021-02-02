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
                    "province_code": "010",
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
                    "province_code": "010",
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
                    "province_code": "010",
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
                    "province_code": "010",
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
                    "province_code": "010",
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
                    "province_code": "010",
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
                    "province_code": "010",
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
                    "province_code": "010",
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
                    "province_code": "010",
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
                    "province_code": "010",
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
                    "province_code": "010",
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
                    "province_code": "010",
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
                    "province_code": "010",
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
                    "province_code": "010",
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
                    "province_code": "010",
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
                    "province_code": "010",
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
                    "province_code": "010",
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
                    "province_code": "010",
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
                    "province_code": "010",
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
                    "province_code": "010",
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
                    "province_code": "010",
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
                    "province_code": "010",
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
                    "province_code": "010",
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
                    "province_code": "010",
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
                    "province_code": "010",
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
                    "province_code": "010",
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
                    "province_code": "010",
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
                    "province_code": "010",
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
                    "province_code": "010",
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
                    "province_code": "010",
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
                    "province_code": "010",
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
                    "province_code": "010",
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
            {
                "name": "呼和浩特市",
                "value": "{usercount=2375827, arpu=69.19}"
            },
            {
                "name": "包头市",
                "value": "{usercount=1828148, arpu=39.34}"
            },
            {
                "name": "乌海市",
                "value": "{usercount=335890, arpu=40.11}"
            },
            {
                "name": "赤峰市",
                "value": "{usercount=2238088, arpu=34.76}"
            },
            {
                "name": "兴安盟",
                "value": "{usercount=807320, arpu=45.71}"
            },
            {
                "name": "通辽市",
                "value": "{usercount=1467403, arpu=39.70}"
            },
            {
                "name": "呼伦贝尔市",
                "value": "{usercount=1435050, arpu=37.96}"
            },
            {
                "name": "锡林郭勒盟",
                "value": "{usercount=614054, arpu=35.16}"
            },
            {
                "name": "乌兰察布市",
                "value": "{usercount=921445, arpu=44.42}"
            },
            {
                "name": "鄂尔多斯市",
                "value": "{usercount=936618, arpu=58.88}"
            },
            {
                "name": "巴彦淖尔市",
                "value": "{usercount=928297, arpu=38.12}"
            },
            {
                "name": "阿拉善盟",
                "value": "{usercount=167316, arpu=67.35}"
            },
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
            /*{
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
            }*/
        ]
        // {
        //     hot: fakeArrayA,
        //     normal: fakeArrayB
        // }
    }
}

const AI_Billing_00002_Data = function() {
    return {
        "code": 200,
        "msg": "获取数据成功",
        "data": { "day": [{ "user_num": 7485981, "item_code": "1001", "bill_fee": 43133.67, "item_name": "月固定费" }, { "user_num": 791471, "item_code": "1002", "bill_fee": 2939.96, "item_name": "增值业务费" }, { "user_num": 1020667, "item_code": "1005", "bill_fee": 135.06, "item_name": "语音通话费" }, { "user_num": 970992, "item_code": "1009", "bill_fee": 120.26, "item_name": "上网费" }, { "user_num": 10409, "item_code": "1007", "bill_fee": 91.64, "item_name": "调增减项" }, { "user_num": 11, "item_code": "1006", "bill_fee": 0.04, "item_name": "违约金" }, { "user_num": 102, "item_code": "1008", "bill_fee": 0.00, "item_name": "可视电话费" }] }
    }
}
const getAI_Billing_00003_YMD = function() {
    return { "msg": "获取数据成功", "code": "200", "data": [{ "day": [{ "user_num": "3089", "bill_fee": "275878.59", "product_id": "90657927", "product_name": "4G畅爽冰激凌国内流量套餐-99元/月（放心用版）" }, { "user_num": "10344", "bill_fee": "527130.24", "product_id": "90063345", "product_name": "腾讯大王卡" }, { "user_num": "7352", "bill_fee": "629992.88", "product_id": "90356341", "product_name": "4G畅爽冰激凌国内流量套餐-99元/月" }, { "user_num": "7365", "bill_fee": "836369.40", "product_id": "90657326", "product_name": "畅爽冰激凌5G套餐129元" }, { "user_num": "2735", "bill_fee": "315509.60", "product_id": "90356344", "product_name": "4G畅爽冰激凌国内流量套餐-129元/月" }] }] }
}

const queryTop10Data = function() {
    return { "code": 200, "data": [{ "name": "产品名称", "value": [{ "ranking": "1", "product_name": "腾讯大王卡", "product_count": "88282" }, { "ranking": "2", "product_name": "5G副卡基本套餐(优享服务)", "product_count": "24759" }, { "ranking": "3", "product_name": "4G主副卡业务-语音副卡基本套餐", "product_count": "14252" }, { "ranking": "4", "product_name": "智慧沃家组合优化版（5G）", "product_count": "9271" }, { "ranking": "5", "product_name": "智慧到家-家庭组网业务", "product_count": "9144" }] }, { "name": "常用功能", "value": [{ "ranking": "1", "function_name": "移网产品/服务变更", "function_count": "2017470" }, { "ranking": "2", "function_name": "欠费半停机", "function_count": "1418592" }, { "ranking": "3", "function_name": "缴费开机", "function_count": "1414907" }, { "ranking": "4", "function_name": "中高端升降级", "function_count": "1399945" }, { "ranking": "5", "function_name": "高额半停机", "function_count": "748093" }] }], "message": "操作成功" }
}

const QueryOrderCountData = function() {
    return {
        "STATUS": "0000",
        "MSG": "服务调用成功！",
        "TXID": "TxidError0000!",
        "RSP": {
            "RSP_CODE": "0000",
            "RSP_DESC": "执行成功!",
            "SUB_CODE": "0000",
            "SUB_DESC": "执行成功!",
            "DATA": [
            { "portability": 1743612, "date": "2021", "crossuser": 70535, "portability_in": 479872, "portability_out": 1263740, "user2i": 901442, "user2i5g": 44, "order5g4t5": 5730, "order5g": 3626921, "province_code": "ZZ" },
            { "portability": 1743612, "date": "2021", "crossuser": 70535, "portability_in": 479872, "portability_out": 1263740, "user2i": 901442, "user2i5g": 44, "order5g4t5": 5730, "order5g": 3626921, "province_code": "ZZ" },
            { "portability": 1743612, "date": "2021", "crossuser": 70535, "portability_in": 479872, "portability_out": 1263740, "user2i": 901442, "user2i5g": 44, "order5g4t5": 5730, "order5g": 3626921, "province_code": "ZZ" },
            { "portability": 1743612, "date": "2021", "crossuser": 70535, "portability_in": 479872, "portability_out": 1263740, "user2i": 901442, "user2i5g": 44, "order5g4t5": 5730, "order5g": 3626921, "province_code": "ZZ" },
            { "portability": 1743612, "date": "2021", "crossuser": 70535, "portability_in": 479872, "portability_out": 1263740, "user2i": 901442, "user2i5g": 44, "order5g4t5": 5730, "order5g": 3626921, "province_code": "ZZ" },
            { "portability": 1743612, "date": "2021", "crossuser": 70535, "portability_in": 479872, "portability_out": 1263740, "user2i": 901442, "user2i5g": 44, "order5g4t5": 5730, "order5g": 3626921, "province_code": "ZZ" },
            { "portability": 1743612, "date": "2021", "crossuser": 70535, "portability_in": 479872, "portability_out": 1263740, "user2i": 901442, "user2i5g": 44, "order5g4t5": 5730, "order5g": 3626921, "province_code": "ZZ" },
            { "portability": 1743612, "date": "2021", "crossuser": 70535, "portability_in": 479872, "portability_out": 1263740, "user2i": 901442, "user2i5g": 44, "order5g4t5": 5730, "order5g": 3626921, "province_code": "ZZ" },
            { "portability": 1743612, "date": "2021", "crossuser": 70535, "portability_in": 479872, "portability_out": 1263740, "user2i": 901442, "user2i5g": 44, "order5g4t5": 5730, "order5g": 3626921, "province_code": "ZZ" },
            { "portability": 1743612, "date": "2021", "crossuser": 70535, "portability_in": 479872, "portability_out": 1263740, "user2i": 901442, "user2i5g": 44, "order5g4t5": 5730, "order5g": 3626921, "province_code": "ZZ" }
            ]
        }
    }
}
const yd_change_data = function(){
    return {"msg":"获取数据成功","code":"200","data":[{"day":[{"count":"5","province_code":"83","province_name":"重庆"},{"count":"335","province_code":"59","province_name":"广西"},{"count":"86","province_code":"89","province_name":"新疆"},{"count":"89","province_code":"85","province_name":"贵州"},{"count":"17","province_code":"86","province_name":"云南"},{"count":"12","province_code":"31","province_name":"上海"},{"count":"41","province_code":"18","province_name":"河北"},{"count":"640","province_code":"38","province_name":"福建"},{"count":"8","province_code":"84","province_name":"陕西"},{"count":"10","province_code":"88","province_name":"宁夏"},{"count":"23","province_code":"81","province_name":"四川"},{"count":"8","province_code":"74","province_name":"湖南"},{"count":"6","province_code":"13","province_name":"天津"},{"count":"9","province_code":"10","province_name":"内蒙古"},{"count":"311","province_code":"17","province_name":"山东"},{"count":"402","province_code":"97","province_name":"黑龙江"},{"count":"20","province_code":"71","province_name":"湖北"},{"count":"14","province_code":"87","province_name":"甘肃"},{"count":"10","province_code":"30","province_name":"安徽"},{"count":"42","province_code":"76","province_name":"河南"},{"count":"3","province_code":"50","province_name":"海南"},{"count":"5","province_code":"36","province_name":"浙江"},{"count":"20","province_code":"11","province_name":"北京"},{"count":"647","province_code":"75","province_name":"江西"},{"count":"19","province_code":"70","province_name":"青海"},{"count":"364","province_code":"51","province_name":"广东"},{"count":"38","province_code":"34","province_name":"江苏"},{"count":"190","province_code":"91","province_name":"辽宁"},{"count":"15","province_code":"90","province_name":"吉林"},{"count":"8","province_code":"19","province_name":"山西"},{"count":"3397","province_code":"ZZ","province_name":"全国"}]}]}
}
const yd_payment_data = function(){
    return {"msg":"获取数据成功","code":"200","data":[{"day":[{"count":"39152","province_code":"30","province_name":"安徽"},{"count":"178","province_code":"85","province_name":"贵州"},{"count":"119145","province_code":"91","province_name":"辽宁"},{"count":"110251","province_code":"38","province_name":"福建"},{"count":"43727","province_code":"51","province_name":"广东"},{"count":"538228","province_code":"34","province_name":"江苏"},{"count":"81316","province_code":"59","province_name":"广西"},{"count":"20587","province_code":"81","province_name":"四川"},{"count":"6045","province_code":"90","province_name":"吉林"},{"count":"2","province_code":"10","province_name":"内蒙古"},{"count":"4621","province_code":"87","province_name":"甘肃"},{"count":"78097","province_code":"71","province_name":"湖北"},{"count":"5222","province_code":"88","province_name":"宁夏"},{"count":"237","province_code":"74","province_name":"湖南"},{"count":"7332","province_code":"75","province_name":"江西"},{"count":"1093092","province_code":"17","province_name":"山东"},{"count":"45398","province_code":"76","province_name":"河南"},{"count":"82864","province_code":"31","province_name":"上海"},{"count":"41464","province_code":"84","province_name":"陕西"},{"count":"16","province_code":"18","province_name":"河北"},{"count":"225314","province_code":"19","province_name":"山西"},{"count":"27707","province_code":"89","province_name":"新疆"},{"count":"431","province_code":"79","province_name":"西藏"},{"count":"8483","province_code":"36","province_name":"浙江"},{"count":"69","province_code":"11","province_name":"北京"},{"count":"5062","province_code":"86","province_name":"云南"},{"count":"376198","province_code":"83","province_name":"重庆"},{"count":"89753","province_code":"50","province_name":"海南"},{"count":"147712","province_code":"13","province_name":"天津"},{"count":"80788","province_code":"97","province_name":"黑龙江"},{"count":"3278492","province_code":"ZZ","province_name":"全国"}]}]}

}
const yd_chg_card_data = function(){
    return {"msg":"获取数据成功","code":"200","data":[{"day":[{"count":"144","province_code":"34","province_name":"江苏"},{"count":"45","province_code":"90","province_name":"吉林"},{"count":"71","province_code":"85","province_name":"贵州"},{"count":"75","province_code":"91","province_name":"辽宁"},{"count":"368","province_code":"76","province_name":"河南"},{"count":"7","province_code":"79","province_name":"西藏"},{"count":"71","province_code":"75","province_name":"江西"},{"count":"133","province_code":"30","province_name":"安徽"},{"count":"101","province_code":"18","province_name":"河北"},{"count":"52","province_code":"19","province_name":"山西"},{"count":"30","province_code":"50","province_name":"海南"},{"count":"39","province_code":"10","province_name":"内蒙古"},{"count":"49","province_code":"86","province_name":"云南"},{"count":"318","province_code":"51","province_name":"广东"},{"count":"60","province_code":"31","province_name":"上海"},{"count":"47","province_code":"89","province_name":"新疆"},{"count":"116","province_code":"36","province_name":"浙江"},{"count":"68","province_code":"11","province_name":"北京"},{"count":"23","province_code":"13","province_name":"天津"},{"count":"139","province_code":"71","province_name":"湖北"},{"count":"65","province_code":"97","province_name":"黑龙江"},{"count":"180","province_code":"81","province_name":"四川"},{"count":"16","province_code":"88","province_name":"宁夏"},{"count":"102","province_code":"59","province_name":"广西"},{"count":"40","province_code":"83","province_name":"重庆"},{"count":"112","province_code":"17","province_name":"山东"},{"count":"86","province_code":"84","province_name":"陕西"},{"count":"17","province_code":"70","province_name":"青海"},{"count":"108","province_code":"74","province_name":"湖南"},{"count":"75","province_code":"38","province_name":"福建"},{"count":"53","province_code":"87","province_name":"甘肃"},{"count":"2810","province_code":"ZZ","province_name":"全国"}]}]}
}
Mock.mock(RegExp('/ITTest/queryOtherCountByProvince' + ".*"), 'get', bigData);
Mock.mock(RegExp('/ITTest/queryUserCountByProvince' + ".*"), 'get', module5Data);
Mock.mock(RegExp('/ITTest/queryCBSSTradeCount' + ".*"), 'get', module6Data);
Mock.mock(RegExp('/ITTest/queryCBSSMainCount' + ".*"), 'get', module7Data);

Mock.mock(RegExp('/ITTest/queryTop10ByProvince' + ".*"), 'get', queryTop10Data)
Mock.mock(RegExp('/ITTest/getAI_Billing_00003_YMD' + ".*"), 'get', getAI_Billing_00003_YMD)
Mock.mock(RegExp('/ITTest/AI_Billing_00002_Data' + ".*"), 'get', AI_Billing_00002_Data)
Mock.mock(RegExp('/ITTest/QueryOrderCount' + ".*"), 'get', QueryOrderCountData)


Mock.mock(RegExp('/ITTest/yd_payment' + ".*"), 'get', yd_payment_data)
Mock.mock(RegExp('/ITTest/yd_change' + ".*"), 'get', yd_change_data)
Mock.mock(RegExp('/ITTest/yd_chg_card' + ".*"), 'get', yd_chg_card_data)