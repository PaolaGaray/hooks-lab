export async function loginAPI({ username, password }) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(username === 'paola' && password === 'password') {
                resolve();
            } else {
                reject();
            }
        }, 1000);
    });
}
