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
            // !!! 【待替换】请用您的真实咨询URL替换此行 !!!
            window.open('https://example.com/consult', '_blank'); 
        });
    }

    const qaButtons = card.querySelectorAll('.btn-group button');
    qaButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.stopPropagation(); 
            
            const buttonText = button.textContent.trim();
            let targetUrl = '';

            // !!! 【待替换】请用您的真实知乎与 Bilibili 链接替换此行 !!!
            if (buttonText === '发起提问') {
                targetUrl = 'https://www.zhihu.com/'; 
            } else if (buttonText === '获取心法') {
                targetUrl = 'https://www.bilibili.com/'; 
            } else if (buttonText === '个人简介') {
                targetUrl = '#'; // 个人简介目前未设置跳转
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
                    // 尝试播放视频，解决浏览器自动播放限制
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
