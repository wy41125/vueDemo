<template>
    <div>
        <van-nav-bar
            title="地址管理"
            left-arrow
            @click-left="onClickLeft"
        />

        <van-swipe-cell :right-width="70">
            <div class="goods-detile">
                <div class="goods-detile-left">
                    <img src="../../../assets/jade/goods1.png" alt="" width="100%">
                </div>
                <div class="goods-detile-right">
                    <p class="goods-detile-name">
                        缅甸天然翡翠原石玉石开窗色料毛料老坑冰种飘花阳绿手镯半明片料
                    </p>
                    <div class="goods-detile-price">
                        <div class="price-left">
                            <p>押金：<span>￥1000</span></p>
                            <p>租金：<span>1元/月</span></p>
                        </div>
                        <div class="price-btn">
                            <button>去租聘</button>
                        </div>
                    </div>
                </div>
            </div>
            <span slot="right" class="deteleBox">移除</span>
        </van-swipe-cell>
        <van-swipe-cell :right-width="70">
            <div class="goods-detile">
                <div class="goods-detile-left">
                    <img src="../../../assets/jade/goods1.png" alt="" width="100%">
                </div>
                <div class="goods-detile-right">
                    <p class="goods-detile-name">
                        缅甸天然翡翠原石玉石开窗色料毛料老坑冰种飘花阳绿手镯半明片料
                    </p>
                    <div class="goods-detile-price">
                        <div class="price-left">
                            <p>押金：<span>￥1000</span></p>
                            <p>租金：<span>1元/月</span></p>
                        </div>
                        <div class="price-btn">
                            <button>去租聘</button>
                        </div>
                    </div>
                </div>
            </div>
            <span slot="right" class="deteleBox">移除</span>
        </van-swipe-cell>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                isActive:false
            }
        },
        methods:{
            onClickLeft:function(){
                this.$router.go(-1);
            }
        }
    }
</script>

<style lang="less" scoped>
@import '../../../assets/less/rem.less';
.goods-detile{
        border-bottom: 1px solid #E3E3E3;
        .rem(10);
        padding: @rv;
        background: #ffffff;
        .goods-detile-left{
            display: inline-block;
            .rem(90);
            height: @rv;
            width: @rv;
            &{
                .rem(10);
                margin-right: @rv;
            }
        }
        .goods-detile-right{
            display: inline-block;
            width: 65%;
            .goods-detile-name{
                color: #333333;
                .rem(14);
                font-size: @rv;
                &{
                    .rem(15);
                    margin-bottom: @rv;
                }
            }
            .goods-detile-price{
                .price-left{
                    display: inline-block;
                    color: #999999;
                    .rem(12);
                    font-size: @rv;
                    span{
                        color: #FF0000;
                    }
                }
                .price-btn{
                    display: inline-block;
                    vertical-align: middle;
                    .rem(80);
                    width: @rv;
                    float: right;
                    button{
                        width: 100%;
                        .rem(28);
                        height: @rv;
                        background: #24CF68;
                        color: #ffffff;
                        border-radius: 10px;
                        border: 0;
                        &{
                            .rem(13);
                            font-size: @rv;
                        }
                    }
                }
            }
        }
    }

.deteleBox{
    display: inline-block;
    width: 100%;
    height: 100%;
    background: -moz-linear-gradient(left, #EF5B4C 0%, #E82B48 100%);
    background: -webkit-gradient(linear, top left, top right, color-stop(0%,#EF5B4C), color-stop(100%,#E82B48));
    background: -webkit-linear-gradient(left, #EF5B4C 0%,#E82B48 100%);
    background: -o-linear-gradient(left, #EF5B4C 0%,#E82B48 100%);
    background: -ms-linear-gradient(left, #EF5B4C 0%,#E82B48 100%);
    background: linear-gradient(to right, #EF5B4C 0%,#E82B48 100%);
    text-align: center;
    color: #ffffff;
    width: 70px;
    &{
        .rem(140);
        height: @rv;
        line-height: @rv;
    }
    &{
        .rem(14);
        font-size: @rv;
    }
}
</style>