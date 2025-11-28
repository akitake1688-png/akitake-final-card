// script.js - 终极全覆盖版 (包含EJU修正、联系方式优先、关闭按钮及所有逻辑优化)

// ==========================================
// 零部分：平台启动提示 (带关闭功能)
// ==========================================

const initialWelcomeMessage = `
    <div style="padding: 10px; border: 1px solid #ffcc00; background-color: #fff8e1; border-radius: 5px; margin-bottom: 10px;">
        <h4 style="margin-top: 0; color: #ff6f00;">⚠️ 平台启动提示 (Disclaimer)</h4>
        <p style="margin-bottom: 5px; font-size: 0.95em;">本 AI 助手是基于**东大修士秋武老师**提供的逻辑和数据构建的**咨询及效率工具**。</p>
        <p style="margin-bottom: 10px; font-size: 0.95em;">请注意：AI 分析仅供**逻辑重构和策略参考**，所有**最终申请材料和决策**必须与**真人顾问（秋武老师）**进行**一对一确认**。</p>
        <button onclick="dismissWelcomeMessage(this)" style="background-color: #ffcc00; color: #333; border: none; padding: 5px 10px; border-radius: 3px; cursor: pointer; float: right; font-weight: bold;">好的，知道了</button>
        <div style="clear: both;"></div>
    </div>
`;

// 功能：移除欢迎信息（响应用户点击“好的，知道了”按钮）
function dismissWelcomeMessage(buttonElement) {
    let messageDiv = buttonElement.closest('.message');
    if (messageDiv) {
        messageDiv.remove();
    }
}

// 功能：页面加载时显示欢迎语
function displayWelcomeMessage() {
    const chatBody = document.getElementById('chatBody');
    if (chatBody) {
        // 仅在 chatBody 为空时显示 (确保只在首次加载时出现)
        if (chatBody.children.length === 0) {
             appendMessage(initialWelcomeMessage, 'ai');
        }
    }
}

// ==========================================
// 第一部分：内容配置 (左侧菜单 - 深度植入学際背景与费用置换)
// ==========================================

const contentData = {
    // 优势：深度结合“林业工程->东大社会学”的跨界背景
    'strength': `
        <div class="detail-card">
            <h3><strong>认知破壁：</strong> 独家“东大修士”思维支点</h3>
            <ul>
                <li><strong>学際（Gakusai）背景：</strong> 我拥有独特的学术轨迹：<strong>本科林业工程（理工）出身</strong>，通过**理科笔试入口**考入东大，在**学際交叉研究室**转向**文科社会学研究**。</li>
                <li><strong>跨域视野：</strong> 这种**“身在理工环境，心修人文课题”**的经历，让我能用**工程学的严密逻辑**，为您重构**文科叙事**，提供绝无仅有的**认知反差**。</li>
                <li><strong>破绽利用：</strong> 独创**“破绽利用法”**。利用您的背景差异（如跨专业），打造教授眼中**“无法拒绝的必然性动机”**。</li>
            </ul>
        </div>
    `, 
    // 模式：明确列出“一问一答”、“草稿编辑”等具体服务
    'model': `
        <div class="detail-card">
            <h3><strong>契约精神：</strong> 高效稀缺化辅导模式解析</h3>
            <ul>
                <li><strong>核心服务产品：</strong> 我们不卖焦虑，只提供实战工具：<strong>①一问一答式教授答辩草稿编辑</strong>（核心）、<strong>②高强度模拟面试训练</strong>、<strong>③志望理由书/研究计划书的逻辑重构</strong>。</li>
                <li><strong>定制化口语：</strong> 针对有需求的学生，提供**针对性的日语口语训练**，确保面试时的**逻辑表达和情境应对**的稳定性。</li>
                <li><strong>【核心模式】“辅导费用置换”契约：</strong> 通过我的渠道进入合作私塾或语言学校，机构支付的介绍费**等同于抵消您的秋武老师一对一辅导费用**。实现**零额外支出**享受高端定制辅导。</li>
            </ul>
        </div>
    `, 
    // 案例：保持认知战的基调
    'cases': `
        <div class="detail-card">
            <h3><strong>底层逻辑：</strong> 跨越认知壁垒的实战案例</h3>
            <p style="margin-bottom: 15px;">留学申请的成功是<strong>一场认知战</strong>。建议您深度阅读我的专栏，获取<strong>不可复制</strong>的认知差和实战策略：</p>
            
            <a href="https://zhuanlan.zhihu.com/p/691198840?share_code=sxm903a247yL&utm_psn=1976199060072453115" target="_blank" class="link-btn">
                知乎：核心优势与背景解析 →
            </a>
            
            <a href="https://space.bilibili.com/323700487/lists" target="_blank" class="link-btn">
                Bilibili：辅导视频列表 →
            </a>
        </div>
    `
};

// ==========================================
// 第二部分：故事卡模式逻辑 (强调 CTA)
// ==========================================

const storyCardData = {
    'step1': {
        title: 'AI 升学破局测试：您是哪种“文化不适症”？',
        question: '在准备日本留学时，最让您感到“心里没底”的是什么？',
        options: [
            { text: '逻辑迷茫型：完全不懂教授想要什么，计划书像在写作文。', nextStep: 'result_rps' },
            { text: '文化恐惧型：害怕面试冷场，不懂日本人的“潜台词”。', nextStep: 'result_interview' },
            { text: '信息焦虑型：想省钱省力，但怕被黑中介坑，找不到靠谱渠道。', nextStep: 'result_channel' }
        ]
    },
    'result_rps': {
        title: '💡 诊断：您需要的是“东大式逻辑重构”',
        result: `
            <p>您感到的迷茫，源于中日学术思维的差异。中国教育偏向“宏大叙事”，而日本研究看重<strong>“具体的逻辑闭环”</strong>。</p>
            <p><strong>【破局心理学】:</strong></p>
            <p>运用<strong>“向量逻辑降维法”</strong>。您的计划书需要从“作文”升级为**“逻辑闭环的最小可行性模型（MVP）”**。抓住一个细小破绽，深度解剖，才能引发教授的**钻研欲望**。</p>
            <p style="margin-top: 15px;">🚀 **立即联系：** 为了避免逻辑错误，请添加微信 <strong>qiuwu999</strong>，备注“逻辑诊断”，我帮您看一眼题目的可行性。</p>
        `,
        isResult: true
    },
    'result_interview': {
        title: '💡 诊断：您需要破解“空气文化”',
        result: `
            <p>这种恐惧是正常的。日本面试本质上是一场<strong>“社会化测试”</strong>。教授在测试您是否能读懂<strong>“空气”（Kuuki）</strong>，即非语言的沟通。</p>
            <p><strong>【破局心理学】:</strong></p>
            <p>我们将进行**“防御性悲观”**训练。我会教您如何听懂教授问题的“弦外之音”。掌握了这些暗号，面试就是一场愉快的聊天。</p>
            <p style="margin-top: 15px;">🚀 **立即联系：** 为了避免文化偏差，请添加微信 <strong>qiuwu999</strong>，领取一份《日本教授面试潜台词对照表》。</p>
        `,
        isResult: true
    },
    'result_channel': {
        title: '💡 诊断：您需要建立“信任契约”',
        result: `
            <p>您的焦虑是<strong>“信息不对称”</strong>的必然结果。在日本社会，<strong>“信用”（Shinyo）</strong>是您唯一的安全资产，比金钱更昂贵。</p>
            <p><strong>【破局心理学】:</strong></p>
            <p>我们走**“辅导费用置换”**路线。机构的介绍费将**等同于替您支付了我的定制辅导费**。这不仅是省钱，更是将您置入一个**“安全、高效的契约圈”**（Uchi）。</p>
            <p style="margin-top: 15px;">🚀 **立即联系：** 为了开始定制辅导，请添加微信 <strong>qiuwu999</strong>，直接发送“费用置换”。</p>
        `,
        isResult: true
    }
};

// ==========================================
// 第三部分：问答数据库 (关键修正：联系方式优先 + EJU服务明确)
// ==========================================

const qaDatabase = [
    // --- 类别 AA：联系方式/微信 (最高优先级) ---
    {
        keywords: ['微信', '联系', '怎么联系', '微信号', '加微信', '怎么加', '秋武老师微信', '武老师微信'],
        answer: "非常感谢您对高效率咨询的需求。请直接添加我的微信：**qiuwu999**。<br><br>备注您的核心问题，我们将立即进入**一对一的逻辑诊断**环节。这是目前最高效的联系方式。"
    },
    
    // --- 类别 A：身份与价值锚定 (修正：移除通用名字关键词，防止误判) ---
    {
        keywords: ['博士', '修士', '学历', '真的吗', '背景', '你是谁', '简历', '骗子', '靠谱吗'],
        answer: "这是一个关于**信任**的核心问题。我必须诚实地澄清：我是**东大修士（学际信息/交叉研究室）毕业**，拥有10年一线辅导经验。 <br><br> 虽然我不是博士，但我拥有稀缺的**【理工科入口 + 文科研究】**的跨学科背景。在考学实战中，我提供的**“向量逻辑重构”**，能为您带来**高效率的合格实绩**，这是我的价值保证。"
    },
    
    // --- 类别 X：EJU 专项回答 (新增：区分服务与对比) ---
    // 1. 回答“辅导EJU吗” - 明确服务边界
    {
        keywords: ['辅导eju', '教eju', '补习eju', '留考辅导', 'eju课程', '教不教', '补课', '私塾'],
        answer: "关于**EJU学科辅导**（数学/理综/综合），我的策略是**“专业分工”**。<br><br>我不直接讲授高中学科知识，我专注于更高维的**“考学战略”**与**“校内考逻辑重构”**。对于EJU学科补习，我强烈建议走我的**【辅导费用置换】**渠道，推荐您进入专业的合作私塾。这样您既能获得系统的学科训练，又能利用机构的介绍费**抵消我的高端战略辅导费**，实现双赢。"
    },
    // 2. 回答“EJU与JLPT难度对比” - 深度认知
    {
        keywords: ['jlpt', 'n1', 'n2', '日语考试', '难度', '区别', '含金量', 'eju'],
        answer: "这不仅是难度的区别，更是**“选拔逻辑”**的区别。<br><br><strong>JLPT (N1/N2)</strong> 是**“资格证逻辑”**，只要过线即可，考的是日语知识的**存量**。而 <strong>EJU (留考)</strong> 是**“竞赛逻辑”**，考的是在日语语境下的**学术处理速度和逻辑能力**。<br>对于名校申请，**EJU的高分更具决定性**，因为它直接证明了您是否具备“在东大听课并进行思考”的能力。不要用考N1的思维去备考EJU。"
    },
    
    // --- 类别 B：费用与模式 (中肯靠谱) ---
    {
        keywords: ['费用', '钱', '收费', '价格', '贵吗', '多少钱', '免费模式', '溢价', '隐形成本'],
        answer: "问得好，我的价格基于**稀缺价值**。<strong>平时辅导需单独付费，具体价格根据项目而定。</strong>但我们有**“费用置换”**模式：通过我的渠道进入合作私塾或语言学校，机构支付的介绍费**等同于替您支付了我的辅导费用**。**高效**是降低留学**隐形成本**的关键。"
    },
    {
        keywords: ['优势', '特点', '区别', '辅导模式', '服务范围', '渠道', '中介', '机构'],
        answer: "多数机构注重**流程化服务**，我的核心价值在于**“认知重构”**。<br><br>我的核心优势源于我独特的学术轨迹：我是**理工科入口、东大修士**，用**工程学的严密逻辑**去降维重构您的课题。至于服务模式，我们提供**“费用置换”**模式：机构的介绍费将**等额抵消**您的秋武老师辅导费用，为您提供最高效率的解决方案。"
    },
    
    // --- 类别 C：文书与逻辑 (区分 RP 和 SoP) ---
    {
        keywords: ['跨专业', '转专业', '法学', '经济学', '文科转理科', '理科转文科', '背景弱'],
        answer: "你的优势是**“语言资本”**和**“跨专业动机”**。但光有语言，没有**“逻辑骨架”**是危险的。我们会利用你的**原专业思维**（如法学的严密逻辑）来重构你的**新研究切入点**，让教授看到的是一个**“思维健全、动机明确”**的跨学科人才，而不是一个“基础薄弱的自学者”。"
    },
    {
        keywords: ['研究计划书', '计划书', '宏大', '读后感', '可行性', '施工图纸', '题目选择', '课题', '怎么选'],
        answer: "选题目不是“找一个兴趣点”，而是**“定义一个可控的工程边界”**。研究计划书是一份**“施工图纸”**（仅限修士/研究生）。我会教你用**最小可行性模型（MVP）**的方法，将宏大的题目**降维**。抓住一个**细小的、可测量、可验证**的“变量”进行深度挖掘，这能让你的研究计划书像**工程报告**一样严密和可行。"
    },
    {
        keywords: ['志望理由书', '志愿理由书', '志望', '理由书', '本科', '学部'],
        answer: "<strong>【志望理由书】</strong>（学部本科/修士考研通用）的核心是**“内驱力”**。它不是研究计划的缩写，而是要回答：**“为什么是这所大学？为什么是这个专业？为什么是您？”** 我会利用您的背景（如学際交叉或特殊经历）制造**“稀缺性”**，帮您梳理出一条**“无法被替代”**的人生逻辑线。"
    },
    
    // --- 类别 D：心态与失败重塑 (高情商) ---
    {
        keywords: ['失败', '重试', '焦虑', '内耗', '完美主义', '不够好', '不自信', '借口', '拖延', '没动力', '迷茫'],
        answer: "**【心理学/EQ】** 拖延不是懒惰，而是源于对**“任务全貌”的恐惧**。你不是在逃避写作，而是在逃避**“不知道如何开始”的无力感**。我的方法是：**任务降维**。把研究计划书拆解成**100个微任务**，一旦开始积累**“微实绩”**，大脑的**奖励机制**就会启动，拖延自然瓦解。记住：**失败是肥料，但不能是借口**。"
    },
    {
        keywords: ['套磁失败', '教授不回', '邮件不回', '被拒绝', '没希望'],
        answer: "在东大的学术标准里，没有‘失败品’，只有**‘没有找对肥料的果实’**。一次失败的套磁只证明了您**发送的时间或方式错了**，而不是您这个人错了。我会用《东大式·结构化套磁信模板》，通过心理暗示，激发教授的回复欲望。**我们只谈策略，不谈宿命论。**"
    },
    
    // --- 类别 E：文化与面试 (具体策略) ---
    {
        keywords: ['流利口语', '日语流利', '面试自信', '文化差异', '读空气', '潜规则', '面试错误', '红线', '禁忌'],
        answer: "停止！这是一个**致命的文化误区**。如果您的日语很流利，您需要学会的不是**“表达流利度”**，而是**“读懂空气”（空気を読む）**。<br><br>日本人看重的自信，是**“理解潜台词”**。我的面试训练：重点是您如何在**30秒内**，传达出**最精准的逻辑闭环和对教授的尊重**。流利度在文化盲区面前，就是**“噪音”**。"
    },
    {
        keywords: ['建前', '本音', '潜台词', '日本人沟通', '真实想法', '教授暗示'],
        answer: "**【文化反差】** 教授的**建前（Tatemae, 表面话）**可能是：“您的研究很有趣。” 但他可能在用**本音（Honne, 真实想法）**暗示：“这个研究是不是太难做了？” 你的任务是学会**听懂“空气”中的本音**。我的辅导会揭示教授们最常见的 **5种“建前”**，让你知道何时该保持沉默，何时该进行逻辑补救。"
    },
    {
        keywords: ['面试', '口语', '日语训练', '答辩草稿', '紧张', '刁难', '一问一答'],
        answer: "面试的本质不是背稿子，而是**“即兴的逻辑博弈”**。<br><br>我的核心服务是**【一问一答式教授答辩草稿编辑】**。我们会模拟教授的“追问”和“刁难”，将您的回答打磨成**“防守反击”**的利器。对于口语不自信的同学，我也提供**针对性的日语口语训练**。"
    },
    {
        keywords: ['eju', '留考', '放弃', '准考证', '校内考', '考试机会'],
        answer: "在考学策略上，最大的认知偏差是**“放弃”**。即使您觉得没学好、没自信，也**绝对不能放弃 EJU 考试机会**。<br><br>**底层逻辑是：** 很多大学在申报时只需要**“受験票”**（准考证），并不需要具体成绩。放弃意味着您失去了**临场体验校内考核**的机会，尤其在软实力考核上，这种落差是无法弥补的。"
    },
    
    // --- 类别 F：双非/背景 (成长论) ---
    {
        keywords: ['双非', '出身', '二本', '三本', '弥补', '借口', '背景'],
        answer: "在日本，**“出身校”**只是门槛，不是终点。要打破这个防御，需要您积累**“一个一个小的实绩”**。<br><br>正如我从理工科跨越到社会学研究一样，**背景不是限制，认知才是**。成功的底层逻辑是：**积累实绩，不找借口、不抱怨**。当您的学术逻辑和面试表现（软实力）远超您的学历背景时，冲击力更具吸引力。"
    }
];

// ==========================================
// 第四、五部分：核心交互/AI 逻辑 (兜底逻辑 - 中肯靠谱)
// ==========================================

// 统一的 CTA 引导
const finalCTA = "<br><br>AI 的分析已经触及极限，如果您需要的是<strong>人对人的诊断</strong>，请直接添加微信 <strong>qiuwu999</strong> 进行一对一沟通。";

// 🎯 人设边界兜底回复：(P1) - 应对非专业提问
const personalityFallbackResponses = [
    "有趣的问题。我的价值在于**“认知效率”**，我是**东大修士（学際研究出身）**，负责您的**逻辑重构**。请将精力集中在**如何破局**，我们聊正事。",
    "我是秋武，**理工科入口、东大修士（学際研究室）毕业**。我的核心价值是提供**文理融合**的跨学科视角和**东大基准**的逻辑重构。我的方法论才是重点。请直接告诉我您需要解决的**核心痛点**。",
    "感谢您的提问，但我的运算资源是为**高效解决留学难题**而准备的。如果您有任何关于**升学、逻辑重构或教授面试**的问题，请直接提出。时间宝贵，我们聚焦价值。"
];


// 🎯 战略逻辑兜底回复：(P3) - 应对战略迷茫 (中肯风格)
const strategicFallbackResponses = [
    `真正的高效辅导，必须结合**日本文化中的情境与教授的个体差异**，这是AI无法提供的**‘专业判断力’**。您的困惑，需要的是**人对人的诊断**。我们聊聊您最不确定的那个‘破绽’在哪里。` + finalCTA, 
    `策略性偏差往往是最高昂的隐形成本。我的核心价值是**矫正目标向量**，帮您立即进入高效轨道。AI只能计算已知，但无法帮您设定‘战略偏差’。` + finalCTA, 
    `与其让您在迷茫中浪费时间，不如直接锁定核心问题。我的作用是为您**设计‘破绽利用法’**，让您立即跳过低效环节。直接加我微信，我们谈效率，不谈通用。` + finalCTA 
];


// 💡 非专业关键词组
const nonProfessionalKeywords = ['好吃', '喝', '几岁', '是男是女', '你好', '再见', '测试', '开玩笑', '喜欢', '爱', '颜色', '叫什么', '你叫什么'];

function isNonProfessionalQuery(query) {
    const lowerQuery = query.toLowerCase().trim();
    for (const keyword of nonProfessionalKeywords) {
        if (lowerQuery.includes(keyword)) {
            return true;
        }
    }
    return false;
}

async function callGeminiApi(userQuery) {
    // 优先级 1 (P1): 非专业/人设提问
    if (isNonProfessionalQuery(userQuery)) {
        await new Promise(resolve => setTimeout(resolve, 800)); 
        const randomIndex = Math.floor(Math.random() * personalityFallbackResponses.length);
        return personalityFallbackResponses[randomIndex] + finalCTA; 
    }
    
    // 优先级 2 (P2): 知识库/专业提问 (已大幅扩充和优化)
    const dbAnswer = getAnswerFromDB(userQuery);
    if (dbAnswer) {
        await new Promise(resolve => setTimeout(resolve, 600));
        return dbAnswer;
    }
    
    // 优先级 3 (P3): 战略兜底/未能匹配的专业提问
    await new Promise(resolve => setTimeout(resolve, 1000));
    const randomIndex = Math.floor(Math.random() * strategicFallbackResponses.length);
    return strategicFallbackResponses[randomIndex];
}

// ... (以下 UI/交互函数保持不变) ...

function appendMessage(message, sender) {
    const chatBody = document.getElementById('chatBody');
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', sender === 'user' ? 'user-message' : 'ai-message');
    
    const bubbleDiv = document.createElement('div');
    bubbleDiv.classList.add('bubble');
    bubbleDiv.innerHTML = message;

    messageDiv.appendChild(bubbleDiv);
    chatBody.appendChild(messageDiv);
    
    chatBody.scrollTop = chatBody.scrollHeight;
}

function getAnswerFromDB(query) {
    const lowerQuery = query.toLowerCase().trim();
    for (const qa of qaDatabase) {
        for (const keyword of qa.keywords) {
            // 使用 includes 进行宽松匹配，捕获意想不到的提问
            if (lowerQuery.includes(keyword.toLowerCase())) {
                return qa.answer;
            }
        }
    }
    return null;
}


async function sendMessage() {
    const userInput = document.getElementById('userInput');
    const message = userInput.value.trim();

    if (message === "") return;
    
    appendMessage(message, 'user');
    userInput.value = '';
    userInput.disabled = true;

    const loadingIndicator = document.getElementById('loadingIndicator');
    if (loadingIndicator) {
        loadingIndicator.classList.remove('hidden');
        document.getElementById('chatBody').scrollTop = document.getElementById('chatBody').scrollHeight;
    }

    const aiAnswer = await callGeminiApi(message);

    appendMessage(aiAnswer, 'ai');

    if (loadingIndicator) loadingIndicator.classList.add('hidden');
    userInput.disabled = false;
    userInput.focus();
}

function handleKeyPress(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}

function returnToChat() {
    const chatBody = document.getElementById('chatBody');
    const storyCardContainer = document.getElementById('storyCardContainer');
    const chatInputArea = document.querySelector('.chat-input-area');
    const loadingIndicator = document.getElementById('loadingIndicator');

    if (chatBody) chatBody.style.display = 'block';
    if (chatInputArea) chatInputArea.style.display = 'flex';
    if (storyCardContainer) storyCardContainer.style.display = 'none';
    if (loadingIndicator) loadingIndicator.classList.add('hidden');
}

function toggleMenu(showMenu) {
    const profileCover = document.getElementById('profileCover');
    const menuList = document.getElementById('menuList');
    const contentDetail = document.getElementById('contentDetail');
    
    returnToChat(); 

    if (showMenu) {
        if (profileCover) profileCover.classList.add('hidden');
        if (menuList) menuList.classList.remove('hidden');
        if (contentDetail) contentDetail.classList.add('hidden'); 
    } else {
        if (profileCover) profileCover.classList.remove('hidden');
        if (menuList) menuList.classList.add('hidden');
        if (contentDetail) contentDetail.classList.add('hidden');
    }
}

function backToMenu() {
    const contentDetail = document.getElementById('contentDetail');
    const menuList = document.getElementById('menuList');
    
    returnToChat(); 

    if (contentDetail) contentDetail.classList.add('hidden');
    if (menuList) menuList.classList.remove('hidden');
}

function showContent(type) {
    const menuList = document.getElementById('menuList');
    const contentDetail = document.getElementById('contentDetail');
    const dynamicContent = document.getElementById('dynamicContent');

    returnToChat();

    if (dynamicContent) dynamicContent.innerHTML = contentData[type] || '未找到内容。';

    if (menuList) menuList.classList.add('hidden');
    if (contentDetail) contentDetail.classList.remove('hidden');
}

function renderStoryCard(step) {
    const storyCardContainer = document.getElementById('storyCardContainer');
    if (!storyCardContainer) return;

    let html = `<div class="story-card-inner"><h3>${step.title}</h3>`;

    if (step.isResult) {
        html += `<div class="story-result">${step.result}</div>`;
        html += `<button class="btn-story-reset" onclick="resetAllViews()">完成测试，返回聊天</button>`;
    } else {
        html += `<p class="story-question">${step.question}</p><div class="story-options">`;
        step.options.forEach(option => {
            html += `<button class="btn-story-option" onclick="showStoryCard('${option.nextStep}')">${option.text}</button>`;
        });
        html += `</div>`;
    }

    html += `</div>`;
    storyCardContainer.innerHTML = html;
}

function resetAllViews() {
    toggleMenu(false);
    returnToChat();
}

function showStoryCard(stepKey) {
    const menuList = document.getElementById('menuList');
    const contentDetail = document.getElementById('contentDetail');
    const profileCover = document.getElementById('profileCover');
    const chatBody = document.getElementById('chatBody');
    const storyCardContainer = document.getElementById('storyCardContainer');
    const chatInputArea = document.querySelector('.chat-input-area');

    if (profileCover) profileCover.classList.add('hidden');
    if (contentDetail) contentDetail.classList.add('hidden'); 
    if (menuList) menuList.classList.remove('hidden');

    if (chatBody) chatBody.style.display = 'none';
    if (chatInputArea) chatInputArea.style.display = 'none';
    if (storyCardContainer) storyCardContainer.style.display = 'block';

    const step = storyCardData[stepKey];
    if (step) {
        renderStoryCard(step);
    } else {
        resetAllViews();
    }
}

// ⚠️ 【重要】请在您的 HTML 文件中，确保在页面加载完成后调用此函数一次，例如在 <body> 标签末尾添加：
// <script>document.addEventListener('DOMContentLoaded', displayWelcomeMessage);</script>
