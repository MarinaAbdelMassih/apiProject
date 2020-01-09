var data = [];
var req = new XMLHttpRequest();
var cat="general";
getdata(cat);
var links= document.querySelectorAll(".nav-link");

for(var i=0; i<links.length ; i++)
{
    links[i].addEventListener("click", function(e){
         cat = e.target.text;
         getdata(cat);
    })
}
function getdata(cat){
req.open("Get", "https://newsapi.org/v2/top-headlines?country=us&category="+cat+"&apiKey=5bce50a9e81446df97c1b12f32af0af5");
req.send();

req.onreadystatechange=function()
{
  if(req.readyState==4 && req.status == 200)
  {
    data= JSON.parse(req.response).articles;
    
    displaydata();
  }

}
}



function displaydata()
{
    temp = ``;
    for(var i=0 ; i <data.length ; i++ )
    {
        temp +=` <div class="col-md-3 ">
        <div class="item">
            <img src="`+data[i].urlToImage+`" class="img-fluid"/> 
            <h4>`+data[i].title+`</h4>
            <p>+`+data[i].description+`+</p>
        </div>
    </div>`;
    }
    document.getElementById("amlarow").innerHTML = temp;
}






