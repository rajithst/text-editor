function iFrameOn() {
    textfield.document.designMode="On";
}

function bold() {
    textfield.document.execCommand('bold',false,null);
}

function underline() {
    textfield.document.execCommand('underline',false,null);
}

function italic() {
    textfield.document.execCommand('italic',false,null);
}

function fontsize() {
    var size = prompt('Enter a size 1-7','');
     textfield.document.execCommand('FontSize',false,size);
}


function forecolor() {
    var colors = prompt('Design a color or hexadecimal color code','');
    textfield.document.execCommand('ForeColor',false,colors);
}


function horizontal() {
    textfield.document.execCommand('inserthorizontalrule',false,null);
}


function unordered() {
    textfield.document.execCommand("InsertOrderdList",false,"newOL");
}


function ordered() {
    textfield.document.execCommand("InsertOrderdList",false,"newUL");
}

function link() {
    var link = prompt("Enter URL","http://");
    textfield.document.execCommand('CreateLink',false,link);
}

function unlink() {
    textfield.document.execCommand('Unlink',false,null);
}

function image() {
    var imagesrc = prompt("Enter image location",'');

    if(imagesrc != null){
    textfield.document.execCommand('insertimage',false,imagesrc);
    }
}

function submit_form(){
    var theForm = document.getElementById('myform');
    theForm.elements["mytextarea"].value = window.frames["textfield"].document.body.innerHTML;
    theForm.submit();
}
