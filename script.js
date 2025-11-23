// script.js 完整代码 - 修复卡片翻转功能

document.addEventListener('DOMContentLoaded', function() {
    const card = document.getElementById('profileCard');
    const video = document.getElementById('cardVideo');

    // 监听卡片点击事件
    card.addEventListener('click', function(event) {
        // 检查点击事件的目标是否是视频元素本身或其子元素
        // 如果点击了视频，则不触发翻转，让视频播放器接管事件
        if (video && (video.contains(event.target) || event.target.tagName === 'SOURCE')) {
            // 如果是视频或其相关元素，不执行翻转
            return; 
        }

        // 切换 .flipped 类来触发 CSS 翻转动画
        card.classList.toggle('flipped');

        // 处理视频播放/暂停
        if (card.classList.contains('flipped')) {
            // 翻转到背面（视频面）
            // 延迟播放以等待翻转动画完成，提高用户体验
            setTimeout(() => {
                if (video) {
                    video.play().catch(error => {
                        console.log('Video auto-play failed:', error);
                        // 如果自动播放失败（常见于移动端），可以提示用户点击播放
                    });
                }
            }, 500); // 0.5 秒延迟
        } else {
            // 翻转到正面
            if (video) {
                video.pause();
                // 停止后将视频倒回到开头，准备下次播放
                video.currentTime = 0; 
            }
        }
    });
});