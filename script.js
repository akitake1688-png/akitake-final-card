// script.js - 最终修复版：使用用户提供的原始完整代码

// ==========================================
// 第一部分：左侧面板逻辑 (菜单与详情切换)
// ==========================================

function toggleMenu(showMenu) {
    const profileCover = document.getElementById('profileCover');
    const menuList = document.getElementById('menuList');
    
    if (showMenu) {
        profileCover.classList.add('hidden');
        menuList.classList.remove('hidden');
        // 确保从封面展开菜单时，详情页是隐藏的
        document.getElementById('contentDetail').classList.add('hidden'); 
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
            <h3>核心优势：以“破绽”为支点</h3>
            <ul>
                <li><strong>跨学科降维打击：</strong> 本科理工思维 x 硕士东大农学生命科学（文理交叉），擅长构建其他人无法复制的多维视角。</li>
                <li><strong>化“弱”为“强”：</strong> 独创“破绽利用法”。我不掩盖你的劣势，而是将你经历中的“矛盾点”转化为最吸引教授的“研究动机”。</li>
                <li><strong>东大底层逻辑：</strong> 深入破解日本顶级学府的“潜规则”，提供符合“东大基准”的逻辑重构。</li>
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

    // 填充内容
    dynamicContent.innerHTML = contentData[type];

    // 切换显示
    menuList.classList.add('hidden');
    contentDetail.classList.remove('hidden');
}


// ==========================================
// 第二部分：右侧 AI 咨询室逻辑 (深度问答库)
// ==========================================

const qaDatabase = [
    // --- 第一章：核心：费用与实力 (高情商优化) ---
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

    // --- 第二章：背景评估与自信建设 ---
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

    // --- 第三章：方法论与心态 (植入Word文档的深度观点) ---
    {
        keywords: ['底层逻辑', '成功', '秘诀'],
        answer: "顺利考上目标大学的**底层逻辑其实很单纯**：**不放弃任何一个机会**。<br>比如一年两次留考EJU，如果你因为“没自信”而放弃6月，只参加11月，你将失去很多机会。很多大学申报时只需要『受験票』（考试凭证），并不需要具体成绩。你至少会失去一次**临场体验校内考核**的机会。这种人与人之间的**认知偏差**，就是决定你合格与否的关键。"
    },
    {
        keywords: ['累', '放弃', '焦虑', '失败', '被拒'],
        answer: "我理解你现在很累！但请记住：<strong>失败是挑战过程中获得的“肥料”</strong>。<br>失败，本身是**痛并快乐着**的。我们不怕失败，但怕**重复犯错**。小失败可以接受，但如果你重复犯错，不愿承认或总是找借口，最终只会酿成**悔恨但羞于启齿的大失败**。考学是心力博弈，调整心态，将大目标拆解成小任务，**踏实做好每一步，你不是一个人在战斗！**"
    },

    // --- 第四章：文书与面试 (保持专业严谨) ---
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
