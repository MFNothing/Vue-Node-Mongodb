<template>
  <div>
    <h1>分类列表</h1>
    <el-table :data="items">
      <el-table-column prop="_id" label="ID" width="230"></el-table-column>
      <el-table-column prop="name" label="分类名称"></el-table-column>
      <el-table-column fixed="right" label="操作" width="180">
        <template slot-scope="scpoe">
            <!-- 注意跳转链接开头不加/，表示不是从根目录进入 -->
          <el-button type="primary" size="small" @click="$router.push(`/categories/edit/${scpoe.row._id}`)">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>


<script>
export default {
  data() {
    return {
      items: []
    };
  },
  created() {
    this.fetch();
  },
  methods: {
    async fetch() {
      const res = await this.$http.get("categories");
      this.items = res.data;
    }
  }
};
</script>