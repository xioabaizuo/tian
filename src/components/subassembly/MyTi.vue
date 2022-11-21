<template>
    <div class="center">
        <p>主题</p>
        <div>
            <div class="img" v-for="(item, index) in imgList" :key="index">
                <img :src="item.imgUrl" @click="ImgChange" />
            </div>
        </div>
        <div class="shou" @click="ShouChange">
            <img src="../../assets/images/我的.png" />
        </div>
    </div>
</template>

<script>
export default {
    name: 'MyTi',
    data() {
        return {
            imgList: [
                { imgUrl: new URL('../../assets/images/login-bg/hutao.jpg', import.meta.url).href },
                { imgUrl: new URL('../../assets/images/login-bg/万叶.jpg', import.meta.url).href },
                { imgUrl: new URL('../../assets/images/login-bg/神里绫华.png', import.meta.url).href },
                { imgUrl: new URL('../../assets/images/login-bg/钟离.jpg', import.meta.url).href },
                { imgUrl: new URL('../../assets/images/login-bg/雷神.png', import.meta.url).href },
                { imgUrl: new URL('../../assets/images/login-bg/魈.jpg', import.meta.url).href }
            ]
        }
    },
    props:['duih'],
    emits:['update:duih','yuil'],
    methods: {
        ShouChange() {
            this.$emit('update:duih',this.duih-1)
        },
        ImgChange(e) {
            console.log(e.target.src)
            this.$emit('yuil',e.target.src)
            this.ShouChange()
        }
    },
}
</script>
<style lang="less" scoped>
.center {
    width: 800px;
    height: 460px;
    background-color: rgba(255, 255, 255, 0.25);
    backdrop-filter: blur(10px);
    box-shadow: -2px -2px 2px rgba(255, 255, 255, 0.5), 4px 4px 8px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: row;
    position: relative;
    p {
        width: 120px;
        height: 30px;
        text-align: left;
        margin-top: 50px;
        padding-left: 20px;
        font-size: 20px;
        color: white;
        background-color: #72c9d2;
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
        display: inline-block;
        margin-right: 10px;
    }
    div {
        width: 650px;
        height: 420px;
        display: inline-block;
        .img {
            width: 325px;
            height: 150px;
            display: flex;
            flex-direction: column;
            display: inline-block;
            position: relative;
            img {
                width: 260px;
                height: 120px;
                background-size: auto;
                position: absolute;
                left: 50%;
                margin-left: -130px;
                top: 50%;
                margin-top: -60px;
                border: 3px solid #72c9d2;
                border-radius: 5px;
            }
        }
    }
    .shou{
        width: 25px;
        height: 25px;
        position: absolute;
        left: 5px;
        top: 5px;
        img{
            width: 100%;
            height: 100%;
        }
    }
}
</style>