<script setup>
</script>

<template>
  <div class="w-full h-full">
    <el-container class="w-full h-full">
      <el-header class="text-center border-b">
        <div class="mt-4 space-x-16">
          <RouterLink exact :to="{ name: 'index' }"
            class="pt-4 text-gray-400 no-underline  hover:text-blue-500   w-14 h-8 text-center"
            active-class="border-b-2 active-text-color underline text-sky-600 border-blue-500">口语训练
          </RouterLink>
          <RouterLink exact :to="{ name: 'read' }"
            class="pt-4 text-gray-400 no-underline hover:text-blue-500   w-14 h-8 text-center"
            active-class="border-b-2 active-text-color text-sky-600 underline border-blue-500">场景对话
          </RouterLink>
          <RouterLink exact :to="{ name: 'jduge' }"
            class="pt-4 text-gray-400 no-underline  hover:text-blue-500   w-14 h-8 text-center"
            active-class="border-b-2 active-text-color text-sky-600 underline border-blue-500">测评打分
          </RouterLink>
        </div>
      </el-header>
      <el-main>
        <RouterView></RouterView>
      </el-main>
    </el-container>
  </div>
</template>

<style scoped>
.active-text-color {
  color: #3370ff !important;
  text-decoration: underline;
}

.border-b {
  border-bottom: 1px solid #e4e7ed;
}
</style>
