// ===============================================
// 1. 全局状态与配置 (Global State & Configuration)
// ===============================================

// 静态内容数据：深度融合“秋武特色”和数据分析结果
const contentMap = {
    strength: {
        title: "🔥 核心优势：构建『认知差』破局系统",
        content: `
            <div class="detail-card">
                <h3>🔍 认知差与升维打击 (基于东大基准)</h3>
                <p>我们提供的不是普通信息差，而是**认知差**。核心是将研究课题视为心理博弈工具，运用**东大修士的逻辑重构**：融合文科的叙事穿透力与理科的严谨结构。目标：让教授在众多申请者中，清晰辨识出您是具备「高潜力」的**潜在协作者**。</p>
            </div>
            <div class="detail-card">
                <h3>🛡️ 教授心理学博弈 (本音 vs. 建前)</h3>
                <p>辅导深入到教授的**『本音（Hon-ne）』**——他们真正在乎的「行动力」和「学术敏感度」。我们教您在文书中提前消除教授的隐性担忧，并在面试中精准应对**「读空气（Kuuki o Yomu）」**的压力测试。</p>
            </div>
        `
    },
    model: {
        title: "💎 辅导模式：透明、中肯、定制化服务",
        content: `
            <div class="detail-card">
                <h3>模式一：个人精细化定制</h3>
                <p>彻底区别于大机构的流水线作业。服务内容涵盖：研究方向的**文理融合**定位、研究计划书的逻辑重构、以及高压模拟面试的文化心理学演练。我们只接能通过**『破局系统』**实现跃迁的学生。</p>
            </div>
            <div class="detail-card">
                <h3>模式二：免费模式（商业闭环）</h3>
                <p><strong>商业逻辑透明：</strong> 通过我推荐进入合作私塾或语校，机构支付的介绍费即覆盖您的全部辅导费。您无额外支出，享受高端一对一咨询服务。这是一种**三方共赢**的价值模式。</p>
                <p><strong>联系方式：</strong> 细节和定制方案请加微信 <strong>qiuwu999</strong> 沟通。</p>
            </div>
        `
    },
    cases: {
        title: "📚 成功案例与系统性思考：熵增与行动",
        content: `
            <div class="detail-card">
                <h3>📈 双非逆袭与跨专业策略 (底层逻辑)</h3>
                <p>成功案例的核心逻辑非常单纯：用高分语言成绩（托福/N1）+**东大基准的研究计划**，来覆盖GPA和出身校的劣势。我们擅长处理高难度挑战，如「法学背景转经济修士」。**关键：** 寻找原专业与新专业的「结合点」，而非「裸转」。</p>
            </div>
            <div class="detail-card">
                <h3>⏳ 留学环境的『熵增原理』</h3>
                <p>留学竞争加剧是不可逆的趋势，即**『竞争熵增』**。面对这种不确定性，唯一的解法是：将精力集中到自身**『可控』的增量行动**上。不要将时间浪费在内耗和信息差中。**行动是最好的药。**</p>
            </div>
        `
    }
};

let game = null; 

// 用于连续提问的回复历史记录
let responseHistory = []; 
const MAX_HISTORY = 5; 
// 用于连续提问的轮换回复计数
let psychologicalCounter = 0; 

// 新增：咨询互动提示数据 (专业/破局主题)，在右侧聊天区上方显示
const suggestedPrompts = [
    "GPA不高如何破局？",
    "面试的『本音』是什么？",
    "如何用研究计划进行『升维打击』？",
    "我感到焦虑/内耗，如何解决？"
];


// ===============================================
// 2. UI 交互函数 (确保按钮和复制功能有效，新增提示逻辑)
// ===============================================

/**
 * 切换到聊天模式或内容模式
 */
function showChatSection(isChat) {
    document.getElementById('chatSection').classList.toggle('hidden', !isChat);
    document.getElementById('contentSection').classList.add('hidden');
    document.getElementById('gameSection').classList.add('hidden');
    // 隐藏/显示返回按钮
    const backBtn = document.querySelector('.menu-back-btn');
    if (backBtn) backBtn.classList.toggle('hidden', isChat);
}

/**
 * 显示左侧菜单点击后的详细内容
 */
function showContent(contentKey) {
    const content = contentMap[contentKey];
    if (content) {
        document.getElementById('chatSection').classList.add('hidden');
        document.getElementById('gameSection').classList.add('hidden');

        const contentSection = document.getElementById('contentSection');
        contentSection.innerHTML = `<h2>${content.title}</h2>${content.content}`;
        contentSection.classList.remove('hidden');
        
        const backBtn = document.querySelector('.menu-back-btn');
        if (backBtn) backBtn.classList.remove('hidden');
    }
}

/**
 * 返回主菜单 (聊天界面)
 */
function backToMenu() {
    showChatSection(true);
}

/**
 * 监听回车键发送消息
 */
function handleKeyPress(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}

/**
 * 强制复制文本到剪贴板
 */
function copyTextToClipboard(text) {
    const tempInput = document.createElement('textarea');
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    displayAIResponse(`[系统提示] 成功复制以下**高亮破局文案**到剪贴板！请直接粘贴到您的社交媒体。`);
}

/**
 * 处理提示标签点击事件，自动填充到输入框
 */
function handlePromptClick(text) {
    const userInputField = document.getElementById('userInput');
    userInputField.value = text;
    userInputField.focus(); // 聚焦输入框
}

/**
 * 渲染咨询提示标签
 */
function renderPrompts() {
    const promptsContainer = document.getElementById('chatPrompts');
    if (!promptsContainer) return;

    // 生成 HTML 字符串，并绑定 handlePromptClick 函数
    promptsContainer.innerHTML = suggestedPrompts.map(prompt => 
        `<span class="prompt-tag" onclick="handlePromptClick('${prompt.replace(/'/g, "\\'")}')">${prompt}</span>`
    ).join('');
}

/**
 * 发送用户消息并处理 AI 响应流程
 */
function sendMessage() {
    const userInputField = document.getElementById('userInput');
    const chatBody = document.getElementById('chatBody');
    const userText = userInputField.value.trim();

    if (userText === '') return;

    // 1. 显示用户消息
    const userMessageDiv = document.createElement('div');
    userMessageDiv.className = 'message user-message';
    userMessageDiv.innerHTML = `<div class="bubble">${userText}</div>`;
    chatBody.appendChild(userMessageDiv);

    // 2. 显示加载指示器
    const loadingIndicator = document.getElementById('loadingIndicator');
    loadingIndicator.classList.remove('hidden');
    chatBody.scrollTop = chatBody.scrollHeight;

    userInputField.value = '';

    // 3. 模拟 AI 响应延迟并生成回复 (核心逻辑调用)
    setTimeout(() => {
        const aiResponse = getAIResponse(userText);
        displayAIResponse(aiResponse);

        // 4. 隐藏加载指示器
        loadingIndicator.classList.add('hidden');
        chatBody.scrollTop = chatBody.scrollHeight;
    }, 1200);
}

/**
 * 显示 AI 响应，处理 SNS 高亮模式
 */
function displayAIResponse(responseText) {
    const chatBody = document.getElementById('chatBody');
    const aiMessageDiv = document.createElement('div');
    aiMessageDiv.className = 'message ai-message';

    const isSNS = responseText.startsWith('SNS::');
    let bubbleContent = responseText;
    let bubbleClass = 'bubble';

    if (isSNS) {
        bubbleContent = responseText.replace('SNS::', '');
        bubbleClass = 'bubble sns-comment-bubble';
        
        // SNS 模式：添加复制点击事件
        aiMessageDiv.onclick = () => copyTextToClipboard(bubbleContent.replace(/<[^>]*>/g, '').trim());
        
        // 在内容中添加前缀，强调其专业性和可复制性
        bubbleContent = `<strong>【破局文案：点击复制】</strong><br>${bubbleContent}`;
    } else if (responseText.includes('▶ 系统分析：')) {
         // 深度解析回复
         bubbleContent = responseText;
    }

    aiMessageDiv.innerHTML = `<div class="${bubbleClass}">${bubbleContent}</div>`;
    chatBody.appendChild(aiMessageDiv);
    chatBody.scrollTop = chatBody.scrollHeight;
}


// ===============================================
// 3. 【核心逻辑】专业咨询与灵活应答模块 (深度内涵强化)
// ===============================================

/**
 * 处理非专业、幽默或不靠谱的提问，并进行专业化引导。
 */
function handleNonSeriousQuery(query) {
    const q = query.toLowerCase();
    const funnyKeywords = ["好吃", "可爱", "帅", "美", "八卦", "谈恋爱", "是谁", "机器人", "程序", "闲聊", "搞笑"];

    if (funnyKeywords.some(k => q.includes(k))) {
        return `感谢您的关注！秋武老师（WeChat ID: qiuwu999）是<strong>东大修士毕业，10年经验</strong>的现役老师。我们不进行「闲聊」或「评判长相/味道」，只解决具体的升学问题。<br><br>
        **中肯建议：** 将精力聚焦于你的研究课题和行动上。有专业问题，请直接提问，**避免『熵增』式的内耗**。`;
    }
    return null;
}


/**
 * 根据用户输入生成深度心理学/文化适应性洞察
 * 强化：连续提问的差异化回复 (3-5次)
 */
function generatePsychologicalInsight(query) {
    const q = query.toLowerCase();
    let response = null;
    psychologicalCounter++; // 每次调用计数器递增

    // 1. 识别焦虑/情绪关键词
    const psychologicalKeywords = ["焦虑", "压力", "内耗", "迷茫", "没自信", "不安", "拖延", "情绪", "想放弃"];
    if (psychologicalKeywords.some(k => q.includes(k))) {
        
        // 根据计数器提供差异化回复
        if (psychologicalCounter % 3 === 1) {
             response = `【人因工程学洞察】你感受到的「焦虑/压力」，本质是**行动向量不明确**的信号。专业建议：焦虑源于「想得多，做得少」。请将大目标拆解成**今天可完成的最小化行动**。行动是唯一能够对抗不确定性的工程学方法。`;
        } else if (psychologicalCounter % 3 === 2) {
             response = `【文化心理学解析 - 试错成本】内耗源于对**『试错成本』**的过度恐惧。你应该将每一次挑战（包括失败）视为一种**『肥料』**而非『果实』。专业建议：从最小化行动开始，累积小的成功，修复信心，这是结构性焦虑的解药。`;
        } else {
             response = `【系统分析 - 熵增警告】如果焦虑持续，说明你正陷入**『信息熵增』**，认知资源被分散。专业建议：**立即停止吸收冗余信息**。请聚焦于研究计划书的逻辑重构，这是你目前唯一能掌控的**『破局增量』**。`;
        }
        return `▶ 系统分析：${response}`;
    }

    // 2. 识别文化/博弈关键词
    const culturalKeywords = ["面试", "读空气", "本音", "建前", "教授关系", "失败", "落榜", "浪人"];
    if (culturalKeywords.some(k => q.includes(k))) {
        
        if (psychologicalCounter % 2 === 1) {
            response = `【文化心理学解析 - 精英博弈】面试的本质是对你**『读空气（Kuuki o Yomu）』**能力的压力测试。教授的**『本音（Hon-ne）』**绝不会轻易通过『建前（Tatemae）』暴露。策略核心：展现「人味知性」，传递「我是可信赖的、高潜力的协作者」的信号。`;
        } else {
            response = `【教授关系洞察 - 信用机制】教授看重的不是你的过去，而是你的「未来信用值」。策略升级：回答问题时，不仅要逻辑严谨，更要展示你对日本该领域**最新学术趋势**的掌握，用事实证明你的文化适应力和潜在价值。`;
        }
        return `▶ 系统分析：${response}`;
    }
    
    return null; // Fallback
}


/**
 * SNS评论生成器 - 使用专业中肯的“秋武特色”文案
 */
function generateSnsComment(content) {
    const briefContent = content.substring(0, 30).trim() + (content.length > 30 ? '...' : '');

    // 深度融合“秋武特色”的指导意见
    let insight = '';
    if (content.includes("焦虑") || content.includes("迷茫") || content.includes("内耗")) {
        insight = "「熵增警告」：焦虑是行动不足的信号。停止在评论区内耗，立即将精力投入到**研究计划的最小化行动**上。行动是抵抗不确定性的唯一方法。";
    } else if (content.includes("GPA") || content.includes("双非") || content.includes("背景")) {
        insight = "「认知差破局」：背景劣势是既定事实。破局不在于抱怨，而在于用**『东大基准』**的研究计划进行**「升维打击」**。用可控的增量覆盖不可控的存量。";
    } else if (content.includes("教授") || content.includes("面试") || content.includes("关系")) {
        insight = "「教授心理博弈」：教授看重的是你的『潜在研究能力』与『文化适应性』。文案要展现逻辑穿透力，强调你是能理解**『本音』**的潜在协作者。";
    } else if (content.includes("转专业") || content.includes("跨考")) {
        insight = "「文理融合策略」：跨考不是『裸转』。评论要强调寻找原专业与新专业的**『结合点』**，利用现有技能（如数据分析、法律框架）为新研究赋能，这是高效的破局路径。";
    } else {
        insight = "「系统分析」：留学大环境进入『竞争熵增』时代。要从战略高度看待留学，避开信息差陷阱，抓住**『认知差』**破局。";
    }

    const comment = `
        <strong>【秋武老师 · 破局点评】</strong><br>
        针对帖子内容：“${briefContent}”<br><br>
        <strong>专业建议：</strong> ${insight}<br>
        &mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;<br>
        **秋武老师（东大修士）** 只解决具体的升学问题。如果你想获取定制化的破局方案，请加微信 **qiuwu999** 咨询。
    `;

    return `SNS::${comment}`;
}


/**
 * 根据用户输入生成 AI 响应 (核心逻辑)
 */
function getAIResponse(userInput) {
    const lowerInput = userInput.toLowerCase();
    let response = null;

    // 1. 更新历史记录
    responseHistory.unshift(userInput);
    if (responseHistory.length > MAX_HISTORY) {
        responseHistory.pop();
    }

    // 2. 【优先级最高】幽默/非专业问题处理
    response = handleNonSeriousQuery(userInput);
    if (response) return response;

    // 3. 【优先级次高】SNS 评论模式检测
    // 注意：同时支持全角和半角冒号
    if (lowerInput.startsWith('生成评论或回复：') || lowerInput.startsWith('生成评论或回复:') || lowerInput.startsWith('生成评论或回复')) {
        const index = userInput.indexOf('：') > 0 ? userInput.indexOf('：') + 1 : (userInput.indexOf(':') > 0 ? userInput.indexOf(':') + 1 : 8);
        const content = userInput.substring(index).trim();
        
        if (content) {
            return generateSnsComment(content);
        }
        return generateSnsComment("请在指令后输入帖子内容，我将为您生成专业的破局文案。");
    }

    // 4. 【优先级再次】心理与文化洞察 (专业分析)
    response = generatePsychologicalInsight(lowerInput);
    if (response) return response;

    // 5. 关键词匹配 (中肯基础信息) - 深度整合文档内容
    if (lowerInput.includes('费用') || lowerInput.includes('收费') || lowerInput.includes('价格')) {
        return `【透明商业逻辑】我们强烈推荐<strong>“免费模式”</strong>：通过我推荐进入合作私塾或语校，机构支付的介绍费即覆盖您的全部辅导费。这是一种**三方共赢的价值模式**。
        <br>
        **细节请加微信：qiuwu999** 沟通。`;
    }
    if (lowerInput.includes('双非') || lowerInput.includes('gpa') || lowerInput.includes('出身校')) {
        return `【双非/GPA破局】出身校是既定事实，不要内耗。**策略是：** 必须用高品质的**研究计划书** + 高分语言成绩（N1/托福）来实现**「升维打击」**。这是双非逆袭的底层逻辑。`;
    }
    if (lowerInput.includes('优势') || lowerInput.includes('特点') || lowerInput.includes('你是谁') || lowerInput.includes('背景')) {
        return `【秋武老师背景】东大修士毕业，10年辅导经验。**核心特点：** 专注攻克最难的「研究计划构建」和「教授心理博弈」。提供「文理融合」的跨学科视角和「东大基准」的逻辑重构。`;
    }
    if (lowerInput.includes('跨专业') || lowerInput.includes('转专业')) {
        return `【跨专业策略】不要「裸转」。**策略核心：** 寻找原专业与新专业的**「结合点」**。利用原专业的工具（如数据分析、法律框架）来研究新领域，这是跨考成功的核心逻辑。`;
    }
    if (lowerInput.includes('微信') || lowerInput.includes('联系方式') || lowerInput.includes('沟通')) {
        return `【联系方式】秋武老师微信ID是：<strong>qiuwu999</strong>。**咨询请直接说明：** 出身校、专业、日语/英语成绩、意向学校。我们不闲聊，只解决具体的升学问题。`;
    }
    if (lowerInput.includes('你好') || lowerInput.includes('在吗')) {
        return `您好！我是您的东大升学破局顾问助理。请直接输入您的关键信息或感兴趣的关键词（如：费用、双非、优势）。我们不闲聊，只提供专业解决方案。**更多细节请加微信：qiuwu999 详聊。**`;
    }

    // 6. 默认回复 (秋武特色中肯引导)
    return `升学是一场信息战，也是一场心理战。您的问题可能缺乏核心关键词，请尝试输入以下 **「破局要素」**：<br>
    - <strong>留学要素关键词：</strong> 费用、双非、GPA、面试、跨专业<br>
    - <strong>情绪关键词：</strong> 焦虑、压力、迷茫<br>
    <br>
    **记住：不贩卖焦虑，只解决问题。**<br>
    **需要定制化的破局方案，请加微信：qiuwu999 详聊。**`;
}

// ===============================================
// 4. 策略游戏逻辑 (Game Simulation Logic) - 仅做专业占位
// ===============================================

function startGameSimulation() {
    const gameDashboard = document.getElementById('gameDashboard');
    gameDashboard.innerHTML = `
        <h3 style="color: var(--color-primary-dark); margin-top: 15px;">【功能开发中：AI 升学破局模拟】</h3>
        <p>我们正在为您集成一套基于**『熵增』和『信用值』**的策略模拟系统。</p>
        <p>该系统将模拟真实的申请周期，量化您的**行动力、洞察力**和**教授信用值**，以测试您的破局策略。</p>
        <p style="font-weight: bold; margin-top: 20px;">请先使用**咨询功能**获取核心策略。游戏功能稍后完善。</p>
    `;
    // 隐藏开始模拟按钮
    document.querySelector('#gameSection button').classList.add('hidden');
    document.querySelector('#gameDashboard').classList.remove('hidden');
}


// ===============================================
// 5. 页面初始化 (Initialization)
// ===============================================
window.onload = function() {
    // 初始化时渲染咨询提示标签
    renderPrompts(); 
};
