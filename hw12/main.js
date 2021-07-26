





/* const date = new Date();
console.log(date)
console.dir(+date);
// timestamp 
const date2 = new Date(2020, 0, 1, 1, 1, 1);
console.log(date2);
console.log(date2.getTime());
console.log(Date.now());

// ISO 'YYYY-MM-DD...'

const date3 = new Date('2000-12');
date3.setFullYear(1999)
console.log(date3.toLocaleString('ua', {
    year: 'numeric',
    month: 'long'
}))

console.log(Date.parse('2000-12'))


function isAdult(birthday){
    const holdDate = new Date();
    holdDate.setFullYear(holdDate.getFullYear() -18);
    return holdDate > Date.parse(birthday);
}

console.log(isAdult('2015-08-22')) */

/* function h() {
    console.log('hello!');
};

const interval = setInterval(h, 1000);

setTimeout(() => {
    clearInterval(interval);
}, 5000); */

/* console.log(1);
setTimeout(() => {
    console.log(2);
}, 1000);
console.log(3); */

/* function createTimer(){
  const timerElement = document.createElement('h2');
  let time = 70;
  const timerId = setInterval(() => {
    --time
    const min = Math.floor(time / 60);
    const sec = time - min * 60;
    timerElement.innerText = ('0' + min).substr(-2) + ':' + ('0' + sec).substr(-2);
    if(time === 0) {
      clearInterval(timerId);
      console.log('done')
    }
  }, 1000);
  document.body.append(timerElement)
}

createTimer() */



// 10 push-ups 
// 5 sec rest

/* doPushups(10, ()=>{
  rest(() => {
    doPushups(9, () => {
      rest(() => {
        doPushups(8, () => {
          rest(() => {
            doPushups(7, () => {
              console.log('You did it')
            })
          })
        })
      })
    })
  })
}) */


/* const test = new Promise((resolve) => {
  setTimeout(() => {
    resolve();
    console.log('promise is done')
  }, 4000);
})
console.log(test) */

// Promise I will use with https requests

/* test.then(()=>{
  console.log('DONE')
}) */

/* function doPushups(n) {
  if(n === 0) {
    return Promise.resolve('success');
  }
  if(n > 1000) {
    return Promise.reject();
  }
  return new Promise((finish, reject) => {
    const giveUp = false;
    const giveUpBtn = document.createElement('button');
    giveUpBtn.innerText = 'Stop';
    giveUpBtn.addEventListener('click', () => {
      console.log('I give up');
      reject();
      console.log(this);
    })
    document.body.append(giveUpBtn)
    setTimeout(() => {
      if (!giveUp) {
        console.log(n + ' pushups done' + new Date().toLocaleString());
      }
      giveUpBtn.remove()
      finish();
    }, n * 200);
  })
}

function rest() {
  return new Promise((finish) => {
    setTimeout(() => {
      console.log('rest is done' + Date.now().toLocaleString());
      finish('rest finished');
    }, 2000);
  })
} */

/* doPushups(30).then(() => {
  console.log('success');
}).catch(() => {
  console.log('reject')
}) */
/* doPushups(10).then(rest)
  .then(()=>doPushups(9))
  .then(rest)
  .then(()=> doPushups(8))
  .then(rest)
  .then(()=> doPushups(7))
  .then(() => {
  console.log('My trainig is finished!')
}).catch((err) => {
  console.log('reject', err)
}) */

/* doPushups(0).then((mes) => {
  console.log('done', mes)
}).catch(() => console.log('could not make it')) */

/* const usrProm1 = doPushups(20);
const usrProm2 = doPushups(10);

const promisesArr = [usrProm1, usrProm2];

Promise.all([usrProm1, usrProm2]).then(() => console.log('all users finished'));
Promise.race(promisesArr).then(() => console.log('someone is finished')); */


/* async function cursorTrain() {
  await doPushups(10);
  await rest();
  await doPushups(9);
  await rest();
  await doPushups(8);
  await rest();
  await doPushups(7);
  await rest();
  await doPushups(6);
  await rest().finally(()=> console.log('Huh I am really exasted'));
} */

/* cursorTrain();

async function groupTrain() {
  const usrProm1 = doPushups(25);
  const usrProm2 = doPushups(10);

  await usrProm1;
  await usrProm2;
  console.log('all users finished');
} */

/* groupTrain();

const test = async () => {
  try {
    await doPushups(30);
  } catch (err){
    console.log('err')
  } finally {
    loading = false;
    console.log('finally')
  }
}

test();
 */

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('foo')
  }, 200);
})

myPromise
  .then(value => {
    return сonsole.log(value + 'and bar')
  })
  .then(value => {
    return сonsole.log(value + 'and banan')
  })
  .catch(err => {
    console.log(err)})

// https - requests - wrapper in try/catch







































