// script.js - 最终优化版 (移除闪烁光标，只保留打字效果)

// ==========================================
// 第一部分：左侧面板逻辑 (菜单与详情切换)
// ==========================================

function toggleMenu(showMenu) {
    const profileCover = document.getElementById('profileCover');
    const menuList = document.getElementById('menuList');
    const contentDetail = document.getElementById('contentDetail');
    
    // 确保退出故事卡模式，显示聊天输入区
    returnToChat(); 

    if (showMenu) {
        if (profileCover) profileCover.classList.add('hidden');
        if (menuList) menuList.classList.remove('hidden');
        if (contentDetail) contentDetail.classList.add('hidden'); 
    } else {
        if (profileCover) profileCover.classList.remove('hidden');
        if (menuList) menuList.classList.add('hidden');
    }
}

function backToMenu() {
    const contentDetail = document.getElementById('contentDetail');
    const menuList = document.getElementById('menuList');

    if (contentDetail) contentDetail.classList.add('hidden');
    if (menuList) menuList.classList.remove('hidden');
}

// 左侧菜单详情内容配置 (内容保持不变)
const contentData = {
    'strength': `
        <div class="detail-card">
            <h3>核心优势：以“破绽”为支点</h3>
            <ul>
                <li><strong>跨学科降维打击：</strong> 本科理工思维 x 硕士东大农学生命科学（文理交叉），擅长构建其他人无法复制的多维视角。</li>
                <li><strong>化“弱”为“强”：：</strong> 独创“破绽利用法”。我不掩盖你的劣势，而是将你经历中的“矛盾点”转化为最吸引教授的“研究动机”。</li>
                <li><strong>东大底层逻辑：：</strong> 深入破解日本顶级学府的“潜规则”，提供符合“东大基准”的逻辑重构。</li>
                <li><strong>非语言博弈：</strong> 独创“坐姿/眼神/递交材料”全真模拟，在面试的前30秒赢下心理战。</li>
            </ul>
        </div>
    `,
    'model': `
        <div class="detail-card">
            <h3>辅导模式与价值承诺</h3>
            <ul>
                <li><strong>1:1 师徒制：</strong> 拒绝大班流水线。我只做精细化个人辅导，确保我的核心认知 100% 传递给你。</li>
                <li><strong>【强推】免佣直通车：</strong> 通过我推荐进入合作私塾/语言学校，<span style="color:#d9534f; font-weight:bold;">辅导费由机构承担</span>。
                    <br><span style="font-size:0.9em; color:#666;">*这不仅是为您省钱，更是为了剔除中间商，建立最直接的“师徒”利益共同体。</span>
                </li>
                <li><strong>结果导向：</strong> 若第一年未合格，第二年免费继续辅导，直到你上岸。</li>
                <li><strong>无限时服务：</strong> 不按课时算钱，只为最终合格率负责。</li>
            </ul>
        </div>
    `,
    'cases': `
        <div class="detail-card">
            <h3>成功案例 / 更多思考</h3>
            <p style="margin-bottom: 15px;">不要只看结果，要看逻辑。深度阅读我的专栏，了解如何用“认知差”跨越学历壁垒：</p>
            
            <a href="https://zhuanlan.zhihu.com/p/691198840?share_code=sxm903a247yL&utm_psn=1976199060072453115" target="_blank" class="link-btn">
                知乎：核心优势与背景解析 →
            </a>
            
            <a href="https://space.bilibili.com/323700487/lists" target="_blank" class="link-btn">
                Bilibili：辅导视频列表 →
            </a>
        </div>
    `
};

function showContent(type) {
    const menuList = document.getElementById('menuList');
    const contentDetail = document.getElementById('contentDetail');
    const dynamicContent = document.getElementById('dynamicContent');

    // 确保退出故事卡模式
    returnToChat();

    // 填充内容
    if (dynamicContent) dynamicContent.innerHTML = contentData[type] || '未找到内容。';

    // 切换显示
    if (menuList) menuList.classList.add('hidden');
    if (contentDetail) contentDetail.classList.remove('hidden');
}


// ==========================================
// 第二部分：右侧 AI 咨询室逻辑 (深度问答库)
// ==========================================

const qaDatabase = [
    {
        keywords: ['费用', '钱', '收费', '价格', '贵吗'],
        answer: "关于费用，我的原则是<strong>【透明】与【价值对等】</strong>。<br><br>我不进行低效的价格博弈。您支付的不仅仅是时间，而是我作为东大博士的<strong>【核心认知】与【通关经验】</strong>。<br>目前仅开放两种通道：<br>1. 机构通道：适合需要全套基础流程服务的同学。<br>2. <strong>【私塾核心】免佣直通车</strong>：这是我最推荐的模式。剔除中间商溢价，您所有的预算都将转化为我的<strong>【有效辅导时长】</strong>。<br><br>如果您已准备好为结果负责，请联系微信 <strong>qiuwu999</strong> 获取详细方案。"
    },
    {
        keywords: ['优势', '特点', '区别', '为什么选你', '实力', '厉害'],
        answer: "市面上的辅导在帮您“补短板”，而我在帮您<strong>“利用破绽”</strong>。<br><br>我的核心优势在于<strong>【理工科逻辑 x 农学生命力】</strong>的跨学科视角。在东大级别的教授眼中，完美的简历往往平庸。我擅长捕捉您经历中看似是弱点（破绽）的部分，通过独创的逻辑重构，将其转化为最具个人色彩的<strong>【研究动机】</strong>。<br>我无法辅导通用的数理化知识，但我能教您如何用教授无法拒绝的逻辑，赢下这场心理博弈。"
    },
    {
        keywords: ['免费', '盈利', '赚钱'],
        answer: "这是一个好问题。盈利模式非常透明：<br>我是渠道方，机构支付给我介绍费，这笔钱等于<strong>替您支付了我的咨询费</strong>。<br>这是一种“三方共赢”的成熟商业模式：您零成本获得高端辅导，机构获得优质生源，我获得合理的劳动回报。<strong>无任何隐形消费</strong>，我们签协议说话。"
    },
    {
        keywords: ['双非', '二本', '三本', '普通', '出身'],
        answer: "<strong>双非本科完全能申请东大！</strong><br>请记住：教授录取的是“未来的研究者”，而不是“过去的考试机器”。<br>我们的策略是：用<strong>高质量的研究计划书 + 高分语言成绩</strong>来对冲学历背景。只要能通过计划书“秀肌肉”，展示出超越出身校的研究潜力，东大的大门就是敞开的。"
    },
    {
        keywords: ['gpa', '绩点', '低', '挂科'],
        answer: "GPA低是既定事实，纠结无用，我们要看<strong>“解释成本”</strong>。<br>教授通常不看具体成绩单细节。如果GPA较低，我们必须用<strong>高分EJU/托福</strong>来覆盖这个劣势。同时，在面试中我会教您一套话术，将成绩低归因于“过度专注于某个专业领域”或“早期探索方向”，反而能体现您的专一。"
    },
    {
        keywords: ['英语', '托福', '雅思', '没英语'],
        answer: "在日本考顶级名校，<strong>英语决定了你的上限</strong>。<br>文科N1是门槛，理科N2是底线，而托福/托业则是能否冲刺旧帝大的关键。如果你现在没有英语成绩，我会建议根据你的目标校等级，立刻调整备考策略。不要抱有侥幸心理。"
    },
    {
        keywords: ['跨专业', '转专业', '文转理'],
        answer: "跨专业申请不是不可能，但切记<strong>不要“裸转”</strong>。一定要寻找原专业与新专业的“结合点”。例如，利用旧领域的工具研究新方向。我会帮你找到这个最佳结合点。"
    },
    {
        keywords: ['为什么', '理由', '国立', '东大'],
        answer: "为什么选择国立大学？这是对您未来五年最关键的投资选择。国立大学在研究资源、导师阵容、学术声誉方面具有碾压性优势。选择东大，就是选择一个**最高起点**，它在日本的就业推荐力和全球的学术认可度是私立校无法比拟的。"
    },
    {
        keywords: ['电气', '自动化', '就业', '前景', 'cs', '转码'],
        answer: "您问到电气自动化？这是个好话题。2025年的风口不是‘电’，而是‘智’。1. **新能源与储能**：谁能搞定‘源网荷储’的自动化调度，谁就是大爷。2. **AI落地的物理载体**：懂强电的没你懂算法，懂算法的没你懂硬件。这就是我常说的**‘错位竞争’**！"
    },
    {
        keywords: ['底层逻辑', '成功', '秘诀'],
        answer: "顺利考上目标大学的**底层逻辑其实很单纯**：**不放弃任何一个机会**。<br>比如一年两次留考EJU，如果你因为“没自信”而放弃6月，只参加11月，你将失去很多机会。很多大学申报时只需要『受験票』（考试凭证），并不需要具体成绩。你至少会失去一次**临场体验校内考核**的机会。这种人与人之间的**认知偏差**，就是决定你合格与否的关键。"
    },
    {
        keywords: ['累', '放弃', '焦虑', '失败', '被拒'],
        answer: "我理解你现在很累！但请记住：<strong>失败是挑战过程中获得的“肥料”</strong>。<br>失败，本身是**痛并快乐着**的。我们不怕失败，但怕**重复犯错**。小失败可以接受，但如果你重复犯错，不愿承认或总是找借口，最终只会酿成**悔恨但羞于启齿的大失败**。考学是心力博弈，调整心态，将大目标拆解成小任务，**踏实做好每一步，你不是一个人在战斗！**"
    },
    {
        keywords: ['方向', '题目', '选题', '思路'],
        answer: "研究方向是灵魂！好题目 = <strong>个人兴趣 + 教授领域 + 可操作性</strong>。切忌选太大的题目，那会显得空洞。我能通过头脑风暴，帮你筛选出最讨巧且最容易通过的切口。"
    },
    {
        keywords: ['结构', '怎么写', '字数'],
        answer: "研究计划书采用经典的四段式：<br>1. 为何做（背景/动机）；<br>2. 做什么（对象/目的）；<br>3. 怎么做（方法/计划）；<br>4. 有何意义。<br>逻辑必须严丝合缝，通常2000-3000字，<strong>逻辑重于文采</strong>。"
    },
    {
        keywords: ['模板', '套路'],
        answer: "请坚决杜绝模板！模板是<strong>“自杀式写法”</strong>，教授一眼看穿。我会要求你结合自身经历，形成原创逻辑。我只做深度定制，拒绝一切套路。"
    },
    {
        keywords: ['面试', '流程', '时间'],
        answer: "面试流程是这样的：一般20-30分钟。<br>1. 前5分钟：自我介绍<br>2. 中间15分钟：深挖研究计划（最惨烈环节）<br>3. 最后5分钟：反向提问<br>我们会进行全真模拟，让你胸有成竹。"
    },
    {
        keywords: ['刁钻', '听不懂', '不会'],
        answer: "面试听不懂教授问题怎么办？千万别慌！礼貌地说：'もう一度お願いできますか'（能请您再说一遍吗？）。教授不会介意，反而觉得你认真。如果是被问倒了，<strong>承认不足，并给出思路</strong>，这叫靠谱。"
    },
    {
        keywords: ['大龄', '年龄', '工作'],
        answer: "不用担心年龄问题，日本教授很欢迎有社会经验的学生。您的优势在于“问题意识”。把工作经验转化为研究课题，比应届生的空想更有说服力，这是你的独特竞争力！"
    },
    {
        keywords: ['线上', '国内', '海外'],
        answer: "完全可以！所有辅导都是通过线上（Zoom/LINE）进行，我们可以灵活安排时差。无论您在海外还是国内，文书修改和模拟面试都能保证同步高质量完成。"
    },
    {
        keywords: ['区别', '私塾', '大班'],
        answer: "我和普通私塾的区别在于模式。我提供个人<strong>精细化一对一辅导</strong>，区别于大机构的流水线作业。我的核心是攻克最难的“研究计划构建”和“教授心理博弈”，我们不辅导具体的数理化知识哦。"
    },
    {
        keywords: ['ai', '代写'],
        answer: "我强烈不建议使用AI代写。AI没有你的灵魂和经历，代写在面试时会让你一问三不知。我会帮你重构逻辑框架，但核心思想必须是你自己的。"
    },
    {
        keywords: ['区别', '志望理由'],
        answer: "志望理由书和研究计划书的区别在哪里呢？志望理由书讲<strong>“为什么选这个学校/教授”</strong>（偏动机），研究计划书讲<strong>“你打算做什么研究”</strong>（偏执行）。很多人混淆，这是致命问题。"
    },
    {
        keywords: ['联系', '时间', '套磁'],
        answer: "套磁时间很关键。出愿前<strong>6个月到3个月</strong>是黄金期。太早教授记不住，太晚名额可能已定。如果时间很紧，必须准备好材料强行套磁。"
    },
    {
        keywords: ['不回', '没回复', '无视'],
        answer: "教授不回邮件是常态，心态要稳！原因多是没看到或太忙。对策：一周后改标题<strong>重发一次</strong>。如果还没回，果断换教授，别浪费时间。"
    },
    {
        keywords: ['再考虑', '模棱两可'],
        answer: "教授说“再考虑”是拒绝吗？不一定！这代表你有潜力但他有顾虑。回复时要展现“死磕”精神，询问具体顾虑点并表示愿意改进，积极的执行力能逆转局面！"
    },
    {
        keywords: ['自我介绍', '稿子'],
        answer: "自我介绍不是背简历！重点讲清三个‘为什么’：<strong>为什么选这个专业？为什么选日本？为什么选这个教授？</strong>这三者逻辑贯通，最能打动人。"
    },
    {
        keywords: ['eju', '留考', '分数'],
        answer: "EJU成绩在本科申请是敲门砖，研究生申请是重要参考。高分当然有优势，但最终决定权仍在研究计划和面试。"
    },
    {
        keywords: ['语言学校', '私塾'],
        answer: "语言学校解决签证，私塾强化升学。最划算的方式是：通过我推荐进私塾/语校，可免我的辅导费，实现<strong>效率与费用的双赢</strong>。加微信 <strong>qiuwu999</strong> 聊聊具体方案！"
    }
];

// ==========================================
// 第三部分：聊天核心逻辑 (移除闪烁光标逻辑)
// ==========================================

// 处理用户输入
function handleKeyPress(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); 
        sendMessage();
    }
}

function sendMessage() {
    const inputField = document.getElementById('userInput');
    const message = inputField ? inputField.value.trim() : ''; 
    
    if (message === "") return;

    // 1. 显示用户消息，并清空输入框
    appendMessage(message, 'user');
    if (inputField) {
        inputField.value = '';
        // 阻止用户在 AI 回复时再次发送消息
        inputField.disabled = true; 
    }

    // 2. 模拟 AI 思考延迟
    setTimeout(() => {
        const reply = findAnswer(message);
        // 调用打字机函数
        typeMessage(reply); 
    }, 600);
}

// 核心改动：移除光标和相关逻辑，只保留逐字打印
function typeMessage(text) {
    const chatBody = document.getElementById('chatBody');
    const userInput = document.getElementById('userInput');
    if (!chatBody) return;

    const msgDiv = document.createElement('div');
    msgDiv.className = `message ai-message`;
    
    // 1. 创建气泡和文本容器
    const bubbleDiv = document.createElement('div');
    bubbleDiv.className = 'bubble';
    
    // 2. 将气泡添加到消息div
    msgDiv.appendChild(bubbleDiv);
    chatBody.appendChild(msgDiv);
    
    let i = 0;
    const typingSpeed = 15; // 速度 (毫秒)

    function typeChar() {
        if (i < text.length) {
            // 检查是否是 HTML 标签的开始
            if (text[i] === '<') {
                const tagEnd = text.indexOf('>', i);
                if (tagEnd !== -1) {
                    // 快速添加整个 HTML 标签
                    bubbleDiv.innerHTML += text.substring(i, tagEnd + 1);
                    i = tagEnd + 1;
                } else {
                    // 如果找不到结束标签，则按字符处理
                    bubbleDiv.innerHTML += text[i++];
                }
            } else {
                // 添加普通字符
                bubbleDiv.innerHTML += text[i++];
            }
            
            // 自动滚动到底部
            chatBody.scrollTop = chatBody.scrollHeight;
            
            setTimeout(typeChar, typingSpeed);
        } else {
            // 动画结束后，恢复输入框
            if (userInput) {
                userInput.disabled = false;
                userInput.focus(); // 自动聚焦输入框
            }
        }
    }

    typeChar();
}

// 辅助函数：显示用户消息（保持不变）
function appendMessage(text, sender) {
    const chatBody = document.getElementById('chatBody');
    if (!chatBody) return;

    const msgDiv = document.createElement('div');
    msgDiv.className = `message ${sender}-message`;
    
    const bubbleContent = sender === 'ai' ? text : text.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    
    msgDiv.innerHTML = `<div class="bubble">${bubbleContent}</div>`;
    chatBody.appendChild(msgDiv);
    
    chatBody.scrollTop = chatBody.scrollHeight;
}

// 关键词匹配算法 (保持不变)
function findAnswer(userText) {
    let bestReply = "嗯，这是一个很好的问题！我是 AI 助理，关于这个细节，建议您直接点击左侧菜单查看我的<strong>辅导模式</strong>和<strong>核心优势</strong>，或者直接加微信 <strong>qiuwu999</strong> 详细评估。我们保证所有问题都会得到专业解答！";

    const normalizedText = userText.toLowerCase();
    for (const item of qaDatabase) {
        const match = item.keywords.some(keyword => normalizedText.includes(keyword));
        if (match) {
            bestReply = item.answer;
            break;  
        }
    }
    return bestReply;
}

// ==========================================
// 第四部分：AI 升学破局测试 (故事卡) 逻辑 (保持不变)
// ==========================================

const storyCardData = {
    // 步骤 1: 资源需求
    'step1': {
        title: 'AI 升学破局测试：快速锁定你的核心需求',
        question: '您目前最缺乏的是什么？',
        options: [
            { text: '最缺研究计划书：思路混乱，不知道如何切入东大教授的领域。', nextStep: 'result_rps' },
            { text: '最缺面试技巧：害怕被刁难，不知如何利用“弱点”转为优势。', nextStep: 'result_interview' },
            { text: '最缺渠道资源：想走机构免佣直通车，追求最高性价比的通道。', nextStep: 'result_channel' }
        ]
    },
    
    // 结果 1: 研究计划书 (RPS) 路径
    'result_rps': {
        title: '💡 方案建议：计划书的“破绽利用法”',
        result: `
            <p>您的问题在于<strong>研究逻辑的重构</strong>，而不是写作本身。秋武老师的优势正是：利用您经历中的**“矛盾点”**，转化为独一无二的**研究动机**，让教授对您的好奇心大于对您背景的挑剔。</p>
            <p><strong>【下一步行动】:</strong></p>
            <ul>
                <li>请即刻联系微信 <strong>qiuwu999</strong>，发送您的<strong>背景简历</strong>。</li>
                <li>我们将为你安排一次**“破局初筛”**，评估您的经历中最具转折点的部分。</li>
            </ul>
        `,
        isResult: true
    },
    
    // 结果 2: 面试技巧 (Interview) 路径
    'result_interview': {
        title: '💡 方案建议：非语言博弈与心态建设',
        result: `
            <p>面试是您展示个人<strong>认知深度</strong>的最终战场。秋武老师的辅导独创了**“前30秒非语言博弈”**训练，从坐姿、眼神到递交材料，帮您在心理上压倒对手。</p>
            <p><strong>【下一步行动】:</strong></p>
            <ul>
                <li>请即刻联系微信 <strong>qiuwu999</strong>，预约一次**“全真模拟面试”**。</li>
                <li>在正式辅导前，您将免费获得一份**《东大教授面试心理学速查表》**。</li>
            </ul>
        `,
        isResult: true
    },

    // 结果 3: 渠道资源 (Channel) 路径
    'result_channel': {
        title: '💡 方案建议：最高性价比的免佣直通车',
        result: `
            <p>您追求<strong>高效率与高性价比</strong>。秋武老师的**【核心私塾免佣直通车】**是最佳选择。辅导费用由机构承担，您获得顶级辅导，无需多花一分钱。</p>
            <p><strong>【下一步行动】:</strong></p>
            <ul>
                <li>请即刻联系微信 <strong>qiuwu999</strong>，告知您想申请**“免佣直通车”**。</li>
                <li>我们将为您匹配最合适的合作机构和语言学校，**立即开启零成本辅导流程**。</li>
            </ul>
        `,
        isResult: true
    }
};


// 核心函数：显示故事卡界面 (保持不变)
function showStoryCard(stepKey) {
    const menuList = document.getElementById('menuList');
    const contentDetail = document.getElementById('contentDetail');
    const chatBody = document.getElementById('chatBody');
    const chatInputArea = document.querySelector('.chat-input-area');
    let storyContainer = document.getElementById('storyCardContainer');

    // 1. 隐藏左侧菜单，确保内容详情页也隐藏
    if (menuList) menuList.classList.add('hidden');
    if (contentDetail) contentDetail.classList.add('hidden');

    // 2. 隐藏聊天室组件
    if (chatInputArea) chatInputArea.classList.add('hidden'); 
    if (chatBody) chatBody.style.display = 'none';

    // 3. 确保故事卡容器存在并显示
    if (!storyContainer) {
        storyContainer = document.createElement('div');
        storyContainer.id = 'storyCardContainer';
        if (chatBody && chatBody.parentElement) {
             chatBody.parentElement.appendChild(storyContainer);
        } else {
            console.error("无法找到 chatBody 或其父元素来插入 storyCardContainer。");
            return;
        }
    }
    storyContainer.style.display = 'block';

    // 4. 获取当前步骤数据并构建 HTML
    const stepData = storyCardData[stepKey];
    if (!stepData) return;

    let storyCardHtml = `<div class="story-card-container">`;
    storyCardHtml += `<h3>${stepData.title}</h3>`;
    
    // 如果是问题 (有 options)
    if (stepData.options) {
        storyCardHtml += `<p class="question-text">${stepData.question}</p>`;
        storyCardHtml += `<div class="options-list">`;
        stepData.options.forEach(option => {
            storyCardHtml += `
                <button class="option-btn" onclick="showStoryCard('${option.nextStep}')">
                    ${option.text}
                </button>
            `;
        });
        storyCardHtml += `</div>`;
    } 
    // 如果是结果 (有 result)
    else if (stepData.isResult) {
        storyCardHtml += `<div class="result-content">${stepData.result}</div>`;
        storyCardHtml += `<button class="btn-return-chat" onclick="returnToChat()">← 返回 AI 咨询室</button>`;
    }
    
    storyCardHtml += `</div>`;
    storyContainer.innerHTML = storyCardHtml;
}

// 辅助函数：返回聊天室 (保持不变)
function returnToChat() {
    const chatBody = document.getElementById('chatBody');
    const chatInputArea = document.querySelector('.chat-input-area');
    const storyContainer = document.getElementById('storyCardContainer');
    
    const profileCover = document.getElementById('profileCover'); // 获取封面
    const menuList = document.getElementById('menuList'); // 获取菜单列表
    const contentDetail = document.getElementById('contentDetail'); // 获取详情页
    
    // --- 1. 恢复右侧聊天室 ---
    if (chatBody) chatBody.style.display = 'flex'; 
    if (chatInputArea) chatInputArea.classList.remove('hidden'); 
    if (storyContainer) storyContainer.style.display = 'none';

    // --- 2. 重置左侧面板到“封面”状态 (解决返回后左侧空白的问题) ---
    if (profileCover) profileCover.classList.remove('hidden'); // 显示封面
    if (menuList) menuList.classList.add('hidden'); // 隐藏菜单
    if (contentDetail) contentDetail.classList.add('hidden'); // 隐藏详情页
    
    // 确保输入框可用并获得焦点
    const userInput = document.getElementById('userInput');
    if (userInput) {
        userInput.disabled = false;
        userInput.focus();
    }
}
