function changeImage(a) {
	//alert('Inside changeImage');
    document.getElementById("doll_image").src=a;
}

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}

/*function addPants(a) {
	alert('Inside Add Pants');
    //document.getElementById("doll_image").innerHTML = '<img src="images/pant1.png"/>;'>;
    var img = document.createElement('img')
	img.src = a;
    document.getElementById("doll_container").appendChild(img);
}*/