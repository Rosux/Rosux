class Girlfriend {
    constructor() {
        this.names = [
            "Olivia",
            "Emma",
            "Charlotte",
            "Amelia",
            "Ava",
            "Sophia",
            "Isabella",
            "Mia",
            "Ella"
        ];
        this.name = this.names[Math.floor(Math.random()*this.names.length)];
    }
    get compliment() {
        console.log(this.say("thank you"));
    }
    get kiss() {
        console.log(this.say("mwah ♥"));
    }
    get breakup(){
        console.log(this.say("fuck you dont talk to me!"));
        delete this.Girlfriend;
    }
    say(message){
        return this.name + ": " + message;
    }
}
// const gf = new Girlfriend;
// gf.compliment;
// gf.kiss;
// gf.breakup;

//////////////////////////// IGNORE THIS UP HERE PLEASE ////////////////////////////

var hi = new Audio('audio/hi.wav');
// var audio = [
//     new Audio('audio/ex.wav'),
//     new Audio('audio/ex2.wav')
// ]
// function getRandomClip(){
//     return audio[Math.floor(Math.random() * audio.length)];
// }

for(i=0; i < document.getElementsByClassName("cube-face").length; i++){
    document.getElementsByClassName("cube-face")[i].addEventListener("click", (e) => {
        hi.play();
    });
}