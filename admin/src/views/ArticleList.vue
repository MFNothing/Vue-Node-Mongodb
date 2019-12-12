<template>
  <div>
    <h1>文章列表</h1>
    <el-table :data="items">
      <el-table-column prop="_id" label="ID" width="230"></el-table-column>
      <el-table-column prop="title" label="文章标题"></el-table-column>
      <el-table-column fixed="right" label="操作" width="180">
        <template slot-scope="scope">
          <!-- 注意跳转链接开头不加/，表示不是从根目录进入 -->
          <el-button
            type="primary"
            size="small"
            @click="$router.push(`/articles/edit/${scope.row._id}`)"
          >编辑</el-button>
          <el-button type="primary" size="small" @click="remove(scope.row)">删除</el-button>
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
      const res = await this.$http.get("rest/articles");
      this.items = res.data;
    },
    async remove(row) {
        this.$confirm(`是否删除分类 ${row.title}`, "提示", {
            confirmButtonText: "确定",
            cancelButtonText: "取消",
            type: "warning"
        })
        .then(async () => {
            const res = await this.$http.delete(`rest/articles/${row._id}`)
            console.log(res)
            this.$message({
                type: "success",
                message: "删除成功!"
            });
            this.fetch()
        })
        .catch(() => {
            this.$message({
                type: "info",
                message: "已取消删除"
            });
        });
    }
  }
};
</script>