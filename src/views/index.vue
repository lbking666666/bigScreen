<template>
  <div class="home">
    <div class="header">
      <div class="time-box">
        <div class="time-str" v-for="(item, index) in dateTimeStr" :key="index">{{item}}</div>
      </div>
      <div class="header-title">
        cBSS全景运营视图
      </div>
      <div class="time-selection">
        <span class="time-n">Time：</span>
        <span class="time-option" :class="timeIndex == 0 ? 'active' : ''" @click="checkTime(0)">日</span>
        <span class="time-option" :class="timeIndex == 1 ? 'active' : ''" @click="checkTime(1)">月</span>
        <span class="time-option" :class="timeIndex == 2 ? 'active' : ''" @click="checkTime(2)">年</span>
      </div>
    </div>
    <div class="container">
      <div class="left-box">
        <module1 :leftData="leftData" :moduleData="module1Data"></module1>
        <module2 :code="provinceCode" :moduleData="module2Data" :countStr="countStr"></module2>
        <module3 :moduleData="module3Data" :code="provinceCode" :list="dataList2"></module3>
        <module4 :moduleData="module4Data"></module4>
      </div>
      <div class="center-box">
        <div class="number-boxs">
          <div class="number-bord-box">
            <numberBord :title="'今日开户量'" :bordNumber="externalTotal" :setTime="setTime" />
          </div>
          <div class="number-bord-box">
            <numberBord :title="'今日缴费金额（万元）'" :bordNumber="externalAdd" :setTime="setTime" />
          </div>
        </div>
        <module5 @reName="selectName" :mapCity="mapCity" :mapCode="provinceCode" :mapData="mapData" :min="min" :max="max"></module5>
        <module6 :provinceName="provinceName" :moduleData="module6Data"></module6>
      </div>
      <div class="right-box">
        <!-- 重点业务场景 -->
        <module7 :moduleData="module7Data" :pop1="pop1List" :pop2="pop2List" :pop3="pop3List" :pop4="pop4List"></module7>
        <!-- 热销产品/常用功能TOP3 -->
        <module8 :moduleData="module8Data"></module8>
        <module9 :list1="list1" :list2="list2"></module9>
      </div>
    </div>
  </div>
</template>
<script>
let now = new Date()
let month = Number(now.getMonth() + 1)
let monthLen = String(month).length
let month_num = (monthLen > 1) ? month : 0 + String(month)
let day = now.getDate()
let dayLen = String(day).length;
let day_num = (dayLen > 1) ? day : 0 + String(day)
import module1 from '@/components/module1.vue';
import module2 from '@/components/module2.vue';
import module3 from '@/components/module3.vue';
import module4 from '@/components/module4.vue';
import module5 from '@/components/module5.vue';
import module6 from '@/components/module6.vue';
import module7 from '@/components/module7.vue';
import module8 from '@/components/module8-B.vue';
import module9 from '@/components/module9.vue';
import {
  AI_Cz_Users,
  AI_Cz_Process_Card,
  AI_Billing,
  Trade,
  Openbusi,
  getBigData,
  ServiceOrder,
  AI_Credit,
  AI_Produce,
  AsynOpen,
  getMapData,
  queryUserCountByProvince,
  queryOrderCount,
  queryTop10ByProvince,
  AI_Billing_00003_YMD,
  AI_Billing_00002_YMD,
  yd_payment,
  yd_change,
  yd_chg_card

} from '@/api/index.js';
import numberBord from '@/components/numberBord.vue';
// import { geAllData, getMapData, getModule6, getModule7, getModule8,getModule9, getBigData ,AI_Cz_Users} from '@/api/index.js';
import { timestampConversion } from '@/utils/unixToTime.js'
export default {
  name: 'index',
  components: {
    module1,
    module2,
    module3,
    module4,
    module5,
    module6,
    module7,
    module8,
    module9,
    numberBord
  },
  data() {
    return {
      provinceCode: 'ZZ',
      totalServer: 0,
      serverNum: 0,
      module1Data: {},
      module2Data: {},
      module3Data: [],
      dataList2: [],
      module4Data: [],
      module6Data: [],
      module7Data: {},
      pop1List: [],
      pop2List: [],
      pop3List: [],
      pop4List: [],
      module8Data: [],
      list1: [],
      list2: [],
      module9Data: [],
      mapData: [],
      sqltype: 'day',
      min: 0,
      max: 100,
      provinceName: '全国',
      mapCity: "全国",
      leftData: 0,
      leftdata1: 0,
      nowTime: (new Date()).getTime() / 1000,
      dateTimeStr: timestampConversion((new Date()).getTime() / 1000).split(''),
      timeIndex: 0, // 0: 日; 1: 月; 2: 年;
      setTime: false,
      date: now.getFullYear() + '-' + month_num + '-' + day_num,
      externalTotal: 0,
      dateB: 'H',
      startDate: now.getFullYear() + '-' + month_num + '-' + day_num + '-00',
      endDate: now.getFullYear() + '-' + month_num + '-' + day_num + '-' + now.getHours(),
      externalAdd: 0,
      mapOrign: {
        "内蒙古": 10,
        "北京": 11,
        "天津": 13,
        "山东": 17,
        "河北": 18,
        "山西": 19,
        "安徽": 30,
        "上海": 31,
        "江苏": 34,
        "浙江": 36,
        "福建": 38,
        "海南": 50,
        "广东": 51,
        "广西": 59,
        "青海": 70,
        "湖北": 71,
        "湖南": 74,
        "江西": 75,
        "河南": 76,
        "西藏": 79,
        "四川": 81,
        "重庆": 83,
        "陕西": 84,
        "贵州": 85,
        "云南": 86,
        "甘肃": 87,
        "宁夏": 88,
        "新疆": 89,
        "吉林": 90,
        "辽宁": 91,
        "黑龙江": 97
      },
      mapOrignCode: {
        "内蒙古": 150000,
        "北京": 110000,
        "天津": 120000,
        "山东": 370000,
        "河北": 130000,
        "山西": 140000,
        "安徽": 340000,
        "上海": 310000,
        "江苏": 320000,
        "浙江": 330000,
        "福建": 350000,
        "海南": 460000,
        "广东": 440000,
        "广西": 450000,
        "青海": 630000,
        "湖北": 420000,
        "湖南": 430000,
        "江西": 360000,
        "河南": 410000,
        "西藏": 540000,
        "四川": 510000,
        "重庆": 500000,
        "陕西": 610000,
        "贵州": 520000,
        "云南": 530000,
        "甘肃": 620000,
        "宁夏": 640000,
        "新疆": 650000,
        "吉林": 220000,
        "辽宁": 210000,
        "黑龙江": 230000
      }

    }
  },
  created() {
    let loginId = this.$route.query.loginId;
    let code = this.$route.query.code || (loginId && loginId.split('_')[0])
    let area_id = this.$route.query.area_id;
    if (code) {
      this.provinceCode = code
      this.mapCity = this.findKey(this.mapOrign, Number(code))
      console.log(this.mapCity)
    } else if (area_id) {
      this.mapCity = this.findKey(this.mapOrignCode, Number(area_id))
      this.provinceCode = this.mapOrign[this.mapCity]
    } else {
      this.mapCity = "全国"
      this.getMapData()
    }
  },
  mounted() {
    this.getData()
    setInterval(() => {
      this.setTime = true
      this.getSetTime()
    }, 5000)
    setInterval(() => {
      this.serverQuer = true
    }, 300000)
    setInterval(() => {
      this.nowTime += 1
      this.dateTimeStr = timestampConversion(this.nowTime).split('')
    }, 1000)
  },
  methods: {
    findKey(obj, value, compare = (a, b) => a === b) {
      return Object.keys(obj).find(k => compare(obj[k], value))
    },
    checkTime(num) {
      this.timeIndex = num
      if (num == 0) {
        this.sqltype = 'day'
        this.dateB = 'H'
        this.date = now.getFullYear() + '-' + month_num + '-' + day_num;
        this.startDate = now.getFullYear() + '-' + month_num + '-' + day_num + '-00'
        this.endDate = now.getFullYear() + '-' + month_num + '-' + day_num + '-' + now.getHours()
      } else if (num == 1) {
        this.sqltype = 'month'
        this.dateB = 'D'
        this.date = now.getFullYear() + '-' + month_num
        this.startDate = now.getFullYear() + '-' + month_num + '-01'
        this.endDate = now.getFullYear() + '-' + month_num + '-' + day_num
      } else if (num == 2) {
        this.sqltype = 'year'
        this.dateB = 'M'
        this.date = now.getFullYear()
        this.startDate = now.getFullYear() + '-01'
        this.endDate = now.getFullYear() + '-' + month_num
      }
      this.getData()
      // 在这里执行切换整屏的数据
    },
    getSetTime() {
      //今日开户量
      this.AsynOpen()
      //概览-收入情况当月实时收入
      this.AI_Produce()
      //今日缴费金额
      this.AI_Billing()
      //重点业务场景
      this.getQueryOrderCount()
      //订单量
      this.Trade()
      //用户类型分布 新增
      this.Openbusi()
      //用户类型分布
      this.getBigData()
      //生产运营情况停机量开机量
      this.AI_Credit()
      //出账用户
      this.AI_Cz_Users()
      //上月出账金额
      this.AI_Cz_Process_Card()
      //热销产品/常用功能TOP5
      this.getQueryTop10ByProvince()
      //收入TOP5产品
      this.getAI_Billing_00003_YMD()
      //收入TOP5费用项
      this.getAI_Billing_00002_YMD()
      if (this.serverQuer == true) {
        //生产运营情况服务工单数
        this.ServiceOrder()
      } else {
        if (this.serverNum == 0) {
          this.module4Data.dataA = this.module4Data.dataA + 1
        } else {
          this.module4Data.dataA = this.module4Data.dataA + this.serverNum / 60
        }

      }
    },
    getData() {
      //出账用户
      this.AI_Cz_Users()
      //上月出账金额
      this.AI_Cz_Process_Card()
      // 今日缴费金额
      this.AI_Billing()
      //订单量
      this.Trade()
      //用户类型分布 新增
      this.Openbusi()
      //用户类型分布
      this.getBigData()
      //生产运营情况服务工单数
      this.ServiceOrder()
      //生产运营情况停机量开机量
      this.AI_Credit()
      //概览-收入情况当月实时收入
      this.AI_Produce()
      //今日开户量
      this.AsynOpen()
      //31省柱状图
      this.getQueryUserCountByProvince()
      //热销产品/常用功能TOP5
      this.getQueryTop10ByProvince()
      //重点业务场景
      this.getQueryOrderCount()
      //收入TOP5产品
      this.getAI_Billing_00003_YMD()
      //收入TOP5费用项
      this.getAI_Billing_00002_YMD()
    },
    //地图
    getMapData() {
      getMapData().then(res => {
        if (res.code == 200) {
          let list = []
          let sort = []
          res.data.forEach(item => {
            if (item.name !== '全国总量') {
              let values = item.value
              let params = {
                name: item.name,
                value: values.usercount,
                arpu: values.arpu,
                code: values.province_code
              }
              list.push(params)
              sort.push(values.usercount)
            }
          })
          sort.sort(function(a, b) {
            return a - b;
          });
          this.min = Number(sort[0])
          this.max = Number(sort[30])
          this.mapData = list
        }
      })
    },
    //在网用户
    // ...
    //出账用户
    AI_Cz_Users() {
      let params = { prov_code: this.provinceCode }
      AI_Cz_Users(params).then(res => {
        this.module1Data.AI_Cz_Users = res.data
      })
    },
    //上月出账金额
    AI_Cz_Process_Card() {
      let dateA = ''
      let dateB = ''
      let year = now.getFullYear()
      let month = ''
      let beforeMonth = ''
      if (now.getMonth() == 0) {
        month = '12'
        beforeMonth = '11'
        dateA = String(year - 1) + month
        dateB = String(year - 1) + beforeMonth
      } else if (now.getMonth() == 1) {
        month = '01'
        beforeMonth = '12'
        dateA = String(year) + month
        dateB = String(year - 1) + beforeMonth
      } else if (now.getMonth() == 10) {
        dateA = String(year) + '10'
        dateB = String(year) + '09'
      } else {
        if (now.getMonth() < 10) {
          month = '0' + String(now.getMonth())
          beforeMonth = '0' + String(now.getMonth() - 1)
          dateA = String(year) + month
          dateB = String(year) + beforeMonth
        } else {
          dateA = String(year) + String(now.getMonth())
          dateB = String(year) + String(now.getMonth() - 1)
        }
      }

      let paramsA = { prov_code: this.provinceCode, cycle: dateA }
      let paramsB = { prov_code: this.provinceCode, cycle: dateB }
      console.log(paramsA)
      AI_Cz_Process_Card(paramsA).then(res => {
        if (res.data.income > 0) {
          this.module1Data.AI_Cz_Process_Card = res.data.income
        } else {
          console.log(paramsB)
          AI_Cz_Process_Card(paramsB).then(resB => {
            this.module1Data.AI_Cz_Process_Card = resB.data.income
          })
        }
      })
    },
    //今日缴费金额
    AI_Billing() {
      let params = { prov_code: this.provinceCode }
      AI_Billing(params).then(res => {
        this.module1Data.AI_Billing = res.data.cb
      })
    },
    //订单量
    Trade() {
      //busi=00&date=H&end=2021-01-14-23&prov_code=ZZ&start=2021-01-14-00
      let params = {
        busi: '00',
        date: this.dateB,
        end: this.endDate,
        prov_code: this.provinceCode,
        start: this.startDate,
      }
      Trade(params).then(res => {
        if (this.dateB == 'H') {
          this.countStr = '万'
          this.module2Data = res.RSP.DATA
        } else if (this.dateB == 'D') {
          this.countStr = '千万'
          let list = []
          res.RSP.DATA.map(item => {
            let obj = {
              date: item.date.slice(5),
              ZZ: item.ZZ
            }
            list.push(obj)
          })
          this.module2Data = list
        } else {
          this.countStr = '千万'
          this.module2Data = res.RSP.DATA
        }

        // console.log(params, this.module2Data)
      })
    },
    //用户类型分布
    Openbusi() {
      //busi=A&city_code=0010&date=2021-01-14&prov_code=ZZ
      let params = {
        busi: 'A',
        date: this.date,
        prov_code: this.provinceCode,
      }
      Openbusi(params).then(res => {
        this.module3Data = res.RSP.DATA[0]
      })
    },
    //用户类型分布
    getBigData() {
      //busi=A&city_code=0010&date=2021-01-14&prov_code=ZZ
      let params = {
        provinceCode: this.provinceCode,
      }
      getBigData(params).then(res => {
        this.dataList2 = res.data[0]
        this.leftdata1 = Number(res.data[0].value.usercount)
      })
    },
    //生产运营情况 服务工单数
    ServiceOrder() {
      ServiceOrder().then(res => {
        this.module4Data.dataA = 0
        // 日的
        res.data[this.sqltype].map(dayObj => {
          if (this.provinceCode == dayObj.provinceCode) {
            //存储有值
            if (this.serverQuer) {
              this.module4Data.dataA = this.totalServer
              //五分钟直接数据差值
              this.serverNum = dayObj.serviceOrder - this.totalServer
              //新的数据值
              this.totalServer = dayObj.serviceOrder
              this.serverQuer = false
            } else {
              this.totalServer = dayObj.serviceOrder
              this.module4Data.dataA = this.totalServer - 60
            }
          }
        })
      })
    },
    //生产运营情况 停机量
    AI_Credit() {
      //prov_code=ZZ&sqltype=month
      let params = {
        prov_code: this.provinceCode,
        sqltype: this.sqltype,
      }
      AI_Credit(params).then(res => {
        if (res.data[this.sqltype]) {
          this.module4Data.dataB = res.data[this.sqltype].stopNum
          this.module4Data.dataC = res.data[this.sqltype].openNum
        }

      })
    },
    //今日缴费
    AI_Produce() {
      //prov_code=ZZ&sqltype=day
      let params = {
        prov_code: this.provinceCode,
        sqltype: 'day',
      }
      AI_Produce(params).then(res => {
        this.externalAdd = Number(Number(res.data['day'].pay_money).toFixed(0))
      })
    },
    //今日开户量
    AsynOpen() {
      //city_code=0010&date=2021-01-14&prov_code=ZZ
      let month = Number(now.getMonth() + 1)
      let monthLen = String(month).length
      let month_num = (monthLen > 1) ? month : 0 + String(month)
      let day = now.getDate()
      let dayLen = String(day).length;
      let day_num = (dayLen > 1) ? day : 0 + String(day)
      let params = {
        prov_code: this.provinceCode,
        date: now.getFullYear() + '-' + month_num + '-' + day_num,
      }
      AsynOpen(params).then(res => {
        this.externalTotal = res.RSP.DATA[0][this.provinceCode]
        this.leftData = this.leftdata1 + Number(this.externalTotal)
      })
    },
    //全国31省用户量/arpu值
    getQueryUserCountByProvince() {
      let params = {
        provinceCode: (this.provinceCode != 'ZZ') ? this.provinceCode : '00'
      }
      queryUserCountByProvince(params).then(res => {
        if (res.code == 200) {
          this.module6Data = []
          if (res.data.length > 0) { //判断是否返回数据且不为空
            let list = []
            res.data.map(item => {
              if (item.name != '全国总量') {
                let arr = item.value.split(',')
                let obj = {
                  areaName: item.name,
                  number: Number(arr[0].split('=')[1]),
                  arpu: Number(arr[1].split('=')[1].replace('}', ""))
                }
                list.push(obj)
              }
            })
            let arr = list.sort(function(a, b) { return b.number - a.number; })
            this.module6Data = arr
          }
        }
      })
    },
    //热销产品/常用功能TOP3
    getQueryTop10ByProvince() {
      let params = {
        prov_code: this.provinceCode,
        timeDimension: this.sqltype,
      }
      queryTop10ByProvince(params).then(res => {
        if (res.code == 200) {
          if (res.data.length > 0) {
            let list = []
            let arr1 = [],
              arr2 = []

            let max1 = res.data[0].value[0].product_count
            let max2 = res.data[1].value[0].function_count

            res.data[0].value.forEach(child => {
              let data = {
                name: child.product_name,
                num: child.product_count,
                percent: Number((child.product_count * 100 / max1).toFixed(0))
              }
              arr1.push(data)
            })
            res.data[1].value.forEach(child => {
              let data = {
                name: child.function_name,
                num: child.function_count,
                percent: Number((child.function_count * 100 / max2).toFixed(0))
              }
              arr2.push(data)
            })
            list = [{ list: arr1 }, { list: arr2 }]
            this.module8Data = list
          }
        }
      })
    },
    //重点业务
    getQueryOrderCount() {
      let params = {
        prov_code: this.provinceCode == 'ZZ' ? '' : this.provinceCode,
        timeDimension: this.sqltype
      }
      queryOrderCount(params).then(res => {
        Promise.all([this.getYdPayment(), this.getYdChange(), this.getYdChgCard()]).then((resData) => {
          let data1 = resData[0].data[0][this.sqltype]
          let data2 = resData[1].data[0][this.sqltype]
          let data3 = resData[2].data[0][this.sqltype]
          let list1 = [],
            list2 = [],
            list3 = [],
            list4 = []
          if (this.provinceCode == 'ZZ') {

            // 该接口暂时切换为原来的静态数据
            let data = res.RSP.DATA
            data.forEach((item, index) => {
              if (item.province_code == this.provinceCode) {

                this.module7Data = item
              } else {
                let changeCard = data3.filter(count => count.province_name == item.province_name)
                let pay = data1.filter(count => count.province_name == item.province_name)
                let changePackage = data2.filter(count => count.province_name == item.province_name)
                let params1 = {
                  'title': item.province_name,
                  'user': item.crossuser,
                  'changeCard': changeCard[0] ? changeCard[0].count : 0,
                  'pay': pay[0] ? pay[0].count : 0,
                  'changePackage': changePackage[0] ? changePackage[0].count : 0
                }
                let params2 = {
                  'title': item.province_name,
                  '2i': item.user2i,
                  '5g': item.user2i5g
                }
                let params3 = {
                  'title': item.province_name,
                  '5g': item.order5g,
                  '4g': item.order5g4t5
                }
                let params4 = {
                  'title': item.province_name,
                  'in': item.portability_in,
                  'out': item.portability_out
                }
                list1.push(params1)
                list2.push(params2)
                list3.push(params3)
                list4.push(params4)
              }

            })
          } else {
            let data = res.RSP.DATA.filter(count => count.province_code == this.provinceCode)[0]
            this.module7Data = data
            let changeCard = data3[0]
            let pay = data1[0]
            let changePackage = data2[0]
            let params1 = {
              'title': data.province_name,
              'user': data.crossuser,
              'changeCard': changeCard ? changeCard.count : 0,
              'pay': pay ? pay.count : 0,
              'changePackage': changePackage ? changePackage.count : 0
            }
            let params2 = {
              'title': data.province_name,
              '2i': data.user2i,
              '5g': data.user2i5g
            }
            let params3 = {
              'title': data.province_name,
              '5g': data.order5g,
              '4g': data.order5g4t5
            }
            let params4 = {
              'title': data.province_name,
              'in': data.portability_in,
              'out': data.portability_out
            }
            list1.push(params1)
            list2.push(params2)
            list3.push(params3)
            list4.push(params4)
          }
          this.pop1List = list1
          this.pop2List = list2
          this.pop3List = list3
          this.pop4List = list4
        })
      })
    },
    //异地缴费
    getYdPayment() {
      let params = {
        prov_code: this.provinceCode == 'ZZ' ? '' : this.provinceCode,
        sqltype: this.sqltype
      }
      return new Promise(resolve => {
        yd_payment(params).then(res => {
          resolve(res)
        })
      })
    },
    //异地单产品套餐变更
    getYdChange() {
      let params = {
        prov_code: this.provinceCode == 'ZZ' ? '' : this.provinceCode,
        sqltype: this.sqltype
      }
      return new Promise(resolve => {
        yd_change(params).then(res => {
          resolve(res)
        })
      })
    },
    //异地补换卡
    getYdChgCard() {
      let params = {
        prov_code: this.provinceCode == 'ZZ' ? '' : this.provinceCode,
        sqltype: this.sqltype
      }
      return new Promise(resolve => {
        yd_chg_card(params).then(res => {
          resolve(res)
        })
      })
    },
    //收入TOP5产品
    getAI_Billing_00003_YMD() {
      let params = {
        prov_code: this.provinceCode,
        sqltype: this.sqltype
      }
      AI_Billing_00003_YMD(params).then(res => {
        if (res.code == 200) {
          if (res.data[0][this.sqltype].length > 5) {
            this.list1 = res.data[0][this.sqltype].slice(0, 5)
          } else {
            this.list1 = res.data[0][this.sqltype]
          }

        }

      })
    },
    //收入TOP5费用项
    getAI_Billing_00002_YMD() {
      let params = {
        prov_code: this.provinceCode,
        sqltype: this.sqltype
      }
      AI_Billing_00002_YMD(params).then(res => {

        if (res.code == 200) {
          this.list2 = res.data[this.sqltype].slice(0, 5)
        }
      })
    },
    selectName(name, code) {
      this.provinceCode = code
      this.provinceName = name
      this.getData()
    }

  }
}
</script>
<style lang="less" scoped>
/*功能title样式*/
.title {
  width: 100%;
  height: 44px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px 19px 0px 12px;

  .icons {
    width: 32px;
    height: 32px;
    margin-right: 3px;
    margin-top: 3px;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .title-text {
    font-size: 22px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #ECFCFF;
    text-shadow: 0px 2px 6px #4CB5FF;
  }
}

.home {

  /*overflow: hidden;*/
  /*background: #010B3D;*/
  /*display: flex;*/
  flex-direction: column;
  height: 100%;

  .header {
    display: flex;
    width: 100%;
    height: 86px;
    background: url("../assets/yaxin/Title.png") no-repeat;
    background-size: 100% 100%;
    justify-content: center;

    .header-title {
      font-size: 38px;
      margin-top: 12px;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      line-height: 53px;
      height: 53px;
      text-shadow: 0 2px 14px rgba(91, 227, 255, 0.42);
      background: linear-gradient(to top, #88D7FD, #FFFFFF, #FFFFFF);
      -webkit-background-clip: text;
      color: transparent;
    }

    .time-box {
      position: absolute;
      top: 33px;
      right: 30px;
      height: 34px;
      font-family: 'LedFont';
      font-size: 28px;
      color: #88d7fd;
      letter-spacing: .93px;
      text-align: right;
      line-height: 34px;
      display: flex;
      justify-content: flex-end;

      .time-str {
        width: 13px;
        text-align: center;
      }
    }

    .time-selection {
      position: absolute;
      top: 44px;
      left: 32px;
      height: 26px;
      line-height: 26px;
      text-align: left;
      font-size: 16px;
      font-family: Helvetica;
      color: #FFFFFF;
      // .time-n{

      // }
      .time-option {
        display: inline-block;
        height: 26px;
        width: 72px;
        line-height: 26px;
        margin-left: 14px;
        box-sizing: border-box;
        border-radius: 4px;
        border: 2px solid #026D7E;
        text-align: center;
        cursor: pointer;

        &.active {
          background: rgba(41, 205, 255, 0.3);
          box-shadow: 0px 0px 10px 0px rgba(1, 196, 251, 0.7);
          border-radius: 4px;
          border: 2px solid #00FFFF;
        }
      }
    }
  }

  .container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 0 auto;
    height: 970px;
    margin-top: -6px;

    .left-box {
      width: 460px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .center-box {
      margin-left: 23px;
      width: 894px;
      display: flex;
      flex-direction: column;
      background: url("../assets/img/img_bg.png") no-repeat center top;
      background-size: 788px 788px;
      padding-top: 10px;
      justify-content: space-between;
      position: relative;

      .number-boxs {
        display: flex;
        justify-content: space-evenly;
        width: 100%;
        height: 100px;
        position: absolute;
        z-index: 999;

        .number-bord-box {
          margin-top: 13px;
          height: 88px;
        }
      }
    }

    .right-box {
      margin-left: 23px;
      width: 460px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  }
}
</style>