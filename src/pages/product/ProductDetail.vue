<script setup>
import { onMounted } from 'vue'
import { useProductStore } from '../../stores/useProductStore'
import { useLoadingStore } from '../../stores/useLoadingStore'
import { useRoute } from 'vue-router';

const loadingStore = useLoadingStore()
const productStore = useProductStore()
const route = useRoute();
const productId = route.params.id;

onMounted(async () => {
    loadingStore.startLoading()
    await productStore.getProductDetail(productId)
    loadingStore.stopLoading()
})
</script>

<template>
    <div class="detail-category">
        <ul class="detail-category-list">
            <li class="detail-category-list-item">
                <div class="detail-category-list-item-wrapper">
                    <div class="detail-category-list-item-first">
                        <span class="detail-category-list-item-first-text">여성의류</span>
                        <i class="fa-solid fa-circle-chevron-down"></i>
                    </div>
                    <div class="detail-category-list-item-sub">
                        <ul>
                            <li>
                                <a href="https://www.29cm.co.kr/shop/category/list?category_large_code=268100100"
                                    class="css-1eew7kn eblrwfh3">여성의류</a>
                            </li>
                            <li>
                                <a href="https://www.29cm.co.kr/shop/category/list?category_large_code=269100100"
                                    class="css-1eew7kn eblrwfh3">여성가방</a>
                            </li>
                            <li>
                                <a href="https://www.29cm.co.kr/shop/category/list?category_large_code=270100100"
                                    class="css-1eew7kn eblrwfh3">여성신발</a>
                            </li>
                            <li>
                                <a href="https://www.29cm.co.kr/shop/category/list?category_large_code=271100100"
                                    class="css-1eew7kn eblrwfh3">여성액세서리</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </li>
            <li class="detail-category-list-item">
                <div class="detail-category-list-item-wrapper">
                    <div class="detail-category-list-item-first">
                        <span class="detail-category-list-item-first-text">아우터</span>
                        <i class="fa-solid fa-circle-chevron-down"></i>
                    </div>
                    <div class="detail-category-list-item-sub">
                        <ul>
                            <li>
                                <a href="https://www.29cm.co.kr/shop/category/list?category_large_code=268100100&amp;category_medium_code=268116100"
                                    class="css-1eew7kn eblrwfh3">EXCLUSIVE</a>
                            </li>
                            <li>
                                <a href="https://www.29cm.co.kr/shop/category/list?category_large_code=268100100&amp;category_medium_code=268103100"
                                    class="css-1eew7kn eblrwfh3">상의</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </li>
            <li class="detail-category-list-item">
                <div class="detail-category-list-item-wrapper">
                    <div class="detail-category-list-item-first">
                        <span class="detail-category-list-item-first-text">롱패딩</span>
                        <i class="fa-solid fa-circle-chevron-down"></i>
                    </div>
                    <div class="detail-category-list-item-sub">
                        <ul>
                            <li>
                                <a href="https://www.29cm.co.kr/shop/category/list?category_large_code=268100100&amp;category_medium_code=268102100&amp;category_small_code=268102135"
                                    class="css-1eew7kn eblrwfh3">바람막이</a>
                            </li>
                            <li>
                                <a href="https://www.29cm.co.kr/shop/category/list?category_large_code=268100100&amp;category_medium_code=268102100&amp;category_small_code=268102114"
                                    class="css-1eew7kn eblrwfh3">무스탕</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </li>
        </ul>
    </div>
    <div class="detail-contents">
        <div class="detail-seller">
            <div class="detail-seller-wrapper">
                <a class="detail-seller-link" href="https://www.29cm.co.kr/shop/brand/7428"><img
                        src="https://img.29cm.co.kr/next-brand/2024/01/02/925d2feee9fe4d76bf4288aa8b95f1ae_20240102151736.jpg?width=100"
                        alt="brand-image" loading="lazy" class="detail-seller-img">
                    <div class="detail-seller-info">
                        <h3 class="detail-seller-name">{{ productStore.product.seller }}</h3>
                        <p class="detail-seller-description">Your best way to nature</p>
                        <div class="detail-seller-link-wrapper">
                            <button class="detail-seller-link-btn" type="button">
                                BRAND HOME
                            </button>
                        </div>
                    </div>
                </a>
            </div>
        </div>

        <div class="detail-product">
            <div class="detail-product-img-wrapper">
                <section class="splide splide--slide splide--ltr splide--draggable is-active is-overflow is-initialized"
                    aria-label="Splide Basic HTML Example" id="splide01" aria-roledescription="carousel">
                    <div class="splide__arrows splide__arrows--ltr"><button class="splide__arrow splide__arrow--prev"
                            type="button" disabled="" aria-label="Previous slide" aria-controls="splide01-track"><svg
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="40" height="40"
                                focusable="false">
                                <path
                                    d="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z">
                                </path>
                            </svg></button><button class="splide__arrow splide__arrow--next" type="button"
                            aria-label="Next slide" aria-controls="splide01-track"><svg
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="40" height="40"
                                focusable="false">
                                <path
                                    d="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z">
                                </path>
                            </svg></button></div>
                    <div class="splide__track splide__track--slide splide__track--ltr splide__track--draggable"
                        id="splide01-track">
                        <ul class="splide__list" id="splide01-list" role="presentation">
                            <li class="splide__slide css-1vt3f8z ewptmlp2 is-active is-visible" id="splide01-slide01"
                                role="tabpanel" aria-roledescription="slide" aria-label="1 of 4">
                                <div class="css-122y91a ewptmlp4"></div>
                            </li>

                        </ul>
                    </div>

                </section>


            </div>
            <div class="detail-product-info-wrapper">
                <div class="css-z25zy4 e1lehz0e0">
                    <div class="css-1k84vqv e1lehz0e1">
                        <div class="css-e9pho6 e1lehz0e2">
                            <div>
                                <div translate="no">
                                    <a class="css-ehtr91 e1lehz0e3">{{ productStore.product.seller }}<!-- -->
                                        <!-- -->
                                    </a>
                                </div>
                                <h2 id="pdp_product_name" class="css-1pmfvv9 e1lehz0e5">
                                    >{{ productStore.product.name }}
                                </h2>
                            </div>
                            <div class="css-1h7c6bs e1lehz0e6">
                                <button class="e1gbu2jd0 css-1qwq84l eqvjolt0" type="button">
                                    <span class="css-17mseqq e1gbu2jd2">찜하기</span>
                                </button>
                            </div>
                        </div>
                        <div class="css-1ilqvfb ecjbr5c0">
                            <div class="css-nbg1jm ecjbr5c1">
                                <div class="css-18biwo eryqt8b0">
                                    <i class="css-9nop8 eryqt8b1">
                                        <i class="css-neyd9i eryqt8b2"> </i>
                                    </i>
                                    <i class="css-9nop8 eryqt8b1"> </i>
                                </div>
                            </div>

                        </div>
                        <div class="css-lcoy4n e1lehz0e7">
                            <div class="css-1rr4qq7 ent7twr0">
                                <p class="css-1bci2fm ent7twr1">{{ productStore.product.originalPrice }}</p>
                                <div class="css-h6obet ent7twr3">
                                    <div>
                                        <span id="pdp_product_price" class="css-4bcxzt ent7twr4">{{
                                            productStore.product.price }}
                                            <em class="css-a5v5ts ent7twr5">원</em>
                                        </span>
                                    </div>
                                    <div class="css-1cevk7j e10mdmim0"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.detail-category {
    display: flex;
    flex-wrap: nowrap;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    margin-bottom: 5px;
    padding-top: 35px;
}

.detail-category-list {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
}

.detail-category-list-item {
    display: flex;
}

.detail-category-list-item:not(:first-of-type)::before {
    color: #5d5d5d;
    font-size: 22px;
    font-weight: 100;
    margin: 0 10px;
    content: "/";
}

.detail-category-list-item-wrapper {
    position: relative;
    display: inline-block;
    height: 33px;
}

.detail-category-list-item-first {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    height: 100%;
}

.detail-category-list-item-first>i {
    color: black;
}

.detail-category-list-item-first-text {
    font-size: 15px;
    font-weight: 500;
    margin-right: 8px;
    color: #000000;
}

.detail-category-list-item-sub {
    position: absolute;
    display: none;
    z-index: 11;
    width: 170px;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    padding: 5px 0;
    background-color: #ffffff;
    border: 1px solid #303033;
}

.detail-category-list-item-wrapper:hover>.detail-category-list-item-sub {
    display: block;
}

.detail-contents {
    min-width: 900px;
    max-width: 1300px;
    margin: 0 auto;
    padding: 40px 50px 0;
}

.detail-seller {
    margin-bottom: 16px;
}

.detail-seller-wrapper {
    position: relative;
    display: flex;
    padding-right: 80px;
}

.detail-seller-link {
    display: inline-flex;
    -webkit-box-align: center;
    align-items: center;
}

.detail-seller-img {
    width: 74px;
    height: 74px;
    object-fit: cover;
    -ms-flex-negative: 0;
    flex-shrink: 0;
}

.detail-seller-info {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    width: 100%;
    margin-left: 14px;
}

.detail-seller-name {
    font-size: 16px;
    line-height: 22px;
    font-weight: 600;
    color: #000000;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.detail-seller-description {
    font-size: 13px;
    color: #000000;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.detail-seller-link-wrapper {
    margin-top: 6px;
    display: flex;
    flex-direction: column;
    -webkit-box-pack: end;
    justify-content: flex-end;
    align-items: flex-start;
}

.detail-seller-link-btn {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    min-width: 40px;
    min-height: 25px;
    display: inline;
    padding: 0 9px;
    font-size: 11px;
    color: #000000;
    border: 1px solid #d4d4d4;
    border-radius: 2px;
}

.detail-product {
    display: flex;
    align-items: flex-start;
    width: 100%;
}

.detail-product-img-wrapper {
    position: relative;
    width: 47%;
    -ms-flex-negative: 0;
    flex-shrink: 0;
}

.detail-product-info-wrapper {
    width: 100%;
    flex: 1;
    padding-left: 45px;
}
</style>