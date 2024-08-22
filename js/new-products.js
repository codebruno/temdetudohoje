document.addEventListener('DOMContentLoaded', function () {
    const novosProdutosList = document.getElementById('novos-produtos-list');
    const loadMoreNovosBtn = document.getElementById('loadMoreNovosBtn');
    
    // Array com os dados dos produtos
    let novosProdutos = [
        { img: 'assets/image/fone.svg', title: 'Fone De Ouvido Sem Fio E6s Bluetooth 5.0 Tws Preto', description: 'Microfone Embutido, Cancelamento de Ruído, Controle Remoto, Resistente a Suor, Controle de Volume', link: 'https://s.shopee.com.br/9pKvUVKG4d', video: 'assets/video/fone-1.mp4' },
        { img: 'https://via.placeholder.com/300x200', title: 'Novo Produto 2', description: 'Descrição 2', link: '#', video: 'assets/video/video-3.mp4' },
        { img: 'https://via.placeholder.com/300x200', title: 'Novo Produto 3', description: 'Descrição 3', link: '#', video: 'assets/video/video-4.mp4' },
        { img: 'https://via.placeholder.com/300x200', title: 'Novo Produto 4', description: 'Descrição 4', link: '#', video: 'assets/video/video-5.mp4' },
        { img: 'https://via.placeholder.com/300x200', title: 'Novo Produto 5', description: 'Descrição 5', link: '#', video: 'assets/video/video-6.mp4' },
        { img: 'https://via.placeholder.com/300x200', title: 'Novo Produto 6', description: 'Descrição 6', link: '#', video: 'assets/video/video-7.mp4' },
        { img: 'https://via.placeholder.com/300x200', title: 'Novo Produto 7', description: 'Descrição 7', link: '#', video: 'assets/video/video-8.mp4' },
        { img: 'https://via.placeholder.com/300x200', title: 'Novo Produto 8', description: 'Descrição 8', link: '#', video: 'assets/video/video-9.mp4' },
        { img: 'https://via.placeholder.com/300x200', title: 'Novo Produto 9', description: 'Descrição 9', link: '#', video: 'assets/video/video-10.mp4' },
        { img: 'https://via.placeholder.com/300x200', title: 'Novo Produto 10', description: 'Descrição 10', link: '#', video: 'assets/video/video-11.mp4' },
        { img: 'https://via.placeholder.com/300x200', title: 'Novo Produto 11', description: 'Descrição 11', link: '#', video: 'assets/video/video-12.mp4' },
        { img: 'https://via.placeholder.com/300x200', title: 'Novo Produto 12', description: 'Descrição 12', link: '#', video: 'assets/video/video-13.mp4' }
    ];

    let itemsPerPage = 4;
    let currentPage = 1;

    // Função para carregar os produtos
    function loadNovosProdutos(page) {
        let startIndex = (page - 1) * itemsPerPage;
        let endIndex = page * itemsPerPage;

        let visibleNovosProdutos = novosProdutos.slice(startIndex, endIndex);

        visibleNovosProdutos.forEach(produto => {
            const produtoCard = `
                <article class="col-md-3">
                    <figure class="card card-hover">
                        <div class="video-thumbnail-container">
                            <img src="${produto.img}" class="card-img-top" alt="${produto.title}">
                            <div class="play-overlay" data-bs-toggle="modal" data-bs-target="#videoModal" data-video="${produto.video}">
                                <i class="bi bi-play-circle"></i>
                            </div>
                        </div>
                        <figcaption class="card-body">
                            <h5 class="card-title">${produto.title}</h5>
                            <p class="card-text">${produto.description}</p>
                            <a href="${produto.link}" class="btn btn-primary" target="_blank">Comprar</a>
                        </figcaption>
                    </figure>
                </article>`;
            novosProdutosList.innerHTML += produtoCard;
        });

        if (endIndex >= novosProdutos.length) {
            loadMoreNovosBtn.style.display = 'none';
        }
    }

    loadNovosProdutos(currentPage);

    loadMoreNovosBtn.addEventListener('click', function () {
        currentPage++;
        loadNovosProdutos(currentPage);
    });

    // Evento para carregar o vídeo ao clicar no ícone de play
    document.addEventListener('click', function (e) {
        if (e.target.closest('.play-overlay')) {
            let videoSrc = e.target.closest('.play-overlay').dataset.video;
            let modalBody = document.querySelector('#videoModal .modal-body');
            modalBody.innerHTML = `<video class="w-100" height="400" controls src="${videoSrc}" title="Vídeo do Produto"></video>`;
        }
    });

    // Limpa o vídeo do modal quando ele é fechado
    document.querySelector('#videoModal').addEventListener('hidden.bs.modal', function () {
        document.querySelector('#videoModal .modal-body').innerHTML = ''; // Limpa o vídeo ao fechar o modal
    });
});
