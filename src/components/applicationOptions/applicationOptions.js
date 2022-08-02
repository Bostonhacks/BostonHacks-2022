const countryCodeList = [
    "Afghanistan (\u202bافغانستان\u202c\u200e) +93",
    "Albania (Shqipëri) +355",
    "Algeria (\u202bالجزائر\u202c\u200e) +213",
    "American Samoa +1",
    "Andorra +376",
    "Angola +244",
    "Anguilla +1",
    "Antigua and Barbuda +1",
    "Argentina +54",
    "Armenia (Հայաստան) +374",
    "Aruba +297",
    "Australia +61",
    "Austria (Österreich) +43",
    "Azerbaijan (Azərbaycan) +994",
    "Bahamas +1",
    "Bahrain (\u202bالبحرين\u202c\u200e) +973",
    "Bangladesh (বাংলাদেশ) +880",
    "Barbados +1",
    "Belarus (Беларусь) +375",
    "Belgium (België) +32",
    "Belize +501",
    "Benin (Bénin) +229",
    "Bermuda +1",
    "Bhutan (འབྲུག) +975",
    "Bolivia +591",
    "Bosnia and Herzegovina (Босна и Херцеговина) +387",
    "Botswana +267",
    "Brazil (Brasil) +55",
    "British Indian Ocean Territory +246",
    "British Virgin Islands +1",
    "Brunei +673",
    "Bulgaria (България) +359",
    "Burkina Faso +226",
    "Burundi (Uburundi) +257",
    "Cambodia (កម្ពុជា) +855",
    "Cameroon (Cameroun) +237",
    "Canada +1",
    "Cape Verde (Kabu Verdi) +238",
    "Caribbean Netherlands +599",
    "Cayman Islands +1",
    "Central African Republic (République centrafricaine) +236",
    "Chad (Tchad) +235",
    "Chile +56",
    "China (中国) +86",
    "Christmas Island +61",
    "Cocos (Keeling) Islands +61",
    "Colombia +57",
    "Comoros (\u202bجزر القمر\u202c\u200e) +269",
    "Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo) +243",
    "Congo (Republic) (Congo-Brazzaville) +242",
    "Cook Islands +682",
    "Costa Rica +506",
    "Côte d’Ivoire +225",
    "Croatia (Hrvatska) +385",
    "Cuba +53",
    "Curaçao +599",
    "Cyprus (Κύπρος) +357",
    "Czech Republic (Česká republika) +420",
    "Denmark (Danmark) +45",
    "Djibouti +253",
    "Dominica +1",
    "Dominican Republic (República Dominicana) +1",
    "Ecuador +593",
    "Egypt (\u202bمصر\u202c\u200e) +20",
    "El Salvador +503",
    "Equatorial Guinea (Guinea Ecuatorial) +240",
    "Eritrea +291",
    "Estonia (Eesti) +372",
    "Ethiopia +251",
    "Falkland Islands (Islas Malvinas) +500",
    "Faroe Islands (Føroyar) +298",
    "Fiji +679",
    "Finland (Suomi) +358",
    "France +33",
    "French Guiana (Guyane française) +594",
    "French Polynesia (Polynésie française) +689",
    "Gabon +241",
    "Gambia +220",
    "Georgia (საქართველო) +995",
    "Germany (Deutschland) +49",
    "Ghana (Gaana) +233",
    "Gibraltar +350",
    "Greece (Ελλάδα) +30",
    "Greenland (Kalaallit Nunaat) +299",
    "Grenada +1",
    "Guadeloupe +590",
    "Guam +1",
    "Guatemala +502",
    "Guernsey +44",
    "Guinea (Guinée) +224",
    "Guinea-Bissau (Guiné Bissau) +245",
    "Guyana +592",
    "Haiti +509",
    "Honduras +504",
    "Hong Kong (香港) +852",
    "Hungary (Magyarország) +36",
    "Iceland (Ísland) +354",
    "India (भारत) +91",
    "Indonesia +62",
    "Iran (\u202bایران\u202c\u200e) +98",
    "Iraq (\u202bالعراق\u202c\u200e) +964",
    "Ireland +353",
    "Isle of Man +44",
    "Israel (\u202bישראל\u202c\u200e) +972",
    "Italy (Italia) +39",
    "Jamaica +1",
    "Japan (日本) +81",
    "Jersey +44",
    "Jordan (\u202bالأردن\u202c\u200e) +962",
    "Kazakhstan (Казахстан) +7",
    "Kenya +254",
    "Kiribati +686",
    "Kosovo +383",
    "Kuwait (\u202bالكويت\u202c\u200e) +965",
    "Kyrgyzstan (Кыргызстан) +996",
    "Laos (ລາວ) +856",
    "Latvia (Latvija) +371",
    "Lebanon (\u202bلبنان\u202c\u200e) +961",
    "Lesotho +266",
    "Liberia +231",
    "Libya (\u202bليبيا\u202c\u200e) +218",
    "Liechtenstein +423",
    "Lithuania (Lietuva) +370",
    "Luxembourg +352",
    "Macau (澳門) +853",
    "Macedonia (FYROM) (Македонија) +389",
    "Madagascar (Madagasikara) +261",
    "Malawi +265",
    "Malaysia +60",
    "Maldives +960",
    "Mali +223",
    "Malta +356",
    "Marshall Islands +692",
    "Martinique +596",
    "Mauritania (\u202bموريتانيا\u202c\u200e) +222",
    "Mauritius (Moris) +230",
    "Mayotte +262",
    "Mexico (México) +52",
    "Micronesia +691",
    "Moldova (Republica Moldova) +373",
    "Monaco +377",
    "Mongolia (Монгол) +976",
    "Montenegro (Crna Gora) +382",
    "Montserrat +1",
    "Morocco (\u202bالمغرب\u202c\u200e) +212",
    "Mozambique (Moçambique) +258",
    "Myanmar (Burma) (မြန်မာ) +95",
    "Namibia (Namibië) +264",
    "Nauru +674",
    "Nepal (नेपाल) +977",
    "Netherlands (Nederland) +31",
    "New Caledonia (Nouvelle-Calédonie) +687",
    "New Zealand +64",
    "Nicaragua +505",
    "Niger (Nijar) +227",
    "Nigeria +234",
    "Niue +683",
    "Norfolk Island +672",
    "North Korea (조선 민주주의 인민 공화국) +850",
    "Northern Mariana Islands +1",
    "Norway (Norge) +47",
    "Oman (\u202bعُمان\u202c\u200e) +968",
    "Pakistan (\u202bپاکستان\u202c\u200e) +92",
    "Palau +680",
    "Palestine (\u202bفلسطين\u202c\u200e) +970",
    "Panama (Panamá) +507",
    "Papua New Guinea +675",
    "Paraguay +595",
    "Peru (Perú) +51",
    "Philippines +63",
    "Poland (Polska) +48",
    "Portugal +351",
    "Puerto Rico +1",
    "Qatar (\u202bقطر\u202c\u200e) +974",
    "Réunion (La Réunion) +262",
    "Romania (România) +40",
    "Russia (Россия) +7",
    "Rwanda +250",
    "Saint Barthélemy +590",
    "Saint Helena +290",
    "Saint Kitts and Nevis +1",
    "Saint Lucia +1",
    "Saint Martin (Saint-Martin (partie française)) +590",
    "Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon) +508",
    "Saint Vincent and the Grenadines +1",
    "Samoa +685",
    "San Marino +378",
    "São Tomé and Príncipe (São Tomé e Príncipe) +239",
    "Saudi Arabia (\u202bالمملكة العربية السعودية\u202c\u200e) +966",
    "Senegal (Sénégal) +221",
    "Serbia (Србија) +381",
    "Seychelles +248",
    "Sierra Leone +232",
    "Singapore +65",
    "Sint Maarten +1",
    "Slovakia (Slovensko) +421",
    "Slovenia (Slovenija) +386",
    "Solomon Islands +677",
    "Somalia (Soomaaliya) +252",
    "South Africa +27",
    "South Korea (대한민국) +82",
    "South Sudan (\u202bجنوب السودان\u202c\u200e) +211",
    "Spain (España) +34",
    "Sri Lanka (ශ්\u200dරී ලංකාව) +94",
    "Sudan (\u202bالسودان\u202c\u200e) +249",
    "Suriname +597",
    "Svalbard and Jan Mayen +47",
    "Swaziland +268",
    "Sweden (Sverige) +46",
    "Switzerland (Schweiz) +41",
    "Syria (\u202bسوريا\u202c\u200e) +963",
    "Taiwan (台灣) +886",
    "Tajikistan +992",
    "Tanzania +255",
    "Thailand (ไทย) +66",
    "Timor-Leste +670",
    "Togo +228",
    "Tokelau +690",
    "Tonga +676",
    "Trinidad and Tobago +1",
    "Tunisia (\u202bتونس\u202c\u200e) +216",
    "Turkey (Türkiye) +90",
    "Turkmenistan +993",
    "Turks and Caicos Islands +1",
    "Tuvalu +688",
    "U.S. Virgin Islands +1",
    "Uganda +256",
    "Ukraine (Україна) +380",
    "United Arab Emirates (\u202bالإمارات العربية المتحدة\u202c\u200e) +971",
    "United Kingdom +44",
    "United States +1",
    "Uruguay +598",
    "Uzbekistan (Oʻzbekiston) +998",
    "Vanuatu +678",
    "Vatican City (Città del Vaticano) +39",
    "Venezuela +58",
    "Vietnam (Việt Nam) +84",
    "Wallis and Futuna (Wallis-et-Futuna) +681",
    "Western Sahara (\u202bالصحراء الغربية\u202c\u200e) +212",
    "Yemen (\u202bاليمن\u202c\u200e) +967",
    "Zambia +260",
    "Zimbabwe +263",
    "Åland Islands +358"
]

const countryList =  [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Anguilla",
    "Antigua &amp; Barbuda",
    "Argentina",
    "Armenia",
    "Aruba",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bermuda",
    "Bhutan",
    "Bolivia",
    "Bosnia &amp; Herzegovina",
    "Botswana",
    "Brazil",
    "British Virgin Islands",
    "Brunei",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Canada",
    "Cambodia",
    "Cameroon",
    "Cape Verde",
    "Cayman Islands",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Congo",
    "Cook Islands",
    "Costa Rica",
    "Cote D Ivoire",
    "Croatia",
    "Cruise Ship",
    "Cuba",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Estonia",
    "Ethiopia",
    "Falkland Islands",
    "Faroe Islands",
    "Fiji",
    "Finland",
    "France",
    "French Polynesia",
    "French West Indies",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Gibraltar",
    "Greece",
    "Greenland",
    "Grenada",
    "Guam",
    "Guatemala",
    "Guernsey",
    "Guinea",
    "Guinea Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hong Kong",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Isle of Man",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jersey",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kuwait",
    "Kyrgyz Republic",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Macau",
    "Macedonia",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Moldova",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Montserrat",
    "Morocco",
    "Mozambique",
    "Namibia",
    "Nepal",
    "Netherlands",
    "Netherlands Antilles",
    "New Caledonia",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "Norway",
    "Oman",
    "Pakistan",
    "Palestine",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Puerto Rico",
    "Qatar",
    "Reunion",
    "Romania",
    "Russia",
    "Rwanda",
    "Saint Pierre &amp; Miquelon",
    "Samoa",
    "San Marino",
    "Satellite",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "South Africa",
    "South Korea",
    "Spain",
    "Sri Lanka",
    "St Kitts &amp; Nevis",
    "St Lucia",
    "St Vincent",
    "St. Lucia",
    "Sudan",
    "Suriname",
    "Swaziland",
    "Sweden",
    "Switzerland",
    "Syria",
    "Taiwan",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "Timor L'Este",
    "Togo",
    "Tonga",
    "Trinidad &amp; Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Turks &amp; Caicos",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United States",
    "United Kingdom",
    "Uruguay",
    "Uzbekistan",
    "Venezuela",
    "Vietnam",
    "Virgin Islands (US)",
    "Yemen",
    "Zambia",
    "Zimbabwe"
  ]
  
const courseList = [
    "Accounting",
    "Aerospace Engineering",
    "Agricultural Engineering",
    "Applied Mathematics",
    "Architecture",
    "Biochemistry",
    "Bioengineering",
    "Bioinformatics",
    "Biological Sciences",
    "Biology",
    "Biomedical Engineering",
    "Biotechnology",
    "Building Construction Management",
    "Business",
    "Business Administration",
    "Business Analytics",
    "Chemical Engineering",
    "Chemistry",
    "Civil Engineering",
    "Cognitive Science",
    "Communications",
    "Computational Biology",
    "Computational Media",
    "Computer Engineering",
    "Computer Science",
    "Computer Information Systems",
    "Computer Technologies",
    "Computing Security",
    "Culinary Arts",
    "Cyber Operations",
    "Data Science",
    "Design",
    "Economics",
    "Electrical Engineering",
    "Engineering",
    "Engineering Management",
    "Engineering Physics",
    "Engineering Science",
    "English",
    "Film",
    "Finance",
    "Game Design and Development",
    "Geophysics",
    "Graphic Design",
    "Human Centered Design",
    "Human Computer Interaction",
    "Humanities",
    "Individualized Major",
    "Industrial and Systems Engineering",
    "Industrial and Operations Engineering",
    "Industrial Engineering",
    "Informatics",
    "Information Science",
    "Information Systems",
    "Information Technology",
    "Interaction Design",
    "Interactive Multimedia",
    "Interactive Telecommunications Program (ITP)",
    "International Relations",
    "Journalism",
    "Linguistics",
    "Management",
    "Management Information Systems",
    "Marketing",
    "Materials Science",
    "Mathematics",
    "Mechanical Engineering",
    "Mechatronics",
    "Mechatronics Engineering",
    "Media Arts and Sciences",
    "Music Computing",
    "Nanoengineering",
    "Network Security",
    "Neurobiology/Cognitive Science",
    "Neuroscience",
    "New Media Design",
    "Operations Research Management Science",
    "Organizational",
    "Philosophy",
    "Physics",
    "Political Science",
    "Poultry Science",
    "Product Design",
    "Psych",
    "Psychology",
    "Robotics Engineering",
    "Robotics",
    "Software Engineering",
    "Statistics",
    "Systems Design Engineering",
    "Technology Management",
    "Theatre and Linguistics",
    "Other"
]

const programmingList = [
"A# .NET",
"A# (Axiom)",
"A-0 System",
"A+",
"A++",
"ABAP",
"ABC",
"ABC ALGOL",
"ABLE",
"ABSET",
"ABSYS",
"ACC",
"Accent",
"Ace DASL",
"ACL2",
"ACT-III",
"Action!",
"ActionScript",
"Ada",
"Adenine",
"Agda",
"Agilent VEE",
"Agora",
"AIMMS",
"Alef",
"ALF",
"ALGOL 58",
"ALGOL 60",
"ALGOL 68",
"ALGOL W",
"Alice",
"Alma-0",
"AmbientTalk",
"Amiga E",
"AMOS",
"AMPL",
"APL",
"App Inventor for Android's visual block language",
"AppleScript",
"Arc",
"ARexx",
"Argus",
"AspectJ",
"Assembly language",
"ATS",
"Ateji PX",
"AutoHotkey",
"Autocoder",
"AutoIt",
"AutoLISP / Visual LISP",
"Averest",
"AWK",
"Axum",
"B",
"Babbage",
"Bash",
"BASIC",
"bc",
"BCPL",
"BeanShell",
"Batch (Windows/Dos)",
"Bertrand",
"BETA",
"Bigwig",
"Bistro",
"BitC",
"BLISS",
"Blue",
"Bon",
"Boo",
"Boomerang",
"Bourne shell",
"bash",
"ksh",
"BREW",
"BPEL",
"C",
"C--",
"C++",
"C#",
"C/AL",
"Caché ObjectScript",
"C Shell",
"Caml",
"Candle",
"Cayenne",
"CDuce",
"Cecil",
"Cel",
"Cesil",
"Ceylon",
"CFEngine",
"CFML",
"Cg",
"Ch",
"Chapel",
"CHAIN",
"Charity",
"Charm",
"Chef",
"CHILL",
"CHIP-8",
"chomski",
"ChucK",
"CICS",
"Cilk",
"CL",
"Claire",
"Clarion",
"Clean",
"Clipper",
"CLIST",
"Clojure",
"CLU",
"CMS-2",
"COBOL",
"Cobra",
"CODE",
"CoffeeScript",
"Cola",
"ColdC",
"ColdFusion",
"COMAL",
"Combined Programming Language",
"COMIT",
"Common Intermediate Language",
"Common Lisp",
"COMPASS",
"Component Pascal",
"Constraint Handling Rules",
"Converge",
"Cool",
"Coq",
"Coral 66",
"Corn",
"CorVision",
"COWSEL",
"CPL",
"csh",
"CSP",
"Csound",
"CUDA",
"Curl",
"Curry",
"Cyclone",
"Cython",
"D",
"DASL",
"DASL",
"Dart",
"DataFlex",
"Datalog",
"DATATRIEVE",
"dBase",
"dc",
"DCL",
"Deesel",
"Delphi",
"DCL",
"DinkC",
"DIBOL",
"Dog",
"Draco",
"DRAKON",
"Dylan",
"DYNAMO",
"E",
"E#",
"Ease",
"Easy PL/I",
"Easy Programming Language",
"EASYTRIEVE PLUS",
"ECMAScript",
"Edinburgh IMP",
"EGL",
"Eiffel",
"ELAN",
"Elixir",
"Elm",
"Emacs Lisp",
"Emerald",
"Epigram",
"EPL",
"Erlang",
"es",
"Escapade",
"Escher",
"ESPOL",
"Esterel",
"Etoys",
"Euclid",
"Euler",
"Euphoria",
"EusLisp Robot Programming Language",
"CMS EXEC",
"EXEC 2",
"Executable UML",
"F",
"F#",
"Factor",
"Falcon",
"Fancy",
"Fantom",
"FAUST",
"Felix",
"Ferite",
"FFP",
"Fjölnir",
"FL",
"Flavors",
"Flex",
"FLOW-MATIC",
"FOCAL",
"FOCUS",
"FOIL",
"FORMAC",
"@Formula",
"Forth",
"Fortran",
"Fortress",
"FoxBase",
"FoxPro",
"FP",
"FPr",
"Franz Lisp",
"F-Script",
"FSProg",
"G",
"Google Apps Script",
"Game Maker Language",
"GameMonkey Script",
"GAMS",
"GAP",
"G-code",
"Genie",
"GDL",
"Gibiane",
"GJ",
"GEORGE",
"GLSL",
"GNU E",
"GM",
"Go",
"Go!",
"GOAL",
"Gödel",
"Godiva",
"GOM (Good Old Mad)",
"Goo",
"Gosu",
"GOTRAN",
"GPSS",
"GraphTalk",
"GRASS",
"Groovy",
"Hack (programming language)",
"HAL/S",
"Hamilton C shell",
"Harbour",
"Hartmann pipelines",
"Haskell",
"Haxe",
"High Level Assembly",
"HLSL",
"Hop",
"Hope",
"Hugo",
"Hume",
"HyperTalk",
"IBM Basic assembly language",
"IBM HAScript",
"IBM Informix-4GL",
"IBM RPG",
"ICI",
"Icon",
"Id",
"IDL",
"Idris",
"IMP",
"Inform",
"Io",
"Ioke",
"IPL",
"IPTSCRAE",
"ISLISP",
"ISPF",
"ISWIM",
"J",
"J#",
"J++",
"JADE",
"Jako",
"JAL",
"Janus",
"JASS",
"Java",
"JavaScript",
"JCL",
"JEAN",
"Join Java",
"JOSS",
"Joule",
"JOVIAL",
"Joy",
"JScript",
"JScript .NET",
"JavaFX Script",
"Julia",
"Jython",
"K",
"Kaleidoscope",
"Karel",
"Karel++",
"KEE",
"Kixtart",
"KIF",
"Kojo",
"Kotlin",
"KRC",
"KRL",
"KUKA",
"KRYPTON",
"ksh",
"L",
"L# .NET",
"LabVIEW",
"Ladder",
"Lagoona",
"LANSA",
"Lasso",
"LaTeX",
"Lava",
"LC-3",
"Leda",
"Legoscript",
"LIL",
"LilyPond",
"Limbo",
"Limnor",
"LINC",
"Lingo",
"Linoleum",
"LIS",
"LISA",
"Lisaac",
"Lisp",
"Lite-C",
"Lithe",
"Little b",
"Logo",
"Logtalk",
"LPC",
"LSE",
"LSL",
"LiveCode",
"LiveScript",
"Lua",
"Lucid",
"Lustre",
"LYaPAS",
"Lynx",
"M2001",
"M4",
"Machine code",
"MAD",
"MAD/I",
"Magik",
"Magma",
"make",
"Maple",
"MAPPER",
"MARK-IV",
"Mary",
"MASM Microsoft Assembly x86",
"Mathematica",
"MATLAB",
"Maxima",
"Macsyma",
"Max",
"MaxScript",
"Maya (MEL)",
"MDL",
"Mercury",
"Mesa",
"Metacard",
"Metafont",
"MetaL",
"Microcode",
"MicroScript",
"MIIS",
"MillScript",
"MIMIC",
"Mirah",
"Miranda",
"MIVA Script",
"ML",
"Moby",
"Model 204",
"Modelica",
"Modula",
"Modula-2",
"Modula-3",
"Mohol",
"MOO",
"Mortran",
"Mouse",
"MPD",
"CIL",
"MSL",
"MUMPS",
"NASM",
"NATURAL",
"Napier88",
"Neko",
"Nemerle",
"nesC",
"NESL",
"Net.Data",
"NetLogo",
"NetRexx",
"NewLISP",
"NEWP",
"Newspeak",
"NewtonScript",
"NGL",
"Nial",
"Nice",
"Nickle",
"NPL",
"Not eXactly C",
"Not Quite C",
"NSIS",
"Nu",
"NWScript",
"NXT-G",
"o:XML",
"Oak",
"Oberon",
"Obix",
"OBJ2",
"Object Lisp",
"ObjectLOGO",
"Object REXX",
"Object Pascal",
"Objective-C",
"Objective-J",
"Obliq",
"Obol",
"OCaml",
"occam",
"occam-π",
"Octave",
"OmniMark",
"Onyx",
"Opa",
"Opal",
"OpenCL",
"OpenEdge ABL",
"OPL",
"OPS5",
"OptimJ",
"Orc",
"ORCA/Modula-2",
"Oriel",
"Orwell",
"Oxygene",
"Oz",
"P#",
"ParaSail (programming language)",
"PARI/GP",
"Pascal",
"Pawn",
"PCASTL",
"PCF",
"PEARL",
"PeopleCode",
"Perl",
"PDL",
"PHP",
"Phrogram",
"Pico",
"Picolisp",
"Pict",
"Pike",
"PIKT",
"PILOT",
"Pipelines",
"Pizza",
"PL-11",
"PL/0",
"PL/B",
"PL/C",
"PL/I",
"PL/M",
"PL/P",
"PL/SQL",
"PL360",
"PLANC",
"Plankalkül",
"Planner",
"PLEX",
"PLEXIL",
"Plus",
"POP-11",
"PostScript",
"PortablE",
"Powerhouse",
"PowerBuilder",
"PowerShell",
"PPL",
"Processing",
"Processing.js",
"Prograph",
"PROIV",
"Prolog",
"PROMAL",
"Promela",
"PROSE modeling language",
"PROTEL",
"ProvideX",
"Pro*C",
"Pure",
"Python",
"Q (equational programming language)",
"Q (programming language from Kx Systems)",
"Qalb",
"Qi",
"QtScript",
"QuakeC",
"QPL",
"R",
"R++",
"Racket",
"RAPID",
"Rapira",
"Ratfiv",
"Ratfor",
"rc",
"REBOL",
"Red",
"Redcode",
"REFAL",
"Reia",
"Revolution",
"rex",
"REXX",
"Rlab",
"RobotC",
"ROOP",
"RPG",
"RPL",
"RSL",
"RTL/2",
"Ruby",
"RuneScript",
"Rust",
"S",
"S2",
"S3",
"S-Lang",
"S-PLUS",
"SA-C",
"SabreTalk",
"SAIL",
"SALSA",
"SAM76",
"SAS",
"SASL",
"Sather",
"Sawzall",
"SBL",
"Scala",
"Scheme",
"Scilab",
"Scratch",
"Script.NET",
"Sed",
"Seed7",
"Self",
"SenseTalk",
"SequenceL",
"SETL",
"Shift Script",
"SIMPOL",
"Shakespeare",
"SIGNAL",
"SiMPLE",
"SIMSCRIPT",
"Simula",
"Simulink",
"SISAL",
"SLIP",
"SMALL",
"Smalltalk",
"Small Basic",
"SML",
"Snap!",
"SNOBOL",
"SPITBOL",
"Snowball",
"SOL",
"Span",
"SPARK",
"SPIN",
"SP/k",
"SPS",
"Squeak",
"Squirrel",
"SR",
"S/SL",
"Stackless Python",
"Starlogo",
"Strand",
"Stata",
"Stateflow",
"Subtext",
"SuperCollider",
"SuperTalk",
"Swift (Apple programming language)",
"Swift (parallel scripting language)",
"SYMPL",
"SyncCharts",
"SystemVerilog",
"T",
"TACL",
"TACPOL",
"TADS",
"TAL",
"Tcl",
"Tea",
"TECO",
"TELCOMP",
"TeX",
"TEX",
"TIE",
"Timber",
"TMG",
"Tom",
"TOM",
"Topspeed",
"TPU",
"Trac",
"TTM",
"T-SQL",
"TTCN",
"Turing",
"TUTOR",
"TXL",
"TypeScript",
"Turbo C++",
"Ubercode",
"UCSD Pascal",
"Umple",
"Unicon",
"Uniface",
"UNITY",
"Unix shell",
"UnrealScript",
"Vala",
"VBA",
"VBScript",
"Verilog",
"VHDL",
"Visual Basic",
"Visual Basic .NET",
"Visual DataFlex",
"Visual DialogScript",
"Visual Fortran",
"Visual FoxPro",
"Visual J++",
"Visual J#",
"Visual Objects",
"Visual Prolog",
"VSXu",
"Vvvv",
"WATFIV, WATFOR",
"WebDNA",
"WebQL",
"Windows PowerShell",
"Winbatch",
"Wolfram",
"Wyvern",
"X++",
"X#",
"X10",
"XBL",
"XC",
"XMOS architecture",
"xHarbour",
"XL",
"Xojo",
"XOTcl",
"XPL",
"XPL0",
"XQuery",
"XSB",
"XSLT",
"XPath",
"Xtend",
"Yorick",
"YQL",
"Z notation",
"Zeno",
"ZOPL",
"ZPL",
]

export { countryCodeList, countryList, courseList, programmingList };