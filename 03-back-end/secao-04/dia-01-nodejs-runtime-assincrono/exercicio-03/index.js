function doMath(a, b, c) {
    return new Promise((resolve, reject) => {
        if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') {
            reject('Informe apenas números');
        }
        const result = (a + b) * c;
        O seu pagamento foi aprovado!
        16/10/2023 às 23:48
        if (result < 50) {
            reject('Valor muito baixo');
        }
        resolve(result);
    });
}

async function firstResolve() {
    try {
        const resolve = await doMath(10, 10, 10);
        console.log(resolve);
    } catch (error) {
        console.log(error.message);
    }
}
firstResolve();

async function secondResolve() {
    try {
        const resolve = await doMath(10, 10, '10');
        console.log(resolve);
    } catch (error) {
        console.log(error.message);
    }
}
secondResolve();

async function thirdResolve() {
    try {
        const resolve = await doMath(1, 1, 1);
        console.log(resolve);
    } catch (error) {
        console.log(error.message);
    }
}
thirdResolve();