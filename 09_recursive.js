// Recursion :when function call its self
// other wise it will get called for infinite time
//  if a function call its self then there must be an end point

function demo(num) {
  if (num == 0) {
    return;
  }
  console.log("Its called demo function" + num);
  demo(--num);
}
demo(2);
