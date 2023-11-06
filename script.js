const menuBtn = document.querySelector('.menu-icon');
const navCont = document.querySelector('.navigation-cont');
const body = document.querySelector('body');

menuBtn.addEventListener('click', function (e) {
    e.preventDefault();

    navCont.classList.toggle('unhide-nav');
    
})

// body.addEventListener('click', function (e) {
//     e.preventDefault();

//     navCont.classList.remove('hide-nav');
    
// })

// catchAsync(func){
//     return function (req, res, next) {
//         func(req, res, next).catch(next);
//     }
// }
// function findNextSquare(sq) {
//     // Return the next square if sq is a perfect square, -1 otherwise
//     let nsq = sq;
//     let num;
//     if(Number.isInteger(Math.sqrt(sq))) {
//       nsq++;
//       while(!Number.isInteger(nsq)) {
//         nsq++;
//       }   
      
//       return nsq;
//     }
    
//     return -1;
// }

// console.log(findNextSquare(4));