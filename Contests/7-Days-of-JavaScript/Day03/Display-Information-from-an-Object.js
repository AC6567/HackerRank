function displayInformation() {
     // var library is defined, use it to print the information
    for(o in library){
        var obj = library[o];
        if(!obj.readingStatus)  console.log("You still need to read '" + obj.title + "' by " + obj.author + ".");
        else    console.log("Already read '" + obj.title + "' by " + obj.author + ".");
    }
}

// tail starts here
var library = [
    {
        title: 'Bill Gates',
        author: 'The Road Ahead',
        readingStatus: true
    },
    {
        title: 'Steve Jobs',
        author: 'Walter Isaacson',
        readingStatus: true
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        readingStatus: false
    }
];

displayInformation();
