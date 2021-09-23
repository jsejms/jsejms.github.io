var canvas = document.querySelector('.seance-canvas'), ctx = canvas.getContext("2d");

var imagesEl = [].slice.call(document.querySelectorAll('.seance-image'));

var seanceImage = new Image(500, 100);
var items = [];
var imagesReady = 0;
seanceImage.onload = async function () {
    await ctx.drawImage(seanceImage, 500, 100);
    console.log("imageloaded")
};
seanceImage.src = imagesEl[0].src;
items.push({ type: 'image', value: imagesEl[0], options: imageOptions });
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

var myPieces = new Pieces(imageOptions);
myPieces.showPieces();

// myPieces.showPieces({items: imagesEl, ignore: ['tx'], singly: true, update: (anim) => {

// var piece = anim.animatables[0].target;
// var ty = piece.ty;
// anime.remove(piece);
// anime({
//     targets: piece,
//     ty: piece.h_ty < 300
//         ? [{value: ty + 10, duration: 1000}, {value: ty - 10, duration: 2000}, {value: ty, duration: 1000}]
//         : [{value: ty - 10, duration: 1000}, {value: ty + 10, duration: 2000}, {value: ty, duration: 1000}],
//     duration: 2000,
//     easing: 'linear',
//     loop: true
// });
// }});


anime({
    targets: '.seance-event-section',
    translateY: 80,
    easing: 'easeOutQuart'
});

anime({
    targets: 'div',
    translateY: 40,
    easing: 'easeOutQuart'
});