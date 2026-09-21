import { products, categories } from "./data.js";

const categoriesGrid = document.querySelector("#categories-grid");
const featuredProducts = document.querySelector("#featured-products");
const productsGrid = document.querySelector("#products-grid");

const categoryTitle = document.querySelector("#category-title");
const categoryDescription = document.querySelector("#category-description");
const productsCount = document.querySelector("#products-count");


function renderCategories() {
    if (!categoriesGrid) return;

    categoriesGrid.innerHTML = categories.map(category => `
        <article class="category-card">
            <div class="category-card-content">
                <h3>${category.name}</h3>
                <p>${category.description}</p>
            </div>

            <a href="produtos.html?category=${category.id}">
                Ver produtos
            </a>
        </article>
    `).join("");
}


function renderFeaturedProducts() {
    if (!featuredProducts) return;

    const featured = products.slice(0, 4);

    featuredProducts.innerHTML = featured.map(product => `
        <article class="product-card">

            <figure class="product-image">
                <div></div>
            </figure>

            <div class="product-content">
                <span>${product.category}</span>

                <h3>${product.name}</h3>

                <p class="product-price">
                    R$ ${product.price.toFixed(2).replace(".", ",")}
                </p>

                <a href="produto.html?id=${product.id}">
                    Comprar
                </a>
            </div>

        </article>
    `).join("");
}


function updateCategoryHeader(categoryId, count) {
    const category = categories.find(item => item.id === categoryId);

    if (categoryTitle) {
        categoryTitle.textContent = category ? category.name : "Todos os produtos";
    }

    if (categoryDescription) {
        categoryDescription.textContent = category
            ? category.description
            : "Confira todos os nossos produtos.";
    }

    if (productsCount) {
        productsCount.textContent = `${count} produto${count === 1 ? "" : "s"}`;
    }
}


function renderProducts() {
    if (!productsGrid) return;

    const params = new URLSearchParams(window.location.search);
    const categoryId = params.get("category");

    const filteredProducts = categoryId
        ? products.filter(product => product.category === categoryId)
        : products;

    updateCategoryHeader(categoryId, filteredProducts.length);

    productsGrid.innerHTML = filteredProducts.map(product => `
        <article class="product-card">

            <figure class="product-image">
                <div></div>
            </figure>

            <div class="product-content">
                <span>${product.category}</span>

                <h3>${product.name}</h3>

                <p class="product-price">
                    R$ ${product.price.toFixed(2).replace(".", ",")}
                </p>

                <a href="produto.html?id=${product.id}">
                    Comprar
                </a>
            </div>

        </article>
    `).join("");
}


renderCategories();
renderFeaturedProducts();
renderProducts();