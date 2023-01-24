


async function ABC() {
    let value = 1;
    if (value == 1) console.log("hello");
    else {
            throw new Error();

    }
}

ABC().catch(console.error)
