<template>
    <m-card icon="icon-menu" title="新闻资讯">
        <div class="nav jc-between">
            <div class="nav-item" :class="{active: active === index}"
            v-for="(category, index) in categories" :key="index"
            @click="active = index"
            >
                <div class="nav-link">{{category.name}}</div>
            </div>
        </div>
        <div class="pt-3">
            <swiper>
                <swiper-slide v-for="(category, index) in categories" :key="index">
                    <slot name="items" :category="category">
                    </slot>
                </swiper-slide>
            </swiper>
        </div>
    </m-card>
</template>

<script>
export default {
    props: {
        icon: {type: String, required: true},
        title: {type: String, required: true},
        categories: {type: Array, required: true}
    },
    data() {
        return {
            active: 1
        }
    },
}
</script>

<style lang="sass">

</style>