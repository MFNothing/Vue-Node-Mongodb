<template>
  <div>
    <h1>{{id ? '编辑' : '新建'}}文章</h1>
    <el-form label-width="100px" @submit.native.prevent="save">
      <el-form-item label="所属分类">
        <el-select v-model="model.categories" placeholder="请选择" multiple>
          <!-- label 展示的内容 value 对应选中后 model.parent -->
          <el-option
            v-for="item in categories"
            :key="item._id"
            :label="item.name"
            :value="item._id"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="标题">
        <el-input v-model="model.title"></el-input>
      </el-form-item>
      <el-form-item label="详情">
        <vue-editor v-model="model.body" useCustomImageHandler @image-added="handleImageAdded"></vue-editor>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>


<script>
import { VueEditor } from "vue2-editor";

export default {
  props: {
    id: {}
  },
  data() {
    return {
      model: {},
      categories: []
    };
  },
  components: {
    VueEditor
  },
  methods: {
    async save() {
      let res;
      if (!this.id) {
        res = await this.$http.post("rest/articles", this.model);
      } else {
        res = await this.$http.put(`rest/articles/${this.id}`, this.model);
      }
      console.log(res);
      // 跳转到category列表页面
      this.$router.push("/articles/list");
      this.$message({
        type: "succress",
        message: "保存成功"
      });
    },
    async fetch() {
      const res = await this.$http.get(`rest/articles/${this.id}`);
      this.model = res.data;
    },
    async fetchCategories() {
      const res = await this.$http.get("rest/categories");
      this.categories = res.data;
    },
    async handleImageAdded(file, Editor, cursorLocation, resetUploader) {
      // An example of using FormData
      // NOTE: Your key could be different such as:
      // formData.append('file', file)
 
      var formData = new FormData();
      formData.append("file", file);
 
      const res = await this.$http.post('upload', formData)
      // 把返回的链接传给插入位置
      Editor.insertEmbed(cursorLocation, "image", res.data.url);
      // 重置上传器
      resetUploader();
    }
  },
  created() {
    this.fetchCategories();
    this.id && this.fetch();
  }
};
</script>