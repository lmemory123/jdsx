// 轮播图 当页面加载完成时，调用showSlides函数，每2秒切换一次图片
document.addEventListener('DOMContentLoaded', function () { // 页面加载完成后执行
    let slideIndex = 0; // 初始化轮播图索引为0
    let slideTimeout; // 定义轮播图切换的定时器

    function showSlides() { // 定义显示轮播图的函数
        let i; // 循环变量
        let slides = document.querySelectorAll('.carousel-images img'); // 获取所有轮播图图片
        let dots = document.querySelectorAll('.dot'); // 获取所有导航点
        for (i = 0; i < slides.length; i++) { // 遍历所有轮播图图片
            slides[i].style.display = 'none'; // 隐藏当前图片
        }
        slideIndex++; // 增加轮播图索引
        if (slideIndex > slides.length) { // 如果索引超过图片数量
            slideIndex = 1; // 重置索引为1
        }
        for (i = 0; i < dots.length; i++) { // 遍历所有导航点
            dots[i].className = dots[i].className.replace(' active', ''); // 移除激活类
        }
        slides[slideIndex - 1].style.display = 'block'; // 显示当前索引的图片
        dots[slideIndex - 1].className += ' active'; // 激活当前索引的导航点

        clearTimeout(slideTimeout); // 清除之前的定时器
        slideTimeout = setTimeout(showSlides, 2000); // 每2秒切换一次图片
    }

    window.currentSlide = function(n) { // 定义切换到指定索引的函数
        slideIndex = n-1; // 设置当前索引为n-1
        showSlides(); // 调用显示轮播图函数
    };

    showSlides(); // 初始化显示轮播图
});

// 页面滚动时，当滚动距离超过窗口高度的一半时，给body添加一个类名scrolled，否则移除这个类名
document.addEventListener('scroll', function () { // 监听滚动事件
    if (window.scrollY > window.innerHeight) { // 如果滚动距离超过窗口高度
        document.body.classList.add('scrolled'); // 添加 'scrolled' 类
    } else {
        document.body.classList.remove('scrolled'); // 移除 'scrolled' 类
    }
});

let scrollCount =0; // 初始化滚动计数

// 当页面滚动到底部时，每次复制5个商品项
document.addEventListener('scroll', function () { // 监听滚动事件
    const productGrid = document.querySelector('.product-grid'); // 获取商品网格容器
    const productItems = document.querySelectorAll('.product-item'); // 获取所有商品项
    if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight && scrollCount < 5) { // 如果滚动到页面底部且复制次数少于5
        for (let i = 0; i < 25; i++) { // 循环复制25个商品项
            let item = productItems[i]; // 获取第i个商品项
            const clone = item.cloneNode(true); // 克隆商品项
            productGrid.appendChild(clone); // 将克隆的商品项添加到商品网格
        }
        scrollCount++; // 增加复制计数
    }
});