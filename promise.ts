let a = new Promise((resolve, reject) => {
    resolve(true);
});

a.then(() => {
    console.log("success");
}).catch((err) => console.log(err)).finally(() => console.log("done"));

