document.addEventListener("DOMContentLoaded", function() {
    const blogPosts = [
        {
            title: "Como Melhorar Sua Alimentação",
            description: "Dicas para uma dieta equilibrada e saudável.",
            link: "#",
            image: "https://via.placeholder.com/400x200"
        },
        {
            title: "Exercícios para Aumentar a Força",
            description: "Treinos eficazes para fortalecer seus músculos.",
            link: "#",
            image: "https://via.placeholder.com/400x200"
        },
        {
            title: "Cuidados Essenciais para Pets",
            description: "Tudo o que você precisa saber para cuidar bem dos seus animais de estimação.",
            link: "#",
            image: "https://via.placeholder.com/400x200"
        },
        {
            title: "Cuidados Essenciais para Pets",
            description: "Tudo o que você precisa saber para cuidar bem dos seus animais de estimação.",
            link: "#",
            image: "https://via.placeholder.com/400x200"
        },
        {
            title: "Cuidados Essenciais para Pets",
            description: "Tudo o que você precisa saber para cuidar bem dos seus animais de estimação.",
            link: "#",
            image: "https://via.placeholder.com/400x200"
        },
        {
            title: "Cuidados Essenciais para Pets",
            description: "Tudo o que você precisa saber para cuidar bem dos seus animais de estimação.",
            link: "#",
            image: "https://via.placeholder.com/400x200"
        },
        {
            title: "Cuidados Essenciais para Pets",
            description: "Tudo o que você precisa saber para cuidar bem dos seus animais de estimação.",
            link: "#",
            image: "https://via.placeholder.com/400x200"
        },
        {
            title: "Melhores Gadgets Eletrônicos do Ano",
            description: "Análise dos gadgets mais inovadores e úteis do mercado.",
            link: "#",
            image: "https://via.placeholder.com/400x200"
        }
    ];

    const blogPostsContainer = document.getElementById('blog-posts');
    
    blogPosts.forEach(post => {
        const postHTML = `
            <div class="col-md-3 mb-4">
                <div class="card">
                    <img src="${post.image}" class="card-img-top" alt="${post.title}">
                    <div class="card-body">
                        <h5 class="card-title">${post.title}</h5>
                        <p class="card-text">${post.description}</p>
                        <a href="${post.link}" class="btn btn-primary">Leia Mais</a>
                    </div>
                </div>
            </div>
        `;
        blogPostsContainer.innerHTML += postHTML;
    });

    const videoSlides = [
        {
            src: "videos/video1.mp4",
            alt: "Vídeo 1"
        },

        {
            src: "videos/video2.mp4",
            alt: "Vídeo 2"
        },

        {
            src: "videos/video3.mp4",
            alt: "Vídeo 3"
        },

        {
            src: "videos/video3.mp4",
            alt: "Vídeo 3"
        },

        {
            src: "videos/video3.mp4",
            alt: "Vídeo 3"
        }
    ];

    const videoCarouselInner = document.querySelector("#videoCarousel .carousel-inner");
    
    videoSlides.forEach((video, index) => {
        const slideHTML = `
            <div class="carousel-item ${index === 0 ? 'active' : ''}">
                <div class="video-wrapper">
                    <iframe src="${video.src}" title="${video.alt}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
        `;
        videoCarouselInner.innerHTML += slideHTML;
    });
});
