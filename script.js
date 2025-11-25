// script.js - 最终完整逻辑修正与健壮性增强版

// ==========================================
// 第一部分：数据与内容配置
// ==========================================

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
                <li><strong>1:1 师徒制：：</strong> 拒绝大班流水线。我只做精细化个人辅导，确保我的核心认知 100% 传递给你。</li>
                <li><strong>【强推】免佣直通车：：</strong> 通过我推荐进入合作私塾/语言学校，<span style="color:#d9534f; font-weight:bold;">辅导费由机构承担</span>。
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

// 故事卡数据（为简洁省略，假设您已保留此数据）
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

const qaDatabase = [
    // ... (假设您已保留所有 QA 数据库内容)
    {
        keywords: ['费用', '钱', '收费', '价格', '贵吗'],
        answer: "关于费用，我的原则是<strong>【透明】与【价值对等】</strong>。**非常感谢您提出如此直接的问题。**<br><br>我们不进行低效的价格博弈。您所支付的，是获取我作为东大博士的<strong>【核心认知】与【通关经验】</strong>。<br>目前仅开放两种通道：<br>1. 机构通道：适合需要全套基础流程服务的同学。<br>2. <strong>【私塾核心】免佣直通车</strong>：这是我最推荐的模式。剔除中间商溢价，您所有的预算都将转化为我的**【有效辅导时长】**。<br><br>如果您已准备好为结果负责，请联系微信 <strong>qiuwu999</strong> 获取详细方案。"
    },
    {
        keywords: ['优势', '特点', '区别', '为什么选你', '实力', '厉害'],
        answer: "市面上的辅导在帮您“补短板”，而我们的方法论是在帮您<strong>“利用破绽”</strong>。**我们更强调系统和方法论的构建。**<br><br>我的核心优势在于<strong>【理工科逻辑 x 农学生命力】</strong>的跨学科视角。在东大级别的教授眼中，完美的简历往往平庸。我擅长捕捉您经历中看似是弱点（破绽）的部分，通过独创的逻辑重构，将其转化为最具个人色彩的**【研究动机】**。<br>我无法辅导通用的数理化知识，但我能教您如何用教授无法拒绝的逻辑，赢下这场心理博弈。"
    },
    {
        keywords: ['内诺', '内定', '潜规则'],
        answer: "内诺（内定）是日本独特的制度文化，**它体现了师徒关系的提前确立。**内诺后，教授与学生之间会有‘契约感’。一旦您收到内诺，请务必保持**谦虚与敬语**，并立刻向教授递交**书面或邮件的感谢与确认函**。这是日本文化的规矩，也是我们确保顺利入学的关键步骤。"
    }
];


// ==========================================
// 第二部分：核心功能 - 状态切换（修复冲突）
// ==========================================

/**
 * 切换左侧面板到菜单或封面状态
 * @param {boolean} showMenu - true: 显示菜单列表; false: 显示主页封面
 */
function toggleMenu(showMenu) {
    const profileCover = document.getElementById('profileCover');
    const menuList = document.getElementById('menuList');
    const contentDetail = document.getElementById('contentDetail');
    
    // 确保从任何左侧状态切换时，右侧是聊天室状态
    returnToChat(); 

    if (showMenu) {
        if (profileCover) profileCover.classList.add('hidden');
        if (menuList) menuList.classList.remove('hidden');
        if (contentDetail) contentDetail.classList.add('hidden'); 
    } else {
        // 返回主页（封面）
        if (profileCover) profileCover.classList.remove('hidden');
        if (menuList) menuList.classList.add('hidden');
        if (contentDetail) contentDetail.classList.add('hidden');
    }
}

/**
 * 从详情页返回菜单列表
 */
function backToMenu() {
    const contentDetail = document.getElementById('contentDetail');
    const menuList = document.getElementById('menuList');
    
    // 确保右侧是聊天室状态
    returnToChat(); 

    if (contentDetail) contentDetail.classList.add('hidden');
    if (menuList) menuList.classList.remove('hidden');
}

/**
 * 显示左侧的详细内容
 * @param {string} type - 内容的类型键
 */
function showContent(type) {
    const menuList = document.getElementById('menuList');
    const contentDetail = document.getElementById('contentDetail');
    const dynamicContent = document.getElementById('dynamicContent');

    // 确保右侧是聊天室状态
    returnToChat();

    if (dynamicContent) dynamicContent.innerHTML = contentData[type] || '未找到内容。';

    if (menuList) menuList.classList.add('hidden');
    if (contentDetail) contentDetail.classList.remove('hidden');
}


// ==========================================
// 第三部分：故事卡模式（AI 升学破局测试）逻辑 - 彻底修复
// ==========================================

/**
 * 显示故事卡模式 (彻底修复左/右侧内容切换逻辑)
 * @param {string} stepKey - 当前故事卡的步骤键
 */
function showStoryCard(stepKey) {
    const menuList = document.getElementById('menuList');
    const contentDetail = document.getElementById('contentDetail');
    const profileCover = document.getElementById('profileCover');
