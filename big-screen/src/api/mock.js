// 引入mockjs
const Mock = require('mockjs');
//首页
const addAreaUser = function() {
    return {
        code: "200", //类型：String  必有字段  备注：状态码
        "message": "操作成功", //类型：String  必有字段  备注：返回文本信息
        data: { //类型：Object  必有字段  备注：返回数据对象
            "list|20": [ //类型：Array  必有字段  备注：内部员工数组
                { //类型：Object  必有字段  备注：无
                    addNum: "'@integer(1, 20)'", //类型：String  必有字段  备注：新增内部员工数
                    objDate: "@date('MM/dd')", //类型：String  必有字段  备注：业务日期
                    areaName: "@city", //类型：String  必有字段  备注：区域名称
                    areaCode: "3401" //类型：String  必有字段  备注：区域编码
                }
            ]
        }
    }
}




Mock.mock('/screen/addAreaUser', 'get', addAreaUser);