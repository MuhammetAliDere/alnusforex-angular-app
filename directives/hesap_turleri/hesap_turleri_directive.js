/**
 * Created by muhammetali on 30.01.2017.
 */
alnusfxApp.directive('hesapTurleri', [function () {
    return{
        restrict: 'E',
        replace: true,
        scope: {

        },
        link: function (scope, elem, attr) {
            scope.data = [
                {
                    "FIELD1": "EURUSD",
                    "FIELD2": "18",
                    "FIELD3": "14",
                    "FIELD4": "10",
                    "FIELD5": "8",
                    "FIELD6": "6",
                    "FIELD7": "15",
                    "FIELD8": "8"
                },
                {
                    "FIELD1": "GBPUSD",
                    "FIELD2": "25",
                    "FIELD3": "21",
                    "FIELD4": "17",
                    "FIELD5": "15",
                    "FIELD6": "11",
                    "FIELD7": "25",
                    "FIELD8": "17"
                },
                {
                    "FIELD1": "USDCHF",
                    "FIELD2": "29",
                    "FIELD3": "26",
                    "FIELD4": "20",
                    "FIELD5": "17",
                    "FIELD6": "11",
                    "FIELD7": "25",
                    "FIELD8": "15"
                },
                {
                    "FIELD1": "USDJPY",
                    "FIELD2": "22",
                    "FIELD3": "18",
                    "FIELD4": "14",
                    "FIELD5": "12",
                    "FIELD6": "9",
                    "FIELD7": "22",
                    "FIELD8": "17"
                },
                {
                    "FIELD1": "AUDUSD",
                    "FIELD2": "23",
                    "FIELD3": "18",
                    "FIELD4": "14",
                    "FIELD5": "12",
                    "FIELD6": "8",
                    "FIELD7": "22",
                    "FIELD8": "12"
                },
                {
                    "FIELD1": "USDCAD",
                    "FIELD2": "25",
                    "FIELD3": "22",
                    "FIELD4": "16",
                    "FIELD5": "13",
                    "FIELD6": "7",
                    "FIELD7": "25",
                    "FIELD8": "15"
                },
                {
                    "FIELD1": "NZDUSD",
                    "FIELD2": "34",
                    "FIELD3": "31",
                    "FIELD4": "25",
                    "FIELD5": "22",
                    "FIELD6": "17",
                    "FIELD7": "30",
                    "FIELD8": "25"
                },
                {
                    "FIELD1": "EURGBP",
                    "FIELD2": "25",
                    "FIELD3": "22",
                    "FIELD4": "16",
                    "FIELD5": "13",
                    "FIELD6": "7",
                    "FIELD7": "25",
                    "FIELD8": "15"
                },
                {
                    "FIELD1": "EURJPY",
                    "FIELD2": "27",
                    "FIELD3": "24",
                    "FIELD4": "18",
                    "FIELD5": "15",
                    "FIELD6": "9",
                    "FIELD7": "25",
                    "FIELD8": "15"
                },
                {
                    "FIELD1": "",
                    "FIELD2": "",
                    "FIELD3": "",
                    "FIELD4": "",
                    "FIELD5": "",
                    "FIELD6": "",
                    "FIELD7": "",
                    "FIELD8": ""
                },
                {
                    "FIELD1": "USDTRY",
                    "FIELD2": "105",
                    "FIELD3": "95",
                    "FIELD4": "80",
                    "FIELD5": "70",
                    "FIELD6": "70",
                    "FIELD7": "",
                    "FIELD8": ""
                },
                {
                    "FIELD1": "EURTRY",
                    "FIELD2": "115",
                    "FIELD3": "105",
                    "FIELD4": "90",
                    "FIELD5": "80",
                    "FIELD6": "80",
                    "FIELD7": "",
                    "FIELD8": ""
                },
                {
                    "FIELD1": "USDTRY.",
                    "FIELD2": "105",
                    "FIELD3": "95",
                    "FIELD4": "85",
                    "FIELD5": "70",
                    "FIELD6": "70",
                    "FIELD7": "",
                    "FIELD8": ""
                },
                {
                    "FIELD1": "EURTRY.",
                    "FIELD2": "115",
                    "FIELD3": "105",
                    "FIELD4": "95",
                    "FIELD5": "80",
                    "FIELD6": "80",
                    "FIELD7": "",
                    "FIELD8": ""
                },
                {
                    "FIELD1": "",
                    "FIELD2": "",
                    "FIELD3": "",
                    "FIELD4": "",
                    "FIELD5": "",
                    "FIELD6": "",
                    "FIELD7": "",
                    "FIELD8": ""
                },
                {
                    "FIELD1": "UKOil.",
                    "FIELD2": "5",
                    "FIELD3": "4",
                    "FIELD4": "4",
                    "FIELD5": "3",
                    "FIELD6": "3",
                    "FIELD7": "4",
                    "FIELD8": "3"
                },
                {
                    "FIELD1": "USOil.",
                    "FIELD2": "5",
                    "FIELD3": "4",
                    "FIELD4": "4",
                    "FIELD5": "3",
                    "FIELD6": "3",
                    "FIELD7": "4",
                    "FIELD8": "3"
                },
                {
                    "FIELD1": "UKOil",
                    "FIELD2": "5",
                    "FIELD3": "4",
                    "FIELD4": "4",
                    "FIELD5": "3",
                    "FIELD6": "3",
                    "FIELD7": "",
                    "FIELD8": ""
                },
                {
                    "FIELD1": "USOil",
                    "FIELD2": "5",
                    "FIELD3": "4",
                    "FIELD4": "4",
                    "FIELD5": "3",
                    "FIELD6": "3",
                    "FIELD7": "",
                    "FIELD8": ""
                },
                {
                    "FIELD1": "UKOil#",
                    "FIELD2": "5",
                    "FIELD3": "4",
                    "FIELD4": "3",
                    "FIELD5": "3",
                    "FIELD6": "3",
                    "FIELD7": "",
                    "FIELD8": ""
                },
                {
                    "FIELD1": "USOil#",
                    "FIELD2": "5",
                    "FIELD3": "4",
                    "FIELD4": "3",
                    "FIELD5": "3",
                    "FIELD6": "3",
                    "FIELD7": "",
                    "FIELD8": ""
                },
                {
                    "FIELD1": "XAGUSD",
                    "FIELD2": "42",
                    "FIELD3": "32",
                    "FIELD4": "22",
                    "FIELD5": "19",
                    "FIELD6": "17",
                    "FIELD7": "44",
                    "FIELD8": "25"
                },
                {
                    "FIELD1": "XAUUSD",
                    "FIELD2": "45",
                    "FIELD3": "35",
                    "FIELD4": "25",
                    "FIELD5": "25",
                    "FIELD6": "20",
                    "FIELD7": "45",
                    "FIELD8": "25"
                },
                {
                    "FIELD1": "",
                    "FIELD2": "",
                    "FIELD3": "",
                    "FIELD4": "",
                    "FIELD5": "",
                    "FIELD6": "",
                    "FIELD7": "",
                    "FIELD8": ""
                },
                {
                    "FIELD1": "AUDCAD",
                    "FIELD2": "33",
                    "FIELD3": "30",
                    "FIELD4": "24",
                    "FIELD5": "21",
                    "FIELD6": "18",
                    "FIELD7": "",
                    "FIELD8": ""
                },
                {
                    "FIELD1": "AUDCHF",
                    "FIELD2": "30",
                    "FIELD3": "27",
                    "FIELD4": "21",
                    "FIELD5": "18",
                    "FIELD6": "17",
                    "FIELD7": "",
                    "FIELD8": ""
                },
                {
                    "FIELD1": "AUDJPY",
                    "FIELD2": "29",
                    "FIELD3": "26",
                    "FIELD4": "20",
                    "FIELD5": "17",
                    "FIELD6": "17",
                    "FIELD7": "",
                    "FIELD8": ""
                },
                {
                    "FIELD1": "AUDNZD",
                    "FIELD2": "37",
                    "FIELD3": "34",
                    "FIELD4": "28",
                    "FIELD5": "25",
                    "FIELD6": "22",
                    "FIELD7": "",
                    "FIELD8": ""
                },
                {
                    "FIELD1": "CADJPY",
                    "FIELD2": "34",
                    "FIELD3": "31",
                    "FIELD4": "25",
                    "FIELD5": "22",
                    "FIELD6": "19",
                    "FIELD7": "",
                    "FIELD8": ""
                },
                {
                    "FIELD1": "CHFJPY",
                    "FIELD2": "32",
                    "FIELD3": "29",
                    "FIELD4": "23",
                    "FIELD5": "20",
                    "FIELD6": "17",
                    "FIELD7": "",
                    "FIELD8": ""
                },
                {
                    "FIELD1": "EURAUD",
                    "FIELD2": "35",
                    "FIELD3": "32",
                    "FIELD4": "26",
                    "FIELD5": "23",
                    "FIELD6": "24",
                    "FIELD7": "",
                    "FIELD8": ""
                },
                {
                    "FIELD1": "EURCAD",
                    "FIELD2": "40",
                    "FIELD3": "37",
                    "FIELD4": "31",
                    "FIELD5": "28",
                    "FIELD6": "25",
                    "FIELD7": "",
                    "FIELD8": ""
                },
                {
                    "FIELD1": "EURCHF",
                    "FIELD2": "32",
                    "FIELD3": "29",
                    "FIELD4": "23",
                    "FIELD5": "20",
                    "FIELD6": "14",
                    "FIELD7": "",
                    "FIELD8": ""
                },
                {
                    "FIELD1": "EURNZD",
                    "FIELD2": "48",
                    "FIELD3": "45",
                    "FIELD4": "39",
                    "FIELD5": "36",
                    "FIELD6": "33",
                    "FIELD7": "",
                    "FIELD8": ""
                },
                {
                    "FIELD1": "GBPAUD",
                    "FIELD2": "43",
                    "FIELD3": "40",
                    "FIELD4": "34",
                    "FIELD5": "31",
                    "FIELD6": "28",
                    "FIELD7": "",
                    "FIELD8": ""
                },
                {
                    "FIELD1": "GBPCAD",
                    "FIELD2": "47",
                    "FIELD3": "44",
                    "FIELD4": "38",
                    "FIELD5": "35",
                    "FIELD6": "32",
                    "FIELD7": "",
                    "FIELD8": ""
                },
                {
                    "FIELD1": "GBPCHF",
                    "FIELD2": "42",
                    "FIELD3": "39",
                    "FIELD4": "33",
                    "FIELD5": "30",
                    "FIELD6": "27",
                    "FIELD7": "",
                    "FIELD8": ""
                },
                {
                    "FIELD1": "GBPJPY",
                    "FIELD2": "35",
                    "FIELD3": "32",
                    "FIELD4": "26",
                    "FIELD5": "23",
                    "FIELD6": "20",
                    "FIELD7": "",
                    "FIELD8": ""
                },
                {
                    "FIELD1": "GBPNZD",
                    "FIELD2": "61",
                    "FIELD3": "58",
                    "FIELD4": "52",
                    "FIELD5": "49",
                    "FIELD6": "40",
                    "FIELD7": "",
                    "FIELD8": ""
                },
                {
                    "FIELD1": "NZDCAD",
                    "FIELD2": "38",
                    "FIELD3": "35",
                    "FIELD4": "29",
                    "FIELD5": "26",
                    "FIELD6": "23",
                    "FIELD7": "",
                    "FIELD8": ""
                },
                {
                    "FIELD1": "NZDJPY",
                    "FIELD2": "33",
                    "FIELD3": "30",
                    "FIELD4": "24",
                    "FIELD5": "21",
                    "FIELD6": "20",
                    "FIELD7": "",
                    "FIELD8": ""
                },
                {
                    "FIELD1": "GBPTRY",
                    "FIELD2": "235",
                    "FIELD3": "225",
                    "FIELD4": "210",
                    "FIELD5": "200",
                    "FIELD6": "270",
                    "FIELD7": "",
                    "FIELD8": ""
                },
                {
                    "FIELD1": "DAX30",
                    "FIELD2": "300",
                    "FIELD3": "200",
                    "FIELD4": "200",
                    "FIELD5": "200",
                    "FIELD6": "150",
                    "FIELD7": "",
                    "FIELD8": ""
                },
                {
                    "FIELD1": "NGAS",
                    "FIELD2": "80",
                    "FIELD3": "70",
                    "FIELD4": "50",
                    "FIELD5": "50",
                    "FIELD6": "50",
                    "FIELD7": "",
                    "FIELD8": ""
                },
                {
                    "FIELD1": "XAUTRY",
                    "FIELD2": "306",
                    "FIELD3": "276",
                    "FIELD4": "246",
                    "FIELD5": "236",
                    "FIELD6": "236",
                    "FIELD7": "",
                    "FIELD8": ""
                },
                {
                    "FIELD1": "XPTUSD.",
                    "FIELD2": "100",
                    "FIELD3": "90",
                    "FIELD4": "80",
                    "FIELD5": "60",
                    "FIELD6": "55",
                    "FIELD7": "",
                    "FIELD8": ""
                },
                {
                    "FIELD1": "XPDUSD.",
                    "FIELD2": "135",
                    "FIELD3": "125",
                    "FIELD4": "115",
                    "FIELD5": "95",
                    "FIELD6": "90",
                    "FIELD7": "",
                    "FIELD8": ""
                },
                {
                    "FIELD1": "EURNOK",
                    "FIELD2": "280",
                    "FIELD3": "240",
                    "FIELD4": "200",
                    "FIELD5": "180",
                    "FIELD6": "160",
                    "FIELD7": "",
                    "FIELD8": ""
                },
                {
                    "FIELD1": "EURSEK",
                    "FIELD2": "310",
                    "FIELD3": "270",
                    "FIELD4": "230",
                    "FIELD5": "210",
                    "FIELD6": "190",
                    "FIELD7": "",
                    "FIELD8": ""
                },
                {
                    "FIELD1": "USDMXN",
                    "FIELD2": "755",
                    "FIELD3": "605",
                    "FIELD4": "555",
                    "FIELD5": "455",
                    "FIELD6": "335",
                    "FIELD7": "",
                    "FIELD8": ""
                },
                {
                    "FIELD1": "USDNOK",
                    "FIELD2": "280",
                    "FIELD3": "240",
                    "FIELD4": "200",
                    "FIELD5": "180",
                    "FIELD6": "160",
                    "FIELD7": "",
                    "FIELD8": ""
                },
                {
                    "FIELD1": "CAC40",
                    "FIELD2": "300",
                    "FIELD3": "200",
                    "FIELD4": "200",
                    "FIELD5": "200",
                    "FIELD6": "150",
                    "FIELD7": "",
                    "FIELD8": ""
                },
                {
                    "FIELD1": "USDPLN",
                    "FIELD2": "236",
                    "FIELD3": "196",
                    "FIELD4": "156",
                    "FIELD5": "136",
                    "FIELD6": "116",
                    "FIELD7": "",
                    "FIELD8": ""
                },
                {
                    "FIELD1": "NOKSEK",
                    "FIELD2": "180",
                    "FIELD3": "140",
                    "FIELD4": "100",
                    "FIELD5": "80",
                    "FIELD6": "60",
                    "FIELD7": "",
                    "FIELD8": ""
                },
                {
                    "FIELD1": "USDSEK",
                    "FIELD2": "260",
                    "FIELD3": "220",
                    "FIELD4": "180",
                    "FIELD5": "160",
                    "FIELD6": "140",
                    "FIELD7": "",
                    "FIELD8": ""
                },
                {
                    "FIELD1": "USDSGD",
                    "FIELD2": "42",
                    "FIELD3": "39",
                    "FIELD4": "33",
                    "FIELD5": "30",
                    "FIELD6": "27",
                    "FIELD7": "",
                    "FIELD8": ""
                },
                {
                    "FIELD1": "USDZAR",
                    "FIELD2": "1050",
                    "FIELD3": "900",
                    "FIELD4": "850",
                    "FIELD5": "750",
                    "FIELD6": "630",
                    "FIELD7": "",
                    "FIELD8": ""
                },
                {
                    "FIELD1": "USDDKK",
                    "FIELD2": "195",
                    "FIELD3": "155",
                    "FIELD4": "115",
                    "FIELD5": "95",
                    "FIELD6": "75",
                    "FIELD7": "",
                    "FIELD8": ""
                },
                {
                    "FIELD1": "ESP35",
                    "FIELD2": "800",
                    "FIELD3": "700",
                    "FIELD4": "700",
                    "FIELD5": "700",
                    "FIELD6": "650",
                    "FIELD7": "",
                    "FIELD8": ""
                },
                {
                    "FIELD1": "JPN225",
                    "FIELD2": "2500",
                    "FIELD3": "1500",
                    "FIELD4": "1500",
                    "FIELD5": "1500",
                    "FIELD6": "1000",
                    "FIELD7": "",
                    "FIELD8": ""
                },
                {
                    "FIELD1": "NAS100",
                    "FIELD2": "300",
                    "FIELD3": "200",
                    "FIELD4": "200",
                    "FIELD5": "200",
                    "FIELD6": "150",
                    "FIELD7": "",
                    "FIELD8": ""
                },
                {
                    "FIELD1": "SP500",
                    "FIELD2": "230",
                    "FIELD3": "130",
                    "FIELD4": "130",
                    "FIELD5": "130",
                    "FIELD6": "80",
                    "FIELD7": "",
                    "FIELD8": ""
                },
                {
                    "FIELD1": "FTSE100",
                    "FIELD2": "400",
                    "FIELD3": "300",
                    "FIELD4": "300",
                    "FIELD5": "300",
                    "FIELD6": "250",
                    "FIELD7": "",
                    "FIELD8": ""
                }
            ];
        },
        templateUrl: 'bundles/main/app/directives/hesap_turleri/hesap_turleri_directive.html'
    }
}]);
