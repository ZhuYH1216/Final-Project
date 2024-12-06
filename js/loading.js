// 监听链接点击事件
// document.querySelectorAll('.fade-link').forEach(link => {
//     console.log(link)
//     link.addEventListener('click', function (e) {
//         e.preventDefault();
//
//         const targetUrl = this.href; //
//         console.log(this)
//         document.body.style.animation = 'fadeOut 5s forwards';
//
//         // 等待动画结束后跳转页面
//         document.body.addEventListener('animationend', () => {
//             setTimeout(()=>{
//                 window.location.href = targetUrl;
//             },5000)
//
//         }, { once: true }); //
//     });
// });
let test = document.querySelectorAll('.fade-link')

test.forEach(item => {
    item.addEventListener('click', function (e) {
        e.preventDefault()

        let targetUrl = this.href
        document.body.style.animation = 'fadeOut 1s forwards';

        // 等待动画结束后跳转页面
        document.body.addEventListener('animationend', () => {
            setTimeout(() => {
                window.location.href = targetUrl;
            }, 1000)

        }, {once: true}); //

    })
})