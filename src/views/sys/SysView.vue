<template>
    <div class="w-full h-full">
        <div class="grid grid-cols-3 gap-4">
            <div v-for="i in 4">
                <el-card class="w-full h-full " :body-style="{ padding: '0px' }">
                    <div style="background-image: url('https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png')"
                        class="bg-cover w-full h-52"></div>
                    <div style="padding: 14px">
                        <span>Yummy hamburger</span>
                        <div class="bottom">
                            <time class="time">{{ currentDate }}</time>
                            <el-button type="primary" @click="goDetail(i)">查看</el-button>
                        </div>
                    </div>
                </el-card>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router';
const router = useRouter()
const currentDate = ref(new Date())
let goDetail = (id) => {
    router.push({ name: 'video', query: { id: id } })
}

</script> 
 
<style scoped></style>
