// script.js 完整代码 - 包含所有功能和最终翻转修复

document.addEventListener('DOMContentLoaded', function() {
    const card = document.getElementById('profileCard'); 
    const video = document.getElementById('cardVideo'); 

    if (!card) {
        console.error("Error: Element with id 'profileCard' not found.");
        return;
    }

    // --- 按钮链接和互动功能 (咨询、知乎、B站) ---
    
    const consultButton = card.querySelector('.btn-main');
    if (consultButton) {
        consultButton.addEventListener('click', function(event) {
            event.stopPropagation(); // 阻止点击按钮时卡片翻转
            alert('正在跳转到咨询页面...'); 
            // !!! 待您替换为真实咨询URL !!!
            window.open('https://example.com/consult', '_blank'); 
        });
    }

    const qaButtons = card.querySelectorAll('.btn-group button');
    qaButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.stopPropagation(); 
            
            const buttonText = button.textContent.trim();
            let targetUrl = '';

            // !!! 待您替换为真实知乎与 Bilibili 链接 !!!
            if (buttonText === '发起提问') {
                targetUrl = 'https://www.zhihu.com/'; 
            } else if (buttonText === '获取心法') {
                targetUrl = 'https://www.bilibili.com/'; 
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


    // --- 卡片翻转和视频功能 (关键修复) ---

    card.addEventListener('click', function(event) {
        // 确保点击按钮时不会触发翻转
        if (event.target.closest('button')) {
            return;
        }

        // 切换 .flipped 类来触发 CSS 翻转动画
        card.classList.toggle('flipped');

        if (card.classList.contains('flipped')) {
            // 翻转到背面
            setTimeout(() => {
                if (video) {
                    video.play().catch(error => {
                        console.log('Video auto-play failed, user interaction needed:', error);
                    });
                }
            }, 500); 
        } else {
            // 翻转到正面
            if (video) {
                video.pause();
                video.currentTime = 0; 
            }
        }
    });
});
