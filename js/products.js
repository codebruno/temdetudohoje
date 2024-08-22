document.addEventListener('DOMContentLoaded', function () {
    const productList = document.getElementById('product-list');
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    
    // Array com os dados dos produtos, incluindo vídeos locais
    let products = [
        { img: 'assets/image/3x1.svg', title: 'Escova A Vapor Para Gatos Cães 3 Em 1', description: 'Escova elétrica 3 em 1 com tecnologia a vapor para uma pelagem limpa e saudável.', link: 'https://s.shopee.com.br/5VBwFtPV3D', video: 'assets/video/video-1.mp4' },
        { img: 'https://via.placeholder.com/300x200', title: 'Produto 2', description: 'Descrição 2', link: '#', video: 'assets/video/video-2.mp4' },
        { img: 'https://via.placeholder.com/300x200', title: 'Produto 3', description: 'Descrição 3', link: '#', video: 'assets/video/video-3.mp4' },
        { img: 'https://via.placeholder.com/300x200', title: 'Produto 4', description: 'Descrição 4', link: '#', video: 'assets/video/video-4.mp4' },
        { img: 'https://via.placeholder.com/300x200', title: 'Produto 5', description: 'Descrição 5', link: '#', video: 'assets/video/video-5.mp4' },
        { img: 'https://via.placeholder.com/300x200', title: 'Produto 6', description: 'Descrição 6', link: '#', video: 'assets/video/video-6.mp4' },
        { img: 'https://via.placeholder.com/300x200', title: 'Produto 7', description: 'Descrição 7', link: '#', video: 'assets/video/video-7.mp4' },
        { img: 'https://via.placeholder.com/300x200', title: 'Produto 8', description: 'Descrição 8', link: '#', video: 'assets/video/video-8.mp4' },
        { img: 'https://via.placeholder.com/300x200', title: 'Produto 9', description: 'Descrição 9', link: '#', video: 'assets/video/video-9.mp4' },
        { img: 'https://via.placeholder.com/300x200', title: 'Produto 10', description: 'Descrição 10', link: '#', video: 'assets/video/video-10.mp4' },
        { img: 'https://via.placeholder.com/300x200', title: 'Produto 11', description: 'Descrição 11', link: '#', video: 'assets/video/video-11.mp4' },
        { img: 'https://via.placeholder.com/300x200', title: 'Produto 12', description: 'Descrição 12', link: '#', video: 'assets/video/video-12.mp4' }
    ];

    let itemsPerPage = 4;
    let currentPage = 1;

    // Função para carregar os produtos
    function loadProducts(page) {
        let startIndex = (page - 1) * itemsPerPage;
        let endIndex = page * itemsPerPage;

        let visibleProducts = products.slice(startIndex, endIndex);

        visibleProducts.forEach(product => {
            const productCard = `
                <article class="col-md-3">
                    <figure class="card card-hover">
                        <div class="video-thumbnail-container">
                            <img src="${product.img}" class="card-img-top" alt="${product.title}">
                            <div class="play-overlay" data-bs-toggle="modal" data-bs-target="#videoModal" data-video="${product.video}">
                                <i class="bi bi-play-circle"></i>
                            </div>
                        </div>
                        <figcaption class="card-body">
                            <h5 class="card-title">${product.title}</h5>
                            <p class="card-text">${product.description}</p>
                            <a href="${product.link}" class="btn btn-primary" target="_blank">Comprar</a>
                        </figcaption>
                    </figure>
                </article>`;
            productList.innerHTML += productCard;
        });

        // Verifica se há mais produtos para carregar e mostra ou oculta o botão
        if (endIndex >= products.length) {
            loadMoreBtn.style.display = 'none'; // Oculta o botão se todos os produtos foram carregados
        } else {
            loadMoreBtn.style.display = 'block'; // Garante que o botão esteja visível se houver mais produtos
        }
    }

    // Inicializa o carregamento dos produtos
    loadProducts(currentPage);

    // Evento de clique no botão "Carregar mais"
    loadMoreBtn.addEventListener('click', function () {
        currentPage++;
        loadProducts(currentPage);
    });

    // Evento para carregar o vídeo local ao clicar no ícone de play
    document.addEventListener('click', function (e) {
        if (e.target.closest('.play-overlay')) {
            let videoSrc = e.target.closest('.play-overlay').dataset.video;
            let modalBody = document.querySelector('#videoModal .modal-body');
            modalBody.innerHTML = `
                <video class="w-100" height="400" controls>
                    <source src="${videoSrc}" type="video/mp4">
                    Seu navegador não suporta o elemento de vídeo.
                </video>`;
        }
    });

    // Limpa o vídeo do modal quando ele é fechado
    document.querySelector('#videoModal').addEventListener('hidden.bs.modal', function () {
        document.querySelector('#videoModal .modal-body').innerHTML = ''; // Limpa o vídeo ao fechar o modal
    });
});
