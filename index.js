
getty = ()=>{

  fetch("https://swapi.dev/api/people/")
  .then(response => response.json())
  .then(data=> {

  const output = data.results.map((details,index)=> {
    //return details;
    //return `<h1> ${details.name}</h1>`
    return `<div class="responsive" >
    <div class="gallery">
      <a style="position:relative;">
        <img src="images/img${index}.jpg" alt="Mountains" width="270" height="400">
        <div class= " top" id="show${index}" style="position:absolute;display:none;">
        Name: ${details.name} <br>
        Gender: ${details.gender} <br>
        Height : ${details.height}cm <br>
        </div>
      </a>
      <div  class="desc"><button onClick ="toggle('show${index}')" style="color:white;" id="toggle">${details.name}</button></div>
    </div>
  </div>`
  }).join('');
  

  document
  .querySelector('#container')
  .insertAdjacentHTML('afterbegin', output);
});
}


getty ();

toggle = (id) => {
    const targetDiv = document.getElementById(id);
    if (targetDiv.style.display === "none") {
      targetDiv.style.display = "block";
    } else {
      targetDiv.style.display = "none";
    }
};



