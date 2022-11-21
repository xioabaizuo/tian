<template>
    <div class="all">
        <div class="back bounce animated">
            <div class="back_before">登录</div>
            <div class="back_after">
                <input type="text" placeholder="请输入用户名" v-model="username" />
                <p class="p1">账号错误</p>
                <input type="password" placeholder="请输入6位密码" v-model="password" @keyup.enter="onLoginClick" />
                <p class="p2">密码错误</p>
                <button @click="onLoginClick">立即登录</button>
            </div>
        </div>
        <div class="changed rotate animated" @click="BackChanged" id="square">
            <img src="../assets/images/设置.png" />
        </div>
        <my-ti class="center" v-if="back === 1" v-model:duih="back" @yuil="SrcChange"></my-ti>
    </div>
</template>

<script>
import MyTi from '../components/subassembly/MyTi.vue'
export default {
    name: 'MyLogin',
    data() {
        return {
            back: 0,
            username: '',
            password: ''
        }
    },
    methods: {
        BackChanged() {
            this.back = 1;
        },
        SrcChange(n) {
            console.log(document.querySelector('.all').style);
            document.querySelector('.all').style.backgroundImage = 'url(' + n + ')';
        },
        onLoginClick() {
            if (this.username === "admin" && this.password === "123456") {
                this.$router.push('/home')
                document.querySelector(".p1").style.display = "none"
                document.querySelector(".p2").style.display = "none"
                return localStorage.setItem('token', 'Bearer xxx')
            } else {
                document.querySelector(".p1").style.display = "block"
                document.querySelector(".p2").style.display = "block"
            }
            localStorage.removeItem('token')
        }
    },
    components: {
        MyTi,
    },
}
</script>

<style lang="less" scoped>
.all {
    width: 100%;
    height: 100vh;
    background: url(../assets/images/login-bg/魈.jpg);
    margin: 0 auto;
    background-size: cover;
    position: relative;

    .animated {
        -webkit-animation-duration: 1s;
        animation-duration: 1s;
        -webkit-animation-fill-mode: both;
        animation-fill-mode: both;
    }

    .animated.infinite {
        -webkit-animation-iteration-count: infinite;
        animation-iteration-count: infinite;
    }

    .animated.hinge {
        -webkit-animation-duration: 2s;
        animation-duration: 2s;
    }

    /*the animation definition*/
    @-webkit-keyframes bounce {

        0%,
        100%,
        20%,
        53%,
        80% {
            -webkit-transition-timing-function: cubic-bezier(0.215, .61, .355, 1);
            transition-timing-function: cubic-bezier(0.215, .61, .355, 1);
            -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0)
        }

        40%,
        43% {
            -webkit-transition-timing-function: cubic-bezier(0.755, .050, .855, .060);
            transition-timing-function: cubic-bezier(0.755, .050, .855, .060);
            -webkit-transform: translate3d(0, -30px, 0);
            transform: translate3d(0, -30px, 0)
        }

        70% {
            -webkit-transition-timing-function: cubic-bezier(0.755, .050, .855, .060);
            transition-timing-function: cubic-bezier(0.755, .050, .855, .060);
            -webkit-transform: translate3d(0, -15px, 0);
            transform: translate3d(0, -15px, 0)
        }

        90% {
            -webkit-transform: translate3d(0, -4px, 0);
            transform: translate3d(0, -4px, 0)
        }
    }

    @keyframes bounce {

        0%,
        100%,
        20%,
        53%,
        80% {
            -webkit-transition-timing-function: cubic-bezier(0.215, .61, .355, 1);
            transition-timing-function: cubic-bezier(0.215, .61, .355, 1);
            -webkit-transform: translate3d(0, 0, 0);
            -ms-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0)
        }

        40%,
        43% {
            -webkit-transition-timing-function: cubic-bezier(0.755, .050, .855, .060);
            transition-timing-function: cubic-bezier(0.755, .050, .855, .060);
            -webkit-transform: translate3d(0, -30px, 0);
            -ms-transform: translate3d(0, -30px, 0);
            transform: translate3d(0, -30px, 0)
        }

        70% {
            -webkit-transition-timing-function: cubic-bezier(0.755, .050, .855, .060);
            transition-timing-function: cubic-bezier(0.755, .050, .855, .060);
            -webkit-transform: translate3d(0, -15px, 0);
            -ms-transform: translate3d(0, -15px, 0);
            transform: translate3d(0, -15px, 0)
        }

        90% {
            -webkit-transform: translate3d(0, -4px, 0);
            -ms-transform: translate3d(0, -4px, 0);
            transform: translate3d(0, -4px, 0)
        }
    }

    .bounce {
        -webkit-animation-name: bounce;
        animation-name: bounce;
        -webkit-transform-origin: center bottom;
        -ms-transform-origin: center bottom;
        transform-origin: center bottom
    }


    .back {
        position: absolute;
        top: 150px;
        right: 180px;
        display: flex;
        flex-direction: column;
        width: 350px;
        height: 430px;
        border-radius: 20px;
        background-color: rgba(255, 255, 255, 0.05);
        box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25), -3px -3px 4px rgba(255, 255, 255, 0.15);
        backdrop-filter: blur(10px);


        .back_before {
            width: 100%;
            height: 150px;
            color: white;
            line-height: 180px;
            text-align: center;
            font-size: 27px;
            font-weight: bold;
            font-family: 宋体;
        }

        .back_after {
            display: flex;
            flex-direction: column;

            input {
                width: 80%;
                height: 30px;
                margin: 8px auto;
                color: white;
            }

            input:nth-child(1) {
                background: url(../assets/images/用户.png) no-repeat;
                background-size: 25px 25px;
                background-position: 3px 3px;
                padding-left: 30px;
                position: relative;
            }
            .p1{
                position: absolute;
                color: red;
                font-size: 12px;
                top: 191px;
                left: 20px;
                display: none;
            }
            input:nth-child(3) {
                background: url(../assets/images/密码.png) no-repeat;
                background-size: 25px 25px;
                background-position: 3px 3px;
                padding-left: 30px;
                position: relative;
            }
            .p2{
                position: absolute;
                color: red;
                font-size: 12px;
                top: 241px;
                left: 20px;
                display: none;
            }

            button {
                width: 80%;
                height: 30px;
                margin: 0px auto;
                margin-top: 20px;
                background-color: #72c9d2;
                border: 0px;
                color: white;
            }
        }
    }

    .changed {
        position: absolute;
        bottom: 40px;
        left: 30px;

        img {
            width: 30px;
            height: 30px;
        }
    }

    .animated {
        -webkit-animation-duration: 1s;
        animation-duration: 1s;
        -webkit-animation-fill-mode: both;
        animation-fill-mode: both;
    }

    .animated.infinite {
        -webkit-animation-iteration-count: infinite;
        animation-iteration-count: infinite;
    }

    .animated.hinge {
        -webkit-animation-duration: 2s;
        animation-duration: 2s;
    }

    /*the animation definition*/
    @-webkit-keyframes rotate {
        0% {
            -webkit-transform-origin: center;
            transform-origin: center;
            -webkit-transform: rotate3d(0, 0, 1, -200deg);
            transform: rotate3d(0, 0, 1, -200deg)
        }

        100% {
            -webkit-transform-origin: center;
            transform-origin: center;
            -webkit-transform: none;
            transform: none
        }
    }

    @keyframes rotate {
        0% {
            -webkit-transform-origin: center;
            -ms-transform-origin: center;
            transform-origin: center;
            -webkit-transform: rotate3d(0, 0, 1, -200deg);
            -ms-transform: rotate3d(0, 0, 1, -200deg);
            transform: rotate3d(0, 0, 1, -200deg)
        }

        100% {
            -webkit-transform-origin: center;
            -ms-transform-origin: center;
            transform-origin: center;
            -webkit-transform: none;
            -ms-transform: none;
            transform: none
        }
    }

    .rotate {
        -webkit-animation-name: rotate;
        animation-name: rotate
    }

    .center {
        position: absolute;
        left: 50%;
        margin-left: -400px;
        top: 50%;
        margin-top: -225px;
    }
}
</style>