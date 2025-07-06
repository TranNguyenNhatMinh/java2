function handleClick() {
    alert("bạn đã click");
}

function checkNumber(num) {
    return new Promise((resolve, reject) => {
        if (num % 2 === 0) {
            resolve(`Số ${num} là số chẵn!`);
        } else {
            reject(`Lỗi: Số ${num} là số lẻ!`);
        }
    });
}

checkNumber(5)
    .then((message) => {
        console.log("Thanh cong:", message);
    })
    .catch((error) => {
        console.log("That bai:", error);
    })
    .finally(() => {
        console.log("Da kiem tra xong");
    });
