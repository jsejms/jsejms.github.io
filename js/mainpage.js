var canvas = document.querySelector('.seance-canvas'), ctx = canvas.getContext("2d");

var imagesEl = [].slice.call(document.querySelectorAll('.seance-image'));

var items = [];
var imagesReady = 0;
var seanceImage = new Image(500, 100);
seanceImage.onload = async function () {
    await ctx.drawImage(seanceImage, 500, 100);
};
seanceImage.src = imagesEl[0].src;
items.push({ type: 'image', value: imagesEl[0], options: imageOptions });

var imageOptions = {
    canvas: canvas,
    items: items,
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

var myPieces = new Pieces(imageOptions) ;
myPieces.showPieces();

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