document.addEventListener('keydown', function (event) {
    // Close on ESC key
    if (event.key === 'Escape') {
        closeModal();
    }
    // Next on right arrow
    if (event.key === 'ArrowRight') {
        plusSlides(1)
    }
    // Prev on left arrow
    if (event.key === 'ArrowLeft') {
        plusSlides(-1)
    }
});

function openModal() {
    document.getElementById("myModal").style.display = "flex";
}

function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    // var dots = document.getElementsByClassName("demo");
    // var captionText = document.getElementById("caption");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    // for (i = 0; i < dots.length; i++) {
    //     dots[i].className = dots[i].className.replace(" active", "");
    // }
    slides[slideIndex - 1].style.display = "block";
    // dots[slideIndex - 1].className += " active";
    // captionText.innerHTML = dots[slideIndex - 1].alt;
}

document.addEventListener('DOMContentLoaded', (event) => {
    showSlides(slideIndex);
});

const images = [
    '../resources/to-top-clicked.png',
    '../resources/to-top-default.png',
    '../resources/to-top-hover.png',
    '../resources/to-top-shoot.png'
];

const LabRand = [
    "调枪时调错方向把20-200ul的中枪调到965了 和Eva一起在实验室堆雪人",
    "在实验室穿蚊子服跳舞",
    "UNO打成大富翁 实验室赶ddl第一人 和Tony&Jack三个人手忙脚乱配了一块小胶 goldengate 算了半个小时算不明白 PCR体系调完不加到八联管就打算去挑菌 用碎冰堆雪人 在这个表格里和Sarah聊天 把超净里的枪头盒打翻，还好枪头盒盖的紧没有爆装备 带Emmy用碎冰堆雪人",
    "50ul配成30ul 和Jack&Eva三个人手忙脚乱配了一块小胶 差点没盖内盖 设置了个两分钟的退火时长 和Jack 配中胶用小胶梳子导致中胶漏门牙 复刻时把菌液戳到培养基里 刚点完午餐就下班了，不得已只能留在实验室吃完饭再走 PCR体系不分装就打算去挑菌",
    "上层胶没加平 上层胶没混直接加下去 4mL的下层胶能淋满6mL的板子 刚刚上班发现就要下班了 往回跑真的往回跑了 回到家晚上跑回灵蛛 发现是线上会议 又得往回跑 企图用摇菌管的盖子去盖50ml离心管 第二个插错枪头",
    "离心机不盖内盖 来了实验室五秒就走了",
    "第一个暴力破坏枪头盒 第一个在非无菌区域打开无菌培养基 第一个离心机忘记盖内盖 实验室大眼瞎，平均每2min叫一次陈老师 每次做实验前搞玄学 加热固体培养基时不拧松盖子 倒胶的时候不放模具 离心机内盖梅开二度（ 戴moskilla头套 primer不放回冰箱并且开盖过夜",
    "第一个插错枪头 第一个在非无菌区域打开培养皿袋子 第一个离心机忘记配平 开着紫外灯做无菌实验 用碎冰堆雪人",
    "看错小数点，把0.5ul加成5ul 接菌把枪头戳到培养基里 和Tony&Eva三个人手忙脚乱配了一块小胶 goldengate算了半个小时算不明白 配出一块露底的DNA胶 上样八个样加一个marker上在六个孔里 涂布涂的34号菌盖子上写的33导致我们有两块33的板子 所幸tony记得自己接了什么 Eva都学会怎么操作尖叫机了Jack才上完四个样 设置了个两分钟的退火时长 PCR体系调完不加到八联管就打算去挑菌 和Tony配中胶用小胶梳子导致中胶漏门牙 差点把DM5000当成DNA染料 复刻时把菌液戳到培养基里 配PCR体系不拿primer primer用完不放回盒子 用秘之手指把自己调好以及garmen检查好的PCR程序从59秒按到了9分53秒，被tony拯救 《看消息是你的谎言》之下午一点开始实验早上十点就到了",
    "上层胶促凝剂没混匀",
    "bsa1拿成pst1，实验重做 嘲笑tony和jack配了漏门牙的胶 然后自己也配了一块漏门牙的胶 用碎冰堆雪人 在大富翁初始资金2k的情况下于半小时内成功达成-2k1的资产 把擦黑板的清水瓶当成酒精, 还好被henry及时发现 在这个表格里和eva聊天并且寻找消失的tony",
    "放-20度冰箱的dna不在盖子上写名字（写在侧面，导致除了garmen没有人能找得到",
    "实验放鸽子 忘换枪头差点毁了整瓶buffer p2 第二个在非无菌区域打开无菌培养基 挑菌把枪头戳到培养基里 用完-80℃冰箱不关门 把质粒放到-80℃冰箱里 洗瓶子洗错把番茄红素的实验结果洗掉了",
    "迟到三个半小时 配蛋白胶不加促凝剂 突然消失又突然出现 在SCIE和LINKS去外面团建吃好的AIS却在实验室加班时当着队员的面说想加入SCIE 移液枪就在眼前却看不到 在群里公然说想加入scie 高压灭菌锅有个阀门没关就开始运行",
    "离心机不盖内盖 SCIE借用我们小离心机不配平用蛮力压着盖子不让起飞 SCIE借用我们的枪不归位也不调回最大量程 LINKS坏事做尽 把所有东西都丢我们冰箱里 SCIE也把他们两盒Primer都放我们冰箱里 有人可能用了酶标仪没洗, 导致我们blanking的时候CV值高达37% 有人大离心机用了不关掉保持四度开盖制冷过夜 并且没有拿掉管套 有人做实验在地上洒满了水 把配好不用的胶放桌上不收拾过夜萎缩 把胶放仪器里看完不拿出来",
    "SCIE把八连管全放自己桌上（ LINKS桌上有一瓶开盖过夜的bufferpw 两个人一起配胶结果还是忘了加梳子，差点配了一块无孔胶。（我们队提醒才想起来） 还是那两个人，用完胶区buffer的量杯不给它带手套 SCIE画了一下午的妆 links有位小同志在十分钟内达成离心机忘盖内盖成就两次 跑完胶想看时刚打开机器正在拿胶时links突然冒出一个人把自己的胶放上去看了",
    "超声破碎仪的隔音棉没有安装, 导致超声仪在实验室放声尖叫 蛋白胶内槽怎么拼怎么漏液,最后四个老师轮番上阵才解决 AIS怎么没有团建只有加班 早上用实验室超净台因为没有问其他老师能不能用所以被说了 怎么插了四十多盒枪头最后自己还沦落得没有枪头用 Ratio 6.25的dd水 为什么我们队会有四本书 notebook永远都是周五或周六一天赶完一周 扭扭棒被一个小朋友还有两个比我们年龄还大的小朋友玩了一半 用迷你离心机时候管子没塞好 开盖后样品飞了 Concentration 3.8的质粒"
]

const LabRandIMG = document.getElementById('LabRandIMG');
const LabRandMSG = document.getElementById('LabRandMSG');
const LabRandBTN = document.getElementById("LabRandBTN");

LabRandBTN.addEventListener("click", function () {
    const randomIndex = Math.floor(Math.random() * LabRand.length);
    // LabRandIMG.src = images[randomIndex];
    LabRandMSG.textContent = LabRand[randomIndex];
});