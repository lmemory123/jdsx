// 轮播图 当页面加载完成时，调用showSlides函数，每2秒切换一次图片
document.addEventListener('DOMContentLoaded', function () {
    let slideIndex = 0;
    let slideTimeout;

    function showSlides() {
        let i;
        let slides = document.querySelectorAll('.carousel-images img');
        let dots = document.querySelectorAll('.dot');
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';
        }
        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(' active', '');
        }
        slides[slideIndex - 1].style.display = 'block';
        dots[slideIndex - 1].className += ' active';

        clearTimeout(slideTimeout);
        slideTimeout = setTimeout(showSlides, 2000); // Change image every 2 seconds
    }

    window.currentSlide = function(n) {
        slideIndex = n-1;
        showSlides();
    };

    showSlides();
});
//  页面滚动时，当滚动距离超过窗口高度的一半时，给body添加一个类名scrolled，否则移除这个类名
document.addEventListener('scroll', function () {
    if (window.scrollY > window.innerHeight) {
        document.body.classList.add('scrolled');
    } else {
        document.body.classList.remove('scrolled');
    }
});

let scrollCount =0;
//  当页面滚动到底部时，每次复制5个商品项
document.addEventListener('scroll', function () {
    const productGrid = document.querySelector('.product-grid');
    const productItems = document.querySelectorAll('.product-item');
    if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight && scrollCount < 5) {
        for (let i = 0; i < 25; i++) {
            let item = productItems[i];
            const clone = item.cloneNode(true);
            productGrid.appendChild(clone);
        }
        scrollCount++;
    }
});