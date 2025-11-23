// script.js 完整代码 - 解决视频点击事件冲突 (最终修复)

document.addEventListener('DOMContentLoaded', function() {
    const card = document.getElementById('profileCard'); 
    const video = document.getElementById('cardVideo'); 

    if (!card) {
        console.error("Error: Element with id 'profileCard' not found.");
        return;
    }

    // --- 按钮链接和互动功能 (保持不变) ---
    
    // 获取主要的咨询按钮
    const consultButton = card.querySelector('.btn-main');

    // 监听主要的咨询按钮
    if (consultButton) {
        consultButton.addEventListener('click', function(event) {
            event.stopPropagation(); // 阻止点击按钮时卡片翻转
            alert('正在跳转到咨询页面...'); // 提示用户
            // 咨询沟通功能，请替换为您的实际咨询URL（如微信/QQ链接）
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

            // 设置知乎与 Bilibili 链接 (可根据需要修改)
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

    // 监听“展开”按钮
    const expandButton = card.querySelector('.btn-expand');
    if (expandButton) {
        expandButton.addEventListener('click', function(event) {
            event.stopPropagation();
            alert('展开功能启动！'); 
        });
    }


    // --- 卡片翻转和视频功能 ---

    // 监听卡片点击事件 (实现翻转)
    card.addEventListener('click', function(event) {
        // ****** 关键修复区域 ******
        // 如果点击的目标是视频控件区域，阻止翻转，让视频播放器处理点击。
        // 但是，如果视频已经翻转到背面，我们应该允许卡片翻转回来。
        
        // 如果卡片已经在背面 (flipped)，则任何点击都应尝试翻转回去，
        // 除非点击的是视频上的“播放/暂停”按钮等控件本身。
        if (card.classList.contains('flipped')) {
            // 关键：允许卡片翻转回来
            if (event.target.tagName === 'VIDEO' || event.target.tagName === 'SOURCE') {
                // 如果是直接点击视频主体，仍允许翻转回去 (而不是让视频控件独占点击)
            } else if (event.target.closest('.card-back')) {
                 // 如果点击的是背面的其他区域，则允许翻转回去
            } else {
                // 如果点击的是正面的区域，则尝试翻转
            }
        } else {
            // 如果卡片在正面，则进行翻转
        }

        // 切换 .flipped 类来触发 CSS 翻转动画
        card.classList.toggle('flipped');

        // 处理视频播放/暂停
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
