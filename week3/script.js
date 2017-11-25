let bookIds = ["the_davinci_code", "angels_and_demons", "deception_point",
    "gone_with_the_wind", "curtain", "inferno", "sleeping_murder", "the_alchemist",
    "the_lost_symbol", "digital_fortress"
];

let booksDescription = {
    the_davinci_code: {
        title: "The Davinci code",
        lang: "English",
        author: "Dan Brown",
    },
    angels_and_demons: {
        title: "Angels and demons",
        lang: "English",
        author: "Dan Brown",
    },
    deception_point: {
        title: "Deception point",
        lang: "English",
        author: "Dan Brown",
    },
    gone_with_the_wind: {
        title: "Gone with the wind",
        lang: "English",
        author: "Margaret Mitchell",
    },
    curtain: {
        title: "Curtain",
        lang: "English",
        author: "Agatha Christie",
    },
    inferno: {
        title: "Inferno",
        lang: "English",
        author: "Dan Brown",
    },
    sleeping_murder: {
        title: "Sleeping murder",
        lang: "English",
        author: "Agatha Christie",
    },
    the_alchemist: {
        title: "The alchemist",
        lang: "portuguese",
        author: "Paulo Coelho",
    },
    the_lost_symbol: {
        title: "The lost symbol",
        lang: "English",
        author: "Dan Brown",
    },
    digital_fortress: {
        title: "Digital fortress",
        lang: "English",
        author: "Dan Brown",
    },
};

let booksCovers = {
    the_davinci_code: "./img/the davinci code.jpg",
    angels_and_demons: "./img/angels and demons.jpg",
    deception_point: "./img/deception point.jpg",
    gone_with_the_wind: "./img/Gone_with_the_Wind_cover.jpg",
    curtain: "./img/curtain.JPG",
    inferno: "./img/inferno.jpg",
    sleeping_murder: "./img/Sleeping-Murder-v2.jpg",
    the_alchemist: "./img/the alchemist.jpg",
    the_lost_symbol: "./img/the lost symbol.jpg",
    digital_fortress: "./img/digital fortress.jpg"
};


let newDivElement = document.createElement("div");
document.body.appendChild(newDivElement);
newDivElement.setAttribute("id", "divContainer")
let ulElement = document.createElement("ul");
newDivElement.appendChild(ulElement);
ulElement.setAttribute("id", "ulContainer")

function liGenerator(bookIds, descriptions) {
    for (let i = 0; i < bookIds.length; i++) {
        let id = bookIds[i];
        let description = descriptions[id]
        let newLiElement = document.createElement("li");
        newLiElement.setAttribute("id", id)
        ulElement.appendChild(newLiElement);
        newLiElement.innerHTML = '<h2>' + description.title + '</h2>'
    }
}

liGenerator(bookIds, booksDescription);



function createDetailUL(description) {
    let secondUlElement = document.createElement("ul");
    let newLiElement1 = document.createElement("li");
    let newLiElement2 = document.createElement("li");
    let newLiElement3 = document.createElement("li");
    secondUlElement.appendChild(newLiElement1);
    secondUlElement.appendChild(newLiElement2);
    secondUlElement.appendChild(newLiElement3);
    newLiElement1.innerText = "Title: " + description.title;
    newLiElement2.innerText = "Lang: " + description.lang;
    newLiElement3.innerText = "Author: " + description.author
    return secondUlElement
}

function booksDetailGenerator(ids, descriptions) {
    for (let i = 0; i < ids.length; i++) {
        let id = ids[i];
        let secondUlElement = createDetailUL(descriptions[id]);
        let liElement = document.getElementById(id)
        liElement.appendChild(secondUlElement);
    }

}

let message = booksDetailGenerator(bookIds, booksDescription);
console.log(message);


let booksCoversToArray = Object.keys(booksCovers);
console.log(booksCoversToArray);
function imgGenerator(covers, booksCovers) {
    for (let i = 0; i < covers.length; i++) {
        let id = covers[i];
        let imgElement = document.createElement("img");
        imgElement.setAttribute("class", id);
        imgElement.setAttribute("src", booksCovers[id]);
        let newLiElement = document.getElementById(id);
        newLiElement.appendChild(imgElement);
    }
    
}
imgGenerator(booksCoversToArray, booksCovers);