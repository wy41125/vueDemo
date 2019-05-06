<template>
    <div>
        <van-nav-bar
            title="设置"
            left-arrow
            @click-left="onClickLeft"
        />

        <!-- 功能栏 -->
        <div class="FuncBar">
            <div class="FuncBar-line">
                <img class="line-icon linename" src="../../../assets/my/userImg-s.png"/>
                <span class="right-sapn">更换头像<i class="next"></i></span>
            </div>
            <div class="FuncBar-line">
                <span class="linename">手机号码</span>
                <span class="right-sapn">158888888888</span>   
            </div>
            <div class="FuncBar-line">
                <span class="linename">实名认证</span>
                <span class="right-sapn" @click="$router.push({name:'RealName'})">已认证<i class="next"></i></span>
            </div>
        </div>
        <div class="FuncBar">
            <div class="FuncBar-line">
                <span class="linename">修改密码</span>
                <span class="right-sapn" @click="$router.push({name:'ChangePassword'})"><i class="next"></i></span>
            </div>
        </div>

        <!-- 退出 -->
        <div class="signOut">
            账号退出
        </div>
    </div>
</template>

<script>
import Setting from "./Setting.js";
export default Setting;
</script>

<style lang="less" scoped>
@import './Setting.less';
</style>