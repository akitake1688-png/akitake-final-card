// script.js - 最终定稿版 (修士身份/去AI味/秋武互动逻辑强化)

// ==========================================
// 第一部分：内容配置
// ==========================================

const contentData = {
    'strength': `
        <div class="detail-card">
            <h3>核心优势：以“破绽”为支点</h3>
            <ul>
                <li><strong>跨学科降维打击：</strong> 本科理工思维 x 硕士东大农学生命科学。我擅长用<strong>“理科逻辑”</strong>重构<strong>“文科感性”</strong>，这种反差感是东大教授最喜欢的。</li>
                <li><strong>化“弱”为“强”：</strong> 独创“破绽利用法”。利用心理学中的<strong>“必须性逻辑”</strong>，将你简历中的劣势（如跨专业、双非）包装成教授无法拒绝的“独特研究动机”。</li>
                <li><strong>东大底层逻辑：：</strong> 只有东大前辈才懂的“潜规则”。我教你如何识别教授邮件中的“建前”（客套话）与“本音”（真心话）。</li>
            </ul>
        </div>
    `,
    'model': `
        <div class="detail-card">
            <h3>辅导模式与价值承诺</h3>
            <ul>
                <li><strong>1:1 师徒制：：</strong> 拒绝大班流水线。留学申请本质上是建立<strong>“师徒契约”</strong>，我只做精细化辅导。</li>
                <li><strong>【强推】免佣直通车：：</strong> 利用我在业界的<strong>“信用背书”</strong>，直接送你进合作机构，<span style="color:#d9534f; font-weight:bold;">费用由机构承担</span>。这是最高效的三方共赢。</li>
                <li><strong>结果导向：：</strong> 我们的目标不是“递交材料”，而是“心理博弈的胜利”。</li>
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

const storyCardData = {
    'step1': {
        title: 'AI 升学破局测试：你是哪种“文化不适症”？',
        question: '在准备日本留学时，最让您感到“心里没底”的是什么？',
        options: [
            { text: '逻辑迷茫型：完全不懂教授想要什么，计划书像在写作文。', nextStep: 'result_rps' },
            { text: '文化恐惧型：害怕面试冷场，不懂日本人的“潜台词”。', nextStep: 'result_interview' },
            { text: '信息焦虑型：想省钱省力，但怕被黑中介坑，找不到靠谱渠道。', nextStep: 'result_channel' }
        ]
    },
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
    'result_channel': {
        title: '💡 诊断：您需要建立“信任契约”',
        result: `
            <p>您的焦虑来自于<strong>“信息不对称”</strong>。在日本社会，<strong>“信用”（Shinyo）</strong>是最昂贵的货币。</p>
            <p><strong>【破局心理学】:</strong></p>
            <p>走<strong>“权威背书”</strong>路线。不要自己在网上像无头苍蝇一样乱撞。利用我作为东大修士的信用背书，通过<strong>【免佣直通车】</strong>直接进入靠谱机构。这不仅是省钱，更是为了进入一个正确的“圈子”（Uchi）。</p>
            <p><strong>【下一步】:</strong> 添加微信 <strong>qiuwu999</strong>，直接发送“直通车”，立即开启安全通道。</p>
        `,
        isResult: true
    }
};

const qaDatabase = [
    {
        keywords: ['费用', '钱', '收费', '价格', '贵吗', '多少钱'],
        answer: "这是一个非常务实的问题。但在日本文化语境下，我们不仅谈<strong>“价格”</strong>，更谈<strong>“价值交换”</strong>。<br><br>我的服务模式基于日本社会的<strong>“信用背书”</strong>逻辑：<br>1. <strong>【免佣直通车】（推荐）：</strong> 利用我在业界的信用积累，直接对接合作私塾，费用由机构承担。这是最高效的“三方共赢”模式。<br>2. <strong>【深度定制】：</strong> 针对需要打破“学历壁垒”的同学，我提供的是不可复制的<strong>认知重构</strong>服务。<br><br>如果您想知道具体数字，请直接联系微信 <strong>qiuwu999</strong>。我们不进行低效的价格博弈，只做价值对等的契约。"
    },
    {
        keywords: ['优势', '特点', '区别', '为什么选你', '靠谱吗'],
        answer: "市面上的中介在帮您“填表格”，而我在教您<strong>“读空气”（空気を読む）</strong>。<br><br>日本教授录取学生，往往看的不是谁最强，而是谁最<strong>“合适”（相性，Aishou）</strong>。我的核心优势在于：<br>1. <strong>【文化解码】：</strong> 我能帮您识别教授邮件中的“建前”（客套话）与“本音”（真心话）。<br>2. <strong>【破绽利用】：</strong> 利用心理学中的<strong>“必须性逻辑”</strong>，将您的双非背景或跨专业劣势，包装成教授眼中“独特的跨学科视角”。<br>这不仅是申请，更是一场心理战。"
    },
    {
        keywords: ['套磁', '联系教授', '邮件', '不回信'],
        answer: "套磁的本质，不是“推销自己”，而是<strong>“确认归属感”</strong>。日本教授极度看重<strong>“礼节”（Reigi）</strong>与<strong>“边界感”</strong>。<br><br>如果您发了邮件没回音，通常不是因为您不够优秀，而是触犯了文化禁忌：<br>1. <strong>缺乏“谦逊的自信”：</strong> 过于自夸会引发反感，过于卑微又会被无视。<br>2. <strong>没踩准“时间窗口”：：</strong> 日本学术界有特定的繁忙期。<br><br>我有一套经过验证的<strong>《东大式·结构化套磁信模板》</strong>，专门通过心理暗示激发教授的回复欲望。需要的话，请在左侧进行测试或联系微信。"
    },
    {
        keywords: ['计划书', '研究计划', '题目', '怎么写'],
        answer: "研究计划书（RP）在教授眼中，其实是一份<strong>“逻辑投名状”</strong>。<br><br>中国学生常犯的错误是“大而全”，而日本教授偏爱<strong>“小而精”且“逻辑闭环”</strong>的东西。这涉及到日本人的<strong>“职人精神”</strong>心理。<br>我们不应该去碰那些看起来很宏大的题目，而要学会<strong>“以小见大”</strong>。我会教您如何用理工科的严密逻辑，去拆解文科的感性话题，这种<strong>“反差感”</strong>正是东大教授最喜欢的。"
    },
    {
        keywords: ['面试', '口语', '紧张', '刁难'],
        answer: "日本面试的底层逻辑是<strong>“减分制”</strong>与<strong>“压力测试”</strong>。教授不仅在听内容，更在观察您的<strong>“非语言信号”</strong>。<br><br>甚至在您进门敲门的那三秒，胜负可能已经定了。这涉及到日本文化中的<strong>“身得”（Minashinami）</strong>。<br>我首创的<strong>【前30秒非语言博弈训练】</strong>，通过调整您的眼神落点、坐姿重心和声音频率，让您在气场上表现出一种“虽然我是学生，但我已经准备好成为研究者”的稳重感。"
    },
    {
        keywords: ['双非', '出身', '学历', '二本', '三本'],
        answer: "在日本，<strong>“出身校”</strong>确实是一个门槛，但绝不是死局。所谓的“名校情结”，本质上是教授为了<strong>“降低筛选风险”</strong>的心理防御机制。<br><br>要打破这个防御，我们需要利用<strong>“认知偏差”</strong>：<br>不要试图掩盖您的出身，而是通过一份超高水准的<strong>研究计划书</strong>，制造巨大的<strong>“期待违和感”</strong>（Positive Surprise）。<br>当您的学术逻辑远超您的学历背景时，这种冲击力比名校生的平庸表现更具吸引力。"
    }
];


// ==========================================
// 第二部分：核心交互逻辑
// ==========================================

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

function toggleMenu(showMenu) {
    const profileCover = document.getElementById('profileCover');
    const menuList = document.getElementById('menuList');
    const contentDetail = document.getElementById('contentDetail');
    
    returnToChat(); 

    if (showMenu) {
        if (profileCover) profileCover.classList.add('hidden');
        if (menuList) menuList.classList.remove('hidden');
        if (contentDetail) contentDetail.classList.add('hidden'); 
    } else {
        if (profileCover) profileCover.classList.remove('hidden');
        if (menuList) menuList.classList.add('hidden');
        if (contentDetail) contentDetail.classList.add('hidden');
    }
}

function backToMenu() {
    const contentDetail = document.getElementById('contentDetail');
    const menuList = document.getElementById('menuList');
    
    returnToChat(); 

    if (contentDetail) contentDetail.classList.add('hidden');
    if (menuList) menuList.classList.remove('hidden');
}

function showContent(type) {
    const menuList = document.getElementById('menuList');
    const contentDetail = document.getElementById('contentDetail');
    const dynamicContent = document.getElementById('dynamicContent');

    returnToChat();

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
        html += `<div class="story-result">${step.result}</div>`;
        html += `<button class="btn-story-reset" onclick="resetAllViews()">完成测试，返回聊天</button>`;
    } else {
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
    toggleMenu(false);
    returnToChat();
}

function showStoryCard(stepKey) {
    const menuList = document.getElementById('menuList');
    const contentDetail = document.getElementById('contentDetail');
    const profileCover = document.getElementById('profileCover');
    const chatBody = document.getElementById('chatBody');
    const storyCardContainer = document.getElementById('storyCardContainer');
    const chatInputArea = document.querySelector('.chat-input-area');

    if (profileCover) profileCover.classList.add('hidden');
    if (contentDetail) contentDetail.classList.add('hidden'); 
    if (menuList) menuList.classList.remove('hidden');

    if (chatBody) chatBody.style.display = 'none';
    if (chatInputArea) chatInputArea.style.display = 'none';
    if (storyCardContainer) storyCardContainer.style.display = 'block';

    const step = storyCardData[stepKey];
    if (step) {
        renderStoryCard(step);
    } else {
        resetAllViews();
    }
}

// ==========================================
// 第四部分：聊天与 AI 逻辑 (重点优化区域)
// ==========================================

// 🎯 专属于秋武老师的【兜底回复数组】(Fallback Responses) - 避免千篇一律的AI味儿
const akutakeFallbackResponses = [
    // 模板 1: 熵增/时间向量视角
    `这个问题很有深度，但提问本身可能陷入了一个<strong>‘内卷的负循环’</strong>。我们不能只盯着眼前的表象。根据热力学第二定律的“熵增原理”，你的努力如果不能转化为<strong>‘成长的向量’</strong>，只会像冷却的咖啡一样，最终导向无序和内耗。请你重新将这个问题<strong>‘向量化’</strong>：你的目标是什么？这件事情如何增强你独特的<strong>‘人味知性’</strong>？答案往往不在问题本身，而在你对时间线的方向性设计上。请试着用这个框架重新提问。`,
    
    // 模板 2: 建前/本音/读空气视角
    `我明白了您的顾虑。这个问题没有一个标准的<strong>‘字面解码’</strong>答案。这和我们讨论的日本文化中的<strong>‘建前与本音’</strong>是一样的道理。当你问出这个问题时，你的<strong>‘本音’</strong>（真实意图）可能不是寻求一个事实答案，而是想确认你内心的‘归属感’或‘方向性’。我的建议是：请你先退一步，问问自己，这个问题背后<strong>‘想说什么’</strong>？一旦你找到了驱动你提问的真实意图，答案自然会浮现。切记，在跨文化情境中，比逻辑更重要的是<strong>‘读空气’</strong>（空気を読む）和‘移情’的能力。`,
    
    // 模板 3: AI模仿极限/人类差异化视角
    `这个问题很好，但它恰恰触及了 AI <strong>‘模仿的极限’</strong>。如果这个问题能被标准地回答，那它就失去了‘人味知性’的价值。我们不能被 AI 的‘行为模仿’所迷惑。请思考，你的问题涉及的是一种<strong>‘感性的クオリア’</strong>（主观体验的质感），还是可以被计算的<strong>‘赋意’</strong>（Assigning Meaning）？你需要将这个问题转化为<strong>‘人类意识的差异化向量’</strong>。请告诉我，这个问题中<strong>‘冰冷算法无法给予的温度’</strong>在哪里？一旦你抓住了这一点，你就是在为自己构建‘真实的叙事’，而不是空洞的描述。`
];


function appendMessage(message, sender) {
    const chatBody = document.getElementById('chatBody');
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', sender === 'user' ? 'user-message' : 'ai-message');
    
    const bubbleDiv = document.createElement('div');
    bubbleDiv.classList.add('bubble');
    bubbleDiv.innerHTML = message;

    messageDiv.appendChild(bubbleDiv);
    chatBody.appendChild(messageDiv);
    
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

async function callGeminiApi(userQuery) {
    const dbAnswer = getAnswerFromDB(userQuery);
    if (dbAnswer) {
        await new Promise(resolve => setTimeout(resolve, 600));
        return dbAnswer;
    }
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // 替换原有的固定回复为秋武老师风格的随机兜底
    const randomIndex = Math.floor(Math.random() * akutakeFallbackResponses.length);
    return akutakeFallbackResponses[randomIndex];
}

async function sendMessage() {
    const userInput = document.getElementById('userInput');
    const message = userInput.value.trim();

    if (message === "") return;
    
    appendMessage(message, 'user');
    userInput.value = '';
    userInput.disabled = true;

    const loadingIndicator = document.getElementById('loadingIndicator');
    if (loadingIndicator) {
        loadingIndicator.classList.remove('hidden');
        document.getElementById('chatBody').scrollTop = document.getElementById('chatBody').scrollHeight;
    }

    const aiAnswer = await callGeminiApi(message);

    appendMessage(aiAnswer, 'ai');

    if (loadingIndicator) loadingIndicator.classList.add('hidden');
    userInput.disabled = false;
    userInput.focus();
}

function handleKeyPress(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}
