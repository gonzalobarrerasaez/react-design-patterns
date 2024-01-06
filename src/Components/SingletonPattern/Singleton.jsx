const Singleton = () => {
  let instance = null;
  let counter = 0;

  function print() {
    console.log("Número de instancias", counter);
  }
  function init() {
    counter++;
    return {};
  }

  function createInstance() {
    if (instance == null) {
      instance = init();
    }
    return instance;
  }

  function closeInstance() {
    counter--;
    instance = null;
  }

  return {
    createInstance: createInstance,
    closeInstance: closeInstance,
    print: print,
  };
};

let foo = Singleton();

foo.print(); // Prints 0
foo.createInstance();
foo.print(); // Prints 1
foo.createInstance();
foo.print(); // Still prints 1
foo.createInstance();
foo.print(); // Still 1
foo.closeInstance();
foo.print(); // Prints 0;

export default Singleton;
