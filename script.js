"use strict";

// Ստեղծել 1 Promise իրա resolve ու reject - ով

let details = {
    sugar: 10,
    coffee: 22
};


function addWater(n) {
    return new Promise(resolve => {
        let duration = parseInt(Math.random() * 500 * n);

        setTimeout(() => {
            resolve(`${n} cups of water added`);
        }, duration);
    });
}


function addCoffee(n) {
    return new Promise((resolve, reject) => {
        let duration = parseInt(Math.random() * 500 * n);

        setTimeout(() => {
            if (details.coffee - n >= 0) {
                resolve(`${n} spoons of coffee added`);
            } else {
                reject(`no enough coffee`);
            }
        }, duration);
    });
}


function addSugar(n) {
    return new Promise((resolve, reject) => {
        let duration = parseInt(Math.random() * 500 * n);

        setTimeout(() => {
            if (details.sugar - n >= 0) {
                resolve(`${n} spoons of sugar added`);
            } else {
                reject(`no enough sugar`);
            }
        }, duration);
    });
}


function setOnFire(){
    return new Promise((resolve => {
        setTimeout(() => {
            resolve(`Ready`);
        }, 3000);
    }));
}


function makeCoffee (n) {
    addWater(n).then(res => {
            console.log(res);
            return addCoffee(n);
        }).then(res => {
            console.log(res); 
            return addSugar(n);
        }).then(res => {
            console.log(res);
            return setOnFire();
        }).then(res => {
            console.log(`${n} cups coffee are ${res}, Enjoy ~~~`);
        }).catch((problem) => {
            console.log(problem);
        }).finally(() => {
            console.log(`Drink, then wash your cups`);
        });
}

makeCoffee(3);

// ստեղծել ֆունկցիա, որ Promise.race - ի ժամանակ կանսոլում տպի էն item - ը որը առաջինն ա աշխատել
const time = ms => {
    return new Promise(resolve => {
        setTimeout(() => resolve(ms), ms);
    });
};

Promise.race([time(5000), time(4000), time(7000), time(500), time(2000), time(300)])
.then((value) => console.log(value));