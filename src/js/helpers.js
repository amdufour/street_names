export const countries = [
  { id: "AL", name: "Albania" },
  { id: "AT", name: "Austria" },
  { id: "BA", name: "Bosnia and Herzegovina" },
  { id: "BE", name: "Belgium" },
  { id: "BG", name: "Bulgaria" },
  { id: "BY", name: "Belarus" },
  { id: "HR", name: "Croatia" },
  // { id: "CY", name: "Republic of Cyprus" },
  { id: "CZ", name: "Czech Republic" },
  { id: "DK", name: "Denmark" },
  // { id: "EE", name: "Estonia" },
  { id: "FI", name: "Finland" },
  { id: "FR", name: "France" },
  { id: "DE", name: "Germany" },
  // { id: "GR", name: "Greece" },
  { id: "HU", name: "Hungary" },
  // { id: "IS", name: "Iceland" },
  { id: "IE", name: "Ireland" },
  { id: "IT", name: "Italy" },
  { id: "LV", name: "Latvia" },
  // { id: "LI", name: "Liechtenstein" },
  { id: "LT", name: "Lithuania" },
  { id: "LU", name: "Luxembourg" },
  // { id: "MD", name: "Moldova" },
  // { id: "MC", name: "Monaco" },
  { id: "ME", name: "Montenegro" },
  // { id: "MT", name: "Malta" },
  { id: "NL", name: "Netherlands" },
  { id: "MK", name: "North Macedonia" },
  { id: "NO", name: "Norway" },
  { id: "PL", name: "Poland" },
  { id: "PT", name: "Portugal" },
  { id: "RO", name: "Romania" },
  { id: "RU", name: "Russian Federation" },
  { id: "RS", name: "Serbia" },
  { id: "SK", name: "Slovakia" },
  { id: "SI", name: "Slovenia" },
  { id: "ES", name: "Spain" },
  { id: "SE", name: "Sweden" },
  { id: "UA", name: "Ukraine" },
  { id: "UK", name: "United Kingdom" },
];
export const EUcountries = [
  { id: "AT", name: "Austria" },
  { id: "BE", name: "Belgium" },
  { id: "BG", name: "Bulgaria" },
  { id: "HR", name: "Croatia" },
  // { id: "CY", name: "Republic of Cyprus" },
  { id: "CZ", name: "Czech Republic" },
  { id: "DK", name: "Denmark" },
  // { id: "EE", name: "Estonia" },
  { id: "FI", name: "Finland" },
  { id: "FR", name: "France" },
  { id: "DE", name: "Germany" },
  // { id: "GR", name: "Greece" },
  { id: "HU", name: "Hungary" },
  { id: "IE", name: "Ireland" },
  { id: "IT", name: "Italy" },
  { id: "LV", name: "Latvia" },
  { id: "LT", name: "Lithuania" },
  { id: "LU", name: "Luxembourg" },
  // { id: "MT", name: "Malta" },
  { id: "NL", name: "Netherlands" },
  { id: "PL", name: "Poland" },
  { id: "PT", name: "Portugal" },
  { id: "RO", name: "Romania" },
  { id: "SK", name: "Slovakia" },
  { id: "SI", name: "Slovenia" },
  { id: "ES", name: "Spain" },
  { id: "SE", name: "Sweden" },
];

export const citiesDitionary = [
  { id: "Wien", nameEN: "Vienna", country: "Austria" },
  { id: "Brussels", nameEN: "Brussels", country: "Belgium" },
  { id: "Praha", nameEN: "Prague", country: "Czech Republic" },
  { id: "Berlin, Stadt", nameEN: "Berlin", country: "Germany" },
  { id: "Ψευδοδημοτική Κοινότητα Αθηναίων", nameEN: "Athens", country: "Greece" },
  { id: "Barcelona", nameEN: "Barcelona", country: "Spain" },
  { id: "Sevilla", nameEN: "Seville", country: "Spain" },
  { id: "Lyon", nameEN: "Lyon", country: "France" },
  { id: "Paris", nameEN: "Paris", country: "France" },
  { id: "Torino", nameEN: "Turin", country: "Italy" },
  { id: "Milano", nameEN: "Milan", country: "Italy" },
  { id: "Roma", nameEN: "Rome", country: "Italy" },
  { id: "Palermo", nameEN: "Palermo", country: "Italy" },
  { id: "Kraków", nameEN: "Kraków", country: "Poland" },
  { id: "Wrocław", nameEN: "Wrocław", country: "Poland" },
  { id: "Gdańsk", nameEN: "Gdańsk", country: "Poland" },
  { id: "Warszawa", nameEN: "Warsaw", country: "Poland" },
  { id: "Municipiul Bucureşti", nameEN: "Bucharest", country: "Romania" },
  { id: "København", nameEN: "Copenhagen", country: "Denmark" },
  { id: "Grad Zagreb", nameEN: "Zagreb", country: "Croatia" },
  { id: "Budapest", nameEN: "Budapest", country: "Hungary" },
  { id: "Kyiv", nameEN: "Kyiv", country: "Ukraine" },
  { id: "Katowice", nameEN: "Katowice", country: "Poland" },
  { id: "Genova", nameEN: "Genoa", country: "Italy" },
  { id: "Łódź", nameEN: "Łódź", country: "Poland" },
  { id: "Stockholm", nameEN: "Stockholm", country: "Sweden" },
  { id: "Chisinau", nameEN: "Chișinău", country: "Moldova" },
  { id: "Debrecen", nameEN: "Debrecen", country: "Hungary" },
];

export const worldRegions = [
  "East Asia and Pacific",
  "Latin America and Caribbean",
  "Middle East and North Africa",
  "North America",
  "South Asia",
  "Sub-Saharan Africa",
  "Europe and Central Asia (non EU)"
];

export const testNationality = (description) => {
  switch (true) {
    case description.toLowerCase().includes("italy"):
    case description.toLowerCase().includes("italian"):
    case description.toLowerCase().includes("italiaans"):
    case description.toLowerCase().includes("italo"):
    case description.toLowerCase().includes("milan"):
    case description.toLowerCase().includes("venetian"):
    case description.toLowerCase().includes("lombard"):
    case description.toLowerCase().includes("roma"):
    case description.toLowerCase().includes("sienese"):
    case description.toLowerCase().includes("genoese"):
    case description.toLowerCase().includes("genoa"):
    case description.toLowerCase().includes("savoy"):
    case description.toLowerCase().includes("syracuse"):
    case description.toLowerCase().includes("pompey"):
    case description.toLowerCase().includes("todi"):
    case description.toLowerCase().includes("torino"):
    case description.toLowerCase().includes("arborea"):
    case description.toLowerCase().includes("senigallia"):
    case description.toLowerCase().includes("sicilian"):
    case description.toLowerCase().includes("naples"):
    case description.toLowerCase().includes("siena"):
    case description.toLowerCase().includes("bologna"):
    case description.toLowerCase().includes("florence"):
    case description.toLowerCase().includes("sicilies"):
    case description.toLowerCase().includes("sicily"):
    case description.toLowerCase().includes("pisa"):
    case description.toLowerCase().includes("parma"):
    case description.toLowerCase().includes("venice"):
    case description.toLowerCase().includes("tuscany"):
      return "Italy";
    case description.toLowerCase().includes("french"):
    case description.toLowerCase().includes("france"):
    case description.toLowerCase().includes("paris"):
    case description.toLowerCase().includes("lyon"):
    case description.toLowerCase().includes("burgund"):
    case description.toLowerCase().includes("montmartre"):
    case description.toLowerCase().includes("bayeux"):
    case description.toLowerCase().includes("francia"):
    case description.toLowerCase().includes("lorraine"):
    case description.toLowerCase().includes("little red riding hood"):
    case description.includes("Aix"):
      return "France";
    case description.toLowerCase().includes("viking"):
    case description.toLowerCase().includes("norse"):
    case description.toLowerCase().includes("thor"):
    case description.toLowerCase().includes("nordic"):
      return "Scandinavia";
    case description.toLowerCase().includes("british"):
    case description.toLowerCase().includes("england"):
    case description.toLowerCase().includes("welsh"):
    case description.toLowerCase().includes("wales"):
    case description.toLowerCase().includes("arthurian"):
    case description.toLowerCase().includes("raf officer"):
    case description.toLowerCase().includes("royal navy"):
    case description.toLowerCase().includes("ithaca"):
    case description.toLowerCase().includes("scotland"):
      return "United Kingdom";
    case description.toLowerCase().includes("dutch"):
    case description.toLowerCase().includes("flemish"):
    case description.toLowerCase().includes("flanders"):
    case description.toLowerCase().includes("nederlands"):
    case description.toLowerCase().includes("netherlands"):
      return "Netherlands";
    case description.toLowerCase().includes("norwegian"):
    case description.toLowerCase().includes("norway"):
      return "Norway";
    case description.toLowerCase().includes("south africa"):
      return "South Africa";
    case description.toLowerCase().includes("finnish"):
      return "Finland";
    case description.toLowerCase().includes("lithuanian"):
      return "Lithuania";
    case description.toLowerCase().includes("romanian"):
    case description.toLowerCase().includes("wallachia"):
    case description.toLowerCase().includes("histria"):
      return "Romania";
    case description.toLowerCase().includes("russia"):
    case description.toLowerCase().includes("soviet"):
      return "Russia";
    case description.toLowerCase().includes("spanish"):
    case description.toLowerCase().includes("barcelona"):
    case description.toLowerCase().includes("catalan"):
    case description.toLowerCase().includes("catalonia"):
    case description.toLowerCase().includes("hispani"):
    case description.toLowerCase().includes("sevillian"):
    case description.toLowerCase().includes("seville"):
    case description.toLowerCase().includes("asturias"):
    case description.toLowerCase().includes("castil"):
    case description.toLowerCase().includes("ilergetes"):
    case description.toLowerCase().includes("spain"):
    case description.toLowerCase().includes("granada"):
    case description.toLowerCase().includes("majorca"):
    case description.toLowerCase().includes("valencia"):
      return "Spain";
    case description.toLowerCase().includes("danish"):
    case description.toLowerCase().includes("denmark"):
    case description.toLowerCase().includes("copenhagen"):
      return "Denmark";
    case description.toLowerCase().includes("estonian"):
      return "Estonia";
    case description.toLowerCase().includes("japanese"):
      return "Japan";
    case description.toLowerCase().includes("albanian"):
      return "Albania";
    case description.toLowerCase().includes("bithynia"):
    case description.toLowerCase().includes("ottoman"):
    case description.toLowerCase().includes("ephesian"):
    case description.toLowerCase().includes("anatolian"):
    case description.toLowerCase().includes("thracian"):
    case description.toLowerCase().includes("cappadocia"):
      return "Turkey";
    case description.toLowerCase().includes("babylonia"):
    case description.toLowerCase().includes("parthia"):
    case description.toLowerCase().includes("aladdin"):
    case description.toLowerCase().includes("phoenician"):
    case description.toLowerCase().includes("byzantine"):
    case description.toLowerCase().includes("egypt"):
    case description.toLowerCase().includes("phoenicia"):
    case description.toLowerCase().includes("carthage"):
    case description.toLowerCase().includes("tunis"):
    case description.toLowerCase().includes("córdoba"):
      return "Middle East";
    case description.toLowerCase().includes("latvian"):
      return "Latvia";
    case description.toLowerCase().includes("polotsk"):
      return "Belarus";
    case description.toLowerCase().includes("congo"):
      return "Congo";
    case description.toLowerCase().includes("serbia"):
      return "Serbia";
    case description.toLowerCase().includes("peru"):
      return "Peru";
    case description.toLowerCase().includes("slovenian"):
      return "Slovenia";
    case description.toLowerCase().includes("montenegro"):
      return "Montenegro";
    case description.toLowerCase().includes("india"):
    case description.toLowerCase().includes("vedic"):
      return "India";
    case description.toLowerCase().includes("polish"):
    case description.toLowerCase().includes("poland"):
    case description.toLowerCase().includes("poles"):
    case description.toLowerCase().includes("krakow"):
    case description.toLowerCase().includes("cieszyn"):
    case description.toLowerCase().includes("masovia"):
    case description.toLowerCase().includes("silesian"):
    case description.toLowerCase().includes("wrocław"):
    case description.toLowerCase().includes("warsaw"):
      return "Poland";
    case description.toLowerCase().includes("ukrainian"):
    case description.toLowerCase().includes("ukraine"):
    case description.toLowerCase().includes("kyiv"):
    case description.toLowerCase().includes("rus'"):
    case description.toLowerCase().includes("ruthenian"):
    case description.toLowerCase().includes("cossack"):
    case description.toLowerCase().includes("scyth"):
    case description.toLowerCase().includes("donbas"):
      return "Ukraine";
    case description.toLowerCase().includes("croatia"):
    case description.toLowerCase().includes("croaian"):
    case description.toLowerCase().includes("crotian"):
    case description.toLowerCase().includes("zagreb"):
    case description.toLowerCase().includes("dalmatia"):
    case description.toLowerCase().includes("vladimir nazor"):
      return "Croatia";
    case description.toLowerCase().includes("brussels"):
    case description.toLowerCase().includes("belgian"):
    case description.toLowerCase().includes("belgium"):
    case description.toLowerCase().includes("anderlecht"):
    case description.toLowerCase().includes("brabant"):
    case description.toLowerCase().includes("liège"):
      return "Belgium";
    case description.toLowerCase().includes("czech"):
    case description.toLowerCase().includes("bohemia"):
    case description.toLowerCase().includes("hussite"):
    case description.toLowerCase().includes("moravia"):
      return "Czechia";
    case description.toLowerCase().includes("german"):
    case description.toLowerCase().includes("berlin"):
    case description.toLowerCase().includes("goth"):
    case description.toLowerCase().includes("richard strauss"):
    case description.toLowerCase().includes("richard wagner"):
    case description.toLowerCase().includes("beethoven"):
    case description.toLowerCase().includes("albert lortzing"):
    case description.toLowerCase().includes("brunswick-lüneburg"):
    case description.toLowerCase().includes("nibelungenlied"):
    case description.toLowerCase().includes("frankish"):
    case description.toLowerCase().includes("franks"):
    case description.toLowerCase().includes("rhine"):
    case description.toLowerCase().includes("carolingian"):
    case description.toLowerCase().includes("passau"):
    case description.toLowerCase().includes("polabian slavs"):
    case description.toLowerCase().includes("bavaria"):
    case description.toLowerCase().includes("wiener"):
    case description.toLowerCase().includes("marcomanni"):
    case description.toLowerCase().includes("dresden"):
    case description.toLowerCase().includes("swabia"):
    case description.toLowerCase().includes("saxony"):
    case description.toLowerCase().includes("frankfurt"):
    case description.toLowerCase().includes("baden"):
    case description.toLowerCase().includes("saxe"):
    case description.toLowerCase().includes("hamburg"):
    case description.toLowerCase().includes("brunswick"):
    case description.toLowerCase().includes("pomerania"):
    case description.toLowerCase().includes("hansel and gretel"):
      return "Germany";
    case description.toLowerCase().includes("swedish"):
    case description.toLowerCase().includes("sweden"):
    case description.toLowerCase().includes("stockholm"):
    case description.toLowerCase().includes("astrid lindgren"):
      return "Sweden";
    case description.toLowerCase().includes("bulgaria"):
    case description.toLowerCase().includes("bucharest"):
      return "Bulgaria";
    case description.toLowerCase().includes("austria"):
    case description.toLowerCase().includes("vienna"):
    case description.toLowerCase().includes("viennese"):
    case description.toLowerCase().includes("mozart"):
    case description.toLowerCase().includes("the magic flute"):
    case description.toLowerCase().includes("haydn"):
      return "Austria";
    case description.toLowerCase().includes("hungar"):
    case description.toLowerCase().includes("magyar"):
    case description.toLowerCase().includes("árpád"):
    case description.toLowerCase().includes("hunnic"):
      return "Hungarian";
    case description.toLowerCase().includes("moldovan"):
    case description.toLowerCase().includes("moldavain"):
    case description.toLowerCase().includes("moldavia"):
      return "Moldova";
    case description.toLowerCase().includes("cyprus"):
      return "Cyprus";
    case description.toLowerCase().includes("portugal"):
    case description.toLowerCase().includes("portuguese"):
    case description.toLowerCase().includes("lusitanian"):
      return "Portugal";
    case description.toLowerCase().includes("greek"):
    case description.toLowerCase().includes("greece"):
    case description.toLowerCase().includes("athen"):
    case description.toLowerCase().includes("trojan"):
    case description.toLowerCase().includes("socrates"):
    case description.toLowerCase().includes("alexander the great"):
    case description.toLowerCase().includes("macedon"):
    case description.toLowerCase().includes("hellenistic"):
    case description.toLowerCase().includes("antigonus"):
    case description.toLowerCase().includes("odysseus"):
    case description.toLowerCase().includes("odyssey"):
    case description.toLowerCase().includes("masistes"):
    case description.toLowerCase().includes("epirus"):
    case description.toLowerCase().includes("troy"):
    case description.toLowerCase().includes("graces"):
    case description.toLowerCase().includes("aristotle"):
    case description.toLowerCase().includes("sindike"):
    case description.toLowerCase().includes("xenophon"):
    case description.toLowerCase().includes("oedipus"):
    case description.toLowerCase().includes("Olenus"):
    case description.toLowerCase().includes("epicurean"):
    case description.toLowerCase().includes("hundred-handers"):
    case description.toLowerCase().includes("pleiades"):
    case description.toLowerCase().includes("amphiaraus"):
    case description.toLowerCase().includes("attalus"):
    case description.toLowerCase().includes("hector"):
    case description.toLowerCase().includes("methymnae"):
    case description.toLowerCase().includes("pericles"):
    case description.toLowerCase().includes("apollo"):
    case description.toLowerCase().includes("agamemnon"):
    case description.toLowerCase().includes("phaeacians"):
    case description.toLowerCase().includes("thrace"):
    case description.toLowerCase().includes("sparta"):
    case description.toLowerCase().includes("thebes"):
    case description.toLowerCase().includes("peloponnesian"):
      return "Greece";
    case description.toLowerCase().includes("moroccan"):
      return "Morocco";
    case description.toLowerCase().includes("kenya"):
      return "Kenya";
    case description.toLowerCase().includes("chilean"):
      return "Chile";
    case description.toLowerCase().includes("china"):
      return "China";
    case description.toLowerCase().includes("swiss"):
    case description.toLowerCase().includes("geneva"):
      return "Switzerland";
    case description.toLowerCase().includes("argentinian"):
      return "Argentina";
    case description.toLowerCase().includes("united states"):
    case description.toLowerCase().includes("american"):
    case description.toLowerCase().includes("mark twain"):
    case description.toLowerCase().includes("charlie chaplin"):
    case description.toLowerCase().includes("snow white"):
      return "United States";
    case description.toLowerCase().includes("irish"):
    case description.toLowerCase().includes("ireland"):
      return "Ireland";
    case description.toLowerCase().includes("roman"):
    case description.toLowerCase().includes("rome"):
    case description.toLowerCase().includes("latin"):
    case description.toLowerCase().includes("romae"):
    case description.toLowerCase().includes("caesar"):
    case description.toLowerCase().includes("mithridates"):
    case description.toLowerCase().includes("gaius memmius"):
    case description.toLowerCase().includes("mark antony"):
    case description.toLowerCase().includes("remesiana"):
    case description.toLowerCase().includes("romulus"):
      return "Roman Empire";
    case description.toLowerCase().includes("christian"):
    case description.toLowerCase().includes("saint"):
    case description.toLowerCase().includes("jesus"):
    case description.toLowerCase().includes("mary"):
    case description.toLowerCase().includes("archangel"):
    case description.toLowerCase().includes("angel"):
    case description.toLowerCase().includes("abraham"):
    case description.toLowerCase().includes("biblical"):
    case description.toLowerCase().includes("jerusalem"):
    case description.toLowerCase().includes("martyr"):
    case description.toLowerCase().includes("judea"):
    case description.toLowerCase().includes("perpetua"):
    case description.toLowerCase().includes("hebrew"):
      return "Judeo-Chritian roots";
    default:
      return "NA";
  };
};