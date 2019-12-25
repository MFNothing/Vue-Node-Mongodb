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
        <!-- 字体图标可以改变大小和颜色，精灵图不可以，颜色是多少就是多少，大小也不好变化 -->
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
        <!-- card -->
        <m-list-card icon="icon-menu" title="新闻资讯" :categories="newsCats">
            <template #items="{category}" >
                <div class="pt-2 fs-lg d-flex"
                v-for="(news, index) in category.newsList" :key="index">
                    <span class="text-info">[{{news.categoryName}}]</span>
                    <span class="px-2">|</span>
                    <span class="flex-1 text-dark-1 text-ellipsis pr-2">{{news.title}}</span>
                    <span class="text-gray">{{news.createdAt | date}}</span>
                </div>
            </template>
        </m-list-card>
        <m-list-card icon="icon-helmet-" title="英雄列表" :categories="heroCats">
            <template #items="{category}" >
                <div class="flex-wrap d-flex" style="margin: 0 -0.5rem;">
                    <div class="fs-lg hero-container p-2" style="width: 20%;"
                    v-for="(hero, index) in category.heroList" :key="index">
                        <img class="hero-img" :src="hero.avatar" />
                        <div class="pt-1">{{hero.name}}</div>
                    </div>
                </div>
            </template>
        </m-list-card>
        <!-- card end -->
        <!-- 字体图标 默认font-family为iconfont，如果需要修改需要到iconfont网站里面的项目中修改-->
        <!-- <i class="iconfont icon-menu"/> -->
    </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import  dayjs from 'dayjs'
export default {
    name: 'home',
    filters: {
        date(val) {
            return dayjs(val).format('MM/DD')
        }
    },
    data() {
        return {
            swiperOption: {
                pagination: {
                    el: '.swiper-pagination'
                }
            },
            newsCats: [],
            heroCats: []
        }
    },
    methods: {
        async fetchNewsCats() {
            const res = await this.$http.get('news/list')
            this.newsCats = res.data || []
        },
        async fetchHeroCats() {
            const res = await this.$http.get('heroes/list')
            this.heroCats = res.data || []
        }
    },
    created() {
        this.fetchNewsCats()
        this.fetchHeroCats()
    },
}
</script>



 <!-- <m-card icon="icon-menu" title="新闻资讯">
            <div class="nav jc-between">
                <div class="nav-item active">
                    <div class="nav-link">热门</div>
                </div>
                <div class="nav-item">
                    <div class="nav-link">新闻</div>
                </div>
                <div class="nav-item">
                    <div class="nav-link">公告</div>
                </div>
                <div class="nav-item">
                    <div class="nav-link">活动</div>
                </div>
                <div class="nav-item">
                    <div class="nav-link">赛事</div>
                </div>
            </div>
             <div class="pt-3">
                <swiper>
                    <swiper-slide v-for="x in 5" :key="x">
                        <div class="pt-2"
                        v-for="n in 5" :key="n">
                            <span>新闻</span>
                            <span>|</span>
                            <span>夏日新版本“稷下星之队”即将6月上线</span>
                            <span>12-02</span>
                        </div>
                    </swiper-slide>
                </swiper>
            </div>
        </m-card> -->


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

.hero-container {
    width: 20%
}

.hero-img {
    width: 100%;
}
</style>
