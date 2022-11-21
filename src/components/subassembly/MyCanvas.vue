<template>
    <canvas id="canvas" :style="{ width: '1190px', height: '300px' }"></canvas>
    <p class="p1">每日完成统计</p>
    <p class="p2">
        <img src="../../assets/日历.png" />
        <span class="s1">{{ yea }}-{{ BeforMonth }}-{{ BeforDay }}</span>
        <span>至</span>
        <span class="s1">{{ yea }}-{{ mont }}-{{ da }}</span>
    </p>
</template>

<script lang="ts">
import * as echarts from 'echarts'
import { onMounted } from 'vue'
export default {
    name: 'MyCanvas',
    props: {
        yea: {
            type: Number
        },
        mont: {
            type: Number
        },
        da: {
            type: Number
        },
        list: {
            type: Number
        },
        goodlist: {
            type: Array
        }
    },
    data() {
        return {
            // wensum:this.wenlist,
            // weisum:this.weilist
        }
    },
    methods: {
        
    },
    computed: {
        BeforMonth() {
            if (this.da - 6 <= 0) {
                return this.mont - 1
            } else if (this.da - 6 > 0) {
                return this.mont
            }
        },
        BeforDay() {
            if (this.da - 6 == 0) {
                return this.da = this.list
            } else if (this.da - 6 <= 0) {
                return this.da = this.list + (this.da - 6)
            } else {
                return this.da - 6
            }
        },
        // wenlist() {
        //     let sum = 0
        //     for (let i = 0; i < this.goodlist.length; i++) {
        //         if (this.goodlist[i].d == this.da && this.goodlist[i].done == true) {
        //             sum++
        //         }
        //     }
        //     return sum
        // },
        // weilist() {
        //     let sum = 0
        //     for (let i = 0; i < this.goodlist.length; i++) {
        //         if (this.goodlist[i].d == this.da && this.goodlist[i].done == false) {
        //             sum++
        //         }
        //     }
        //     return sum
        // },
    },
    setup() {
        onMounted(() => {// 需要获取到element,所以是onMounted的Hook
            let myChart = echarts.init(document.getElementById("canvas"), null, {
                width: 1190,
                height: 300
            });
            // 绘制图表
            myChart.setOption({
                xAxis: {
                    type: 'category',
                    data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
                },
                yAxis: {

                },
                series: [
                    {
                        name:'已完成',
                        type: "line",
                        data: [8, 15, 31, 13, 15, 20, 11],
                        label: {
                            show: false,
                            position: 'top',
                            textStyle: {
                                fontSize: 15,
                                fontFamily: "宋体"
                            }
                        },
                        emphasis: {
                            label: {
                                show: true
                            }
                        },
                        smooth: true,
                    },
                    {
                        name:'未完成',
                        type: "line",
                        data: [5, 10, 20, 11, 10, 20, 11],
                        label: {
                            show: false,
                            position: 'top',
                            textStyle: {
                                fontSize: 15,
                                fontFamily: "宋体"
                            }
                        },
                        emphasis: {
                            label: {
                                show: true
                            }
                        },
                        smooth: true,
                    },
                ]
            });
            window.onresize = function () { // 自适应大小
                myChart.resize();
            };
        })
    },
}
</script>
<style lang="less" scoped>
canvas {
    position: relative;
}

.p1 {
    position: absolute;
    top: 10px;
    left: 20px;
    color: #849eaf;
    font-size: 15px;
    font-weight: bold;
}

.p2 {
    position: absolute;
    top: 10px;
    right: 20px;
    width: 280px;
    height: 30px;
    background-color: #f2f1f1;
    border-radius: 15px;
    display: flex;
    justify-content: space-around;
    align-items: center;

    img {
        width: 25px;
        height: 25px;
    }

    .s1 {
        color: rgb(79, 186, 200);
        font-size: 13px;
    }
}
</style>