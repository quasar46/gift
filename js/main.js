document.addEventListener('DOMContentLoaded', function () {
    const minViewPort = (min = 360) => {
        if (window.innerWidth <= min) {
            const viewport = document.querySelector('[name="viewport"]');
            if (viewport) viewport.setAttribute("content", `width=${min}, user-scalable=no`);
        }
    };

    minViewPort();

    const swiper1 = new Swiper('.swiper1', {
            loop: true,
            slidesPerView: 'auto',
            spaceBetween: 60,
            centeredSlides: true,
            navigation: {
                nextEl: document.querySelector('.swiper-container-1 .swiper-button-next'),
                prevEl: document.querySelector('.swiper-container-1 .swiper-button-prev'),
            },
            breakpoints: {
                361: {
                    spaceBetween: 60,
                },
                0: {
                    spaceBetween: 30,
                }
            }
        }
    )
    const swiper2 = new Swiper('.swiper2', {
            loop: true,
            slidesPerView: 'auto',
            spaceBetween: 60,
            centeredSlides: true,
            navigation: {
                nextEl: document.querySelector('.swiper-container-2 .swiper-button-next'),
                prevEl: document.querySelector('.swiper-container-2 .swiper-button-prev'),
            },
            breakpoints: {
                361: {
                    spaceBetween: 60,
                },
                0: {
                    spaceBetween: 30,
                }
            }
        }
    )
    const swiper3 = new Swiper('.swiper3', {
            loop: true,
            slidesPerView: 'auto',
            spaceBetween: 60,
            centeredSlides: true,
            navigation: {
                nextEl: document.querySelector('.swiper-container-3 .swiper-button-next'),
                prevEl: document.querySelector('.swiper-container-3 .swiper-button-prev'),
            },
            breakpoints: {
                361: {
                    spaceBetween: 60,
                },
                0: {
                    spaceBetween: 30,
                }
            }
        }
    )
    const swiper4 = new Swiper('.swiper4', {
            loop: true,
            slidesPerView: 'auto',
            spaceBetween: 60,
            centeredSlides: true,
            navigation: {
                nextEl: document.querySelector('.swiper-container-4 .swiper-button-next'),
                prevEl: document.querySelector('.swiper-container-4 .swiper-button-prev'),
            },
            breakpoints: {
                361: {
                    spaceBetween: 60,
                },
                0: {
                    spaceBetween: 30,
                }
            }
        }
    )
    const swiper5 = new Swiper('.swiper5', {
            loop: true,
            slidesPerView: 'auto',
            spaceBetween: 60,
            centeredSlides: true,
            navigation: {
                nextEl: document.querySelector('.swiper-container-5 .swiper-button-next'),
                prevEl: document.querySelector('.swiper-container-5 .swiper-button-prev'),
            },
            breakpoints: {
                361: {
                    spaceBetween: 60,
                },
                0: {
                    spaceBetween: 30,
                }
            }
        }
    )
})