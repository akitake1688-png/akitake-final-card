// script.js - 包含左侧菜单切换逻辑 & 右侧 AI 自动回复逻辑

// === 第一部分：左侧面板逻辑 ===

function toggleMenu(showMenu) {
    const profileCover = document.getElementById('profileCover');
    const menuList = document.getElementById('menuList');
    
    if (showMenu) {
        profileCover.classList.add('hidden');
        menuList.classList.remove('hidden');
    } else {
        profileCover.classList.remove('hidden');
        menuList.classList.add('hidden');
    }
}

function backToMenu() {
    document.getElementById('contentDetail').classList.add('hidden');
    document.getElementById('menuList').classList.remove('hidden');
}

// 定义左侧菜单的具体内容
const contentData = {
    'strength': `
        <div class="detail-card">
            <h3>核心优势</h3>
            <ul>
                <li><strong>跨学科思维：</strong> 本科理工 x 硕士东大农学生命科学（文理交叉），擅长多维视角分析。</li>
                <li><strong>东大背景：</strong> 深入了解日本顶级学府学术要求与潜规则。</li>
                <li><strong>非语言沟通：</strong> 独创“坐姿/眼神/递交材料”全真模拟，矫正每一个细节。</li>
                <li><strong>故事线打造：</strong> 将零散经历串联成扣人心弦的“学术成长史”，埋设面试伏笔。</li>
                <li><strong>化弱为强：</strong> 巧妙利用“破绽”，将其转化为独特视角，引导教授提问。</li>
            </ul>
        </div>
    `,
    'model': `
        <div class="detail-card">
            <h3>辅导模式</h3>
            <ul>
                <li><strong>1:1 深度定制：</strong> 拒绝模板。从研究计划书到面试答辩，全程一对一打磨。</li>
                <li><strong>免费辅导机制：</strong> 通过指定渠道进入合作私塾/语言学校，辅导费由机构承担，学生0负担！</li>
                <li><strong>利益深度绑定：</strong> 若第一年未合格，第二年免费继续辅导。</li>
                <li><strong>无限时服务：</strong> 不限课时，不限次数，越早开始性价比越高。</li>
            </ul>
        </div>
    `,
    'cases': `
        <div class="detail-card">
            <h3>成功案例 / 更多思考</h3>
            <p style="margin-bottom: 15px;">深度阅读我的知乎专栏，了解更多日本考学内幕与技巧：</p>
            
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

    // 填充内容
    dynamicContent.innerHTML = contentData[type];

    // 切换显示
    menuList.classList.add('hidden');
    contentDetail.classList.remove('hidden');
}


// === 第二部分：右侧 AI 聊天逻辑 ===

// 简单的关键词回复库
const qaDatabase = [
    {
        keywords: ['电气', '自动化', '就业', '前景', 'cs', '转码'],
        answer: "电气自动化？你如果还盯着‘进国家电网’或者‘去工厂修设备’，那你就已经在起跑线上输了。听好了，2025年的风口不是‘电’，而是‘智’。1. **新能源与储能**：现在光伏风电都在并网，谁能搞定‘源网荷储’的自动化调度，谁就是大爷。2. **AI落地的物理载体**：大模型再牛，也得靠自动化设备去执行。3. **就业降维打击**：别去卷纯CS了。懂强电的没你懂算法，懂算法的没你懂硬件。这就是我常说的‘错位竞争’。"
    },
    {
        keywords: ['模式', '区别', '收费', '钱', '费用'],
        answer: "你好，你们的辅导模式和收费有什么区别？<br><br>如果走我们的合作渠道，由于机构会支付介绍费（等同于你的辅导费），你可以实现 **零费用** 享受专业的一对一辅导。🎁<br>若第一年未合格，第二年免费继续辅导，利益深度绑定。"
    },
    {
        keywords: ['双非', 'gpa', '出身', '二本', '三本', '背景'],
        answer: "我是双非本科，GPA不高，能申请东大吗？<br><br>可以申请！不要被出身校限制。通过高质量的研究计划书展示你的思考能力，完全可以实现逆袭。💪 国立大学（如东大）在研究资源、导师阵容上有绝对优势。"
    },
    {
        keywords: ['面试', '刁钻', '问题', '提问'],
        answer: "面试时教授问了很刁钻的问题怎么办？<br><br>面试通常20-30分钟。前5分钟自我介绍，中间问研究内容，最后反向提问。我们会帮你准备独家的 **“关键词答题法”**，3分钟讲清核心逻辑。⏱️"
    },
    {
        keywords: ['志望理由', '研究计划', '区别', '文书'],
        answer: "志望理由书和研究计划书的区别是什么？<br><br>我坚持 **一对一**。大班课容易失焦，我更像研究室的前辈，带着你一步步挖掘动机、修正逻辑。我不教数理化，我教的是“如何打动教授的逻辑”。💛"
    },
    {
        keywords: ['累', '放弃', '心态'],
        answer: "准备出愿太累了，有点想放弃。<br><br>考学是一场马拉松，不仅拼智力，更拼心力。想想你当初为什么出发？东大的赤门在等着你。休息一下，调整呼吸，我们重新梳理一下你的核心逻辑。"
    }
];

// 处理用户输入
function handleKeyPress(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}

function sendMessage() {
    const inputField = document.getElementById('userInput');
    const message = inputField.value.trim();
    
    if (message === "") return;

    // 1. 显示用户消息
    appendMessage(message, 'user');
    inputField.value = '';

    // 2. 模拟 AI 思考延迟
    setTimeout(() => {
        const reply = findAnswer(message);
        appendMessage(reply, 'ai');
    }, 600); // 0.6秒延迟
}

function appendMessage(text, sender) {
    const chatBody = document.getElementById('chatBody');
    const msgDiv = document.createElement('div');
    msgDiv.className = `message ${sender}-message`;
    
    // AI 回复支持 HTML 标签（用于换行和加粗），用户消息纯文本
    const bubbleContent = sender === 'ai' ? text : text.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    
    msgDiv.innerHTML = `<div class="bubble">${bubbleContent}</div>`;
    chatBody.appendChild(msgDiv);
    
    // 滚动到底部
    chatBody.scrollTop = chatBody.scrollHeight;
}

// 关键词匹配逻辑
function findAnswer(userText) {
    // 默认回复
    let bestReply = "这个问题很有深度。建议你直接在左侧点击“成功案例”查看我的知乎专栏，或者直接输入“面试”、“辅导模式”来了解更多细节。";

    // 遍历数据库匹配关键词
    for (const item of qaDatabase) {
        // 检查是否包含任意一个关键词
        const match = item.keywords.some(keyword => userText.toLowerCase().includes(keyword));
        if (match) {
            bestReply = item.answer;
            break; 
        }
    }
    return bestReply;
}
