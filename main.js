


let outOfLoop = document.querySelector(".fill");

// This makes the title appear.
let topText = document.querySelector(".top-text");
let title = document.createElement("div");
let title_Text = `<h1>Internal Company Directory</h1>`;
title.innerHTML = title_Text;
topText.appendChild(title);
// document.body.appendChild(title);

for(let i = 0; i < customers.results.length; i++){
let x = document.createElement("div");
let c =
`<img src=${customers.results[i].picture.large} alt="person_image"/>
<h3>${customers.results[i].name.first} ${customers.results[0].name.last}</h3>
<p>${customers.results[i].email}</p>
<p>${customers.results[i].location.street}</p>
<p>${customers.results[i].phone}</p>
<p class="ssn">${customers.results[i].id.value}</p>
`;
// Above is the end of the template literal.

// This marks each fourth profile with a different class.
let count = i+1;
if( count === 4 || count%4 === 0){
  x.setAttribute("class","fourClass");
}
else{
  x.setAttribute("class","oneClass");
}

// This fills x with c and attaches the div x to outOfLoop.
x.innerHTML = c;
outOfLoop.appendChild(x);
}
