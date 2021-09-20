var canvas = document.querySelector('.seance-canvas'), ctx = canvas.getContext("2d");
canvas.width = canvas.getBoundingClientRect().width;
canvas.height = canvas.getBoundingClientRect().height;
    
var seanceImage = new Image(500, 100);
var items = [];
var imagesReady = 0;
seanceImage.onload = function () {
    ctx.drawImage(seanceImage, 500, 100);
};
seanceImage.src = 'img/seanceghost2.png';
items.push({ type: 'image', value: seanceImage });
console.log(items);

var imageOptions = {
    canvas: canvas,
    items: items,
    // image: seanceImage,
    x: 'centerAll',
    y: 'centerAll',
    piecesSpacing: 6,
    text: 'seance_shows',
    fontSize: 45,
    backgroundColor: "rgba(0, 0, 0, 0.9)",
    color: "#ffff",
    ty: function () { return Pieces.random(-350, 300); },
    piecesWidth: function () { return Pieces.random(20, 150); },
    extraSpacing: { extraX: 100, extraY: 200 },
    angle: 60,
    debug: false,
    animation: {
        duration: function () { return Pieces.random(1500, 2000); },
        easing: 'easeOutQuint'
    },
};
console.log(seanceImage);



// var piece = items;
// var ty = piece.ty;
// anime({
//     targets: items,
//     ty: function () {
//         return [{ value: ty + 10, duration: 1000 }, { value: ty - 10, duration: 2000 }, { value: ty, duration: 1000 }]
//     },
//     duration: 2000,
//     easing: 'linear',
//     loop: true
// });


var myPieces = new Pieces(imageOptions);

myPieces.showPieces()
console.log(imageOptions);

anime({
    targets: '.seance-event-section',
    translateY: 90,
    easing: 'easeOutQuart'
});

anime({
    targets: 'div',
    translateY: 50,
    easing: 'easeOutQuart'
});