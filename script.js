// 1. Say you have a function, primitiveMultiply, that in 20% of cases multiplies two
// numbers and in the other 80% of cases raises an exception of type
// MultiplicatorUnitFailure. Write a function that wraps this clunky function and just
// keeps trying until a call succeeds, after which it returns the result. Make sure you
// handle only the exceptions you are trying to handle.
// Example Output:
// console.log(reliableMultiply(8, 8)); // outputs 64

class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(a, b) {
  if (Math.random() < 0.2) {
    return a * b;
  } else {
    throw new MultiplicatorUnitFailure("Klunk");
  }
}

function reliableMultiply(a, b) {
  // Your code here.
  class MultiplicatorUnitFailure extends Error {}

// The primitiveMultiply function is unchanged and provided as part of the starter code.

function reliableMultiply(a, b) {
  // Begin an infinite loop to repeatedly attempt the multiplication.
  while (true) {
    try {
      // Try to call primitiveMultiply with the given arguments.
      // If it succeeds, the result is returned and the loop exits.
      return primitiveMultiply(a, b);
    } catch (error) {
      // Check if the error is specifically a MultiplicatorUnitFailure.
      if (!(error instanceof MultiplicatorUnitFailure)) {
        // If the error is of a different type, rethrow it.
        // This ensures unexpected errors are not suppressed.
        throw error;
      }
      // If the error is a MultiplicatorUnitFailure, the loop continues.
      // No action is taken because we want to retry the multiplication.
    }
  }
}

// Example Output
// Call reliableMultiply with two numbers, 8 and 8.
// The function retries until it successfully returns the product.
console.log(reliableMultiply(8, 8)); // Expected output: 64
}
