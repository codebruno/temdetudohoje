document.addEventListener('DOMContentLoaded', function() {
    const products = {
        electronics: [
            { id: 1, title: 'Eletrônico 1', description: 'Descrição do Eletrônico 1', videoSrc: 'assets/video/fone-1.mp4', affiliateLink: 'https://example.com/affiliatelink?product=1', imageSrc: 'https://via.placeholder.com/200x150', stars: 4, bought: 120 },
            { id: 2, title: 'Eletrônico 2', description: 'Descrição do Eletrônico 2', videoSrc: 'videos/eletronico2.mp4', affiliateLink: 'https://example.com/affiliatelink?product=2', imageSrc: 'https://via.placeholder.com/200x150', stars: 5, bought: 200 },
            { id: 2, title: 'Eletrônico 2', description: 'Descrição do Eletrônico 2', videoSrc: 'videos/eletronico2.mp4', affiliateLink: 'https://example.com/affiliatelink?product=2', imageSrc: 'https://via.placeholder.com/200x150', stars: 5, bought: 200 },
            { id: 2, title: 'Eletrônico 2', description: 'Descrição do Eletrônico 2', videoSrc: 'videos/eletronico2.mp4', affiliateLink: 'https://example.com/affiliatelink?product=2', imageSrc: 'https://via.placeholder.com/200x150', stars: 5, bought: 200 },
            { id: 2, title: 'Eletrônico 2', description: 'Descrição do Eletrônico 2', videoSrc: 'videos/eletronico2.mp4', affiliateLink: 'https://example.com/affiliatelink?product=2', imageSrc: 'https://via.placeholder.com/200x150', stars: 5, bought: 200 },
            { id: 2, title: 'Eletrônico 2', description: 'Descrição do Eletrônico 2', videoSrc: 'videos/eletronico2.mp4', affiliateLink: 'https://example.com/affiliatelink?product=2', imageSrc: 'https://via.placeholder.com/200x150', stars: 5, bought: 200 },
            { id: 2, title: 'Eletrônico 2', description: 'Descrição do Eletrônico 2', videoSrc: 'videos/eletronico2.mp4', affiliateLink: 'https://example.com/affiliatelink?product=2', imageSrc: 'https://via.placeholder.com/200x150', stars: 5, bought: 200 },
            { id: 2, title: 'Eletrônico 2', description: 'Descrição do Eletrônico 2', videoSrc: 'videos/eletronico2.mp4', affiliateLink: 'https://example.com/affiliatelink?product=2', imageSrc: 'https://via.placeholder.com/200x150', stars: 5, bought: 200 },
            // outros produtos...
        ],
        pets: [
            { id: 1, title: 'Pet 1', description: 'Descrição do Pet 1', videoSrc: 'videos/pet1.mp4', affiliateLink: 'https://example.com/affiliatelink?product=1', imageSrc: 'https://via.placeholder.com/200x150', stars: 5, bought: 220 },
            { id: 1, title: 'Pet 1', description: 'Descrição do Pet 1', videoSrc: 'videos/pet1.mp4', affiliateLink: 'https://example.com/affiliatelink?product=1', imageSrc: 'https://via.placeholder.com/200x150', stars: 5, bought: 220 },
            { id: 1, title: 'Pet 1', description: 'Descrição do Pet 1', videoSrc: 'videos/pet1.mp4', affiliateLink: 'https://example.com/affiliatelink?product=1', imageSrc: 'https://via.placeholder.com/200x150', stars: 5, bought: 220 },
            { id: 1, title: 'Pet 1', description: 'Descrição do Pet 1', videoSrc: 'videos/pet1.mp4', affiliateLink: 'https://example.com/affiliatelink?product=1', imageSrc: 'https://via.placeholder.com/200x150', stars: 5, bought: 220 },
            { id: 1, title: 'Pet 1', description: 'Descrição do Pet 1', videoSrc: 'videos/pet1.mp4', affiliateLink: 'https://example.com/affiliatelink?product=1', imageSrc: 'https://via.placeholder.com/200x150', stars: 5, bought: 220 },
            { id: 1, title: 'Pet 1', description: 'Descrição do Pet 1', videoSrc: 'videos/pet1.mp4', affiliateLink: 'https://example.com/affiliatelink?product=1', imageSrc: 'https://via.placeholder.com/200x150', stars: 5, bought: 220 },
            { id: 1, title: 'Pet 1', description: 'Descrição do Pet 1', videoSrc: 'videos/pet1.mp4', affiliateLink: 'https://example.com/affiliatelink?product=1', imageSrc: 'https://via.placeholder.com/200x150', stars: 5, bought: 220 },
            { id: 1, title: 'Pet 1', description: 'Descrição do Pet 1', videoSrc: 'videos/pet1.mp4', affiliateLink: 'https://example.com/affiliatelink?product=1', imageSrc: 'https://via.placeholder.com/200x150', stars: 5, bought: 220 },
            { id: 1, title: 'Pet 1', description: 'Descrição do Pet 1', videoSrc: 'videos/pet1.mp4', affiliateLink: 'https://example.com/affiliatelink?product=1', imageSrc: 'https://via.placeholder.com/200x150', stars: 5, bought: 220 },
            // outros produtos...
        ],
        // Outras categorias
    };

    const productsPerPage = 4;
    let loadedProducts = {
        electronics: 0,
        pets: 0
    };

    let cachedProducts = {
        electronics: [],
        pets: []
    };

    let loadMoreState = {
        electronics: 'Mais Produtos',
        pets: 'Mais Produtos'
    };

    function createProductCard(product) {
        const starRating = Array(product.stars).fill('★').join('') + Array(5 - product.stars).fill('☆').join('');
        return `
            <div class="col-md-3 mb-4">
                <div class="card position-relative">
                    <img src="${product.imageSrc}" class="card-img-top" alt="${product.title}">
                    <div class="video-overlay" data-video-src="${product.videoSrc}">
                        <i class="bi bi-play-circle"></i>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">${product.title}</h5>
                        <p class="card-text">${product.description}</p>
                        <p class="card-stars">${starRating}</p>
                        <p class="card-bought">Comprado: ${product.bought} vezes</p>
                        <a href="${product.affiliateLink}" class="btn btn-primary" target="_blank">Comprar</a>
                    </div>
                </div>
            </div>
        `;
    }

    function updateProductList(category, productsToShow) {
        const productList = document.getElementById(`product-list-${category}`);
        productList.innerHTML = productsToShow.map(createProductCard).join('');
    }

    function loadProducts(category, startIndex) {
        const categoryProducts = products[category];
        const endIndex = Math.min(startIndex + productsPerPage, categoryProducts.length);
        const visibleProducts = categoryProducts.slice(0, endIndex);

        cachedProducts[category] = visibleProducts;
        loadedProducts[category] = endIndex;

        updateProductList(category, cachedProducts[category]);

        loadMoreState[category] = endIndex >= categoryProducts.length ? 'Ver Menos' : 'Mais Produtos';
        updateLoadMoreButton(category);
    }

    function updateLoadMoreButton(category) {
        const loadMoreBtn = document.getElementById(`loadMoreBtn-${category}`);
        loadMoreBtn.textContent = loadMoreState[category];
    }

    function toggleProducts(category) {
        const categoryProducts = products[category];
        const loadMoreBtn = document.getElementById(`loadMoreBtn-${category}`);

        if (loadMoreState[category] === 'Mais Produtos') {
            loadProducts(category, loadedProducts[category]);
            document.getElementById(`product-list-${category}`).scrollIntoView({ behavior: 'smooth' });
        } else {
            const visibleProductsCount = Math.max(loadedProducts[category] - productsPerPage, 4);
            const visibleProducts = categoryProducts.slice(0, visibleProductsCount);
            updateProductList(category, visibleProducts);
            loadedProducts[category] = visibleProductsCount;

            if (visibleProductsCount === 4) {
                loadMoreState[category] = 'Mais Produtos';
            }
            updateLoadMoreButton(category);
        }
    }

    function initializeTab(category) {
        if (cachedProducts[category].length > 0) {
            updateProductList(category, cachedProducts[category]);
            updateLoadMoreButton(category);
        } else {
            loadProducts(category, 0);
        }
    }

    document.querySelectorAll('.nav-link').forEach(tab => {
        tab.addEventListener('click', function() {
            const category = this.id.replace('-tab', '');
            initializeTab(category);
        });
    });

    document.querySelectorAll('[id^=loadMoreBtn-]').forEach(button => {
        button.addEventListener('click', function() {
            const category = this.id.replace('loadMoreBtn-', '');
            toggleProducts(category);
        });
    });

    const initialTab = document.querySelector('.nav-link.active');
    if (initialTab) {
        const initialCategory = initialTab.id.replace('-tab', '');
        initializeTab(initialCategory);
    }

    document.addEventListener('click', function(event) {
        if (event.target.closest('.video-overlay')) {
            const card = event.target.closest('.card');
            const videoSrc = card.querySelector('.video-overlay').getAttribute('data-video-src');
            const videoPlayer = document.getElementById('videoPlayer');
            videoPlayer.setAttribute('src', videoSrc);
            const videoModal = new bootstrap.Modal(document.getElementById('videoModal'));
            videoModal.show();
        }
    });
});
