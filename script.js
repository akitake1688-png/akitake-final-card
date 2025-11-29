// script.js - 最终审核版本 (SNS评论生成与复制增强)

// --- 1. 全局UI元素引用 (保持不变) ---
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

// --- 2. 核心数据存储 (QA内容保持不变，新增 SNS 评论数据) ---

// QA 数据库 (深度重构，融入高情商、文化差异与心理学视角)
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

// SNS 评论/回复生成器数据 (模拟秋武老师风格)
const snsCommentGenerator = [
    (topic) => `【秋武观点：留学战略】同学，你的思考触及了核心矛盾：投入与回报。请记住，日本留学申请是一场**认知差的博弈**。与其担忧眼前，不如用**逻辑向量降维**法重构你的研究主题，找到真正的**破局点**。🤔 祝你破局成功！`,
    (topic) => `【深度点评：高情商与文化】针对"${topic}"，我的建议是：**不要只看字面，要读懂空气**。教授需要的不是标准答案，而是你的**心理韧性和文化适应力**。你现在的策略是否已将劣势转化为**独特叙事**？欢迎私信我获取更精准的诊断。`,
    (topic) => `【心理博弈论】看到"${topic}"这个话题，我深知这背后是巨大的**情绪内耗**。留学挑战的是心理而非智力。请使用**防御性悲观**策略，预设最坏，再从容布局。行动起来，不要让**焦虑**成为你最大的瓶颈。💡`,
    (topic) => `【风险对冲】关于"${topic}"的讨论很热烈。但请注意，凡事都有**隐形费用和机会成本**。我的“零成本留学”模式，就是一种**风险对冲**。把钱留给生活和学习，将精力投入到**逻辑闭环的构建**中。这才是对时间的尊重。⏳`
];

// 导师策略性回答 (保持不变)
const strategicFallbackResponses = [
    "您的问题触及了留学的深层**战略博弈点**。在信息之外，我们更需洞察**‘认知差’**。我们的辅导重点是：文理融合和逻辑重构。",
    "这正是许多同学忽视的**‘隐形壁垒’**。如何利用**心理学**策略破解它，将劣势转化为优势，是我们的专长。",
    "让我们从根源上分析这个问题，并找到一个能够将劣势转化为优势的**‘破局点’**。请提供更多背景信息，例如：专业、目标院校。",
    "关于这一点，我们的**‘AI升学破局模拟’**或许能给您更直观的体验，模拟不同策略的效果。好的战略才是胜利的关键，而不是盲目的努力。"
];


// --- 3. 游戏全局状态 & 辅助函数 (保持不变) ---
let gameState = { /* ... 保持不变 ... */ }; 
function getRandomInt(max) { return Math.floor(Math.random() * max); }
function getRandomElement(arr) { return arr[getRandomInt(arr.length)]; }
function showLoading() { loadingIndicator.classList.remove('hidden'); chatBody.scrollTop = chatBody.scrollHeight; }
function hideLoading() { loadingIndicator.classList.add('hidden'); }

// --- 4. 新增：复制文本到剪贴板函数 ---
/**
 * 强制将文本复制到剪贴板，并使用 Promise 包装异步操作。
 * @param {string} text 要复制的文本
 */
function copyTextToClipboard(text) {
    return new Promise((resolve, reject) => {
        // 使用 Clipboard API (推荐)
        if (navigator.clipboard) {
            navigator.clipboard.writeText(text).then(resolve).catch(reject);
        } else {
            // 备选方案 (旧浏览器兼容)
            const textArea = document.createElement("textarea");
            textArea.value = text;
            textArea.style.position = "fixed";  // 避免滚动
            textArea.style.opacity = "0";      // 隐藏
            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select();
            try {
                const successful = document.execCommand('copy');
                document.body.removeChild(textArea);
                if (successful) {
                    resolve();
                } else {
                    reject(new Error("Fallback copy failed"));
                }
            } catch (err) {
                document.body.removeChild(textArea);
                reject(err);
            }
        }
    });
}

// --- 5. 发送消息函数 (重构以支持 SNS 模式) ---

async function sendAiMessage(message, isSNSComment = false, originalText = '', delay = 1000) {
    showLoading();
    await new Promise(resolve => setTimeout(resolve, delay));
    hideLoading();

    const messageDiv = document.createElement('div');
    
    if (isSNSComment) {
        messageDiv.classList.add('message', 'sns-comment-message');
        
        // 自动复制
        await copyTextToClipboard(originalText)
            .then(() => {
                const notification = `<span class="copy-success-notification">（已自动复制到剪贴板！可以直接粘贴使用 🌸）</span>`;
                messageDiv.innerHTML = `<div class="sns-comment-bubble">${message} ${notification}</div>`;
            })
            .catch(err => {
                console.error('复制失败:', err);
                const notification = `<span class="copy-success-notification" style="color:var(--color-secondary);">（自动复制失败，请手动复制文案！）</span>`;
                messageDiv.innerHTML = `<div class="sns-comment-bubble">${message} ${notification}</div>`;
            });
    } else {
        messageDiv.classList.add('message', 'ai-message');
        messageDiv.innerHTML = `<div class="bubble">${message}</div>`;
    }

    chatBody.appendChild(messageDiv);
    chatBody.scrollTop = chatBody.scrollHeight;
}

function sendUserMessage(message) {
    const userMessageDiv = document.createElement('div');
    userMessageDiv.classList.add('message', 'user-message');
    userMessageDiv.innerHTML = `<div class="bubble">${message}</div>`;
    chatBody.appendChild(userMessageDiv);
    chatBody.scrollTop = chatBody.scrollHeight;
}

const SNS_PREFIX = "生成评论或回复：";

function handleKeyPress(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}

function sendMessage() {
    const rawMessage = userInput.value.trim();
    if (rawMessage === "") return;

    sendUserMessage(rawMessage);
    userInput.value = '';

    // --- SNS 评论生成模式判断 ---
    if (rawMessage.startsWith(SNS_PREFIX)) {
        const topic = rawMessage.substring(SNS_PREFIX.length).trim();
        
        // 1. 生成 SNS 评论内容
        const commentTemplate = getRandomElement(snsCommentGenerator);
        const generatedComment = commentTemplate(topic);

        // 2. 构造显示在气泡中的内容 (高亮显示已复制的提示)
        const displayComment = generatedComment.replace(/\n/g, '<br>');

        // 3. 以 SNS 模式发送并执行复制
        sendAiMessage(displayComment, true, generatedComment);
        return; 
    }

    // --- 常规咨询模式 ---
    let response = null;
    let maxMatchLength = 0;

    const lowerCaseMessage = rawMessage.toLowerCase();
    
    // 尝试匹配 QA 数据库 (最长匹配优先)
    for (const key in qaDatabase) {
        if (lowerCaseMessage.includes(key) && key.length > maxMatchLength) {
            response = qaDatabase[key];
            maxMatchLength = key.length;
        }
    }

    if (response) {
        // 匹配到关键词，给出专业回答
        sendAiMessage(response);
    } else {
        // 未匹配到关键词，给出策略性/引导性回答
        let fallbackResponse = getRandomElement(strategicFallbackResponses);
        
        if (lowerCaseMessage.length > 20 && lowerCaseMessage.includes('如何')) {
            fallbackResponse = "您的问题很关键，涉及深层战略。请告诉我您的具体背景和目标，我将提供更精准的**‘破局点’**分析。";
        }
        
        sendAiMessage(fallbackResponse);
    }
}


// --- 6. 菜单/游戏相关函数 (保持不变) ---
// ... (toggleMenu, backToMenu, showChatSection, startGameSimulation, updateGameUI, 等等函数保持不变) ...

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
