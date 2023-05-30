const today = new Date();
const thisYear = today.getFullYear();
const end = thisYear + 5;
const japaneseEra = [
    { name: "明治", begin: 1868, end: 1912 },
    { name: "大正", begin: 1912, end: 1926 },
    { name: "昭和", begin: 1926, end: 1989 },
    { name: "平成", begin: 1989, end: 2019 },
    { name: "令和", begin: 2019, end: end },
];
const contentElem = document.getElementById("contents");
const leftHeaderElem = document.getElementById("left-header");

for (let i = japaneseEra.length - 1; i >= 0; i--) {
    let era = japaneseEra[i]

    // header
    let header = document.createElement("div");
    header.className = "right-header";
    let tmp = document.createElement("p");
    tmp.textContent = era.name;
    header.appendChild(tmp);
    console.log(era.end - era.begin)

    // years
    let years = document.createElement("div");
    years.className = "years";
    for (let year = era.end - 1; year >= era.begin; year--) {
        let yearElem = document.createElement("div");
        yearElem.classList.add("year");
        if (year == thisYear) {
            yearElem.classList.add("now");
        }
        let jpnYear = String(year - era.begin + 1) + "年";

        let commonYearElem = document.createElement("div");
        commonYearElem.className = "common";
        commonYearElem.textContent = String(year) + "年";
        yearElem.appendChild(commonYearElem);

        let jpnYearElem = document.createElement("div");
        jpnYearElem.className = "japanese";
        jpnYearElem.textContent = jpnYear;
        yearElem.appendChild(jpnYearElem);

        years.appendChild(yearElem);
    }

    // append
    contentElem.appendChild(years);
    contentElem.appendChild(header);
}
leftHeaderElem.style.gridRow = "span " + String(japaneseEra.length);