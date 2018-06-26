<style scoped>
    .content {
        display: flex;
        justify-content: center;
        background-color: #444;
        min-height: 300px;
        margin: 20px;
    }

    .mainBox {
        display: flex;
        flex-direction: column;
        padding: 20px;
        position: relative;
        -webkit-user-select:none;
    }

    .middle {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .mainBox img{
        width: 500px;
        height: 350px;
    }

    .bottom {
        display: flex;
        justify-content: space-between;
        padding-top: 10px;
    }

    .sideBox{
        display: flex;
        flex-direction: column;
        padding: 20px 10px;
    }
    .sideBox .sideImg {
        display: flex;
        justify-content: flex-start;
        width: 200px;
        height: 350px;
        overflow: auto;
        background-color: #555;
    }

    .sideBox .sideImg img{
        display: flex;
        flex-direction: column;
        padding: 5px;
        width: 160px;
        height: 100px
    }

    .icon{
        display: none;
    }
    .icon-contract{
        display: none;
    }

    .icon-left {
        display: none;
        position: absolute;
        bottom: 50%;
        left: 5%;
    }
    .icon-right {
        display: none;
        position: absolute;
        bottom: 50%;
        right: 5%;
    }

    .mainBox:hover .icon-left {
        display: block;
        cursor: pointer;
    }
    .mainBox:hover .icon-right {
        display: block;
        cursor: pointer;
    }


    #screenImg:fullscreen {
        display: flex;
        flex-direction: row;
    }


    #screenImg:fullscreen img {
        display: flex;
        justify-content: center;
        width: 100%;
        max-width: 1000px;
        height: auto;
    }

    #screenImg:fullscreen .icon-contract{
        display: block;
        position: fixed;
        top: 100px;
        right: 100px;
        background-color: black;
    }
    #screenImg:-webkit-full-screen {
        display: flex;
        flex-direction: row;
    }


    #screenImg:-webkit-full-screen img {
        display: flex;
        justify-content: center;
        width: 100%;
        max-width: 1000px;
        height: auto;
    }

    #screenImg:-webkit-full-screen .icon-contract{
        display: block;
        position: absolute;
        top: 10%;
        right: 5%;
        background-color: black;
    }
    #screenImg:-moz-full-screen {
        display: flex;
        flex-direction: row;
    }

    #screenImg:-moz-full-screen img {
        display: flex;
        justify-content: center;
        width: 100%;
        max-width: 1000px;
        height: auto;
    }

    #screenImg:-moz-full-screen .icon-contract{
        display: block;
        position: fixed;
        top: 100px;
        right: 100px;
        background-color: black;
    }

</style>
<template>
    <div class="content">
        <div class="mainBox">
            <div id="screenImg">
                <div class="icon-contract" @click="exitFullscreen()">
                    <a><Icon type="android-contract" style="font-size: 30px; color: #c3cbd6"></Icon></a>
                </div>

                <div class="icon-left">
                    <a @click="changeImg(mark-1)" v-if="mark">
                        <Icon type="chevron-left" style="font-size: 40px; color: #c3cbd6"></Icon>
                    </a>
                </div>
                <div class="middle">
                    <div v-for='(image, index) in images'>
                        <img :src="image"  alt="" :key="index" v-show="index === mark">
                    </div>
                </div>

                <div class="icon-right">
                    <a @click="changeImg(mark+1)" v-if="images.length -1 - mark">
                        <Icon type="chevron-right" style="font-size: 40px; color: #c3cbd6 "></Icon>
                    </a>
                </div>

                <!--<img src="" alt="" v-show="this.images.length === 0">-->
            </div>
            <div class="bottom">
                <span style="color: #c3cbd6;">{{mark + 1}} / {{images.length}}</span>
                <div @click="fullScreen()">
                   <a><Icon type="android-expand" style="font-size: 20px; color: #c3cbd6"></Icon></a>
                </div>
            </div>
        </div>
        <div class="sideBox">
            <div class="sideImg">
                <table cellspacing="0">
                    <tr v-for="(item, index) in images" onmouseover="style.backgroundColor='#666'" onmouseout="style.backgroundColor='#555'">
                        <td style="color: #c3cbd6; padding: 0 1px 0 5px">{{index + 1}}</td>
                        <td>
                            <img :src="item" alt="" @click="changeImg(index)">
                        </td>
                        <td>&nbsp;&nbsp;</td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        data() {
            return {
                mark: 0,
            }
        },
        props: {
            images: Array,
            default: [{}]
        },

        created() {
            // 键盘事件 图片前进与后退
            let self = this;
            document.onkeydown = function (e) {
                e = e ? e : window.event;
                let key = e.which ? e.which : e.keyCode;
                // let key = window.event.keyCode;
                if (key === 37) {
                    if (self.mark > 0) {
                        self.mark--;
                    }
                }
                if (key === 39) {
                    if (self.mark + 1 < self.images.length) {
                        self.mark++;
                    }
                    return;
                }
            }
        },

        methods: {
            changeImg(i) {
                this.mark = i;
            },

            // 全屏展示1
            fullScreen() {
          //  let de = document.documentElement;  整个页面全屏
            let de = document.getElementById("screenImg");

                if (de.requestFullscreen) {
                    de.requestFullscreen();
                } else if (de.mozRequestFullScreen) {
                    de.mozRequestFullScreen();
                } else if (de.webkitRequestFullScreen) {
                    de.webkitRequestFullScreen();
                }
            },
            // 退出全屏1
            exitFullscreen() {
                let de = document;
                if (de.exitFullscreen) {
                    de.exitFullscreen();
                } else if (de.mozCancelFullScreen) {
                    de.mozCancelFullScreen();
                } else if (de.webkitCancelFullScreen) {
                    de.webkitCancelFullScreen();
                }
            }

        },
        components: {
        },
        computed: {
        },

    }
</script>
