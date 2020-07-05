// DISPLAY PICTURES
{
    let html, newHtml;

    html = '<div class="images"><div class="row"><div class="pic_%nr%"><div class="column"><img id="%nr%" src="photo/%nr%.jpg"><button id="button%nr%" class="like_button" type="button"><img class="like_logo" src="images/like.png"></button></div></div><div class="pic_%nr2%"><div class="column"><img id="%nr2%" src="photo/%nr2%.jpg"><button id="button%nr2%" class="like_button" type="button"><img class="like_logo" src="images/like.png"></button></div></div><div class="pic_%nr3%"><div class="column"><img id="%nr3%" src="photo/%nr3%.jpg"><button id="button%nr3%" class="like_button" type="button"><img class="like_logo" src="images/like.png"></button></div></div></div>'

    for(let i = 1; i < 90; i+=3){

        newHtml = html.replace('%nr%', i);
        newHtml = newHtml.replace('%nr%', i);
        newHtml = newHtml.replace('%nr%', i);
        newHtml = newHtml.replace('%nr%', i);

        newHtml = newHtml.replace('%nr2%', i+1);
        newHtml = newHtml.replace('%nr2%', i+1);
        newHtml = newHtml.replace('%nr2%', i+1);
        newHtml = newHtml.replace('%nr2%', i+1);

        newHtml = newHtml.replace('%nr3%', i+2);
        newHtml = newHtml.replace('%nr3%', i+2);
        newHtml = newHtml.replace('%nr3%', i+2);
        newHtml = newHtml.replace('%nr3%', i+2);


        
        var test = document.querySelector('.title');
        
        document.querySelector('.images').insertAdjacentHTML('beforeend', newHtml);
    }

}
// EXPAND IMAGE
{
    var pressed = [];

   document.querySelector('.images').addEventListener('click', selectImage);


   function selectImage(event) {

    let picID, pictureID, buttonID, buttonIDLike;

    picID = document.getElementById(event.target.id);

    // Check if pressed on picture
    if(event.target.id > 0 && event.target.id < 200){

        // Make like button visible

        buttonIDLike = 'button' + event.target.id;
        buttonID = document.getElementById(buttonIDLike);
        buttonID.style.visibility='visible';

        // Add event listener to like button

        buttonID.addEventListener('click' ,function(){
            likeImage(buttonIDLike);
        });


        //Check if it's been already pressed

        if (itItAlreadyPressed(pressed, event.target.id)){

            pictureID = pressed.findIndex(cur => cur == event.target.id);
            delete pressed[pictureID];
            shrinkImage(picID);
            buttonID.style.visibility='hidden';


        }else{
            pressed.push(event.target.id);
            expandImage(picID);

        }        
    };
   };
   
   function itItAlreadyPressed(ar, id){
       let isAlreadyPressed;
       return isAlreadyPressed = ar.includes(id);
   }
   function expandImage(id){
    if (window.matchMedia('(min-width: 1000px)').matches) {
        console.log("this window bigger than 1000px");
        id.style.width='550px';
      }else{
        id.style.width='1200px';

      }
    //    id.style.width='550px';
       id.style.border='6px solid rgb(125, 125, 125)';

   }
   function shrinkImage(id){
        id.style.width='300px';
        id.style.border='6px solid rgb(126, 116, 116)';
    }
   
}

// LIKE BUTTON
{
    function likeImage(buttonID){
        console.log(`working id is ${buttonID}`);
        addLike(buttonID);
    }
    function addLike(buttonID){
        //TODO
    }
}

// FLIP IMAGE TO SEE COMMENTS
{

}