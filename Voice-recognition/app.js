const btn = document.querySelector('.talk');
const content = document.querySelector('.content');


const greetings = [
    "I'm good how about you?"
]

const python = [
    "Python is the most used programming language in the world and it is as easy as english! Learn Python from today! Happy Coding"
]


const weather = ['Weather is fine', 'You need a tan']



const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = function () {
    console.log("Voice is activated!, you can speak to microphone!");
};

recognition.onresult = function(event){
    const current = event.resultIndex;

    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    readOutLoud(transcript);
};

// add the listener to the button

btn.addEventListener('click', () => {
    recognition.start();
});


function readOutLoud(message){
    const speech = new SpeechSynthesisUtterance();
    speech.text = "I don't know what you said?"
    
    if(message.includes('why Python is so popular')){
        const finalText = "Python is the most used programming language in the world and it is as easy as english! Learn Python from today! Happy Coding"
        speech.text = finalText;
    }
    
    if(message.includes('how are you')){
        const finalText = greetings[Math.floor(Math.random() * greetings.length)];
        speech.text = finalText;
    }
    
    if(message.includes('what are strings in Python')){
        const finalText = "Like many other popular programming languages, strings in Python are arrays of bytes representing unicode characters. However, Python does not have a character data type, a single character is simply a string with a length of 1. Square brackets can be used to access elements of the string.";
        speech.text = finalText;
    }

    if(message.includes('variables in Python')){
        const finalText = "Variables are like boxex in Python it can store values in it and used after many times... like a = 5 and print(a)"
        speech.text = finalText;
    }
    
    if(message.includes('Tejas')){
        const finalText = "Tejas is a Python Programmer also known as R N Tejas and will become a Python Developer soon he is very good at coding and he have created some cool applications like tic-tac-toe, BlackJack, Snake game and built his two portfolio websites and many more I think he will become a successfull developer"
        speech.text = finalText;
    }
    if(message.includes('programming language to learn')){
        const finalText = "I don't suggest you to learn any specific programming language because you have to choose yourself as what you want to become, if you want to become a software developer as fast as possible then I strongly suggest you to learn Python. if you want to become an IOS developer then learn swift and stick with it. if you want to become an Android develper then learn Java and Kotlin."
        speech.text = finalText;
    }
    if(message.includes('data types in Python')){
        const finalText = "There are mainly four Primitive Data Types in Python String that are any words, integers for example any whole number like 12, Floats are decimal point values like value of PI 3.14159..., and Bools short for Booleans that returns True or False depending on a condition that is passed to it"
        speech.text = finalText;
    }
    if(message.includes('the websites of Tejas')){
        const finalText = "R N Tejas have created 3 websites two of them are Portfolio websites and other one is about Animation RNTejas.github.io/info, RNTejas.github.io/profile"
        speech.text = finalText;
    }
    if(message.includes('how do you do')){
        const finalText = "I am Fine what about you?"
        speech.text = finalText;
    }

    if(message.includes('how to learn python')){
        const finalText = "as you know Python is the most used programming Language and that's why it has a large community so you can learn Python Easily and wherever like some courses on Udemy free books from PDFDrive.com and by reading some proffessional programmers blog and The important one Youtube channel some Youtube channels like Cleverprogrammer, Joma Tech, TechLead, Traversy Media, Tech With Tim and future Cotde with Tejas channel etc"
        speech.text = finalText;
    }
    if(message.includes('how to learn python')){
        const finalText = "as you know Python is the most used programming Language and that's why it has a large community so you can learn Python Easily and wherever like some courses on Udemy free books from PDFDrive.com and by reading some proffessional programmers blog and The important one Youtube channel some Youtube channels like Cleverprogrammer, Joma Tech, TechLead, Traversy Media, Tech With Tim and future Cotde with Tejas channel etc"
        speech.text = finalText;
    }
    if(message.includes('weather')){
        const finalText = "Today is Too cold"
        speech.text = finalText;
    }
    if(message.includes('best programmer')){
        const finalText = "There are many best developers out there but the creator of Python seems to be more intelligent than other because he have created an amazing Programming Lanuguage that supports Machine Learning Data Science and the syntax of it is a way too more easy!"
        speech.text = finalText;
    }
    if(message.includes('president of US')){
        const finalText = "he current president of US is Donald Trump."
        speech.text = finalText;
    }
    //speech.text = message;
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);
}
