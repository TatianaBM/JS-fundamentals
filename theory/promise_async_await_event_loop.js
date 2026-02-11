// js runs one peice of code at a type (synchronous)
// however it can handle async tasks using callbacks, promises and async/await


//**********************************************************************************callbacks
function doAsynckTask(callback) {
    setTimeout(() => {
        console.log('task completed')
        callback()
    }, 2000);
}

doAsynckTask(() => {
    console.log('Callback executed')
})

doAsynckTask(() => {
    console.log('Callback executed')
    doAsynckTask(() => {
        console.log('Another allback executed')
    })
})               // this will lead to 'callback hell'


//*************************************************************************************Promise
// to solve a problem of callback hell Promises we created
// Promise is object
// it has three states: 
// **** pending initial state , we do not know the result is promise yet
// **** fulfilled , when the promise is resolved successfully 
// **** rejected , when the promise was rejected

// example 1
let p = new Promise((resolve, reject) => {
    let sum = 1+5
    if(sum == 6) {
        resolve('success')
    } else {
        reject('failed')
    }  
})
p.then(message => {
    console.log('this message is from then ' + message)
}).catch(message => console.log('and this message is from catch ' + message))

// example 2
const myAsyckTask = new Promise((resolve, reject) => {
    resolve('my task is completed')
})

myAsyckTask.then(result => {
    console.log(result)
}).catch(error => {
    console.log(error)
})

// example 3
let userLeft = true
let userWatchingCatMeme = true
function watchTutorialPromise () {
    return new Promise((resolve, reject) => {
    if(userLeft){
        reject({name: 'user left', message: 'sad...'})
    }
    else if (userWatchingCatMeme){
        reject({name: 'user is watching Cat Meme', message: 'ok'})
    }
    else{
        resolve('thump up and subscribe')
    }
})
}
watchTutorialPromise().then(message => {
    console.log(message)
}).catch(err => console.log(err))

//**************************promise API , it has four static methods; they all return promise!!!!!

// Promise.all() - it accepts an array of promises, and returns a promise with fulfilled promises or an error if promise was rejected
const video1Promise = new Promise(resolve => resolve('just made video 1'))
const video2Promise = new Promise(resolve => resolve('just made video 2'))
const video3Promise = new Promise(resolve => resolve('just made video 3'))
const video4Promise = new Promise(reject => reject('i failed to make a video'))
// return all promises as it waits for all promises to be completed
Promise.all([video1Promise,video2Promise,video3Promise]).then(messages => console.log(messages))
Promise.all([video1Promise,video2Promise,video4Promise]).then(messages => console.log(messages))


// Promise.allSettled() -  it accepts an array of promises and returns a promise with all results (fulfilled and rejected)
Promise.allSettled([video3Promise,video1Promise,video2Promise,video4Promise]).then(result => console.log(result))

//example
const p1 = Promise.resolve(42)
const p2 = 42
const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(42)
    }, 1000)
})
// this function does not work!!!!!!!!!!!!!!!!!!!!
function promiseAllSettled(iterable) {
    return new Promise(resolve => {
        const results = new Array(iterable.lenght)
        let pending = iterable.lenght

        if( pending === 0) {
            resolve(results)
            return
        } 

        iterable.forEach(async (promise, index) => {
            try {
                const promiseResult = await promise
                results[index] = {
                    status: 'fulfilled',
                    promiseResult
                }
            } catch (error) {
                results[index] = {
                    status: 'rejected',
                    reason: error
                }
            }

            pending -= 1

            if (pending === 0) {
                resolve(results)
            }
        })
    })
}
promiseAllSettled([p1,p2,p3]).then(console.log)  



// Promise.any() -  it accepts an array of promises and returns the result of the first completed promise 
const promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'i am done in 1 sec')
})
const promise2 = new Promise(resolve => {
    setTimeout(resolve, 2000, 'i am done in 1 sec')
})
const promise3 = new Promise((reject) => {
   setTimeout(reject, 300, 'ooopps rejected')
})
Promise.any([promise1, promise2, promise3]).then(result => console.log(result))

// Promise.race() -  it accepts an array of promises and returns the result of the first completed promise or an error returns (the promise that got resolved first)
Promise.race([video4Promise,video2Promise,video1Promise]).then(result=> console.log(result))
Promise.race([promise3,promise2,promise1]).then(result => console.log(result))


//**********************************************************************************async /await
// it is a syntax : we write asyck code that looks like synchronous
// async/await works exactly as promises but code looks cleaner
// less chaining


// we use try catch to process eroors. inside of try block we put the code that could potentially fail
function makeACall(location) {
    console.log(`I am going to make a call to ${location}`)
    return new Promise((resolve, reject) => {
        if( location === 'Google') {
            resolve('I am calling Google')
        } else {
            reject('But I can only call Google')
        }
    })
}
function makeNextCall(response) {
    return new Promise((resolve, reject) => {
        console.log('Processing response')
        resolve(`some extra info + ${response}`)
    })
}
// makeACall('Googleu').then(message => {
//     console.log('i got response')
//     return makeNextCall(message)
// }).then(message => {
//     console.log(message)
// }).catch(message => {
//     console.log(message)
// })

// instead we can create a function and put awaiting code inside of it

async function doIt() {
    try {
        const response = await makeACall('Gofogle')
        console.log('response received  - i am being executed after the first request is finished')
        const result = await makeNextCall(response)
        console.log(result)
    } catch (err) {
        console.log(err)
    } 
}

doIt()

//**********************************************************************event loop
// event loop concept:
//  1. Call Stack - where all the current functions are being executed. When the function is called it is being added to the call stack. 
//     When the function is executed it is being deleted from the call stack
//  2. Web API - browser gives us API for creating web apps( dom api, storage api, xmlhttp request and other)
//  3. Task queue - this is a queue, to which web api send a task , eg, timeouts, intervals, event lisners
//  4. Microtask queue - for example Promises, function queueMicroTask(), MutationObserver, IntersectionObserver

// 1. first all synchronous tasks will be executed, 
// 2. then all tasks from microqueue, till microqueue is empty
// 3. then one macro task will be executed
// 4. rendering browser
// 5. start from 1

// ******************************************event loop exercise
// what will be printed to console 
console.log('start');
setTimeout(() => {
    console.log('macrotask');
}, 5000);
Promise.resolve()
    .then(() => console.log('microtask'))
    .then(() => console.log('microtask1'));
console.log('end')


// what will be printed to console 
console.log(1);   
setTimeout(() => console.log(2));   
Promise.resolve().then(() => console.log(3));   
Promise.resolve().then(() => setTimeout(() => console.log(4)));   
Promise.resolve().then(() => console.log(5));   
setTimeout(() => console.log(6));
console.log(7)

// what will be printed to console 
const myFn = async () => {
    console.log(1)
    setTimeout(() => console.log(6))
    Promise.resolve().then(() => console.log(4))
    console.log(2)
    await Promise.resolve() // since we are planning to resolve this promise, code below will be added to micro task queue
    console.log(5)   
}
myFn()
console.log(3)
// call stack 
// micro queue () => console.log(4) console.log(5)
// task queue () => console.log(6)

// console: 1  2  3 4 5 6


// what will be printed to console 
console.log('A');
setTimeout(() => {
  console.log('B');
}, 0);
Promise.resolve().then(() => {
  console.log('C'); 
});
console.log('D');

// what will be printed to console 
Promise.resolve().then(() => {
  console.log('A');
  Promise.resolve().then(() => console.log('B'));
});
console.log('C')

// what will be printed to console 
setTimeout(() => console.log('A'), 0);
Promise.resolve().then(() => console.log('B'));
setTimeout(() => console.log('C'), 0);
Promise.resolve().then(() => console.log('D'));

// call stack
// micro console.log('B') console.log('D')
// macro console.log('A') console.log('C')

// c d a c 

// what will be printed to console 
console.log('A');
setTimeout(() => {
  console.log('B');
  Promise.resolve().then(() => {
    console.log('C');
  });
}, 0);
Promise.resolve().then(() => {
  console.log('D');
  setTimeout(() => {
    console.log('E');
  }, 0);
});
console.log('F')

// what will be printed to console 
console.log('1');
setTimeout(() => {
  console.log('2');
  Promise.resolve().then(() => {
    console.log('3');
  }).then(() => {
    console.log('4');
  });
}, 0);
Promise.resolve().then(() => {
  console.log('5');
}).then(() => {
  console.log('6');
});
console.log('7')

// what will be printed to console 
console.log('Start');
setTimeout(() => {
  console.log('Timeout 1');
}, 0);
Promise.resolve().then(() => {
  console.log('Promise 1');
  setTimeout(() => {
    console.log('Timeout 2');
  }, 0);
  return Promise.resolve();
}).then(() => {
  console.log('Promise 2');
});
console.log('End')


// what will be printed to console 
setTimeout(() => {
  console.log('Timer 1');
  Promise.resolve().then(() => {
    console.log('Microtask 1');
    Promise.resolve().then(() => {
      console.log('Microtask 2');
    });
  });
}, 0);
Promise.resolve().then(() => {
  console.log('Microtask 3');
});
console.log('Main Task');


// what will be printed to console  
console.log('Start')
setTimeout(() => {
  console.log('Timeout 1');
  Promise.resolve().then(() => {
    console.log('Promise 1');
  }).then(() => {
    console.log('Promise 2');
  });
}, 0);
Promise.resolve().then(() => {
  console.log('Promise 3');
  setTimeout(() => {
    console.log('Timeout 2');
  }, 0);
  return Promise.resolve();
}).then(() => {
  console.log('Promise 4');
});
console.log('End')


