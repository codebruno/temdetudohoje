document.addEventListener('DOMContentLoaded', function() {
    const products = {
        electronics: [
            { id: 1, title: 'Eletrônico 1', description: 'Descrição do Eletrônico 1', videoSrc: 'videos/eletronico1.mp4' },
            { id: 2, title: 'Eletrônico 2', description: 'Descrição do Eletrônico 2', videoSrc: 'videos/eletronico2.mp4' },
            { id: 3, title: 'Eletrônico 3', description: 'Descrição do Eletrônico 3', videoSrc: 'videos/eletronico3.mp4' },
            { id: 4, title: 'Eletrônico 4', description: 'Descrição do Eletrônico 4', videoSrc: 'videos/eletronico4.mp4' },
            { id: 5, title: 'Eletrônico 5', description: 'Descrição do Eletrônico 5', videoSrc: 'videos/eletronico5.mp4' },
            { id: 6, title: 'Eletrônico 6', description: 'Descrição do Eletrônico 6', videoSrc: 'videos/eletronico6.mp4' }
        ],
        pets: [
            { id: 1, title: 'Pet 1', description: 'Descrição do Pet 1', videoSrc: 'videos/pet1.mp4' },
            { id: 2, title: 'Pet 2', description: 'Descrição do Pet 2', videoSrc: 'videos/pet2.mp4' },
            { id: 3, title: 'Pet 3', description: 'Descrição do Pet 3', videoSrc: 'videos/pet3.mp4' },
            { id: 4, title: 'Pet 4', description: 'Descrição do Pet 4', videoSrc: 'videos/pet4.mp4' },
            { id: 5, title: 'Pet 5', description: 'Descrição do Pet 5', videoSrc: 'videos/pet5.mp4' },
            { id: 6, title: 'Pet 6', description: 'Descrição do Pet 6', videoSrc: 'videos/pet6.mp4' }
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
                        <a href="https://example.com/affiliatelink?product=${product.id}" class="btn btn-primary" target="_blank">Comprar</a>
                    </div>
                </div>
            </div>
        `;
    }

    function loadProducts(category, startIndex) {
        const productList = document.getElementById(`product-list-${category}`);
        const loadMoreBtn = document.getElementById(`loadMoreBtn-${category}`);
        const categoryProducts = products[category];
        const endIndex = Math.min(startIndex + productsPerPage, categoryProducts.length);
        const visibleProducts = categoryProducts.slice(startIndex, endIndex);

        // Armazena os produtos carregados em cache
        cachedProducts[category].push(...visibleProducts);

        // Adiciona os produtos ao DOM
        productList.innerHTML = cachedProducts[category].map(createProductCard).join('');

        // Atualiza a quantidade de produtos carregados
        loadedProducts[category] = endIndex;

        // Atualiza a visibilidade do botão de "Carregar mais"
        if (endIndex >= categoryProducts.length) {
            loadMoreBtn.style.display = 'none';
        } else {
            loadMoreBtn.style.display = 'block';
        }
    }

    function initializeTab(category) {
        const productList = document.getElementById(`product-list-${category}`);
        const loadMoreBtn = document.getElementById(`loadMoreBtn-${category}`);

        // Se já carregamos produtos previamente, usa o cache
        if (cachedProducts[category].length > 0) {
            productList.innerHTML = cachedProducts[category].map(createProductCard).join('');
            // Verifica se já carregamos todos os produtos para ocultar o botão
            if (loadedProducts[category] >= products[category].length) {
                loadMoreBtn.style.display = 'none';
            } else {
                loadMoreBtn.style.display = 'block';
            }
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
            const startIndex = loadedProducts[category];
            loadProducts(category, startIndex);
            document.getElementById(`product-list-${category}`).scrollIntoView({ behavior: 'smooth' });
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
