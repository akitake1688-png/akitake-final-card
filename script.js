// script.js - 最终完整版：左右分栏交互 & 深度 AI 问答库 (高情商优化)

// ==========================================
// 第一部分：左侧面板逻辑 (菜单与详情切换)
// ==========================================

function toggleMenu(showMenu) {
    const profileCover = document.getElementById('profileCover');
    const menuList = document.getElementById('menuList');
    
    if (showMenu) {
        profileCover.classList.add('hidden');
        menuList.classList.remove('hidden');
    } else {
        profileCover.classList.remove('hidden');
        menuList.classList.add('hidden');
    }
}

function backToMenu() {
    document.getElementById('contentDetail').classList.add('hidden');
    document.getElementById('menuList').classList.remove('hidden');
}

// 左侧菜单详情内容配置 (包含您的知乎和 B站真实链接)
const contentData = {
    'strength': `
        <div class="detail-card">
            <h3>核心优势</h3>
            <ul>
                <li><strong>跨学科思维：</strong> 本科理工 x 硕士东大农学生命科学（文理交叉），擅长多维视角分析。</li>
                <li><strong>东大背景：</strong> 深入了解日本顶级学府学术要求与潜规则，提供“东大基准”的逻辑重构。</li>
                <li><strong>非语言沟通：</strong> 独创“坐姿/眼神/递交材料”全真模拟，矫正每一个细节。</li>
                <li><strong>故事线打造：</strong> 将零散经历串联成扣人心弦的“学术成长史”。</li>
                <li><strong>化弱为强：</strong> 巧妙利用“破绽”，将其转化为独特视角，引导教授提问。</li>
            </ul>
        </div>
    `,
    'model': `
        <div class="detail-card">
            <h3>辅导模式与收费</h3>
            <ul>
                <li><strong>1:1 深度定制：</strong> 拒绝大班流水线。从文书到面试，全程一对一打磨。</li>
                <li><strong>免费辅导机制 (强推)：</strong> 通过指定渠道进入合作私塾/语言学校，辅导费由机构承担，学生实现 <strong>0负担</strong>！</li>
                <li><strong>利益深度绑定：</strong> 若第一年未合格，第二年免费继续辅导。</li>
                <li><strong>无限时服务：</strong> 不限课时，不限次数，越早开始性价比越高。</li>
            </ul>
        </div>
    `,
    'cases': `
        <div class="detail-card">
            <h3>成功案例 / 更多思考</h3>
            <p style="margin-bottom: 15px;">深度阅读我的知乎专栏，了解更多日本考学内幕与技巧：</p>
            
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

    // 填充内容
    dynamicContent.innerHTML = contentData[type];

    // 切换显示
    menuList.classList.add('hidden');
    contentDetail.classList.remove('hidden');
}


// ==========================================
// 第二部分：右侧 AI 咨询室逻辑 (深度问答库 - 情商优化版)
// ==========================================

const qaDatabase = [
    // --- 第一章：服务模式与费用 ---
    {
        keywords: ['为什么', '理由', '国立', '东大'],
        answer: "你好！关于为什么选择国立大学，这是个核心问题。国立大学在研究资源、导师阵容、学术声誉方面具有明显优势，特别是对于希望在日本长期发展的学生，国立大学的就业推荐力非常强。选择东大，就是选择高起点。"
    },
    {
        keywords: ['费用', '钱', '收费', '价格'],
        answer: "我理解您对费用的顾虑。我有两种模式：①普通付费辅导；②【强推】<strong>免费模式</strong>：通过我推荐进入合作私塾或语校，机构支付的介绍费即覆盖您的辅导费。您零额外支出享受高端一对一。细节请加微信 <strong>qiuwu999</strong> 沟通，我们透明化处理！"
    },
    {
        keywords: ['免费', '盈利', '隐形'],
        answer: "没问题！盈利模式很透明：我是渠道方，机构给我介绍费，这笔钱等于替您支付了我的咨询费。您省钱，机构获客，我获益，三方共赢，无任何隐形消费或套路，请放心。"
    },
    {
        keywords: ['区别', '私塾', '大班'],
        answer: "我和普通私塾的区别在于模式。我提供个人<strong>精细化一对一辅导</strong>，区别于大机构的流水线作业。我的核心是攻克最难的“研究计划构建”和“教授心理博弈”，我们不辅导具体的数理化知识哦。"
    },
    {
        keywords: ['线上', '国内', '海外'],
        answer: "完全可以！所有辅导都是通过线上（Zoom/LINE）进行，我们可以灵活安排时差。无论您在海外还是国内，文书修改和模拟面试都能保证同步高质量完成。"
    },
    {
        keywords: ['电气', '自动化', '就业', '前景', 'cs', '转码'],
        answer: "您问到电气自动化？这是个好话题。2025年的风口不是‘电’，而是‘智’。1. **新能源与储能**：谁能搞定‘源网荷储’的自动化调度，谁就是大爷。2. **AI落地的物理载体**：懂强电的没你懂算法，懂算法的没你懂硬件。这就是我常说的‘错位竞争’！"
    },

    // --- 第二章：背景评估 ---
    {
        keywords: ['双非', '二本', '三本', '普通', '出身'],
        answer: "请不要担心！<strong>双非本科完全能申请东大！</strong>日本教授重研究潜力而非校名。策略是：用高质量的研究计划书 + 高分语言成绩（N1/托福）来覆盖背景劣势。只要能‘秀肌肉’，出身校不是绝对限制。"
    },
    {
        keywords: ['gpa', '绩点', '低', '挂科'],
        answer: "GPA低是很多人遇到的问题。教授不会查成绩单细节，但会看总体学习能力。如果GPA较低，必须用<strong>高分EJU或语言成绩</strong>来对冲，同时准备好解释话术，强调专业课亮点，这是关键！"
    },
    {
        keywords: ['英语', '托福', '雅思', '没英语'],
        answer: "英语成绩是至关重要的一环！文科N1是门槛，理科N2是底线。顶尖校默认学生能读英文文献。没有英语会极大缩小择校范围。建议理科必须有，文科最好有。"
    },
    {
        keywords: ['工作', '大龄', '年龄'],
        answer: "不用担心年龄问题，日本教授很欢迎有社会经验的学生。您的优势在于“问题意识”。把工作经验转化为研究课题，比应届生的空想更有说服力，这是你的独特竞争力！"
    },
    {
        keywords: ['跨专业', '转专业', '文转理'],
        answer: "跨专业申请不是不可能，但切记<strong>不要裸转</strong>。一定要寻找原专业与新专业的“结合点”。例如，利用旧领域的工具研究新方向。我会帮你找到这个最佳结合点。"
    },

    // --- 第三章：文书与计划书 ---
    {
        keywords: ['方向', '题目', '选题', '思路'],
        answer: "研究方向是灵魂！好题目 = <strong>个人兴趣 + 教授领域 + 可操作性</strong>。切忌选太大的题目。我能通过头脑风暴，帮你筛选出最讨巧且最容易通过的切口。"
    },
    {
        keywords: ['结构', '怎么写', '字数'],
        answer: "研究计划书采用经典的四段式：<br>1. 为何做（背景/动机）；<br>2. 做什么（对象/目的）；<br>3. 怎么做（方法/计划）；<br>4. 有何意义。<br>逻辑必须严丝合缝，通常2000-3000字，逻辑重于文采。"
    },
    {
        keywords: ['模板', '套路'],
        answer: "请坚决杜绝模板！模板是<strong>“自杀式写法”</strong>，教授一眼看穿。我会要求你结合自身经历，形成原创逻辑。我只做深度定制，拒绝一切套路。"
    },
    {
        keywords: ['ai', '代写'],
        answer: "我强烈不建议使用AI代写。AI没有你的灵魂和经历，代写在面试时会让你一问三不知。我会帮你重构逻辑框架，但核心思想必须是你自己的。"
    },
    {
        keywords: ['区别', '志望理由'],
        answer: "志望理由书和研究计划书的区别在哪里呢？志望理由书讲<strong>“为什么选这个学校/教授”</strong>（偏动机），研究计划书讲<strong>“你打算做什么研究”</strong>（偏执行）。很多人混淆，这是致命问题。"
    },

    // --- 第四章：教授与面试 ---
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
        keywords: ['面试', '流程', '时间'],
        answer: "面试流程是这样的：一般20-30分钟。<br>1. 前5分钟：自我介绍<br>2. 中间15分钟：深挖研究计划（最惨烈环节）<br>3. 最后5分钟：反向提问<br>我们会进行全真模拟，让你胸有成竹。"
    },
    {
        keywords: ['自我介绍', '稿子'],
        answer: "自我介绍不是背简历！重点讲清三个‘为什么’：<strong>为什么选这个专业？为什么选日本？为什么选这个教授？</strong>这三者逻辑贯通，最能打动人。"
    },
    {
        keywords: ['刁钻', '听不懂', '不会'],
        answer: "面试听不懂教授问题怎么办？千万别慌！礼貌地说：'もう一度お願いできますか'（能请您再说一遍吗？）。教授不会介意，反而觉得你认真。如果是被问倒了，承认不足，并给出思路，这叫靠谱。"
    },

    // --- 第五章：考试与生活 ---
    {
        keywords: ['eju', '留考', '分数'],
        answer: "EJU成绩在本科申请是敲门砖，研究生申请是重要参考。高分当然有优势，但最终决定权仍在研究计划和面试。"
    },
    {
        keywords: ['语言学校', '私塾'],
        answer: "语言学校解决签证，私塾强化升学。最划算的方式是：通过我推荐进私塾/语校，可免我的辅导费，实现<strong>效率与费用的双赢</strong>。加微信 <strong>qiuwu999</strong> 聊聊具体方案！"
    },
    {
        keywords: ['累', '放弃', '焦虑'],
        answer: "我理解你很累！但累说明你在认真付出。考学是马拉松，不仅拼智力，更拼心力。把大目标拆解成每天的小任务，完成的成就感是最好的良药。<strong>请相信，你不是一个人在战斗！</strong>"
    },
    {
        keywords: ['失败', '被拒'],
        answer: "出愿失败不代表你不适合留学！失败只是‘匹配没对’。我们需要冷静分析：是计划书逻辑有问题，还是教授风格不合？换角度、改逻辑、再尝试。只要坚持，总有办法！"
    }
];

// ==========================================
// 第四部分：聊天核心逻辑
// ==========================================

// 处理用户输入
function handleKeyPress(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}

function sendMessage() {
    const inputField = document.getElementById('userInput');
    const message = inputField.value.trim();
    
    if (message === "") return;

    // 1. 显示用户消息
    appendMessage(message, 'user');
    inputField.value = '';

    // 2. 模拟 AI 思考延迟
    setTimeout(() => {
        const reply = findAnswer(message);
        appendMessage(reply, 'ai');
    }, 600); // 0.6秒延迟，模拟思考
}

function appendMessage(text, sender) {
    const chatBody = document.getElementById('chatBody');
    const msgDiv = document.createElement('div');
    msgDiv.className = `message ${sender}-message`;
    
    // AI 回复支持 HTML 标签（用于换行和加粗），用户消息纯文本
    const bubbleContent = sender === 'ai' ? text : text.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    
    msgDiv.innerHTML = `<div class="bubble">${bubbleContent}</div>`;
    chatBody.appendChild(msgDiv);
    
    // 滚动到底部
    chatBody.scrollTop = chatBody.scrollHeight;
}

// 关键词匹配算法
function findAnswer(userText) {
    // 默认回复 - 更具情商的引导
    let bestReply = "嗯，这是一个很好的问题！我是 AI 助理，关于这个细节，建议您直接点击左侧菜单查看我的<strong>辅导模式</strong>和<strong>核心优势</strong>，或者直接加微信 <strong>qiuwu999</strong> 详细评估。我们保证所有问题都会得到专业解答！";

    // 遍历数据库匹配关键词
    const normalizedText = userText.toLowerCase();
    for (const item of qaDatabase) {
        // 检查是否包含任意一个关键词
        const match = item.keywords.some(keyword => normalizedText.includes(keyword));
        if (match) {
            bestReply = item.answer;
            break; 
        }
    }
    return bestReply;
}
