// Immediate Invoked Function Expression(IIFE)
// jo function immediately execute ho jaye or we can say that
// We use iife to encounter the problem/ pollution created by global scope variable.

// named iife
(function chai(){   
    console.log(`DB connected`);
})();


// un-named iife
( (name) => {
    console.log(`DB connected to ${name}`);
})('Sahil');