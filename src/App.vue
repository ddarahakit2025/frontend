<script setup>
</script>

<template>
    <ul>
        <li>
            <router-link to="/product/list">상품 목록</router-link>
        </li>
        <li>
            <router-link to="/user/login">로그인</router-link>
        </li>
    </ul>
    <router-view></router-view>
</template>

<style scoped></style>
