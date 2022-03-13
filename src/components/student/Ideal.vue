<template>
    <div class="ideal-form">
  <el-form  label-width="120px">
    <el-form-item label="Họ và tên">
      <el-input ></el-input>
    </el-form-item>
     <el-form-item label="Mã sinh viên">
      <el-input ></el-input>
    </el-form-item>
     <el-form-item label="Lớp">
      <el-input ></el-input>
    </el-form-item>
    <el-form-item label="Khóa">
      <el-select placeholder="chọn khóa đi bạn êi">
        <el-option label="K57" value="shanghai"></el-option>
        <el-option label="K58" value="beijing"></el-option>
        <el-option label="K59" value="beijing"></el-option>
        <el-option label="K60" value="beijing"></el-option>
        <el-option label="K61" value="beijing"></el-option>
        <el-option label="K62" value="beijing"></el-option>
        <el-option label="K63" value="beijing"></el-option>

      </el-select>
    </el-form-item>

     <el-form-item label="Khoa">
      <el-select placeholder="chọn khoa đi bạn êi">
        <el-option label="CNTT" value="shanghai"></el-option>
        <el-option label="Kinh tế" value="beijing"></el-option>
        <el-option label="Kế toán" value="beijing"></el-option>
        <el-option label="Hệ thống thông tin" value="beijing"></el-option>
        <el-option label="Công nghệ Phân mềm" value="beijing"></el-option>

      </el-select>
    </el-form-item>
    
    
    <el-form-item label="Vấn đề">
      <el-checkbox-group>
        <el-checkbox label="Lịch học lằng nhằng" name="type"></el-checkbox>
        <el-checkbox label="Web trường toàn sập" name="type"></el-checkbox>
        <el-checkbox label="Cở sở vật chất kém" name="type"></el-checkbox>
        <el-checkbox label="Học phí cao" name="type"></el-checkbox>
      </el-checkbox-group>
    </el-form-item>
    <!-- <el-form-item label="Resources">
      <el-radio-group>
        <el-radio label="Sponsor"></el-radio>
        <el-radio label="Venue"></el-radio>
      </el-radio-group>
    </el-form-item> -->
    <el-form-item label="Ý kiến ">
      <el-input type="textarea"></el-input>
    </el-form-item>
    <el-form-item label="Ẩn thông tin">
      <el-switch ></el-switch>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">Create</el-button>
      <el-button>Cancel</el-button>
    </el-form-item>
  </el-form>
    </div>
</template>

<script>

// do not use same name with ref
export default {


}

</script>

<style scoped>
    .ideal-form{
        display: flex;
    align-items: center;
    }
</style>