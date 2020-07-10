
class Instagram_image {
    constructor(nr, likes, expand, visibleLike) {
        this.nr = nr,
        this.likes = likes;
        this.expand = expand,
        this.visibleLike = false
    }
}
const nrOFimages = 90;
imageObj = makeImageObj(nrOFimages);

// DISPLAY PICTURES
{
    let html, newHtml;

    html =  '<div class="pic_%nr%"><div class="column"><img class="img" id="%nr%" src="photo/%nr%.jpg"><button id="button%nr%" class="like_button" type="button"><img class="like_logo" src="images/like.png">&nbsp;<div></div></button></div></div>'

    // Hard coded number on images (to change)
    for(i = 1; i <= nrOFimages; i++){

        newHtml = html.replace('%nr%', i);
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

        let picElement, picElementChange, likeButtonElement, likeButtonID, eventID;


        // Check if pressed on picture
        if(event.target.id > 0 && event.target.id <= nrOFimages){
            picElement = document.getElementById(event.target.id);


            // Make like button visible

            // likeButtonID = 'button' + event.target.id;
            // likeButtonElement = document.getElementById(likeButtonID);
            // likeButtonElement.style.visibility='visible';

            // // Add event listener to like button

            // likeButtonElement.addEventListener('click' ,function(){
            //     likeImage(likeButtonID);
            // });


            eventID = event.target.id;
            eventID = parseInt(eventID);

            //Check if expand == true
            if(isEven(eventID) && imageObj[eventID].expand == true){

                shrinkImage(picElement);
                imageObj[eventID].expand=false;
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
        else {
            console.log(event.target);
        }
    };
    function checkIfDisplayLikeButton(){
        let i;

        for(i=1; i < nrOFimages; i++){
            if(imageObj[i].visibleLike == true){
                displayLikeButton(i);

            // likeButtonElement.addEventListener('click' ,function(){
            //     likeImage(likeButtonID);
            // });

            }
            else if(imageObj[i].visibleLike == false){
                hideLikeButton(i);
            }
        }
    }

    function isEven(n) {
        return n % 2 == 0;
    }
    function hideLikeButton(i){
        likeButtonID = 'button' + i;
        likeButtonElement = document.getElementById(likeButtonID);
        likeButtonElement.style.visibility='hidden';
    }
    function displayLikeButton(i){
        likeButtonID = 'button' + i;
        likeButtonElement = document.getElementById(likeButtonID);
        likeButtonElement.style.visibility='visible';
        }
    }
     
    
   function expandImage(id){
    if (window.matchMedia('(min-width: 1000px)').matches) {

        // Computer screen
        id.style.width='600px';

      }else{

          // Phone screen
        id.style.width='1300px';

      }
       id.style.border='6px solid rgb(125, 125, 125)';

   }
   function shrinkImage(id){
        id.style.width='400px';
        id.style.border='6px solid rgb(126, 116, 116)';

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

        let logoID, disableButton, imageObj, imageObjNr;

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

}
function makeImageObj(n) {
    let instagramImage = {};

    for (let i = 1; i <= n; i++) {
        instagramImage[i] = new Instagram_image(i, 0, false)
    }
    return instagramImage;
}
