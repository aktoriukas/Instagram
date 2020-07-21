
class Instagram_image {
    constructor(nr, likes, expand) {
        this.nr = nr,
        this.likes = likes;
        this.expand = expand,
        this.visibleLike = false,
        this.visibleComments = false,
        this.comments = []
    }
    lisenForLike(){
        let buttonID;
        buttonID = 'button' + this.nr;
        document.getElementById(buttonID).addEventListener('click',function(){likeImage(buttonID);
        });
    }
    lisenForFlipButton(){
        let flipID, objNumber;

        objNumber = this.nr;

        flipID = 'flipbutton' + this.nr;
        document.getElementById(flipID).addEventListener('click',function(){displayComments(objNumber);
        });
    }
    
};
const nrOFimages = 90;

const imageObj = makeImageObj(nrOFimages);

// DISPLAY PICTURES 
{
    let html, newHtml;

    // html =  '<div class="pic_%nr%"><div class="column"><div class="comments_box" id="comment_box_%nr%"></div><img class="img" id="%nr%" src="photo/%nr%.jpg"><button id="button%nr%" class="like_button" type="button"><img class="like_logo" src="images/like.png">&nbsp;<div></div></button></div></div>'
    html =  '<div class="images"><div class="pic_%nr%"><div class="column"> <img class="img" id="%nr%" src="photo/%nr%.jpg"><button id="button%nr%" class="like_button" type="button"><img class="like_logo" src="images/like.png">&nbsp;<div>2</div></button><button id="flipbutton%nr%" class="flip_button" type="button""><img class="flip_logo" src="images/arrow.png"></button></div></div></div></div>'

    // Hard coded number on images (to change)
    for(i = 1; i <= nrOFimages; i++){

        newHtml = html.replace('%nr%', i);
        newHtml = newHtml.replace('%nr%', i);
        newHtml = newHtml.replace('%nr%', i);
        newHtml = newHtml.replace('%nr%', i);
        newHtml = newHtml.replace('%nr%', i);
        newHtml = newHtml.replace('%nr%', i);
                
        document.querySelector('.images').insertAdjacentHTML('beforeend', newHtml);
    }

}
// EXPAND IMAGE
{
    var pressed = [];

    expandEverySecondImage();
    checkIfDisplayLikeButton();
   document.querySelector('.images').addEventListener('click', selectImage);


    function selectImage(event) {

        let picElement, picElementChange, eventID;


        // Check if pressed on picture
        if(event.target.id > 0 && event.target.id <= nrOFimages){
            picElement = document.getElementById(event.target.id);


            eventID = event.target.id;
            eventID = parseInt(eventID);

            //Check if expand == true
            if(isEven(eventID) && imageObj[eventID].expand == true){

                shrinkImage(picElement);
                imageObj[eventID].expand=false;
                imageObj[eventID].visibleLike=false;
                imageObj[eventID].visibleLike=false;

                
                picElementChange = document.getElementById(eventID -1);

                expandImage(picElementChange);
                imageObj[eventID-1].expand=true;
                imageObj[eventID-1].visibleLike=true;

            }
            else if (isEven(eventID) && imageObj[eventID].expand == false){

                expandImage(picElement);
                imageObj[eventID].expand=true;
                imageObj[eventID].visibleLike=true;

                picElementChange = document.getElementById(eventID -1);

                shrinkImage(picElementChange);
                imageObj[eventID-1].expand=false;
                imageObj[eventID-1].visibleLike=false;

            }
            else if (!isEven(eventID) && imageObj[eventID].expand == true){

                shrinkImage(picElement);
                imageObj[eventID].expand=false;
                imageObj[eventID].visibleLike=false;

                picElementChange = document.getElementById(eventID +1);

                expandImage(picElementChange);
                imageObj[eventID+1].expand=true;
                imageObj[eventID+1].visibleLike=true;

            }
            else if (!isEven(eventID) && imageObj[eventID].expand == false){

                expandImage(picElement);
                imageObj[eventID].expand=true;
                imageObj[eventID].visibleLike=true;

                picElementChange = document.getElementById(eventID +1);

                shrinkImage(picElementChange);
                imageObj[eventID+1].expand=false;
                imageObj[eventID+1].visibleLike=false;

            }
            checkIfDisplayLikeButton();

        }
    };
    function checkIfDisplayLikeButton(){
        let i;

        for(i=1; i < nrOFimages; i++){
            if(imageObj[i].expand == true){
                displayButtons(i);

            }
            else if(imageObj[i].expand == false){
                hideButtons(i);
            }
        }
    }

    function isEven(n) {
        return n % 2 == 0;
    }

    function hideButtons(i){
        let likeButtonID, flipButtonID, likeButtonElement, flipButtonElement;

        // Hide like button
        likeButtonID = 'button' + i;
        likeButtonElement = document.getElementById(likeButtonID);
        likeButtonElement.style.visibility='hidden';

        // Hide flip button
        flipButtonID = 'flipbutton' + i;
        flipButtonElement = document.getElementById(flipButtonID);
        flipButtonElement.style.visibility='hidden';
    }

    function displayButtons(i){
        let likeButtonID, flipButtonID, likeButtonElement, flipButtonElement;

        // Display like button
        likeButtonID = 'button' + i;
        likeButtonElement = document.getElementById(likeButtonID);
        likeButtonElement.style.visibility='visible';

        // Display flip button
        flipButtonID = 'flipbutton' + i;
        flipButtonElement = document.getElementById(flipButtonID);
        flipButtonElement.style.visibility='visible';
        }
    }
     
    
   function expandImage(id){
    if (window.matchMedia('(min-width: 1000px)').matches) {
        // Computer screen
        id.style.width='600px';

      }else{
          // Phone screen
        id.style.width='600px';

      }

   }
   function shrinkImage(id){
        id.style.width='400px';

    }
    function expandEverySecondImage(){
        let i, imageElement;
        for(i = 2; i < nrOFimages; i = i+=3){
            imageElement = document.getElementById(i);
            imageElement.style.width='600px';
            imageObj[i].expand=true;
            imageObj[i].visibleLike=true;

            i++;
            imageElement = document.getElementById(i);
            imageElement.style.width='600px';
            imageObj[i].expand=true;
            imageObj[i].visibleLike=true;

        }
    }
   
// LIKE BUTTON
{

    function likeImage(buttonID){


        let logoID, disableButton;

        addLike(buttonID);


        // 1. Get child element of button (Like_logo) 

        logoID = document.getElementById(buttonID).children;

        // 2. Make Like_logo pressed (red)

        logoID[0].src = "images/liked.png";
        
        // 3. Make button "pressed"

        disableButton = document.getElementById(buttonID);
        disableButton.disabled = true;
                
    }


    function addLike(buttonID){

        let likeCount;

        if(buttonID.length == 7){
            imageObjNr = buttonID.slice(-1);
        }else{
            imageObjNr = buttonID.slice(-2);
        }

        imageObj[imageObjNr].likes++

        likeCount = document.getElementById(buttonID).children;
        likeCount[1].innerHTML = imageObj[imageObjNr].likes;


    }
    

}

// FLIP IMAGE TO SEE COMMENTS
{
    function displayComments(objNumber){
        let imageElement;

        if (imageObj[objNumber].visibleComments == false){

            dimImage(objNumber);
            showComments(objNumber);  
            imageObj[objNumber].lisenForFlipButton();          
        }
        else {
            brightenImage(objNumber);
        }
    }
    function dimImage(objNumber){
        imageElement = document.getElementById(objNumber);
        imageElement.style.opacity='0.2';
        imageObj[objNumber].visibleComments = true;
    }

    function brightenImage(objNumber){
        imageElement = document.getElementById(objNumber);
        imageElement.style.opacity='1';
        imageObj[objNumber].visibleComments = false;
    }
        
    function showComments(objNumber){
        let html, newhtml;

        html = '<div class="comments_box" id="comment_box_%nr%"><div class="comment">pirmas komentaras</div><div class="comment">antras labai labai labai labai labail labail ilgas komentaras</div></div>'
        
        newhtml = html.replace('%nr%', objNumber);

        document.querySelector('.pic_'+objNumber).innerHTML += newhtml;
    }

}
// Lisen for changes

function lisenForEvents(){
    for (let i = 1; i < nrOFimages ; i++){
        imageObj[i].lisenForLike();
        imageObj[i].lisenForFlipButton();
    }
}

function makeImageObj(n) {
    let instagramImage = {};

    for (let i = 1; i <= n; i++) {
        instagramImage[i] = new Instagram_image(i, 0, false);
    }
    return instagramImage;
}
lisenForEvents();

