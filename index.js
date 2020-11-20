// Currying with variable parameters //
const add = n => {
    let fn = x => add(n + x);
    fn.valueOf = () => n;
    return fn;
};
console.log(+add(1)(2)(4));
