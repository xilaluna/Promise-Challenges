/*
 *******************************************************************************
 * INSTRUCTIONS:
 * Follow the steps below and answer the discusssion questions that follow.
 *
 * 1. Read over the code that follows. In what order will the outputs "Step 1",
 *    "Step 2", and "Step 3" be printed? How do you know?
 *
 * I believe that the order of the steps will play out as this
 * step 1 , step 3, step 2. This is because this is an async function and the step 1 is within in it.
 * So while the timer is running the other steps are being logged then when the timer is done it will be displayed.
 *
 * 2. Run this code using `node challenge1.js`. In what order were the steps
 *    printed?
 *
 * The steps are in the order in which I predicted they would be in which is step 1, step 3, step 2.
 *
 *
 * 3. Change the delay time in the `snooze` function from 2000 ms to 0. In what
 *    order will the steps be printed now? Why? Re-run the code again to verify
 *    your expectation. Were you correct?
 *
 * I believe the order will be step1, step2, step 3, this is becasue the their is no time in the timer.
 * I guess I was wrong and it is in the same order as last time.
 *
 *******************************************************************************
 */

/* This function takes a callback as a parameter. */
function snooze(action) {
  setTimeout(function () {
    action()
  }, 0)
}

console.log("Step 1")

snooze(function () {
  console.log("Step 2")
  console.log("Async Action completed via callback")
})

console.log("Step 3")
