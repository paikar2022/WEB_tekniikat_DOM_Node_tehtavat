// a. Change h2 header content to “Let’s manipulate some DOM again!” -> muuttaa otsikon
document.querySelector("h2").textContent = "Let's manipulate some DOM again";

// b. Remove last child of element with id “content” -> poistaa listalta viimeisen (Green)
let content = document.getElementById("content");
content.lastElementChild.remove();

// c. Interchange text contents of first and last p element inside article.
let article = document.querySelector("article");
let fChild = article.firstElementChild;
let lChild = article.lastElementChild;
let temp = fChild.textContent; //väliaikainen muuttuja ensimmäisen lapsielementin tekstisisällölle

fChild.textContent = lChild.textContent; //eli viimeisen teksti laitetaan tässä ekan paikalle
lChild.textContent = temp; // ja tässä ensimmäisen teksti väliaikaispaikalta viimeisen paikalle

// d. Add unordered list inside element of id=“content” with 5 list items. Each item contains text
// and number. Use for-loop to set numbering.
let ul = document.createElement("ul");

for (let i=1; i<6; i++) {
    let li =document.createElement("li");
    li.textContent = "Number " + i;
    ul.appendChild(li);
}
content.appendChild(ul);

// e. Construct next table in the end of div that has id=“content”. Don’t use innerHTML.
//tässä tehtiin funktio, vähentää koodin määrää jos pitäisi vaikka luoda lisää nimirivejä.
function createRow(colType, col1, col2) {
    let tr = document.createElement("tr");
    let c1 = document.createElement(colType);
    let c2 = document.createElement(colType);
    c1.textContent = col1;
    c2.textContent = col2;
    tr.append(c1, c2);
    return tr;
}

let table = document.createElement("table");
table.appendChild(createRow("th", "First name", "Last name"));
table.appendChild(createRow("td", "John", "Doe"));
content.appendChild(table);

// f. Add horizontal line before each child of id=”content”
let contentChildren = document.querySelectorAll("#content>*"); //hakee siis elementit, jotka ovat content-id:n omaavan elementin lapsia

/**@type{Element} */
let elem; //eli elem muuttuja
for(elem of contentChildren) 
{
    let hr = document.createElement("hr"); //hr eli viiva
    elem.parentElement.insertBefore(hr, elem); //hr lisätään ennen elem:ia
}