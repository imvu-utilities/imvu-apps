var pelvis = {"n14": 0, "n24": 663.894, "n34": -0.0000282434};
var output = [];
var event = document.createEvent('MouseEvents');
var pom = document.createElement('a');

function download(filename, text) {
    pom.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    pom.setAttribute('download', filename);

    if (document.createEvent) {
        event.initEvent('click', true, true);
        pom.dispatchEvent(event);
    }
    else {
        pom.click();
    }
}

// download('test.txt', 'Hello world!');

function x_tag(n, value) {
    return { name: n, attrs: {}, children: [], val: value, close: true };
}

function y_tag(n, tags) {
    return { name: n, attrs: {}, children: tags, val: undefined, close: true };
}

function z_tag(n, a, tags) {
    return { name: n, attrs: a, children: tags, val: undefined, close: true };
}

function settings() {
    var config = [];
    config.push(x_tag("bodyMesh", "false"));
    config.push(x_tag("hideBody", "false"));
    config.push(x_tag("gizmo", "true"));
    config.push(x_tag("centerBone", "false"));
    config.push(x_tag("zoom", "false"))
    config.push(x_tag("freeJoints", "false"));
    config.push(x_tag("idle", "0"));
    config.push(x_tag("play", "0"));
    config.push(x_tag("duration", "10"));
    return y_tag("settings", config);
}

function cached(b, idx) {
    switch (b) {
        case "0":
            switch (idx) {
                case "n14":
                    return 0;
                case "n24":
                    return 0;
                case "n34":
                    return 0;
            }
            break;
        case "1":
            return pelvis[idx];
        case "2":
            switch (idx) {
                case "n14":
                    return -0.0356773;
                case "n24":
                    return -14.380199999999999;
                case "n34":
                    return 0.306373;
            }
            break;
        case "3":
            switch (idx) {
                case "n14":
                    return 56.6081;
                case "n24":
                    return -0.00000107494;
                case "n34":
                    return -0.0000171907;
            }
            break;
        case "4":
            switch (idx) {
                case "n14":
                    return 278.212;
                case "n24":
                    return 0.0000107337;
                case "n34":
                    return -0.00000219748;
            }
            break;
        case "5":
            switch (idx) {
                case "n14":
                    return 264.186;
                case "n24":
                    return 0.00000278183;
                case "n34":
                    return -0.0000125063;
            }
            break;
        case "6":
            switch (idx) {
                case "n14":
                    return 88.527;
                case "n24":
                    return -0.0000211857;
                case "n34":
                    return -0.0000208006;
            }
            break;
        case "8":
            switch (idx) {
                case "n14":
                    return -0.0356773;
                case "n24":
                    return -14.380199999999999;
                case "n34":
                    return 0.306373;
            }
            break;
        case "9":
            switch (idx) {
                case "n14":
                    return 55.9252;
                case "n24":
                    return -0.00000457332;
                case "n34":
                    return -0.0000461224;
            }
            break;
        case "10":
            switch (idx) {
                case "n14":
                    return 278.143;
                case "n24":
                    return 0.000012581999999999999;
                case "n34":
                    return -0.0000018577800000000001;
            }
            break;
        case "11":
            switch (idx) {
                case "n14":
                    return 264.197;
                case "n24":
                    return 0.0000132952;
                case "n34":
                    return 0.00000805068;
            }
            break;
        case "12":
            switch (idx) {
                case "n14":
                    return 88.5239;
                case "n24":
                    return -0.000023206;
                case "n34":
                    return -0.0000119906;
            }
            break;
        case "14":
            switch (idx) {
                case "n14":
                    return 0.346647;
                case "n24":
                    return 21.7772;
                case "n34":
                    return 1.60017;
            }
            break;
        case "15":
            switch (idx) {
                case "n14":
                    return 40.0697;
                case "n24":
                    return 0.0000254352;
                case "n34":
                    return 0.0000238999;
            }
            break;
        case "16":
            switch (idx) {
                case "n14":
                    return 48.395999999999994;
                case "n24":
                    return 0.0000384988;
                case "n34":
                    return 0.0000030747;
            }
            break;
        case "17":
            switch (idx) {
                case "n14":
                    return 58.60159999999999;
                case "n24":
                    return 0.000028543199999999998;
                case "n34":
                    return 9.83102e-7;
            }
            break;
        case "18":
            switch (idx) {
                case "n14":
                    return 92.1706;
                case "n24":
                    return -0.0000605364;
                case "n34":
                    return 0.00000925558;
            }
            break;
        case "19":
            switch (idx) {
                case "n14":
                    return 19.1467;
                case "n24":
                    return 0.00000851217;
                case "n34":
                    return 0.000361696;
            }
            break;
        case "20":
            switch (idx) {
                case "n14":
                    return 13.8536;
                case "n24":
                    return 0.0000166514;
                case "n34":
                    return -0.00010751;
            }
            break;
        case "21":
            switch (idx) {
                case "n14":
                    return 14.980399999999998;
                case "n24":
                    return 0.0000332843;
                case "n34":
                    return 0.000340901;
            }
            break;
        case "22":
            switch (idx) {
                case "n14":
                    return 19.7749;
                case "n24":
                    return -0.0000493426;
                case "n34":
                    return 0.00000133178;
            }
            break;
        case "24":
            switch (idx) {
                case "n14":
                    return 86.0676;
                case "n24":
                    return -0.0198744;
                case "n34":
                    return -0.449461;
            }
            break;
        case "25":
            switch (idx) {
                case "n14":
                    return 116.259;
                case "n24":
                    return 0.00000396065;
                case "n34":
                    return 0.00000731981;
            }
            break;
        case "26":
            switch (idx) {
                case "n14":
                    return 19.3987;
                case "n24":
                    return -0.0000825031;
                case "n34":
                    return -0.00000223841;
            }
            break;
        case "27":
            switch (idx) {
                case "n14":
                    return 133.55;
                case "n24":
                    return -0.000104766;
                case "n34":
                    return -0.00000592445;
            }
            break;
        case "28":
            switch (idx) {
                case "n14":
                    return 94.29159999999999;
                case "n24":
                    return -8.9286e-7;
                case "n34":
                    return -0.00000734028;
            }
            break;
        case "29":
            switch (idx) {
                case "n14":
                    return 58.9403;
                case "n24":
                    return -3.9502700000000006;
                case "n34":
                    return 1.24541;
            }
            break;
        case "30":
            switch (idx) {
                case "n14":
                    return 15.1326;
                case "n24":
                    return -0.0606808;
                case "n34":
                    return 0.265579;
            }
            break;
        case "31":
            switch (idx) {
                case "n14":
                    return 59.3251;
                case "n24":
                    return -0.00000225802;
                case "n34":
                    return 0.00000117555;
            }
            break;
        case "32":
            switch (idx) {
                case "n14":
                    return 27.876899999999996;
                case "n24":
                    return 0.433149;
                case "n34":
                    return 0.449058;
            }
            break;
        case "33":
            switch (idx) {
                case "n14":
                    return 22.5618;
                case "n24":
                    return 0.747478;
                case "n34":
                    return 0.363798;
            }
            break;
        case "35":
            switch (idx) {
                case "n14":
                    return 15.1326;
                case "n24":
                    return -0.0606808;
                case "n34":
                    return 0.265579;
            }
            break;
        case "36":
            switch (idx) {
                case "n14":
                    return 22.8164;
                case "n24":
                    return -0.0803448;
                case "n34":
                    return 0.127993;
            }
            break;
        case "37":
            switch (idx) {
                case "n14":
                    return 19.2826;
                case "n24":
                    return -0.355036;
                case "n34":
                    return 0.8286910000000001;
            }
            break;
        case "38":
            switch (idx) {
                case "n14":
                    return 24.913500000000003;
                case "n24":
                    return -0.588844;
                case "n34":
                    return 1.02982;
            }
            break;
        case "40":
            switch (idx) {
                case "n14":
                    return 15.1327;
                case "n24":
                    return -0.060719199999999994;
                case "n34":
                    return 0.265571;
            }
            break;
        case "41":
            switch (idx) {
                case "n14":
                    return 58.7181;
                case "n24":
                    return -0.00000285662;
                case "n34":
                    return 0.0000034354099999999996;
            }
            break;
        case "42":
            switch (idx) {
                case "n14":
                    return 21.0153;
                case "n24":
                    return 0.38992499999999997;
                case "n34":
                    return 0.0424326;
            }
            break;
        case "43":
            switch (idx) {
                case "n14":
                    return 17.396;
                case "n24":
                    return 0.659931;
                case "n34":
                    return -0.0497939;
            }
            break;
        case "45":
            switch (idx) {
                case "n14":
                    return 15.1327;
                case "n24":
                    return -0.060719199999999994;
                case "n34":
                    return 0.265571;
            }
            break;
        case "46":
            switch (idx) {
                case "n14":
                    return 61.5416;
                case "n24":
                    return -0.0000502851;
                case "n34":
                    return 0.000014637100000000001;
            }
            break;
        case "47":
            switch (idx) {
                case "n14":
                    return 23.2843;
                case "n24":
                    return 0.336002;
                case "n34":
                    return 0.668869;
            }
            break;
        case "48":
            switch (idx) {
                case "n14":
                    return 19.4202;
                case "n24":
                    return -0.738948;
                case "n34":
                    return -0.513733;
            }
            break;
        case "50":
            switch (idx) {
                case "n14":
                    return 15.1327;
                case "n24":
                    return -0.060719199999999994;
                case "n34":
                    return 0.265571;
            }
            break;
        case "51":
            switch (idx) {
                case "n14":
                    return 59.410399999999996;
                case "n24":
                    return -0.0000224637;
                case "n34":
                    return 0.00000755867;
            }
            break;
        case "52":
            switch (idx) {
                case "n14":
                    return 25.6046;
                case "n24":
                    return 0.36117;
                case "n34":
                    return 0.201343;
            }
            break;
        case "53":
            switch (idx) {
                case "n14":
                    return 20.4208;
                case "n24":
                    return 0.7427700000000002;
                case "n34":
                    return 0.154036;
            }
            break;
        case "55":
            switch (idx) {
                case "n14":
                    return 86.0676;
                case "n24":
                    return -0.0198744;
                case "n34":
                    return -0.449461;
            }
            break;
        case "56":
            switch (idx) {
                case "n14":
                    return 116.259;
                case "n24":
                    return -0.00000903036;
                case "n34":
                    return 0.00000990724;
            }
            break;
        case "57":
            switch (idx) {
                case "n14":
                    return 19.3986;
                case "n24":
                    return 0.00000583116;
                case "n34":
                    return 0.00000270719;
            }
            break;
        case "58":
            switch (idx) {
                case "n14":
                    return 133.503;
                case "n24":
                    return 0.00000160413;
                case "n34":
                    return 0.00000780019;
            }
            break;
        case "59":
            switch (idx) {
                case "n14":
                    return 94.0833;
                case "n24":
                    return -0.332509;
                case "n34":
                    return -1.27727;
            }
            break;
        case "60":
            switch (idx) {
                case "n14":
                    return 64.8218;
                case "n24":
                    return 0.0799684;
                case "n34":
                    return 0.2182;
            }
            break;
        case "61":
            switch (idx) {
                case "n14":
                    return 15.1326;
                case "n24":
                    return -0.0606627;
                case "n34":
                    return -0.265564;
            }
            break;
        case "62":
            switch (idx) {
                case "n14":
                    return 61.37369999999999;
                case "n24":
                    return -0.00000899927;
                case "n34":
                    return 0.000013797399999999998;
            }
            break;
        case "63":
            switch (idx) {
                case "n14":
                    return 27.876999999999995;
                case "n24":
                    return 0.433203;
                case "n34":
                    return -0.449036;
            }
            break;
        case "64":
            switch (idx) {
                case "n14":
                    return 22.5617;
                case "n24":
                    return 0.747526;
                case "n34":
                    return -0.363771;
            }
            break;
        case "66":
            switch (idx) {
                case "n14":
                    return 15.1326;
                case "n24":
                    return -0.0606627;
                case "n34":
                    return -0.265564;
            }
            break;
        case "67":
            switch (idx) {
                case "n14":
                    return 22.8165;
                case "n24":
                    return -0.0803393;
                case "n34":
                    return -0.127965;
            }
            break;
        case "68":
            switch (idx) {
                case "n14":
                    return 19.2826;
                case "n24":
                    return -0.355146;
                case "n34":
                    return -0.828729;
            }
            break;
        case "69":
            switch (idx) {
                case "n14":
                    return 24.913400000000003;
                case "n24":
                    return -0.588824;
                case "n34":
                    return -1.0299;
            }
            break;
        case "71":
            switch (idx) {
                case "n14":
                    return 15.1326;
                case "n24":
                    return -0.0606627;
                case "n34":
                    return -0.265564;
            }
            break;
        case "72":
            switch (idx) {
                case "n14":
                    return 60.7423;
                case "n24":
                    return -0.0000162952;
                case "n34":
                    return 0.00000293244;
            }
            break;
        case "73":
            switch (idx) {
                case "n14":
                    return 21.0153;
                case "n24":
                    return 0.38977400000000006;
                case "n34":
                    return -0.0424223;
            }
            break;
        case "74":
            switch (idx) {
                case "n14":
                    return 17.3959;
                case "n24":
                    return 0.659873;
                case "n34":
                    return 0.0498085;
            }
            break;
        case "76":
            switch (idx) {
                case "n14":
                    return 15.1326;
                case "n24":
                    return -0.0606627;
                case "n34":
                    return -0.265564;
            }
            break;
        case "77":
            switch (idx) {
                case "n14":
                    return 63.5726;
                case "n24":
                    return 0.000006694570000000001;
                case "n34":
                    return 0.0000188241;
            }
            break;
        case "78":
            switch (idx) {
                case "n14":
                    return 23.2844;
                case "n24":
                    return 0.336163;
                case "n34":
                    return -0.668896;
            }
            break;
        case "79":
            switch (idx) {
                case "n14":
                    return 19.4204;
                case "n24":
                    return -0.7388700000000001;
                case "n34":
                    return 0.513678;
            }
            break;
        case "81":
            switch (idx) {
                case "n14":
                    return 15.1326;
                case "n24":
                    return -0.0606627;
                case "n34":
                    return -0.265564;
            }
            break;
        case "82":
            switch (idx) {
                case "n14":
                    return 61.4674;
                case "n24":
                    return -0.0000444905;
                case "n34":
                    return 0.00000944973;
            }
            break;
        case "83":
            switch (idx) {
                case "n14":
                    return 25.6045;
                case "n24":
                    return 0.361201;
                case "n34":
                    return -0.20137;
            }
            break;
        case "84":
            switch (idx) {
                case "n14":
                    return 20.4207;
                case "n24":
                    return 0.742829;
                case "n34":
                    return -0.154055;
            }
            break;
        default:
            return undefined;
    }
}

function transpose(rots, b) {
    if (cached(b, "n14") == undefined) {
        return undefined;
    } else {
        var qw = rots[3];
        var qx = rots[0];
        var qy = rots[2];
        var qz = rots[1];

        // console.log(qw, qx, qy, qz);
        var nn = [];
        nn.push(x_tag("n11", 1 - (2 * (qy ** 2)) - (2 * (qz ** 2))));
        nn.push(x_tag("n12", (2 * qx * qy) - (2 * qz * qw)));
        nn.push(x_tag("n13", (2 * qx * qz) + (2 * qy * qw)));
        nn.push(x_tag("n14", cached(b, "n14")));
        nn.push(x_tag("n21", (2 * qx * qy) + (2 * qz * qw)));
        nn.push(x_tag("n22", 1 - (2 * (qx ** 2)) - (2 * (qz ** 2))));
        nn.push(x_tag("n23", (2 * qy * qz) - (2 * qx * qw)));
        nn.push(x_tag("n24", cached(b, "n24")));
        nn.push(x_tag("n31", (2 * qx * qz) - (2 * qy * qw)));
        nn.push(x_tag("n32", (2 * qy * qz) + (2 * qx * qw)));
        nn.push(x_tag("n33", 1 - (2 * (qx ** 2)) - (2 * (qy ** 2))));
        nn.push(x_tag("n34", cached(b, "n34")));

        if (b == "1") {
            b = "0";
        }
        var skel = z_tag("skel", { frame: "0", bone: b }, nn)
        return skel;
        // var skeletal = y_tag("skeletalAnimation", skel);
        // return skeletal;
    }
}

function format(tag, depth) {
    var out = "";
    for (var i = 0; i < depth; i++) {
        out = out + "\t";
    }
    out = out + "<" + tag.name;
    for (const [key, value] of Object.entries(tag.attrs)) {
        out = out + " " + key.toString() + "=\"" + value.toString() + "\"";
    }
    out = out + ">";
    if (tag.val != undefined) {
        out = out + tag.val.toString();
        out = out + "</" + tag.name + ">";
        output.push(out);
    } else {
        // out = out + "\n";
        output.push(out);
        tag.children.forEach(function (item, idx) {
            format(item, depth + 1);
        });
        var out2 = "";
        for (var j = 0; j < depth; j++) {
            out2 = out2 + "\t";
        }
        out2 = out2 + "</" + tag.name + ">";
        output.push(out2);
    }
}

function convert(xaf) {
    xaf = xaf.split("\n");
    var header = settings();
    var bones = []
    xaf.forEach(function (line, idx) {
        if (line.includes("BONEID")) {
            var start = line.indexOf("\"") + 1
            var end = line.substr(start).indexOf("\"");
            var bone_id = line.substr(start, end);
            bone = bone_id;
        }
        else if (line.includes("TRANSLATION")) {
            var start = line.indexOf(">") + 1;
            var end = line.indexOf("</") - start;
            var translations = line.substr(start, end);
            translations = translations.split(" ").map(num => Number(num));
            pelvis["n14"] = translations[0];
            pelvis["n24"] = translations[2] - 663.894;
            pelvis["n34"] = translations[1];
        }
        else if (line.includes("ROTATION")) {
            var start = line.indexOf(">") + 1;
            var end = line.indexOf("</") - start;
            var rotations = line.substr(start, end);
            rotations = rotations.split(" ").map(num => Number(num));
            var trans_tag = transpose(rotations, bone);
            if (trans_tag != undefined) {
                bones.push(trans_tag);
            }
        }
    })
    var skeletal = y_tag("skeletalAnimation", bones);
    var info = []
    info.push(header);
    info.push(skeletal);
    var vu = y_tag("imvu", info);
    format(vu, 0);
    return output.join('\n');
}

function handleFileSelect(evt) {
    var files = evt.target.files;
    f = files[0];
    var reader = new FileReader();
    reader.onload = (function (theFile) {
        return function (e) {
            if (f.name.split(".")[1] == "xaf") {
                var iaf = f.name.split(".")[0] + ".iaf";
                var res = e.target.result;
                var conv = convert(res);
                download(iaf, conv);
                output = [];
            }
        };
    })(f);
    reader.readAsText(f);
}
document.getElementById('upload').addEventListener('change', handleFileSelect, false);