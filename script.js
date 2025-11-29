// ===============================================
// 1. 全局状态与配置 (Global State & Configuration)
// ===============================================

// 静态内容数据，用于左侧菜单展示 (内容已整合文件信息并精炼)
const contentMap = {
    strength: {
        title: "核心优势：以破绽为支点 (逻辑重构)",
        content: `
            <div class="detail-card">
                <h3>🔍 认知差破局策略 (东大基准)</h3>
                <p>我们提供的不是信息差，而是认知差。用「东大基准」的逻辑重构来做「升维打击」——将研究计划视为心理博弈的工具 [cite: 437, 438, 442, 488, 489]。</p>
                <p><strong>东大修士的逻辑重构：</strong> 文科叙事能力与理科逻辑结构相融合，确保你的研究课题具备跨学科视野 [cite: 437, 438]。</p>
            </div>
            <div class="detail-card">
                <h3>🛡️ 教授心理学博弈 (Professor Psychology)</h3>
                <p>辅导深入到教授的「本音（Hon-ne）」——他们真正在乎的能力指标，帮助你在文书中提前消除教授的隐性担忧 [cite: 438]。</p>
                <p><strong>核心目标：</strong> 将你从“申请者”转化为教授未来项目中的“潜在协作者” [cite: 485, 488]。</p>
            </div>
        `
    },
    model: {
        title: "辅导模式与价值承诺 (透明且靠谱)",
        content: `
            <div class="detail-card">
                <h3>💎 模式一：个人精细化定制</h3>
                <p>区别于大机构的流水线，提供文书、模拟面试、研究方向确定等全套深度定制服务 [cite: 438, 481, 412]。</p>
            </div>
            <div class="detail-card">
                <h3>💸 模式二：免费模式（渠道方合作）</h3>
                <p><strong>透明商业逻辑：</strong> 通过我推荐进入合作私塾或语校，机构支付的介绍费即覆盖您的全部辅导费。您无额外支出，享受高端一对一咨询服务 [cite: 435, 436, 469, 411]。</p>
                <p><strong>联系方式：</strong> 细节请加微信 <strong>qiuwu999</strong> 沟通 。</p>
            </div>
        `
    },
    cases: {
        title: "成功案例 / 系统性思考 (熵增与行动)",
        content: `
            <div class="detail-card">
                <h3>📚 案例精选：双非逆袭与专业跨界</h3>
                <p>许多成功案例的核心逻辑是：用高分语言成绩（托福/N1）+东大基准的研究计划，覆盖了GPA和出身校的劣势 [cite: 442, 488]。</p>
                <p>我们擅长帮助「法学背景转经济修士」或「非名校转旧帝大」等高难度挑战 [cite: 447, 487]。</p>
            </div>
            <div class="detail-card">
                <h3>🌍 留学大环境下的深度思考：熵增原理</h3>
                <p><strong>熵增原理警告：</strong> 留学大环境的不确定性增加。要将精力集中到自身「可控」的增量行动上。行动是最好的药 [cite: 472, 423]。</p>
            </div>
        `
    }
};

let game = null; // 用于游戏模拟的状态管理

// ===============================================
// 2. UI 交互函数 (仅保留 DOM 操作)
// ===============================================

// 这些函数保持原样，负责界面的切换和内容的渲染 (在实际文件中需完整保留)
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
// 3. 【核心逻辑】专业咨询与灵活应答模块
// ===============================================

/**
 * 处理非专业、幽默或不靠谱的提问，并进行专业化引导。
 * @param {string} query - 用户输入
 * @returns {string | null} - 幽默回复或 null
 */
function handleNonSeriousQuery(query) {
    const q = query.toLowerCase();
    const funnyKeywords = ["好吃", "可爱", "帅", "美", "八卦", "谈恋爱", "是谁", "机器人", "程序", "闲聊", "搞笑"];

    if (funnyKeywords.some(k => q.includes(k))) {
        // 使用一个带有「人味」的幽默回复，但立刻拉回专业主题
        return `感谢您的关心！秋武老师（WeChat ID: qiuwu999）是<strong>东大修士毕业，10年经验</strong>的现役老师 。我们不进行「闲聊」或「评判长相/味道」，只解决具体的升学问题 [cite: 439, 477]。<br><br>
        如果您对<strong>研究计划构建、教授心理博弈或费用模式</strong>感兴趣，请直接提问。如果您想进一步沟通，请加微信 <strong>qiuwu999</strong> 咨询 。`;
    }
    return null;
}


/**
 * 根据用户输入生成深度心理学/文化适应性洞察
 * @param {string} query - 用户输入
 * @returns {string | null} - 深度解析或 null
 */
function generatePsychologicalInsight(query) {
    const q = query.toLowerCase();

    // 1. 识别焦虑/情绪关键词
    const psychologicalKeywords = ["焦虑", "压力", "内耗", "迷茫", "没自信", "不安", "拖延", "情绪", "想放弃"];
    if (psychologicalKeywords.some(k => q.includes(k))) {
        return `【人因工程学洞察】你感受到的「焦虑/压力」，本质是认知资源被分散、行动向量不明确的信号 [cite: 472]。
        <br><br>
        <strong>专业建议：</strong> 焦虑源于「想得多，做得少」。把大目标拆解成<strong>今天的最小化、不可再分割的小任务</strong>。完成小任务的成就感是治疗焦虑的良药 [cite: 472, 423]。行动是唯一能够对抗不确定性的工程学方法。`;
    }

    // 2. 识别文化/博弈关键词
    const culturalKeywords = ["面试", "读空气", "本音", "建前", "教授关系", "失败", "落榜", "浪人"];
    if (culturalKeywords.some(k => q.includes(k))) {
        if (q.includes("失败") || q.includes("落榜")) {
             return `【心理重建与策略复盘】「失败」只是**First Attempt In Learning (FAIL)** [cite: 475]。它说明策略或匹配度有误，而非你能力不足。
             <br><br>
             <strong>策略核心：</strong> 不要盲目焦虑，应立即进行「复盘」：调整方向（换学校/修计划书），再次挑战。我的经验是：只要坚持，总有一所好大学适合你 [cite: 475]。`;
        }
        return `【文化心理学解析 - 精英博弈】面试的本质是对你<strong>「读空气（Kuuki o Yomu）」</strong>能力的**压力测试** 。教授的「本音（Hon-ne）」绝不会轻易通过「建前（Tatemae）」暴露。
        <br><br>
        <strong>策略核心：</strong> 展现「人味知性」。用严谨的逻辑回答，同时通过姿态和眼神传递「我是可信赖的、高潜力的协作者」的信号 [cite: 502]。`;
    }

    return null; // Fallback
}


/**
 * 根据用户输入生成 AI 响应 (整合了文件中的Q&A数据)
 * @param {string} userInput - 用户输入
 * @returns {string} - AI的响应文本
 */
function getAIResponse(userInput) {
    const lowerInput = userInput.toLowerCase();

    // 1. 【优先级最高】幽默/非专业问题处理 (确保灵活度和专业引导)
    const nonSeriousResponse = handleNonSeriousQuery(userInput);
    if (nonSeriousResponse) {
        return nonSeriousResponse;
    }

    // 2. 【优先级次高】心理与文化洞察 (专业分析)
    const psychologicalResponse = generatePsychologicalInsight(lowerInput);
    if (psychologicalResponse) {
        return psychologicalResponse;
    }

    // 3. SNS 评论模式检测 (保持不变)

    // 4. 关键词匹配 (中肯基础信息) - 整合文件中的关键回复
    if (lowerInput.includes('费用') || lowerInput.includes('收费') || lowerInput.includes('价格')) {
        return `【费用模式】我们强烈推荐<strong>“免费模式”</strong>：通过我推荐进入合作私塾或语校，机构支付的介绍费即覆盖您的全部辅导费 [cite: 435, 411]。
        <br><br>
        <strong>商业逻辑透明：</strong> 您省钱，机构获客，我获益，三方共赢，无任何隐形消费或套路 [cite: 436]。
        <br>
        <strong>细节请加微信：qiuwu999</strong> 沟通 [cite: 435, 477]。`;
    }
    if (lowerInput.includes('双非') || lowerInput.includes('gpa') || lowerInput.includes('出身校')) {
        return `【双非/GPA破局】出身校是既定事实，不要内耗 。
        <br>
        <strong>策略是：</strong> 必须用高品质的研究计划书 + 高分语言成绩（N1/托福）来覆盖背景劣势 [cite: 442, 488]。双非逆袭东大的案例每年都有，关键看你怎么“秀肌肉” 。`;
    }
    if (lowerInput.includes('微信') || lowerInput.includes('联系方式') || lowerInput.includes('沟通')) {
        return `【联系方式】秋武老师微信ID是：<strong>qiuwu999</strong> 。
        <br><br>
        <strong>咨询请直接说明：</strong> 出身校、专业、日语/英语成绩、意向学校。我们不闲聊，只解决具体的升学问题 [cite: 439, 477]。`;
    }
    if (lowerInput.includes('优势') || lowerInput.includes('特点') || lowerInput.includes('你是谁')) {
        return `【核心优势】秋武老师是<strong>东大修士毕业，10年辅导经验</strong> 。
        <br>
        <strong>核心特点：</strong> 个人精细化辅导，专注攻克最难的「研究计划构建」和「教授心理博弈」[cite: 438]。我们提供「文理融合」的跨学科视角和「东大基准」的逻辑重构 。`;
    }
    if (lowerInput.includes('跨专业') || lowerInput.includes('转专业')) {
        return `【跨专业策略】不要「裸转」 [cite: 447]。
        <br>
        <strong>策略核心：</strong> 寻找原专业与新专业的「结合点」[cite: 447]。利用原专业的工具（统计/编程/语言）来研究新领域，是跨考成功的核心逻辑 [cite: 447, 491]。`;
    }

    // 5. 默认回复 (中肯引导并强调联系方式)
    return `我没有在您的提问中检测到特定关键词。为了提高效率和专业性，请尝试输入以下：<br>
    - <strong>留学要素关键词：</strong> 费用、双非、GPA、面试、跨专业<br>
    - <strong>心理/情绪关键词：</strong> 焦虑、压力、迷茫<br>
    <br>
    升学是一场信息战，也是一场心理战。<strong>不贩卖焦虑，只解决问题。</strong> <br>
    <strong>更多细节请加微信：qiuwu999 详聊。</strong> `;
}

// ===============================================
// 4. 策略游戏逻辑 (Game Simulation Logic) - 保持结构
// ===============================================
// ... (此处的游戏逻辑函数在实际文件中应是完整的)
