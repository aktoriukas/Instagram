// DISPLAY PICTURES

{
    let html, newHtml;

    html = '<div class="row"><div class="pic_%nr%"><div class="column"><img id=%nr% src="photo/%nr%.jpg"></div></div><div class="pic_%nr2%"><div class="column"><img id=%nr2% src="photo/%nr2%.jpg"></div></div><div class="pic_%nr3%"><div class="column"><img id=%nr3% src="photo/%nr3%.jpg"></div></div></div>'

    for(let i = 1; i < 90; i+=3){
        newHtml = html.replace('%nr%', i);
        newHtml = newHtml.replace('%nr%', i);
        newHtml = newHtml.replace('%nr%', i);
        newHtml = newHtml.replace('%nr2%', i+1);
        newHtml = newHtml.replace('%nr2%', i+1);
        newHtml = newHtml.replace('%nr2%', i+1);
        newHtml = newHtml.replace('%nr3%', i+2);
        newHtml = newHtml.replace('%nr3%', i+2);
        newHtml = newHtml.replace('%nr3%', i+2);

        
        var test = document.querySelector('.title');
        
        document.querySelector('.images').insertAdjacentHTML('afterbegin', newHtml);
    }

}
// EXPAND IMAGE
{
    var pressed = [];

   document.querySelector('.images').addEventListener('click', expandPicture);

   function expandPicture(event) {

    let picID;
    console.log(pressed);
    

    picID = document.getElementById(event.target.id);
    if(event.target.id > 0 && event.target.id < 200){
        checkIfPressed(pressed, event.target.id)
        pressed.push(event.target.id);
        console.log(event.target.id);
        picID.style.width="550px";
        
    };
   };
   
   function checkIfPressed(ar, id){
       let test = ar.includes(id);
        console.log(test);
   }
   
}

// LIKE BUTTON
{

}