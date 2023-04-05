let val = new Promise((resolve, reject) => {
    let cake = 3;
    let health = prompt("Hey Kayo! are you fine?");
    if (health == "yes") {
        resolve("Nice Kayo!Please Make " + cake + " Cakes for party");
    }
    else {
        reject("Ohh! get well soon! Please make " + cake + " Cakes for Party");
    }
});

// call resolve data
val.then(data => {
    alert(data)
})

// call reject data
val.catch(err => {
    alert(err)
})
    .finally(func1 => {
        alert("Happy Birthday!")
    })