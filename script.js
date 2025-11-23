// script.js 完整代码 - 修复所有卡片互动功能 (翻转、视频、按钮链接)

document.addEventListener('DOMContentLoaded', function() {
    // 确保与 index.html 中的 id="profileCard" 匹配
    const card = document.getElementById('profileCard'); 
    // 确保与 index.html 中的 id="cardVideo" 匹配
    const video = document.getElementById('cardVideo'); 

    if (!card) {
        console.error("Error: Element with id 'profileCard' not found.");
        return;
    }

    // --- 按钮链接和互动功能 ---
    
    // 获取主要的咨询按钮
    const consultButton = card.querySelector('.btn-main');

    // 监听主要的咨询按钮
    if (consultButton) {
        consultButton.addEventListener('click', function(event) {
            event.stopPropagation(); // 阻止点击按钮时卡片翻转
            alert('正在跳转到咨询页面...'); // 提示用户
            // 假设这是咨询链接，请替换为您的实际咨询URL（如微信/QQ链接）
            window.open('https://example.com/consult', '_blank'); 
        });
    }

    // 监听底部的问答按钮组
    const qaButtons = card.querySelectorAll('.btn-group button');
    qaButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.stopPropagation(); // 阻止点击按钮时卡片翻转
            
            const buttonText = button.textContent.trim();
            let targetUrl = '';

            // 根据按钮文本设置链接 (请根据您的实际需求修改以下链接)
            if (buttonText === '发起提问') {
                targetUrl = 'https://www.zhihu.com/people/akitake1688'; // 示例：知乎链接
            } else if (buttonText === '获取心法') {
                targetUrl = 'https://www.bilibili.com/akitake1688'; // 示例：Bilibili 链接
            } else if (buttonText === '个人简介') {
                targetUrl = '#'; // 示例：可以滚动到页面其他部分或弹出简介
            } else {
                return;
            }

            if (targetUrl !== '#') {
                window.open(targetUrl, '_blank');
            } else {
                 alert('个人简介功能尚未配置，请在代码中设置目标URL。');
            }
        });
    });

    // 监听“展开”按钮（假定展开功能）
    const expandButton = card.querySelector('.btn-expand');
    if (expandButton) {
        expandButton.addEventListener('click', function(event) {
            event.stopPropagation();
            alert('展开功能启动！'); // 实际中会切换 CSS 类来展开内容
            // 此处可以添加实际的 CSS 切换代码
        });
    }


    // --- 卡片翻转和视频功能 ---

    // 监听卡片点击事件 (实现翻转)
    card.addEventListener('click', function(event) {
        // 阻止点击视频元素时触发翻转
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
                    });
                }
            }, 500); // 0.5 秒延迟
        } else {
            // 翻转到正面
            if (video) {
                video.pause();
                video.currentTime = 0; // 停止后将视频倒回到开头
            }
        }
    });
});
