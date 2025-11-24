// script.js - 最终完整版：左右分栏交互 & 深度 AI 问答库

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

// 左侧菜单详情内容配置
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
// 第二部分：右侧 AI 咨询室逻辑 (深度问答库)
// ==========================================

// 基于您提供的《日本国立大学申请Q&A手册》构建的知识库
const qaDatabase = [
    // --- 第一章：服务模式与费用 ---
    {
        keywords: ['为什么', '理由', '国立', '东大'],
        answer: "为什么选择国立大学？<br>在研究资源、导师阵容、学术声誉方面具有明显优势。特别是计划长期在日本发展的学生，国立大学的就业推荐力非常强。"
    },
    {
        keywords: ['费用', '钱', '收费', '价格'],
        answer: "辅导费用高吗？<br>我提供两种模式：①普通付费辅导；②【强推】免费模式：推荐进合作语言学校或私塾，由机构支付辅导费，实现“学生零支出”。详情加微信 qiuwu999 确认。"
    },
    {
        keywords: ['免费', '盈利', '隐形'],
        answer: "为什么免费？有隐形收费吗？<br>没有。商业逻辑很透明：机构支付介绍费，等同于替你付了辅导费。你不花钱，机构获客，我获益，三方共赢。"
    },
    {
        keywords: ['区别', '私塾', '大班'],
        answer: "辅导和普通私塾有什么区别？<br>我是个人精细化一对一辅导，区别于大机构流水线。专注攻克最难的“研究计划构建”和“教授心理博弈”，不辅导具体的数理化知识。"
    },
    {
        keywords: ['线上', '国内', '海外'],
        answer: "我不在日本也能辅导吗？<br>完全可以。所有辅导通过线上（Zoom/LINE）进行，时差灵活安排，文书修改和模拟面试都能同步完成。"
    },

    // --- 第二章：背景评估 ---
    {
        keywords: ['双非', '二本', '三本', '普通', '出身'],
        answer: "本科普通（双非/二本）能申请东大吗？<br>完全可能。日本教授重研究潜力而非校名。策略是：用高质量的研究计划书 + 高分语言成绩（N1/托福）来覆盖背景劣势。关键看你怎么“秀肌肉”。"
    },
    {
        keywords: ['gpa', '绩点', '低', '挂科'],
        answer: "GPA低有影响吗？<br>教授不查成绩单细节，只看总体学习能力。若GPA低，必须用高分EJU或语言成绩来对冲，同时准备好解释话术，强调专业课亮点。"
    },
    {
        keywords: ['英语', '托福', '雅思', '没英语'],
        answer: "英语成绩重要吗？<br>文科N1是门槛，理科N2是底线。顶尖校默认能读英文文献。没英语会极大缩小择校范围。建议理科必须有，文科最好有。"
    },
    {
        keywords: ['工作', '大龄', '年龄'],
        answer: "工作多年还能申请修士吗？<br>当然可以，日本教授很欢迎有社会经验的学生。优势在于“问题意识”。把工作经验转化为研究课题，比应届生的空想更有说服力。"
    },
    {
        keywords: ['跨专业', '转专业', '文转理'],
        answer: "跨专业申请难吗？<br>不要裸转。寻找原专业与新专业的“结合点”。例如学日语转经济，就研究“语言政策对经济活动的影响”。利用旧领域的工具研究新方向是核心策略。"
    },

    // --- 第三章：文书与计划书 ---
    {
        keywords: ['方向', '题目', '选题', '思路'],
        answer: "没有研究方向怎么办？<br>好题目 = 个人兴趣 + 教授领域 + 可操作性。不要选太大的题目（如“论日本经济”）。我会通过头脑风暴帮你筛选出最讨巧的切口。"
    },
    {
        keywords: ['结构', '怎么写', '字数'],
        answer: "研究计划书结构怎么写？<br>经典四段式：1.为何做（背景/动机）；2.做什么（对象/目的）；3.怎么做（方法/计划）；4.有何意义。逻辑必须严丝合缝，通常2000-3000字。"
    },
    {
        keywords: ['模板', '套路'],
        answer: "能用模板吗？<br>模板是“自杀式写法”，教授一眼看穿。必须结合自身经历，形成原创逻辑。我拒绝模板，只做深度定制。"
    },
    {
        keywords: ['ai', '代写'],
        answer: "能用AI写或找代写吗？<br>绝不建议。AI没有灵魂，代写面试一问三不知。我会帮你重构逻辑，但核心思想必须是你自己的，这样面试才能对答如流。"
    },
    {
        keywords: ['区别', '志望理由'],
        answer: "志望理由书和研究计划书的区别？<br>志望理由书讲“为什么选这个学校/教授”（偏动机），研究计划书讲“你打算做什么研究”（偏执行）。很多人混写，这是致命问题。"
    },

    // --- 第四章：教授与面试 ---
    {
        keywords: ['联系', '时间', '套磁'],
        answer: "什么时候联系教授？<br>出愿前6个月-3个月是黄金期。太早教授记不住，太晚名额没了。如果距离出愿不足2个月，建议直接准备材料强行套磁。"
    },
    {
        keywords: ['不回', '没回复', '无视'],
        answer: "教授不回邮件怎么办？<br>常态，心态要稳。原因多是没看到或太忙。对策：一周后改标题重发一次。如果还没回，果断换教授，别在一棵树上吊死。"
    },
    {
        keywords: ['再考虑', '模棱两可'],
        answer: "教授说“再考虑”是拒绝吗？<br>未必。这代表你有潜力但他有顾虑。回复要展现“死磕”精神，询问具体顾虑点并表示愿意改进，积极的执行力往往能打动教授。"
    },
    {
        keywords: ['面试', '流程', '时间'],
        answer: "面试流程是怎样的？<br>一般20-30分钟。前5分钟自我介绍，中间15分钟深挖研究计划（最惨烈环节），最后5分钟反向提问。"
    },
    {
        keywords: ['自我介绍', '稿子'],
        answer: "自我介绍说什么？<br>别背简历。重点讲：为什么选这个专业？为什么选这个学校？为什么选这个教授？把这三个“为什么”串成一个逻辑通顺的故事。"
    },
    {
        keywords: ['刁钻', '听不懂', '不会'],
        answer: "面试被问倒了怎么办？<br>千万别编！承认不足：“关于这个细节我考虑尚浅，但我认为可以从X方向探究...”。承认不足+给出思路=靠谱。"
    },

    // --- 第五章：考试与EJU ---
    {
        keywords: ['eju', '留考', '分数'],
        answer: "EJU成绩重要吗？<br>本科申请是敲门砖，研究生申请是参考。高分能加分，但不是唯一指标。关键是整体准备与逻辑展示。"
    },
    {
        keywords: ['复习', '时间表', '规划'],
        answer: "如何管理复习时间？<br>倒推法。查好出愿截止日，往前推：前1个月定稿文书，前3个月开始套磁，前6个月搞定语言成绩。今天就是最早的开始时间。"
    },

    // --- 第六章：生活与心态 ---
    {
        keywords: ['语言学校', '私塾'],
        answer: "私塾和语言学校选哪个？<br>语言学校解决签证，私塾强化升学。通过我推荐进私塾/语校，可免我的辅导费，性价比最高。具体加微信 qiuwu999 咨询。"
    },
    {
        keywords: ['打工', '生活费'],
        answer: "入学后能打工吗？<br>可以申请“资格外活动许可”，每周28小时。但建议适度，别因打工耽误学业。"
    },
    {
        keywords: ['累', '放弃', '焦虑'],
        answer: "准备太累想放弃怎么办？<br>累说明你在认真。把大目标拆解成每天的小任务（比如写200字）。完成任务的成就感是治疗焦虑的良药。有我在，你不是一个人在战斗。"
    },
    {
        keywords: ['失败', '被拒'],
        answer: "出愿失败说明我不适合留学吗？<br>不是。失败只是“匹配没对”。换角度、改逻辑、再尝试。只要坚持，总有一所好大学适合你。"
    }
];

// ==========================================
// 第三部分：聊天核心逻辑
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
    // 默认回复
    let bestReply = "这个问题很有深度。建议你点击左侧“核心优势”或“辅导模式”查看详情，或者直接加微信 <strong>qiuwu999</strong> 详细评估。";

    // 遍历数据库匹配关键词
    for (const item of qaDatabase) {
        // 检查是否包含任意一个关键词
        const match = item.keywords.some(keyword => userText.toLowerCase().includes(keyword));
        if (match) {
            bestReply = item.answer;
            break; 
        }
    }
    return bestReply;
}
