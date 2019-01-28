async function func2(_, {arg1}) {
  console.log({arg1})
  return 1;
}

async function func1(_, {arg1, arg2}) {
  console.log({arg1, arg2})
  return 2;
}

async function func2Dump(...args) {
  console.log(args)
  return 1;
}

async function func1Dump(...args) {
  console.log(args)
  return 2;
}

export default {
    Mutation: {
      func2: (arg1) => func2(arg1),
      func1: (arg1, arg2) => func1(arg1, arg2),

      func2Dump: (arg1) => func2Dump(arg1),
      func1Dump: (arg1, arg2) => func1Dump(arg1, arg2),
      },
  };