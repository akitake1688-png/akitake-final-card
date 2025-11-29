// script.js - 最终完整版 (包含所有交互、SNS模式和游戏模拟逻辑)

// --- 1. 全局UI元素引用 ---
const profileCover = document.getElementById('profileCover');
const menuList = document.getElementById('menuList');
const contentDetail = document.getElementById('contentDetail');
const dynamicContent = document.getElementById('dynamicContent');

const chatSection = document.getElementById('chatSection');
const chatBody = document.getElementById('chatBody');
const userInput = document.getElementById('userInput');
const loadingIndicator = document.getElementById('loadingIndicator');
const sendButton = document.getElementById('sendButton');

const gameSimulationSection = document.getElementById('gameSimulationSection');
const dashGPA = document.getElementById('dashGPA');
const dashJLPT = document.getElementById('dashJLPT');
const dashTOEFL = document.getElementById('dashTOEFL');
const dashCulturalAdaptability = document.getElementById('dashCulturalAdaptability');
const dashPsychologicalResilience = document.getElementById('dashPsychologicalResilience');
const dashLogicSkill = document.getElementById('dashLogicSkill');
const dashConfidence = document.getElementById('dashConfidence');
const dashAnxiety = document.getElementById('dashAnxiety');
const dashTraits = document.getElementById('dashTraits');
const targetGoalName = document.getElementById('targetGoalName');
const targetGoalRequirements = document.getElementById('targetGoalRequirements');
const gamePhase = document.getElementById('gamePhase');
const playerEnergy = document.getElementById('playerEnergy');
const playerInsight = document.getElementById('playerInsight');
const playerCredit = document.getElementById('playerCredit');
const activeChallengesContainer = document.getElementById('activeChallengesContainer');
const playerHandContainer = document.getElementById('playerHandContainer');
const btnApplyStrategy = document.querySelector('.btn-apply-strategy');
const gameResultScreen = document.getElementById('gameResultScreen');
const gameResultText = document.getElementById('gameResultText');


// --- 2. 核心数据存储 (内容质量保障) ---
const qaDatabase = {
    "费用": "【战略破局】谈费用，更要谈**价值与风险**。国立大学学费约54万日元/年，但真正的成本是“隐形费用”：比如多读一年语言学校的时间成本，或因不适应导致的心理成本。我们通过**‘费用置换模式’**，将中介或语校的介绍费转化为对您的辅导支持，达成三方共赢。这是效率最高的资源整合战略，细节请微信（qiuwu999）详询。",
    "价格": "【透明契约】价格是透明的，但价值是定制的。平时的文书/模拟面试有单独价位，但我们推行**‘零成本留学’**模式，核心在于**风险对冲**。通过渠道合作覆盖辅导费，帮助您将精力完全集中在申请的核心要素上——**逻辑和叙事**。我只会接收能出成果的学生，不走流水线。",
    "优势": "【认知支点】我的辅导优势在于提供**“东大基准”的逻辑重构**。这不只是改文书，而是运用**心理学博弈论**破解日本留学中的‘读空气’壁垒。我们专注于：① **文理融合**的跨学科视角；② **破绽利用**策略，将劣势转化为独特的叙事优势；③ **临场心态**管理，确保面试高情商输出。",
    "双非": "【劣势管理】双非背景并非不可逆，但升学难度系数会大幅**两极化**。破局的关键在于：**‘逻辑闭环’**。双非学生必须在研究计划书中展现出超越背景的**内驱力**和**学术成熟度**。我们指导您如何通过差异化叙事，把背景劣势转化为**‘饥饿感’**的驱动力，让教授看到您不可替代的潜力。",
    "直考修士": "【高风险高收益】直考修士的成功率，本质上是对你**心理韧性**和**时间管理**的双重考核。本科法学，想考经济修士，这涉及巨大的**知识跨越与认知摩擦**。你需要用研究计划书和网课自学经历，完美呈现出**转专业的隐性关联**和**强悍的说服力**。直考需极度自律，如果不能提供**逻辑闭环**，极易被淘汰。",
    "套路": "【战略透明】我们拒绝传统中介的‘信息差套路’。我的商业逻辑非常透明：我是渠道方，机构支付的费用即是我的咨询费。我们只做**战略指导和深度文书逻辑重构**，目标是帮您绕开留学申请中的**‘认知陷阱’**。我们坚持信用契约，一切以您的最终录取结果和满意度为核心。",
    "EJU": "【机会成本】EJU是机会，但放弃6月考试机会是**巨大的战略失误**。为什么？因为许多顶尖大学申报时只需‘受験票’（报名凭证），**成绩并非唯一的衡量标准**。放弃6月，你将失去一次宝贵的**临场体验校内考核**的机会，尤其是对**口头试问（面试）**的软实力考核，这是人与人之间**认知偏差**最大的落差点。",
    "失败": "【博弈心态】失败并不可怕，可怕的是**重复犯错且拒绝承认**。失败是挑战所得，是宝贵的**肥料**。但如果在小的失误上反复纠结、找借口，就会形成**‘习得性无助’**。我们优先让您从能做到的事情开始，积累小的成就，用**防御性悲观**策略，预设最坏结果，反而能从容应对挑战。",
    "高二": "【本科路径】关于高二留学：本科最快也要明年9月入学。关键在于**申报期和日语能力的黄金交叉点**。早稻田等顶尖私立需要EJU成绩，但也有大学提供**校内单独出题**的入试机会。我们必须精确利用每一个**临场考核**的机会，尤其是口头沟通环节，这是考察**文化适应力**和**高情商**的关键。",
    "读空气": "【文化差异】‘读空气’是日本社会的高情商表现，在面试中尤为重要。它考察的不是你的日语能力，而是**你的文化适应力和情境感知能力**。我们的辅导会教你解析教授的**非语言暗示**和**潜台词**，避免因文化冲突带来的**‘致命的误解’**。缺乏这种洞察力，学术能力再强也可能被淘汰。",
    "心理学": "【应用心理】我们的咨询深度融合**心理学博弈论**。我们不仅关注学术指标，更关注您的**心理韧性、焦虑度和自信心**。比如，通过**目标可视化**和**防御性悲观训练**，帮助您降低申请期的内耗，将焦虑转化为生产力，确保在最关键的面试环节能展现出**稳定且自信**的状态。"
};

const snsCommentGenerator = [
    "这条回复非常精准地体现了你的**高情商与文化洞察力**，用非攻击性的语言化解了潜在的矛盾。",
    "这段文字的**逻辑闭环**非常完美，从一个宏观问题切入，用个人经验收尾，既有深度又有温度。",
    "用**防御性悲观**的视角来解读这件事，可以有效管理预期，将焦点引向建设性的行动而非情绪内耗。",
    "这评论巧妙地运用了**破绽利用**策略，将自身的某种不足转化为一种独特的、有深度的叙事优势，让人印象深刻。",
    "你的回复充分展现了**读空气**的能力，在不点破对方错误的前提下，提供了更优的解决方案，堪称教科书式的高情商表达。"
];

const strategicFallbackResponses = [
    "我理解您的问题，但目前的信息过于模糊，无法进行专业的‘破局’分析。请告诉我您的具体情况，例如：目标专业、现有背景（GPA/语言）、以及您认为最大的难点。",
    "这是一个涉及到长期规划的战略问题。请允许我进行深度思考。在此期间，您可以先尝试在左侧菜单中体验**‘AI 升学破局模拟’**，提前感受一下战略决策的权重。",
    "这个问题的核心在于‘认知差’。传统中介不会告诉你这些。请尝试输入关键词 **‘双非’** 或 **‘优势’**，获取我们深度定制的战略分析，可能会给您新的启发。",
    "我们关注的是**心理学博弈和逻辑重构**。您的问题需要更精细的分解。请提供您最近在申请中遇到的一个具体‘瓶颈’，我将为您提供一个**高情商**的应对模板。"
];

// 左侧菜单动态内容数据
const menuContentData = {
    strength: `
        <div class="detail-card">
            <h3>🎯 核心优势：以破绽为支点</h3>
            <p><strong>我的辅导模式区别于传统中介的流水线作业：</strong></p>
            <ul>
                <li><strong>逻辑重构 (东大基准)：</strong> 不仅是润色文书，而是用跨学科视角（文理融合）重新梳理你的研究动机和叙事逻辑。</li>
                <li><strong>心理博弈论应用：</strong> 针对面试、教授邮件、以及日常心态，提供高情商沟通策略和心理韧性训练。</li>
                <li><strong>劣势破局：</strong> 擅长将“双非”、转专业、低GPA等劣势转化为独一无二的**内驱力**和**学术饥饿感**，说服教授。</li>
                <li><strong>风险对冲：</strong> 采取“零成本留学”模式，将中介或语校介绍费转化为对你的辅导支持，实现最高效的资源整合。</li>
            </ul>
        </div>
    `,
    model: `
        <div class="detail-card">
            <h3>🤝 辅导模式与价值承诺</h3>
            <p>我们提供的是**深度定制的战略指导**，而不是信息搬运工：</p>
            <ul>
                <li><strong>定制化：</strong> 只接收能出成果的学生，精细化一对一服务，绝不走量。</li>
                <li><strong>透明契约：</strong> 费用透明，核心价值在于提供“认知差”和“战略规划”，帮助学生**绕开隐形壁垒**。</li>
                <li><strong>覆盖环节：</strong> 从研究计划的选题、逻辑构建、教授套磁、到最终的面试高情商应对，全程陪伴。</li>
                <li><strong>结果导向：</strong> 我们的目标是最大化你的成功率，让你的每一份努力都精准地击中教授的“痛点”。</li>
            </ul>
        </div>
    `,
    cases: `
        <div class="detail-card">
            <h3>📈 成功案例 / 更多思考</h3>
            <p>我们的成功案例都基于**独特的战略部署**：</p>
            <ul>
                <li><strong>案例一：</strong> 某双非学生，通过**《逻辑闭环重构》**策略，将跨专业动机转化为对目标领域不可或缺的补充，最终拿到一桥大学录取。</li>
                <li><strong>案例二：</strong> 某学生有轻微社交恐惧，通过**《防御性悲观训练》**和高情商邮件模板，成功克服面试焦虑，获得东大教授内诺。</li>
                <li><strong>更多思考：</strong> 留学的真正风险不在于学费，而在于时间成本和**心理内耗**。我们的辅导致力于消除这些隐形成本。</li>
            </ul>
            <p style="font-style: italic; margin-top: 15px;">更多成功经验和深度文章，请点击左侧的知乎和B站链接探索。</p>
        </div>
    `
};

// --- 3. 核心功能函数 (聊天与交互) ---

/**
 * 切换左侧菜单视图，确保互斥。
 * @param {boolean} isExpanded - true: 展开菜单; false: 收起菜单
 */
function toggleMenu(isExpanded) {
    if (isExpanded) {
        profileCover.classList.add('hidden');
        contentDetail.classList.add('hidden');
        menuList.classList.remove('hidden');
        // 确保右侧是聊天模式
        showChatSection(false); 
    } else {
        menuList.classList.add('hidden');
        contentDetail.classList.add('hidden');
        profileCover.classList.remove('hidden');
    }
}

/**
 * 点击菜单项后，显示详情内容。
 * @param {string} key - 对应 menuContentData 的键
 */
function showContent(key) {
    const content = menuContentData[key] || "<div class='detail-card'><h3>内容加载失败</h3><p>请检查菜单键名。</p></div>";
    
    dynamicContent.innerHTML = content;
    
    menuList.classList.add('hidden');
    profileCover.classList.add('hidden');
    contentDetail.classList.remove('hidden');
}

/**
 * 从详情页返回菜单列表。
 */
function backToMenu() {
    contentDetail.classList.add('hidden');
    profileCover.classList.add('hidden');
    menuList.classList.remove('hidden');
}

/**
 * 切换回聊天模式 (无论是从菜单还是从游戏返回)。
 * @param {boolean} shouldShowCover - 是否应该显示左侧封面
 */
function showChatSection(shouldShowCover = true) {
    gameSimulationSection.classList.add('hidden');
    chatSection.classList.remove('hidden');
    
    if (shouldShowCover) {
        profileCover.classList.remove('hidden');
        menuList.classList.add('hidden');
        contentDetail.classList.add('hidden');
    }

    if (gameState.gameStarted && !gameState.gameOver) {
        sendAiMessage("模拟暂停。有什么关于申请的实际问题需要咨询吗？随时可以点击左侧菜单的“AI 升学破局模拟”继续部署策略。", false, '', 100);
    }
}

/**
 * 复制文本到剪贴板。
 */
function copyTextToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        // 简易的复制成功反馈
        const feedback = document.createElement('div');
        feedback.textContent = '✅ 已复制到剪贴板！';
        feedback.style.cssText = 'position: fixed; bottom: 80px; left: 50%; transform: translateX(-50%); background: #4CAF50; color: white; padding: 10px 20px; border-radius: 5px; z-index: 1000; opacity: 0; transition: opacity 0.5s;';
        document.body.appendChild(feedback);

        setTimeout(() => {
            feedback.style.opacity = 1;
        }, 10);

        setTimeout(() => {
            feedback.style.opacity = 0;
            setTimeout(() => feedback.remove(), 500);
        }, 1500);
    }).catch(err => {
        console.error('无法复制文本: ', err);
    });
}

/**
 * 显示 AI 消息。
 */
function sendAiMessage(text, isSnsComment = false, cssClass = '', delay = 700) {
    loadingIndicator.classList.remove('hidden');
    
    setTimeout(() => {
        loadingIndicator.classList.add('hidden');
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message', 'ai-message');
        
        const bubble = document.createElement('div');
        bubble.classList.add('bubble');
        
        if (isSnsComment) {
            bubble.classList.add('sns-comment-bubble');
            // 绑定点击复制事件
            bubble.onclick = () => copyTextToClipboard(text);
        }
        
        bubble.innerHTML = text;
        
        messageDiv.appendChild(bubble);
        chatBody.appendChild(messageDiv);
        chatBody.scrollTop = chatBody.scrollHeight;
    }, delay);
}

/**
 * 显示用户消息。
 */
function sendUserMessage(text) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', 'user-message');
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');
    bubble.textContent = text;
    messageDiv.appendChild(bubble);
    chatBody.appendChild(messageDiv);
    chatBody.scrollTop = chatBody.scrollHeight;
}

/**
 * 处理用户输入并发送消息。
 */
function sendMessage() {
    const text = userInput.value.trim();
    if (!text) return;

    sendUserMessage(text);
    userInput.value = '';
    
    let aiResponse = '';
    let isSns = false;
    
    const snsPrefix = "生成评论或回复：";
    
    if (text.startsWith(snsPrefix)) {
        isSns = true;
        const commentContent = text.substring(snsPrefix.length).trim();
        const feedbackIndex = Math.floor(Math.random() * snsCommentGenerator.length);
        const feedback = snsCommentGenerator[feedbackIndex];
        
        aiResponse = `
            <strong>秋武点评（高情商策略）：</strong>${feedback}
            <hr style="margin: 8px 0;">
            <strong>为您生成的评论/回复：</strong><br>
            ${commentContent}
        `;

    } else {
        const keyword = Object.keys(qaDatabase).find(key => text.toLowerCase().includes(key.toLowerCase()));
        
        if (keyword) {
            aiResponse = qaDatabase[keyword];
        } else {
            // 默认或策略性回复
            const fallbackIndex = Math.floor(Math.random() * strategicFallbackResponses.length);
            aiResponse = strategicFallbackResponses[fallbackIndex];
        }
    }
    
    sendAiMessage(aiResponse, isSns);
}

/**
 * 监听回车键。
 */
function handleKeyPress(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}

// --- 4. 游戏模拟数据 (完整定义) ---

const initialStudent = {
    name: "留学生 A",
    GPA: 3.2,
    JLPT: 130,
    TOEFL: 80,
    CulturalAdaptability: 50,
    PsychologicalResilience: 50,
    LogicSkill: 50,
    Confidence: 50,
    Anxiety: 50,
    Traits: "中规中矩，缺乏亮点"
};

const goalCards = [
    {
        name: "顶级名校修士 (东大/京大)",
        requirements: { GPA: 3.5, JLPT: 150, TOEFL: 95, CulturalAdaptability: 80, PsychologicalResilience: 90, LogicSkill: 95, Anxiety: 20 },
        description: "要求极高的学术和**心理博弈**能力。"
    },
    {
        name: "MARCH水平本科 (早大/庆应)",
        requirements: { GPA: 3.0, JLPT: 120, TOEFL: 85, CulturalAdaptability: 70, PsychologicalResilience: 70, LogicSkill: 75, Anxiety: 40 },
        description: "要求良好的硬实力和**高情商临场应变**。"
    }
];

const strategyCards = [
    { name: "防御性悲观训练", cost: { energy: 10, insight: 5, credit: 0 }, effect: { Anxiety: -15, PsychologicalResilience: 10 } },
    { name: "逻辑闭环重构", cost: { energy: 15, insight: 15, credit: 5 }, effect: { LogicSkill: 20, Confidence: 10, Anxiety: -5 } },
    { name: "教授潜台词分析", cost: { energy: 5, insight: 25, credit: 0 }, effect: { CulturalAdaptability: 15, Confidence: 10 } },
    { name: "文理融合视角构建", cost: { energy: 20, insight: 10, credit: 0 }, effect: { LogicSkill: 15, GPA: 0.1 } },
    { name: "破绽利用叙事", cost: { energy: 10, insight: 10, credit: 10 }, effect: { Confidence: 15, PsychologicalResilience: 5 } },
    { name: "突击JLPT刷分", cost: { energy: 30, insight: 0, credit: 0 }, effect: { JLPT: 10, Anxiety: 10 } }
];

const challengeCards = [
    { name: "教授的潜台词测试", type: "soft", penalty: { Confidence: -10, CulturalAdaptability: -10 }, turns: 2 },
    { name: "文书逻辑存在漏洞", type: "soft", penalty: { LogicSkill: -15, Credit: -5 }, turns: 3 },
    { name: "临场焦虑爆发", type: "soft", penalty: { Confidence: -15, PsychologicalResilience: -10 }, turns: 1 },
    { name: "硬实力被背景碾压", type: "hard", penalty: { GPA: -0.1, Credit: -10 }, turns: 3 },
    { name: "‘读空气’失败", type: "soft", penalty: { CulturalAdaptability: -15, Anxiety: 10 }, turns: 2 }
];


// --- 5. 游戏状态与核心逻辑 (完整实现) ---

let gameState = {
    gameStarted: false,
    gameOver: false,
    currentTurn: 0,
    maxTurns: 10,
    student: {},
    targetGoal: {},
    playerHand: [],
    activeChallenges: [],
    selectedStrategyIndex: -1,
    resources: {
        energy: 100,
        insight: 100,
        credit: 100
    }
};

function updateDashboard() {
    dashGPA.textContent = gameState.student.GPA.toFixed(2);
    dashJLPT.textContent = gameState.student.JLPT;
    dashTOEFL.textContent = gameState.student.TOEFL;
    dashCulturalAdaptability.textContent = gameState.student.CulturalAdaptability;
    dashPsychologicalResilience.textContent = gameState.student.PsychologicalResilience;
    dashLogicSkill.textContent = gameState.student.LogicSkill;
    dashConfidence.textContent = gameState.student.Confidence;
    dashAnxiety.textContent = gameState.student.Anxiety;
    dashTraits.textContent = gameState.student.Traits;

    playerEnergy.textContent = gameState.resources.energy;
    playerInsight.textContent = gameState.resources.insight;
    playerCredit.textContent = gameState.resources.credit;
    gamePhase.textContent = `回合: ${gameState.currentTurn}/${gameState.maxTurns}`;

    // 目标要求显示
    targetGoalName.textContent = gameState.targetGoal.name;
    targetGoalRequirements.innerHTML = Object.entries(gameState.targetGoal.requirements)
        .map(([key, value]) => `<div>${key}: ${value}</div>`)
        .join('');

    // 挑战显示
    activeChallengesContainer.innerHTML = gameState.activeChallenges.length > 0
        ? gameState.activeChallenges.map(c => `
            <div class="challenge-card">
                <strong>${c.name}</strong> (剩余${c.turns}回合)<br>
                惩罚: ${Object.entries(c.penalty).map(([k, v]) => `${k} ${v > 0 ? '+' : ''}${v}`).join(', ')}
            </div>
        `).join('')
        : '<div class="placeholder-challenge">当前无重大挑战，部署长期策略。</div>';
    
    // 渲染手牌
    renderPlayerHand();
    checkGameOver();
}

function renderPlayerHand() {
    playerHandContainer.innerHTML = '';
    btnApplyStrategy.classList.add('hidden');
    gameState.selectedStrategyIndex = -1;

    if (gameState.playerHand.length === 0) {
        playerHandContainer.innerHTML = '<div class="placeholder-hand">请抽牌以获取新的策略卡。</div>';
        return;
    }

    gameState.playerHand.forEach((card, index) => {
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('strategy-card');
        if (index === gameState.selectedStrategyIndex) {
            cardDiv.classList.add('selected');
            btnApplyStrategy.classList.remove('hidden');
        }
        
        cardDiv.innerHTML = `
            <strong>${card.name}</strong><hr>
            <p style="margin: 5px 0; font-size: 0.8em;">
                <strong>消耗:</strong> E:${card.cost.energy}, I:${card.cost.insight}, C:${card.cost.credit}
            </p>
            <p style="margin: 5px 0; font-size: 0.8em; color: #007bff;">
                <strong>效果:</strong> ${Object.entries(card.effect).map(([k, v]) => `${k} ${v > 0 ? '+' : ''}${v}`).join(', ')}
            </p>
        `;
        
        cardDiv.onclick = () => selectStrategy(index);
        playerHandContainer.appendChild(cardDiv);
    });
}

function selectStrategy(index) {
    gameState.selectedStrategyIndex = index;
    renderPlayerHand();
}

function drawCards(count) {
    if (gameState.currentTurn === 0 || gameState.gameOver) {
        alert("请先开始模拟或重置模拟！");
        return;
    }
    
    // 抽牌成本
    const drawCost = 5;
    if (gameState.resources.insight < drawCost) {
        alert("洞察力不足，无法抽取新策略！请结束回合等待洞察力恢复。");
        return;
    }
    
    gameState.resources.insight -= drawCost;
    
    for (let i = 0; i < count; i++) {
        const randomIndex = Math.floor(Math.random() * strategyCards.length);
        if (gameState.playerHand.length < 5) { // 手牌上限
            gameState.playerHand.push(strategyCards[randomIndex]);
        }
    }
    updateDashboard();
}

function tryApplyStrategy() {
    if (gameState.selectedStrategyIndex === -1) {
        alert("请选择一张策略卡！");
        return;
    }
    
    const card = gameState.playerHand[gameState.selectedStrategyIndex];
    
    // 检查资源
    if (gameState.resources.energy < card.cost.energy ||
        gameState.resources.insight < card.cost.insight ||
        gameState.resources.credit < card.cost.credit) {
        alert("资源不足，无法执行此策略！");
        return;
    }
    
    // 消耗资源
    gameState.resources.energy -= card.cost.energy;
    gameState.resources.insight -= card.cost.insight;
    gameState.resources.credit -= card.cost.credit;

    // 应用效果
    for (const [key, value] of Object.entries(card.effect)) {
        if (gameState.student.hasOwnProperty(key)) {
            gameState.student[key] = Math.max(0, gameState.student[key] + value);
        }
    }
    
    // 移除已使用的卡牌
    gameState.playerHand.splice(gameState.selectedStrategyIndex, 1);
    gameState.selectedStrategyIndex = -1;
    
    updateDashboard();
}

function applyChallengePenalties() {
    // 应用当前所有挑战的惩罚
    gameState.activeChallenges.forEach(challenge => {
        for (const [key, value] of Object.entries(challenge.penalty)) {
            if (gameState.student.hasOwnProperty(key)) {
                gameState.student[key] = Math.max(0, gameState.student[key] + value);
            } else if (gameState.resources.hasOwnProperty(key.toLowerCase())) {
                 gameState.resources[key.toLowerCase()] = Math.max(0, gameState.resources[key.toLowerCase()] + value);
            }
        }
        challenge.turns -= 1;
    });

    // 移除持续时间结束的挑战
    gameState.activeChallenges = gameState.activeChallenges.filter(c => c.turns > 0);
}

function generateNewChallenge() {
    if (gameState.activeChallenges.length < 3) {
        const randomIndex = Math.floor(Math.random() * challengeCards.length);
        const newChallenge = JSON.parse(JSON.stringify(challengeCards[randomIndex])); // 深拷贝
        gameState.activeChallenges.push(newChallenge);
    }
}

function checkGameOver() {
    if (gameState.gameOver) return;

    if (gameState.currentTurn > gameState.maxTurns) {
        gameState.gameOver = true;
        
        let allMet = true;
        const unmetGoals = [];
        
        for (const [key, requiredValue] of Object.entries(gameState.targetGoal.requirements)) {
            if (gameState.student[key] < requiredValue) {
                allMet = false;
                unmetGoals.push(`${key} (${gameState.student[key]}/${requiredValue})`);
            }
        }

        gameSimulationSection.classList.add('hidden');
        gameResultScreen.classList.remove('hidden');

        if (allMet) {
            gameResultScreen.querySelector('h3').textContent = "🎉 恭喜！破局成功！";
            gameResultText.innerHTML = `在 ${gameState.maxTurns} 回合内，您成功地运用战略，使学生达到了 **${gameState.targetGoal.name}** 的所有软硬实力要求。这证明了**认知差和策略**才是关键。`;
        } else {
            gameResultScreen.querySelector('h3').textContent = "💔 模拟失败。未能在时限内破局。";
            gameResultText.innerHTML = `学生未能在 ${gameState.maxTurns} 回合内达到目标要求。主要缺口：<br><ul>${unmetGoals.map(g => `<li>${g}</li>`).join('')}</ul>请反思您的**资源分配和高情商策略**。`;
        }
    }
}

function endTurn() {
    if (gameState.gameOver) return;
    gameState.currentTurn++;

    // 1. 应用挑战惩罚并减少持续时间
    applyChallengePenalties();

    // 2. 资源恢复 (每回合自动恢复)
    gameState.resources.energy = Math.min(100, gameState.resources.energy + 20);
    gameState.resources.insight = Math.min(100, gameState.resources.insight + 10);
    gameState.resources.credit = Math.min(100, gameState.resources.credit + 5);
    
    // 3. 随机生成新挑战
    generateNewChallenge();
    
    // 4. 更新UI并检查是否结束
    updateDashboard();
}


function resetGameSimulation() {
    gameState.gameStarted = true;
    gameState.gameOver = false;
    gameState.currentTurn = 0;
    gameState.student = JSON.parse(JSON.stringify(initialStudent)); // 深拷贝初始学生状态
    
    // 随机选择一个目标
    gameState.targetGoal = goalCards[Math.floor(Math.random() * goalCards.length)];

    // 重置玩家状态
    gameState.playerHand = [];
    gameState.activeChallenges = [];
    gameState.selectedStrategyIndex = -1;
    gameState.resources = { energy: 100, insight: 100, credit: 100 };
    
    // 初始设置
    drawCards(3); // 初始抽牌
    generateNewChallenge(); // 初始挑战
    
    gameResultScreen.classList.add('hidden');
    gameSimulationSection.classList.remove('hidden');
    
    updateDashboard();
}

/**
 * 进入游戏模式时，正确切换右侧面板和隐藏左侧菜单。
 */
function startGameSimulation() {
    // 切换右侧面板
    chatSection.classList.add('hidden');
    gameSimulationSection.classList.remove('hidden');

    // 隐藏左侧菜单相关内容
    profileCover.classList.add('hidden');
    menuList.classList.add('hidden');
    contentDetail.classList.add('hidden');

    // 如果游戏尚未开始，或已结束，初始化游戏状态
    if (!gameState.gameStarted || gameState.gameOver) {
        resetGameSimulation();
    }
}


// --- 6. 初始化 ---
document.addEventListener('DOMContentLoaded', () => {
    // 确保初始状态是聊天模式，并且左侧显示封面
    if (chatSection) { chatSection.classList.remove('hidden'); } 
    if (gameSimulationSection) { gameSimulationSection.classList.add('hidden'); }
    
    // 初始显示左侧封面
    if (profileCover) { profileCover.classList.remove('hidden'); }
    if (menuList) { menuList.classList.add('hidden'); }
    if (contentDetail) { contentDetail.classList.add('hidden'); }
    
    // 绑定发送按钮
    if (sendButton) {
        sendButton.addEventListener('click', sendMessage);
    }
});
