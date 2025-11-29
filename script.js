// script.js - 最终优化重构版 (融入秋武老师数据)

// --- 1. 全局UI元素引用 (保持不变) ---
const mainContainer = document.querySelector('.main-container');
const leftPanel = document.querySelector('.left-panel');
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
const gamePhaseDisplay = document.getElementById('gamePhase');
const playerEnergyDisplay = document.getElementById('playerEnergy');
const playerInsightDisplay = document.getElementById('playerInsight');
const playerCreditDisplay = document.getElementById('playerCredit');
const currentStudentNameDisplay = document.getElementById('currentStudentName');
const dashGPA = document.getElementById('dashGPA');
const dashJLPT = document.getElementById('dashJLPT');
const dashTOEFL = document.getElementById('dashTOEFL');
const dashCulturalAdaptability = document.getElementById('dashCulturalAdaptability');
const dashPsychologicalResilience = document.getElementById('dashPsychologicalResilience');
const dashLogicSkill = document.getElementById('dashLogicSkill');
const dashConfidence = document.getElementById('dashConfidence');
const dashAnxiety = document.getElementById('dashAnxiety');
const dashTraits = document.getElementById('dashTraits');
const targetGoalNameDisplay = document.getElementById('targetGoalName');
const targetGoalRequirementsDisplay = document.getElementById('targetGoalRequirements');
const activeChallengesContainer = document.getElementById('activeChallengesContainer');
const playerHandContainer = document.getElementById('playerHandContainer');
const gameResultScreen = document.getElementById('gameResultScreen');
const btnApplyStrategy = document.querySelector('.btn-apply-strategy');


// --- 2. 核心数据存储 (基于秋武老师数据优化) ---

// QA 数据库 (更具洞察力的回复)
const qaDatabase = {
    // 基于“秋武老师一问一答式数据.docx”
    "费用": "【秋武老师】费用方面，国立大学学费约54万日元/年，但生活成本、签证延长、保险支付审查等是“隐形费用”。我们强推“免费模式”：通过我推荐进入合作机构，机构支付的介绍费即可覆盖您的辅导费。这是三方共赢的商业逻辑，无任何隐形消费。",
    "价格": "【秋武老师】请参考“费用”的回答。平时辅导单独收费，但我们主打“免费模式”：通过我推荐进入合作机构，即可免除您的辅导费。细节请加微信（qiuwu999）沟通。",
    "优势": "【秋武老师】我的辅导特点是：区别于大机构流水线，我提供个人精细化辅导。核心是提供“文理融合”的跨学科视角和“东大基准”的逻辑重构。只接能出成果的学生，强调以“破绽为支点”的破局策略。",
    "双非": "【秋武老师】双非并非绝境，但升学难度系数会两极化。关键在于：**逻辑重构**。我们会指导您通过差异化研究计划书、突出实践经验，将背景劣势转化为独特的叙事优势。不要在简单的事情上重复犯错。",
    "直考修士": "【秋武老师】直考修士的几率取决于你的专业能力、研究计划书的逻辑闭环以及日语/英语能力。例如，法学转经济学，你需要通过网课自学两年日本大学经济课程，并在研究计划书中体现出跨学科的**隐性关联**和**说服力**。",
    "套路": "【秋武老师】我只提供透明的、有信用契约的辅导。商业逻辑很透明：我是渠道方，机构支付介绍费，这笔钱替您支付我的咨询费。无任何隐形消费或套路。我们避免走流水线，专注于深度战略分析。",
    "EJU": "【秋武老师】EJU是机会但不是全部。很多大学申报时只需“受験票”，不需要具体成绩。放弃6月考试机会，你将失去临场体验校内考核的机会，尤其是口头试问*面试沟通部分，这是软实力考核的落差点。",
    "失败": "【秋武老师】失败并不可怕，可怕的是重复犯错。失败是挑战所得，是肥料。但如果重复小的失误，不承认、找借口，最终会导致你饮恨收场。我们优先让你从能做到的事情开始，积累小的成就，不让小的错误成为最终的瓶颈。",
    // 基于“秋武数据用❸.docx”
    "孩子": "【秋武老师】关于孩子高二留学问题：本科最快也要明年9月入学。早稻田等顶尖私立需要EJU成绩，但也有大学提供校内单独出题的入试方式。申报期和日语能力是关键，我们不能放弃任何临场考核的机会，尤其是口头沟通部分。",
};

// 策略卡数据 (与秋武理念对齐)
const strategyCards = [
    {
        id: "strategy_logic_001", name: "向量逻辑降维法", type: "strategy", subtype: "cognitive_reconstruction", cost: { energy: 3 },
        effect_code: "student.logic_skill += 20; student.narrative_coherence += 15; GAIN insight=10;",
        description: "将宏大课题细化，提升研究计划书的逻辑连贯性 (秋武核心方法)。", flavor_text: "化繁为简，直击本质。"
    },
    {
        id: "strategy_psych_001", name: "防御性悲观训练", type: "strategy", subtype: "psychological_intervention", cost: { energy: 4 },
        effect_code: "student.anxiety -= 20; student.psychological_resilience += 15; GAIN insight=10;",
        description: "预设最坏结果并针对性准备，大幅降低临场焦虑，提升心理韧性。", flavor_text: "未雨绸缪，方能从容不迫。"
    },
    {
        id: "strategy_culture_001", name: "教授潜台词分析", type: "strategy", subtype: "cultural_decryption", cost: { energy: 5 },
        effect_code: "student.cultural_adaptability += 25; student.confidence += 10; GAIN insight=15;",
        description: "深度解析日本教授的沟通习惯，理解言外之意，提升面试适应度。", flavor_text: "读懂空气，洞察人心。"
    },
    {
        id: "strategy_narrative_001", name: "破绽利用法", type: "strategy", subtype: "cognitive_reconstruction", cost: { energy: 4 },
        effect_code: "student.narrative_coherence += 20; student.academic_score += 10; GAIN insight=10; ALERT('成功将背景劣势转化为独特叙事！');",
        description: "将看似的劣势重新解读，构建独特且有说服力的个人叙事。", flavor_text: "反败为胜，扭转乾坤。"
    },
    {
        id: "strategy_finance_001", name: "费用置换契约", type: "strategy", subtype: "resource_integration", cost: { insight: 20, credit: 30 },
        effect_code: "student.academic_score += 30; gameState.gamePhase = 'adaptation_phase'; GAIN credit=50; ALERT('费用置换契约成功！学生申请压力大幅降低，申请成功率飙升！');",
        description: "通过费用置换模式，解除经济压力，加速申请进程。", flavor_text: "零成本留学，价值共赢。"
    }
];

// 挑战卡数据 (与秋武理念对齐)
const challengeCards = [
    {
        id: "challenge_rp_001", name: "研究计划书选题过大", type: "challenge", category: "cognitive_bias",
        trigger: "student.academic_score < 60 && student.logic_skill < 60 && gameState.turn > 2",
        penalty: { logic_skill: -15, narrative_coherence: -10, anxiety: 10 },
        description: "学生的研究计划书主题过于宏大模糊，缺乏具体切入点。", solution_strategy_id: "strategy_logic_001"
    },
    {
        id: "challenge_culture_001", name: "面试读空气失败", type: "challenge", category: "cultural_conflict",
        trigger: "student.cultural_adaptability < 50 && gameState.currentPhase === 'crisis_phase' && gameState.turn > 4",
        penalty: { cultural_adaptability: -15, confidence: -10, anxiety: 15 },
        description: "在教授面试中未能理解非语言暗示，导致沟通障碍。", solution_strategy_id: "strategy_culture_001"
    },
    {
        id: "challenge_psych_001", name: "申请期焦虑症", type: "challenge", category: "psychological_pressure",
        trigger: "student.anxiety > 60 || (gameState.currentPhase === 'crisis_phase' && gameState.turn > 3)",
        penalty: { psychological_resilience: -10, confidence: -10, logic_skill: -5 },
        description: "长期申请压力导致学生焦虑情绪高涨，影响学习效率。", solution_strategy_id: "strategy_psych_001"
    }
];

// 目标卡数据 (保持不变)
const goalCards = [
    {
        id: "goal_tokyo_sociology", name: "东京大学 社会学研究科",
        requires: { gpa: 3.8, jlpt: 90, toefl: 90, logic_skill: 85, cultural_adaptability: 80, psychological_resilience: 75, confidence: 80, academic_score: 90, narrative_coherence: 85 },
        description: "日本顶尖学府，要求极高，尤其看重批判性思维。",
        pass_message: "恭喜！您成功协助学生斩获东京大学社会学研究科的录取！", fail_message: "很遗憾，学生未能达到东京大学社会学研究科的严苛要求。"
    },
    {
        id: "goal_waseda_econ", name: "早稻田大学 经济学研究科",
        requires: { gpa: 3.5, jlpt: 80, toefl: 85, logic_skill: 75, cultural_adaptability: 70, psychological_resilience: 65, confidence: 70, academic_score: 80, narrative_coherence: 70 },
        description: "日本私立双雄之一，对逻辑思维和研究计划有较高要求。",
        pass_message: "恭喜！学生成功被早稻田大学经济学研究科录取！", fail_message: "学生未能成功申请早稻田大学经济学研究科。"
    }
];

// 导师策略性回答 (更具指导性)
const strategicFallbackResponses = [
    "您的问题触及了留学的深层博弈点。在信息之外，我们更需洞察“认知差”。我们的辅导重点是：文理融合和逻辑重构。",
    "这正是许多同学忽视的“隐形壁垒”。如何利用心理学策略破解它，将劣势转化为优势，是我们的专长。",
    "让我们从根源上分析这个问题，并找到一个能够将劣势转化为优势的“破局点”。请提供更多背景信息，例如：专业、目标院校。",
    "关于这一点，我们的“AI升学破局模拟”或许能给您更直观的体验，模拟不同策略的效果。好的战略才是胜利的关键。"
];


// --- 3. 游戏全局状态 (保持不变) ---
let gameState = {
    currentPhase: "honeymoon_phase",
    turn: 0, maxTurns: 10,
    playerEnergy: 0, playerInsight: 0, playerCredit: 0,
    currentStudent: null, targetGoal: null,
    playerHand: [], activeChallenges: [], selectedCard: null,
    gameStarted: false, gameOver: false,
    phaseDescriptions: {
        "honeymoon_phase": { name: "蜜月期", description: "学生对留学充满憧憬，潜在压力未显现。", challenge_odds_modifier: 0.5 },
        "crisis_phase": { name: "危机期 (文化冲击)", description: "学生面对文化差异和压力，易出现焦虑。", challenge_odds_modifier: 1.5 },
        "adjustment_phase": { name: "恢复期", description: "学生逐渐适应挑战，从困境中学习。", challenge_odds_modifier: 1.0 },
        "adaptation_phase": { name: "适应期", description: "学生已基本适应，是冲刺目标的时机。", challenge_odds_modifier: 0.8 }
    }
};

// --- 4. 辅助工具函数 (保持不变) ---
function getRandomInt(max) { return Math.floor(Math.random() * max); }
function getRandomElement(arr) { return arr[getRandomInt(arr.length)]; }
function showLoading() { loadingIndicator.classList.remove('hidden'); chatBody.scrollTop = chatBody.scrollHeight; }
function hideLoading() { loadingIndicator.classList.add('hidden'); }

async function sendAiMessage(message, delay = 1000) {
    showLoading();
    await new Promise(resolve => setTimeout(resolve, delay));
    hideLoading();
    const aiMessageDiv = document.createElement('div');
    aiMessageDiv.classList.add('message', 'ai-message');
    aiMessageDiv.innerHTML = `<div class="bubble">${message}</div>`;
    chatBody.appendChild(aiMessageDiv);
    chatBody.scrollTop = chatBody.scrollHeight;
}

function sendUserMessage(message) {
    const userMessageDiv = document.createElement('div');
    userMessageDiv.classList.add('message', 'user-message');
    userMessageDiv.innerHTML = `<div class="bubble">${message}</div>`;
    chatBody.appendChild(userMessageDiv);
    chatBody.scrollTop = chatBody.scrollHeight;
}

function updateStudentDashboard() {
    // ... (保持不变)
    if (!gameState.currentStudent) return;
    const student = gameState.currentStudent;
    
    // 更新学生属性
    dashGPA.textContent = student.gpa.toFixed(1); dashJLPT.textContent = student.jlpt; dashTOEFL.textContent = student.toefl;
    dashCulturalAdaptability.textContent = student.cultural_adaptability.toFixed(0); dashPsychologicalResilience.textContent = student.psychological_resilience.toFixed(0);
    dashLogicSkill.textContent = student.logic_skill.toFixed(0); dashConfidence.textContent = student.confidence.toFixed(0); dashAnxiety.textContent = student.anxiety.toFixed(0);
    dashTraits.textContent = student.traits.map(t => t.replace(/_/g, ' ')).join(', ');
    currentStudentNameDisplay.textContent = student.name;

    // 更新颜色指示 (保持不变)
    const updateDashItemColor = (element, value, goodThreshold, badThreshold, inverted = false) => {
        const parent = element.parentNode;
        parent.classList.remove('positive', 'negative', 'neutral');
        let currentStatus = 'neutral';
        if (inverted) { if (value <= goodThreshold) currentStatus = 'positive'; else if (value >= badThreshold) currentStatus = 'negative'; }
        else { if (value >= goodThreshold) currentStatus = 'positive'; else if (value <= badThreshold) currentStatus = 'negative'; }
        parent.classList.add(currentStatus);
    };
    updateDashItemColor(dashGPA, student.gpa, 3.7, 3.0); updateDashItemColor(dashJLPT, student.jlpt, 90, 70); updateDashItemColor(dashTOEFL, student.toefl, 90, 70);
    updateDashItemColor(dashCulturalAdaptability, student.cultural_adaptability, 70, 40); updateDashItemColor(dashPsychologicalResilience, student.psychological_resilience, 70, 40);
    updateDashItemColor(dashLogicSkill, student.logic_skill, 70, 40); updateDashItemColor(dashConfidence, student.confidence, 70, 40);
    updateDashItemColor(dashAnxiety, student.anxiety, 40, 70, true);
}

function updateTargetGoalDisplay() {
    // ... (保持不变)
    if (!gameState.targetGoal || !gameState.currentStudent) return;
    targetGoalNameDisplay.textContent = gameState.targetGoal.name;
    targetGoalRequirementsDisplay.innerHTML = '';
    
    const relevantKeys = ['gpa', 'jlpt', 'toefl', 'logic_skill', 'cultural_adaptability', 'psychological_resilience', 'confidence', 'academic_score', 'narrative_coherence'];

    relevantKeys.forEach(reqKey => {
        if (gameState.targetGoal.requires.hasOwnProperty(reqKey)) {
            const requiredValue = gameState.targetGoal.requires[reqKey];
            const studentValue = gameState.currentStudent[reqKey] || 0; 
            const isMet = studentValue >= requiredValue;
            
            const reqItem = document.createElement('div');
            reqItem.classList.add('goal-requirement-item', isMet ? 'met' : 'unmet');
            
            let displayKey = reqKey.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
            if (reqKey === 'gpa') displayKey = 'GPA'; 
            if (reqKey === 'jlpt') displayKey = 'JLPT'; 
            if (reqKey === 'toefl') displayKey = 'TOEFL';
            
            const studentValueStr = reqKey === 'gpa' ? studentValue.toFixed(1) : studentValue.toFixed(0);
            const requiredValueStr = reqKey === 'gpa' ? requiredValue.toFixed(1) : requiredValue.toFixed(0);

            reqItem.innerHTML = `${displayKey}: <span>${studentValueStr} / ${requiredValueStr}</span>`;
            targetGoalRequirementsDisplay.appendChild(reqItem);
        }
    });
}

// 侧栏内容 (基于秋武老师数据优化)
const contentMap = {
    'strength': `<div class="detail-card">
        <h3>核心优势：以破绽为支点</h3>
        <p>【秋武老师】我们的核心优势在于“认知差破局”与“心理学博弈论”的深度融合。我们不仅仅提供信息和文书指导，更帮助您重构思维，将留学申请的“破绽”转化为战略支点。</p>
        <ul>
            <li><strong>东大基准逻辑重构:</strong> 确保研究计划书满足日本顶尖学府的逻辑要求。</li>
            <li><strong>费用置换模式:</strong> 独特的商业模式，让您无额外支出享受高端一对一辅导。</li>
            <li><strong>心理学博弈:</strong> 指导您在套磁和面试中“读空气”，避免被动。</li>
        </ul>
        <a href="#" class="link-btn" style="color: var(--color-primary);">预约深度战略分析</a>
    </div>`,
    'model': `<div class="detail-card">
        <h3>辅导模式与价值承诺</h3>
        <p>【秋武老师】我们提供定制化、高透明度的辅导模式，旨在建立真正的信用契约。</p>
        <ul>
            <li><strong>免辅导费模式:</strong> 通过我推荐进入合作机构，免除您的辅导费用，三方共赢。</li>
            <li><strong>个人精细化辅导:</strong> 区别于大机构流水线，只接能出成果的学生，确保投入度。</li>
            <li><strong>结果导向:</strong> 辅导核心是提供“文理融合”的跨学科视角。</li>
        </ul>
        <a href="#" class="link-btn" style="color: var(--color-primary);">了解费用置换详情</a>
    </div>`,
    'cases': `<div class="detail-card">
        <h3>成功案例 / 更多思考</h3>
        <p>【秋武老师】我们成功帮助多位背景普通的学生获得顶尖研究科的录取，关键在于：</p>
        <ul>
            <li><strong>双非逆袭的逻辑:</strong> 用一篇逻辑自洽的研究计划书，弥补学校背景的不足。</li>
            <li><strong>跨专业转型:</strong> 发现新旧专业间的隐性关联，成功说服教授认可转专业动机。</li>
            <li><strong>不犯错哲学:</strong> 从最小的失误开始改正，积累小成就，避免因重复错误而失败。</li>
        </ul>
        <a href="#" class="link-btn" style="color: var(--color-primary);">阅读更多破局故事</a>
    </div>`
};

function showContent(contentKey) {
    if (!menuList || !contentDetail || !dynamicContent) return;
    // 隐藏主页信息和菜单，显示详情
    profileCover.classList.add('hidden');
    menuList.classList.add('hidden');
    contentDetail.classList.remove('hidden');
    dynamicContent.innerHTML = contentMap[contentKey] || `<div class="detail-card"><h3>内容缺失</h3><p>抱歉，请求的内容暂时无法显示。</p></div>`;
}

// ... (startGameSimulation, updateGameUI, renderHand, renderChallenges, selectCard, drawCards 保持不变)

// --- 5. 游戏流程控制 (保持不变) ---
async function startGameSimulation() {
    // ... (保持不变)
    if (!chatSection || !gameSimulationSection) { console.error("关键 DOM 元素未找到"); return; }
    
    // 切换 UI 视图
    chatSection.classList.add('hidden');
    gameSimulationSection.classList.remove('hidden');
    profileCover.classList.add('hidden');
    menuList.classList.add('hidden');
    contentDetail.classList.add('hidden');

    // 初始化游戏状态
    gameState.gameStarted = true; gameState.gameOver = false; gameState.turn = 0;
    gameState.playerEnergy = 10; gameState.playerInsight = 0; gameState.playerCredit = 0;
    gameState.currentPhase = "honeymoon_phase"; gameState.playerHand = []; gameState.activeChallenges = []; gameState.selectedCard = null;
    gameResultScreen.classList.add('hidden'); btnApplyStrategy.classList.add('hidden');

    // 随机选择学生和目标，并添加 has_trait 方法
    const initialStudent = getRandomElement(studentCards);
    gameState.currentStudent = JSON.parse(JSON.stringify(initialStudent)); 
    gameState.currentStudent.has_trait = function(traitName) { return this.traits.includes(traitName); };
    gameState.targetGoal = getRandomElement(goalCards);

    // 首次消息
    await sendAiMessage(`欢迎来到【AI 升学破局模拟】！您辅导的学生是：<strong>${gameState.currentStudent.name}</strong>。<br>目标：<strong>${gameState.targetGoal.name}</strong>。<br><br>请点击“抽牌”开始您的第一次策略部署！`, 100);
    updateGameUI(); 
    drawCards(3); // 初始抽卡
}

function updateGameUI() {
    // ... (保持不变)
    gamePhaseDisplay.textContent = `${gameState.phaseDescriptions[gameState.currentPhase].name} (回合: ${gameState.turn}/${gameState.maxTurns})`;
    playerEnergyDisplay.textContent = gameState.playerEnergy; playerInsightDisplay.textContent = gameState.playerInsight; playerCreditDisplay.textContent = gameState.playerCredit;
    
    gameState.playerEnergy = Math.max(0, gameState.playerEnergy);
    gameState.playerInsight = Math.max(0, gameState.playerInsight);
    gameState.playerCredit = Math.max(0, gameState.playerCredit);
    
    updateStudentDashboard(); 
    updateTargetGoalDisplay(); 
    renderHand(); 
    renderChallenges();
    
    if (gameState.selectedCard) {
        const cost = gameState.selectedCard.cost;
        const canAfford = gameState.playerEnergy >= (cost.energy || 0) && gameState.playerInsight >= (cost.insight || 0) && gameState.playerCredit >= (cost.credit || 0);
        if (canAfford) { btnApplyStrategy.classList.remove('hidden'); } else { btnApplyStrategy.classList.add('hidden'); }
    } else { 
        btnApplyStrategy.classList.add('hidden'); 
    }
}

function renderHand() {
    // ... (保持不变)
    playerHandContainer.innerHTML = '';
    if (gameState.playerHand.length === 0) { playerHandContainer.innerHTML = '<div class="placeholder-hand">请抽牌获取策略卡</div>'; }
    
    gameState.playerHand.forEach((card, index) => {
        if (!card.instanceId) { card.instanceId = Date.now() + Math.random(); }
        
        const cardElement = document.createElement('div');
        cardElement.classList.add('card', 'strategy-card');
        
        if (gameState.selectedCard && gameState.selectedCard.instanceId === card.instanceId) { 
            cardElement.classList.add('selected'); 
        }
        
        cardElement.dataset.index = index; 
        
        let costDisplay = ''; 
        if (card.cost.energy) costDisplay += `精力: ${card.cost.energy} `; 
        if (card.cost.insight) costDisplay += `洞察: ${card.cost.insight} `; 
        if (card.cost.credit) costDisplay += `信用: ${card.cost.credit} `;

        cardElement.innerHTML = `<div class="card-title">${card.name}</div><div class="card-type">${card.subtype.replace(/_/g, ' ')}</div><div class="card-cost">消耗: ${costDisplay.trim() || '无'}</div><div class="card-description">${card.description}</div>`;
        playerHandContainer.appendChild(cardElement);
        
        cardElement.addEventListener('click', () => selectCard(card, index));
    });
}

function renderChallenges() {
    // ... (保持不变)
    activeChallengesContainer.innerHTML = '';
    if (gameState.activeChallenges.length === 0) { activeChallengesContainer.innerHTML = '<div class="placeholder-challenge">当前无挑战</div>'; }
    gameState.activeChallenges.forEach((challenge) => {
        const cardElement = document.createElement('div'); 
        cardElement.classList.add('card', 'challenge-card'); 
        
        const solutionName = strategyCards.find(s => s.id === challenge.solution_strategy_id)?.name || '未知策略';
        
        const penaltyHtml = Object.entries(challenge.penalty).map(([key, value]) => {
            let displayKey = key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
            return `${displayKey}: ${value > 0 ? '+' : ''}${value}`;
        }).join(', ');
        
        cardElement.innerHTML = `
            <div class="card-title">${challenge.name}</div>
            <div class="card-type">挑战卡</div>
            <div class="card-description">
                ${challenge.description}<br>
                <span style="color: #ffdddd;">惩罚: ${penaltyHtml}</span>
                <br><span style="color: #bbffbb;">推荐策略: ${solutionName}</span>
            </div>`;
        activeChallengesContainer.appendChild(cardElement);
    });
}

function selectCard(card, index) {
    // ... (保持不变)
    if (gameState.selectedCard && gameState.selectedCard.instanceId === card.instanceId) { 
        gameState.selectedCard = null; 
    } else { 
        gameState.selectedCard = { ...card, instanceId: card.instanceId, handIndex: index }; 
    }
    updateGameUI();
}

function drawCards(num = 1) {
    // ... (保持不变)
    if (gameState.playerHand.length >= 5) { sendAiMessage("您的手牌已满，无法再抽牌。", 500); return; }
    let drawnCount = 0;
    for (let i = 0; i < num; i++) {
        if (gameState.playerHand.length >= 5) break;
        const newCard = { ...getRandomElement(strategyCards), instanceId: Date.now() + Math.random() }; 
        gameState.playerHand.push(newCard); 
        drawnCount++;
    }
    if (drawnCount > 0) sendAiMessage(`您抽到了 ${drawnCount} 张策略卡！`, 500);
    updateGameUI();
}

async function parseAndApplyEffect(effectCode) {
    // ... (保持不变)
    const student = gameState.currentStudent;
    const state = gameState; 
    const alertMessages = [];

    function ALERT(msg) { alertMessages.push(msg); }
    function GAIN(resource, value) {
        if (resource === 'energy') state.playerEnergy += value;
        if (resource === 'insight') state.playerInsight += value;
        if (resource === 'credit') state.playerCredit += value;
    }

    let processedCode = effectCode.replace(/GAIN\s+(\w+)\s*=\s*(\d+)/g, (match, resource, value) => `GAIN('${resource}', ${value})`);

    const attributeRegex = /student\.(\w+)\s*([+-]=)\s*(\d+(\.\d+)?)/g;
    processedCode = processedCode.replace(attributeRegex, (match, attr, op, value) => {
        return `student['${attr}'] ${op} ${value}`;
    });

    try {
        new Function('student', 'state', 'ALERT', 'GAIN', processedCode)(student, state, ALERT, GAIN);
    } catch (e) {
        console.error("策略效果执行失败:", e, "代码:", processedCode);
    }

    return alertMessages;
}

async function tryApplyStrategy() {
    // ... (保持不变)
    const card = gameState.selectedCard;
    if (!card) { await sendAiMessage("请先选择一张策略卡。", 500); return; }

    const energyCost = card.cost.energy || 0;
    const insightCost = card.cost.insight || 0;
    const creditCost = card.cost.credit || 0;

    if (gameState.playerEnergy < energyCost || gameState.playerInsight < insightCost || gameState.playerCredit < creditCost) {
        await sendAiMessage("精力/洞察力/信用分不足，无法应用此策略。", 500);
        updateGameUI();
        return;
    }

    // 扣除费用
    gameState.playerEnergy -= energyCost;
    gameState.playerInsight -= insightCost;
    gameState.playerCredit -= creditCost;

    // 应用效果
    const alertMsgs = await parseAndApplyEffect(card.effect_code);
    
    // 移除卡牌和选择状态
    gameState.playerHand.splice(card.handIndex, 1);
    gameState.selectedCard = null;

    // 处理消息反馈
    let feedback = `成功应用策略：【${card.name}】。`;
    if (alertMsgs.length > 0) {
        feedback += `<br><strong>系统反馈:</strong> ${alertMsgs.join(' ')}`;
    }
    
    // 检查是否有挑战被此策略解决
    const solvedChallengeIndex = gameState.activeChallenges.findIndex(c => c.solution_strategy_id === card.id);
    if (solvedChallengeIndex !== -1) {
        const solvedChallenge = gameState.activeChallenges.splice(solvedChallengeIndex, 1)[0];
        feedback += `<br><strong>[挑战解除]</strong>：成功解决了挑战“${solvedChallenge.name}”。`;
    }
    
    await sendAiMessage(feedback + `<br>当前学生状态已更新，请查看仪表板。`, 800);

    updateGameUI();
}

async function endTurn() {
    // ... (保持不变)
    if (gameState.gameOver || !gameState.gameStarted) return;

    gameState.turn++;
    await sendAiMessage(`--- 第 ${gameState.turn} 回合结束 ---`, 500);
    
    // 1. 回合结束资源补充和状态变化
    gameState.playerEnergy = Math.min(10, gameState.playerEnergy + 3); // 补充精力
    gameState.currentStudent.anxiety = Math.min(100, gameState.currentStudent.anxiety + 5); // 焦虑度小幅增加

    // 2. 检查游戏结束条件
    if (checkGoalCompletion()) {
        return;
    }
    
    if (gameState.turn >= gameState.maxTurns) {
        endGame(false); // 回合用尽
        return;
    }

    // 3. 阶段切换
    if (gameState.turn === 3) {
        gameState.currentPhase = "crisis_phase";
        await sendAiMessage("--- 阶段切换：进入 **危机期 (文化冲击)** ---，学生压力增大，挑战概率和难度上升！", 1000);
    } else if (gameState.turn === 6) {
        gameState.currentPhase = "adjustment_phase";
        await sendAiMessage("--- 阶段切换：进入 **恢复期** ---，策略效果开始显现。", 1000);
    } else if (gameState.turn === 8) {
        gameState.currentPhase = "adaptation_phase";
        await sendAiMessage("--- 阶段切换：进入 **适应期** ---，冲刺阶段。", 1000);
    }

    // 4. 检查并触发新挑战
    await checkAndTriggerChallenges();
    
    // 5. 新回合开始
    await sendAiMessage(`--- 第 ${gameState.turn + 1} 回合开始 ---。请抽牌并部署新策略。`, 500);
    drawCards(3); // 新回合抽卡
    updateGameUI();
}

function checkGoalCompletion() {
    // ... (保持不变)
    const student = gameState.currentStudent;
    const required = gameState.targetGoal.requires;
    
    const allMet = Object.keys(required).every(key => student[key] >= required[key]);
    
    if (allMet) {
        endGame(true); // 目标达成
        return true;
    }
    
    if (student.anxiety > 95) {
         sendAiMessage("模拟因学生心理压力过大而提前中止。心理韧性是申请的关键！", 500);
         endGame(false);
         return true;
    }

    return false;
}

function endGame(success) {
    // ... (保持不变)
    gameState.gameOver = true;
    gameSimulationSection.classList.add('hidden');
    gameResultScreen.classList.remove('hidden');

    const resultHeader = gameResultScreen.querySelector('h3');
    const resultText = gameResultScreen.querySelector('p#gameResultText');

    if (success) {
        resultText.innerHTML = gameState.targetGoal.pass_message + `<br><br>您的策略部署非常成功，成功利用“认知差”破局！`;
        resultHeader.textContent = '模拟成功！🎉';
        resultHeader.style.color = 'var(--color-status-positive)';
    } else {
         resultText.innerHTML = gameState.targetGoal.fail_message + `<br><br>时间耗尽或学生状态崩溃。建议重新评估策略，特别是心理疏导和逻辑重构。`;
         resultHeader.textContent = '模拟失败...😔';
         resultHeader.style.color = 'var(--color-status-negative)';
    }
}

function resetGameSimulation() {
    // ... (保持不变)
    gameResultScreen.classList.add('hidden');
    startGameSimulation(); // 重新开始游戏
}

async function checkAndTriggerChallenges() {
    // ... (保持不变)
    const phaseModifier = gameState.phaseDescriptions[gameState.currentPhase].challenge_odds_modifier;
    const baseChance = 0.2 * phaseModifier;
    
    const triggeredChallenges = [];

    challengeCards.forEach(challenge => {
        if (gameState.activeChallenges.some(c => c.id === challenge.id)) return;
        
        let conditionMet = false;
        try {
            const student = gameState.currentStudent;
            const state = gameState;
            conditionMet = eval(challenge.trigger.replace(/student\.has_trait\('(.*?)'\)/g, `student.traits.includes('$1')`));
        } catch (e) {
            console.error("挑战触发条件评估失败:", e);
        }

        if (conditionMet && Math.random() < baseChance) {
            triggeredChallenges.push(challenge);
        }
    });

    for (const challenge of triggeredChallenges) {
        // 应用惩罚
        const student = gameState.currentStudent;
        for (const key in challenge.penalty) {
            if (student.hasOwnProperty(key)) {
                student[key] = student[key] + challenge.penalty[key];
                if (key !== 'gpa' && key !== 'jlpt' && key !== 'toefl') {
                    student[key] = Math.max(0, Math.min(100, student[key]));
                }
            }
        }
        gameState.activeChallenges.push(challenge);
        await sendAiMessage(`<strong>[新挑战]</strong>：学生遭遇“${challenge.name}”！学生属性受到影响，请尽快应用策略解决！`, 1000);
    }
}

// ... (toggleMenu, backToMenu, showChatSection 保持不变)

// --- 6. UI 菜单和聊天模式切换逻辑 (保持不变) ---
function toggleMenu(isExpanded) {
    if (isExpanded) {
        profileCover.classList.add('hidden');
        menuList.classList.remove('hidden');
    } else {
        menuList.classList.add('hidden');
        contentDetail.classList.add('hidden'); 
        profileCover.classList.remove('hidden');
    }
}

function backToMenu() {
    contentDetail.classList.add('hidden');
    menuList.classList.remove('hidden');
    profileCover.classList.add('hidden');
}

function showChatSection() {
    gameSimulationSection.classList.add('hidden');
    chatSection.classList.remove('hidden');
    
    profileCover.classList.remove('hidden');
    menuList.classList.add('hidden');
    contentDetail.classList.add('hidden');
    
    if (gameState.gameStarted && !gameState.gameOver) {
        sendAiMessage("模拟暂停。有什么关于申请的实际问题需要咨询吗？随时可以点击左侧菜单的“AI 升学破局模拟”继续部署策略。", 100);
    }
}


// --- 7. 聊天功能 (核心重构：深度利用 QA 数据) ---

function handleKeyPress(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}

function sendMessage() {
    const message = userInput.value.trim();
    if (message === "") return;

    sendUserMessage(message);
    userInput.value = '';

    let response = null;
    let maxMatchLength = 0;

    // 尝试匹配 QA 数据库 (最长匹配优先，提高准确性)
    const lowerCaseMessage = message.toLowerCase();
    
    for (const key in qaDatabase) {
        if (lowerCaseMessage.includes(key) && key.length > maxMatchLength) {
            response = qaDatabase[key];
            maxMatchLength = key.length;
        }
    }

    if (response) {
        // 匹配到关键词，直接给出秋武老师的专业回答
        sendAiMessage(response);
    } else {
        // 未匹配到关键词，给出策略性/引导性回答
        let fallbackResponse = getRandomElement(strategicFallbackResponses);
        
        if (lowerCaseMessage.length > 20 && lowerCaseMessage.includes('如何')) {
            fallbackResponse = "您的问题很关键，涉及深层战略。请告诉我您的具体背景和目标，我将提供更精准的“破局点”分析。";
        }
        
        sendAiMessage(fallbackResponse);
    }
}


// --- 8. 初始化事件监听 (保持不变) ---
document.addEventListener('DOMContentLoaded', () => {
    if (sendButton) {
        sendButton.addEventListener('click', sendMessage);
    }
    
    // 确保初始状态正确
    if (chatSection) { chatSection.classList.remove('hidden'); }
    if (gameSimulationSection) { gameSimulationSection.classList.add('hidden'); }
    if (profileCover) { profileCover.classList.remove('hidden'); }
    if (menuList) { menuList.classList.add('hidden'); }
    if (contentDetail) { contentDetail.classList.add('hidden'); }
});
