var lineHold = "";

var allOptions = ""; //store station options for dropdown selection

var curRow = 2; //keep count on adding or deleting trips

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
    "Y15", "Y16", "Y17", "Y18", "Y19", "Y20"]

var stationCodes = {
    'BR01': '�ʪ���', 'BR02': '��]', 'BR03': '�U�ڪ���', 'BR04': '�U����|',
    'BR05': '����', 'BR06': '���', 'BR07': '���i�p', 'BR08': '��ޤj��', 'BR09': '�j�w',
    'BR10': '�����_��', 'BR11': '�n�ʴ_��', 'BR12': '���s�ꤤ', 'BR13': '�Q�s����', 'BR14': '�j��',
    'BR15': '�C�n��', 'BR16': '���', 'BR17': '���Y', 'BR18': '��w', 'BR19': '����',
    'BR20': '�j�򤽶�', 'BR21': '���w', 'BR22': '�F��', 'BR23': '�n��n����', 'BR24': '�n��i���]',
    'R02': '�H�s', 'R03': '�x�_101/�@�T', 'R04': '�H�q�w�M', 'R05': '�j�w', 'R06': '�j�w�˪L����',
    'R07': '�F��', 'R08': '����������', 'R09': '�x�j��|', 'R10': '�x�_����', 'R11': '���s',
    'R12': '���s', 'R13': '���v���', 'R14': '��s', 'R15': '�C��', 'R16': '�h�L',
    'R17': '�ۤs', 'R18': '���w', 'R19': '�۵P', 'R20': 'ԧ����', 'R21': '�_��',
    'R22': '�_��', 'R22A': '�s�_��', 'R23': '�_���^', 'R24': '���q', 'R25': '����',
    'R26': '�˳�', 'R27': '����L', 'R28': '�H��',
    'G01': '�s��', 'G02': '�s���Ϥ���', 'G03': '�C�i', 'G03A': '�p�Ѽ�', 'G04': '�j�W�L',
    'G05': '����', 'G06': '�U��', 'G07': '���]', 'G08': '�x�q�j��', 'G09': '�j�F',
    'G10': '����������', 'G11': '�p�n��', 'G12': '���', 'G13': '�_��', 'G14': '���s',
    'G15': '�Q���n��', 'G16': '�n�ʴ_��', 'G17': '�x�_�p���J', 'G18': '�n�ʤT��', 'G19': '�Q�s',
    'O01': '�n�ը�', 'O02': '���w', 'O03': '�æw����', 'O04': '����', 'O05': '�j�F',
    'O06': '�F��', 'O07': '�����s��', 'O08': '�Q���n��', 'O09': '��Ѯc', 'O10': '���s��p',
    'O11': '���v���', 'O12': '�j���Y', 'O13': '�x�_��', 'O14': '��d', 'O15': '�T��',
    'O16': '���ޮc', 'O17': '�Y�e��', 'O18': '�s��', 'O19': '���j', 'O20': '����',
    'O21': '�j�s', 'O50': '�T����p', 'O51': '�T�M�ꤤ', 'O52': '�}�פ���', 'O53': '�T������',
    'O54': 'Ī�w',
    'BL01': '���H', 'BL02': '�ù�', 'BL03': '�g��', 'BL04': '���s', 'BL05': '�ȪF��|',
    'BL06': '����', 'BL07': '�O��', 'BL08': '�s�H', 'BL09': '���l�A', 'BL10': '�s�s�x',
    'BL11': '���', 'BL12': '�x�_����', 'BL13': '���ɦx', 'BL14': '�����s��', 'BL15': '�����_��',
    'BL16': '��������', 'BL17': '��������]', 'BL18': '���F��', 'BL19': '�ìK', 'BL20': '��s��',
    'BL21': '����', 'BL22': '�n��', 'BL23': '�n��i���]',
    'Y07': '�j�W�L', 'Y08': '�Q�|�i', 'Y09': '�q�Ծ�', 'Y10': '����',
    'Y11': '���w', 'Y12': '���M', 'Y13': '���M', 'Y14': '����', 'Y15': '�O�s',
    'Y16': '�O��', 'Y17': '�s�H����', 'Y18': '�Y�e��', 'Y19': '����', 'Y20': '�s�_���~���'
}

var stationsNames = {
    '�ʪ���': 'BR01', '��]': 'BR02', '�U�ڪ���': 'BR03', '�U����|': 'BR04',
    '����': 'BR05', '���': 'BR06', '���i�p': 'BR07', '��ޤj��': 'BR08', '�j�w': 'R05',
    '�����_��': 'BL15', '�n�ʴ_��': 'G16', '���s�ꤤ': 'BR12', '�Q�s����': 'BR13', '�j��': 'BR14',
    '�C�n��': 'BR15', '���': 'BR16', '���Y': 'BR17', '��w': 'BR18', '����': 'BR19', '�j�򤽶�': 'BR20',
    '���w': 'BR21', '�F��': 'BR22', '�n��n����': 'BR23', '�n��i���]': 'BL23', '�H�s': 'R02',
    '�x�_101/�@�T': 'R03', '�H�q�w�M': 'R04', '�j�w�˪L����': 'R06', '�F��': 'O06', '����������': 'G10',
    '�x�j��|': 'R09', '�x�_����': 'BL12', '���s': 'G14', '���s': 'R12', '���v���': 'O11', '��s': 'R14',
    '�C��': 'R15', '�h�L': 'R16', '�ۤs': 'R17', '���w': 'R18', '�۵P': 'R19', 'ԧ����': 'R20',
    '�_��': 'R21', '�_��': 'R22', '�s�_��': 'R22A', '�_���^': 'R23', '���q': 'R24', '����': 'R25',
    '�˳�': 'R26', '����L': 'R27', '�H��': 'R28', '�s��': 'G01', '�s���Ϥ���': 'G02', '�C�i': 'G03',
    '�p�Ѽ�': 'G03A', '�j�W�L': 'Y07', '����': 'G05', '�U��': 'G06', '���]': 'G07', '�x�q�j��': 'G08',
    '�j�F': 'O05', '�p�n��': 'G11', '���': 'BL11', '�_��': 'G13', '�Q���n��': 'O08', '�x�_�p���J': 'G17',
    '�n�ʤT��': 'G18', '�Q�s': 'G19', '�n�ը�': 'O01', '���w': 'Y11', '�æw����': 'O03', '����': 'O04',
    '�����s��': 'BL14', '��Ѯc': 'O09', '���s��p': 'O10', '�j���Y': 'O12', '�x�_��': 'O13', '��d': 'O14',
    '�T��': 'O15', '���ޮc': 'O16', '�Y�e��': 'Y18', '�s��': 'O18', '���j': 'O19', '����': 'O20', '�j�s': 'O21',
    '�T����p': 'O50', '�T�M�ꤤ': 'O51', '�}�פ���': 'O52', '�T������': 'O53', 'Ī�w': 'O54', '���H': 'BL01',
    '�ù�': 'BL02', '�g��': 'BL03', '���s': 'BL04', '�ȪF��|': 'BL05', '����': 'BL06', '�O��': 'Y16',
    '�s�H': 'BL08', '���l�A': 'BL09', '�s�s�x': 'BL10', '���ɦx': 'BL13', '��������': 'BL16', '��������]': 'BL17',
    '���F��': 'BL18', '�ìK': 'BL19', '��s��': 'BL20', '����': 'BL21', '�n��': 'BL22', '�Q�|�i': 'Y08',
    '�q�Ծ�': 'Y09', '����': 'Y10', '���M': 'Y12', '���M': 'Y13', '����': 'Y14', '�O�s': 'Y15',
    '�s�H����': 'Y17', '����': 'Y19', '�s�_���~���': 'Y20'
}
function generateStops() {
    allOptions = "";
    for (var key in stationCodes) {
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
    //<option class="o" value="O16">O16 ���ޮc��</option>
    return '<option class="' + lineName + '" value="' + stopNum + '">' + stopNum + ' ' + stopName + '</option>'
}

//parse fare api json
async function getAPIResults(dep, des) {
    let jsonObj = await fetch("https://taipei-metro-fare-api.herokuapp.com/getTicketPrice/" + dep + "/" + des);
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
    var farePer;
    var fareName = "Adult_Full_Fare";
    sind = allstops.indexOf(sloc);
    eind = allstops.indexOf(eloc);
    if ((sind === -1) | (eind === -1)) {
        alert("�Цb��" + rowNum + "���ܰ_�W���M���I��");
        return (-1, 0);
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
            var factor = 1;
            if ((sloc === eloc) | (farePer === 0)) {
                alert("��" + rowNum + "�椧�_�W���M���I���@�P�A����ηf�����ƱN�H0�p��A�нT�{��J�L�~");
                document.getElementById("farePerRound" + rowNum).innerHTML = "$ " + farePer;
                document.getElementById("itemCost" + rowNum).innerHTML = "$ " + (farePer * factor);
                return (0, 0);
            };
            document.getElementById("farePerRound" + rowNum).innerHTML = "$ " + farePer;
            if (freq[1] == "w") {
                factor = 4;
            };
            if (round == true) {
                factor *= 2;
            };
            factor *= freq[0];
            document.getElementById("itemCost" + rowNum).innerHTML = "$ " + (farePer * factor);
            return resolve([factor, farePer]);
        });
    });
}
async function calcTotal() {
    var i; //counter
    var tfare = 0;
    var tfactor = 0;
    var savings = 0;
    for (i = 1; i < curRow; i++) {
        var idtoCall = "calcFares" + i;
        var calced = await calcFares(idtoCall);
        console.log(i);
        console.log(calced)
        eachFactor = calced[0]
        eachFarePer = calced[1];
        if (eachFactor === -1) {
            alert("�[�`�e�нT�{�Ҧ��ȵ{�Ҥw��g����");
            document.getElementById("trips").innerHTML = "�֭p�f�����ơG";
            document.getElementById("ovlCost").innerHTML = "�`��O�G";
            document.getElementById("msg").innerHTML = "1280�w����";
            return;
        };
        tfactor += eachFactor;
        tfare += eachFactor * eachFarePer;
    }
    document.getElementById("trips").innerHTML = "�֭p�f�����ơG " + tfactor;
    discountFactor = applyDiscount(tfactor);
    if (discountFactor === 0) {
        document.getElementById("ovlCost").innerHTML = '���F����<a href="https://www.metro.taipei/cp.aspx?n=AB56163F79ECB2C2" target="_blank">�^�X��</a>�����e�A�`��O�G $ ' + tfare;
    } else {
        savings = Math.round(tfare * discountFactor);
        tfare = Math.round(tfare * (1 - discountFactor));
        document.getElementById("ovlCost").innerHTML = '���� $ ' + savings + '��<a href="https://www.metro.taipei/cp.aspx?n=AB56163F79ECB2C2" target="_blank">�^�X��</a>��A�`��O�G $ ' + tfare;
    }
    if (tfare >= 1180) {
        document.getElementById("msg").innerHTML = "1280�w�����ȱo�Ҽ{�I";
    }
    else {
        document.getElementById("msg").innerHTML = "1280�w�������G���ӦE��I";
    }
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
    cell1.innerHTML = '<label for="startUser' + curRow + '"></label><select class="startUser" id="startUser' + curRow + '"><option value="" selected disabled hidden>�Z�Z �п�� �Z�Z</option>' + allOptions;
    cell2.innerHTML = '<label for="endUser' + curRow + '"></label><select class="endUser" id="endUser' + curRow + '"><option value="" selected disabled hidden>�Z�Z �п�� �Z�Z</option>' + allOptions;
    cell3.innerHTML = '<label for="freqUser' + curRow + '"></label><select class="freqUser" id="freqUser' + curRow + '"><option value="1m" class="monf">�C��1��</option><option value="2m" class="monf">�C��2��</option><option value="3m" class="monf">�C��3��</option><option value="4m" class="monf">�C��4��</option><option value="1w" class="weekf">�C�g1��</option><option value="2w" class="weekf">�C�g2��</option><option value="3w" class="weekf">�C�g3��</option><option value="4w" class="weekf">�C�g4��</option><option value="5w" class="weekf">�C�g5��</option><option value="6w" class="weekf">�C�g6��</option><option value="7w" class="weekf">�C�g7��</option></select>';
    cell4.innerHTML = '<input type="checkbox" class="roundUser" id="roundUser' + curRow + '" value="Yes" /><label for="roundUser' + curRow + '">�O</label></div>';
    cell5.innerHTML = '<label for="typeUser' + curRow + '"></label><select class="typeUser" id="typeUser' + curRow + '"><option value="adult" class="typef">����</option><option value="senior" class="types">�q�ѥd</option><option value="charity" class="types">�R�ߥd</option><option value="companion" class="types">�R�߳���d</option><option value="newtaipeichild" class="types">�s�_���ൣ�u�f��</option><option value="taipeichild" class="typet">�O�_���ൣ�u�f��</option></select>';
    cell6.innerHTML = '<label for="calcUser' + curRow + '"><input type = "button" value = "�p�p" class="calcFares" id = "calcUser' + curRow + '" onclick = "calcFares(this.id)" /></label >';
    cell7.innerHTML = '<p id="farePerRound' + curRow + '"></p>';
    cell8.innerHTML = '<p id="itemCost' + curRow + '"></p>';
    curRow += 1;
}

function delTrip() {
    if (curRow > 1) {
        curRow -= 1;
        document.getElementById("dt").deleteRow(curRow);
    }
}
