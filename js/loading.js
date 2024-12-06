let fade_list = document.querySelectorAll('.fade-link')

fade_list.forEach(item => {
    item.addEventListener('click', function (e) {
        e.preventDefault()

        let targetUrl = this.href
        document.body.style.animation = 'fadeOut 1.2s forwards';

        // 等待动画结束后跳转页面
        document.body.addEventListener('animationend', () => {
            setTimeout(() => {
                window.location.href = targetUrl;
            }, 1200)

        }, {once: true}); //

    })
})