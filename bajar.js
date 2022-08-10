function bajarCalculator(potatoQuantity, tomatooQuantity, bananaQuantity, appleQuantity){
    const perKgPotato = 25;
    const perKgTomatoo = 42;
    const perDojonBanana = 120;
    const perKgApple = 160;

    const potato = potatoQuantity * perKgPotato;
    const tomatoo = tomatooQuantity * perKgTomatoo;
    const banana = bananaQuantity * perDojonBanana;
    const apple = appleQuantity * perKgApple;

    const totalTk = potato + tomatoo + banana + apple;
    return totalTk;
}

const bajar = bajarCalculator(2, 3, 1, 2);
console.log(bajar);