// ===============================================
// 1. 全局状态与配置 (Global State & Configuration)
// ===============================================

// 静态内容数据，用于左侧菜单展示
const contentMap = {
    strength: {
        title: "核心优势：以破绽为支点 (逻辑重构)",
        content: `
            <div class="detail-card">
                <h3>🔍 认知差破局策略 (东大基准)</h3>
                <p>我们提供的不是信息差，而是认知差。用「东大基准」的逻辑重构来做「升维打击」——将研究计划视为心理博弈的工具。<strong>核心理念：</strong> 避免陷入「熵增」式的内耗，将精力集中于「可控」的增量行动。</p>
            </div>
            <div class="detail-card">
                <h3>🛡️ 教授心理学博弈 (Professor Psychology)</h3>
                <p>辅导深入到教授的「本音（Hon-ne）」——他们真正在乎的能力指标。面试的本质是对你<strong>「读空气（Kuuki o Yomu）」</strong>能力的压力测试。目标是将你从“申请者”转化为“潜在协作者”。</p>
            </div>
        `
    },
    model: {
        title: "辅导模式与价值承诺 (透明且靠谱)",
        content: `
            <div class="detail-card">
                <h3>💎 模式一：个人精细化定制</h3>
                <p>区别于大机构的流水线，提供文书、模拟面试、研究方向确定等全套深度定制服务。只接能够通过“东大基准”实现“破局”的学生。</p>
            </div>
            <div class="detail-card">
                <h3>💸 模式二：免费模式（渠道方合作）</h3>
                <p><strong>透明商业逻辑：</strong> 通过我推荐进入合作私塾或语校，机构支付的介绍费即覆盖您的全部辅导费。您无额外支出，享受高端一对一咨询服务。</p>
                <p><strong>联系方式：</strong> 细节请加微信 <strong>qiuwu999</strong> 沟通。</p>
            </div>
        `
    },
    cases: {
        title: "成功案例 / 系统性思考 (熵增与行动)",
        content: `
            <div class="detail-card">
                <h3>📚 案例精选：双非逆袭与专业跨界</h3>
                <p>成功核心逻辑是：用高分语言成绩（托福/N1）+东大基准的研究计划，覆盖了GPA和出身校的劣势。我们擅长帮助高难度挑战，如「法学背景转经济修士」。</p>
            </div>
            <div class="detail-card">
                <h3>🌍 留学大环境下的深度思考：熵增原理</h3>
                <p><strong>竞争熵增：</strong> 日本留学的不确定性增加。面对不可逆的趋势，将精力集中到自身「可控」的增量行动上。行动是最好的药。</p>
            </div>
        `
    }
};

let game = null; // 用于游戏模拟的状态管理

// 新增：用于连续提问的回复历史记录
let responseHistory = []; 
const MAX_HISTORY = 5; // 仅保留最近5条记录

// ===============================================
// 2. UI 交互函数 (修复按钮逻辑，增加复制函数)
// ===============================================

/**
 * 修复：确保按钮点击后能正确切换到内容区
 */
function showChatSection(isChat) {
    document.getElementById('chatSection').classList.toggle('hidden', !isChat);
    document.getElementById('contentSection').classList.add('hidden');
    document.getElementById('gameSection').classList.add('hidden');
    // 隐藏返回按钮 (在聊天模式下)
    const backBtn = document.querySelector('.menu-back-btn');
    if (backBtn) backBtn.classList.toggle('hidden', isChat);
}

/**
 * 修复：确保菜单项点击后能正确显示内容
 */
function showContent(contentKey) {
    const content = contentMap[contentKey];
    if (content) {
        document.getElementById('chatSection').classList.add('hidden');
        document.getElementById('gameSection').classList.add('hidden');

        const contentSection = document.getElementById('contentSection');
        contentSection.innerHTML = `<h2>${content.title}</h2>${content.content}`;
        contentSection.classList.remove('hidden');
        
        // 显示返回按钮
        const backBtn = document.querySelector('.menu-back-btn');
        if (backBtn) backBtn.classList.remove('hidden');
    }
}

/**
 * 修复：返回菜单逻辑
 */
function backToMenu() {
    showChatSection(true);
}

function handleKeyPress(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}

/**
 * 新增：强制复制文本到剪贴板
 * @param {string} text - 要复制的文本
 */
function copyTextToClipboard(text) {
    const tempInput = document.createElement('textarea');
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    // 可选：在聊天界面给出复制成功的提示
    displayAIResponse(`[系统提示] 成功复制以下文案到剪贴板！请直接粘贴到您的社交媒体。`);
}


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

function displayAIResponse(responseText) {
    const chatBody = document.getElementById('chatBody');
    const aiMessageDiv = document.createElement('div');
    aiMessageDiv.className = 'message ai-message';

    // 检查是否是 SNS 模式回复
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
    } else if (responseText.includes('【人因工程学洞察】') || responseText.includes('【文化心理学解析】')) {
         // 为深度解析回复提供一个中肯的格式
         bubbleContent = `<span style="font-weight: 600; color: var(--color-primary-dark);">▶ 系统分析：</span> ${responseText}`;
    }

    aiMessageDiv.innerHTML = `<div class="${bubbleClass}">${bubbleContent}</div>`;
    chatBody.appendChild(aiMessageDiv);
    chatBody.scrollTop = chatBody.scrollHeight;
}

// ===============================================
// 3. 【核心逻辑】专业咨询与灵活应答模块
// ===============================================

/**
 * 处理非专业、幽默或不靠谱的提问，并进行专业化引导。
 */
function handleNonSeriousQuery(query) {
    const q = query.toLowerCase();
    const funnyKeywords = ["好吃", "可爱", "帅", "美", "八卦", "谈恋爱", "是谁", "机器人", "程序", "闲聊", "搞笑"];

    if (funnyKeywords.some(k => q.includes(k))) {
        // 使用一个带有「人味」的幽默回复，但立刻拉回专业主题
        return `感谢您的关注！秋武老师（WeChat ID: qiuwu999）是<strong>东大修士毕业，10年经验</strong>的现役老师。我们不进行「闲聊」或「评判长相/味道」，只解决具体的升学问题。<br><br>
        **中肯建议：** 将精力聚焦于你的研究课题和行动上。有专业问题，请直接提问。`;
    }
    return null;
}


/**
 * 根据用户输入生成深度心理学/文化适应性洞察
 * 强化：连续提问的差异化回复
 */
function generatePsychologicalInsight(query) {
    const q = query.toLowerCase();
    let response = null;

    // 1. 识别焦虑/情绪关键词
    const psychologicalKeywords = ["焦虑", "压力", "内耗", "迷茫", "没自信", "不安", "拖延", "情绪", "想放弃"];
    if (psychologicalKeywords.some(k => q.includes(k))) {
        // 连续提问逻辑：如果历史记录中有相似的“焦虑”关键词，给出更深层的回复
        const anxietyCount = responseHistory.filter(h => h.includes("焦虑")).length;
        
        if (anxietyCount >= 2) {
             response = `【人因工程学洞察 Ⅱ - 结构性焦虑】你感受到的是**结构性焦虑**。这不仅是个人问题，更是因为你缺乏一套**行之有效的「破局」系统**。
             <br><br>
             <strong>建议：</strong> 停止在信息海洋中内耗。你需要的是一个定制化的行动向量。现在，请聚焦在**「研究计划书」**的重构上，这是你唯一能立刻掌控的增量。`;
        } else {
             response = `【人因工程学洞察】你感受到的「焦虑/压力」，本质是认知资源被分散、行动向量不明确的信号。
             <br><br>
             <strong>专业建议：</strong> 焦虑源于「想得多，做得少」。把大目标拆解成<strong>今天的最小化、不可再分割的小任务</strong>。行动是唯一能够对抗不确定性的工程学方法。`;
        }
    }

    // 2. 识别文化/博弈关键词
    const culturalKeywords = ["面试", "读空气", "本音", "建前", "教授关系", "失败", "落榜", "浪人"];
    if (culturalKeywords.some(k => q.includes(k))) {
        const cultureCount = responseHistory.filter(h => h.includes("文化心理学解析")).length;

        if (cultureCount >= 2) {
            response = `【文化心理学解析 Ⅱ - 差异化策略】面试不仅是语言交流，更是**文化认知与适应性的深度测验**。你要理解教授需要的不是一个「学生」，而是一个能理解日本学术语境的「协作者」。
            <br><br>
            <strong>策略升级：</strong> 回答问题时，不仅要逻辑严谨，更要展示你对日本该领域**最新学术趋势**的掌握，用事实证明你的文化适应力和潜在价值。`;
        } else {
            response = `【文化心理学解析 - 精英博弈】面试的本质是对你<strong>「读空气（Kuuki o Yomu）」</strong>能力的**压力测试**。教授的「本音（Hon-ne）」绝不会轻易通过「建前（Tatemae）」暴露。
            <br><br>
            <strong>策略核心：</strong> 展现「人味知性」。用严谨的逻辑回答，同时通过姿态和眼神传递「我是可信赖的、高潜力的协作者」的信号。`;
        }
    }

    return response;
}


/**
 * SNS评论生成器 - 使用专业中肯的“秋武特色”文案
 * @param {string} content - 用户输入的帖子内容
 * @returns {string} - SNS:: [高亮可复制的专业文案]
 */
function generateSnsComment(content) {
    const briefContent = content.substring(0, 30).trim() + (content.length > 30 ? '...' : '');

    // 基于输入内容简单分析，给出专业指导意见
    let insight = '';
    if (content.includes("焦虑") || content.includes("迷茫")) {
        insight = "焦虑是行动不足的信号。停止在评论区内耗，立刻将精力投入到研究计划的最小化行动上。行动是抵抗不确定性的唯一方法。";
    } else if (content.includes("GPA") || content.includes("双非")) {
        insight = "背景劣势是既定事实。破局不在于抱怨，而在于用「东大基准」的研究计划进行「升维打击」。用可控的增量（研究、语言）覆盖不可控的存量（出身）。";
    } else if (content.includes("教授") || content.includes("面试")) {
        insight = "教授看重的是你的「潜在研究能力」与「文化适应性」。评论要展现逻辑严谨性，避免情绪化表达，强调你是「潜在的协作者」而非「单纯的申请者」。";
    } else {
        insight = "留学大环境进入「熵增」时代，竞争加剧是必然。要从战略高度看待留学，避开信息差陷阱，抓住「认知差」破局。";
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
 * 根据用户输入生成 AI 响应 (整合了文件中的Q&A数据)
 */
function getAIResponse(userInput) {
    const lowerInput = userInput.toLowerCase();
    let response = null;

    // 1. 更新历史记录 (用于连续提问逻辑)
    responseHistory.unshift(userInput);
    if (responseHistory.length > MAX_HISTORY) {
        responseHistory.pop();
    }

    // 2. 【优先级最高】幽默/非专业问题处理
    response = handleNonSeriousQuery(userInput);
    if (response) return response;

    // 3. 【优先级次高】SNS 评论模式检测
    if (lowerInput.startsWith('生成评论或回复：') || lowerInput.startsWith('生成评论或回复:') || lowerInput.startsWith('生成评论或回复')) {
        const content = userInput.substring(userInput.indexOf('：') > 0 ? userInput.indexOf('：') + 1 : 8).trim();
        if (content) {
            return generateSnsComment(content);
        }
        return generateSnsComment("请在指令后输入帖子内容，我将为您生成专业的破局文案。");
    }

    // 4. 【优先级再次】心理与文化洞察 (专业分析)
    response = generatePsychologicalInsight(lowerInput);
    if (response) return response;

    // 5. 关键词匹配 (中肯基础信息) - 使用专业、秋武特色的文案，**移除 AI 味儿**
    if (lowerInput.includes('费用') || lowerInput.includes('收费') || lowerInput.includes('价格')) {
        return `【透明商业逻辑】我们强烈推荐<strong>“免费模式”</strong>：通过我推荐进入合作私塾或语校，机构支付的介绍费即覆盖您的全部辅导费。这是一种三方共赢的商业逻辑。
        <br>
        <strong>细节请加微信：qiuwu999</strong> 沟通。`;
    }
    if (lowerInput.includes('双非') || lowerInput.includes('gpa') || lowerInput.includes('出身校')) {
        return `【双非/GPA破局】出身校是既定事实，不要内耗。**策略是：** 必须用高品质的研究计划书 + 高分语言成绩（N1/托福）来实现「升维打击」。双非逆袭东大的案例年年都有，关键看你怎么“秀肌肉”。`;
    }
    if (lowerInput.includes('微信') || lowerInput.includes('联系方式') || lowerInput.includes('沟通')) {
        return `【联系方式】秋武老师微信ID是：<strong>qiuwu999</strong>。
        <br><br>
        **咨询请直接说明：** 出身校、专业、日语/英语成绩、意向学校。我们不闲聊，只解决具体的升学问题。`;
    }
    if (lowerInput.includes('优势') || lowerInput.includes('特点') || lowerInput.includes('你是谁')) {
        return `【核心优势】秋武老师是<strong>东大修士毕业，10年辅导经验</strong>。核心特点：个人精细化辅导，专注攻克最难的「研究计划构建」和「教授心理博弈」。提供「文理融合」的跨学科视角和「东大基准」的逻辑重构。`;
    }
    if (lowerInput.includes('跨专业') || lowerInput.includes('转专业')) {
        return `【跨专业策略】不要「裸转」。<strong>策略核心：</strong> 寻找原专业与新专业的「结合点」。利用原专业的工具（统计/编程/语言）来研究新领域，是跨考成功的核心逻辑。`;
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
// 4. 策略游戏逻辑 (Game Simulation Logic) - 保持结构
// ===============================================

function startGameSimulation() {
    // 占位符：此处应该包含复杂的策略游戏初始化逻辑
    const gameDashboard = document.getElementById('gameDashboard');
    gameDashboard.innerHTML = `
        <p style="color: red; font-weight: bold;">[功能启动] 策略游戏模式已激活。请在实际部署时，在 script.js 中完善游戏逻辑。</p>
        <p>游戏目标：通过管理「精力」、「洞察力」和「信用值」，在有限时间（回合）内成功拿到教授的内诺。</p>
        <p>当前状态：精力：10 / 洞察：5 / 信用：0</p>
    `;
}
// ... (此处省略其他游戏逻辑函数的具体实现，但它们应存在于完整的 script.js 文件中。)
