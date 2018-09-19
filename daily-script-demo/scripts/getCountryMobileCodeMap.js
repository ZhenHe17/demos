let countryMobileCodeArr = [
    "Afghanistan", "93", "AF", "Afghanistan",
    "Åland Islands", "358", "AX", "Åland Islands",
    "Shqipëri", "355", "AL", "Albania",
    "الجزائر", "213", "DZ", "Algeria",
    // 1
    "American Samoa", "1684", "AS", "American Samoa",
    "Andorra", "376", "AD", "Andorra",
    "Angola", "244", "AO", "Angola",
    // 1
    "Anguilla", "1264", "AI", "Anguilla",
    "Antarctica", "672", "AQ", "Antarctica",
    // 1
    "Antigua and Barbuda", "1268", "AG", "Antigua and Barbuda",
    "Argentina", "54", "AR", "Argentina",
    "Հայաստան", "374", "AM", "Armenia",
    "Aruba", "297", "AW", "Aruba",
    "Australia", "61", "AU", "Australia",
    "Österreich", "43", "AT", "Austria",
    "Azərbaycan", "994", "AZ", "Azerbaijan",
    // 1
    "Bahamas", "1242", "BS", "Bahamas",
    " البحرين ", "973", "BH", "Bahrain",
    "বাংলাদেশ", "880", "BD", "Bangladesh",
    // 1
    "Barbados", "1246", "BB", "Barbados",
    "Беларусь", "375", "BY", "Belarus",
    "België", "32", "BE", "Belgium",
    "Belize", "501", "BZ", "Belize",
    "Bénin", "229", "BJ", "Benin",
    "Bermuda", "1", "BM", "Bermuda",
    "འབྲུག་ཡུལ", "975", "BT", "Bhutan",
    "Bolivia", "591", "BO", "Bolivia",
    "Bonaire, Sint Eustatius and Saba", "599", "BQ", "Bonaire, Sint Eustatius and Saba",
    "Bosna i Hercegovina", "387", "BA", "Bosnia-Herzegovina",
    "Botswana", "267", "BW", "Botswana",
    "Brasil", "55", "BR", "Brazil",
    "British Indian Ocean Territory", "246", "IO", "British Indian Ocean Territory",
    "Brunei", "673", "BN", "Brunei",
    "България", "359", "BG", "Bulgaria",
    "Burkina Faso", "226", "BF", "Burkina Faso",
    "Burundi", "257", "BI", "Burundi",
    "កម្ពុជា", "855", "KH", "Cambodia",
    "Cameroon", "237", "CM", "Cameroon",
    "Canada", "1", "CA", "Canada",
    "Capo Verde", "238", "CV", "Capo Verde",
    "Cayman Islands", "1", "KY", "Cayman Islands",
    "République Centrafricaine", "236", "CF", "Central African Republic",
    "Chad", "235", "TD", "Chad",
    "Chile", "56", "CL", "Chile",
    "中国", "86", "CN", "China",
    "Christmas Island", "61", "CX", "Christmas Island",
    "Cocos (Keeling) Islands", "61", "CC", "Cocos (Keeling) Islands",
    "Colombia", "57", "CO", "Colombia",
    " جزر القمر ", "269", "KM", "Comoros",
    "Congo-Brazzaville", "242", "CG", "Congo-Brazzaville",
    "République du Congo", "242", "CG", "Republic of Congo",
    "Congo-Kinshasa", "243", "CD", "Congo-Kinshasa",
    "République démocratique du Congo", "243", "CD", "Democratic Republic of Congo",
    "Cook Islands", "682", "CK", "Cook Islands",
    "Costa Rica", "506", "CR", "Costa Rica",
    "Côte d'Ivoire", "225", "CI", "Ivory Coast",
    "Hrvatska", "385", "HR", "Croatia",
    "Cuba", "53", "CU", "Cuba",
    "Curaçao", "599", "CW", "Curaçao",
    "Κύπρος", "357", "CY", "Cyprus",
    "Česká republika", "420", "CZ", "Czech Republic",
    "Danmark", "45", "DK", "Denmark",
    "Djibouti", "253", "DJ", "Djibouti",
    // 1
    "Dominica", "1767", "DM", "Dominica",
    // 1829, 1849, 1809
    "República Dominicana", "1", "DO", "Dominican Republic",
    "Ecuador", "593", "EC", "Ecuador",
    " مصر ", "20", "EG", "Egypt",
    "El Salvador", "503", "SV", "El Salvador",
    "Guinea Ecuatorial", "240", "GQ", "Equatorial Guinea",
    "Eritria", "291", "ER", "Eritrea",
    "Eesti", "372", "EE", "Estonia",
    "ኢትዮጵያ", "251", "ET", "Ethiopia",
    "Falkland Islands (Malvinas)", "500", "FK", "Falkland Islands (Malvinas)",
    "Faroe Islands", "298", "FO", "Faroe Islands",
    "Fiji", "679", "FJ", "Fiji",
    "Suomi", "358", "FI", "Finland",
    "France", "33", "FR", "France",
    "Guyane", "594", "GF", "French Guiana",
    "French Polynesia", "689", "PF", "French Polynesia",
    "French Southern Territories", "262", "TF", "French Southern Territories",
    "Gabon", "241", "GA", "Gabon",
    "Gambia", "220", "GM", "Gambia",
    "საქართველო", "995", "GE", "Georgia",
    "Deutschland", "49", "DE", "Germany",
    "Ghana", "233", "GH", "Ghana",
    "Gibraltar", "350", "GI", "Gibraltar",
    "Ελλάδα", "30", "GR", "Greece",
    "Greenland", "299", "GL", "Greenland",
    // 1
    "Grenada", "1473", "GD", "Grenada",
    "Guadeloupe", "590", "GP", "Guadeloupe",
    "Guam", "1", "GU", "Guam",
    "Guatemala", "502", "GT", "Guatemala",
    "Guernsey", "44", "GG", "Guernsey",
    "Guinée", "224", "GN", "Guinea",
    "Guiné-Bissau", "245", "GW", "Guinea-Bissau",
    "Guyana", "592", "GY", "Guyana",
    "Haïti", "509", "HT", "Haiti",
    "Holy See", "39", "VA", "Holy See",
    "Honduras", "504", "HN", "Honduras",
    "中華人民共和國香港特別行政區", "852", "HK", "Hong Kong",
    "Magyarország", "36", "HU", "Hungary",
    "Ísland", "354", "IS", "Iceland",
    "India", "91", "IN", "India",
    "Indonesia", "62", "ID", "Indonesia",
    " ایران ", "98", "IR", "Iran",
    " العراق ", "964", "IQ", "Iraq",
    "Ireland", "353", "IE", "Ireland",
    "Isle of Man", "44", "IM", "Isle of Man",
    " ישראל ", "972", "IL", "Israel",
    "Italia", "39", "IT", "Italy",
    // 1
    "Jamaica", "1876", "JM", "Jamaica",
    "日本", "81", "JP", "Japan",
    "Jersey", "44", "JE", "Jersey",
    " الأردن ", "962", "JO", "Jordan",
    // 77, 76
    "Қазақстан", "7", "KZ", "Kazakhstan",
    "Kenya", "254", "KE", "Kenya",
    "Kiribati", "686", "KI", "Kiribati",
    "조선", "850", "KP", "North Korea",
    "대한민국", "82", "KR", "South Korea",
    " الكويت ", "965", "KW", "Kuwait",
    "Кыргызстан", "996", "KG", "Kyrgyzstan",
    "ລາວ", "856", "LA", "Laos",
    "Latvija", "371", "LV", "Latvia",
    " لبنان ", "961", "LB", "Lebanon",
    "Lesotho", "266", "LS", "Lesotho",
    "Liberia", "231", "LR", "Liberia",
    " ليبيا ", "218", "LY", "Libya",
    "Liechtenstein", "423", "LI", "Liechtenstein",
    "Lietuva", "370", "LT", "Lithuania",
    "Luxemburg", "352", "LU", "Luxembourg",
    "中華人民共和國澳門特別行政區", "853", "MO", "Macau",
    "Македонија", "389", "MK", "Macedonia",
    "Madagascar", "261", "MG", "Madagascar",
    "Malawi", "265", "MW", "Malawi",
    "Malaysia", "60", "MY", "Malaysia",
    "Maldives", "960", "MV", "Maldives",
    "Mali", "223", "ML", "Mali",
    "Malta", "356", "MT", "Malta",
    "Marshall Islands", "692", "MH", "Marshall Islands",
    "Martinique", "596", "MQ", "Martinique",
    " موريتانيا ", "222", "MR", "Mauritania",
    "Mauritius", "230", "MU", "Mauritius",
    "Mayotte", "262", "YT", "Mayotte",
    "México", "52", "MX", "Mexico",
    "Micronesia (Federated States of)", "691", "FM", "Micronesia (Federated States of)",
    "Moldova", "373", "MD", "Moldova",
    "Monaco", "377", "MC", "Monaco",
    "Монгол", "976", "MN", "Mongolia",
    "Црна Гора", "382", "ME", "Montenegro",
    "Montserrat", "1", "MS", "Montserrat",
    " المغرب ", "212", "MA", "Morocco",
    "Moçambique", "258", "MZ", "Mozambique",
    "Myanmar (Burma)", "95", "MM", "Myanmar (Burma)",
    "Namibia", "264", "NA", "Namibia",
    "Nauru", "674", "NR", "Nauru",
    "नेपा", "977", "NP", "Nepal",
    "Nederland", "31", "NL", "Netherlands",
    "New Caledonia", "687", "NC", "New Caledonia",
    "New Zealand", "64", "NZ", "New Zealand",
    "Nicaragua", "505", "NI", "Nicaragua",
    "Niger", "227", "NE", "Niger",
    "Nigeria", "234", "NG", "Nigeria",
    "Niue", "683", "NU", "Niue",
    "Norfolk Island", "672", "NF", "Norfolk Island",
    "Northern Mariana Islands", "1", "MP", "Northern Mariana Islands",
    "Norge", "47", "NO", "Norway",
    " عُمان ", "968", "OM", "Oman",
    " پاکستان ", "92", "PK", "Pakistan",
    "Palau", "680", "PW", "Palau",
    "Palestinian Authority", "970", "PS", "Palestinian Authority",
    "Panamá", "507", "PA", "Panama",
    "Papua New Guinea", "675", "PG", "Papua New Guinea",
    "Paraguay", "595", "PY", "Paraguay",
    "Perú", "51", "PE", "Peru",
    "Philippines", "63", "PH", "Philippines",
    "Pitcairn", "64", "PN", "Pitcairn",
    "Polska", "48", "PL", "Poland",
    "Portugal", "351", "PT", "Portugal",
    // 1787, 1939
    "Puerto Rico", "1", "PR", "Puerto Rico",
    " قطر ", "974", "QA", "Qatar",
    "Réunion", "262", "RE", "Réunion",
    "România", "40", "RO", "Romania",
    // 79, 78, 73, 74
    "Россия", "7", "RU", "Russia",
    "Rwanda", "250", "RW", "Rwanda",
    "Saint Barthélemy", "590", "BL", "Saint Barthélemy",
    "Saint Helena, Ascension and Tristan da Cunha", "290", "SH", "Saint Helena, Ascension and Tristan da Cunha",
    "Saint Kitts and Nevis", "1", "KN", "Saint Kitts and Nevis",
    "Saint Lucia", "1", "LC", "Saint Lucia",
    "Saint Martin (French part)", "590", "MF", "Saint Martin (French part)",
    "Saint Pierre and Miquelon", "508", "PM", "Saint Pierre and Miquelon",
    "Saint Vincent and the Grenadines", "1", "VC", "Saint Vincent and the Grenadines",
    "Samoa", "685", "WS", "Samoa",
    "San Marino", "378", "SM", "San Marino",
    "São Tomé e Príncipe", "239", "ST", "Sao Tome and Principe",
    " المملكة العربية السعودية ", "966", "SA", "Saudi Arabia",
    "Sénégal", "221", "SN", "Senegal",
    "Србија", "381", "RS", "Serbia",
    "Seychelles", "248", "SC", "Seychelles",
    "Sierra Leone", "232", "SL", "Sierra Leone",
    "Singapore", "65", "SG", "Singapore",
    "Sint Maarten (Dutch part)", "1721", "SX", "Sint Maarten (Dutch part)",
    "Slovensko", "421", "SK", "Slovakia",
    "Slovenija", "386", "SI", "Slovenia",
    "Solomon Islands", "677", "SB", "Solomon Islands",
    "Somalia", "252", "SO", "Somalia",
    "South Africa", "27", "ZA", "South Africa",
    "South Georgia and the South Sandwich Islands", "500", "GS", "South Georgia and the South Sandwich Islands",
    "South Sudan", "211", "SS", "South Sudan",
    "España", "34", "ES", "Spain",
    " ශ්‍රී ලංකාව ", "94", "LK", "Sri Lanka",
    "Sudan", "249", "SD", "Sudan",
    "Suriname", "597", "SR", "Suriname",
    "Svalbard and Jan Mayen", "47", "SJ", "Svalbard and Jan Mayen",
    "Swaziland", "268", "SZ", "Swaziland",
    "Sverige", "46", "SE", "Sweden",
    "Schweiz", "41", "CH", "Switzerland",
    " سورية ", "963", "SY", "Syria",
    "台灣", "886", "TW", "Taiwan",
    "Тоҷикистон", "992", "TJ", "Tajikistan",
    "Tanzania", "255", "TZ", "Tanzania",
    "ไทย", "66", "TH", "Thailand",
    "Timor-Leste", "670", "TL", "East Timor",
    "Togo", "228", "TG", "Togo",
    "Tokelau", "690", "TK", "Tokelau",
    "Tonga", "676", "TO", "Tonga",
    "Trinidad and Tobago", "1", "TT", "Trinidad and Tobago",
    " تونس ", "216", "TN", "Tunisia",
    "Türkiye", "90", "TR", "Turkey",
    "Türkmenistan", "993", "TM", "Turkmenistan",
    "Turks and Caicos Islands", "1", "TC", "Turks and Caicos Islands",
    "Tuvalu", "688", "TV", "Tuvalu",
    "Uganda", "256", "UG", "Uganda",
    "Україна", "380", "UA", "Ukraine",
    " الأمارات العربية المتحدة ", "971", "AE", "United Arab Emirates",
    "United Kingdom", "44", "GB", "United Kingdom",
    "United States", "1", "US", "United States",
    "United States Minor Outlying Islands", "1", "UM", "United States Minor Outlying Islands",
    "Uruguay", "598", "UY", "Uruguay",
    "Ўзбекистон", "998", "UZ", "Uzbekistan",
    "Vanuatu", "678", "VU", "Vanuatu",
    "Venezuela", "58", "VE", "Venezuela",
    "Việt Nam", "84", "VN", "Vietnam",
    "Virgin Islands (British)", "1", "VG", "Virgin Islands (British)",
    "Virgin Islands (U.S.)", "1", "VI", "Virgin Islands (U.S.)",
    "Wallis and Futuna", "681", "WF", "Wallis and Futuna",
    "Western Sahara", "212", "EH", "Western Sahara",
    " اليمن ", "967", "YE", "Yemen",
    "Zambia", "260", "ZM", "Zambia",
    "Zimbabwe", "263", "ZW", "Zimbabwe",
]
let result = {}
let temp = {}

countryMobileCodeArr.map((value, index) => {
    if (index % 4 == 0) {
        temp = {
            countryName: value
        }
    } else if (index % 4 == 1) {
        temp.mobileCode = value
    } else if (index % 4 == 2) {
        temp.countryCode = value
    } else if (index % 4 == 3) {
        temp.enName = value
        result[temp.countryCode] = temp
    }
})

var fs = require("fs");

fs.writeFile('../data/countryMobileCodeMap.js', 'module.exports = ' + JSON.stringify(result), {}, (err) => {
    if (err) {
        return console.error(err);
    }
    var map = require("../data/countryMobileCodeMap.js");
    console.info(map)
    console.info(typeof map)
});