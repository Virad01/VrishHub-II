console.log("This is my blog js file");


let apiKey = '73a6e3c9a5e64a6b8b1523aefbc3d581'
//Grab the news container
let blogsAccordion = document.getElementById('blogsAccordion');


//create an ajax get request
const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=${apiKey}`, true);
xhr.getResponseHeader('Content-type', 'application/json');
xhr.onload = function () {
    if (this.status === 200) {

        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(json);
        //console.log(articles);
        let newsHtml = "";
        articles.forEach(function (element, index) {
            console.log(element, index)

            let news = `<div class="accordion-item">
                        <h2 class="accordion-header" id="heading${index}">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}"
                                aria-expanded="true" aria-controls="collapse${index}">
                               
                               
                                 ${element["title"]}
                            </button>
                        </h2>
                        <div id="collapse${index}" class="accordion-collapse collapse " aria-labelledby="heading${index}"
                            data-bs-parent="#BlogsAccordion">
                            <div class="accordion-body">${element["content"]}. <a href="${element['url']}" target="_blank">Read more here</a>          
                         </div>
                        </div>
                       </div>`;
            newsHtml += news;

        });
        blogsAccordion.innerHTML = newsHtml;
    }

    else {
        console.log("Some error occured")
    }
}
xhr.send()
