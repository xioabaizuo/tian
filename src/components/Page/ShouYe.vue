<template>
    <div class="big">
        <div class="all">
            <div class="all-top">
                <div class="calendar">
                    <header>
                        <button class="prev" @click="prev">
                            &lt;
                        </button>
                        <p id="title" style="color:#849eaf;">{{ year }}年{{ month }}月</p>
                        <button class="next" @click="next">
                            &gt;
                        </button>
                    </header>
                    <div class="weekDay flex jc-sb p-5 day">
                        <p v-for="item in weekList" :key="item.id">{{ item }}</p>
                    </div>
                    <div class="weekDay flex p-5 day">
                        <p v-for="item in spaceDay" :key="item.id"></p>
                        <p v-for="(item, idx) in (monthDay[this.month - 1] || 30)" @click="setDay(idx)"
                            :class="item === day ? 'active' : ''" :key="item.id">{{ item }}</p>
                    </div>
                </div>
                <div class="right">
                    <input type="text" v-model="city" @keyup.enter="searchWeather" />
                    <div class="time">
                        <p class="time1"><span>{{ dateFormat(newDate) }}</span></p>
                        <p class="time2">GTM+8:00</p>
                    </div>
                    <div class="tian" :style="{ backgroundImage: weatherBg }">
                        <div class="tain_top">
                            <p>{{ tmpNew }}°</p>
                            <p>{{ city }}</p>
                        </div>
                        <div class="tain_bottom">
                            <p>{{ briefNew }}</p>&nbsp;/&nbsp;
                            <img src="../../assets/水滴.png" />
                            <p>{{ hung }}%</p>
                        </div>
                        <div class="img" :style="{ backgroundImage: weaImg }"></div>
                    </div>
                </div>
            </div>
            <div class="all-center">
                <div class="canvas">
                    <my-canvas :yea="year" :mont="month" :da="day" :list="monthDay[this.month - 2] || 30 " :goodlist="list1"></my-canvas>
                </div>
            </div>
            <div class="all-bottom">
                <div class="wang">
                    <p>已完成事件</p>
                    <div class="wang-all">
                        <div class="wang-li">
                            <ul>
                                <li v-for="item in wanlist">
                                    <div class="op">{{item.y}}-{{item.m}}-{{item.d}}&nbsp;{{item.h}}:{{item.s}}-------------------------------------</div>
                                    <div class="box">
                                        <div><span class="s1">{{item.h}}:{{item.s}}</span><span class="s2">{{item.task}}</span></div>
                                        <!-- <div><span class="s1">10:00</span><span class="s2">写BUG</span></div> -->
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="wei">
                    <p>待办事件列表</p>
                    <div class="wei-input"><input type="text" v-model="taskname" @keyup.enter="onFormSubmit" /><button
                            @click="onFormSubmit">＋</button></div>
                    <div class="wei-li">
                        <ul>
                            <li v-for="item in tasklist" :key="item.id">
                                <div>
                                    <span>&nbsp;<input type="checkbox" :id="item.id" v-model="item.done" />&nbsp;<span
                                            :class="item.done ? 'delete' : ''">{{ item.y }}-{{ item.m }}-{{ item.d
                                            }}&nbsp;{{ item.h }}:{{ item.s }}&nbsp;{{item.task}}</span></span>
                                    <img src="../../assets/删除 .png" @click="onFromDelete(item.id)" />
                                </div>
                                <button @click="onFromWan(item.id)">完成</button>
                            </li>
                        </ul>
                    </div>
                    <div class="wei-btn">
                        <button class="btn3" @click="onAll">全部</button>
                        <button class="btn2" @click="onWan">已完成</button>
                        <button class="btn1" @click="onWei">未完成</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import MyCanvas from '../subassembly/MyCanvas.vue'
export default {
    name: "ShouYe",
    data() {
        return {
            year: "",
            month: "",
            day: "",
            current: "",
            weekList: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
            monthDay: [31, "", 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
            activeDay: "",
            spaceDay: "",
            February: "",// 判断2月份的天数
            newDate: new Date(),
            city: "宁波",
            tmpNew: "",
            briefNew: "",
            hung: "",
            time: new Date().getHours(),
            list1: [
                { id: 1, task: "继续写BUG", done: false, y: 2022, m: 11, d: 20, h: 0, s: 16 },
                { id: 2, task: "完成日历", done: false, y: 2022, m: 11, d: 19, h: 15, s: 16 },
                { id: 3, task: "完成背景图片", done: true, y: 2022, m: 11, d: 18, h: 16, s: 16 },
                { id: 4, task: "完成首页", done: true, y: 2022, m: 11, d: 18, h: 12, s: 16 },
                { id: 4, task: "完成登录界面", done: true, y: 2022, m: 11, d: 17, h: 10, s: 16 },
            ],
            taskname: '',
            nextId: 5,
            activeIndex: 3
        };
    },
    created() {
        this.current = new Date();
        this.getTheCurrentDate();
        this.getMonthFisrtDay();
        this.February = this.isLeapYear(this.year) ? 28 : 29;
        this.monthDay.splice(1, 1, this.February);
        this.searchWeather();
    },
    mounted() {
        const that = this
        this.timer = setInterval(() => {
            that.newDate = new Date().toLocaleString()
        })
    },
    destroyed() {
        this.clearInterval(this.timer)
    },
    methods: {
        searchWeather: async function () {//注意：这里有 async 用来完成异步操作
            //由于调用api是异步操作
            //在请求的时候需要用async+await让它同步，否则数据不好取出
            //如果没有await返回的是一个Promise 对象，我学术短浅，暂时没学到，不会取
            // 自己去和风天气弄API，网上有教程，key是密钥。
            let key = ""
            let httpUrl = `https://geoapi.qweather.com/v2/city/lookup?location=${this.city}&key=${key}`
            let res = await fetch(httpUrl)
            let result = await res.json()
            let id = result.location[0].id
            //根据城市id获取具体的天气
            let httpUrl1 = `https://devapi.qweather.com/v7/weather/now?location=${id}&key=${key}`
            let res1 = await fetch(httpUrl1)
            let result1 = await res1.json()
            let now = result1.now
            console.log(now);
            this.tmpNew = now.temp
            this.briefNew = now.text
            this.hung = now.humidity
        },
        dateFormat() {
            var date = new Date()
            var hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
            var minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
            var seconds = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()
            return hours + "：" + minutes + "：" + seconds
        },
        // 判断是否是闰年
        isLeapYear(year) {
            return year % 4 == 0 && year % 100 != 0 || year % 400 == 0;
        },
        // 选取特定天数
        setDay(idx) {
            this.activeDay = idx;
            this.day = idx + 1;
            // console.log('选择的日期是' + this.year + ' ' + this.month + ' ' + this.day)
        },
        // 判断月份的第一天是星期几
        getMonthFisrtDay() {
            var firstDayOfCurrentMonth = new Date(this.year, this.month - 1, 1); // 某年某月的第一天
            if (firstDayOfCurrentMonth.getDay() == 0) {
                this.spaceDay = 6;
            }
            else {
                this.spaceDay = firstDayOfCurrentMonth.getDay() - 1;
            }
        },
        // 获取当前的日期
        getTheCurrentDate() {
            this.year = this.current.getFullYear();
            this.month = this.current.getMonth() + 1;
            this.day = this.current.getDate();
            // console.log(this.day);
        },
        prev() {
            if (this.month == 1) {
                this.year--;
                this.month = 12;
            }
            else {
                this.month--;
            }
            this.activeDay = 0;
            this.getMonthFisrtDay();
        },
        next() {
            if (this.month == 12) {
                this.year++;
                this.month = 1;
            }
            else {
                this.month++;
            }
            this.activeDay = 0;
            this.getMonthFisrtDay();
        },
        onFormSubmit() {
            if (!this.taskname) return alert("任务名称不能为空")
            var date = new Date()
            this.list1.unshift({
                id: this.nextId,
                task: this.taskname,
                done: false,
                y: date.getFullYear(),
                m: date.getMonth() + 1,
                d: date.getDate(),
                h: date.getHours(),
                s: date.getMinutes()
            })
            this.nextId++,
                this.taskname = ""
        },
        onFromDelete(id) {
            this.list1 = this.list1.filter(x => x.id !== id)
        },
        onFromWan(id) {
            for (let i = 0; i < this.list1.length; i++) {
                if (this.list1[i].id == id) {
                    this.list1[i].done = true
                }
            }
        },
        onAll() {
            this.activeIndex = 1
        },
        onWan() {
            this.activeIndex = 2
        },
        onWei() {
            this.activeIndex = 3
        }
    },
    computed: {
        weatherBg() {
            if (this.time >= 5 && this.time <= 7) {
                return `url(${new URL('../../assets/日出.png', import.meta.url).href})`
            } else if (this.time > 7 && this.time < 18) {
                return `url(${new URL('../../assets/白天.png', import.meta.url).href})`
            } else if (this.time >= 18 && this.time <= 19) {
                return `url(${new URL('../../assets/日落.png', import.meta.url).href})`
            } else {
                return `url(${new URL('../../assets/晚上.png', import.meta.url).href})`
            }
        },
        weaImg() {
            if (this.briefNew.indexOf('阴') !== -1) {
                return `url(${new URL('../../assets/weather/yin.png', import.meta.url).href})`
            } else if (this.briefNew.indexOf('雷') !== -1) {
                return `url(${new URL('../../assets/weather/lei.png', import.meta.url).href})`
            } else if (this.briefNew.indexOf('晴') !== -1) {
                return `url(${new URL('../../assets/weather/qing.png', import.meta.url).href})`
            } else if (this.briefNew.indexOf('沙尘') !== -1) {
                return `url(${new URL('../../assets/weather/shachen.png', import.meta.url).href})`
            } else if (this.briefNew.indexOf('雾') !== -1) {
                return `url(${new URL('../../assets/weather/wu.png', import.meta.url).href})`
            } else if (this.briefNew.indexOf('小雨') !== -1) {
                return `url(${new URL('../../assets/weather/xiaoyu.png', import.meta.url).href})`
            } else if (this.briefNew.indexOf('雪') !== -1) {
                return `url(${new URL('../../assets/weather/xue.png', import.meta.url).href})`
            } else if (this.briefNew.indexOf('雨') !== -1) {
                return `url(${new URL('../../assets/weather/yu.png', import.meta.url).href})`
            } else if (this.briefNew.indexOf('雨夹雪') !== -1) {
                return `url(${new URL('../../assets/weather/yujiaxue.png', import.meta.url).href})`
            } else if (this.briefNew.indexOf('云') !== -1) {
                return `url(${new URL('../../assets/weather/yun.png', import.meta.url).href})`
            } else {
                return `url(${new URL('../../assets/weather/qing.png', import.meta.url).href})`
            }
        },
        tasklist() {
            switch (this.activeIndex) {
                case 1:
                    return this.list1
                case 2:
                    return this.list1.filter(x => x.done)
                case 3:
                    return this.list1.filter(x => !x.done)
            }
        },
        wanlist() {
            return this.list1.filter(x => x.done)
        }
    },
    components: {
        MyCanvas,
    }
}
</script>
<style lang="less" scoped>
.big {
    width: 100%;
    max-height: 100vh;
    overflow-y: scroll;
}

.big::-webkit-scrollbar {
    width: 1px;
    height: 1px;
}

.all {
    width: 100%;
    height: 100%;
    // position: relative;
    display: flex;
    flex-direction: column;

    .all-top {
        width: 100%;
        height: 300px;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    .calendar {
        width: 800px;
        height: 250px;
        background-color: #fff;
        box-shadow: 2px 12px 24px rgba(0, 0, 0, 0.12);
        // position: absolute;
        // top: 10px;
        // left: 10px;
        border-radius: 15px;
        display: flex;
        flex-direction: column;

        header {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: 10px;

            .prev {
                margin-right: 50px;
                background-color: #fff;
                border: 0px;
                font-size: 20px;
                color: #93c3ec;
                cursor: pointer;
            }

            .next {
                margin-left: 50px;
                background-color: #fff;
                border: 0px;
                font-size: 20px;
                color: #93c3ec;
                cursor: pointer;
            }
        }

        .flex {
            display: flex;
        }

        .jc-sb {
            justify-content: space-between;
        }

        .day {
            flex-wrap: wrap;

            p {
                width: 14.28%;
                text-align: center;
                line-height: 32px;
                height: 32px;
                z-index: 100;
                color: #849eaf;
                cursor: pointer;

                &.active {
                    color: #fff;
                    position: relative;
                }

                &.active:before {
                    content: '';
                    height: 36px;
                    width: 36px;
                    position: absolute;
                    z-index: -1;
                    left: 50%;
                    top: 50%;
                    margin-left: -18px;
                    margin-top: -18px;
                    border-radius: 50%;
                    background: #e97163;
                    color: #fff;
                }
            }
        }
    }

    .right {
        width: 300px;
        height: 250px;
        // position: absolute;
        // top: 10px;
        // right: 10px;
        // background-color: aquamarine;
        border-radius: 15px;
        display: flex;
        flex-direction: column;
        align-items: center;

        input {
            width: 300px;
            height: 35px;
            border-radius: 15px;
            border: 1px solid #efefef;
            background: url('../../assets/images/center-bg/搜索.png') no-repeat;
            background-size: 25px 25px;
            background-position: 270px;
            background-color: white;
            padding-left: 5px;
            box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.12);
        }

        .time {
            width: 300px;
            height: 100px;
            margin-top: 10px;
            background-color: white;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            border-radius: 15px;
            box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.12);
            cursor: pointer;

            .time1 {
                width: 200px;
                height: 50px;
                background-color: #b5e2e5;
                text-align: center;
                line-height: 50px;
                color: white;
                font-size: 25px;
                border-radius: 15px;
            }

            .time2 {
                margin-top: 5px;
                color: #849eaf;
            }
        }

        .tian {
            margin-top: 10px;
            width: 300px;
            height: 100px;
            border-radius: 25px;
            // background: url(../../assets/日出.png) no-repeat;
            background-repeat: no-repeat;
            background-size: 100% 100%;
            position: relative;
            box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.12);
            cursor: pointer;

            .tain_top {
                display: flex;
                width: 100px;
                position: absolute;
                bottom: 30px;
                left: 10px;
                color: white;
                align-items: center;
                border-bottom: 2px solid white;

                p:nth-child(1) {
                    font-size: 25px;
                    margin-right: 8px;
                }

                p:nth-child(2) {
                    font-size: 15px;
                }
            }

            .tain_bottom {
                display: flex;
                width: 100px;
                position: absolute;
                bottom: 10px;
                left: 10px;
                color: white;
                font-size: 13px;
                align-items: center;

                img {
                    width: 20px;
                    height: 20px;
                }
            }

            .img {
                width: 80px;
                height: 80px;
                position: absolute;
                top: 0px;
                right: 10px;
                background-repeat: no-repeat;
                background-size: 100% 100%;
            }
        }
    }

    .all-center {
        width: 100%;
        height: 300px;
        display: flex;
        justify-content: center;
        align-items: center;

        .canvas {
            width: 1190px;
            height: 300px;
            position: relative;
            // top: 270px;
            // left: 10px;
            background-color: white;
            border-radius: 15px;
            box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.12);
        }
    }

    .all-bottom {
        width: 100%;
        height: 300px;
        display: flex;
        justify-content: space-around;
        align-items: center;

        .wang {
            width: 450px;
            height: 250px;
            background-color: white;
            border-radius: 15px;
            box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.12);
            position: relative;
            p {
                width: 100%;
                height: 20px;
                color: #849eaf;
                position: absolute;
                top: 10px;
                left: 10px;
                font-size: 15px;
                font-weight: bold;
            }
            .wang-all{
                width: 94%;
                height: 210px;
                position: absolute;
                top: 30px;
                left: 3%;
                ul{
                    width: 100%;
                    height: 210px;
                    overflow-y: scroll;
                    li{
                        width: 100%;
                        list-style: none;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-around;
                        align-items: center;
                        .op{
                            width: 100%;
                            height: 30px;
                            line-height: 30px;
                            color: #8cc5c9;
                            font-size: 15px;
                            font-family: 宋体;
                            font-weight: bold;
                        }
                        .box{
                            width: 100%;
                            // height: 40px;
                            display: flex;
                            flex-direction: column;
                            border-left: 10px solid #849eaf;
                            div{
                                width: 100%;
                                height: 25px;
                                display: flex;
                                justify-content: space-between;
                                align-items: center;
                                .s1{
                                    width: 20%;
                                    text-align: center;
                                    font-size: 13px;
                                    font-family: 宋体;
                                }
                                .s2{
                                    width: 80%;
                                    text-align: left;
                                    background-color: #efefef;
                                    border-radius: 30px;
                                    padding-left: 10px;
                                    color: #8cc5c9;
                                    font-size: 15px;
                                    font-family: 宋体;
                                }
                            }
                        }
                    }
                }
                ul::-webkit-scrollbar {
                    width: 1px;
                    height: 1px;
                }
            }
        }

        .wei {
            width: 700px;
            height: 250px;
            background-color: white;
            border-radius: 15px;
            box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.12);
            display: flex;
            flex-direction: column;
            position: relative;

            p {
                width: 100%;
                height: 20px;
                color: #849eaf;
                position: absolute;
                top: 10px;
                left: 10px;
                font-size: 15px;
                font-weight: bold;
            }

            .wei-input {
                width: 80%;
                height: 30px;
                position: absolute;
                top: 30px;
                left: 10%;
                display: flex;
                justify-content: space-around;
                align-items: center;

                input {
                    width: 80%;
                    height: 20px;
                    border: 1px solid #b5e2e5;
                    border-radius: 15px;
                    padding-left: 5px;
                }

                button {
                    width: 40px;
                    height: 30px;
                    font-size: 25px;
                    color: white;
                    background-color: #b5e2e5;
                    border: 1px solid #4fcdd6;
                    border-radius: 5px;
                }
            }

            .wei-li {
                width: 80%;
                height: 150px;
                // background-color: #4fcdd6;
                position: absolute;
                top: 70px;
                left: 10%;

                ul {
                    width: 100%;
                    height: 150px;
                    overflow-y: scroll;

                    li {
                        width: 100%;
                        height: 35px;
                        list-style: none;
                        display: flex;
                        justify-content: space-around;
                        align-items: center;

                        div {
                            width: 80%;
                            height: 30px;
                            background-color: #f5f5f5;
                            border-radius: 15px;
                            font-size: 14px;
                            font-family: 宋体;
                            display: flex;
                            align-items: center;
                            color: #849eaf;
                            font-weight: bold;
                            justify-content: space-between;

                            .delete {
                                font-style: italic;
                                text-decoration: line-through;
                            }

                            img {
                                width: 20px;
                                height: 20px;
                                margin-right: 10px;
                            }
                        }

                        button {
                            width: 40px;
                            height: 30px;
                            font-size: 15px;
                            color: white;
                            background-color: #b5e2e5;
                            border: 1px solid #4fcdd6;
                            border-radius: 5px;
                        }
                    }
                }

                ul::-webkit-scrollbar {
                    width: 1px;
                    height: 1px;
                }
            }

            .wei-btn {
                width: 190px;
                height: 23px;
                position: absolute;
                bottom: 5px;
                left: 50%;
                margin-left: -50px;
                display: flex;
                justify-content: space-between;
                align-items: center;

                .btn1 {
                    width: 50px;
                    height: 23px;
                    border: 0px;
                    border-radius: 5px;
                    color: white;
                    background-color: #ddabae;
                }

                .btn2 {
                    width: 50px;
                    height: 23px;
                    border: 0px;
                    border-radius: 5px;
                    color: white;
                    background-color: #b7e3e2;
                }

                .btn3 {
                    width: 50px;
                    height: 23px;
                    border: 0px;
                    border-radius: 5px;
                    color: white;
                    background-color: #1fa2de;
                }
            }
        }
    }

}
</style>