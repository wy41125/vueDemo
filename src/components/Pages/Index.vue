<template>
    <div class="Index">
        <!-- 头部 -->
        <div class="top-div">
            <div class="top-div-bg">
                <div class="top-div-swipe">
                    <van-swipe :autoplay="3000">
                        <van-swipe-item v-for="(image, index) in images" :key="index">
                            <img :src="image" style="100%"/>
                        </van-swipe-item>
                    </van-swipe>
                </div>
            </div>
            <div class="top-div-Notice">

            </div>
        </div>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                images: [
                    require('../../assets/index/bannar1.png'),
                    require('../../assets/index/bannar2.png'),
                    require('../../assets/index/bannar3.png')
                ]
            }
        },
        computed: {
            
        },
        methods: {
            
        },
        created() {
            
        }, 
    }
</script>

<style  scoped>
.top-div{
    background-color: #fff;
}
.top-div .top-div-bg{
    width: 100%;
    height: 11.25rem;
    background: url("../../assets/index/topBg.png") no-repeat;
    background-size: 100%;
}
.top-div-bg .top-div-swipe {
    width: 90%;
    height: 11.25rem;
    border-radius: 20px;
    margin: 0 auto;
    overflow: hidden;
}
</style>