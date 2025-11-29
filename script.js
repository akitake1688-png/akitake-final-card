// script.js - 最终审核版本 (UI/UX 修复与内容保障)

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
// ... (其他游戏DOM元素引用保持不变) ...

// --- 2. 核心数据存储 (内容质量保障) ---

// QA 数据库：维持高情商、心理学、战略视角
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

const snsCommentGenerator = [ /* ... 保持不变 ... */ ];
const strategicFallbackResponses = [ /* ... 保持不变 ... */ ];

// 左侧菜单动态内容数据 (优化结构，便于阅读和展示)
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

// ... (其他游戏相关数据和函数，如 studentCards, goalCards, strategyCards 等保持不变) ...


// --- 3. 交互逻辑修复 (关键修复点) ---

/**
 * 修复：控制封面和菜单的显示/隐藏，确保互斥。
 * @param {boolean} isExpanded - true: 展开菜单; false: 收起菜单
 */
function toggleMenu(isExpanded) {
    if (isExpanded) {
        // 展开菜单时：隐藏封面和内容详情，显示菜单列表
        profileCover.classList.add('hidden');
        contentDetail.classList.add('hidden');
        menuList.classList.remove('hidden');
        // 确保右侧是聊天模式
        showChatSection(false); 
    } else {
        // 收起菜单时：显示封面，隐藏菜单列表和内容详情
        menuList.classList.add('hidden');
        contentDetail.classList.add('hidden');
        profileCover.classList.remove('hidden');
    }
}

/**
 * 修复：点击菜单项后，显示详情内容。
 * @param {string} key - 对应 menuContentData 的键
 */
function showContent(key) {
    const content = menuContentData[key] || "内容加载失败，请检查键名。";
    
    dynamicContent.innerHTML = content;
    
    // 隐藏菜单，显示详情
    menuList.classList.add('hidden');
    profileCover.classList.add('hidden');
    contentDetail.classList.remove('hidden');
}

/**
 * 修复：从详情页返回菜单列表。
 */
function backToMenu() {
    contentDetail.classList.add('hidden');
    profileCover.classList.add('hidden'); // 确保封面是隐藏的
    menuList.classList.remove('hidden');
}


/**
 * 修复：切换回聊天模式 (无论是从菜单还是从游戏返回)。
 * @param {boolean} shouldShowCover - 是否应该显示左侧封面（从游戏返回时可能不需要）
 */
function showChatSection(shouldShowCover = true) {
    gameSimulationSection.classList.add('hidden');
    chatSection.classList.remove('hidden');
    
    // 返回到主界面时，处理左侧面板状态
    if (shouldShowCover) {
        profileCover.classList.remove('hidden');
        menuList.classList.add('hidden');
        contentDetail.classList.add('hidden');
    }

    // ... (游戏继续提示逻辑保持不变)
}

/**
 * 修复：进入游戏模式时，正确切换右侧面板和隐藏左侧菜单。
 */
function startGameSimulation() {
    // 切换右侧面板
    chatSection.classList.add('hidden');
    gameSimulationSection.classList.remove('hidden');

    // 隐藏左侧菜单相关内容
    profileCover.classList.add('hidden');
    menuList.classList.add('hidden');
    contentDetail.classList.add('hidden');

    // 如果游戏尚未开始，初始化游戏状态
    if (!gameState.gameStarted) {
        resetGameSimulation();
    }
}


// ... (sendAiMessage, sendUserMessage, copyTextToClipboard, sendMessage 等功能函数保持不变) ...

// **游戏状态变量和函数（简化，仅保留名称）**
let gameState = {
    gameStarted: false,
    gameOver: false,
    currentTurn: 0,
    student: {},
    targetGoal: {},
    playerHand: [],
    activeChallenges: [],
    selectedStrategyIndex: -1,
    resources: {
        energy: 0,
        insight: 0,
        credit: 0
    }
};

// **保持游戏相关函数名称，但省略实现以避免文件过长**
function resetGameSimulation() { console.log('Game reset logic executed.'); gameState.gameStarted = true; }
function drawCards(count) { console.log(`Drawing ${count} cards.`); }
function tryApplyStrategy() { console.log('Applying selected strategy.'); }
function endTurn() { console.log('Ending turn.'); }

// ... (DOM Ready 逻辑保持不变) ...

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
