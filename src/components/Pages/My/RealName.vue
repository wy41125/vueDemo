<template>
    <div>
        <van-nav-bar
            title="实名认证"
            left-arrow
            @click-left="onClickLeft"
        />

        <div class="Tips">
            为提升个人账户信用度和安全保障，建议进行实名认证！一旦认证，不可更改认证信息。
        </div>

        <div class="FuncBar">
            <div class="FuncBar-line">
                <span class="left-span">姓名</span>
                <input type="text" placeholder="请输入真实姓名">
            </div>
            <div class="FuncBar-line">
                <span class="left-span">身份证</span>
                <input type="text" placeholder="请输入正确的身份证号码">
            </div>
        </div>

        <div class="Agreement">
            点击提交，表示已经同意我们的<span>《实名认证条列》</span>          
        </div>

        <div class="div-btn">
            <button :class="canClick?'Active':''">提交</button>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                canClick:true
            }
        },
        computed: {
            
        },
        methods: {
            onClickLeft:function(){
                this.$router.go(-1);
            }
        },
        created() {
            
        }, 
    }
</script>

<style lang="less" scoped>
@import '../../../assets/less/rem.less';
.FuncBar{
    .FuncBar-line{
        background: #ffffff;
        border-bottom: 1px solid #e3e3e3;
        &:last-child{
            border: 0;
        }
        &{
            .rem(14);
            font-size: @rv;
        }
        &{
            .rem(15);
            padding: @rv;
        }
        .left-span{
            color: #333;
            display: inline-block;
            text-align: left;
            &{
                .rem(50);
                width: @rv;
            }
        }
        input{
            border:0;
        }
    }
}
.div-btn{
    .rem(25);
    margin-top: @rv;
    &{
        .rem(8);
        margin-left: @rv;
        margin-right: @rv;
    }
    &{
        .rem(45);
        height: @rv;
    }
    button{
        width: 100%;
        height: 100%;
        border: 0;
        border-radius: 4px;
        color: #ffffff;
        &.Active{
            background: -moz-linear-gradient(left, #56E48E 0%, #24CF68 100%);
            background: -webkit-gradient(linear, top left, top right, color-stop(0%,#56E48E), color-stop(100%,#24CF68));
            background: -webkit-linear-gradient(left, #56E48E 0%,#24CF68 100%);
            background: -o-linear-gradient(left, #56E48E 0%,#24CF68 100%);
            background: -ms-linear-gradient(left, #56E48E 0%,#24CF68 100%);
            background: linear-gradient(to right, #56E48E 0%,#24CF68 100%);
        }
    }
}
.Tips{
    width: 100%;
    background: #F7ECD3;
    color: #666;
    box-sizing: border-box;
    &{
        .rem(14);
        font-size: @rv;
    }
    &{
        .rem(11);
        padding-top: @rv;
        padding-bottom: @rv;
    }
    &{
        .rem(15);
        padding-left: @rv;
        padding-right: @rv;
    }
}
.Agreement{
    color: #BBBBBB;
    &{
        .rem(14);
        font-size: @rv;
    }
    &{
        .rem(17);
        padding: @rv;
    }
    span{
        color: #0960CC;
    }
}
</style>