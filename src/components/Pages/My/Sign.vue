<template>
    <div>
        <van-nav-bar
            title="登录"
        />

        <div class="bigBox">
            <div class="FuncBar">
                <div class="FuncBar-line">
                    <input type="text" placeholder="请输入原密码">
                </div>
                <div class="FuncBar-line">
                    <input type="text" placeholder="请输入新密码">
                    <i :class="canLook?'activelook':''" @click="FuncLook"></i>
                </div>
            </div>

            <div class="forget">
                <span @click="$router.push({name:'PasswordBack'})">忘记密码?</span>
            </div>

            <div class="div-btn">
                <button :class="canClick?'Active':''">提交</button>
            </div>

            <div class="register">
                <span @click="$router.push({name:'Register'})">注册新用户</span>
            </div>
        </div>
        
    </div>
</template>

<script>
    export default {
        data() {
            return {
                canLook:true,
                canClick:true
            }
        },
        computed: {
            
        },
        methods: {
            onClickLeft:function(){
                this.$router.go(-1);
            },
            FuncLook:function(){
                this.canLook = this.canLook ? false : true;
            }
        },
        created() {
            let htmlHeight = document.documentElement.clientHeight || document.body.clientHeight;
            let htmlDom = document.getElementsByClassName("bigBox")[0];
            // if(htmlwidth >750){
            //     htmlwidth = 750;
            // }
            htmlDom.style.height = htmlHeight - 45  + "px";
        }, 
    }
</script>

<style lang="less" scoped>
@import '../../../assets/less/rem.less';
.bigBox{
    .rem(23);
    padding-left: @rv;
    padding-right: @rv;
    background: #ffffff;
}
.FuncBar{
    .FuncBar-line{
        background: #ffffff;
        border-bottom: 1px solid #e3e3e3;
        position: relative;
        i{
            display: inline-block;
            background: url(../../../assets/my/icon_noLook.png) no-repeat;
            background-size: 100%;
            &{
                .rem(21);
                width: @rv;
            }
            &{
                .rem(15);
                height: @rv;
            }
            position: absolute;
            top: 45%;
            &{
                .rem(12);
                right: @rv;
            }
            &.activelook{
                background: url(../../../assets/my/icon_look.png) no-repeat;
                background-size: 100%;
            }
        }
        &{
            .rem(14);
            font-size: @rv;
        }
        &{
            .rem(15);
            padding: @rv 0;
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

.forget{
    .rem(31);
    margin-top: @rv;
    text-align: right;
    color: #999999;
    &{
        .rem(12);
        font-size: @rv;
    }
}

.register{
    text-align: center;
    color: #999999;
    .rem(23);
    margin-top: @rv;
    &{
        .rem(12);
        font-size:@rv;
    }
}
</style>