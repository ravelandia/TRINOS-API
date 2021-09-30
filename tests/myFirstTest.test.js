describe('block that groups together several related tests', () => {
  it('method which runs a test', () => { // description: what is expected to happen in the test
    // computation: executes a function/method
    // (which invokes the method you will write to make your test pass)
    const myVar = 2;
    // assertion: verifies that the result of your computation is what you expect it to be.
    expect(myVar).toBe(2);
  });
});
