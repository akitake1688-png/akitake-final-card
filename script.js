// script.js - 最终版 (AI 留学咨询室 - 深度定制版 / 策略模拟系统)

// --- 1. 全局UI元素引用 ---
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
const dashLogicSkill = document = document.getElementById('dashLogicSkill');
const dashConfidence = document.getElementById('dashConfidence');
const dashAnxiety = document.getElementById('dashAnxiety');
const dashTraits = document.getElementById('dashTraits');
const targetGoalNameDisplay = document.getElementById('targetGoalName');
const targetGoalRequirementsDisplay = document.getElementById('targetGoalRequirements');
const activeChallengesContainer = document.getElementById('activeChallengesContainer');
const playerHandContainer = document.getElementById('playerHandContainer');
const gameResultScreen = document.getElementById('gameResultScreen');
const gameResultText = document.getElementById('gameResultText');
const btnApplyStrategy = document.querySelector('.btn-apply-strategy'); // 获取应用策略按钮


// --- 2. 核心数据存储 (全部统一在此定义) ---

// QA 数据库 (保留原有结构，用于聊天和游戏内的AI提示)
const qaDatabase = {
    "费用": "日本留学费用因学校、地区和生活方式差异较大。国立大学学费约每年54万日元，私立大学文科约70-120万日元，理科约100-150万日元。生活费每月约8-12万日元。我们会提供详细的费用明细和节省策略，甚至有创新的“费用置换模式”来帮助您降低门槛。",
    "双非背景": "双非背景并非绝境，关键在于“认知差”破局。日本教授更看重研究潜力、逻辑自洽与个人叙事。我们会指导您通过差异化研究计划、突出实践经验、以及展现独特的跨文化适应力来弥补背景劣势，甚至将其转化为独特优势。",
    "套磁": "套磁是日本留学中的“心理学博弈”。不只是发邮件，更要“读空气”，理解教授的隐藏需求和研究方向的“破绽”。我们会提供定制化的套磁信模板，并指导您如何分析教授论文、把握沟通节奏，甚至利用心理暗示提升成功率。",
    "研究计划书": "研究计划书是申请核心。我们的“向量逻辑降维法”能帮助您将宏大概念拆解为具体可行的研究课题，确保逻辑严谨、具备可操作性。同时融入“破绽利用法”，让您的研究计划书在众多申请者中脱颖而出，直击教授兴趣点。",
    "面试": "面试是综合能力的体现，更是“读空气”的关键战场。我们提供模拟面试和情境训练，不仅包括语言表达，更侧重于肢体语言、眼神交流、以及如何回应教授的“言外之意”。通过“防御性悲观训练”，帮助您消除焦虑，以最佳心态应对。",
    "优势": "我们的核心优势在于“认知差破局”与“心理学博弈论”的深度融合。我们不仅仅提供信息和文书指导，更帮助您重构思维，识别并利用申请过程中的“隐形壁垒”，将劣势转化为优势。我们承诺结果导向，甚至有“费用置换”模式，真正与您站在一起。",
    "文化": "日本留学中，文化适应至关重要。这不仅是生活习惯，更是学术和人际交往的“读空气”。我们会提供深入的日本文化心理学解析，例如“建前与本音”、“内与外”的边界，帮助您理解教授和日本社会潜在的沟通模式，避免误解，顺利融入。",
    "焦虑": "留学准备过程中的焦虑是常态。我们会引入“防御性悲观”理论，帮助您预设风险、提前准备，反而能有效降低临场焦虑。同时，通过“微实绩积累法”，将大目标分解为小任务，逐步提升自信心和掌控感，缓解心理压力。",
    "跨专业": "跨专业申请并非劣势，而是独特的“破绽利用”机会。关键在于如何构建一个逻辑自洽、动机明确的转专业叙事。我们将指导您发现新旧专业间的隐性关联，运用“逻辑链条重构”，向教授展现您的学习能力和独特视角，将跨专业背景转化为教授眼中的创新潜质。",
    "学费": "请参考“费用”的答案，包含详细学费信息。"
    // ... 更多问答
};

// 导师的心理学策略性回答（兜底或引导）
const strategicFallbackResponses = [
    "您的问题触及了留学的深层博弈点。在信息之外，我们更需洞察“认知差”。",
    "这正是许多同学忽视的“隐形壁垒”。如何利用心理学策略破解它，是我们的专长。",
    "让我们从根源上分析这个问题，并找到一个能够将劣势转化为优势的“破局点”。",
    "您提出的疑问很有价值。除了直接答案，您是否还想了解背后的“文化逻辑”或“教授心理”？",
    "每一个问题背后都隐藏着机会。重要的是，如何用“逆向思维”去发现并利用它。",
    "关于这一点，我们的“AI升学破局模拟”或许能给您更直观的体验，模拟不同策略的效果。"
];

// --- 新增：卡牌数据定义 (全部集中在此处) ---

// 学生卡数据
const studentCards = [
    {
        id: "student_basic_001",
        name: "普通本科生",
        image: "avatar.jpg", // 统一使用 avatar.jpg
        initialAttributes: {
            gpa: 3.0,
            jlpt: 70, // N2水平
            toefl: 75,
            logic_skill: 50,
            cultural_adaptability: 40, // 初始适应性一般
            psychological_resilience: 60,
            confidence: 50,
            anxiety: 30,
            academic_score: 50, // 综合学术能力
            narrative_coherence: 50 // 叙事连贯性
        },
        traits: ["common_background", "motivated"],
        description: "一名积极上进的普通本科生，寻求日本升学机会，但缺少突出亮点。"
    },
    {
        id: "student_double_non_001",
        name: "双非背景学生",
        image: "avatar.jpg", // 统一使用 avatar.jpg
        initialAttributes: {
            gpa: 3.5,
            jlpt: 80, // N1水平
            toefl: 85,
            logic_skill: 60,
            cultural_adaptability: 30, // 可能因背景而内心有些自卑，适应性偏低
            psychological_resilience: 50,
            confidence: 40,
            anxiety: 40,
            academic_score: 60,
            narrative_coherence: 45 // 叙事可能因背景受限
        },
        traits: ["double_non_background", "highly_motivated", "cross_major_potential"],
        description: "虽然出身双非，但学习能力和动机强烈，渴望通过留学突破自我。需要特别的策略来弥补背景劣势。"
    },
    {
        id: "student_elite_001",
        name: "潜力优秀生",
        image: "avatar.jpg", // 统一使用 avatar.jpg
        initialAttributes: {
            gpa: 3.8,
            jlpt: 90, // N1高分
            toefl: 95,
            logic_skill: 75,
            cultural_adaptability: 60,
            psychological_resilience: 70,
            confidence: 70,
            anxiety: 20,
            academic_score: 80,
            narrative_coherence: 70
        },
        traits: ["strong_academic", "proactive", "some_perfectionism_risk"],
        description: "学术背景优秀，语言能力强，但可能存在完美主义倾向，需要引导以适应日本申请的独特要求。"
    }
];

// 策略卡数据
const strategyCards = [
    {
        id: "strategy_logic_001",
        name: "向量逻辑降维法",
        type: "strategy",
        subtype: "cognitive_reconstruction",
        cost: { energy: 3 },
        effect_code: "IF student.logic_skill < 70 THEN student.logic_skill += 20; student.narrative_coherence += 15; GAIN insight=10;",
        description: "将宏大模糊的课题细化，提升学生逻辑思维和研究计划书的连贯性，并获得指导洞察力。",
        flavor_text: "化繁为简，直击本质。"
    },
    {
        id: "strategy_psych_001",
        name: "防御性悲观训练",
        type: "strategy",
        subtype: "psychological_intervention",
        cost: { energy: 4 },
        effect_code: "IF student.anxiety > 40 THEN student.anxiety -= 20; student.psychological_resilience += 15; GAIN insight=10;",
        description: "通过预设最坏结果并针对性准备，降低临场焦虑，提升心理韧性。尤其适用于面试前。",
        flavor_text: "未雨绸缪，方能从容不迫。"
    },
    {
        id: "strategy_culture_001",
        name: "教授潜台词分析",
        type: "strategy",
        subtype: "cultural_decryption",
        cost: { energy: 5 },
        effect_code: "IF student.cultural_adaptability < 70 THEN student.cultural_adaptability += 25; student.confidence += 10; GAIN insight=15;",
        description: "深度解析日本教授的沟通习惯，理解言外之意和非语言暗示，大幅提升学生在面试和套磁中的文化适应度。",
        flavor_text: "读懂空气，洞察人心。"
    },
    {
        id: "strategy_narrative_001",
        name: "破绽利用法",
        type: "strategy",
        subtype: "cognitive_reconstruction",
        cost: { energy: 4 },
        effect_code: "IF student.has_trait('double_non_background') OR student.has_trait('cross_major_potential') THEN student.narrative_coherence += 20; student.academic_score += 10; GAIN insight=10; ELSE GAIN insight=5;",
        description: "将看似的劣势或“破绽”重新解读，构建独特且有说服力的个人叙事，将其转化为教授眼中的潜力与动机。",
        flavor_text: "反败为胜，扭转乾坤。"
    },
    {
        id: "strategy_confidence_001",
        name: "微实绩积累法",
        type: "strategy",
        subtype: "psychological_intervention",
        cost: { energy: 3 },
        effect_code: "student.confidence += 15; student.anxiety -= 10; GAIN energy=1;", // 使用此卡可能返还精力
        description: "将大目标分解为一系列可达成的小目标，通过持续获得小成功来积累自信，减轻压力。",
        flavor_text: "点滴积累，自信倍增。"
    },
    {
        id: "strategy_social_001",
        name: "导师印象管理",
        type: "strategy",
        subtype: "relationship_building",
        cost: { energy: 4 },
        effect_code: "IF student.has_trait('introvert') THEN student.cultural_adaptability += 15; student.confidence += 10; GAIN credit=5; ELSE student.cultural_adaptability += 10; GAIN credit=3;",
        description: "指导学生如何通过邮件、交流等方式，在不失真的前提下，给潜在导师留下积极专业的印象。",
        flavor_text: "细节决定成败，印象定未来。"
    },
    {
        id: "strategy_finance_001",
        name: "费用置换契约",
        type: "strategy",
        subtype: "resource_integration",
        cost: { insight: 30, credit: 20 }, // 需要高洞察和信用才能使用
        effect_code: "student.application_score += 30; gameState.gamePhase = 'adaptation_phase'; GAIN credit=50; ALERT('费用置换契约成功！学生申请压力大幅降低，申请成功率飙升！');",
        description: "通过与合作机构的费用置换模式，大幅降低学生的经济压力，加速申请进程。仅在特定条件下可用。",
        flavor_text: "零成本留学，价值共赢。"
    }
];

// 挑战卡数据
const challengeCards = [
    {
        id: "challenge_rp_001",
        name: "研究计划书选题过大",
        type: "challenge",
        category: "cognitive_bias",
        trigger: "student.academic_score < 60 && student.logic_skill < 60 && gameState.turn > 2", // 当学术或逻辑低于特定值时易触发
        penalty: { logic_skill: -15, narrative_coherence: -10, anxiety: 10 },
        description: "学生的研究计划书主题过于宏大模糊，缺乏具体可行的研究切入点。",
        solution_strategy_id: "strategy_logic_001", // 向量逻辑降维法
        flavor_text: "方向迷失，寸步难行。"
    },
    {
        id: "challenge_culture_001",
        name: "面试读空气失败",
        type: "challenge",
        category: "cultural_conflict",
        trigger: "student.cultural_adaptability < 50 && gameState.gamePhase === 'crisis_phase' && gameState.turn > 4", // 危机期适应性低时易触发
        penalty: { cultural_adaptability: -15, confidence: -10, anxiety: 15 },
        description: "在教授面试中未能理解非语言暗示，导致沟通障碍，教授印象降低。",
        solution_strategy_id: "strategy_culture_001", // 教授潜台词分析
        flavor_text: "话不投机，如隔山海。"
    },
    {
        id: "challenge_psych_001",
        name: "申请期焦虑症",
        type: "challenge",
        category: "psychological_pressure",
        trigger: "student.anxiety > 60 || (gameState.gamePhase === 'crisis_phase' && gameState.turn > 3)", // 焦虑高或危机期触发
        penalty: { psychological_resilience: -10, confidence: -10, logic_skill: -5 },
        description: "长期申请压力导致学生焦虑情绪高涨，影响学习效率和决策判断。",
        solution_strategy_id: "strategy_psych_001", // 防御性悲观训练 或 微实绩积累法 (优先解决焦虑)
        flavor_text: "心魔作祟，寸步难行。"
    },
    {
        id: "challenge_motivation_001",
        name: "双非背景自卑",
        type: "challenge",
        category: "psychological_pressure",
        trigger: "student.has_trait('double_non_background') && student.confidence < 50 && gameState.turn > 1",
        penalty: { confidence: -20, narrative_coherence: -15, anxiety: 10 },
        description: "学生因国内双非背景产生自卑心理，影响文书撰写和面试表现。",
        solution_strategy_id: "strategy_narrative_001", // 破绽利用法
        flavor_text: "出身桎梏，自信蒙尘。"
    },
    {
        id: "challenge_communication_001",
        name: "教授回复冷淡",
        type: "challenge",
        category: "cultural_conflict",
        trigger: "student.cultural_adaptability < 60 && gameState.turn > 5 && Math.random() < 0.3", // 适应性低且随机触发
        penalty: { confidence: -10, anxiety: 5, application_score: -5 },
        description: "教授对套磁邮件的回复过于官方或冷淡，学生感到挫败和迷茫。",
        solution_strategy_id: "strategy_social_001", // 导师印象管理
        flavor_text: "热情被拒，心生寒意。"
    }
];

// 目标卡数据 (大学/专业)
const goalCards = [
    {
        id: "goal_tokyo_sociology",
        name: "东京大学 社会学研究科",
        image: "avatar.jpg", // 统一使用 avatar.jpg
        requires: {
            gpa: 3.8,
            jlpt: 90,
            toefl: 90,
            logic_skill: 85,
            cultural_adaptability: 80,
            psychological_resilience: 75,
            confidence: 80,
            academic_score: 90,
            narrative_coherence: 85
        },
        description: "日本顶尖学府的社会学研究科，对申请者综合能力要求极高，尤其看重批判性思维和跨文化理解。",
        pass_message: "恭喜！您成功协助学生斩获东京大学社会学研究科的录取！这不仅仅是学术上的成功，更是您运用心理学与文化策略的胜利！您的“认知差破局”能力在世界舞台上得到了验证！",
        fail_message: "很遗憾，学生未能达到东京大学社会学研究科的严苛要求。这反映了在顶级名校申请中，文化适应与心理博弈的复杂性。请复盘策略，重新尝试，每一次失败都是洞察力提升的机会！"
    },
    {
        id: "goal_waseda_econ",
        name: "早稻田大学 经济学研究科",
        image: "avatar.jpg", // 统一使用 avatar.jpg
        requires: {
            gpa: 3.5,
            jlpt: 80,
            toefl: 85,
            logic_skill: 75,
            cultural_adaptability: 70,
            psychological_resilience: 65,
            confidence: 70,
            academic_score: 80,
            narrative_coherence: 70
        },
        description: "日本私立双雄之一的经济学研究科，对申请者的逻辑思维和研究计划有较高要求，也注重学生的综合素质。",
        pass_message: "恭喜！学生成功被早稻田大学经济学研究科录取！这体现了在竞争激烈的私立名校中，策略性指导的巨大价值。您精准的“读空气”和“破绽利用”为学生打开了大门！",
        fail_message: "学生未能成功申请早稻田大学经济学研究科。这通常是由于在逻辑构建、文化理解或心理韧性上存在短板。分析问题，再次挑战，记住，失败是成功之母，更是认知重构的起点！"
    }
];

// --- 3. 游戏全局状态 ---
let gameState = {
    currentPhase: "honeymoon_phase", // "honeymoon_phase", "crisis_phase", "adjustment_phase", "adaptation_phase"
    turn: 0,
    maxTurns: 10, // 游戏最大回合数，模拟申请时间线
    playerEnergy: 10,
    playerInsight: 0,
    playerCredit: 0,
    currentStudent: null, // 当前辅导的学生卡对象
    targetGoal: null, // 当前目标大学卡对象
    playerHand: [], // 玩家手上的策略卡
    activeChallenges: [], // 当前生效的挑战卡
    selectedCard: null, // 当前玩家选择的卡牌 (策略卡)
    gameStarted: false,
    gameOver: false,
    // 异文化适应阶段的文本描述和效果
    phaseDescriptions: {
        "honeymoon_phase": {
            name: "蜜月期",
            description: "学生对留学充满憧憬和好奇，但潜在的文化差异和压力尚未显现。此阶段策略效果相对稳定。",
            challenge_odds_modifier: 0.5 // 挑战出现概率降低
        },
        "crisis_phase": {
            name: "危机期 (文化冲击)",
            description: "学生开始面对文化差异带来的困惑和压力，容易出现焦虑、自信下降等问题。此阶段挑战更频繁，心理类策略效果增强。",
            challenge_odds_modifier: 1.5, // 挑战出现概率增加
            psychological_strategy_bonus: 1.2 // 心理策略效果提升
        },
        "adjustment_phase": {
            name: "恢复期",
            description: "学生逐渐适应挑战，开始从困境中学习。此时策略效果趋于正常，学生属性回升潜力增大。",
            challenge_odds_modifier: 1.0
        },
        "adaptation_phase": {
            name: "适应期",
            description: "学生已基本适应日本文化和申请节奏，各项能力和心理状态稳定。此时应集中精力冲刺目标。",
            challenge_odds_modifier: 0.8 // 挑战出现概率降低
        }
    }
};

// --- 4. 辅助工具函数 ---

// 随机数函数
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

// 随机抽取数组元素
function getRandomElement(arr) {
    return arr[getRandomInt(arr.length)];
}

// 显示加载指示器
function showLoading() {
    loadingIndicator.classList.remove('hidden');
    chatBody.scrollTop = chatBody.scrollHeight; // 滚动到底部
}

// 隐藏加载指示器
function hideLoading() {
    loadingIndicator.classList.add('hidden');
}

// AI 消息发送，模拟打字延迟
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

// 用户消息发送
function sendUserMessage(message) {
    const userMessageDiv = document.createElement('div');
    userMessageDiv.classList.add('message', 'user-message');
    userMessageDiv.innerHTML = `<div class="bubble">${message}</div>`;
    chatBody.appendChild(userMessageDiv);
    chatBody.scrollTop = chatBody.scrollHeight;
}

// 更新学生仪表板
function updateStudentDashboard() {
    if (!gameState.currentStudent) return;

    const student = gameState.currentStudent;
    dashGPA.textContent = student.gpa.toFixed(1);
    dashJLPT.textContent = student.jlpt;
    dashTOEFL.textContent = student.toefl;
    dashCulturalAdaptability.textContent = student.cultural_adaptability.toFixed(0);
    dashPsychologicalResilience.textContent = student.psychological_resilience.toFixed(0);
    dashLogicSkill.textContent = student.logic_skill.toFixed(0);
    dashConfidence.textContent = student.confidence.toFixed(0);
    dashAnxiety.textContent = student.anxiety.toFixed(0);
    dashTraits.textContent = student.traits.map(t => t.replace(/_/g, ' ')).join(', ');
    currentStudentNameDisplay.textContent = student.name;

    // 根据数值范围添加颜色类
    const updateDashItemColor = (element, value, goodThreshold, badThreshold, inverted = false) => {
        element.classList.remove('positive', 'negative', 'neutral');
        let currentStatus = 'neutral';
        if (inverted) { // 越低越好 (如焦虑)
            if (value <= goodThreshold) currentStatus = 'positive';
            else if (value >= badThreshold) currentStatus = 'negative';
        } else { // 越高越好 (如GPA)
            if (value >= goodThreshold) currentStatus = 'positive';
            else if (value <= badThreshold) currentStatus = 'negative';
        }
        element.classList.add(currentStatus);
    };

    updateDashItemColor(dashGPA.parentNode, student.gpa, 3.7, 3.0);
    updateDashItemColor(dashJLPT.parentNode, student.jlpt, 90, 70);
    updateDashItemColor(dashTOEFL.parentNode, student.toefl, 90, 70);
    updateDashItemColor(dashCulturalAdaptability.parentNode, student.cultural_adaptability, 70, 40);
    updateDashItemColor(dashPsychologicalResilience.parentNode, student.psychological_resilience, 70, 40);
    updateDashItemColor(dashLogicSkill.parentNode, student.logic_skill, 70, 40);
    updateDashItemColor(dashConfidence.parentNode, student.confidence, 70, 40);
    updateDashItemColor(dashAnxiety.parentNode, student.anxiety, 40, 70, true); // 焦虑值越低越好，inverted = true
}

// 更新目标卡要求显示
function updateTargetGoalDisplay() {
    if (!gameState.targetGoal) return;

    targetGoalNameDisplay.textContent = gameState.targetGoal.name;
    targetGoalRequirementsDisplay.innerHTML = ''; // 清空旧的

    for (const reqKey in gameState.targetGoal.requires) {
        if (gameState.targetGoal.requires.hasOwnProperty(reqKey)) {
            const requiredValue = gameState.targetGoal.requires[reqKey];
            const studentValue = gameState.currentStudent[reqKey];
            const isMet = studentValue >= requiredValue;

            const reqItem = document.createElement('div');
            reqItem.classList.add('goal-requirement-item');
            reqItem.classList.add(isMet ? 'met' : 'unmet');
            
            let displayKey = reqKey.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase()); // 格式化显示名称
            if (reqKey === 'gpa') displayKey = 'GPA';
            if (reqKey === 'jlpt') displayKey = 'JLPT';
            if (reqKey === 'toefl') displayKey = 'TOEFL';


            reqItem.innerHTML = `${displayKey}: <span>${studentValue.toFixed(reqKey === 'gpa' ? 1 : 0)} / ${requiredValue.toFixed(reqKey === 'gpa' ? 1 : 0)}</span>`;
            targetGoalRequirementsDisplay.appendChild(reqItem);
        }
    }
}


// --- SNS 评论生成器 (原有功能，略作调整以适应整体结构) ---
const SNS_COMMENT_GENERATOR = {
    generate: function(postContent, mood = "professional_insight") {
        let comment = "【AI留学智囊团】深度评论：\n";

        // 基于帖子内容进行简单关键词分析
        const keywords = postContent.split(' ').map(w => w.toLowerCase());
        let insights = [];

        if (keywords.some(k => k.includes('焦虑') || k.includes('不安'))) {
            insights.push("博主分享的焦虑感，是留学路上的常见‘心魔’。如何在‘不确定性’中建立‘安全区’，正是心理学博弈的关键。");
        }
        if (keywords.some(k => k.includes('文书') || k.includes('计划书'))) {
            insights.push("关于文书，除了语言，更要用‘向量逻辑降维法’将个人经历与研究课题进行深度绑定，构建教授无法拒绝的‘认知差’。");
        }
        if (keywords.some(k => k.includes('教授') || k.includes('套磁'))) {
            insights.push("与教授沟通，不仅是信息传递，更是‘读空气’的艺术。我们需洞察‘建前与本音’，找到教授研究方向的‘破绽’’。");
        }
        if (keywords.some(k => k.includes('背景') || k.includes('双非'))) {
            insights.push("‘双非’并非劣势，而是转化‘破绽’的契机。关键在于如何重构叙事，展现独立思考与逆境成长力。");
        }
        if (keywords.some(k => k.includes('跨专业'))) {
            insights.push("跨专业是展现‘学习能力’与‘独特视角’的绝佳机会。用‘逻辑链条重构’，让教授看到你的无限潜力。");
        }
        if (keywords.some(k => k.includes('费用') || k.includes('经济'))) {
            insights.push("关于留学费用，我们提供创新的‘费用置换契约’模式，助你打破经济壁垒，实现无忧升学。");
        }
        if (insights.length === 0) {
            insights.push("感谢博主分享！留学路上，‘认知差’往往决定成败。如何洞察并利用，是我们的核心。");
        }

        comment += insights.join('\n\n');
        comment += "\n\n【关注我，解锁更多心理学博弈留学策略！[点此私信咨询]】"; // 引流信息

        return comment;
    }
};

// ... (script.js 的后续部分将继续)
