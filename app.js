//1
setTimeout(() => {
  const div1 = document.querySelector(`#first`);
  const p1  = document.createElement(`p`);
  p1.innerText = `Hi`;
  div1.append(p1);
}, 1000);

//2
setTimeout(() => {
    const div2 = document.querySelector(`#timeout-nesting`);
    const p2 = document.createElement(`p`);
    p2.innerText = `One`;
    div2.append(p2);
    setTimeout(() => {
        const p3 = document.createElement(`p`);
        p3.innerText = `Two`;
        div2.append(p3);
    }, 1000);
}, 2000);

//3a
const full = setInterval(() => {
    console.log(`second(s)`);
}, 1000);

//3b
const stop = document.querySelector(`button`);

stop.addEventListener(`click`, () => {
    clearInterval(full);
  });

//BONUS
//4

// let num = 12;
// const countdown = setInterval(() => {
//     const div3 = document.querySelector(`#countdown`);
//     const p3 = document.createElement(`p`);
//     p3.innerText = ``;
//     div3.append(p3);

//   if (num > 0){
//     console.log(num);
//   } else {
//     console.log(num);
//     clearInterval(countdown);
//   }
//   num--;
// }, 1000);