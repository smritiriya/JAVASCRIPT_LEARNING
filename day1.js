


async function ABC() {
    let value = 1;
    if (value == 1) console.log("hello");
    else {
    ABC().then("error occured").catch(console.error);

    }
}

