<template>
    <div>
        <div class="addList-detile">
            <p class="top-detile-name">
                王大锤<span>15188888888</span>
            </p>
            <p class="top-detile-text">
                浙江省杭州市西湖区古荡文一西路98号数娱大厦9F 数游科技
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="less" scoped>
@import '../../assets/less/rem.less';
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
</style>