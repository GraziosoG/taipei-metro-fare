var lineHold = "";

var allOptions = ""; //store station options for dropdown selection

var curRow = 2; //keep count on adding or deleting trips

var calcBools = [-2]; //an array of zeros where 0 is row not calculated yet and 1 is already calculated and -1 is same stop and -2 is empty stop

var allstops = ["BR01", "BR02", "BR03", "BR04", "BR05", "BR06", "BR07", "BR08", "BR09", "BR10",
    "BR11", "BR12", "BR13", "BR14", "BR15", "BR16", "BR17", "BR18", "BR19", "BR20",
    "BR21", "BR22", "BR23", "BR24", "R02", "R03", "R04", "R05", "R06", "R07", "R08",
    "R09", "R10", "R11", "R12", "R13", "R14", "R15", "R16", "R17", "R18", "R19", "R20",
    "R21", "R22", "R22A", "R23", "R24", "R25", "R26", "R27", "R28", "G01", "G02", "G03",
    "G03A", "G04", "G05", "G06", "G07", "G08", "G09", "G10", "G11", "G12", "G13", "G14",
    "G15", "G16", "G17", "G18", "G19", "O01", "O02", "O03", "O04", "O05", "O06", "O07",
    "O08", "O09", "O10", "O11", "O12", "O13", "O14", "O15", "O16", "O17", "O18", "O19",
    "O20", "O21", "O50", "O51", "O52", "O53", "O54", "BL01", "BL02", "BL03", "BL04", "BL05", "BL06",
    "BL07", "BL08", "BL09", "BL10", "BL11", "BL12", "BL13", "BL14", "BL15", "BL16", "BL17", "BL18",
    "BL19", "BL20", "BL21", "BL22", "BL23", "Y07", "Y08", "Y09", "Y10", "Y11", "Y12", "Y13", "Y14",
    "Y15", "Y16", "Y17", "Y18", "Y19", "Y20"];

var stationCodes = {
    'BRL': '文湖線', 'BR01': '動物園', 'BR02': '木柵', 'BR03': '萬芳社區', 'BR04': '萬芳醫院',
    'BR05': '辛亥', 'BR06': '麟光', 'BR07': '六張犁', 'BR08': '科技大樓', 'BR09': '大安',
    'BR10': '忠孝復興', 'BR11': '南京復興', 'BR12': '中山國中', 'BR13': '松山機場', 'BR14': '大直',
    'BR15': '劍南路', 'BR16': '西湖', 'BR17': '港墘', 'BR18': '文德', 'BR19': '內湖',
    'BR20': '大湖公園', 'BR21': '葫洲', 'BR22': '東湖', 'BR23': '南港軟體園區', 'BR24': '南港展覽館',
    'RL': '淡水信義線','R02': '象山', 'R03': '台北101/世貿', 'R04': '信義安和', 'R05': '大安', 'R06': '大安森林公園',
    'R07': '東門', 'R08': '中正紀念堂', 'R09': '台大醫院', 'R10': '台北車站', 'R11': '中山',
    'R12': '雙連', 'R13': '民權西路', 'R14': '圓山', 'R15': '劍潭', 'R16': '士林',
    'R17': '芝山', 'R18': '明德', 'R19': '石牌', 'R20': '唭哩岸', 'R21': '奇岩',
    'R22': '北投', 'R22A': '新北投', 'R23': '復興崗', 'R24': '忠義', 'R25': '關渡',
    'R26': '竹圍', 'R27': '紅樹林', 'R28': '淡水',
    'GL': '松山新店站','G01': '新店', 'G02': '新店區公所', 'G03': '七張', 'G03A': '小碧潭', 'G04': '大坪林',
    'G05': '景美', 'G06': '萬隆', 'G07': '公館', 'G08': '台電大樓', 'G09': '古亭',
    'G10': '中正紀念堂', 'G11': '小南門', 'G12': '西門', 'G13': '北門', 'G14': '中山',
    'G15': '松江南京', 'G16': '南京復興', 'G17': '台北小巨蛋', 'G18': '南京三民', 'G19': '松山',
    'OL': '中和新蘆線','O01': '南勢角', 'O02': '景安', 'O03': '永安市場', 'O04': '頂溪', 'O05': '古亭',
    'O06': '東門', 'O07': '忠孝新生', 'O08': '松江南京', 'O09': '行天宮', 'O10': '中山國小',
    'O11': '民權西路', 'O12': '大橋頭', 'O13': '台北橋', 'O14': '菜寮', 'O15': '三重',
    'O16': '先嗇宮', 'O17': '頭前庄', 'O18': '新莊', 'O19': '輔大', 'O20': '丹鳳',
    'O21': '迴龍', 'O50': '三重國小', 'O51': '三和國中', 'O52': '徐匯中學', 'O53': '三民高中',
    'O54': '蘆洲',
    'BLL': '板南線','BL01': '頂埔', 'BL02': '永寧', 'BL03': '土城', 'BL04': '海山', 'BL05': '亞東醫院',
    'BL06': '府中', 'BL07': '板橋', 'BL08': '新埔', 'BL09': '江子翠', 'BL10': '龍山寺',
    'BL11': '西門', 'BL12': '台北車站', 'BL13': '善導寺', 'BL14': '忠孝新生', 'BL15': '忠孝復興',
    'BL16': '忠孝敦化', 'BL17': '國父紀念館', 'BL18': '市政府', 'BL19': '永春', 'BL20': '後山埤',
    'BL21': '昆陽', 'BL22': '南港', 'BL23': '南港展覽館',
    'YL': '環狀線','Y07': '大坪林', 'Y08': '十四張', 'Y09': '秀朗橋', 'Y10': '景平',
    'Y11': '景安', 'Y12': '中和', 'Y13': '橋和', 'Y14': '中原', 'Y15': '板新',
    'Y16': '板橋', 'Y17': '新埔民生', 'Y18': '頭前庄', 'Y19': '幸福', 'Y20': '新北產業園區'
};

var stationsNames = {
    '動物園': 'BR01', '木柵': 'BR02', '萬芳社區': 'BR03', '萬芳醫院': 'BR04',
    '辛亥': 'BR05', '麟光': 'BR06', '六張犁': 'BR07', '科技大樓': 'BR08', '大安': 'R05',
    '忠孝復興': 'BL15', '南京復興': 'G16', '中山國中': 'BR12', '松山機場': 'BR13', '大直': 'BR14',
    '劍南路': 'BR15', '西湖': 'BR16', '港墘': 'BR17', '文德': 'BR18', '內湖': 'BR19', '大湖公園': 'BR20',
    '葫洲': 'BR21', '東湖': 'BR22', '南港軟體園區': 'BR23', '南港展覽館': 'BL23', '象山': 'R02',
    '台北101/世貿': 'R03', '信義安和': 'R04', '大安森林公園': 'R06', '東門': 'O06', '中正紀念堂': 'G10',
    '台大醫院': 'R09', '台北車站': 'BL12', '中山': 'G14', '雙連': 'R12', '民權西路': 'O11', '圓山': 'R14',
    '劍潭': 'R15', '士林': 'R16', '芝山': 'R17', '明德': 'R18', '石牌': 'R19', '唭哩岸': 'R20',
    '奇岩': 'R21', '北投': 'R22', '新北投': 'R22A', '復興崗': 'R23', '忠義': 'R24', '關渡': 'R25',
    '竹圍': 'R26', '紅樹林': 'R27', '淡水': 'R28', '新店': 'G01', '新店區公所': 'G02', '七張': 'G03',
    '小碧潭': 'G03A', '大坪林': 'Y07', '景美': 'G05', '萬隆': 'G06', '公館': 'G07', '台電大樓': 'G08',
    '古亭': 'O05', '小南門': 'G11', '西門': 'BL11', '北門': 'G13', '松江南京': 'O08', '台北小巨蛋': 'G17',
    '南京三民': 'G18', '松山': 'G19', '南勢角': 'O01', '景安': 'Y11', '永安市場': 'O03', '頂溪': 'O04',
    '忠孝新生': 'BL14', '行天宮': 'O09', '中山國小': 'O10', '大橋頭': 'O12', '台北橋': 'O13', '菜寮': 'O14',
    '三重': 'O15', '先嗇宮': 'O16', '頭前庄': 'Y18', '新莊': 'O18', '輔大': 'O19', '丹鳳': 'O20', '迴龍': 'O21',
    '三重國小': 'O50', '三和國中': 'O51', '徐匯中學': 'O52', '三民高中': 'O53', '蘆洲': 'O54', '頂埔': 'BL01',
    '永寧': 'BL02', '土城': 'BL03', '海山': 'BL04', '亞東醫院': 'BL05', '府中': 'BL06', '板橋': 'Y16',
    '新埔': 'BL08', '江子翠': 'BL09', '龍山寺': 'BL10', '善導寺': 'BL13', '忠孝敦化': 'BL16', '國父紀念館': 'BL17',
    '市政府': 'BL18', '永春': 'BL19', '後山埤': 'BL20', '昆陽': 'BL21', '南港': 'BL22', '十四張': 'Y08',
    '秀朗橋': 'Y09', '景平': 'Y10', '中和': 'Y12', '橋和': 'Y13', '中原': 'Y14', '板新': 'Y15',
    '新埔民生': 'Y17', '幸福': 'Y19', '新北產業園區': 'Y20'
};

var sameStops = {
    "O17": "Y18", "Y17": "BL08", "Y16": "BL07", "Y11": "O02", "Y07": "G04", "G09": "O05", "G10": "R08",
    "G12": "BL11", "G14": "R11", "G15": "O08", "G16": "BR11", "R07": "O06", "R10": "BL12", "R13": "O11",
    "BL14": "O07", "BL15": "BR10", "BR09": "R05", "BR24": "BL23",
    "Y18": "O17", "BL08": "Y17", "BL07": "Y16", "O02": "Y11", "G04": "Y07", "O05": "G09", "R08": "G10",
    "BL11": "G12", "R11": "G14", "O08": "G15", "BR11": "G16", "O06": "R07", "BL12": "R10", "O11": "R13",
    "O07": "BL14", "BR10": "BL15", "R05": "BR09", "BL23": "BR24",
};

function generateStops() {
    allOptions = "";
    for (var key in stationCodes) {
        // line header
        if (key.slice(-1) == 'L') {
            line = '<option class="' + key.slice(0, -1) + '" disabled>' + stationCodes[key] + '</option>';
            allOptions += line;
            continue;
        }
        // stops
        var bfiveName = stationCodes[key];
        if (isNaN(key.charAt(key.length - 1))) {
            key = key.slice(0, -1);
        };
        var line = key.slice(0, -2);
        if (lineHold !== line) {
            lineHold = line;
        };
        allOptions += (generateStopsOptions(lineHold, key, bfiveName));
    }
    return allOptions;
}

function generateStopsOptions(lineName, stopNum, stopName) {
    //<option class="o" value="O16">O16 先嗇宮站</option>
    return '<option class="' + lineName + '" value="' + stopNum + '">' + stopNum + ' ' + stopName + '</option>';
}

function clearFares(row) {
    document.getElementById("farePerRound" + row).innerHTML = " ";
    document.getElementById("itemCost" + row).innerHTML = " ";
    document.getElementById("trips").innerHTML = "累計搭乘次數：";
    document.getElementById("ovlCost").innerHTML = "總花費：";
    document.getElementById("msg").innerHTML = "1280定期票";
    calcBools[row - 1] = 0;
}

//parse fare api json
async function getAPIResults(dep, des) {
    let jsonObj = await fetch("https://pineapple-bun-service.herokuapp.com/getTicketPrice/" + dep + "/" + des);
    let text = await jsonObj.text();
    return text;
}

async function calcFares(cid) { //return the number of trips for that row
    generateStops();
    rowNum = cid.slice(-1);
    var sloc = document.getElementById("startUser" + rowNum).value;
    var eloc = document.getElementById("endUser" + rowNum).value;
    var freq = document.getElementById("freqUser" + rowNum).value;
    var round = document.getElementById("roundUser" + rowNum).checked;
    var type = document.getElementById("typeUser" + rowNum).value;
    var factor = 0;
    var farePer = 0;
    var fareName = "Adult_Full_Fare";
    sind = allstops.indexOf(sloc);
    eind = allstops.indexOf(eloc);
    if ((sind === -1) | (eind === -1)) {
        alert("請在第" + rowNum + "行選擇起站和終點站");
        calcBools[rowNum - 1] = -2;
        return (-1, 0);
    } else if ((sloc === eloc) | (sameStops[sloc] === eloc) | (sameStops[eloc] === sloc)) {
        alert("第" + rowNum + "行之起站和終點站一致，車資及搭乘次數將以0計算，請確認輸入無誤");
        document.getElementById("farePerRound" + rowNum).innerHTML = "$ " + 0;
        document.getElementById("itemCost" + rowNum).innerHTML = "$ " + 0;
        calcBools[rowNum - 1] = -1;
        return (0, 0);
    };
    if (type === "taipeichild") {
        fareName = "Taipei_City_Children";
    }
    else if (type != "adult") {
        fareName = "Senior_Charity_Companion_New_Taipei_City_Children";
    };
    return new Promise((resolve, reject) => {
        getAPIResults(sloc, eloc).then(jsonfares => {
            jsf = JSON.parse(jsonfares);
            farePer = parseInt(jsf["Fare"][fareName]);
            factor = 1;
            document.getElementById("farePerRound" + rowNum).innerHTML = "$ " + farePer;
            if (freq[1] == "w") {
                factor = 4;
            };
            if (round == true) {
                factor *= 2;
            };
            factor *= freq[0];
            document.getElementById("itemCost" + rowNum).innerHTML = "$ " + (farePer * factor);
            calcBools[rowNum - 1] = 1;
            return resolve([factor, farePer]);
        });
    });  
}
async function calcTotal() {
    var i; //counter
    var tfare = 0;
    var tfactor = 0;
    var savings = 0;
    var eachFactor = 0;
    var eachFarePer = 0;
    var itemCost = 0;
    for (i = 1; i < curRow; i++) {
        var status = calcBools[i - 1];
        if (status === -2) { // left stops empty
            alert("請在第" + i + "行選擇起站和終點站");
            document.getElementById("trips").innerHTML = "累計搭乘次數：";
            document.getElementById("ovlCost").innerHTML = "總花費：";
            document.getElementById("msg").innerHTML = "1280定期票";
            eachFactor = 0;
            eachFarePer = 0;
        } else if (status === -1) { // same stop entry
            alert("第" + rowNum + "行之起站和終點站一致，車資及搭乘次數將以0計算，請確認輸入無誤");
            document.getElementById("farePerRound" + rowNum).innerHTML = "$ " + 0;
            document.getElementById("itemCost" + rowNum).innerHTML = "$ " + 0;
            eachFactor = 0;
            eachFarePer = 0;
        } else if (status === 0) { // not calculated yet
            var idtoCall = "calcFares" + i;
            var calced = await calcFares(idtoCall);
            eachFactor = calced[0];
            eachFarePer = calced[1];
            if (isNaN(eachFactor)) {
                eachFactor = 0;
                eachFarePer = 0;
            };
        } else { // already calculated and did not change entry
            eachFarePer = document.getElementById("farePerRound" + i).innerHTML.slice(2,);
            itemCost = document.getElementById("itemCost" + i).innerHTML.slice(2,);
            eachFactor = itemCost / eachFarePer;
        };
        tfactor += eachFactor;
        tfare += eachFactor * eachFarePer;
    }
    document.getElementById("trips").innerHTML = "累計搭乘次數： " + tfactor;
    discountFactor = applyDiscount(tfactor);
    if (discountFactor === 0) {
        document.getElementById("ovlCost").innerHTML = '未達扣除<a href="https://www.metro.taipei/cp.aspx?n=AB56163F79ECB2C2" target="_blank">回饋金</a>之門檻，總花費： $ ' + tfare;
    }
    else {
        savings = Math.round(tfare * discountFactor);
        tfare = Math.round(tfare * (1 - discountFactor));
        document.getElementById("ovlCost").innerHTML = '扣除 $ ' + savings + '之<a href="https://www.metro.taipei/cp.aspx?n=AB56163F79ECB2C2" target="_blank">回饋金</a>後，總花費： $ ' + tfare;
    };
    if (tfare >= 1180) {
        document.getElementById("msg").innerHTML = "1280定期票值得考慮！";
    }
    else if (tfare <= 500) {
        document.getElementById("msg").innerHTML = "你可以省下花1280定期票的錢下個月再說！";
    }
    else {
        document.getElementById("msg").innerHTML = "1280定期票似乎不太划算！";
    };
}

function applyDiscount(numTrips) {
    var discount = 0;
    if (numTrips < 11) {
        return discount;
    } else if (numTrips < 21) {
        return discount = 0.1;
    } else if (numTrips < 31) {
        return discount = 0.15;
    } else if (numTrips < 41) {
        return discount = 0.2;
    } else if (numTrips < 51) {
        return discount = 0.25;
    } else {
        return discount = 0.3;
    };
}

function addTrip() {
    var table = document.getElementById("dt");
    var row = table.insertRow(curRow);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(6);
    var cell8 = row.insertCell(7);
    cell1.innerHTML = '<label for="startUser' + curRow + '"></label><select class="startUser" id="startUser' + curRow + '" onchange="clearFares(' + curRow + ')"><option value="" selected disabled hidden>╴╴ 請選擇 ╴╴</option>' + allOptions;
    cell2.innerHTML = '<label for="endUser' + curRow + '"></label><select class="endUser" id="endUser' + curRow + '" onchange="clearFares(' + curRow + ')"><option value="" selected disabled hidden>╴╴ 請選擇 ╴╴</option>' + allOptions;
    cell3.innerHTML = '<label for="freqUser' + curRow + '"></label><select class="freqUser" id="freqUser' + curRow + '" onchange="clearFares(' + curRow + ')"><option value="1m" class="monf">每月1次</option><option value="2m" class="monf">每月2次</option><option value="3m" class="monf">每月3次</option><option value="4m" class="monf">每月4次</option><option value="1w" class="weekf">每週1次</option><option value="2w" class="weekf">每週2次</option><option value="3w" class="weekf">每週3次</option><option value="4w" class="weekf">每週4次</option><option value="5w" class="weekf">每週5次</option><option value="6w" class="weekf">每週6次</option><option value="7w" class="weekf">每週7次</option></select>';
    cell4.innerHTML = '<input type="checkbox" class="roundUser" id="roundUser' + curRow + '" value="Yes" onclick="clearFares(' + curRow + ')"/><label for="roundUser' + curRow + '">是</label></div>';
    cell5.innerHTML = '<label for="typeUser' + curRow + '"></label><select class="typeUser" id="typeUser' + curRow + '" onchange="clearFares(' + curRow + ')"><option value="adult" class="typef">全票</option><option value="senior" class="types">敬老卡</option><option value="charity" class="types">愛心卡</option><option value="companion" class="types">愛心陪伴卡</option><option value="newtaipeichild" class="types">新北市兒童優惠票</option><option value="taipeichild" class="typet">臺北市兒童優惠票</option></select>';
    cell6.innerHTML = '<label for="calcUser' + curRow + '"><input type = "button" value = "小計" class="calcFares" id = "calcUser' + curRow + '" onclick = "calcFares(this.id)" /></label >';
    cell7.innerHTML = '<p id="farePerRound' + curRow + '"></p>';
    cell8.innerHTML = '<p id="itemCost' + curRow + '"></p>';
    curRow += 1;
    calcBools.push(-2);
}

function delTrip() {
    if (curRow > 1) {
        curRow -= 1;
        calcBools = calcBools.slice(0, -1);
        document.getElementById("dt").deleteRow(curRow);
        document.getElementById("trips").innerHTML = "累計搭乘次數：";
        document.getElementById("ovlCost").innerHTML = "總花費：";
        document.getElementById("msg").innerHTML = "1280定期票";
    }
}

function showItems() {
    var btn = document.getElementById("showNotice");
    var items = document.getElementById("items");
    if (window.getComputedStyle(items, null).display === "none") {
        items.style.display = "block";
        btn.innerText = "注意事項 - 縮小";
    } else {
        items.style.display = "none";
        btn.innerText = "注意事項 - 檢視";
    }
}
