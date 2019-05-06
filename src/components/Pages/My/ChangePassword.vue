<template>
    <div>
        <van-nav-bar
            title="修改密码"
            left-arrow
            @click-left="onClickLeft"
        />

        <div class="FuncBar">
            <div class="FuncBar-line">
                <span class="left-span">原密码</span>
                <input type="text" placeholder="请输入原密码">
            </div>
            <div class="FuncBar-line">
                <span class="left-span">新密码</span>
                <input type="text" placeholder="请输入新密码">
            </div>
            <div class="FuncBar-line">
                <span class="left-span">确认密码</span>
                <input type="text" placeholder="请再次输入新密码">
            </div>
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
</style>