<template>
    
    <div class="ideal-form">
        <h3>Thông tin cá nhân </h3>
        <div class="form">
            <div class="image" >
                <img style="width:100px;height:150px;border-radius:50%" src="../../image/avatar.jpg" alt="">
            </div>
            <el-form class="infomation" label-width="120px">
                <el-form-item label="Họ và tên">
                    <el-input  disabled placeholder="Lê Hồng Quang" />
                </el-form-item>
                <el-form-item label="Lớp">
                    <el-input  disabled placeholder="64TH" />
                </el-form-item>
                <el-form-item label="Ngày sinh">
                    <el-input  disabled placeholder="6/9/2005" />
                </el-form-item>
                <el-form-item label="Nơi sinh">
                    <el-input  disabled placeholder="Hà Nội" />
                </el-form-item>
                <el-form-item label="Giới tính">
                    <el-input  disabled placeholder="Nam" />
                </el-form-item>
                <el-form-item label="Số điện thoại">
                    <el-input  disabled placeholder="1900561252" />
                </el-form-item>
                <el-form-item label="CMND">
                    <el-input  disabled placeholder="1900561252" />
                </el-form-item>
                <el-form-item label="Ngày cấp">
                    <el-input  disabled placeholder="19/6/2001" />
                </el-form-item>
                <el-form-item label="Nơi cấp ">
                    <el-input  disabled placeholder="Hà Nội" />
                </el-form-item>
                <el-form-item>
                <el-button type="primary" @click="onSubmit">Save</el-button>
                <el-button>Cancel</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>

// do not use same name with ref
export default {


}

</script>

<style scoped>
    .ideal-form{
       /* display: flex; */
       margin: 30px 0 0 50px;
    }
    .infomation{
       
    }
    .image{
       margin-right: 50px;
    height: 200px;
    width: 150px;
    border: 4px solid grey;
    display: flex;
    align-items: center;
    justify-content: center;
    }
    .header{
    }
    .form{
        display:flex;
        margin:20px 0;

    }
</style>