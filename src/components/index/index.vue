<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .container-box {
        display: flex;
        justify-content: center;
    }
    .container {
        min-width: 800px;
    }
</style>
<template>
    <div class="container-box">
        <div class="container">
            <h1>{{ msg }}</h1>
            <swiper :images="images"></swiper>
        </div>
    </div>

</template>

<script>
import Swiper from './swiper.vue'

export default {
    name: 'hello',
    data () {
        return {
        msg: 'Nice Girl',
        images: [
            'http://ow5nqfa5j.bkt.clouddn.com/imgPPT3.png',
            'http://ow5nqfa5j.bkt.clouddn.com/imgPPT5.png',
            'http://ow5nqfa5j.bkt.clouddn.com/imgPPT4.png',
            'http://ow5nqfa5j.bkt.clouddn.com/imgPPT2.png',
            'http://ow5nqfa5j.bkt.clouddn.com/imgPPT1.png'
        ],
    }
    },
    components: {
        Swiper
    },
    created() {

    },
}
</script>

