const news_main= document.getElementById("news_container");
const searchform=document.querySelector('.d-flex');
const input=document.querySelector('.form-control');
const cate=document.querySelector('#category');
let tosearch="example";
function changesearch(choice){
  tosearch=choice;
  cate.innerHTML=choice;
  console.log(tosearch)
  function retrieve(){
    let url=`https://gnews.io/api/v4/search?q=${tosearch}&token=791c21fded29845a4d6222075e658030&lang=en`;
    fetch(url).then((res)=>{
        return res.json()
    }).then((data)=>{
        console.log(data)
        data.articles.forEach(article => {
            let news=`
            <div class="card" onclick="gotoref()" >
               <img class="card-img-top maxwidth" src="${article.image}" alt="Card image cap">
               <div class="card-body">
                 <h5 class="card-title">${article.title}</h5>
                 <p class="card-text bold">${article.description}</p>
                 <p class="card-text ">Published at:${article.publishedAt}</p>
                 <a href="${article.url}" class="btn btn-primary">Read full article-</a>
            </div>`;
            news_main.innerHTML += news;
        });
    })
   }
   retrieve();
}
   retrieve();
 
