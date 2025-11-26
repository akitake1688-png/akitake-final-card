// script.js - 终极定稿 (极限优化与系统整合版)

// ==========================================
// 第一部分：内容配置 (左侧菜单内容 contentData 优化)
// ==========================================

const contentData = {
    // 强化“认知破壁”的稀缺性
    'strength': `
        <div class="detail-card">
            <h3><strong>认知破壁：</strong> 独家“东大修士”思维支点</h3>
            <ul>
                <li><strong>高维逻辑：：</strong> <strong>稀缺的理工思维 x 农学修士</strong>。用**“向量逻辑”**对您的文科叙事进行降维重构，提供**文理融合**的跨学科视角。</li>
                <li><strong>破绽利用：：</strong> 独创**“破绽利用法”**。将双非或跨专业劣势，转化为教授眼中**“无法拒绝的跨学科动机”**。您所有的“弱”点，都将成为独家叙事的**“破绽”**。</li>
                <li><strong>高情商解码：：</strong> 只有东大前辈才懂的**“情境潜规则”**。我教您识别教授邮件中的**“建前”（客套话）**与**“本音”（真心话）**。</li>
            </ul>
        </div>
    `,
    // 提炼“契约精神”的商业哲学感
    'model': `
        <div class="detail-card">
            <h3><strong>契约精神：</strong> 高效稀缺化辅导模式解析</h3>
            <ul>
                <li><strong>1:1 师徒制：：</strong> 拒绝流水线式申请。只建立**“认知契约”**，核心在于解决您底层**“思维偏差”**，而非信息不对称。</li>
                <li><strong>【强推】免佣直通车：：</strong> 这是最高效的**“信用置换”**。利用我在业界的**“信用背书”**，直接送您进合作机构，<span style="color:#d9534f; font-weight:bold;">费用由机构承担</span>。省时、省钱、安全，聚焦价值。</li>
                <li><strong>最终目标：：</strong> 我们的目标是帮助您在教授面前取得**“心理博弈的胜利”**，让您的努力充满**“余裕”（遊び）**。</li>
            </ul>
        </div>
    `,
    'cases': `
        <div class="detail-card">
            <h3><strong>底层逻辑：</strong> 跨越认知壁垒的实战案例</h3>
            <p style="margin-bottom: 15px;">留学申请的成功是<strong>一场认知战</strong>。建议您深度阅读我的专栏，获取<strong>不可复制</strong>的认知差和实战策略：</p>
            
            <a href="https://zhuanlan.zhihu.com/p/691198840?share_code=sxm903a247yL&utm_psn=1976199060072453115" target="_blank" class="link-btn">
                知乎：核心优势与背景解析 →
            </a>
            
            <a href="https://space.bilibili.com/323700487/lists" target="_blank" class="link-btn">
                Bilibili：辅导视频列表 →
            </a>
        </div>
    `
};

// ==========================================
// 第二部分：故事卡模式逻辑 (保持不变，已完美)
// ==========================================

const storyCardData = {
    'step1': {
        title: 'AI 升学破局测试：您是哪种“文化不适症”？',
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
            <p>运用**“向量逻辑降维法”**。您的计划书需要从“作文”升级为**“逻辑闭环的最小可行性模型（MVP）”**。抓住一个细小破绽，深度解剖，才能引发教授的**钻研欲望**。</p>
            <p><strong>【下一步】:</strong> 添加微信 <strong>qiuwu999</strong>，备注“逻辑诊断”，我帮您看一眼题目的可行性。</p>
        `,
        isResult: true
    },
    'result_interview': {
        title: '💡 诊断：您需要破解“空气文化”',
        result: `
            <p>这种恐惧是正常的。日本面试本质上是一场<strong>“社会化测试”</strong>。教授在测试您是否能读懂<strong>“空气”（Kuuki）</strong>，即非语言的沟通。</p>
            <p><strong>【破局心理学】:</strong></p>
            <p>我们将进行**“防御性悲观”**训练。我会教您如何听懂教授问题的“弦外之音”（比如他问您“在这个领域有无其他兴趣”，其实可能是在暗示您的题目太窄）。掌握了这些暗号，面试就是一场愉快的聊天。</p>
            <p><strong>【下一步】:</strong> 添加微信 <strong>qiuwu999</strong>，领取一份《日本教授面试潜台词对照表》。</p>
        `,
        isResult: true
    },
    'result_channel': {
        title: '💡 诊断：您需要建立“信任契约”',
        result: `
            <p>您的焦虑是<strong>“信息不对称”</strong>的必然结果。在日本社会，<strong>“信用”（Shinyo）</strong>是您唯一的安全资产，比金钱更昂贵。</p>
            <p><strong>【破局心理学】:</strong></p>
            <p>走**“信用置换”**路线。利用我作为东大修士的<strong>“背书资产”</strong>，直接开启**【免佣直通车】**。这不仅是省钱，更是将您置入一个**“安全、高效的契约圈”**（Uchi）。</p>
            <p><strong>【下一步】:</strong> 添加微信 <strong>qiuwu999</strong>，直接发送“直通车”，立即开启安全通道。</p>
        `,
        isResult: true
    }
};

// ==========================================
// 第三部分：问答数据库 (qaDatabase 极限整合与增强)
// ==========================================

const qaDatabase = [
    {
        keywords: ['费用', '钱', '收费', '价格', '贵吗', '多少钱', '免费模式'],
        answer: "留学不仅谈<strong>“价格”</strong>，更谈<strong>“价值交换”</strong>。我的服务模式基于日本社会的<strong>“信用背书”</strong>逻辑：<br>1. <strong>【强推免费模式】：</strong> 这是商业逻辑最透明的高效模式。通过我推荐进入合作机构，**机构支付的介绍费即全额覆盖我的辅导费**。您零额外支出享受高端一对一。<br>2. <strong>【稀缺价值】：</strong> 如果您需要打破**“学历壁垒”**的深度定制，我提供的是不可复制的<strong>认知重构</strong>服务。<br><br>请直接联系微信 <strong>qiuwu999</strong>。我们不进行低效的价格博弈，只做价值对等的契约。"
    },
    {
        keywords: ['优势', '特点', '区别', '为什么选你', '靠谱吗'],
        answer: "市面上的中介在帮您“填表格”，而我在教您**“读空气”（空気を読む）**。<br><br>我的核心优势在于：<br>1. <strong>【东大基准逻辑】：</strong> 我是**东大修士毕业**，提供**“文理融合”**的跨学科视角和**“东大基准”的逻辑重构**。<br>2. <strong>【破绽利用】：</strong> 利用心理学中的**“必须性逻辑”**，将您的劣势转化为教授眼中“独特的跨学科视角”。<br>这不仅是申请，更是一场心理战。"
    },
    {
        keywords: ['套磁', '联系教授', '邮件', '不回信'],
        answer: "套磁的本质，不是“推销自己”，而是**“确认归属感”**。日本教授极度看重**“礼节”（Reigi）**与**“边界感”**。<br><br>如果您发了邮件没回音，通常不是因为您不够优秀，而是触犯了文化禁忌：<br>1. <strong>缺乏“谦逊的自信”：</strong> 过于自夸会引发反感，过于卑微又会被无视。<br>2. <strong>没踩准“时间窗口”：</strong> 日本学术界有特定的繁忙期。<br><br>我有一套经过验证的**《东大式·结构化套磁信模板》**，专门通过心理暗示激发教授的回复欲望。需要的话，请在左侧进行测试或联系微信。"
    },
    {
        keywords: ['计划书', '研究计划', '题目', '怎么写', '退回', '修改'],
        answer: "研究计划书（RP）在教授眼中，其实是一份**“逻辑投名状”**。<br><br>中国学生常犯的错误是“大而全”，而日本教授偏爱**“小而精”且“逻辑闭环”**的东西。这涉及到日本人的**“职人精神”**心理。<br>记住：**文科也必须用理工科的逻辑进行重构**。如果逻辑混乱，即使是小问题也会成为致命伤。我会教您如何用理工科的严密逻辑，去拆解文科的感性话题，制造**“反差感”**。"
    },
    {
        keywords: ['面试', '口语', '紧张', '刁难'],
        answer: "日本面试的底层逻辑是**“减分制”**与**“压力测试”**。教授不仅在听内容，更在观察您的**“非语言信号”**。<br><br>甚至在您进门敲门的那三秒，胜负可能已经定了。这涉及到日本文化中的**“仪容规范”（身だしなみ）**。<br>我首创的**【前30秒非语言博弈训练】**，通过调整您的眼神落点、坐姿重心和声音频率，让您在气场上表现出一种“虽然我是学生，但我已经准备好成为研究者”的稳重感。"
    },
    {
        keywords: ['双非', '出身', '学历', '二本', '三本', '弥补', '失败', '借口'],
        answer: "在日本，**“出身校”**确实是一个门槛，但绝不是死局。要打破这个防御，需要您积累**“一个一个小的实绩”**。<br><br>**【失败与成长论】：** 小的失败是必然的，但**不允许重复同样的错误**。成功的底层逻辑是**积累实绩，不找借口、不抱怨**。当您的学术逻辑远超您的学历背景时，这种冲击力比名校生的平庸表现更具吸引力。"
    },
    
    // 深度QA 1 - 留学心态与“余裕” (增强节奏感)
    {
        keywords: ['心态', '焦虑', '压力', '玩乐', '节奏感'],
        answer: "您的问题已超越具体技术层面，直指留学的**‘哲学内核’**。我们追求的不是卷入焦虑，而是拥有**‘余裕’（遊び）**。这在日语中意指一种**从容的、掌控全局的心态**。<br><br>正如职业选手与业余选手的区别：职业者是在自己的**‘节奏感’**中享受比赛。我的辅导核心是帮您建立这种**战略上的‘余裕’**：用高维逻辑提前破局，让您在看似紧张的流程中，拥有**绝对的掌控感**。"
    },

    // 深度QA 2 - 复杂跨专业直考分析 (保持)
    {
        keywords: ['跨专业', '转专业', '法学', '经济学', '直考', '成功率'],
        answer: "对于复杂的**跨专业直考**案例，**‘几率’**这个词本身是低效的。我们需要的是**‘必要性逻辑’**。<br><br>例如，曾有同学从**法学跨考经济学修士**，他的成功点是**提前两年自学了日本大学的经济课程**，并在计划书中展现了**超越专业的逻辑闭环**。<br><br>我能帮您设计的，就是这种**‘无法拒绝的自证链’**，消除教授对于您**‘知识断层’**的担忧。"
    },

    // 新增：深度QA 3 - EJU/校内考策略（植入最新战略机会成本论）
    {
        keywords: ['EJU', '留考', '校内考', '考试机会', '没自信', '放弃', '准考证'],
        answer: "在考学策略上，最大的认知偏差是**“放弃”**。即使您觉得没学好、没自信，也**绝对不能放弃 EJU 考试机会**。<br><br>**底层逻辑是：** 很多大学在申报时只需要**“受験票”**（准考证），并不需要具体成绩。放弃意味着您失去了**临场体验校内考核**的机会，尤其在软实力考核（口头试问/面试沟通）上，这种落差是无法弥补的。**小的实绩，包括临场经验，都是成功的肥料。**"
    }
];

// ==========================================
// 第四、五部分：核心交互/AI 逻辑 (最终兜底逻辑重构)
// ==========================================

// 统一的 CTA 引导
const finalCTA = "<br><br>AI 的分析已经触及极限，如果您需要的是<strong>人对人的诊断</strong>，请直接添加微信 <strong>qiuwu999</strong> 进行一对一沟通。";

// 🎯 人设边界兜底回复：用于应对“秋武老师好吃吗？”等非专业、开玩笑式提问。 (P1)
const personalityFallbackResponses = [
    // 应对：“好吃吗？”/“测试你”
    "有趣的问题。我的价值不在于**“口味”或“娱乐”**，而在于**“认知效率”**。我是**东大修士**，负责您的**逻辑重构**，请将精力集中在**如何破局**。我们聊正事。",
    // 应对：“你是谁？”/“叫什么？”
    "我是秋武，**东大修士毕业**，核心价值是提供**文理融合**的跨学科视角和**东大基准**的逻辑重构。我的身份是背景，我的方法论才是重点。请直接告诉我您需要解决的**核心痛点**。",
    // 应对所有不相关/寒暄问题
    "感谢您的提问，但我的运算资源是为**高效解决留学难题**而准备的。如果您有任何关于**升学、逻辑重构或文化潜规则**的问题，请直接提出。时间宝贵，我们聚焦价值。"
];


// 🎯 战略逻辑兜底回复：用于应对客户的真实战略迷茫 (P3 - 精炼后无通用措辞)
const strategicFallbackResponses = [
    // 【模板 1：战略与目标】 
    `但我要问您：您真的想解决眼前的问题，还是只是想确认您的努力方向？**AI只能计算已知，但无法帮您设定‘战略偏差’。**您的困惑，需要的是**人对人的诊断**。我们直接聊聊您的目标向量，把力气花在刀刃上。` + finalCTA,
    
    // 【模板 2：情绪与稀缺性】 
    `AI的回答再完美，也无法给您**‘独一无二的“安全边界”’**。因为留学是一个‘人对人的博弈’，涉及到**日本文化中的潜台词和情境**。这种**‘不可复制的温度’**，只有真人能提供。我们聊聊您最不确定的那个‘破绽’在哪里。` + finalCTA,
    
    // 【模板 3：成本与效率】 
    `您正在浪费您最昂贵的成本：**时间——您浪费的每一年生命周期**。我的作用是为您**设计‘破绽利用法’**，让您立即跳过低效环节。直接加我微信，我们谈效率，不谈通用。` + finalCTA
];


// 💡 新增关键词组，用于识别非专业、低意图提问
const nonProfessionalKeywords = ['好吃', '喝', '几岁', '是男是女', '你好', '再见', '测试', '开玩笑', '喜欢', '爱', '颜色', '叫什么', '你叫什么'];

function isNonProfessionalQuery(query) {
    const lowerQuery = query.toLowerCase().trim();
    for (const keyword of nonProfessionalKeywords) {
        if (lowerQuery.includes(keyword)) {
            return true;
        }
    }
    return false;
}

async function callGeminiApi(userQuery) {
    // 优先级 1 (P1): 非专业/人设提问（最高优先级，彻底解决“好吃吗？”问题）
    if (isNonProfessionalQuery(userQuery)) {
        await new Promise(resolve => setTimeout(resolve, 800)); 
        const randomIndex = Math.floor(Math.random() * personalityFallbackResponses.length);
        return personalityFallbackResponses[randomIndex] + finalCTA; 
    }
    
    // 优先级 2 (P2): 知识库/专业提问
    const dbAnswer = getAnswerFromDB(userQuery);
    if (dbAnswer) {
        await new Promise(resolve => setTimeout(resolve, 600));
        return dbAnswer;
    }
    
    // 优先级 3 (P3): 战略兜底/未能匹配的专业提问
    await new Promise(resolve => setTimeout(resolve, 1000));
    const randomIndex = Math.floor(Math.random() * strategicFallbackResponses.length);
    return strategicFallbackResponses[randomIndex];
}

// ... (以下函数与交互逻辑保持不变，确保功能稳定) ...

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
