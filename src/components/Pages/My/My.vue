<template>
    <div>
        <!-- top -->
        <div class="user">
            <div class="userTop">
                <i class="setIcon" @click="$router.push({name:'Setting'})"></i>
                <div class="userTop-img">
                    <img src="../../../assets/my/userImg-big.png" alt="" width="100%">
                </div>
                <div class="userTop-right">
                    <h3 class="userTop-name">王大锤</h3>
                    <div class="userTop-phone">
                        <p>手机号码：151***487</p>
                        <p>押金金额：<span>￥500</span></p>
                    </div>
                </div>
            </div>
        </div>

        <!-- 功能栏 -->
        <div class="FuncBar">
            <div class="FuncBar-line">
                <img class="line-icon" src="../../../assets/my/icon_Order.png"/>
                我的订单
                <i class="next"></i>
            </div>
            <div class="FuncBar-line" @click="$router.push({name:'AddressList'})">
                <img class="line-icon addressIcon" src="../../../assets/my/icon_address.png"/>
                我的地址
                <i class="next"></i>
            </div>
            <div class="FuncBar-line">
                <img class="line-icon" src="../../../assets/my/icon_Record.png"/>
                中奖记录
                <i class="next"></i>
            </div>
            <div class="FuncBar-line" @click="$router.push({name:'Collection'})">
                <img class="line-icon" src="../../../assets/my/icon_Collection.png"/>
                我的收藏
                <i class="next"></i>
            </div>
            <div class="FuncBar-line">
                <img class="line-icon" src="../../../assets/my/icon_Invitation.png"/>
                邀请有奖
                <!-- <i class="next"></i> -->
            </div>
        </div>

        <!-- 退出 -->
        <div class="signOut">
            账号退出
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            active:0
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

<style lang="less" scoped>
@import '../../../assets/less/rem.less';

.user{
    width: 100%;
    .rem(91);
    height: @rv;
    background: #fff;
    &{
        .rem(10);
        padding-top: @rv;
    }
    .userTop{
        width: 90%;
        margin: 0 auto;
        border-radius:10px;
        background: #24CF68;
        .rem(120);
        height: @rv;
        position: relative;
        &{
            .rem(30);
            padding-top:@rv; 
        }
        &{
            .rem(22);
            padding-left: @rv;
        }
        box-sizing: border-box;
        .setIcon{
            display: inline-block;
            .rem(16);
            width: @rv;
            height: @rv;
            position: absolute;
            z-index: 1;
            &{
                .rem(11);
                top: @rv;
            }
            &{
                .rem(15);
                right: @rv;
            }
            background: url(../../../assets/my/setIcon.png) no-repeat;
            background-size: 100%;
        }
        .userTop-img{
            vertical-align: top;
            display: inline-block;
            .rem(65);
            width: @rv;
            height: @rv;
            background: #fff;
            border-radius: 50%;
            text-align: center;
            &{
                .rem(15);
                margin-right: @rv;
            }
        }
        .userTop-right{
            vertical-align: top;
            display: inline-block;
            width: 65%;
            color: #fff;
            .rem(13);
            font-size: @rv;
            .userTop-name{
                .rem(18);
                font-size: @rv;
                &{
                    .rem(14);
                    margin-bottom: @rv;
                }
            }
            .userTop-phone{
                span{
                    color: #ff0000;
                }
            }
        }
    }
}

.FuncBar{
    .rem(15);
    padding: 0 @rv;
    &{
        .rem(50);
        margin-top: @rv;
    }
    background: #fff;
    .FuncBar-line{
        .rem(13);
        padding: @rv 0;
        color: #333;
        &{
            .rem(14);
            font-size: @rv;
        }
        border-bottom:1px solid #E3E3E3;
        &:last-child{
            border: 0;
        }
        position: relative;
        .line-icon{
            display: inline-block;
            vertical-align: middle;
            &{
                .rem(17.5);
                width: @rv;
            }
            &{
                .rem(18);
                height: @rv;
            }
            &{
                .rem(10);
                margin-right: @rv;
            }
            &.addressIcon{
                .rem(22);
                height: @rv;
            }
        }
        .next{
            display: inline-block;
            &{
                .rem(6);
                width: @rv;
            }
            &{
                .rem(11);
                height: @rv;
            }
            background: url(../../../assets/icon/icon_next.png) no-repeat;
            background-size: 100%;
            position: absolute;
            top: 40%;
            right: 0;
        }
    }
}

.signOut{
    width: 100%;
    text-align: center;
    background: #fff;
    &{
        .rem(40);
        margin-top: @rv;
    }
    &{
        .rem(44);
        height: @rv;
        line-height: @rv;
    }
    color:#FF0024;
    font-weight: 800;
    .rem(16);
    font-size: @rv;
}
</style>