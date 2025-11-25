// script.js - 最终优化版 (融入文化心理学和严谨措辞)

// ==========================================
// 第一部分：左侧面板逻辑 (菜单与详情切换)
// [保持不变]
// ==========================================

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
    }
}

function backToMenu() {
    const contentDetail = document.getElementById('contentDetail');
    const menuList = document.getElementById('menuList');

    if (contentDetail) contentDetail.classList.add('hidden');
    if (menuList) menuList.classList.remove('hidden');
}

// 左侧菜单详情内容配置 
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

    returnToChat();

    if (dynamicContent) dynamicContent.innerHTML = contentData[type] || '未找到内容。';

    if (menuList) menuList.classList.add('hidden');
    if (contentDetail) contentDetail.classList.remove('hidden');
}


// ==========================================
// 第二部分：右侧 AI 咨询室逻辑 (融入严谨措辞)
// ==========================================

const qaDatabase = [
    {
        keywords: ['费用', '钱', '收费', '价格', '贵吗'],
        answer: "关于费用，我的原则是<strong>【透明】与【价值对等】</strong>。**非常感谢您提出如此直接的问题。**<br><br>我们不进行低效的价格博弈。您所支付的，是获取我作为东大博士的<strong>【核心认知】与【通关经验】</strong>。<br>目前仅开放两种通道：<br>1. 机构通道：适合需要全套基础流程服务的同学。<br>2. <strong>【私塾核心】免佣直通车</strong>：这是我最推荐的模式。剔除中间商溢价，您所有的预算都将转化为我的**【有效辅导时长】**。<br><br>如果您已准备好为结果负责，请联系微信 <strong>qiuwu999</strong> 获取详细方案。"
    },
    {
        keywords: ['优势', '特点', '区别', '为什么选你', '实力', '厉害'],
        answer: "市面上的辅导在帮您“补短板”，而我们的方法论是在帮您<strong>“利用破绽”</strong>。**我们更强调系统和方法论的构建。**<br><br>我的核心优势在于<strong>【理工科逻辑 x 农学生命力】</strong>的跨学科视角。在东大级别的教授眼中，完美的简历往往平庸。我擅长捕捉您经历中看似是弱点（破绽）的部分，通过独创的逻辑重构，将其转化为最具个人色彩的**【研究动机】**。<br>我无法辅导通用的数理化知识，但我能教您如何用教授无法拒绝的逻辑，赢下这场心理博弈。"
    },
    {
        keywords: ['免费', '盈利', '赚钱'],
        answer: "这是一个好问题，**非常感谢您对此的关注。**盈利模式非常透明：<br>我是渠道方，机构支付给我介绍费，这笔钱等于**替您支付了我的咨询费**。<br>这是一种“三方共赢”的成熟商业模式：您零成本获得高端辅导，机构获得优质生源，我获得合理的劳动回报。**无任何隐形消费**，我们将以**契约形式**明确约定。"
    },
    {
        keywords: ['双非', '二本', '三本', '普通', '出身'],
        answer: "<strong>双非本科完全能申请东大！</strong><br>请记住：教授录取的是“未来的研究者”，而不是“过去的考试机器”。**我们应立即将重点转向对学历背景的对冲。**<br>我们的策略是：用<strong>高质量的研究计划书 + 高分语言成绩</strong>来对冲学历背景。只要能通过计划书“秀肌肉”，展示出超越出身校的研究潜力，东大的大门就是敞开的。"
    },
    {
        keywords: ['gpa', '绩点', '低', '挂科'],
        answer: "GPA低是既定事实，**我们应立刻将重点转向‘解释成本’的构建。**<br>教授通常不看具体成绩单细节。如果GPA较低，我们必须用<strong>高分EJU/托福</strong>来覆盖这个劣势。同时，在面试中我会教您一套话术，将成绩低归因于“过度专注于某个专业领域”或“早期探索方向”，反而能体现您的专一。"
    },
    {
        keywords: ['英语', '托福', '雅思', '没英语'],
        answer: "在日本考顶级名校，**英语决定了您的上限，其重要性不容忽视。**<br>文科N1是门槛，理科N2是底线，而托福/托业则是能否冲刺旧帝大的关键。如果您现在没有英语成绩，我会建议根据您的目标校等级，立刻调整备考策略。不要抱有侥幸心理。"
    },
    {
        keywords: ['套磁', '教授', '联系', '回信'],
        answer: "套磁时间非常关键。出愿前<strong>6个月到3个月</strong>是黄金期。太早教授记不住，太晚名额可能已定。如果时间非常紧迫，必须准备好高质量的材料，**并掌握专业的邮件礼仪**进行强行套磁。"
    },
    {
        keywords: ['不回', '没回复', '无视', '沉默'],
        answer: "教授未回复邮件是常见现象，**请不必过度焦虑。**我们的应对策略应体现**严谨的跟进机制**：<br>1. **【邮件间隔】**：在一周后，以**完全不同的主题**再次发送，确保邮件不被系统过滤。<br>2. **【内容优化】**：第二次邮件应简洁提及研究计划的**“最新进展”**，展现持续的研究热情。<br>3. **【判断标准】**：若两次邮件皆无回应，则应视作**内隐式谢绝**，建议立即启动下一位教授的套磁准备。"
    },
    {
        keywords: ['再考虑', '模棱两可'],
        answer: "教授说“再考虑”是拒绝吗？**这并非绝对的否定，而代表了您仍具备潜力，但教授仍有顾虑。**<br>回复时要展现**持续学习与改进**的精神，询问具体顾虑点并表示愿意改进，积极的执行力能逆转局面！"
    },
    {
        keywords: ['自我介绍', '稿子'],
        answer: "自我介绍不是背简历，**而是进行逻辑的梳理与展示。**重点讲清三个‘为什么’：**为什么选这个专业？为什么选日本？为什么选这个教授？**这三者逻辑贯通，最能打动人。"
    },
    {
        keywords: ['底层逻辑', '成功', '秘诀'],
        answer: "顺利考上目标大学的**底层逻辑其实很单纯**：**不放弃任何一个机会**。<br>比如一年两次留考EJU，如果你因为“没自信”而放弃6月，只参加11月，你将失去很多机会。很多大学申报时只需要『受験票』（考试凭证），并不需要具体成绩。你至少会失去一次**临场体验校内考核**的机会。这种人与人之间的**认知偏差**，就是决定你合格与否的关键。"
    },
    {
        keywords: ['累', '放弃', '焦虑', '失败', '被拒'],
        answer: "我理解您现在面临着巨大的心力消耗！但请记住：**失败是挑战过程中获得的“肥料”**。<br>我们不怕失败，但怕**重复犯错**。小失败可以接受，但如果您重复犯错，不愿承认或总是找借口，最终只会酿成**悔恨但羞于启齿的大失败**。考学是心力博弈，请调整心态，将大目标拆解成小任务，**踏实做好每一步，我们与您并肩作战！**"
    },
    {
        keywords: ['方向', '题目', '选题', '思路'],
        answer: "研究方向是计划书的灵魂！**好的题目应是个人兴趣、教授领域与可操作性的交集。**切忌选择过于宏大的题目，那会显得空洞。我能通过头脑风暴，帮你筛选出最讨巧且最容易通过的切口。"
    },
    {
        keywords: ['结构', '怎么写', '字数'],
        answer: "研究计划书采用经典的四段式：<br>1. 为何做（背景/动机）；<br>2. 做什么（对象/目的）；<br>3. 怎么做（方法/计划）；<br>4. 有何意义。<br>**逻辑必须严丝合缝，这是日式学术的基本要求。**通常2000-3000字，逻辑重于文采。"
    },
    {
        keywords: ['模板', '套路'],
        answer: "请坚决杜绝模板！模板是**“自杀式写法”**，教授一眼看穿。我会要求您结合自身经历，形成原创逻辑。我们只做深度定制，拒绝一切套路。"
    },
    {
        keywords: ['面试', '流程', '时间'],
        answer: "面试流程是这样的：一般20-30分钟。<br>1. 前5分钟：自我介绍<br>2. 中间15分钟：深挖研究计划（最惨烈环节）<br>3. 最后5分钟：反向提问<br>我们会进行**完全复刻教授心理的全真模拟**，确保您胸有成竹。"
    },
    {
        keywords: ['刁钻', '听不懂', '不会'],
        answer: "面试听不懂教授问题怎么办？**请保持冷静！**礼貌地说：'もう一度お願いできますか'（能请您再说一遍吗？）。教授不会介意，反而觉得您认真。如果是被问倒了，**承认不足，但给出清晰的思考思路**，这是体现靠谱的黄金法则。"
    },
    {
        keywords: ['大龄', '年龄', '工作'],
        answer: "不用担心年龄问题，日本教授很欢迎有社会经验的学生。您的优势在于**“问题意识”**。将工作经验转化为研究课题，比应届生的空想更有说服力，这是您的独特竞争力！"
    },
    {
        keywords: ['ai', '代写'],
        answer: "我们**强烈不建议**使用AI代写。AI没有您的灵魂和经历，代写在面试时会暴露无遗。我们会帮助您**重构逻辑框架**，但核心思想必须是您自己的，这是对学术的尊重。"
    },
    {
        keywords: ['区别', '志望理由'],
        answer: "志望理由书和研究计划书的区别在哪里呢？**很多人会混淆，这是致命问题。**<br>志望理由书讲**“为什么选这个学校/教授”**（偏动机），研究计划书讲**“你打算做什么研究”**（偏执行）。"
    },
    {
        keywords: ['语言学校', '私塾'],
        answer: "语言学校解决签证，私塾强化升学。最划算的方式是：通过我推荐进私塾/语校，可免我的辅导费，实现**效率与费用的双赢**。加微信 <strong>qiuwu999</strong> 聊聊具体方案！"
    },
    // 新增一条体现中日文化差异的回复
    {
        keywords: ['内诺', '内定', '潜规则'],
        answer: "内诺（内定）是日本独特的制度文化，**它体现了师徒关系的提前确立。**内诺后，教授与学生之间会有‘契约感’。一旦您收到内诺，请务必保持**谦虚与敬语**，并立刻向教授递交**书面或邮件的感谢与确认函**。这是日本文化的规矩，也是我们确保顺利入学的关键步骤。"
    }
];

// ... [其余函数保持不变 typeMessage, appendMessage, findAnswer 等] ...

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

    appendMessage(message, 'user');
    if (inputField) {
        inputField.value = '';
        inputField.disabled = true; 
    }

    setTimeout(() => {
        const reply = findAnswer(message);
        typeMessage(reply); 
    }, 600);
}

function typeMessage(text) {
    const chatBody = document.getElementById('chatBody');
    const userInput = document.getElementById('userInput');
    if (!chatBody) return;

    const msgDiv = document.createElement('div');
    msgDiv.className = `message ai-message`;
    
    const bubbleDiv = document.createElement('div');
    bubbleDiv.className = 'bubble';
    
    msgDiv.appendChild(bubbleDiv);
    chatBody.appendChild(msgDiv);
    
    let i = 0;
    const typingSpeed = 15; 

    function typeChar() {
        if (i < text.length) {
            if (text[i] === '<') {
                const tagEnd = text.indexOf('>', i);
                if (tagEnd !== -1) {
                    bubbleDiv.innerHTML += text.substring(i, tagEnd + 1);
                    i = tagEnd + 1;
                } else {
                    bubbleDiv.innerHTML += text[i++];
                }
            } else {
                bubbleDiv.innerHTML += text[i++];
            }
            
            chatBody.scrollTop = chatBody.scrollHeight;
            
            setTimeout(typeChar, typingSpeed);
        } else {
            if (userInput) {
                userInput.disabled = false;
                userInput.focus();
            }
        }
    }

    typeChar();
}

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

function findAnswer(userText) {
    let bestReply = "非常感谢您提出如此深刻的问题！我是 AI 助理，关于这个细节，建议您直接点击左侧菜单查看我的<strong>辅导模式</strong>和<strong>核心优势</strong>，
