<template>
    <div class="page-article" v-if="model">
        <div class="d-flex py-3 px-1 border-bottom text-blue ai-center">
            <div class="iconfont icon-back "></div>
            <strong class="flex-1">
                {{model.title}}
            </strong>
            <div class="text-gray fs-sm">12-01</div>
        </div>
        <div v-html="model.body" class="px-3 article-body fs-lg">
        </div>
        <div class="px-3 border-top py-3">
            <div class="d-flex ai-center">
                <i class="iconfont icon-menu"></i>
                <strong class="text-blue fs-lg ml-1">
                    相关资讯
                </strong>
            </div>
            <div class="pt-2 fs-lg">
                <router-link 
                tag="div" 
                :to="`/articles/${item._id}`"
                v-for="item in model.related" 
                :key="item._id"
                class="py-2">
                    {{item.title}}
                </router-link>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    props: {
        id: { required: true}
    },
    data() {
        return {
            model: null
        }
    },
    methods: {
        async fetch() {
            const res = await this.$http.get(`articles/${this.id}`)
            this.model = res.data
        }
    },
    created() {
        this.fetch()
    },
    watch: {
        id() {
            this.fetch()
        }
    },
}
</script>

<style lang="scss">
.page-article {
    .icon-back {
        font-size: 1.5rem;
    }
    .article-body {
        img {
            width: 100%;
            height: auto;
        }

        iframe {
            width: 100%;
            height: auto;
        }
    }
}
</style>