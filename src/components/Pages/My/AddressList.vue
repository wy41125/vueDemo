<template>
    <div>
        <van-nav-bar
            title="地址管理"
            left-arrow
            @click-left="onClickLeft"
        />

        <div class="addList">
            <div class="addList-top">
                <div class="addList-top-leftIcon">
                    <i :class="isActive?'active':''"></i>
                </div>
                <div class="addList-top-detile">
                    <div class="addList-detile">
                        <p class="top-detile-name">
                            王大锤<span>15188888888</span>
                        </p>
                        <p class="top-detile-text">
                            浙江省杭州市西湖区古荡文一西路98号数娱大厦9F 数游科技
                        </p>
                    </div>
                </div>
            </div>
            <div class="addList-btn">
                <span class="edit"><i></i>编辑</span><span class="delete"><i></i>删除</span>
            </div>
        </div>

        <div class="newAdd" @click="$router.push({name:'NewAddress'})">
            <i></i>新增地址
        </div>
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
.addList{
    background: #ffffff;
    .addList-top,.addList-btn{
        .rem(15);
        padding: @rv;
    }
    .addList-top{
        border-bottom: 1px solid #e3e3e3;
        .addList-top-leftIcon{
            display: inline-block;
            .rem(19);
            width: @rv;
            height: @rv;
            vertical-align: top;
            &{
                .rem(25);
                margin-top: @rv;
            }
            &{
                .rem(16);
                margin-right: @rv;
            }
            i{
                display: inline-block;
                width: 100%;
                height: 100%;
                background: url(../../../assets/my/icon_noChecklist.png) no-repeat;
                background-size: 100%;
                &.active{
                    background: url(../../../assets/my/icon_Checklist.png) no-repeat;
                    background-size: 100%;
                }
            }
        }
        .addList-top-detile{
            width: 85%;
            display: inline-block;
            .addList-detile{
                color: #333;
                .top-detile-name{
                    &{
                        .rem(18);
                        font-size: @rv;
                    }
                    span{
                        float: right;
                        .rem(16);
                        font-size: @rv;
                    }
                }
                .top-detile-text{
                    .rem(14);
                    font-size: @rv;
                }
            }
        }
    }
    .addList-btn{
        text-align: right;
        span{
            display: inline-block;
            margin: 0 6px;
            color: #999999;
            &{
                .rem(14);
                font-size: @rv;
            }
            i{
                display: inline-block;
                background: url(../../../assets/my/icon_edit.png) no-repeat;
                background-size: 100%;
                vertical-align: middle;
                margin-bottom: 2px;
                margin-right: 5px;
                &{
                    .rem(15);
                    width: @rv;
                }
                &{
                    .rem(17);
                    height: @rv;
                }
            }
            &.delete{
                i{
                    background: url(../../../assets/my/icon_delete.png) no-repeat;
                    background-size: 100%;
                }
            }
        }
    }
}
.newAdd{
    width: 100%;
    .rem(50);
    height: @rv;
    line-height: @rv;
    text-align: center;
    color: #ffffff;
    background: #24CF68;
    position: fixed;
    bottom: 0;
    left: 0;
    &{
        .rem(16);
        font-size: @rv;
    }
    i{
        display: inline-block;
        .rem(13);
        width: @rv;
        height: @rv;
        background: url(../../../assets/my/icon_newAdd.png) no-repeat;
        background-size: 100%;
        vertical-align: middle;
        margin-bottom: 5px;
        margin-right: 5px;
    }
}
</style>