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
            <li><strong>收费标准：</strong> 根据项目（单项/全套）有不同价位。<strong>细节请加微信（qiuwu999）沟通，获取报价。</strong></li>
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
    'DEFAULT': '我没有完全理解您的问题。请问您是想了解：<br>1. <strong>服务模式与收费？</strong><br>2. <strong>跨文化心理学洞察？</strong><br>3. <strong>我的背景和优势？</strong><br>（请尝试使用更清晰的关键词，如“费用”、“东大”、“焦虑”等）',
};

// 预设提示标签
const suggestedPrompts = [
    "日本大学院的终局思维是什么？",
    "如何用最低成本准备留学？",
    "教授最看重文书的哪一部分？",
    "直考修士的几率评估。",
    "秋武老师的背景和优势。",
];


// ====================================
// UI/UX 逻辑层 (User Interface Logic)
// ====================================

/**
 * 在聊天区添加消息
 * @param {string} text 消息文本 (支持 HTML)
 * @param {string} sender 发送者类型 ('user' 或 'ai')
 */
function addMessage(text, sender) {
    const chatBody = document.getElementById('chat-body');
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}-message`;
    
    const bubbleDiv = document.createElement('div');
    bubbleDiv.className = 'bubble';
    bubbleDiv.innerHTML = text; // 使用 innerHTML 渲染 HTML 标签
    
    messageDiv.appendChild(bubbleDiv);
    chatBody.appendChild(messageDiv);
    
    // 滚动到底部
    chatBody.scrollTop = chatBody.scrollHeight;
}

/**
 * 激活聊天区并隐藏内容区
 * @param {Event} event (可选)
 */
function showChatSection(event) {
    if (event) event.preventDefault();
    document.getElementById('chat-section').classList.remove('hidden');
    document.getElementById('content-section').classList.add('hidden');
    document.getElementById('game-simulation-section').classList.add('hidden');
    
    // 确保主容器滚动到聊天区底部
    const mainContainer = document.querySelector('.right-panel');
    mainContainer.scrollTop = mainContainer.scrollHeight;
    
    // 初始化问候语
    if (document.getElementById('chat-body').children.length === 0) {
        addMessage(keywordResponses['你好'], 'ai');
        generatePrompts();
    }
}

/**
 * 切换到内容显示区
 * @param {Event} event 
 * @param {string} contentKey 对应 contentMap 的键
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
 * @param {Event} event 
 */
function showGameSimulation(event) {
    if (event) event.preventDefault();
    document.getElementById('chat-section').classList.add('hidden');
    document.getElementById('content-section').classList.add('hidden');
    
    const gameSection = document.getElementById('game-simulation-section');
    gameSection.innerHTML = contentMap['game-simulation']; // 使用预设的内容
    gameSection.classList.remove('hidden');
}

/**
 * 生成咨询提示标签
 */
function generatePrompts() {
    const promptsDiv = document.getElementById('chat-prompts');
    promptsDiv.innerHTML = '';
    suggestedPrompts.forEach(prompt => {
        const tag = document.createElement('span');
        tag.className = 'prompt-tag';
        tag.textContent = prompt;
        tag.onclick = () => {
            document.getElementById('user-input').value = prompt;
            sendMessage();
        };
        promptsDiv.appendChild(tag);
    });
}


// ====================================
// 核心逻辑层 (Core Processing Logic)
// ====================================

/**
 * 处理用户输入并发送消息
 */
function sendMessage() {
    const inputElement = document.getElementById('user-input');
    const userText = inputElement.value.trim();

    if (userText === '') return;

    // 1. 显示用户消息
    addMessage(userText, 'user');
    inputElement.value = '';

    // 2. 显示加载指示器
    const loadingIndicator = document.getElementById('loading-indicator');
    loadingIndicator.classList.remove('hidden');

    // 3. 异步获取 AI 回复
    setTimeout(() => {
        const aiResponse = getAIResponse(userText);
        
        // 4. 隐藏加载指示器
        loadingIndicator.classList.add('hidden');

        // 5. 显示 AI 消息
        addMessage(aiResponse, 'ai');
    }, 800); // 模拟网络延迟
}


/**
 * 根据用户输入生成 AI 回复 (核心匹配逻辑)
 * @param {string} input 用户的输入文本
 * @returns {string} AI 的回复文本 (支持 HTML)
 */
function getAIResponse(input) {
    const normalizedInput = input.toLowerCase().replace(/\s/g, ''); // 标准化处理

    // 优先级 1: 模糊匹配 (使用更专业的措辞)
    for (const key in keywordResponses) {
        if (key !== 'DEFAULT' && normalizedInput.includes(key.toLowerCase().replace(/\|/g, '').replace(/\s/g, ''))) {
            return keywordResponses[key];
        }
    }

    // 优先级 2: 深入问答模拟 (匹配更复杂的意图)
    if (normalizedInput.includes('研究课题|研究方向|研究主题')) {
        return handleResearchTopicQuery(normalizedInput);
    }

    if (normalizedInput.includes('sns|社媒|小红书|知乎|文案|评论')) {
        return generateSNSComment(normalizedInput);
    }
    
    if (normalizedInput.includes('教授|面试|口头试问')) {
        return generatePsychologicalInsight(normalizedInput);
    }

    // 优先级 3: 默认回复
    return keywordResponses['DEFAULT'];
}

// 复杂逻辑函数 1：处理研究课题
function handleResearchTopicQuery(input) {
    if (input.includes('可持续性|延续性')) {
        return '这是一个<strong>东大基准</strong>的问题，非常专业！研究课题的“可持续性”是指您的研究是否能为教授的项目带来**长期价值和延续的潜力**。请问您目前最感兴趣的**【跨学科领域】**是什么？';
    }
    return '研究课题的选择是<strong>终局思维</strong>的第一步。请告诉我您的**【本科专业】**和**【感兴趣的方向】**，我将为您分析如何进行“文理融合”式的逻辑重构。';
}

// 复杂逻辑函数 2：生成 SNS 评论
function generateSNSComment(input) {
    const keyword = input.includes('压力') ? '压力' : '留学规划';
    return `<div class="sns-comment-bubble">
        <strong>【AI生成的专业SNS评论】</strong><br><br>
        “秋武老师的分析直击内核，完全是<span class="akiwu-highlight"><strong>东大基准的「逻辑重构」</strong></span>！他强调的不是盲目内卷，而是如何用<span class="akiwu-highlight"><strong>「终局思维」倒推规划</strong></span>，最大化投入产出比。特别是关于日本教授<span class="akiwu-highlight"><strong>“本音”与“建前”</strong></span>的洞察，避免了多少弯路！强推想走高阶路线的同学来深度咨询！#日本留学 #修士申请 #东大基准”
    </div>
    <br>
    <p>💡 您可以直接复制这段评论用于您的社交媒体。如果您需要关于**【${keyword}】**主题的评论，请重新提问。</p>`;
}

// 复杂逻辑函数 3：生成心理学洞察
function generatePsychologicalInsight(input) {
    if (input.includes('教授答辩|问答技巧')) {
        return '教授答辩的核心秘诀在于<strong>「人品与可靠性」</strong>的展示。技术问题可以现场学习，但**研究的真诚度**和**对失败的态度**才是关键。请问您是否想了解如何应对教授的**“尖锐但隐含善意”**的问题？';
    }
    return '在与教授交流时，请务必区分<strong>“本音”（真实想法）</strong>和<strong>“建前”（表面说辞）</strong>。教授在考察您是否具有**研究的长期潜力和忠诚度**。想知道如何用中肯、专业的方式表达您的“本音”吗？';
}


// ====================================
// 页面初始化 (Initialization)
// ====================================
document.addEventListener('DOMContentLoaded', () => {
    // 页面加载完成后默认显示聊天区
    showChatSection(); 
});
