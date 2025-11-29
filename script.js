// ===============================================
// 1. 全局状态与配置 (Global State & Configuration)
// ===============================================

// 静态内容数据：深度融合“秋武特色”和数据分析结果
const contentMap = {
    strength: {
        title: "🔥 核心优势：构建『核心竞争力』提炼系统", // [优化点] 认知差破局 -> 核心竞争力提炼
        content: `
            <div class="detail-card">
                <h3>🔍 核心竞争力：让教授一眼认定你 (东大基准)</h3>
                <p>我们提供的不是信息差，而是**核心竞争力提炼**。通过运用**东大基准逻辑重构**，将研究计划书打造为一份具备文科叙事和理科严谨度的**“高价值学术提案”**。目标：让教授在众多申请者中，清晰地判断出您是**值得投入精力的潜在研究伙伴**。</p> </div>
            <div class="detail-card">
                <h3>🛡️ 教授心理与文化适应 (避免踩雷)</h3>
                <p>我们的辅导会深入剖析日本教授的**『本音（真实期待）』**与**『建前（表面说辞）』**。这能帮学生提前消除教授的隐性顾虑，并在高压面试中展现出**高文化适应性**和**高情商的学术素养**。</p> </div>
        `
    },
    model: {
        title: "💎 辅导模式：透明、中肯、定制化服务",
        content: `
            <div class="detail-card">
                <h3>模式一：个人精细化定制 (不走流水线)</h3>
                <p>我们彻底区别于大机构的广撒网式辅导。我们只提供**个人精细化一对一服务**，重点解决最难、最具决定性的**逻辑重构**问题。包括：文理融合的研究方向定位、高水平研究计划书的撰写，以及文化心理学模拟面试演练。</p>
            </div>
            <div class="detail-card">
                <h3>模式二：零成本模式（三方共赢）</h3>
                <p><strong>商业逻辑透明：</strong> 通过我推荐进入合作私塾或语言学校后，机构支付的介绍费即覆盖您的全部辅导费。您**无需额外支出**，即可享受高端定制咨询。这是一种**三方共赢**的价值模式。</p>
                <p><strong>联系方式：</strong> 细节和定制方案请加微信 <strong>qiuwu999</strong> 沟通。</p>
            </div>
        `
    },
    cases: {
        title: "📚 破局行动指南：聚焦『可量化提升』，避免内耗", // [优化点] 抓住『可控增量』，停止内耗
        content: `
            <div class="detail-card">
                <h3>📈 背景提升策略与跨专业策略 (底层逻辑)</h3> <p>成功案例的核心逻辑非常单纯：用**高分语言成绩**（托福/N1）+ **东大基准的独特研究计划**，来实现对背景的**『逻辑重构视角』**下的提升。我们尤其擅长帮助学生找到**跨专业的知识结合点**，将劣势转化为复合型人才的优势。</p> </div>
            <div class="detail-card">
                <h3>⏳ 面对不确定性：行动是唯一的确定性</h3>
                <p>留学竞争加剧是系统性趋势，**原地内耗是最大的时间成本**。最中肯的解法是：**把精力全部集中到自身『可量化』的提升行动上**（例如打磨研究计划书的质量）。请停止吸收冗余信息，用高效的行动去抵抗不确定性。</p> </div>
        `
    }
};

let responseHistory = []; 
const MAX_HISTORY = 5; 
let psychologicalCounter = 0; 

// 咨询互动提示数据
const suggestedPrompts = [
    "背景劣势/GPA低如何破局？",
    "面试时教授的真实期待是什么？",
    "跨专业转经济有希望吗？",
    "我感到压力/迷茫，该怎么办？" // [优化点] 焦虑/内耗 -> 压力/迷茫
];

// 外部链接配置 (仅作为右下角提示，不在主体内容中出现平台字眼)
const externalLinks = [
    { name: "知乎 (Zhihu)", url: "https://www.zhihu.com/placeholder" }, 
    { name: "B站 (Bilibili)", url: "https://space.bilibili.com/placeholder" } 
];


// ===============================================
// 2. UI 交互函数
// (此部分保持不变，确保稳定性)
// ===============================================

function showChatSection(isChat) {
    // 聊天和内容区互斥显示
    document.getElementById('chatSection').classList.toggle('hidden', !isChat);
    document.getElementById('contentSection').classList.add('hidden');
    // 游戏/策略区也必须隐藏，防止冲突
    const gameSection = document.getElementById('gameSection');
    if (gameSection) gameSection.classList.add('hidden');
    
    const backBtn = document.querySelector('.menu-back-btn');
    if (backBtn) backBtn.classList.toggle('hidden', isChat);
}

function showContent(contentKey) {
    const content = contentMap[contentKey];
    if (content) {
        document.getElementById('chatSection').classList.add('hidden');
        // 游戏/策略区也必须隐藏
        const gameSection = document.getElementById('gameSection');
        if (gameSection) gameSection.classList.add('hidden');

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

function copyTextToClipboard(text, showConfirmation = true) {
    const tempInput = document.createElement('textarea');
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    
    if (showConfirmation) {
        displayAIResponse(`[系统提示] 成功复制以下**高亮破局文案**到剪贴板！请直接粘贴到您的社交媒体。`, true); 
    }
}


function handlePromptClick(text) {
    const userInputField = document.getElementById('userInput');
    userInputField.value = text;
    userInputField.focus(); 
}

/**
 * 渲染提示标签和外部链接
 */
function renderPrompts() {
    const promptsContainer = document.getElementById('chatPrompts');
    const parentContainer = promptsContainer ? promptsContainer.parentNode : null;
    if (!promptsContainer || !parentContainer) return;

    // 1. 渲染咨询提示标签
    promptsContainer.innerHTML = suggestedPrompts.map(prompt => 
        `<span class="prompt-tag" onclick="handlePromptClick('${prompt.replace(/'/g, "\\'")}')">${prompt}</span>`
    ).join('');
    
    // 2. 添加外部链接 (强制右侧下方)
    const linksHTML = externalLinks.map(link => 
        `<a href="${link.url}" target="_blank" class="external-link">🌐 ${link.name}</a>`
    ).join('');
    
    // 创建链接容器
    const linkContainer = document.createElement('div');
    linkContainer.className = 'external-links-container';
    // 强制右对齐和样式
    linkContainer.style.cssText = 'text-align: right; padding: 5px 0; margin-top: 5px;'; 
    linkContainer.innerHTML = `<p style="font-size: 0.8em; color: #777; display: inline-block; margin-right: 10px;">外部洞察：</p>${linksHTML}`;
    
    // 将链接容器插入到 promptsContainer 后面
    if (!parentContainer.querySelector('.external-links-container')) {
        parentContainer.insertBefore(linkContainer, promptsContainer.nextSibling);
    }
}

/**
 * 统一强制滚动到底部
 */
function scrollToBottom() {
    const chatBody = document.getElementById('chatBody');
    if (chatBody) {
        setTimeout(() => {
             chatBody.scrollTop = chatBody.scrollHeight;
        }, 50); 
    }
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
    
    scrollToBottom(); 

    userInputField.value = '';

    setTimeout(() => {
        const aiResponse = getAIResponse(userText);
        const isSNS = aiResponse.startsWith('SNS::');

        displayAIResponse(aiResponse);

        if (isSNS) {
            const originalCommentHTML = aiResponse.replace('SNS::', '');
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = originalCommentHTML;
            const plainTextComment = tempDiv.textContent || tempDiv.innerText || '';
            
            setTimeout(() => {
                 copyTextToClipboard(plainTextComment.trim(), true); 
            }, 50); 
        }

        loadingIndicator.classList.add('hidden');
        scrollToBottom(); 
    }, 1200);
}

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
        bubbleContent = `<strong>【破局文案：已自动复制】</strong><br>${bubbleContent}`;
    } else if (responseText.includes('💬 秋武洞察：')) { 
          bubbleContent = responseText;
    } else if (isSystemMessage || responseText.startsWith('[系统提示]')) {
          bubbleClass = 'bubble system-bubble';
    }

    aiMessageDiv.innerHTML = `<div class="${bubbleClass}">${bubbleContent}</div>`;
    chatBody.appendChild(aiMessageDiv);
    scrollToBottom(); 
}


// ===============================================
// 3. 【核心逻辑】专业咨询与灵活应答模块 - 内容全面优化
// ===============================================

function handleNonSeriousQuery(query) {
    const q = query.toLowerCase();
    const funnyKeywords = ["好吃", "可爱", "帅", "美", "八卦", "谈恋爱", "是谁", "机器人", "程序", "闲聊", "搞笑"];

    if (funnyKeywords.some(k => q.includes(k))) {
        return `感谢您的关注！您可能是来找留学攻略的对吧？秋武老师（WeChat ID: qiuwu999）是<strong>东大修士毕业，10年经验</strong>的现役老师。咱们只聊「破局策略」。<br><br>
        <strong>中肯建议：</strong> 日本留学竞争激烈，时间非常宝贵。把精力集中到研究计划书上，**请将宝贵时间集中在最有价值的提升点上。**`; // [优化点] 浪费在不必要的纠结里 -> 集中在最有价值的提升点上
    }
    return null;
}


function generatePsychologicalInsight(query) {
    const q = query.toLowerCase();
    let response = null;
    psychologicalCounter++; 

    const psychologicalKeywords = ["焦虑", "压力", "内耗", "迷茫", "没自信", "不安", "拖延", "情绪", "想放弃"];
    if (psychologicalKeywords.some(k => q.includes(k))) {
        
        if (psychologicalCounter % 3 === 1) {
             response = `您感到**压力**或**迷茫**对不对？这是大脑在提醒您：**是时候给目标装个导航了！** 咱们别急着想终点，不妨把大目标切成几个「今天就能完成的小任务」。您会发现，**聚焦行动，比原地担忧更具确定性。**`; // [优化点] 焦虑 -> 压力/迷茫, 小小的行动... -> 聚焦行动...
        } else if (psychologicalCounter % 3 === 2) {
             response = `其实，咱们亚洲学生常会陷入一种「过度自我纠结」的状态，就是怕犯错。但请记住：**留学申请路上的小挑战，不是失败的“果实”，而是下一次成功的“肥料”**。先从小处着手积累信心，心态自然就稳了。`;
        } else {
             response = `如果总觉得心烦意乱，可能是被**「信息噪音」**给拖着跑了。就像在一个嘈杂的菜市场想写论文！咱们**暂时关闭掉不必要的信息输入**，把精力拉回到最有价值的地方：**您那份独一无二的研究计划书**。心静了，效率自然就高了。`;
        }
        return `💬 秋武洞察：${response}`;
    }

    const culturalKeywords = ["面试", "读空气", "本音", "建前", "教授关系", "失败", "落榜", "浪人", "答辩", "草稿"];
    if (culturalKeywords.some(k => q.includes(k))) {
        
        if (psychologicalCounter % 2 === 1) {
            response = `【教授答辩的秘诀】面试的底层逻辑是**「终局思维」倒推法**。教授最想听的不是你的研究内容，而是你**“毕业后的打算、目标或梦想”**。然后，你再倒推出你在大学的学习计划，展示清晰的**『学以致用』**逻辑链。`; // [优化点] 倒推法 -> 终局思维倒推法
        } else {
            response = `【日本文化心理小课堂】日本面试存在**『本音（真实期待）』**和**『建前（表面说辞）』**的博弈。教授的真实期待是：你是否具备**文化适应性**和**独立完成研究的行动力**。我们的辅导核心，就是帮助您展现这种**「高情商学术素养」**。`; // [优化点] 人味知性 -> 高情商学术素养
        }
        return `💬 秋武洞察：${response}`;
    }
    
    return null; 
}

// ===============================================
// 【新增】高质量Q&A：费用置换模块
// ===============================================
function handleFeeExchangeQuery(lowerInput) {
    
    // Q1: 零成本模式到底是什么？
    if (lowerInput.includes('零成本') || lowerInput.includes('模式是什么') || lowerInput.includes('免费吗') || lowerInput.includes('隐形消费')) {
        return `**【秋武洞察：直面焦虑，高透明度】**<br>您问得非常中肯，不问清楚才是浪费时间！我来给您讲透这背后的商业逻辑，让您完全放心。<br><br>▶ **答案：** 这个模式对您而言，**是真正的“零成本”**，因为您的辅导费被**“置换”**了。我们是渠道方，通过我推荐进入合作的私塾或语言学校后，机构会支付我一笔**介绍费**。这笔介绍费，**就是用来抵扣您在我这里的全部高端咨询和辅导费**。<br><br>▶ **透明度保证：** 这是**三方共赢**的价值模式：您省钱（零额外支出），机构获客，我获益。整个过程**无任何隐形消费、套路或合同陷阱**。我们不玩信息差，只提供**认知差**，所以请您把精力集中在研究计划书上，**别在费用上内耗！**`; 
    }

    // Q2: 推荐的机构靠谱吗？是否强制？
    if (lowerInput.includes('推荐') && (lowerInput.includes('私塾') || lowerInput.includes('语校') || lowerInput.includes('机构') || lowerInput.includes('强制'))) {
        return `**【秋武洞察：专业分工，选择权在您】**<br>是的，选择这个模式的前提是，您通过我的渠道进入合作机构。但请注意，**选择权永远在您手中**，我们只推荐我们**长期合作、专业能力和口碑都经过验证**的机构。<br><br>▶ **专业分工：** 我们的核心价值是**『逻辑重构』**（即东大基准的研究计划和面试辅导）。**私塾或语言学校解决的是『流程管理』**（如语言、基础EJU课程）。这是功能不重叠的专业分工。<br><br>▶ **安心建议：** 我们绝不强推。如果您对推荐的机构有任何疑虑，都可以随时与我深度沟通。**我们是您的战略顾问，不是销售。**`;
    }

    // Q3: 只找老师辅导的价格
    if (lowerInput.includes('单独辅导') || lowerInput.includes('只找你') || lowerInput.includes('价格') || lowerInput.includes('收费') || lowerInput.includes('费用')) {
        return `**【秋武洞察：尊重选择，聚焦价值】**<br>完全可以。辅导的核心价值是**「东大基准的逻辑重构」**，我们尊重所有客户的选择。<br><br>▶ **单独辅导：** 平时辅导可以单独收费，我们会根据您需要的具体项目（如：文书/模拟面试/全套项目）提供不同价位。<br><br>▶ **项目价值：** 我们的收费标准对标的是**个人精细化一对一辅导**的价值，区别于大机构的流水线作业。<br><br>▶ **下一步：** 建议您加微信 **qiuwu999**，**直接说明您的出身校、专业、现有成绩和意向学校**，我们会快速为您评估最合适的定制化方案，并给出最中肯的报价。`;
    }

    return null;
}
// ===============================================


function getAIResponse(userInput) {
    let cleanInput = userInput.trim().replace(/^['"”‘“\s]+|['"”‘“\s]+$/g, '');
    const lowerInput = cleanInput.toLowerCase();
    let response = null;

    responseHistory.unshift(userInput);
    if (responseHistory.length > MAX_HISTORY) {
        responseHistory.pop();
    }

    // 1. 非严肃/闲聊处理
    response = handleNonSeriousQuery(cleanInput);
    if (response) return response;

    // 2. SNS评论生成处理
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
        content = cleanInput.substring(prefixLength).trim();
        if (content.startsWith('：') || content.startsWith(':')) {
            content = content.substring(1).trim();
        }
        
        if (content) {
            return generateSnsComment(content);
        }
        return generateSnsComment("请在指令后输入帖子内容，我将为您生成专业的破局文案。");
    }

    // 3. 心理/文化洞察处理
    response = generatePsychologicalInsight(lowerInput);
    if (response) return response;

    // 4. 【新增】费用/零成本模式处理
    response = handleFeeExchangeQuery(lowerInput);
    if (response) return response;

    // 5. 关键词匹配 (中肯基础信息)
    
    // 答辩草稿/一问一答式辅导
    if (lowerInput.includes('答辩') || lowerInput.includes('草稿') || lowerInput.includes('一问一答')) {
        return `【核心服务：终局思维答辩辅导】是的，**「一问一答式教授答辩草稿辅导」**是我们的核心项目。
        <br>
        ▶ <strong>辅导逻辑：</strong> 我们采用**『终局思维』倒推法**，从**“你毕业后的目标”**反推你在大学的学习计划。这样可以确保你的回答逻辑完整，具备**『学以致用』**的强大支撑，有效消除教授对你学习动机的顾虑。
        <br>
        ▶ <strong>服务项目：</strong> 文书、模拟面试、全套项目均包含此核心逻辑辅导。详情请加微信 <strong>qiuwu999</strong> 沟通项目价位。`; // [优化点] 倒推法 -> 终局思维倒推法
    }

    // 优势/特点/背景
    if (lowerInput.includes('优势') || lowerInput.includes('特点') || lowerInput.includes('你是谁') || lowerInput.includes('背景') || lowerInput.includes('辅导方式')) {
        return `【秋武老师：核心优势】
        <br>
        ▶ <strong>稀缺背景：</strong> 东大修士毕业，10年辅导经验现役老师。
        ▶ <strong>服务价值：</strong> **个人精细化一对一辅导**，不走大机构流水线。我们提供的核心是**「东大基准」**的**逻辑重构**和**「文理交叉」**视角，帮您**精准定位**，实现**可量化提升**。
        <br>
        只接能通过**『破局系统』**实现跃迁的学生。`; // [优化点] 避免走弯路、切入破局增量 -> 精准定位、可量化提升
    }
    
    // 私塾/多此一举
    if (lowerInput.includes('私塾') || lowerInput.includes('多此一举') || lowerInput.includes('为什么要')) {
        return `【专业分工】<strong>私塾是『流程管理』，秋武老师是『逻辑重构』。</strong>
        <br>
        1. <strong>私塾/大机构：</strong> 解决**标准化流程**（如语言课、基础知识），是**『广度』**。
        2. <strong>秋武老师：</strong> 解决**底层逻辑缺陷**和**教授心理博弈**，提供**「认知差」**和**「逻辑重构」**，是**『深度』**。
        <br>
        二者功能不重叠。我们只解决最难、最核心的**『破局增量』**问题。`; // [优化点] 升维打击 -> 逻辑重构
    }
    
    // 双非/GPA
    if (lowerInput.includes('双非') || lowerInput.includes('gpa') || lowerInput.includes('出身校') || lowerInput.includes('背景差')) {
        return `【背景劣势破局】出身校是既定事实，**请停止内耗**。<strong>策略核心：</strong> 必须用高品质的**研究计划书**（实现认知差）+ 高分语言成绩（N1/托福），对背景进行**『逻辑重构视角』**下的**背景提升**。这是背景劣势逆袭的**唯一底层逻辑**。`; // [优化点] 不要原地纠结 -> 请停止内耗, 升维打击 -> 逻辑重构视角下的背景提升
    }
    
    // 跨专业
    if (lowerInput.includes('跨专业') || lowerInput.includes('转专业')) {
        return `【跨专业策略】跨考不是「裸转」。<strong>策略核心：</strong> 必须找到原专业与新专业的**「结合点」**。例如，法学转经济，应强调利用**法律框架**和**逻辑思维**来分析经济问题，将劣势转化为**复合型人才**的优势。`;
    }
    
    if (lowerInput.includes('微信') || lowerInput.includes('联系方式') || lowerInput.includes('沟通')) {
        return `【联系方式】秋武老师微信ID是：<strong>qiuwu999</strong>。<strong>咨询请直接说明：</strong> 出身校、专业、日语/英语成绩、意向学校。我们不闲聊，只解决具体的升学问题。`;
    }
    
    if (lowerInput.includes('你好') || lowerInput.includes('在吗')) {
        return `你好！我是秋武老师的助手。您好不容易找到我，**请别客气，直接把您的核心问题告诉我吧**（比如：**背景劣势、跨专业、面试**）。咱们只聊破局策略，不闲聊！**需要定制化方案请加微信：qiuwu999 详聊。**`;
    }

    // 6. 默认回复 (亲和力引导)
    return `留学申请就像一场高阶博弈，请聚焦于核心问题。您的问题可能缺乏关键词，不妨试试输入以下 <strong>「破局要素」</strong>：
    <br><br>
    ▶ <strong>留学挑战：</strong> 背景劣势、GPA低、面试、跨专业、**零成本模式**<br>
    ▶ <strong>心态困惑：</strong> 压力、迷茫、内耗
    <br><br>
    <strong>记住：不贩卖焦虑，只解决问题。</strong><br>
    <strong>需要定制化的破局方案，请加微信：qiuwu999 详聊。</strong>`;
}


function generateSnsComment(content) {
    const briefContent = content.substring(0, 30).trim() + (content.length > 30 ? '...' : '');

    let insight = '';
    if (content.includes("焦虑") || content.includes("迷茫") || content.includes("内耗")) {
        insight = "「温和提醒」：别在评论区里「**内耗**」啦！焦虑是提醒您该行动了。不妨现在就拿出研究计划书，完成一个「最小化行动」吧。**聚焦行动，比原地担忧更具确定性。**"; // [优化点] 自我纠结 -> 内耗, 行动... -> 聚焦行动...
    } else if (content.includes("GPA") || content.includes("双非") || content.includes("背景")) {
        insight = "「逻辑重构破局」：背景劣势是既定事实。破局不在于抱怨，而在于用**『东大基准』**的研究计划进行**『逻辑重构视角』**下的**背景提升**。这是最中肯的升学策略。"; // [优化点] 认知差破局, 升维打击 -> 逻辑重构破局, 逻辑重构视角下的背景提升
    } else if (content.includes("教授") || content.includes("面试") || content.includes("关系")) {
        insight = "「文化心理博弈」：教授看重你的『潜在研究能力』与『文化适应性』。文案要展现逻辑穿透力，强调你是能理解日本**『本音 (真实期待) vs 建前 (表面说辞)』**的潜在协作者。"; // [优化点] 本音 vs 建前 解释更清晰
    } else if (content.includes("转专业") || content.includes("跨考")) {
        insight = "「文理融合策略」：跨考不是『裸转』。评论要强调寻找原专业与新专业的**『结合点』**，例如：**法学转经济**要突出利用现有**法律框架**分析经济数据。这是高效的破局路径。";
    } else {
        insight = "「系统分析」：留学申请越来越像一场**『高阶博弈』**。建议保持一份**「游刃有余的节奏感」**（遊び感覚），别被大环境的喧嚣影响。抓住**『核心竞争力提炼』**这个核心，才能轻松破局。"; // [优化点] 认知差 -> 核心竞争力提炼
    }

    const comment = `
        <strong>【秋武老师 · 破局点评】</strong><br>
        针对帖子内容：“${briefContent}”<br><br>
        <strong>专业建议：</strong> ${insight}<br>
        &mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;<br>
        <strong>秋武老师（东大修士）</strong> 只解决具体的升学问题。如果你想获取定制化的破局方案，请加微信 <strong>qiuwu999</strong> 咨询。
    `;

    return `SNS::${comment}`;
}

// ===============================================
// 4. 【加固】AI 策略模拟模块占位函数 (保持不变，确保稳定性)
// ===============================================
function startGameSimulation() {
    alert("【秋武顾问】『AI 升学破局模拟』功能为定制化付费服务。请加微信 qiuwu999 获取您的专属模拟策略训练方案。");
    // 如果 HTML 中存在 gameSection，执行隐藏和占位操作
    const gameSection = document.getElementById('gameSection');
    if (gameSection) {
        // 确保点击后显示游戏区内容并隐藏开始按钮
        const dashboard = document.getElementById('gameDashboard');
        const expandBtn = gameSection.querySelector('.btn-expand');
        
        gameSection.classList.remove('hidden');
        document.getElementById('contentSection').classList.add('hidden'); 
        document.getElementById('chatSection').classList.add('hidden');
        
        // 替换内容
        if (gameSection.querySelector('h2')) gameSection.querySelector('h2').textContent = '🎯 策略模拟：请联系顾问获取权限';
        if (gameSection.querySelector('p')) gameSection.querySelector('p').innerHTML = '<strong>功能已锁定。</strong> 请加微信 <strong>qiuwu999</strong> 获取您的专属策略训练。';
        if (expandBtn) expandBtn.style.display = 'none';
        if (dashboard) dashboard.innerHTML = '<p style="color: red; padding: 20px;">请勿在关键升学期进行随机测试，策略模拟需要基于您的真实背景和目标学校进行定制化设计。</p>';
    }
}


// ===============================================
// 5. 页面初始化 (Initialization) - 保持不变，确保稳定性
// ===============================================
window.onload = function() {
    try {
        // 1. 初始化时渲染咨询提示标签及外部链接
        renderPrompts(); 

        // 2. **【关键修复：彻底清除箭头、游戏按钮和外部平台字眼】**
        const allElements = document.querySelectorAll('button, div, a, span, p, h1, h2, h3');
        allElements.forEach(el => {
            try {
                const style = window.getComputedStyle(el);
                const position = style.getPropertyValue('position');
                const content = el.textContent || el.innerHTML;
                const lowerContent = content.toLowerCase();

                // 策略A: 移除所有浮动/固定/绝对定位的箭头或滚动按钮
                if (position === 'fixed' || position === 'absolute') {
                    if (lowerContent.includes('▲') || lowerContent.includes('▼') || lowerContent.includes('↑') || lowerContent.includes('↓') || lowerContent.includes('scroll') || lowerContent.includes('顶部') || el.classList.contains('scroll-arrow') || el.classList.contains('scroll-to-bottom')) {
                        if (el.parentNode) {
                            el.parentNode.removeChild(el); 
                        }
                    }
                }
                
                // 策略B: 移除包含特定“游戏/策略”关键词的元素
                // 由于我们清除了HTML，这里主要处理残余或动态生成的内容
                if (lowerContent.includes('升学破局') && lowerContent.includes('策略') && lowerContent.includes('游戏') && !el.classList.contains('message')) {
                     if (el.parentNode) {
                         el.parentNode.removeChild(el); 
                     } else {
                         el.style.display = 'none'; 
                     }
                }
                
                // 策略C: 移除或隐藏包含外部平台名称的元素
                if (lowerContent.includes('微信') || lowerContent.includes('知乎') || lowerContent.includes('哔哩哔哩') || lowerContent.includes('b站') || lowerContent.includes('公众号')) {
                     if (!lowerContent.includes('qiuwu999') && !el.classList.contains('external-link') && !el.classList.contains('message') && !el.classList.contains('bubble')) {
                         el.style.display = 'none'; 
                     }
                }
            } catch (e) {
                // 捕获单个元素处理错误，防止页面崩溃
                console.error("Error processing element in cleanup:", e);
            }
        });


        // 3. 【关键滚动修复】确保聊天主体和整个应用容器的滚动保障
        const chatBody = document.getElementById('chatBody');
        const appContainer = document.querySelector('.app-container') || document.body; 

        if (chatBody) {
            // 强制聊天框内容区域可滚动
            chatBody.style.overflowY = 'auto'; 
            chatBody.style.flexShrink = '1';
            chatBody.style.minHeight = '0';
            chatBody.style.maxHeight = 'calc(100vh - 120px)';
            chatBody.style.webkitOverflowScrolling = 'touch';
        }
        
        // 确保整个应用容器可以滚动
        appContainer.style.overflowY = 'auto'; 
        appContainer.style.height = '100%';
        
    } catch (error) {
        // 捕获整个初始化流程的错误，并记录
        console.error("Critical error during window initialization (onload):", error);
    }
};
