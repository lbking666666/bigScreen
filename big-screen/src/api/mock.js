// 引入mockjs
const Mock = require('mockjs');
//全国新增内部员工量
const addAreaUser = function() {
    return {
        code: "200", //类型：String  必有字段  备注：状态码
        "message": "操作成功", //类型：String  必有字段  备注：返回文本信息
        data: Mock.mock({ //类型：Object  必有字段  备注：返回数据对象
            "list|20": [ //类型：Array  必有字段  备注：内部员工数组
                { //类型：Object  必有字段  备注：无
                    addNum: Mock.mock('@integer(1, 20)'), //类型：String  必有字段  备注：新增内部员工数
                    objDate: Mock.mock("@date('MM/dd')"), //类型：String  必有字段  备注：业务日期
                    areaName: Mock.mock("@city"), //类型：String  必有字段  备注：区域名称
                    areaCode: "3401" //类型：String  必有字段  备注：区域编码
                }
            ]
        })
    }
}

//全国新增外部客户量接口
const addAreaExternal = function() {
    return {
        code: "200", //类型：String  必有字段  备注：状态码
        "message": "操作成功", //类型：String  必有字段  备注：返回文本信息
        data: Mock.mock({ //类型：Object  必有字段  备注：返回数据对象
            "list|20": [ //类型：Array  必有字段  备注：内部员工数组
                { //类型：Object  必有字段  备注：无
                    addNum: Mock.mock('@integer(1, 20)'), //类型：String  必有字段  备注：新增内部员工数
                    objDate: Mock.mock("@date('MM/dd')"), //类型：String  必有字段  备注：业务日期
                    areaName: Mock.mock("@city"), //类型：String  必有字段  备注：区域名称
                    areaCode: "3401" //类型：String  必有字段  备注：区域编码
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
        code: "200", //类型：String  必有字段  备注：状态码
        "message": "操作成功", //类型：String  必有字段  备注：返回文本信息
        data: Mock.mock({ //类型：Object  必有字段  备注：返回数据对象
            "list|20": [ //类型：Array  必有字段  备注：内部员工数组
                { //类型：Object  必有字段  备注：无
                    num: Mock.mock('@integer(1, 20)'), //类型：String  必有字段  备注：新增内部员工数
                    areaName: Mock.mock("@city"), //类型：String  必有字段  备注：区域名称
                    areaCode: "3401" //类型：String  必有字段  备注：区域编码
                }
            ]
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