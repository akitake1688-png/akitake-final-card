// script.js 最终版本 - 包含所有功能、翻转修复和您的真实链接

document.addEventListener('DOMContentLoaded', function() {
    const card = document.getElementById('profileCard'); 
    const video = document.getElementById('cardVideo'); 

    if (!card) {
        console.error("Error: Element with id 'profileCard' not found.");
        return;
    }

    // --- 按钮链接和互动功能 ---
    
    const consultButton = card.querySelector('.btn-main');
    if (consultButton) {
        consultButton.addEventListener('click', function(event) {
            event.stopPropagation(); // 阻止点击按钮时卡片翻转
            alert('正在跳转到咨询页面...'); 
            // !!! 请替换此处的 '您的真实咨询链接' !!!
            window.open('您的真实咨询链接', '_blank'); 
        });
    }

    const qaButtons = card.querySelectorAll('.btn-group button');
    qaButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.stopPropagation(); 
            
            const buttonText = button.textContent.trim();
            let targetUrl = '';

            // 替换为您的真实知乎与 Bilibili 链接
            if (buttonText === '发起提问') {
                targetUrl = 'https://zhuanlan.zhihu.com/p/691198840?share_code=sxm903a247yL&utm_psn=1976199060072453115'; // 您的知乎链接
            } else if (buttonText === '获取心法') {
                targetUrl = 'https://space.bilibili.com/323700487/lists'; // 您的 Bilibili 链接
            } else if (buttonText === '个人简介') {
                targetUrl = '#'; 
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

    const expandButton = card.querySelector('.btn-expand');
    if (expandButton) {
        expandButton.addEventListener('click', function(event) {
            event.stopPropagation();
            alert('展开功能启动！'); 
        });
    }


    // --- 卡片翻转和视频功能 (最终修复，解决点击冲突) ---

    card.addEventListener('click', function(event) {
        // 确保点击按钮时不触发翻转
        if (event.target.closest('button')) {
            return;
        }

        // 切换 .flipped 类来触发 CSS 翻转动画
        card.classList.toggle('flipped');

        if (card.classList.contains('flipped')) {
            // 翻转到背面：延迟后播放视频
            setTimeout(() => {
                if (video) {
                    video.play().catch(error => {
                        console.log('Video auto-play failed, user interaction needed:', error);
                    });
                }
            }, 500); 
        } else {
            // 翻转到正面：暂停视频并重置时间
            if (video) {
                video.pause();
                video.currentTime = 0; 
            }
        }
    });
});
