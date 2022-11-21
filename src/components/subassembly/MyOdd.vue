<template>
    <div class="all">
        <p class="p1">个人信息</p>
        <div class="small">
            <div class="d1">
                <div class="d2">
                    <img src="../../assets/R-C.jpg" />
                    <div class="d3">
                        <span class="s1">大白</span>
                        <span class="s2">管理者</span>
                    </div>
                </div>
                <div class="d4">
                    <p>github地址：<span>https://github.com/xioabaizuo/tian.git</span></p>
                    <p>gitee地址：<span>https://gitee.com/ztiha/tian</span></p>
                </div>
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
</template>

<script>
export default {
    name: 'MyOdd',
}
</script>

<style lang="less" scoped>
.all {
    width: 100%;
    height: 100vh;
    background-color: #efefef;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .p1 {
        width: 90%;
        height: 5%;
        text-align: left;
        font-size: 15px;
        color: #5d788d;
        font-weight: 550;
    }

    .small {
        width: 90%;
        height: 90%;
        background-color: #ffffff;
        border-radius: 15px;

        .d1 {
            width: 90%;
            height: 100px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-left: 5%;
            margin-top: 30px;

            .d2 {
                width: 20%;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: center;

                img {
                    width: 100px;
                    height: 100px;
                    border-radius: 50px;
                    margin-right: 10px;
                }

                .d3 {
                    display: flex;
                    flex-direction: column;

                    .s1 {
                        font-size: 15px;
                        font-weight: bold;
                        margin-bottom: 10px;
                    }

                    .s2 {
                        font-size: 13px;
                        color: #4fcdd6;
                    }
                }
            }

            .d4 {
                width: 76%;
                height: 100%;
                border: 1px solid #d6d2d2;
                border-radius: 15px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;

                p {
                    width: 95%;
                    height: 50%;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;

                    span {
                        width: 80%;
                        height: 40px;
                        border: 1px solid #4fcdd6;
                        line-height: 40px;
                        padding-left: 5px;
                        font-size: 15px;
                        color: #4fcdd6;
                    }
                }
            }
        }

        .weiu {
            width: 90%;
            height: 300px;
            border: 1px solid #d6d2d2;
            border-radius: 15px;
            margin-left: 5%;
            margin-top: 30px;

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
                        font-size: 15px;
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
            width: 90%;
            height: 180px;
            margin-left: 5%;
            margin-top: 15px;
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