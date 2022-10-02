var pic = new Array(3);

pic[0] = "linearrec.jpg";
pic[1] = "tactilerec.jpg";
pic[2] = "clickyrec.jpg";

var description = new Array(3);

description[0] ="Novelkeys Creams (linear)"
description[1] ="Holy Pandas (tactile)"
description[2] ="Kalih Box White (clicky)"

var link = new Array(3);

link[0] ="https://novelkeys.xyz/products/novelkeys-cream-switches";
link[1] ="https://drop.com/buy/drop-invyr-holy-panda-mechanical-switches";
link[2] ="https://novelkeys.xyz/products/kailh-box-switches?variant=3747940106280";

var counter = 1;
function change_picture() 
{
    var next_img = "Assets/Images/" + pic[counter];
    document.getElementById("picture").src = next_img;
    document.getElementById("description").innerHTML = description[counter];
    document.getElementById("link").href = link[counter];
    
    if( counter == pic.length - 1) 
    {
        counter = 0;
    } 
    else 
    {
        counter = counter + 1;
    }
}

var image_array = new Array(4);

image_array[0] = "back1.jpg";
image_array[1] = "back2.jpg";
image_array[2] = "back3.png";
image_array[3] = "back4.jpg";

var count = 0;
//KEY NOTE: if the image rotator is not working, it is most likely the image path. please check in browser console for the path error and resolve as needed.
function rotator()
{
    console.log('Here');
    setTimeout(rotator, 4000);
    document.body.style.backgroundImage = "url('../Project/Assets/Images/" + image_array[count] + "')";
    
    if( count == image_array.length - 1) 
    {
        count = 0;
    } 
    else 
    {
        count = count + 1;
    }
}

function validate ()
{
    if(document.regForm.firstname.value == "") 
    {
        document.getElementById("firstnameMessage").innerHTML ="(First Name can't be blank!!)";
        return false
    }

    if(document.regForm.lastname.value == "") 
    {
        document.getElementById("lastnameMessage").innerHTML ="(Last Name can't be blank!!)";
        return false
    }

    if(document.regForm.message.value == "") 
    {
        document.getElementById("textMessage").innerHTML ="(Message can't be blank!!)";
        return false
    }
    return true;
}