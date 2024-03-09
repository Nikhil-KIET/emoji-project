let data=document.getElementById("data");
let search=document.getElementById("search");
let btn=document.getElementById("btn");


for(const obj of  emojiList ){

let ele=document.createElement("div");
let img=document.createElement("p");
ele.classList.add("emoji");
img.textContent=obj?.emoji;
ele.appendChild(img);
data.appendChild(ele);

};
function displayFilteredEmojis(filteredEmojis) {
    
    data.innerHTML = '';
  
    
    for (const obj of filteredEmojis) {
      let ele = document.createElement("div");
      let img = document.createElement("p");
      ele.classList.add("emoji");
      img.textContent = obj?.emoji;
      ele.appendChild(img);
      data.appendChild(ele);
    }
  }
  
  
  search.addEventListener('input', () => {
    
    const searchValue = search.value.toLowerCase();
    const filteredEmojis = emojiList.filter(obj => obj.tags.some(tag => tag.includes(searchValue)));
  
    
    displayFilteredEmojis(filteredEmojis);
  });

