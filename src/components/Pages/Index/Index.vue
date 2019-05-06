<template>
    <div class="Index">
        <!-- 头部 -->
        <div class="top-div">
            <div class="top-div-bg">
                <div class="top-div-swipe">
                    <van-swipe :autoplay="3000" style="overflow: hidden;height:100%;">
                        <van-swipe-item v-for="(image, index) in images" :key="index">
                            <img :src="image" style="100%"/>
                        </van-swipe-item>
                    </van-swipe>
                </div>
            </div>
            <div class="top-div-Notice">
                <div class="voticeIcon">
                    <i></i>公告<span>新平台试运营期间，所有玉石8折。</span>
                </div>
                <div class="jumpTwo">
                    <van-row type="flex" justify="space-around">
                        <van-col span="11">
                            <div class="Live-div">
                                <div class="div-left">
                                    <h2>直播间</h2>
                                    <p>点击进入直播间</p>
                                </div>
                                <img src="../../../assets/index/Live.png" alt="">
                            </div>
                        </van-col>
                        <van-col span="11">
                            <div class="Live-div">
                                <div class="div-left">
                                    <h2>常见问题</h2>
                                    <p>教你从新手变成老手</p>
                                </div>
                                <img src="../../../assets/index/problem.png" alt="">
                            </div>
                        </van-col>
                    </van-row>
                </div>
            </div>
        </div>

        <!-- 玉石展示 -->
        <div class="exhibition">
            <div class="exhibition-title">
                <i></i>
                玉石展示
                <span>所有玉石都可以参加抽奖</span>
            </div>
            <div class="exhibition-boxs">
                <div class="exhibition-box-img">
                    <img src="../../../assets/index/bannar1.png" alt="" width="100%">
                    <i></i>
                </div>
                
                <div class="exhibition-box-text">
                    <div class="exhibition-box-name">
                        <h4 class="name">千韵日常第一期</h4>
                        <p>已参与:<span>3258</span>人</p>
                    </div>
                    <div class="exhibition-box-btn">
                        <div class="box-btn-left">
                            <p>当前进度：30.1%</p>
                            <van-progress
                                :percentage="30.1"
                                pivot-color="#24CF68"
                                color="#24CF68"
                            />
                        </div>
                        <button class="btn">立即参与</button>
                    </div>
                </div>
            </div>
            <div class="exhibition-boxs">
                <div class="exhibition-box-img">
                    <img src="../../../assets/index/bannar2.png" alt="" width="100%">
                    <i></i>
                </div>
                <div class="exhibition-box-text">
                    <div class="exhibition-box-name">
                        <h4 class="name">千韵日常第一期</h4>
                        <p>已参与:<span>3258</span>人</p>
                    </div>
                    <div class="exhibition-box-btn">
                        <div class="box-btn-left">
                            <p>当前进度：30.1%</p>
                            <van-progress
                                :percentage="30.1"
                                pivot-color="#24CF68"
                                color="#24CF68"
                            />
                        </div>
                        <button class="btn">立即参与</button>
                    </div>
                </div>
            </div>
        </div>

        <!-- 中奖专区 -->
        <div class="winning">
            <div class="winning-title">
                <div class="title-text">
                    <h3>中奖专区</h3>
                    <p>每天都有好礼相送，精彩不断</p>
                </div>
            </div>
            <div class="winning-box">
                <div class="winning-box-detile">
                    <div class="box-title">天韵日常奖第二期：<span>20190427</span>次</div>
                    <div class="box-detile">
                        <div class="box-detile-left">
                            <img src="../../../assets/index/Prize.png" alt="" width="100%">
                            <i></i>
                        </div>
                        <div class="box-detile-right">
                            <div class="detile-right-top">
                                <img src="../../../assets/index/portrait.png" alt="" class="portrait">
                                <p class="name">姓名：<span>王*崔</span></p>
                            </div>
                            <div class="detile-right-bottom">
                                <p class="introduce">玉石证书编号：<span>YJ918058451</span></p>
                                <p class="introduce">揭晓时间：<span>2019.03.12 14:46:29</span></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="winning-box-detile">
                    <div class="box-title">天韵日常奖第二期：<span>20190427</span>次</div>
                    <div class="box-detile">
                        <div class="box-detile-left">
                            <img src="../../../assets/index/Prize.png" alt="" width="100%">
                            <i></i>
                        </div>
                        <div class="box-detile-right">
                            <div class="detile-right-top">
                                <img src="../../../assets/index/portrait.png" alt="" class="portrait">
                                <p class="name">姓名：<span>王*崔</span></p>
                            </div>
                            <div class="detile-right-bottom">
                                <p class="introduce">玉石证书编号：<span>YJ918058451</span></p>
                                <p class="introduce">揭晓时间：<span>2019.03.12 14:46:29</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Index from "./Index.js";
export default Index;
</script>

<style lang="less" scoped>
@import './Index.less';
</style>