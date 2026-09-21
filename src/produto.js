import { products } from "./data.js";

const categoryLabel = document.querySelector("#product-category");
const nameEl = document.querySelector("#product-name");
const descriptionEl = document.querySelector("#product-description");
const detailsContainer = document.querySelector("#product-details");
 
const specLabels = {
    screen: "Tela",
    processor: "Processador",
    ram: "Memória RAM",
    storage: "Armazenamento",
    battery: "Bateria",
    type: "Tipo",
    connectivity: "Conectividade",
    microphone: "Microfone",
    noiseCancellation: "Cancelamento de Ruído",
    connection: "Conexão",
    switches: "Switches",
    layout: "Layout",
    lighting: "Iluminação",
    sensor: "Sensor",
    buttons: "Botões",
    weight: "Peso"
};

function formatSpecKey(key) {
    if (specLabels[key]) return specLabels[key];

     return key
        .replace(/([A-Z])/g, " $1")
        .replace(/^./, str => str.toUpperCase());
}

function renderNotFound() {
    categoryLabel.textContent = "PRODUTO NÃO ENCONTRADO";
    nameEl.textContent = "Produto não encontrado";
    descriptionEl.textContent =
        "O produto que você procura não existe ou foi removido.";

    detailsContainer.innerHTML = `
        <p>
            <a href="produtos.html">Voltar para produtos</a>
        </p>
    `;

    document.title = "Produto não encontrado - Nexus";
}

function renderProduct(product) {
    categoryLabel.textContent = product.category;
    nameEl.textContent = product.name;
    descriptionEl.textContent = product.description;

    const specsHtml = Object.entries(product.specifications)
        .map(
            ([key, value]) => `
                <div class="spec-row">
                    <dt>${formatSpecKey(key)}</dt>
                    <dd>${value}</dd>
                </div>
            `
        )
        .join("");

    detailsContainer.innerHTML = `
        <article class="product-card product-detail-card">
            <figure class="product-image">
                <div></div>
            </figure>

            <div class="product-content">
                <p class="product-price">
                    R$ ${product.price.toFixed(2).replace(".", ",")}
                </p>

                <dl class="product-specs">
                    ${specsHtml}
                </dl>

                <a href="produtos.html" class="btn-back">
                    Voltar para produtos
                </a>
            </div>
        </article>
    `;

    document.title = `${product.name} - Nexus`;
}

function init() {
    const params = new URLSearchParams(window.location.search);
    const id = Number(params.get("id"));

    const product = products.find(item => item.id === id);

    if (!product) {
        renderNotFound();
        return;
    }

    renderProduct(product);
}

init();