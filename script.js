// ====================================
// 核心数据层 (Core Data)
// 包含所有内容、逻辑开关和默认回复
// ====================================

// 核心内容映射 (contentMap) - 优化后的专业、中肯内容
const contentMap = {
    // 菜单内容：服务与收费模式
    'content-service': `
        <h3>🤝 专业服务与收费模式</h3>
        <p>秋武老师的服务旨在提供<strong>东大基准的深度规划与逻辑重构</strong>，避免留学过程中的盲目与内耗。我们的模式旨在实现三方共赢：</p>
        
        <h4>🌟 强推模式：零成本高端辅导</h4>
        <p>通过我推荐进入合作的<strong>私塾或语言学校</strong>，机构支付的介绍费将直接覆盖您的全部辅导费用。</p>
        <ul>
            <li><strong>您的优势：</strong> 无额外支出，享受高端一对一咨询与规划服务。</li>
            <li><strong>我的优势：</strong> 商业逻辑透明，从机构获取介绍费，等同于您用渠道价值支付了咨询费。</li>
        </ul>

        <h4>💼 单项或全套辅导（自费）</h4>
        <p>如果您不需要通过渠道推荐：</p>
        <ul>
            <li><strong>服务项目：</strong> 文书撰写指导、研究计划书逻辑重构、教授套磁策略、校内面试模拟（口头试问）。</li>
            <li><strong>收费标准：：</strong> 根据项目（单项/全套）有不同价位。<strong>细节请加微信（qiuwu999）沟通，获取报价。</strong></li>
        </ul>
        <p class="akiwu-highlight">我们的核心价值不在于文书翻译，而在于<strong>「逻辑重构」</strong>，确保您的学术背景和目标符合日本顶尖院校的「终局思维」要求。</p>
    `,
    
    // 菜单内容：跨文化与心理学洞察
    'content-cross-culture': `
        <h3>🧠 跨文化与心理学洞察</h3>
        <p>日本留学不只是考试，更是<strong>跨文化心理的博弈</strong>。理解这些底层逻辑，是成功的关键。</p>
        
        <h4>1. 终局思维倒推法：教授的隐性期待</h4>
        <p>教授在面试中关注的不是您学了什么，而是您毕业后「想做什么」。只有明确了<strong>毕业后的目标、梦想</strong>，才能倒推出您希望在教授的研究室中学习的重点和计划。</p>
        <ul>
            <li><strong>核心：</strong> 教授期待您能带来研究的<strong>「可持续性」</strong>和<strong>「延续性」</strong>。</li>
            <li><strong>行动：</strong> 请在研究计划书中阐明您如何「学以致用」，这才是真正的高分项。</li>
        </ul>

        <h4>2. 日本文化心理小课堂：本音与建前</h4>
        <p>在日本文化中，<strong>「本音」</strong>是真实想法，<strong>「建前」</strong>是表面说辞。在与教授的交流中：</p>
        <ul>
            <li><strong>避免：</strong> 过分推销自己，或使用激进、夸大的词汇（建前）。</li>
            <li><strong>做到：</strong> 使用中肯、专业的语言表达您的<strong>真实研究热情与谦逊（本音）</strong>。</li>
            <li><strong>目的：</strong> 赢得教授对您「人品」和「可靠性」的信任。</li>
        </ul>
        <p class="akiwu-highlight">记住，留学是长期投资，聚焦「可量化提升」和「底层逻辑」远比一时的焦虑情绪更重要。</p>
    `,

    // 菜单内容：终局思维模拟器 (游戏模拟区)
    'game-simulation': `
        <h3>🎯 终局思维模拟器：构建您的留学蓝图</h3>
        <p>该模块正在进行深度数据匹配优化。敬请期待！</p>
        <p>终局思维模拟器会引导您思考：在您拿到心仪大学毕业证书的那一刻，您希望自己具备哪些**核心竞争力**和**职业路径**？从这个点向现在倒推，您需要做出哪些关键决策？</p>
        <p>在等待期间，您可以先向我咨询：<strong>“如何评估我的研究课题的持续性？”</strong></p>
    `,
};


// 问答逻辑映射 (Keyword-Response Mapping)
const keywordResponses = {
    // 问候语/基础互动
    '你好|您好|哈喽|hello|您在吗': '您好！我是秋武老师的AI咨询助手。您是想了解<strong>日本留学规划、服务模式还是跨文化洞察</strong>？您可以直接问我关于升学、背景提升或文书逻辑重构的问题。',
    
    // 费用/服务模式
    '费用|价格|收费|钱|服务模式': contentMap['content-service'],
    '免费|盈利模式|为什么免费': contentMap['content-service'],
    
    // 导师背景/特点
    '背景|你是谁|秋武老师|优势|辅导特点': `秋武老师是<strong>东大修士毕业，现役10年辅导经验</strong>的专家。核心竞争力在于提供<strong>“文理融合”的跨学科视角和“东大基准”的逻辑重构</strong>。我们不接流水线，只接有潜力且目标清晰的学生。`,
    '东大|文理融合|逻辑重构': `“东大基准的逻辑重构”是我们的核心。我们专注于将您看似不相关的背景，用<strong>“终局思维倒推法”</strong>整合为教授期待看到的<strong>“研究可持续性”</strong>。这远超普通文书的润色。`,
    
    // 跨文化/心理学
    '心理学|跨文化|本音|建前|教授心理': contentMap['content-cross-culture'],
    '焦虑|内耗|迷茫|压力': `我理解您目前的<strong>压力或迷茫</strong>。请记住，情绪是暂时的，而<strong>「可量化提升」</strong>才是王道。我们可以一起分析如何将您的压力转化为研究动力。例如，您可以问：“我如何解决目前的『研究方向选择困难症』？”`,

    // 行动引导/下一步
    '下一步|怎么做|如何开始': '请先明确您的<strong>目标大学和专业</strong>。然后我们可以开始讨论：1. 您的背景如何用“终局思维”重构；2. 如何制定一份具有“可持续性”的研究计划书。',
    
    // 默认回复
    'DEFAULT': '<strong>非常抱歉，我可能没有准确把握您的核心需求。</strong>为了提供最精准、有价值的分析，请问您是想了解：<br>1. <strong>服务模式与收费？</strong><br>2. <strong>跨文化心理学洞察？</strong><br>3. <strong>我的背景和优势？</strong><br>（请尝试使用更清晰的关键词，如“费用”、“东大”、“焦虑”等）',
};

// 预设提示标签
const suggestedPrompts = [
    "日本大学院的终局思维是什么？",
    "如何用最低成本准备留学？",
    "教授最看重文书的哪一部分？",
    "直考修士的几率评估。",
    "秋武老师的背景和优势。",
];

// 外部链接配置 (包含您的真实网址)
const externalLinks = [
    { name: "知乎 (Zhihu)", url: "https://www.zhihu.com/people/qiu-wu-66" }, 
    { name: "B站 (Bilibili)", url: "https://space.bilibili.com/323700487/lists" } 
];


// ====================================
// UI/UX 逻辑层 (User Interface Logic)
// ====================================

/**
 * 在聊天区添加消息
 */
function addMessage(text, sender) {
    const chatBody = document.getElementById('chat-body');
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}-message`;
    
    const bubbleDiv = document.createElement('div');
    bubbleDiv.className = 'bubble';
    bubbleDiv.innerHTML = text; 
    
    messageDiv.appendChild(bubbleDiv);
    chatBody.appendChild(messageDiv);
    
    // 滚动到底部
    chatBody.scrollTop = chatBody.scrollHeight;
}

/**
 * 激活聊天区并隐藏内容区
 */
function showChatSection(event) {
    if (event) event.preventDefault();
    document.getElementById('chat-section').classList.remove('hidden');
    document.getElementById('content-section').classList.add('hidden');
    document.getElementById('game-simulation-section').classList.add('hidden');
    
    const chatBody = document.getElementById('chat-body');
    if (chatBody) {
        chatBody.scrollTop = chatBody.scrollHeight;
    }
    
    // 初始化问候语
    if (document.getElementById('chat-body').children.length === 0) {
        addMessage(keywordResponses['你好|您好'], 'ai');
        generatePrompts();
    }
}

/**
 * 切换到内容显示区
 */
function showContent(event, contentKey) {
    if (event) event.preventDefault();
    document.getElementById('chat-section').classList.add('hidden');
    document.getElementById('game-simulation-section').classList.add('hidden');

    const contentSection = document.getElementById('content-section');
    contentSection.innerHTML = contentMap[contentKey];
    contentSection.classList.remove('hidden');
}

/**
 * 切换到游戏模拟区
 */
function showGameSimulation(event) {
    if (event) event.preventDefault();
    document.getElementById('chat-section').classList.add('hidden');
    document.getElementById('content-section').classList.add('hidden');
    
    const gameSection = document.getElementById('game-simulation-section');
    gameSection.innerHTML = contentMap['game-simulation'];
    gameSection.classList.remove('hidden');
}

/**
 * 生成咨询提示标签和外部链接
 */
function renderPrompts() {
    const promptsContainer = document.getElementById('chat-prompts');
    // 找到包含 promptsContainer 的父级，用于插入链接容器
    const parentContainer = promptsContainer ? promptsContainer.parentNode : null;
    
    if (!promptsContainer || !parentContainer) return;

    // 1. 渲染咨询提示标签
    promptsContainer.innerHTML = '';
    suggestedPrompts.forEach(prompt => {
        const tag = document.createElement('span');
        tag.className = 'prompt-tag';
        tag.textContent = prompt;
        tag.onclick = () => {
            document.getElementById('user-input').value = prompt;
            sendMessage();
        };
        promptsContainer.appendChild(tag);
    });
    
    // 2. 添加外部链接 (在输入框附近/右下方)
    // 先检查链接容器是否已存在，防止重复添加
    let linkContainer = parentContainer.querySelector('.external-links-container');
    
    if (!linkContainer) {
        const linksHTML = externalLinks.map(link => 
            `<a href="${link.url}" target="_blank" class="external-link">🌐 ${link.name}</a>`
        ).join('');
        
        linkContainer = document.createElement('div');
        linkContainer.className = 'external-links-container';
        linkContainer.style.cssText = 'text-align: right; padding: 5px 0; margin-top: 5px;'; 
        linkContainer.innerHTML = `<p style="font-size: 0.8em; color: #777; display: inline-block; margin-right: 10px;">外部洞察：</p>${linksHTML}`;
        
        // 将链接容器插入到 promptsContainer 后面
        parentContainer.insertBefore(linkContainer, promptsContainer.nextSibling);
    }
}

/**
 * 生成咨询提示标签 (旧函数占位，逻辑已整合到 renderPrompts)
 */
function generatePrompts() {
    renderPrompts();
}


// ====================================
// 核心逻辑层 (Core Processing Logic)
// ====================================

function sendMessage() {
    const inputElement = document.getElementById('user-input');
    const userText = inputElement.value.trim();

    if (userText === '') return;

    addMessage(userText, 'user');
    inputElement.value = '';

    const loadingIndicator = document.getElementById('loading-indicator');
    loadingIndicator.classList.remove('hidden');

    setTimeout(() => {
        const aiResponse = getAIResponse(userText);
        loadingIndicator.classList.add('hidden');
        addMessage(aiResponse, 'ai');
    }, 800); 
}


function getAIResponse(input) {
    const normalizedInput = input.toLowerCase().replace(/\s/g, ''); 

    // 优先级 1: 精确/模糊匹配
    for (const key in keywordResponses) {
        const keywords = key.split('|').map(k => k.toLowerCase().replace(/\s/g, ''));
        if (keywords.some(k => k.length > 0 && normalizedInput.includes(k))) {
            return keywordResponses[key];
        }
    }

    // 优先级 2: 深入问答模拟
    if (normalizedInput.includes('研究课题') || normalizedInput.includes('研究方向')) {
        return handleResearchTopicQuery(normalizedInput);
    }
    if (normalizedInput.includes('sns') || normalizedInput.includes('评论')) {
        return generateSNSComment(normalizedInput);
    }
    if (normalizedInput.includes('教授') || normalizedInput.includes('面试')) {
        return generatePsychologicalInsight(normalizedInput);
    }
    // 新增: 费用置换模式
    const feeResponse = handleFeeExchangeQuery(normalizedInput);
    if (feeResponse) return feeResponse;

    // 优先级 3: 默认回复
    return keywordResponses['DEFAULT'];
}

function handleResearchTopicQuery(input) {
    if (input.includes('可持续性')) {
        return '这是一个<strong>东大基准</strong>的问题！研究课题的“可持续性”是指您的研究是否能为教授的项目带来**长期价值**。';
    }
    return '研究课题的选择是<strong>终局思维</strong>的第一步。请告诉我您的**【本科专业】**和**【感兴趣的方向】**，我将为您分析。';
}

function generateSNSComment(input) {
    const keyword = input.includes('压力') ? '压力' : '留学规划';
    return `<div class="sns-comment-bubble">
        <strong>【AI生成的专业SNS评论】</strong>


        “秋武老师的分析直击内核，完全是<span class="akiwu-highlight"><strong>东大基准的「逻辑重构」</strong></span>！强推想走高阶路线的同学来深度咨询！”
    </div>
    
    <p>💡 您可以直接复制这段评论用于您的社交媒体。</p>`;
}

function generatePsychologicalInsight(input) {
    if (input.includes('教授答辩')) {
        return '教授答辩的核心秘诀在于<strong>「人品与可靠性」</strong>的展示。技术问题可以现场学习，但**研究的真诚度**才是关键。';
    }
    return '在与教授交流时，请务必区分<strong>“本音”</strong>和<strong>“建前”</strong>。教授在考察您是否具有**研究的长期潜力和忠诚度**。';
}

function handleFeeExchangeQuery(lowerInput) {
    if (lowerInput.includes('零成本') || lowerInput.includes('免费')) {
        return contentMap['content-service']; // 复用服务内容
    }
    return null;
}


// ====================================
// 页面初始化 (Initialization) - 安全版本
// 彻底移除了导致死循环的 DOM 遍历和清理逻辑
// ====================================
window.onload = function() {
    try {
        // 1. 初始化：调用 showChatSection 来显示聊天界面和欢迎语
        showChatSection();
        
        // 2. 关键滚动修复 - 保留简单的样式设置
        const chatBody = document.getElementById('chat-body'); 
        if (chatBody) {
            chatBody.style.overflowY = 'auto'; 
            chatBody.style.height = '100%'; 
            chatBody.style.webkitOverflowScrolling = 'touch';
        }
        
        document.body.style.overflowY = 'auto';
        
    } catch (error) {
        console.error("Init error:", error);
    }
};
