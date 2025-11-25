// script.js - 恢复版：保留原始逻辑，确保功能稳定性

// ==========================================
// 第一部分：左侧面板逻辑 (菜单与详情切换)
// ==========================================

function toggleMenu(showMenu) {
    const profileCover = document.getElementById('profileCover');
    const menuList = document.getElementById('menuList');
    
    // 检查元素是否存在，防止运行时错误
    if (!profileCover || !menuList) {
        console.error('Error: profileCover or menuList not found.');
        return;
    }

    if (showMenu) {
        profileCover.classList.add('hidden');
        menuList.classList.remove('hidden');
        // 确保详情页隐藏
        document.getElementById('contentDetail').classList.add('hidden'); 
    } else {
        profileCover.classList.remove('hidden');
        menuList.classList.add('hidden');
    }
}

function backToMenu() {
    const contentDetail = document.getElementById('contentDetail');
    const menuList = document.getElementById('menuList');

    if (!contentDetail || !menuList) {
        console.error('Error: contentDetail or menuList not found.');
        return;
    }
    
    contentDetail.classList.add('hidden');
    menuList.classList.remove('hidden');
}

// 左侧菜单详情内容配置 (使用您提供的原始配置)
const contentData = {
    'strength': `
        <div class="detail-card">
            <h3>核心优势：以“破绽”为支点</h3>
            <ul>
                <li><strong>跨学科降维打击：</strong> 本科理工思维 x 硕士东大农学生命科学（文理交叉），擅长构建其他人无法复制的多维视角。</li>
                <li><strong>化“弱”为“强”：</strong> 独创“破绽利用法”。我不掩盖你的劣势，而是将你经历中的“矛盾点”转化为最吸引教授的“研究动机”。</li>
                <li><strong>东大底层逻辑：</strong> 深入破解日本顶级学府的“潜规则”，提供符合“东大基准”的逻辑重构。</li>
                <li><strong>非语言博弈：</strong> 独创“坐姿/眼神/递交材料”全真模拟，在面试的前30秒赢下心理战。</li>
            </ul>
        </div>
    `,
    'model': `
        <div class="detail-card">
            <h3>辅导模式与价值承诺</h3>
            <ul>
                <li><strong>1:1 师徒制：</strong> 拒绝大班流水线。我只做精细化个人辅导，确保我的核心认知 100% 传递给你。</li>
                <li><strong>【强推】免佣直通车：</strong> 通过我推荐进入合作私塾/语言学校，<span style="color:#d9534f; font-weight:bold;">辅导费由机构承担</span>。
                    <br><span style="font-size:0.9em; color:#666;">*这不仅是为您省钱，更是为了剔除中间商，建立最直接的“师徒”利益共同体。</span>
                </li>
                <li><strong>结果导向：</strong> 若第一年未合格，第二年免费继续辅导，直到你上岸。</li>
                <li><strong>无限时服务：</strong> 不按课时算钱，只为最终合格率负责。</li>
            </ul>
        </div>
    `,
    'cases': `
        <div class="detail-card">
            <h3>成功案例 / 更多思考</h3>
            <p style="margin-bottom: 15px;">不要只看结果，要看逻辑。深度阅读我的专栏，了解如何用“认知差”跨越学历壁垒：</p>
            
            <a href="https://zhuanlan.zhihu.com/p/691198840?share_code=sxm903a247yL&utm_psn=1976199060072453115" target="_blank" class="link-btn">
                知乎：核心优势与背景解析 →
            </a>
            
            <a href="https://space.bilibili.com/323700487/lists" target="_blank" class="link-btn">
                Bilibili：辅导视频列表 →
            </a>
        </div>
    `
};

function showContent(type) {
    const menuList = document.getElementById('menuList');
    const contentDetail = document.getElementById('contentDetail');
    const dynamicContent = document.getElementById('dynamicContent');

    if (!dynamicContent || !menuList || !contentDetail) {
         console.error('Error: One or more dynamic elements not found.');
         return;
    }

    // 填充内容
    dynamicContent.innerHTML = contentData[type];

    // 切换显示
    menuList.classList.add('hidden');
    contentDetail.classList.remove('hidden');
}


// ==========================================
// 第二部分：右侧 AI 咨询室逻辑 (深度问答库 - 保持原始逻辑)
// ==========================================

// 保持您原始的 qaDatabase
const qaDatabase = [
    // ... 您的完整问答数据 ... (此处省略，保持与您提供的一致)
    // 您的 qaDatabase 非常长，我将确保它被完整保留在您实际替换的代码中。
    // 为简洁，我只放关键的：
    {
        keywords: ['费用', '钱', '收费', '价格', '贵吗'],
        answer: "关于费用，我的原则是<strong>【透明】与【价值对等】</strong>。<br><br>我不进行低效的价格博弈。您支付的不仅仅是时间，而是我作为东大博士的<strong>【核心认知】与【通关经验】</strong>。<br>目前仅开放两种通道：<br>1. 机构通道：适合需要全套基础流程服务的同学。<br>2. <strong>【私塾核心】免佣直通车</strong>：这是我最推荐的模式。剔除中间商溢价，您所有的预算都将转化为我的<strong>【有效辅导时长】</strong>。<br><br>如果您已准备好为结果负责，请联系微信 <strong>qiuwu999</strong> 获取详细方案。"
    },
    // ... 更多问答 ...
    {
        keywords: ['再考虑', '模棱两可'],
        answer: "教授说“再考虑”是拒绝吗？不一定！这代表你有潜力但他有顾虑。回复时要展现“死磕”精神，询问具体顾虑点并表示愿意改进，积极的执行力能逆转局面！"
    },
    {
        keywords: ['语言学校', '私塾'],
        answer: "语言学校解决签证，私塾强化升学。最划算的方式是：通过我推荐进私塾/语校，可免我的辅导费，实现<strong>效率与费用的双赢</strong>。加微信 <strong>qiuwu999</strong> 聊聊具体方案！"
    }
]; // **注意：请用您完整的 qaDatabase 替换这段注释。**

// ==========================================
// 第四部分：聊天核心逻辑 (保持原始逻辑)
// ==========================================

// 处理用户输入
function handleKeyPress(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}

function sendMessage() {
    const inputField = document.getElementById('userInput');
    const chatBody = document.getElementById('chatBody');

    if (!inputField || !chatBody) {
        console.error('Error: Input field or chat body not found.');
        return;
    }
    
    const message = inputField.value.trim();
    
    if (message === "") return;

    // 1. 显示用户消息
    appendMessage(message, 'user');
    inputField.value = '';

    // 2. 模拟 AI 思考延迟
    setTimeout(() => {
        const reply = findAnswer(message);
        appendMessage(reply, 'ai');
    }, 600); // 0.6秒延迟，模拟思考
}

function appendMessage(text, sender) {
    const chatBody = document.getElementById('chatBody');

    if (!chatBody) return; // 再次检查

    const msgDiv = document.createElement('div');
    msgDiv.className = `message ${sender}-message`;
    
    // AI 回复支持 HTML 标签（用于换行和加粗），用户消息纯文本
    const bubbleContent = sender === 'ai' ? text : text.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    
    msgDiv.innerHTML = `<div class="bubble">${bubbleContent}</div>`;
    chatBody.appendChild(msgDiv);
    
    // 滚动到底部
    chatBody.scrollTop = chatBody.scrollHeight;
}

// 关键词匹配算法
function findAnswer(userText) {
    // 默认回复 - 更具情商的引导
    let bestReply = "嗯，这是一个很好的问题！我是 AI 助理，关于这个细节，建议您直接点击左侧菜单查看我的<strong>辅导模式</strong>和<strong>核心优势</strong>，或者直接加微信 <strong>qiuwu999</strong> 详细评估。我们保证所有问题都会得到专业解答！";

    // 遍历数据库匹配关键词
    const normalizedText = userText.toLowerCase();
    for (const item of qaDatabase) {
        // 检查是否包含任意一个关键词
        const match = item.keywords.some(keyword => normalizedText.includes(keyword));
        if (match) {
            bestReply = item.answer;
            break;  
        }
    }
    return bestReply;
}
