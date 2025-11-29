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
                <h3>模式一：个人精细化定制 (一对一)</h3>
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

let responseHistory = []; 
const MAX_HISTORY = 5; 
let psychologicalCounter = 0; 

// 咨询互动提示数据
const suggestedPrompts = [
    "GPA不高如何破局？",
    "面试的『本音』是什么？",
    "如何用研究计划进行『升维打击』？",
    "我感到焦虑/内耗，如何解决？"
];


// ===============================================
// 2. UI 交互函数
// ===============================================

function showChatSection(isChat) {
    document.getElementById('chatSection').classList.toggle('hidden', !isChat);
    document.getElementById('contentSection').classList.add('hidden');
    // 移除 gameSection 相关的代码，因为它已被删除
    // document.getElementById('gameSection').classList.add('hidden');
    const backBtn = document.querySelector('.menu-back-btn');
    if (backBtn) backBtn.classList.toggle('hidden', isChat);
}

function showContent(contentKey) {
    const content = contentMap[contentKey];
    if (content) {
        document.getElementById('chatSection').classList.add('hidden');
        // 移除 gameSection 相关的代码
        // document.getElementById('gameSection').classList.add('hidden');

        const contentSection = document.getElementById('contentSection');
        contentSection.innerHTML = `<h2>${content.title}</h2>${content.content}`;
        contentSection.classList.remove('hidden');
        
        const backBtn = document.querySelector('.menu-back-btn');
        if (backBtn) backBtn.classList.remove('hidden');
    }
}

function backToMenu() {
    showChatSection(true);
}

function handleKeyPress(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}

/**
 * 强制复制文本到剪贴板 (可选择是否显示确认消息)
 * @param {string} text - 要复制的纯文本
 * @param {boolean} [showConfirmation=true] - 是否显示复制成功的系统提示
 */
function copyTextToClipboard(text, showConfirmation = true) {
    const tempInput = document.createElement('textarea');
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    
    if (showConfirmation) {
        // 通过 displayAIResponse 统一显示系统提示
        displayAIResponse(`[系统提示] 成功复制以下**高亮破局文案**到剪贴板！请直接粘贴到您的社交媒体。`, true); 
    }
}


function handlePromptClick(text) {
    const userInputField = document.getElementById('userInput');
    userInputField.value = text;
    userInputField.focus(); 
}

function renderPrompts() {
    const promptsContainer = document.getElementById('chatPrompts');
    if (!promptsContainer) return;

    promptsContainer.innerHTML = suggestedPrompts.map(prompt => 
        `<span class="prompt-tag" onclick="handlePromptClick('${prompt.replace(/'/g, "\\'")}')">${prompt}</span>`
    ).join('');
}


function sendMessage() {
    const userInputField = document.getElementById('userInput');
    const chatBody = document.getElementById('chatBody');
    const userText = userInputField.value.trim();

    if (userText === '') return;

    const userMessageDiv = document.createElement('div');
    userMessageDiv.className = 'message user-message';
    userMessageDiv.innerHTML = `<div class="bubble">${userText}</div>`;
    chatBody.appendChild(userMessageDiv);

    const loadingIndicator = document.getElementById('loadingIndicator');
    loadingIndicator.classList.remove('hidden');
    
    // **【优化点 1】确保用户消息后自动滚动**
    chatBody.scrollTop = chatBody.scrollHeight;

    userInputField.value = '';

    setTimeout(() => {
        const aiResponse = getAIResponse(userText);
        const isSNS = aiResponse.startsWith('SNS::');

        // 1. 显示 AI 响应
        displayAIResponse(aiResponse);

        // 2. 【核心逻辑】如果处于 SNS 模式，则执行自动复制
        if (isSNS) {
            // 从生成的 HTML 响应中提取纯文本用于复制
            const originalCommentHTML = aiResponse.replace('SNS::', '');
            // 使用临时DOM元素来安全地去除HTML标签，获取纯文本
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = originalCommentHTML;
            const plainTextComment = tempDiv.textContent || tempDiv.innerText || '';
            
            // 稍作延迟，确保主消息气泡已经渲染完毕，再执行复制和显示确认消息
            setTimeout(() => {
                 // 自动复制，并显示确认消息 (showConfirmation=true)
                 copyTextToClipboard(plainTextComment.trim(), true); 
            }, 50); 
        }

        loadingIndicator.classList.add('hidden');
        // **【优化点 1】确保 AI 消息后自动滚动**
        chatBody.scrollTop = chatBody.scrollHeight;
    }, 1200);
}

/**
 * 显示 AI 响应，特别处理 SNS 高亮模式和系统提示模式
 * @param {string} responseText - 待显示的文本
 * @param {boolean} [isSystemMessage=false] - 是否为系统提示（用于 copyTextToClipboard 内部调用）
 */
function displayAIResponse(responseText, isSystemMessage = false) {
    const chatBody = document.getElementById('chatBody');
    const aiMessageDiv = document.createElement('div');
    aiMessageDiv.className = 'message ai-message';

    const isSNS = responseText.startsWith('SNS::');
    let bubbleContent = responseText;
    let bubbleClass = 'bubble';

    if (isSNS) {
        bubbleContent = responseText.replace('SNS::', '');
        bubbleClass = 'bubble sns-comment-bubble';
        
        // 替换标题，表明已自动复制
        bubbleContent = `<strong>【破局文案：已自动复制】</strong><br>${bubbleContent}`;
    } else if (responseText.includes('▶ 系统分析：')) {
         // 深度解析回复
         bubbleContent = responseText;
    } else if (isSystemMessage || responseText.startsWith('[系统提示]')) {
         // 专用于复制确认消息等系统提示
         bubbleClass = 'bubble system-bubble';
    }

    aiMessageDiv.innerHTML = `<div class="${bubbleClass}">${bubbleContent}</div>`;
    chatBody.appendChild(aiMessageDiv);
    // **【优化点 1】确保消息内容被追加后，窗口立即滚动到底部**
    chatBody.scrollTop = chatBody.scrollHeight;
}


// ===============================================
// 3. 【核心逻辑】专业咨询与灵活应答模块
// ===============================================

function handleNonSeriousQuery(query) {
    const q = query.toLowerCase();
    const funnyKeywords = ["好吃", "可爱", "帅", "美", "八卦", "谈恋爱", "是谁", "机器人", "程序", "闲聊", "搞笑"];

    if (funnyKeywords.some(k => q.includes(k))) {
        return `感谢您的关注！秋武老师（WeChat ID: qiuwu999）是<strong>东大修士毕业，10年经验</strong>的现役老师。我们不进行「闲聊」或「评判长相/味道」，只解决具体的升学问题。<br><br>
        <strong>中肯建议：</strong> 将精力聚焦于你的研究课题和行动上。有专业问题，请直接提问，<strong>避免『熵增』式的内耗</strong>。`;
    }
    return null;
}


function generatePsychologicalInsight(query) {
    const q = query.toLowerCase();
    let response = null;
    psychologicalCounter++; 

    // 1. 识别焦虑/情绪关键词 (连续提问下的回复轮换)
    const psychologicalKeywords = ["焦虑", "压力", "内耗", "迷茫", "没自信", "不安", "拖延", "情绪", "想放弃"];
    if (psychologicalKeywords.some(k => q.includes(k))) {
        
        if (psychologicalCounter % 3 === 1) {
             response = `【人因工程学洞察】你感受到的「焦虑/压力」，本质是<strong>行动向量不明确</strong>的信号。专业建议：焦虑源于「想得多，做得少」。请将大目标拆解成<strong>今天可完成的最小化行动</strong>。行动是唯一能够对抗不确定性的工程学方法。`;
        } else if (psychologicalCounter % 3 === 2) {
             response = `【文化心理学解析 - 试错成本】内耗源于对<strong>『试错成本』</strong>的过度恐惧。你应该将每一次挑战（包括失败）视为一种<strong>『肥料』</strong>而非『果实』。专业建议：从最小化行动开始，累积小的成功，修复信心，这是结构性焦虑的解药。`;
        } else {
             response = `【系统分析 - 熵增警告】如果焦虑持续，说明你正陷入<strong>『信息熵增』</strong>，认知资源被分散。专业建议：<strong>立即停止吸收冗余信息</strong>。请聚焦于研究计划书的逻辑重构，这是你目前唯一能掌控的<strong>『破局增量』</strong>。`;
        }
        return `▶ 系统分析：${response}`;
    }

    // 2. 识别文化/博弈关键词 (深度分析)
    const culturalKeywords = ["面试", "读空气", "本音", "建前", "教授关系", "失败", "落榜", "浪人", "答辩", "草稿"];
    if (culturalKeywords.some(k => q.includes(k))) {
        
        if (psychologicalCounter % 2 === 1) {
            // 引用内部资料：面试的底层逻辑 - 倒推法
            response = `【教授答辩底层逻辑】面试的底层逻辑是：**倒推阐述你的毕业后打算/目标/梦想**。教授需要看到你清晰的「学以致用」逻辑。我们辅导的核心是帮助你构建这种**『倒推式逻辑链』**。`;
        } else {
            // 引用知乎资料：文化心理博弈
            response = `【文化心理学解析 - 精英博弈】面试的本质是对你<strong>『读空气（Kuuki o Yomu）』</strong>能力的压力测试。教授的<strong>『本音（Hon-ne）』</strong>绝不会轻易通过『建前（Tatemae）』暴露。策略核心：展现「人味知性」，传递「我是可信赖的、高潜力的协作者」的信号。`;
        }
        return `▶ 系统分析：${response}`;
    }
    
    return null; 
}


function generateSnsComment(content) {
    const briefContent = content.substring(0, 30).trim() + (content.length > 30 ? '...' : '');

    // 深度融合“秋武特色”的指导意见（体现多领域专业视角和文化差异）
    let insight = '';
    if (content.includes("焦虑") || content.includes("迷茫") || content.includes("内耗")) {
        insight = "「熵增警告」：焦虑是行动不足的信号。停止在评论区内耗，立即将精力投入到<strong>研究计划的最小化行动</strong>上。记住，**行动是抵抗不确定性的唯一方法**。";
    } else if (content.includes("GPA") || content.includes("双非") || content.includes("背景")) {
        insight = "「认知差破局」：背景劣势是既定事实。破局不在于抱怨，而在于用<strong>『东大基准』</strong>的研究计划进行**「升维打击」**。这是最中肯的升学策略。";
    } else if (content.includes("教授") || content.includes("面试") || content.includes("关系")) {
        insight = "「文化心理博弈」：教授看重你的『潜在研究能力』与『文化适应性』。文案要展现逻辑穿透力，强调你是能理解日本**『本音 vs 建前』**的潜在协作者。";
    } else if (content.includes("转专业") || content.includes("跨考")) {
        insight = "「文理融合策略」：跨考不是『裸转』。评论要强调寻找原专业与新专业的**『结合点』**，利用现有技能（如数据分析、法律框架）为新研究赋能，这是高效的破局路径。";
    } else {
        insight = "「系统分析」：留学大环境进入『竞争熵增』时代。请保持**「遊び感覚/节奏感」**，避免信息差陷阱，抓住**『认知差』**破局，从战略高度看待留学。";
    }

    const comment = `
        <strong>【秋武老师 · 破局点评】</strong><br>
        针对帖子内容：“${briefContent}”<br><br>
        <strong>专业建议：</strong> ${insight}<br>
        &mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;<br>
        <strong>秋武老师（东大修士）</strong> 只解决具体的升学问题。如果你想获取定制化的破局方案，请加微信 <strong>qiuwu999</strong> 咨询。
    `;

    // 返回特殊前缀，激活自动复制和高亮样式
    return `SNS::${comment}`;
}


function getAIResponse(userInput) {
    // 预处理：去除首尾可能存在的引号、空格、全角空格等干扰字符 (增强鲁棒性)
    let cleanInput = userInput.trim().replace(/^['"”‘“\s]+|['"”‘“\s]+$/g, '');
    const lowerInput = cleanInput.toLowerCase();
    let response = null;

    responseHistory.unshift(userInput);
    if (responseHistory.length > MAX_HISTORY) {
        responseHistory.pop();
    }

    // 1. 【优先级最高】幽默/非专业问题处理
    response = handleNonSeriousQuery(cleanInput);
    if (response) return response;

    // 2. 【优先级次高】SNS 评论/回复模式检测 (增强兼容性)
    const prefixes = ['生成评论或回复', '生成评论', '生成回复'];

    let snsTriggered = false;
    let content = '';
    let prefixLength = 0;

    for (const prefix of prefixes) {
        if (lowerInput.startsWith(prefix)) {
            prefixLength = prefix.length;
            snsTriggered = true;
            break;
        }
    }
    
    if (snsTriggered) {
        // 从指令后开始截取内容
        content = cleanInput.substring(prefixLength).trim();

        // 检查并移除指令后紧跟的冒号 (全角或半角)
        if (content.startsWith('：') || content.startsWith(':')) {
            content = content.substring(1).trim();
        }
        
        if (content) {
            return generateSnsComment(content);
        }
        return generateSnsComment("请在指令后输入帖子内容，我将为您生成专业的破局文案。");
    }

    // 3. 【优先级再次】心理与文化洞察 (专业分析)
    response = generatePsychologicalInsight(lowerInput);
    if (response) return response;

    // 4. 关键词匹配 (中肯基础信息)
    
    // 优化：答辩草稿/一问一答式辅导
    if (lowerInput.includes('答辩') || lowerInput.includes('草稿') || lowerInput.includes('一问一答')) {
        return `【核心服务：倒推式答辩辅导】是的，**「一问一答式教授答辩草稿辅导」**是我们的**核心服务项目**之一。
        <br>
        ▶ <strong>辅导逻辑：</strong> 我们摒弃传统的一问一答，采用**『倒推法』**。以**“你毕业后的打算、目标、梦想”**为起点，倒推出你在大学的学习重点和计划，确保你的回答具有**『学以致用』**的强大逻辑支撑，消除教授的隐性顾虑。
        <br>
        ▶ <strong>服务项目：</strong> 文书、模拟面试、全套项目均包含此核心逻辑辅导。详情请加微信 <strong>qiuwu999</strong> 沟通项目价位。`;
    }

    // 优化：优势/特点/背景
    if (lowerInput.includes('优势') || lowerInput.includes('特点') || lowerInput.includes('你是谁') || lowerInput.includes('背景') || lowerInput.includes('辅导方式')) {
        return `【秋武老师：核心优势】
        <br>
        ▶ <strong>背景：</strong> 东大修士毕业，10年辅导经验现役老师。
        ▶ <strong>辅导方式：</strong> **个人精细化一对一辅导**，彻底区别于大机构的流水线作业。
        ▶ <strong>核心竞争力：</strong> 提供**「文理交叉」**的跨学科视角和**「东大基准」**的逻辑重构。核心不只是改文书，而是提供**『认知差』**的破局方案。
        <br>
        我们只接能通过**『破局系统』**实现跃迁的学生。`;
    }
    
    // 修正：私塾/多此一举
    if (lowerInput.includes('私塾') || lowerInput.includes('多此一举') || lowerInput.includes('为什么要')) {
        // 强调“认知差”和“逻辑重构”
        return `【认知差破局】<strong>私塾是『流程管理』，秋武老师是『逻辑重构』。</strong>
        <br>
        1. <strong>私塾/大机构：</strong> 主要解决标准化问题（如语言课、基础知识、走流程），是<strong>『广度』</strong>。
        2. <strong>秋武老师：</strong> 提供**「东大基准」**的**『认知差』**和**「升维打击」**。解决你研究计划书中的<strong>底层逻辑缺陷</strong>和**教授心理博弈**，是<strong>『深度』</strong>。
        <br>
        二者功能不重叠。我们只解决最难、最核心的<strong>『破局增量』</strong>问题。`;
    }
    
    // **【优化点 3】修正知乎/B站链接问题，强调搜索**
    if (lowerInput.includes('知乎') || lowerInput.includes('哔哩哔哩') || lowerInput.includes('b站') || lowerInput.includes('渠道') || lowerInput.includes('链接')) {
        return `【外部深度内容】秋武老师在知乎和B站上发布了大量**专业深度分析**，包括：
        <br>
        1. <strong>文化心理：</strong> 留学环境中的**『熵增』**与**『遊び感覚/节奏感』**（保持余裕）。
        2. <strong>语言/文化差异：</strong> 语种学习中的**『纠缠』**与**『言外之意』**，避免文化梗误解。
        <br>
        **请直接在平台搜索：秋武老师**，查看完整的 <strong>文理融合/教授心理学</strong> 深度分析。这些内容旨在提升你的**『认知差』**。`;
    }
    
    if (lowerInput.includes('费用') || lowerInput.includes('收费') || lowerInput.includes('价格') || lowerInput.includes('免费')) {
        return `【透明商业逻辑】我们强烈推荐<strong>“免费模式”</strong>：通过我推荐进入合作私塾或语校，机构支付的介绍费即覆盖您的全部辅导费。这是一种**三方共赢的价值模式**，无任何隐形消费。
        <br>
        <strong>细节请加微信：qiuwu999</strong> 沟通。`;
    }
    if (lowerInput.includes('双非') || lowerInput.includes('gpa') || lowerInput.includes('出身校')) {
        return `【双非/GPA破局】出身校是既定事实，不要内耗。<strong>策略是：</strong> 必须用高品质的<strong>研究计划书</strong> + 高分语言成绩（N1/托福）来实现**「升维打击」**。这是双非逆袭的底层逻辑。`;
    }
    
    if (lowerInput.includes('跨专业') || lowerInput.includes('转专业')) {
        return `【跨专业策略】不要「裸转」。<strong>策略核心：</strong> 寻找原专业与新专业的**「结合点」**。利用原专业的工具（如数据分析、法律框架）来研究新领域，这是跨考成功的核心逻辑。`;
    }
    if (lowerInput.includes('微信') || lowerInput.includes('联系方式') || lowerInput.includes('沟通')) {
        return `【联系方式】秋武老师微信ID是：<strong>qiuwu999</strong>。<strong>咨询请直接说明：</strong> 出身校、专业、日语/英语成绩、意向学校。我们不闲聊，只解决具体的升学问题。`;
    }
    if (lowerInput.includes('你好') || lowerInput.includes('在吗')) {
        return `您好！我是您的东大升学破局顾问助理。请直接输入您的关键信息或感兴趣的关键词（如：费用、双非、优势）。我们不闲聊，只提供专业解决方案。<strong>更多细节请加微信：qiuwu999 详聊。</strong>`;
    }

    // 5. 默认回复 (秋武特色中肯引导)
    return `升学是一场信息战，也是一场心理战。您的问题可能缺乏核心关键词，请尝试输入以下 <strong>「破局要素」</strong>：
    <br><br>
    ▶ <strong>留学要素关键词：</strong> 费用、双非、GPA、面试、跨专业<br>
    ▶ <strong>情绪关键词：</strong> 焦虑、压力、迷茫
    <br><br>
    <strong>记住：不贩卖焦虑，只解决问题。</strong><br>
    <strong>需要定制化的破局方案，请加微信：qiuwu999 详聊。</strong>`;
}

// ===============================================
// 4. 策略游戏逻辑 (Game Simulation Logic) - 彻底删除
// ===============================================

/* * 用户的反馈是正确的，该功能应移除。
 * 相关的startGameSimulation函数已删除，请确保HTML中
 * 对应按钮和gameSection也被删除或隐藏，以保持UI简洁。
 */


// ===============================================
// 5. 页面初始化 (Initialization)
// ===============================================
window.onload = function() {
    // 初始化时渲染咨询提示标签
    renderPrompts(); 
};
