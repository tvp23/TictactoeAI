
//creating playing squares
for(i=0;i<9;i++){
    var div = document.createElement("div");
    div.innerText = "";
    div.setAttribute('id', i);
    div.setAttribute('class', 'playingsquare');
    document.getElementById("gamecon").appendChild(div);

    //make move
    document.getElementById(i).addEventListener('click', function(){makemove(this.id)});
}

//currentplayer
var currentplayer = 0


function makemove(iddiv){

    var player = document.createElement('img');
    player.setAttribute('id', 'move')
    player.setAttribute('src', 'img/cross.png');        //needs dynamic imgtag
    player.setAttribute('width', '250');
    player.setAttribute('height', '250');
    document.getElementById(iddiv).appendChild(player);
}