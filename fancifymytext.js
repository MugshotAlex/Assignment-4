function new_function()
{

//The font size will be increased to about 24
document.getElementById("text_id").style.fontSize="2em";

//See which radio buton is selected
//If the FancyShmancy radio button is selected, then we'll change the style in text box
//If the BoringBetty radio button is selected, then we'll change the font size back to normal
if(document.getElementById('fancy_radio_button').checked==true)

{

//The font will be set to bold
document.getElementById("text_id").style.fontWeight="bold";

document.getElementById("text_id").style.color="blue";

document.getElementById("text_id").style.textDecoration="underline";

}

if(document.getElementById('boring_radio_button').checked==true)

{

document.getElementById("text_id").style.fontWeight="normal";

}

}

function moo()

{

//We'll change the text to make it uppercase
var text=document.getElementById("text_id").value;

var uppercase_text=text.toUpperCase();

//We'll add the suffix Moo to the end of each sentence
//The end of the sentence will have a period
var split_text=uppercase_text.split(".");

suffixed_text=split_text.join("_Moo");

document.getElementById("text_id").value=suffixed_text;

}