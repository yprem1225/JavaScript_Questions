function identity<T>(value: T): T {
    return value;
}

console.log(identity<string>("Hello"));   // Hello
console.log(identity<number>(100));       // 100
console.log(identity<boolean>(true));     // true