<template>
    <div>
        <van-nav-bar
            title="新增地址"
            left-arrow
            @click-left="onClickLeft"
        />

        <div class="addDetile">
            <div class="addDetile-input">
                <span>收件人</span>
                <input type="text" placeholder="收件人姓名">
            </div>
            <div class="addDetile-input">
                <span>联系电话</span>
                <input type="text" placeholder="收件人电话">
            </div>
            <div class="addDetile-input">
                <span>所在区域</span>
                <input type="text" placeholder="选择省/市/区" v-model="areaValue" @click="lookArea">
            </div>
            <div class="addDetile-input">
                <span>详细地址</span>
                <input type="text" placeholder="填写详细地址">
            </div>
        </div>

        <div class="btn">
            提交
        </div>

        <div class="areaBox" v-show="areaShow">
            <div class="mask"></div>
            <div class="area">
                <van-area 
                    :area-list="areaList" 
                    @confirm="funcConfirm"
                    @cancel="closeArea"
                />
            </div>
        </div>
    </div>
</template>

<script>
import area from '@/assets/JSON/area.js'
    export default {
        data() {
            return {
                areaList: area,
                areaValue:'',
                areaShow:false
            }
        },
        methods:{
            onClickLeft:function(){
                this.$router.go(-1);
            },
            funcConfirm:function(data){
                this.areaValue = ''
                for(let i = 0 ;i<data.length;i++){
                    this.areaValue += data[i].name
                }
                this.areaShow = false
            },
            lookArea:function(){
                this.areaShow = this.areaShow?false:true
            },
            closeArea:function(){
                this.areaShow = false
            }
        },
        created(){
            console.log(area)
        }
    }
</script>

<style lang="less" scoped>
@import '../../../assets/less/rem.less';
.addDetile{
    .addDetile-input{
        .rem(15);
        padding: @rv;
        background: #fff;
        border-bottom: 1px solid #e3e3e3;
        &:last-child{
            border: 0;
        }
        &{
            .rem(14);
            font-size: @rv;
        }
        color: #333333;
        span{
            display: inline-block;
            width: 20%;
            text-align: right;
        }
        input{
            border: 0;
        }
    }
}
.btn{
    width: 90%;
    margin: 0 auto;
    text-align: center;
    background: #24CF68;
    border-radius: 10px;
    color: #fff;
    .rem(45);
    height: @rv;
    line-height: @rv;
    &{
        .rem(25);
        margin-top: @rv;
    }
}
.areaBox{
    position: fixed;
    top: 0;
    left: 0;
    width: 375px;
    height: 667px;
    z-index: 100;
    .mask{
        width: 100%;
        height: 100%;
        background: #000;
        opacity: 0.3;
    }
    .area{
        width: 100%;
        position: absolute;
        left: 0;
        bottom: 0;
    }
}
</style>