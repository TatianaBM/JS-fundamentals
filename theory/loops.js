//******************break and continue
// break stops the loop
console.log('before loop')
for (let i = 0; i <= 10; i++) {
    console.log(i)
    break
    console.log('wont be excetuted')
}
console.log('after loop')

// continue moves to the next iteration
console.log('before loop with continue')
for (let i = 0; i <= 10; i++) {
    console.log(i)
    console.log('before continue')
    continue
    console.log('wont be excetuted')
}
console.log('after loop with continue')