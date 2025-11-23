// script.js 完整代码 - 修复卡片翻转和视频播放功能

document.addEventListener('DOMContentLoaded', function() {
    // 确保与 index.html 中的 id="profileCard" 匹配
    const card = document.getElementById('profileCard'); 
    // 确保与 index.html 中的 id="cardVideo" 匹配
    const video = document.getElementById('cardVideo'); 

    if (!card) {
        console.error("Error: Element with id 'profileCard' not found.");
        return;
    }

    // 监听卡片点击事件
    card.addEventListener('click', function(event) {
        // 阻止点击视频时触发翻转，让视频播放器接管事件
        if (video && (video.contains(event.target) || event.target.tagName === 'SOURCE' || event.target.tagName === 'VIDEO')) {
            return; 
        }

        // 切换 .flipped 类来触发 CSS 翻转动画
        card.classList.toggle('flipped');

        // 处理视频播放/暂停
        if (card.classList.contains('flipped')) {
            // 翻转到背面（视频面）
            // 延迟播放以等待翻转动画完成
            setTimeout(() => {
                if (video) {
                    video.play().catch(error => {
                        console.log('Video auto-play failed, user interaction needed:', error);
                        // 自动播放失败时，用户可手动点击视频播放
                    });
                }
            }, 500); // 0.5 秒延迟
        } else {
            // 翻转到正面
            if (video) {
                video.pause();
                // 停止后将视频倒回到开头
                video.currentTime = 0; 
            }
        }
    });
});
