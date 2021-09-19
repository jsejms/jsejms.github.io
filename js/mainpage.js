var canvas = document.querySelector('.seance-canvas');
// var image = document.querySelectorAll('.seance-image');
var items = [];
var seanceImage = new Image(600, 300);
seanceImage.src = 'img/technoisthedevil.png';
items.push({type: 'image', value: seanceImage});
console.log(items);
var imageOptions = {
    canvas: canvas,
    // items: items,
    image: seanceImage,
    x: 'centerAll',
    y: 'centerAll',
    // text: 'Livecast',
    fontSize: 80,
    backgroundColor: "#00000",
    // padding: '15 20 10 20',
    color: "#ffff",
    ty: function () { return Pieces.random(-100, 100); },
    piecesWidth: function () { return Pieces.random(20, 150); },
    extraSpacing: { extraX: 100, extraY: 400 },
    angle: 60,
    animation: {
        duration: function () { return Pieces.random(1500, 2000); },
        easing: 'easeOutQuint'
    },
};
console.log(seanceImage);


// var piece = seanceImage
// var ty = piece.ty;
// anime({
//     targets: piece,
//     ty: function () {
//         return [{ value: ty + 10, duration: 1000 }, { value: ty - 10, duration: 2000 }, { value: ty, duration: 1000 }]
//     },
//     duration: 2000,
//     easing: 'linear',
//     loop: true
// });

var myPieces = new Pieces(imageOptions);
myPieces.showPieces();
console.log(imageOptions);