<template>
    <div class="big">
        <div class="big-left">
            <p class="left-top">基本设置</p>
            <div class="left-bottom">
                <p><router-link to="/home/user/yanse">主题设置</router-link></p>
                <p><router-link to="/home/user/odd">个人信息</router-link></p>
                <p @click="onLogout">退出登录</p>
            </div>
        </div>
        <div class="big-right">
            <div><router-view></router-view></div>      
        </div>
    </div>
</template>

<script>
export default {
    name:'MyUsers',
    methods:{
        onLogout() {
            localStorage.removeItem('token')
            this.$router.push('/login')
        },
    }
}
</script>

<style lang="less" scoped>
.big{
    width: 100%;
    height: 100vh;
    display: flex;
    .big-left{
        width: 20%;
        height: 100%;
        background-color: white;
        .left-top{
            width: 100%;
            height: 100px;
            text-align: center;
            line-height: 50px;
            font-size: 18px;
            color: #5d788d;
            font-weight: 550;
        }
        .left-bottom{
            width: 100%;
            height: 200px;
            font-size: 15px;
            color: #b0c5ce;
            p{
                width: 100%;
                height: 35px;
                line-height: 35px;
                text-align: center;
                cursor: pointer;
            }
            a{
                color: #b0c5ce;
                text-decoration: none;
            }
        }
    }
    .big-right{
        width: 80%;
        height: 100%;
        background-color: #efefef;
    }
}
</style>