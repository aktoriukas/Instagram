// DISPLAY PICTURES

class Instagram_image {
    constructor(nr, likes, expand) {
        this.nr = nr,
        this.likes = likes;
        this.expand = expand;
    }
}
imageObj = makeImageObj(90);


{
    let html, newHtml;

    html =  '<div class="pic_%nr%"><div class="column"><img class="img" id="%nr%" src="photo/%nr%.jpg"><button id="button%nr%" class="like_button" type="button"><img class="like_logo" src="images/like.png">&nbsp;<div></div></button></div></div>'

    // Hard coded number on images (to change)
    for(i = 1; i <= 90; i++){

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
   document.querySelector('.images').addEventListener('click', selectImage);


    function selectImage(event) {

        let picID, buttonID, buttonIDLike, eventID;

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


            eventID = event.target.id;

            //Check if expand == true
            if(isEven(eventID)){
                if (imageObj[eventID].expand == false){
                    expandImage(picID);
                    imageObj[eventID].expand = true;
                }else{
                    shrinkImage(picID);
                    buttonID.style.visibility='hidden';
                    imageObj[eventID].expand = false;
                    }
    
                } 
            }else{

            }      
        };
    };

    function isEven(n) {
        return n % 2 == 0;
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
        for(i = 2; i < 90; i = i+=3){
            imageElement = document.getElementById(i);
            imageElement.style.width='600px';
            imageObj[i].expand=true;
            i++;
            imageElement = document.getElementById(i);
            imageElement.style.width='600px';
            imageObj[i].expand=true;
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
