// ===============================================
// 1. 全局状态与配置 (Global State & Configuration)
// ===============================================

// 静态内容数据，用于左侧菜单展示，确保信息源的权威性
const contentMap = {
    strength: {
        title: "核心优势：以破绽为支点 (逻辑重构)",
        content: `
            <div class="detail-card">
                <h3>🔍 认知差破局策略 (Cognitive Gap Strategy)</h3>
                <p>我们提供的不是信息差，而是认知差。许多学生只关注GPA、语言等“可见”的劣势，却忽略了用“东大基准”的逻辑重构来做“升维打击”——将研究计划视为心理博弈的工具。</p>
                <p><strong>东大修士的逻辑重构：</strong> 将文科的叙事能力与理科的逻辑结构相融合，确保你的研究课题具备跨学科视野，能引起任何领域教授的兴趣。这能有效覆盖你背景中的既定劣势。</p>
            </div>
            <div class="detail-card">
                <h3>🛡️ 教授心理学博弈 (Professor Psychology)</h3>
                <p>日本教授在招生时，除了看硬性成绩，更看重学生的「潜在研究能力」与「文化适应性」。我们的辅导深入到教授的「本音（Hon-ne）」——他们真正在乎的能力指标，帮助你在文书中提前消除教授的隐性担忧。</p>
                <p><strong>核心目标：</strong> 将你从“申请者”转化为教授未来项目中的“潜在协作者”。</p>
            </div>
        `
    },
    model: {
        title: "辅导模式与价值承诺 (透明且靠谱)",
        content: `
            <div class="detail-card">
                <h3>💎 模式一：个人精细化定制</h3>
                <p>区别于大机构的流水线，我只接能够通过“东大基准”逻辑重构实现“破局”的学生。提供文书、模拟面试、研究方向确定等全套深度定制服务。</p>
                <p><strong>价值承诺：</strong> 确保你获得的不只是Offer，而是未来3-5年在日本的生存与发展策略。服务过程强调“人味知性”：冰冷的逻辑与温暖的关怀并存。</p>
            </div>
            <div class="detail-card">
                <h3>💸 模式二：免费模式（渠道方合作）</h3>
                <p>商业逻辑透明：通过我推荐进入合作私塾或语校，机构支付的介绍费即覆盖您的全部辅导费。您无额外支出，享受高端一对一咨询服务。这是一种三方共赢的透明商业逻辑。</p>
            </div>
        `
    },
    cases: {
        title: "成功案例 / 系统性思考 (熵增与行动)",
        content: `
            <div class="detail-card">
                <h3>📚 案例精选：双非逆袭与专业跨界</h3>
                <p>许多成功案例的核心逻辑并非是“运气”，而是学生执行了严格的“破局”策略：<strong>用高分语言成绩（托福/N1）+东大基准的研究计划，覆盖了GPA和出身校的劣势。</strong>我们擅长帮助“法学背景转经济修士”或“非名校转旧帝大”等高难度挑战。</p>
            </div>
            <div class="detail-card">
                <h3>🌍 留学大环境下的深度思考：熵增原理</h3>
                <p><strong>熵增原理警告：</strong> 留学大环境的竞争和不确定性正在增加（熵增）。面对这种不可逆的趋势，你需要做的不是焦虑，而是将精力集中到自身「可控」的增量行动上。行动是最好的药，能有效对抗焦虑带来的内耗。</p>
            </div>
        `
    }
};

let game = null; // 用于游戏模拟的状态管理

// ===============================================
// 2. UI 交互函数 (仅保留 DOM 操作，样式由 CSS 管理)
// ===============================================

// 这些函数保持原样，负责界面的切换和内容的渲染
function toggleMenu(showMenu) { /* ... DOM 操作 ... */ }
function showContent(contentKey) { /* ... DOM 操作 ... */ }
function backToMenu() { /* ... DOM 操作 ... */ }
function showChatSection(isChat) { /* ... DOM 操作 ... */ }
function handleKeyPress(event) { /* ... DOM 操作 ... */ }

function sendMessage() {
    const userInputField = document.getElementById('userInput');
    const chatBody = document.getElementById('chatBody');
    const userText = userInputField.value.trim();

    if (userText === '') return;

    // 1. 显示用户消息 (DOM 操作)
    const userMessageDiv = document.createElement('div');
    userMessageDiv.className = 'message user-message';
    userMessageDiv.innerHTML = `<div class="bubble">${userText}</div>`;
    chatBody.appendChild(userMessageDiv);

    // 2. 显示加载指示器 (DOM 操作)
    const loadingIndicator = document.getElementById('loadingIndicator');
    loadingIndicator.classList.remove('hidden');
    chatBody.scrollTop = chatBody.scrollHeight;

    userInputField.value = '';

    // 3. 模拟 AI 响应延迟并生成回复 (核心逻辑调用)
    setTimeout(() => {
        const aiResponse = getAIResponse(userText);
        displayAIResponse(aiResponse);

        // 4. 隐藏加载指示器 (DOM 操作)
        loadingIndicator.classList.add('hidden');
        chatBody.scrollTop = chatBody.scrollHeight;
    }, 1200);
}

function displayAIResponse(responseText) {
    const chatBody = document.getElementById('chatBody');
    const aiMessageDiv = document.createElement('div');
    aiMessageDiv.className = 'message ai-message';

    // 检查是否是 SNS 模式回复 (逻辑判断)
    const isSNS = responseText.startsWith('SNS::');
    let bubbleContent = responseText;
    let bubbleClass = 'bubble';

    if (isSNS) {
        bubbleContent = responseText.replace('SNS::', '');
        bubbleClass = 'bubble sns-comment-bubble';
        // 在内容中添加前缀，强调其专业性
        bubbleContent = `<strong>【破局点评：专业视角】</strong><br>${bubbleContent}`;
    } else if (responseText.includes('【人因工程学洞察】') || responseText.includes('【文化心理学解析】')) {
         // 为深度解析回复提供一个中肯的格式
         bubbleContent = `<span style="font-weight: 600; color: var(--color-primary-dark);">▶ 系统分析：</span> ${responseText}`;
    }

    aiMessageDiv.innerHTML = `<div class="${bubbleClass}">${bubbleContent}</div>`;
    chatBody.appendChild(aiMessageDiv);
    chatBody.scrollTop = chatBody.scrollHeight;
}

// ===============================================
// 3. 【核心优化】心理与文化洞察模块 (内核逻辑)
// ===============================================

/**
 * 根据用户输入生成深度心理学/文化适应性洞察
 * @param {string} query - 用户输入
 * @returns {string | null} - 深度解析或 null
 */
function generatePsychologicalInsight(query) {
    const q = query.toLowerCase();

    // 1. 识别焦虑/情绪关键词
    const psychologicalKeywords = ["焦虑", "压力", "内耗", "迷茫", "没自信", "不安", "拖延", "情绪"];
    if (psychologicalKeywords.some(k => q.includes(k))) {
        return `【人因工程学洞察】你感受到的${query.includes("焦虑") ? '「焦虑」' : '「压力/迷茫」'}，本质是认知资源被分散、行动向量不明确的信号。
        <br><br>
        <strong>专业建议：</strong> 避免陷入情绪的“熵增”陷阱。请立即执行**最小化行动**：将大目标拆解成**今天必须完成的、不可再分割的小任务**。例如，完成研究计划书的“文献摘要”而非“草稿”。行动是唯一能够对抗不确定性的工程学方法。`;
    }

    // 2. 识别文化/博弈关键词
    const culturalKeywords = ["面试", "读空气", "本音", "建前", "教授关系", "适应", "文化差异", "社交"];
    if (culturalKeywords.some(k => q.includes(k))) {
        return `【文化心理学解析 - 精英博弈】你提到了日本精英社交和学术中的核心壁垒。教授的**「本音（Hon-ne）」**（真心话）绝不会轻易通过「建前（Tatemae）」（场面话）暴露。面试的本质是对你**「读空气（Kuuki o Yomu）」**能力的**压力测试**。
        <br><br>
        <strong>策略核心：</strong> 你必须展现出**高情商的逻辑渗透能力**，即「人味知性」。用严谨的逻辑回答，同时通过姿态和眼神传递“我是可信赖的、高潜力的协作者”的信号。这是超越语言的**精英博弈**。`;
    }

    return null; // Fallback
}


/**
 * 根据用户输入生成 AI 响应
 * @param {string} userInput - 用户输入
 * @returns {string} - AI的响应文本
 */
function getAIResponse(userInput) {
    const lowerInput = userInput.toLowerCase();

    // 1. 【优先级最高】心理与文化洞察 (专业分析)
    const psychologicalResponse = generatePsychologicalInsight(lowerInput);
    if (psychologicalResponse) {
        return psychologicalResponse;
    }

    // 2. SNS 评论模式检测 (破局点评)
    if (lowerInput.startsWith('生成评论或回复：') || lowerInput.startsWith('生成评论或回复:') || lowerInput.startsWith('生成评论或回复')) {
        const content = userInput.substring(userInput.indexOf('：') > 0 ? userInput.indexOf('：') + 1 : 8).trim();
        if (content) {
            return `SNS::您希望对以下内容进行回复：“${content.substring(0, 30)}...”<br><br>
            <strong>中肯分析：</strong> 这种内容的回复需要体现**逻辑破局**和**文化适应**的双重价值。<br>
            <strong>建议回复框架：</strong> 避免使用情绪化语言。建议采取“先承认现状（建前），后给出破局行动（本音）”的结构。<br>
            <strong>推荐金句：</strong> “焦虑源于不确定性，用行动向量锁定你的目标。”或 “不纠结于既定劣势，将精力倾斜至研究计划的升维打击。”`;
        }
        return "SNS::请在 '生成评论或回复：' 后面输入您想要评论或回复的帖子内容，以便我进行专业点评。";
    }

    // 3. 关键词匹配 (中肯基础信息)
    if (lowerInput.includes('费用') || lowerInput.includes('收费')) {
        return "【费用模式】我们强烈推荐“免费模式”：通过我推荐进入合作私塾或语校，机构支付的介绍费即覆盖您的全部辅导费。这是三方共赢的透明商业逻辑。无额外支出，安全可靠。";
    }
    if (lowerInput.includes('双非') || lowerInput.includes('gpa')) {
        return "【双非/GPA破局】背景劣势是既定事实，不必内耗。破局策略是：必须用高分语言成绩（托福/N1）+东大基准的逻辑重构研究计划书，实现‘升维打击’。这是唯一的可靠路径。";
    }
    if (lowerInput.includes('优势') || lowerInput.includes('特点')) {
        return "【核心优势】区别于大机构流水线，我们提供个人精细化辅导，核心是提供‘文理融合’的跨学科视角和‘教授心理学博弈’策略。我们提供的是‘认知差’破局方案，而非基础信息。";
    }
    if (lowerInput.includes('游戏') || lowerInput.includes('模拟')) {
        return "【策略游戏模式】要体验‘AI 升学破局模拟’策略游戏，请点击左侧菜单栏中的 'AI 升学破局模拟 (策略游戏)' 按钮。这是一个严肃的策略训练工具。";
    }
    if (lowerInput.includes('你好') || lowerInput.includes('在吗')) {
        return "您好！我是您的 AI 留学咨询助理。请直接输入您的关键信息（出身校、成绩、意向）或感兴趣的关键词（如：费用、双非、优势）进行深度咨询。我们不闲聊，只提供专业解决方案。";
    }

    // 4. 默认回复 (中肯引导)
    return `我没有在您的提问中检测到特定关键词。为了提高效率和专业性，请尝试输入以下：<br>
    - <strong>留学要素关键词：</strong> 费用、双非、GPA、面试<br>
    - <strong>心理/情绪关键词：</strong> 焦虑、压力、迷茫<br>
    - <strong>专业指令：</strong> 生成评论或回复：[您的帖子内容]`;
}

// ===============================================
// 4. 策略游戏逻辑 (Game Simulation Logic) - 保持结构
// ===============================================

// 游戏模拟逻辑框架，保持功能完整
let student = {};
let gamePhase = 0;
let playerResources = { energy: 10, insight: 5, credit: 0 };
// ... 所有游戏模拟相关的函数 (startGameSimulation, endTurn, updateGameUI 等) 保持功能完整性。
// ... (此处省略游戏逻辑函数的具体实现，但它们应存在于完整的 script.js 文件中。)
