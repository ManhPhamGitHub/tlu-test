<template>
  <el-table :data="tableData" height="250" style="width: 100%">
    <el-table-column  type="selection" width="55" />
    <el-table-column prop="idClass" label="lớp học phần"  />
    <el-table-column prop="class" label="Phòng học"  />
    <el-table-column prop="khoa" label="Khoa" />
    <el-table-column prop="status" label="Trang thái" />
    <el-table-column prop="tinchi" label="Số tín chỉ" />
    <el-table-column prop="" >
        <el-button type="primary">
            đăng kí
        </el-button>
    </el-table-column>
    <el-table-column prop="" >
        <el-button type="info">
            Chi tiết
        </el-button>
    </el-table-column>

  </el-table>
</template>
<script>
export default {
    data(){
        return{
         tableData : [
  {
    idClass: 'công nghệ phần mềm',
    class: '59TH1',
    khoa: '59',
    status:"chốt",
    tinchi:3
  },
  {
    idClass: 'công nghệ web',
    class: '60TH1',
    khoa: '60',
    status:"chốt",
    tinchi:3
  },
  {
    idClass: 'phân tích thiết kế hệ thống',
    class: '61TH1',
    khoa: '61',
    status:"hủy",
    tinchi:4
  },
  {
    idClass: 'Cơ sở dữ liệu',
    class: '62TH2',
    khoa: '62',
    status:"bình thường",
    tinchi:3
  },
    ]
        }
}
}
</script>

<style>

</style>