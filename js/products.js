document.addEventListener('DOMContentLoaded', function() {
    const products = {
        electronics: [
            { id: 1, title: 'Eletrônico 1', description: 'Descrição do Eletrônico 1', videoSrc: 'videos/eletronico1.mp4', affiliateLink: 'https://example.com/affiliatelink?product=1' },
            { id: 2, title: 'Eletrônico 2', description: 'Descrição do Eletrônico 2', videoSrc: 'videos/eletronico2.mp4', affiliateLink: 'https://example.com/affiliatelink?product=2' },
            { id: 3, title: 'Eletrônico 3', description: 'Descrição do Eletrônico 3', videoSrc: 'videos/eletronico3.mp4', affiliateLink: 'https://example.com/affiliatelink?product=3' },
            { id: 4, title: 'Eletrônico 4', description: 'Descrição do Eletrônico 4', videoSrc: 'videos/eletronico4.mp4', affiliateLink: 'https://example.com/affiliatelink?product=4' },
            { id: 5, title: 'Eletrônico 5', description: 'Descrição do Eletrônico 5', videoSrc: 'videos/eletronico5.mp4', affiliateLink: 'https://example.com/affiliatelink?product=5' },
            { id: 6, title: 'Eletrônico 6', description: 'Descrição do Eletrônico 6', videoSrc: 'videos/eletronico6.mp4', affiliateLink: 'https://example.com/affiliatelink?product=6' }
        ],
        pets: [
            { id: 1, title: 'Pet 1', description: 'Descrição do Pet 1', videoSrc: 'videos/pet1.mp4', affiliateLink: 'https://example.com/affiliatelink?product=1' },
            { id: 2, title: 'Pet 2', description: 'Descrição do Pet 2', videoSrc: 'videos/pet2.mp4', affiliateLink: 'https://example.com/affiliatelink?product=2' },
            { id: 3, title: 'Pet 3', description: 'Descrição do Pet 3', videoSrc: 'videos/pet3.mp4', affiliateLink: 'https://example.com/affiliatelink?product=3' },
            { id: 4, title: 'Pet 4', description: 'Descrição do Pet 4', videoSrc: 'videos/pet4.mp4', affiliateLink: 'https://example.com/affiliatelink?product=4' },
            { id: 5, title: 'Pet 5', description: 'Descrição do Pet 5', videoSrc: 'videos/pet5.mp4', affiliateLink: 'https://example.com/affiliatelink?product=5' },
            { id: 6, title: 'Pet 6', description: 'Descrição do Pet 6', videoSrc: 'videos/pet6.mp4', affiliateLink: 'https://example.com/affiliatelink?product=6' }
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
        return `
            <div class="col-md-3 mb-4">
                <div class="card position-relative">
                    <img src="https://via.placeholder.com/200x150" class="card-img-top" alt="${product.title}">
                    <div class="video-overlay" data-video-src="${product.videoSrc}">
                        <i class="bi bi-play-circle"></i>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">${product.title}</h5>
                        <p class="card-text">${product.description}</p>
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

        // Armazena os produtos carregados em cache
        cachedProducts[category] = visibleProducts;
        loadedProducts[category] = endIndex;

        // Atualiza a lista de produtos
        updateProductList(category, cachedProducts[category]);

        // Atualiza o estado do botão de "Carregar mais"
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

    // Carrega os produtos para a aba inicial ativa
    const initialTab = document.querySelector('.nav-link.active');
    if (initialTab) {
        const initialCategory = initialTab.id.replace('-tab', '');
        initializeTab(initialCategory);
    }

    // Funcionalidade do modal de vídeo
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
