var input = {
    text : function(){return document.getElementById("input").value;},
    clear : function(){document.getElementById("input").value = "";},
    writeNoParse : function(){document.getElementById("outText").innerHTML+="<br>"+this.text();}
}

function getInput(event){
    var x = event.which || event.keyCode;
    if(x == 13){
        input.writeNoParse();
        input.clear();
    }
}

function parseInput(){
    
}

function changeRoomImg(newRoom, char){
    document.getElementById("roomImg").style.backgroundImage = img(char+"_ph")+","+img(newRoom)+","+img("ph");
}

function img(imgName){
    return "url('../Bunny Wizard/img/"+imgName+".png')"
}