// script.js - 最终定稿版 (包含心理学内容优化与极致稳定性)

// ==========================================
// 第一部分：深度内容配置 (心理学/文化适应向)
// ==========================================

// 左侧菜单详情内容
const contentData = {
    'strength': `
        <div class="detail-card">
            <h3>核心优势：以“破绽”为支点</h3>
            <ul>
                <li><strong>跨学科降维打击：</strong> 本科理工思维 x 硕士东大农学生命科学。我擅长用<strong>“理科逻辑”</strong>重构<strong>“文科感性”</strong>，这种反差感是东大教授最喜欢的。</li>
                <li><strong>化“弱”为“强”：</strong> 独创“破绽利用法”。利用心理学中的<strong>“必须性逻辑”</strong>，将你简历中的劣势（如跨专业、双非）包装成教授无法拒绝的“独特研究动机”。</li>
                <li><strong>东大底层逻辑：</strong> 只有东大博士才懂的“潜规则”。我教你如何识别教授邮件中的“建前”（客套话）与“本音”（真心话）。</li>
            </ul>
        </div>
    `,
    'model': `
        <div class="detail-card">
            <h3>辅导模式与价值承诺</h3>
            <ul>
                <li><strong>1:1 师徒制：</strong> 拒绝大班流水线。留学申请本质上是建立<strong>“师徒契约”</strong>，我只做精细化辅导。</li>
                <li><strong>【强推】免佣直通车：</strong> 利用我在业界的<strong>“信用背书”</strong>，直接送你进合作机构，<span style="color:#d9534f; font-weight:bold;">费用由机构承担</span>。这是最高效的三方共赢。</li>
                <li><strong>结果导向：</strong> 我们的目标不是“递交材料”，而是“心理博弈的胜利”。</li>
            </ul>
        </div>
    `,
    'cases': `
        <div class="detail-card">
            <h3>成功案例 / 更多思考</h3>
            <p style="margin-bottom: 15px;">申请是一场认知战。建议深度阅读我的专栏，了解如何用“认知差”跨越学历壁垒：</p>
            
            <a href="https://zhuanlan.zhihu.com/p/691198840?share_code=sxm903a247yL&utm_psn=1976199060072453115" target="_blank" class="link-btn">
                知乎：核心优势与背景解析 →
            </a>
            
            <a href="https://space.bilibili.com/323700487/lists" target="_blank" class="link-btn">
                Bilibili：辅导视频列表 →
            </a>
        </div>
    `
};

// 故事卡数据 (心理学/文化适应测试)
const storyCardData = {
    // 步骤 1: 核心痛点定位
    'step1': {
        title: 'AI 升学破局测试：你是哪种“文化不适症”？',
        question: '在准备日本留学时，最让您感到“心里没底”的是什么？',
        options: [
            { text: '逻辑迷茫型：完全不懂教授想要什么，计划书像在写作文。', nextStep: 'result_rps' },
            { text: '文化恐惧型：害怕面试冷场，不懂日本人的“潜台词”。', nextStep: 'result_interview' },
            { text: '信息焦虑型：想省钱省力，但怕被黑中介坑，找不到靠谱渠道。', nextStep: 'result_channel' }
        ]
    },
    
    // 结果 1: 针对研究计划书
    'result_rps': {
        title: '💡 诊断：您需要的是“东大式逻辑重构”',
        result: `
            <p>您感到的迷茫，源于中日学术思维的差异。中国教育偏向“宏大叙事”，而日本研究看重<strong>“具体的逻辑闭环”</strong>。</p>
            <p><strong>【破局心理学】:</strong></p>
            <p>利用<strong>“单一归因法”</strong>。不要试图解决所有问题，我将教您如何只抓住一个极其细小的“破绽”，用手术刀般的精准度去解剖它。这种<strong>“钻研感”</strong>最能打动日本教授。</p>
            <p><strong>【下一步】:</strong> 添加微信 <strong>qiuwu999</strong>，备注“逻辑诊断”，我帮您看一眼题目的可行性。</p>
        `,
        isResult: true
    },
    
    // 结果 2: 针对面试与文化
    'result_interview': {
        title: '💡 诊断：您需要破解“空气文化”',
        result: `
            <p>这种恐惧是正常的。日本面试本质上是一场<strong>“社会化测试”</strong>。教授在测试您是否能读懂<strong>“空气”（Kuuki）</strong>，即非语言的沟通。</p>
            <p><strong>【破局心理学】:</strong></p>
            <p>我们将进行<strong>“防御性悲观”</strong>训练。我会教您如何听懂教授问题的“弦外之音”（比如他问你“在这个领域有无其他兴趣”，其实可能是在暗示你的题目太窄）。掌握了这些暗号，面试就是一场愉快的聊天。</p>
            <p><strong>【下一步】:</strong> 添加微信 <strong>qiuwu999</strong>，领取一份《日本教授面试潜台词对照表》。</p>
        `,
        isResult: true
    },

    // 结果 3: 针对渠道资源
    'result_channel': {
        title: '💡 诊断：您需要建立“信任契约”',
        result: `
            <p>您的焦虑来自于<strong>“信息不对称”</strong>。在日本社会，<strong>“信用”（Shinyo）</strong>是最昂贵的货币。</p>
            <p><strong>【破局心理学】:</strong></p>
            <p>走<strong>“权威背书”</strong>路线。不要自己在网上像无头苍蝇一样乱撞。利用我作为东大博士的信用背书，通过<strong>【免佣直通车】</strong>直接进入靠谱机构。这不仅是省钱，更是为了进入一个正确的“圈子”（Uchi）。</p>
            <p><strong>【下一步】:</strong> 添加微信 <strong>qiuwu999</strong>，直接发送“直通车”，立即开启安全通道。</p>
        `,
        isResult: true
    }
};

// QA 数据库 (深度问答)
const qaDatabase = [
    {
        keywords: ['费用', '钱', '收费', '价格', '贵吗', '多少钱'],
        answer: "这是一个非常务实的问题。但在日本文化语境下，我们不仅谈**“价格”**，更谈**“价值交换”**。<br><br>我的服务模式基于日本社会的**“信用背书”**逻辑：<br>1. **【免佣直通车】（推荐）：** 利用我在业界的信用积累，直接对接合作私塾，费用由机构承担。这是最高效的“三方共赢”模式。<br>2. **【深度定制】：** 针对需要打破“学历壁垒”的同学，我提供的是不可复制的**认知重构**服务。<br><br>如果您想知道具体数字，请直接联系微信 <strong>qiuwu999</strong>。我们不进行低效的价格博弈，只做价值对等的契约。"
    },
    {
        keywords: ['优势', '特点', '区别', '为什么选你', '靠谱吗'],
        answer: "市面上的中介在帮您“填表格”，而我在教您**“读空气”（空気を読む）**。<br><br>日本教授录取学生，往往看的不是谁最强，而是谁最**“合适”（相性，Aishou）**。我的核心优势在于：<br>1. **【文化解码】：** 我能帮您识别教授邮件中的“建前”（客套话）与“本音”（真心话）。<br>2. **【破绽利用】：** 利用心理学中的**“必须性逻辑”**，将您的双非背景或跨专业劣势，包装成教授眼中“独特的跨学科视角”。<br>这不仅是申请，更是一场心理战。"
    },
    {
        keywords: ['套磁', '联系教授', '邮件', '不回信'],
        answer: "套磁的本质，不是“推销自己”，而是**“确认归属感”**。日本教授极度看重**“礼节”（Reigi）**与**“边界感”**。<br><br>如果您发了邮件没回音，通常不是因为您不够优秀，而是触犯了文化禁忌：<br>1. **缺乏“谦逊的自信”：** 过于自夸会引发反感，过于卑微又会被无视。<br>2. **没踩准“时间窗口”：** 日本学术界有特定的繁忙期。<br><br>我有一套经过验证的**《东大式·结构化套磁信模板》**，专门通过心理暗示激发教授的回复欲望。需要的话，请在左侧进行测试或联系微信。"
    },
    {
        keywords: ['计划书', '研究计划', '题目', '怎么写'],
        answer: "研究计划书（RP）在教授眼中，其实是一份**“逻辑投名状”**。<br><br>中国学生常犯的错误是“大而全”，而日本教授偏爱**“小而精”且“逻辑闭环”**的东西。这涉及到日本人的**“职人精神”**心理。<br>我们不应该去碰那些看起来很宏大的题目，而要学会**“以小见大”**。我会教您如何用理工科的严密逻辑，去拆解文科的感性话题，这种**“反差感”**正是东大教授最喜欢的。"
    },
    {
        keywords: ['面试', '口语', '紧张', '刁难'],
        answer: "日本面试的底层逻辑是**“减分制”**与**“压力测试”**。教授不仅在听内容，更在观察您的**“非语言信号”**。<br><br>甚至在您进门敲门的那三秒，胜负可能已经定了。这涉及到日本文化中的**“身得”（Minashinami）**。<br>我首创的**【前30秒非语言博弈训练】**，通过调整您的眼神落点、坐姿重心和声音频率，让您在气场上表现出一种“虽然我是学生，但我已经准备好成为研究者”的稳重感。"
    },
    {
        keywords: ['双非', '出身', '学历', '二本', '三本'],
        answer: "在日本，**“出身校”**确实是一个门槛，但绝不是死局。所谓的“名校情结”，本质上是教授为了**“降低筛选风险”**的心理防御机制。<br><br>要打破这个防御，我们需要利用**“认知偏差”**：<br>不要试图掩盖您的出身，而是通过一份超高水准的**研究计划书**，制造巨大的**“期待违和感”**（Positive Surprise）。<br>当您的学术逻辑远超您的学历背景时，这种冲击力比名校生的平庸表现更具吸引力。"
    }
];

// ==========================================
// 第二部分：核心交互逻辑 (确保稳定性)
// ==========================================

/**
 * 核心：确保右侧面板显示聊天室，隐藏其他内容
 */
function returnToChat() {
    const chatBody = document.getElementById('chatBody');
    const storyCardContainer = document.getElementById('storyCardContainer');
    const chatInputArea = document.querySelector('.chat-input-area');
    const loadingIndicator = document.getElementById('loadingIndicator');

    if (chatBody) chatBody.style.display = 'block';
    if (chatInputArea) chatInputArea.style.display = 'flex';
    if (storyCardContainer) storyCardContainer.style.display = 'none';
    if (loadingIndicator) loadingIndicator.classList.add('hidden');
}

/**
 * 切换左侧面板状态 (菜单 vs 封面)
 */
function toggleMenu(showMenu) {
    const profileCover = document.getElementById('profileCover');
    const menuList = document.getElementById('menuList');
    const contentDetail = document.getElementById('contentDetail');
    
    // 每次切换左侧时，重置右侧为聊天模式，提升体验
    returnToChat(); 

    if (showMenu) {
        if (profileCover) profileCover.classList.add('hidden');
        if (menuList) menuList.classList.remove('hidden');
        if (contentDetail) contentDetail.classList.add('hidden'); 
    } else {
        // 返回封面
        if (profileCover) profileCover.classList.remove('hidden');
        if (menuList) menuList.classList.add('hidden');
        if (contentDetail) contentDetail.classList.add('hidden');
    }
}

/**
 * 左侧：从详情页返回菜单
 */
function backToMenu() {
    const contentDetail = document.getElementById('contentDetail');
    const menuList = document.getElementById('menuList');
    
    returnToChat(); 

    if (contentDetail) contentDetail.classList.add('hidden');
    if (menuList) menuList.classList.remove('hidden');
}

/**
 * 左侧：显示具体内容详情
 */
function showContent(type) {
    const menuList = document.getElementById('menuList');
    const contentDetail = document.getElementById('contentDetail');
    const dynamicContent = document.getElementById('dynamicContent');

    returnToChat(); // 确保右侧是聊天

    if (dynamicContent) dynamicContent.innerHTML = contentData[type] || '未找到内容。';

    if (menuList) menuList.classList.add('hidden');
    if (contentDetail) contentDetail.classList.remove('hidden');
}

// ==========================================
// 第三部分：故事卡模式逻辑
// ==========================================

function renderStoryCard(step) {
    const storyCardContainer = document.getElementById('storyCardContainer');
    if (!storyCardContainer) return;

    let html = `<div class="story-card-inner"><h3>${step.title}</h3>`;

    if (step.isResult) {
        // 渲染结果
        html += `<div class="story-result">${step.result}</div>`;
        html += `<button class="btn-story-reset" onclick="resetAllViews()">完成测试，返回聊天</button>`;
    } else {
        // 渲染问题选项
        html += `<p class="story-question">${step.question}</p><div class="story-options">`;
        step.options.forEach(option => {
            html += `<button class="btn-story-option" onclick="showStoryCard('${option.nextStep}')">${option.text}</button>`;
        });
        html += `</div>`;
    }

    html += `</div>`;
    storyCardContainer.innerHTML = html;
}

function resetAllViews() {
    toggleMenu(false); // 左侧回封面
    returnToChat();    // 右侧回聊天
}

function showStoryCard(stepKey) {
    const menuList = document.getElementById('menuList');
    const contentDetail = document.getElementById('contentDetail');
    const profileCover = document.getElementById('profileCover');
    const chatBody = document.getElementById('chatBody');
    const storyCardContainer = document.getElementById('storyCardContainer');
    const chatInputArea = document.querySelector('.chat-input-area');

    // 1. 左侧强制显示菜单状态
    if (profileCover) profileCover.classList.add('hidden');
    if (contentDetail) contentDetail.classList.add('hidden'); 
    if (menuList) menuList.classList.remove('hidden');

    // 2. 右侧切换到故事卡模式
    if (chatBody) chatBody.style.display = 'none';
    if (chatInputArea) chatInputArea.style.display = 'none';
    if (storyCardContainer) storyCardContainer.style.display = 'block';

    const step = storyCardData[stepKey];
    if (step) {
        renderStoryCard(step);
    } else {
        console.error("Story step not found:", stepKey);
        resetAllViews();
    }
}

// ==========================================
// 第四部分：聊天与 AI 逻辑
// ==========================================

function appendMessage(message, sender) {
    const chatBody = document.getElementById('chatBody');
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', sender === 'user' ? 'user-message' : 'ai-message');
    
    const bubbleDiv = document.createElement('div');
    bubbleDiv.classList.add('bubble');
    bubbleDiv.innerHTML = message;

    messageDiv.appendChild(bubbleDiv);
    chatBody.appendChild(messageDiv);
    
    // 自动滚动到底部
    chatBody.scrollTop = chatBody.scrollHeight;
}

function getAnswerFromDB(query) {
    const lowerQuery = query.toLowerCase().trim();
    for (const qa of qaDatabase) {
        for (const keyword of qa.keywords) {
            if (lowerQuery.includes(keyword.toLowerCase())) {
                return qa.answer;
            }
        }
    }
    return null;
}

// 模拟 API 调用（含延迟效果）
async function callGeminiApi(userQuery) {
    // 1. 优先查本地库
    const dbAnswer = getAnswerFromDB(userQuery);
    if (dbAnswer) {
        // 模拟思考时间 600ms
        await new Promise(resolve => setTimeout(resolve, 600));
        return dbAnswer;
    }

    // 2. 兜底回复
    await new Promise(resolve => setTimeout(resolve, 1000));
    return `关于 **“${userQuery}”**，这是一个很细节的问题。<br><br>从日本教授的视角来看，这可能涉及到**“研究可行性”**或**“人际边界”**的问题。为了给出负责任的建议，我建议您直接联系微信 <strong>qiuwu999</strong>，我们进行一对一的背景诊断。`;
}

async function sendMessage() {
    const userInput = document.getElementById('userInput');
    const message = userInput.value.trim();

    if (message === "") return;
    
    // 发送用户消息
    appendMessage(message, 'user');
    userInput.value = '';
    userInput.disabled = true; // 锁定输入

    // 显示加载动画
    const loadingIndicator = document.getElementById('loadingIndicator');
    if (loadingIndicator) {
        loadingIndicator.classList.remove('hidden');
        document.getElementById('chatBody').scrollTop = document.getElementById('chatBody').scrollHeight;
    }

    // 获取回答
    const aiAnswer = await callGeminiApi(message);

    // 显示 AI 回复
    appendMessage(aiAnswer, 'ai');

    // 隐藏加载动画并解锁
    if (loadingIndicator) loadingIndicator.classList.add('hidden');
    userInput.disabled = false;
    userInput.focus();
}

function handleKeyPress(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}
