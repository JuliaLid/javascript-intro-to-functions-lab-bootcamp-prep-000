var uppercase
var lowercase

function shout(string){
  uppercase = string.toUpperCase();
    return uppercase;
};

function whisper(string){
  lowercase = string.toLowerCase();
  string = lowercase;
  return lowercase;
};

function logShout(string){
  lowercase = string.toLowerCase()
  string = lowercase;
  console.log(lowercase);
};

function sayHiToGrandma(string){
  if (string.toLowerCase()===string){
    return 'I can\'t hear you!';
  };
  if (string.toUpperCase()===string){
    return 'YES INDEED!';
  };
  if (string === 'I love you, Granma.'){
    return 'I love you,too.';
  }
}
