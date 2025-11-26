// script.js - 最终升级版 (超级增量Q&A：高情商/心理学/学际逻辑)

// ==========================================
// 第一部分：内容配置 (保持稳定，逻辑已植入 Q&A)
// ==========================================

const contentData = {
    // 优势：深度结合“林业工程->东大社会学”的跨界背景
    'strength': `
        <div class="detail-card">
            <h3><strong>认知破壁：</strong> 独家“东大修士”思维支点</h3>
            <ul>
                <li><strong>学際（Gakusai）背景：：</strong> 我拥有独特的学术轨迹：<strong>本科林业工程（理工）出身</strong>，通过<strong>理科笔试入口</strong>考入东大，在<strong>学際交叉研究室</strong>转向<strong>文科社会学研究</strong>。</li>
                <li><strong>跨域视野：：</strong> 这种**“身在理工环境，心修人文课题”**的经历（长期参与理工科前沿报告会），让我能用<strong>工程学的严密逻辑</strong>，为您重构<strong>文科叙事</strong>，制造绝无仅有的<strong>认知反差</strong>。</li>
                <li><strong>破绽利用：：</strong> 独创**“破绽利用法”**。利用您的背景劣势（如跨专业），打造教授眼中<strong>“无法拒绝的必然性动机”</strong>。</li>
            </ul>
        </div>
    `,
    // 模式：明确列出“一问一答”、“草稿编辑”等具体服务
    'model': `
        <div class="detail-card">
            <h3><strong>契约精神：</strong> 高效稀缺化辅导模式解析</h3>
            <ul>
                <li><strong>核心服务产品：：</strong> 我们不卖焦虑，只提供实战工具：<strong>①一问一答式教授答辩草稿编辑</strong>（核心）、<strong>②高强度模拟面试训练</strong>、<strong>③志望理由书/研究计划书的逻辑重构</strong>。</li>
                <li><strong>定制化口语：：</strong> 针对有需求的学生，提供<strong>针对性的日语口语训练</strong>，确保面试气场不掉链子。</li>
                <li><strong>【强推】免佣直通车：：</strong> 利用业界信用背书，直接送您进合作机构，<span style="color:#d9534f; font-weight:bold;">费用由机构承担</span>。这是最高效的三方共赢。</li>
            </ul>
        </div>
    `,
    // 案例：保持认知战的基调
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
// 第二部分：故事卡模式逻辑 (保持稳定)
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
            <p>运用<strong>“向量逻辑降维法”</strong>。您的计划书需要从“作文”升级为<strong>“逻辑闭环的最小可行性模型（MVP）”</strong>。抓住一个细小破绽，深度解剖，才能引发教授的<strong>钻研欲望</strong>。</p>
            <p><strong>【下一步】:</strong> 添加微信 <strong>qiuwu999</strong>，备注“逻辑诊断”，我帮您看一眼题目的可行性。</p>
        `,
        isResult: true
    },
    'result_interview': {
        title: '💡 诊断：您需要破解“空气文化”',
        result: `
            <p>这种恐惧是正常的。日本面试本质上是一场<strong>“社会化测试”</strong>。教授在测试您是否能读懂<strong>“空气”（Kuuki）</strong>，即非语言的沟通。</p>
            <p><strong>【破局心理学】:</strong></p>
            <p>我们将进行<strong>“防御性悲观”</strong>训练。我会教您如何听懂教授问题的“弦外之音”（比如他问您“在这个领域有无其他兴趣”，其实可能是在暗示您的题目太窄）。掌握了这些暗号，面试就是一场愉快的聊天。</p>
            <p><strong>【下一步】:</strong> 添加微信 <strong>qiuwu999</strong>，领取一份《日本教授面试潜台词对照表》。</p>
        `,
        isResult: true
    },
    'result_channel': {
        title: '💡 诊断：您需要建立“信任契约”',
        result: `
            <p>您的焦虑是<strong>“信息不对称”</strong>的必然结果。在日本社会，<strong>“信用”（Shinyo）</strong>是您唯一的安全资产，比金钱更昂贵。</p>
            <p><strong>【破局心理学】:</strong></p>
            <p>走<strong>“信用置换”</strong>路线。利用我作为东大修士的<strong>“背书资产”</strong>，直接开启<strong>【免佣直通车】</strong>。这不仅是省钱，更是将您置入一个<strong>“安全、高效的契约圈”</strong>（Uchi）。</p>
            <p><strong>【下一步】:</strong> 添加微信 <strong>qiuwu999</strong>，直接发送“直通车”，立即开启安全通道。</p>
        `,
        isResult: true
    }
};

// ==========================================
// 第三部分：问答数据库 (超级增量：覆盖刁难/高情商/学际)
// ==========================================

const qaDatabase = [
    // --- 类别 A：身份与价值锚定 ---
    {
        keywords: ['博士', '修士', '学历', '真的吗', '背景', '你是谁', '简历', '骗子', '靠谱吗', '秋武老师'],
        answer: "这是一个关于**信任**的核心问题。我必须诚实地澄清：我是**东大修士（学际信息/交叉研究室）毕业**，拥有10年一线辅导经验。 <br><br> 虽然我不是博士，但我拥有稀缺的**【理工科入口 + 文科研究】**的跨学科背景。在考学实战中，我提供的**“向量逻辑重构”**，能为您带来比单纯头衔更具杀伤力的**合格实绩**，这是我的价值保证。"
    },
    {
        keywords: ['费用', '钱', '收费', '价格', '贵吗', '多少钱', '免费模式', '溢价'],
        answer: "问得好，我的价格不是**溢价**，而是**稀缺价值的锁定**。  <br><br> 普通机构卖的是“流程”，而我卖的是**“学际逻辑重构”**。我的优势是**理工科入口**的经历，让我在处理文科课题时，能用**工程学思维**帮您搭建**“逻辑钢骨”**。您花的不是辅导费，是购买**“逻辑偏差修正”服务**。因为**“认知偏差”**在考研中浪费的时间，才是您最贵的隐形费用。"
    },
    
    // --- 类别 B：学际与跨专业逻辑 (重点针对“法学跨经济学”案例) ---
    {
        keywords: ['跨专业', '转专业', '法学', '经济学', '文科转理科', '理科转文科'],
        answer: "你的优势是**“语言资本”**和**“跨专业动机”**。但光有语言，没有**“逻辑骨架”**是危险的。我们会利用你的**原专业思维**（如法学的严密逻辑）来重构你的**新研究切入点**，让教授看到的是一个**“思维健全、动机明确”**的跨学科人才，而不是一个“基础薄弱的自学者”。关键不是基础，而是**如何转化你的专业思维**。"
    },
    {
        keywords: ['研究计划书', '计划书', '宏大', '读后感', '可行性', '施工图纸'],
        answer: "你的问题在于缺乏**工程学思维**。研究计划书不是读后感，它是一份**“施工图纸”**。我会教你用**最小可行性模型（MVP）**的方法，将宏大的题目**降维**。抓住一个**细小的、可测量、可验证**的“破绽”进行深度挖掘，这才是**东大学际研究室**所看重的“小而精”的逻辑闭环。"
    },
    
    // --- 类别 C：心态与失败重塑 (植入心理学和幽默感) ---
    {
        keywords: ['失败', '重试', '焦虑', '内耗', '完美主义', '不够好', '不自信'],
        answer: "**【心理学/EQ】** **“完美主义是高效能的大敌。”** 申请不是让你展示完美，而是展示**“不可替代性”**。你要将精力放在**“积累小实绩，不找借口”**。你的不完美，在我的辅导中，会被重构为**“强大的学习动机和解决问题的能力”**。与其内耗，不如将这种焦虑转化为**“前30秒非语言博弈”**的面试气场。"
    },
    {
        keywords: ['套磁失败', '教授不回', '邮件不回', '被拒绝'],
        answer: "在东大的学术标准里，没有‘失败品’，只有**‘没有找对肥料的果实’**。一次失败的套磁只证明了您**发送的时间或方式错了**，而不是您这个人错了。记住：**失败是肥料，但不能是借口**。我们会用《东大式·结构化套磁信模板》，通过心理暗示，激发教授的回复欲望。"
    },
    
    // --- 类别 D：宏观趋势与市场分析 (植入竞争和两极分化) ---
    {
        keywords: ['内卷', '太卷', '竞争', '趋势', 'March', '升学难', '留学值不值'],
        answer: "趋势是**两极分化**。如果你走**“信息差+逻辑重构”**的高维路线，竞争反而是好事，因为平庸的对手会被淘汰。但如果你走**“中介流水线”**的低效路线，难度会剧增。**竞争的本质不是比谁更努力，而是比谁的思维效率更高**。"
    },
    {
        keywords: ['留学大环境', '日本留学', '未来发展', '经济停滞'],
        answer: "最大的吸引力依然是**签证友好和费用低**，但大环境确实正在变化，竞争和不确定性都在增加。这要求你必须从**战略层面**思考，用**高维逻辑提前破局**。我个人经验：今后的合格难度系数会**进一步两极化**。你需要的不是通用信息，而是**精准预测**。"
    },

    // --- 类别 E：文化与具体策略 (植入口语/EJU) ---
    {
        keywords: ['流利口语', '日语流利', '面试自信', '文化差异', '读空气'],
        answer: "停止！这是一个**致命的文化误区**。如果您的日语很流利，您需要学会的不是**“表达流利度”**，而是**“读懂空气”（空気を読む）**。<br><br>日本人看重的自信，是**“理解潜台词”**。我的面试训练重点是：您如何在**30秒内**，用最少的词汇，传达出**最精准的逻辑闭环和对教授的尊重**。流利度在文化盲区面前，就是**“噪音”**。"
    },
    {
        keywords: ['EJU', '留考', '放弃', '准考证', '校内考'],
        answer: "在考学策略上，最大的认知偏差是**“放弃”**。即使您觉得没学好、没自信，也**绝对不能放弃 EJU 考试机会**。<br><br>**底层逻辑是：** 很多大学在申报时只需要**“受験票”**（准考证），并不需要具体成绩。放弃意味着您失去了**临场体验校内考核**的机会，尤其在软实力考核上，这种落差是无法弥补的。**小的实绩，包括临场经验，都是成功的肥料。**"
    },
    
    // --- 保持原有的核心 QA，确保覆盖全面 ---
    {
        keywords: ['优势', '特点', '区别', '辅导模式', '服务范围'],
        answer: "市面上的中介在帮您“填表格”，而我在教您**“读空气”（空気を読む）**。<br><br>我的核心优势源于我独特的学术轨迹：我是**理工科入口、东大修士**，用**工程学的严密逻辑**去降维重构您的课题，这是普通机构无法复制的稀缺能力。服务深度涵盖**“一问一答式”教授答辩草稿编辑**等核心工具。"
    },
    {
        keywords: ['志望理由书', '志愿理由书', '志望', '理由书', '本科', '学部'],
        answer: "<strong>【志望理由书】</strong>（学部本科/修士考研通用）的核心是**“内驱力”**。它不是研究计划的缩写，而是要回答：**“为什么是这所大学？为什么是这个专业？为什么是您？”** 我会利用您的背景（如学際交叉或特殊经历）制造**“稀缺性”**，帮您梳理出一条**“无法被替代”**的人生逻辑线。"
    },
    // （...其余原有基础QA已包含在新体系中或被更优的取代...）
];

// ==========================================
// 第四、五部分：核心交互/AI 逻辑 (P1人设兜底优化)
// ==========================================

// 统一的 CTA 引导
const finalCTA = "<br><br>AI 的分析已经触及极限，如果您需要的是<strong>人对人的诊断</strong>，请直接添加微信 <strong>qiuwu999</strong> 进行一对一沟通。";

// 🎯 人设边界兜底回复：(P1) - 应对非专业提问
const personalityFallbackResponses = [
    "有趣的问题。我的价值在于**“认知效率”**，我是**东大修士（学際研究出身）**，负责您的**逻辑重构**。请将精力集中在**如何破局**，我们聊正事。",
    "我是秋武，**理工科入口、东大修士（学際研究室）毕业**。我的核心价值是提供**文理融合**的跨学科视角和**东大基准**的逻辑重构。我的方法论才是重点。请直接告诉我您需要解决的**核心痛点**。",
    "感谢您的提问，但我的运算资源是为**高效解决留学难题**而准备的。如果您有任何关于**升学、逻辑重构或教授面试**的问题，请直接提出。时间宝贵，我们聚焦价值。"
];


// 🎯 战略逻辑兜底回复：(P3) - 应对战略迷茫
const strategicFallbackResponses = [
    `但我要问您：您真的想解决眼前的问题，还是只是想确认您的努力方向？**AI只能计算已知，但无法帮您设定‘战略偏差’。**您的困惑，需要的是**人对人的诊断**。我们直接聊聊您的目标向量，把力气花在刀刃上。` + finalCTA,
    `AI的回答再完美，也无法给您<strong>‘独一无二的“安全边界”’</strong>。因为留学是一个‘人对人的博弈’，涉及到**日本文化中的潜台词和情境**。这种**‘不可复制的温度’**，只有真人能提供。我们聊聊您最不确定的那个‘破绽’在哪里。` + finalCTA,
    `您正在浪费您最昂贵的成本：**时间——您浪费的每一年生命周期**。我的作用是为您**设计‘破绽利用法’**，让您立即跳过低效环节。直接加我微信，我们谈效率，不谈通用。` + finalCTA
];


// 💡 非专业关键词组
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
    // 优先级 1 (P1): 非专业/人设提问
    if (isNonProfessionalQuery(userQuery)) {
        await new Promise(resolve => setTimeout(resolve, 800)); 
        const randomIndex = Math.floor(Math.random() * personalityFallbackResponses.length);
        return personalityFallbackResponses[randomIndex] + finalCTA; 
    }
    
    // 优先级 2 (P2): 知识库/专业提问 (已大幅扩充和优化)
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

// ... (以下 UI/交互函数保持不变) ...

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
            // 使用 includes 进行宽松匹配，捕获意想不到的提问
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
