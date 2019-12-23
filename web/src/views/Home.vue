<template>
    <div class="home">
        <!-- 幻灯片 -->
        <swiper :options="swiperOption">
            <swiper-slide>
                <img class="w-100" src="../assets/images/swiper1.jpeg"/>
            </swiper-slide>
            <swiper-slide>
                <img class="w-100" src="../assets/images/swiper2.jpeg"/>
            </swiper-slide>
            <swiper-slide>
                <img class="w-100" src="../assets/images/swiper3.jpeg"/>
            </swiper-slide>
            <div class="swiper-pagination pagination-home text-right px-3" slot="pagination"></div>
        </swiper>
        <!-- 幻灯片结束 -->
        <!-- 图片导航 精灵图 -->
        <!-- 单色适合用iconfont 多色可以用精灵图片，但是精灵图片不好定位 -->
        <div class="nav-icons bg-white mt-3 text-center pt-3 text-dark-1"> 
            <div class="d-flex flex-wrap">
                <div class="nav-item mb-3"
                v-for="n in 10" :key="n">
                    <i class="sprite sprite-news" />
                    <div class="py-2">爆料站</div>
                </div>
            </div>
            <div class="bg-light py-2 fs-sm">
                <i class="sprite sprite-arrow mr-2"/>
                <span>收起</span>
            </div>
        </div>
        <!-- 图片导航 精灵图 结束-->
    </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  data() {
      return {
          swiperOption: {
              pagination: {
                  el: '.swiper-pagination'
              }
          }
      }
  }
}
</script>


<style lang="scss">
// 加一个这个才能使用scss
@import '../assets/scss/variables';

.pagination-home {
    .swiper-pagination-bullet {
        opacity: 1;
        background: map-get($colors, 'white');
        border-radius: 0.1538rem;
        &.swiper-pagination-bullet-active {
            background: map-get($colors, 'info');
        }
    }
}

.nav-icons {
    border-top: $border-color solid 1px;
    border-bottom: $border-color solid 1px;
    .nav-item {
        width: 25%;
        border-right: $border-color solid 1px;
        &:nth-child(4n) {
            border-right: none;
        }
    }
}


.sprite {
    background: url(../assets/sprite.png) no-repeat 0 0;
    background-size: 28.8462rem;
    display: inline-block;
    &.sprite-news {
        width: 1.7692rem;
        height: 1.5385rem;
        background-position: 63.546% 15.517%;
    }

    &.sprite-arrow {
        width: 0.7692rem;
        height: 0.7692rem;
        background-position: 38.577% 52.076%;
    }
}
</style>
