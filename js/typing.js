var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Olá a todos!')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Meu nome é Danilo e sou Desenvolvedor Web')
    .pauseFor(2500)
    .deleteChars(7)
    .typeString('Estudante!')
    .start();