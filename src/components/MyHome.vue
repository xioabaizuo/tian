<template>
    <div class="home">
        <!-- 左侧区域 -->
        <div class="left">
            <div class="left_top" @click="clickMe"><img src="../assets/images/left-bg/all.png" /></div>
            <div class="left_center">
                <router-link to="/home/shou" @click="clickYe"><img
                        src="../assets/images/left-bg/shouye.png" /><span>首页</span>
                </router-link>
                <router-link to="/home/felie" @click="clickYe"><img
                        src="../assets/images/left-bg/felie.png" /><span>仓库</span>
                </router-link>
                <router-link to="/home/wen" @click="clickYe"><img
                        src="../assets/images/left-bg/wenjian.png" /><span>参考资料</span>
                </router-link>
                <router-link to="/home/set" @click="clickYe"><img
                        src="../assets/images/left-bg/guanli.png" /><span>用户管理</span>
                </router-link>
                <router-link to="/home/user" @click="clickYe"><img
                        src="../assets/images/left-bg/shezhi.png" /><span>设置</span>
                </router-link>
            </div>
            <div class="left_all">
                <div class="left_bottom1" @click="onButtomLight"><img src="../assets/images/left-bg/bai.png" /></div>
                <div class="left_bottom2" @click="onButtonYe"><img src="../assets/images/left-bg/ye.png" /></div>
            </div>
        </div>
        <!-- 中间区域 -->
        <div class="center">
            <router-view></router-view>
        </div>
        <!-- 右侧区域 -->
        <div class="ajhg">
            <div class="right">
                <div class="right-top">
                    <div class="right-left">
                        <img src="../assets/R-C.jpg" />
                        <div>
                            <p class="p4">大白</p>
                            <p class="p5">管理员</p>
                        </div>
                    </div>
                    <img src="../assets/退出.png" class="img1" @click="onLogout" />
                </div>
                <div class="weiu">
                    <p class="p7">Github</p>
                    <div class="weiu-all">
                        <div>
                            <p class="p9">2022年11月18日 9:00</p>
                            <p class="p8">Hello world!</p>
                        </div>
                        <div>
                            <p class="p9">2022年11月19日 15:00</p>
                            <p class="p8">登录页面提交</p>
                        </div>
                        <div>
                            <p class="p9">2022年11月19日 22:00</p>
                            <p class="p8">首页提交</p>
                        </div>
                        <div>
                            <p class="p9">2022年11月20日 9:00</p>
                            <p class="p8">上交</p>
                        </div>
                    </div>
                </div>
                <div class="right-bottom">
                    <p class="p7">Github</p>
                    <div class="weiu-all">
                        <div>
                            <p class="p9">2022年11月20日 13:56</p>
                            <p class="p8">提交</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MyHome',
    methods: {
        onLogout() {
            localStorage.removeItem('token')
            this.$router.push('/login')
        },
        clickMe() {
            if (document.querySelector('.left').style.width === "8%") {
                document.querySelector('.left').style.width = "3%"
                var sum = document.querySelector('.left_center').querySelectorAll('span').length
                for (let i = 0; i < sum; i++) {
                    document.querySelector('.left_center').querySelectorAll('span')[i].style.display = "none"
                }
                document.querySelector('.left_bottom2').style.display = "none"
                return
            } else if (document.querySelector('.left').style.width = "3%") {
                document.querySelector('.left').style.width = "8%"
                setTimeout(() => {
                    var sum = document.querySelector('.left_center').querySelectorAll('span').length
                    for (let i = 0; i < sum; i++) {
                        document.querySelector('.left_center').querySelectorAll('span')[i].style.display = "inline-block"
                    }
                    document.querySelector('.left_bottom2').style.display = "inline-block"
                }, 420);
                return
            }
        },
        clickYe() {
            document.querySelector('.left').style.width = "3%"
            var sum = document.querySelector('.left_center').querySelectorAll('span').length
            for (let i = 0; i < sum; i++) {
                document.querySelector('.left_center').querySelectorAll('span')[i].style.display = "none"
            }
            document.querySelector('.left_bottom2').style.display = "none"
        },
        onButtomLight() {
            document.querySelector('.left').style.width = "3%"
            var sum = document.querySelector('.left_center').querySelectorAll('span').length
            for (let i = 0; i < sum; i++) {
                document.querySelector('.left_center').querySelectorAll('span')[i].style.display = "none"
            }
            document.querySelector('.left_bottom2').style.display = "none"
            document.querySelector(".center").style.backgroundColor = "#efefef"
            document.querySelector(".left").style.backgroundColor = "#b5e2e5"
            document.querySelector(".ajhg").style.backgroundColor = "#ffffff"
            var sum2 = document.querySelectorAll('.p9').length
            for (let i = 0; i < sum2; i++) {
                document.querySelectorAll('.p9')[i].style.color = "#000000"
            }
            var sum3 = document.querySelectorAll('.p7').length
            for (let i = 0; i < sum3; i++) {
                document.querySelectorAll('.p7')[i].style.color = "#000000"
            }
            document.querySelector(".p4").style.color = "#000000"
        },
        onButtonYe() {
            document.querySelector('.left').style.width = "3%"
            var sum1 = document.querySelector('.left_center').querySelectorAll('span').length
            for (let i = 0; i < sum1; i++) {
                document.querySelector('.left_center').querySelectorAll('span')[i].style.display = "none"
            }
            document.querySelector('.left_bottom2').style.display = "none"
            document.querySelector(".center").style.backgroundColor = "#42445d"
            document.querySelector(".left").style.backgroundColor = "#464e61"
            document.querySelector('.ajhg').style.backgroundColor = "#464e61"
            var sum2 = document.querySelectorAll('.p9').length
            for (let i = 0; i < sum2; i++) {
                document.querySelectorAll('.p9')[i].style.color = "#ffffff"
            }
            var sum3 = document.querySelectorAll('.p7').length
            for (let i = 0; i < sum3; i++) {
                document.querySelectorAll('.p7')[i].style.color = "#ffffff"
            }
            document.querySelector(".p4").style.color = "#ffffff"
        }
    },
}
</script>

<style lang="less" scoped>
.home {
    width: 100%;
    max-height: 100vh;
    display: flex;
    flex-direction: row;

    .left {
        width: 3%;
        height: 100vh;
        background-color: #b5e2e5;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        position: absolute;
        z-index: 99;
        transition: width 1s;

        img {
            width: 25px;
            height: 25px;
        }

        .left_center {
            width: 100%;
            height: 300px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;

            a {
                display: flex;
                justify-content: center;
                align-items: center;
                text-decoration: none;

                img {
                    width: 25px;
                    height: 25px;
                }

                span {
                    display: none;
                    color: white;
                    font-size: 18px;
                    margin-left: 5px;
                }

            }

        }

        .left_all {
            width: 82px;
            height: 22px;
            display: flex;
            justify-content: center;
            align-items: center;

            .left_bottom1 {
                width: 39px;
                height: 20px;
                background-color: rgb(255, 255, 255);
                border: 1px solid white;
                border-radius: 5px;
                position: relative;

                img {
                    width: 20px;
                    height: 20px;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    margin-top: -10px;
                    margin-left: -10px;
                }
            }

            .left_bottom2 {
                width: 39px;
                height: 20px;
                background-color: #464e61;
                border: 1px solid #464e61;
                border-radius: 5px;
                position: relative;
                display: none;

                img {
                    width: 20px;
                    height: 20px;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    margin-top: -10px;
                    margin-left: -10px;
                }
            }
        }
    }

    .center {
        width: 80%;
        height: 100%;
        margin-left: 3%;
        background-color: #efefef;
    }

    .ajhg {
        width: 17%;
        height: 100vh;
        background-color: #ffffff;
        position: relative;
        display: flex;
        flex-direction: column;

        .right-top {
            width: 90%;
            height: 150px;
            display: flex;
            margin-left: 5%;
            justify-content: space-between;
            align-items: center;

            .right-left {
                display: flex;
                align-items: center;
                font-family: 宋体;

                img {
                    width: 80px;
                    height: 80px;
                    border-radius: 50px;
                    margin-right: 8px;
                }

                div {
                    .p4 {
                        font-size: 15px;
                        font-weight: bold;
                        margin-bottom: 10px;
                    }

                    .p5 {
                        font-size: 13px;
                        color: #4fcdd6;
                    }
                }
            }

            .img1 {
                width: 20px;
                height: 20px;
                cursor: pointer;
            }
        }

        .weiu {
            position: absolute;
            top: 150px;
            width: 90%;
            height: 300px;
            left: 5%;
            border: 1px solid #d6d2d2;
            border-radius: 15px;

            .p7 {
                margin-top: 20px;
                margin-left: 15px;
                font-size: 15px;
                font-weight: bold;
            }

            .weiu-all {
                width: 90%;
                height: 250px;
                margin-left: 5%;
                margin-top: 10px;
                border-left: 4px solid #4fcdd6;

                div {
                    width: 100%;
                    height: 60px;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;

                    .p9 {
                        margin-left: 10px;
                    }

                    .p8 {
                        margin-left: 10px;
                        font-size: 14px;
                        color: #d8d2d2;
                    }
                }

            }
        }

        .right-bottom {
            position: absolute;
            top: 480px;
            width: 90%;
            height: 200px;
            left: 5%;
            border: 1px solid #d6d2d2;
            border-radius: 15px;

            .p7 {
                margin-top: 20px;
                margin-left: 15px;
                font-size: 15px;
                font-weight: bold;
            }

            .weiu-all {
                width: 90%;
                height: 100px;
                margin-left: 5%;
                margin-top: 10px;
                border-left: 4px solid #4fcdd6;

                div {
                    width: 100%;
                    height: 60px;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;

                    .p9 {
                        margin-left: 10px;
                    }

                    .p8 {
                        margin-left: 10px;
                        font-size: 14px;
                        color: #d8d2d2;
                    }
                }

            }
        }

    }
}
</style>