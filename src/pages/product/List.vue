<script setup>
import { onMounted } from 'vue'
import { useProductStore } from '../../stores/useProductStore'
import { useLoadingStore } from '../../stores/useLoadingStore'

const loadingStore = useLoadingStore()
const productStore = useProductStore()

onMounted(async () => {
    loadingStore.startLoading()
    await productStore.getProductList()
    loadingStore.stopLoading()
})
</script>
<template>

    <div class="main-contents">
        <div class="aside">
            <div>
                <h2 class="aside-title">BEST</h2>
                <ul>
                    <li>
                        <a class="aside-link selected" href="#"> 여성의류 </a>
                    </li>
                    <li>
                        <a class="aside-link" href="#">여성가방</a>
                    </li>
                    <li>
                        <a class="aside-link" href="#">여성신발</a>
                    </li>
                    <li>
                        <a class="aside-link" href="#">여성액세서리</a>
                    </li>
                    <li>
                        <a class="aside-link" href="#">남성의류</a>
                    </li>
                    <li>
                        <a class="aside-link" href="#">남성가방</a>
                    </li>
                    <li>
                        <a class="aside-link" href="#">남성신발</a>
                    </li>
                    <li>
                        <a class="aside-link" href="#">남성액세서리</a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="main">
            <h2 class="main-header">여성의류</h2>
            <div class="main-category">
                <ul class="main-category-list">
                    <span class="main-category-item"><label class="main-category-item-label" for="categoryMediumList"
                            title="categoryMediumList">전체</label></span><span class="main-category-item"><label
                            class="main-category-item-label" for="categoryMediumList268103100"
                            title="categoryMediumList">상의</label></span><span class="main-category-item"><label
                            class="main-category-item-label" for="categoryMediumList268102100"
                            title="categoryMediumList">아우터</label></span><span class="main-category-item"><label
                            class="main-category-item-label" for="categoryMediumList268105100"
                            title="categoryMediumList">니트웨어</label></span><span class="main-category-item"><label
                            class="main-category-item-label" for="categoryMediumList268106100"
                            title="categoryMediumList">바지</label></span><span class="main-category-item"><label
                            class="main-category-item-label" for="categoryMediumList268104100"
                            title="categoryMediumList">원피스</label></span><span class="main-category-item"><label
                            class="main-category-item-label" for="categoryMediumList268107100"
                            title="categoryMediumList">스커트</label></span><span class="main-category-item"><label
                            class="main-category-item-label" for="categoryMediumList268108100"
                            title="categoryMediumList">액티브웨어</label></span><span class="main-category-item"><label
                            class="main-category-item-label" for="categoryMediumList268110100"
                            title="categoryMediumList">홈웨어</label></span><span class="main-category-item"><label
                            class="main-category-item-label" for="categoryMediumList268117100"
                            title="categoryMediumList">셋업</label></span><span class="main-category-item"><label
                            class="main-category-item-label" for="categoryMediumList268109100"
                            title="categoryMediumList">이너웨어</label></span>
                </ul>
            </div>

            <div v-if="loadingStore.isLoading" class="loading-overlay">
                <div class="spinner"></div>
            </div>
            <ul v-else class="product-list">
                <li class="product-list-item" v-for="product in productStore.products" :key="product.id">
                    <div class="product-list-item-wrapper">
                        <a href="/detail.html">
                            <div class="product-image-wrapper">
                                <img src="https://img.29cm.co.kr/item/202310/11ee62764f2aec1da5b337e05227e995.jpg?width=400"
                                    alt="[유리하다PICK] GRACIELA premium wool handmade coat_charcoal" />
                            </div>
                        </a>
                        <div class="product-info-wrapper">
                            <a href="/detail.html" class="product-info-link">르니나</a><a href="/detail.html">
                                <div>
                                    <h5 class="product-name">
                                        [유리하다PICK] GRACIELA premium wool handmade
                                        coat_charcoal
                                    </h5>
                                    <div class="product-sale-price-wrapper">
                                        <strong class="product-sale-price">468,000</strong>
                                        <div class="product-price-wrapper">
                                            <span class="product-sale">24%</span><strong
                                                class="product-price">355,680</strong>
                                        </div>
                                    </div>
                                    <ul class="product-card">
                                        <li color="#1d1d1d" class="product-card-item">쿠폰</li>
                                    </ul>
                                </div>
                            </a>
                            <div class="product-bottom-wrapper">
                                <button class="product-like">
                                    <i class="fa-regular fa-heart"></i> 2,463
                                </button>
                                <a href="https://product.29cm.co.kr/catalog/2270129#review" class="product-review">
                                    <span class="review">
                                        <i class="fa-regular fa-comment"></i>48
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>


</template>
<style scope>
.main-contents {
    display: flex;
    min-width: 900px;
    padding: 40px 50px 90px;
}

.aside {
    width: 200px;
    padding-right: 80px;
}

.aside-title {
    width: 200px;
    padding-bottom: 12px;
    border-bottom: 4px solid #000000;
    font-size: 23px;
    font-weight: 800;
    line-height: 1.25;
}

.aside-link {
    display: block;
    width: 100%;
    line-height: 2.13;
    font-size: 16px;
    color: rgb(93, 93, 93);
    text-align: left;
    outline: none;
    font-weight: 200;
}

.aside-link.selected {
    color: rgb(0, 0, 0);
    font-weight: 700;
}

.main {
    flex: 1;
}

.main-header {
    font-size: 34px;
    font-weight: 600;
    line-height: 41px;
    margin-bottom: 36px;
}

.main-category {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    border: 1px solid rgb(212, 212, 212);
    background-color: rgb(255, 255, 255);
}

.main-category-list {
    display: flex;
    flex-wrap: wrap;
}

.main-category-item {
    min-height: 20px;
    line-height: 20px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    position: relative;
    overflow: visible;
    height: 46px;
}

.main-category-item-input {
    position: absolute;
    top: -100%;
    left: -100%;
    z-index: -10;
    width: 13px;
    height: 13px;
    background: transparent;
}

.main-category-item-label {
    display: inline-block;
    position: relative;
    z-index: 1;
    line-height: 20px;
    cursor: pointer;
    padding-left: 0px;
    margin: 0px 24px;
    color: rgb(0, 0, 0);
}

.product-list {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    margin-top: 36px;
    counter-reset: list-number;
    grid-gap: 40px 20px;
    min-height: 800px;
}

.product-list-item {
    position: relative;
    grid-column: auto / span 3;
}

.product-list-item::before {
    counter-increment: list-number 1;
    content: counter(list-number);
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    position: absolute;
    left: 0px;
    top: 0px;
    width: 46px;
    height: 46px;
    background-color: rgb(0, 0, 0);
    z-index: 1;
    pointer-events: none;
    color: white;
    font-size: 20px;
    font-weight: 400;
    letter-spacing: 1px;
    line-height: 46px;
}

.product-list-item:nth-of-type(-n + 3) {
    position: relative;
    grid-column: auto / span 4;
    padding-bottom: 40px;
    border-bottom: 1px solid rgb(228, 228, 228);
}

.product-list-item:nth-of-type(-n + 3)::before {
    width: 62px;
    height: 62px;
    font-size: 28px;
    letter-spacing: 2px;
    line-height: 62px;
}

.product-list-item-wrapper {
    font-size: 12px;
    line-height: 1.4;
    position: relative;
}

.product-image-wrapper {
    overflow: hidden;
    position: relative;
    padding-top: 100%;
    background-color: rgb(244, 244, 244);
}

.product-image-wrapper>img {
    width: 100%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}

.product-info-wrapper {
    padding: 16px 0px 0px;
}

.product-info-link {
    color: rgb(0, 0, 0);
    line-height: 1.4;
    display: block;
    overflow: hidden;
    font-weight: 700;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 11px;
    margin-bottom: 4px;
}

.product-name {
    font-weight: 300;
    font-size: inherit;
    white-space: normal;
    display: -webkit-box;
    max-height: calc(4.2em);
    overflow-wrap: break-word;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

.product-sale-price-wrapper {
    margin-top: 12px;
    font-size: 14px;
    font-weight: 500;
    line-height: 1;
}

.product-sale-price {
    line-height: 1;
    font-size: 11px;
    color: rgb(196, 196, 196);
    font-weight: normal;
    text-decoration: line-through;
}

.product-price-wrapper {
    margin-top: 4px;
}

.product-sale {
    color: rgb(255, 72, 0);
    margin-right: 5px;
}

.product-price {
    font-weight: inherit;
    color: rgb(0, 0, 0);
}

.product-card {
    margin-top: 6px;
    display: flex;
}

.product-card-item {
    padding: 0px 6px;
    border-radius: 1px;
    font-size: 10px;
    font-weight: 500;
    line-height: 18px;
    background-color: rgb(244, 244, 244);
    color: rgb(29, 29, 29);
}

.product-bottom-wrapper {
    color: rgb(93, 93, 93);
    font-size: 11px;
    margin-top: 16px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
}

.product-like {
    font-size: inherit;
    color: inherit;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    width: 58px;
    line-height: 1;
}

.product-review {
    color: inherit;
    margin-left: 5px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
}
</style>