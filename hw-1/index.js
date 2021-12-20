let cardNumberDOM = document.getElementById("cardNumber");
let errorMessageDOM = document.getElementById("errorMessage");
let cardTitleDOM = document.getElementById("cardTitle");

// Kullanıcı tarafından girilen kart numarası alınır.
cardNumberDOM.addEventListener("change", (event) => {
  errorMessage("");
  let cardNumber = event.target.value;
  let cardNumberArray = cardNumber.split("");
  cardNumberArray.length && numberDigitCheck(cardNumberArray);
});

// Kart numarasında en az iki farklı rakam kontrolü yapılır.
const checkForTwoDifferentDigits = (cardNumberArray) => {
  let count = 0;
  for (let num1 of cardNumberArray) {
    if (count < 1) {
      count = 0;
      for (let num2 of cardNumberArray) {
        if (num1 !== num2) {
          count++;
          if (count >= 1) {
            break;
          }
        }
      }
    }
  }

  count >= 1
    ? (cardTitleDOM.innerHTML = "VALID")
    : (cardTitleDOM.innerHTML = "INVALID");
};

// Kart numarasının son iki hanesi çift olup olmadığı kontrol edilir.
const lastTwoDigitCheck = (cardNumberArray) => {
  errorMessage("");
  resultMessage("");
  const cardLength = cardNumberArray.length;
  const lastTwoDigitSum =
    cardNumberArray[cardLength - 2] * 10 + cardNumberArray[cardLength - 1] * 1;
  isEven = lastTwoDigitSum % 2 === 0 ? true : false;
  isEven
    ? checkForTwoDifferentDigits(cardNumberArray)
    : errorMessage("Son iki hanenin çift olması gerekmektedir.");
};

// Kart numarasının toplamı 16'dan büyük olup olmadığı kontrol edilir.
const sumCheck = (cardNumberArray) => {
  errorMessage("");
  resultMessage("");
  let sum = cardNumberArray.reduce((a, b) => {
    return a + b;
  }, 0);
  sum > 16
    ? lastTwoDigitCheck(cardNumberArray)
    : errorMessage("Lütfen toplamın 16'dan büyük olan bir sayı giriniz.");
};

// Kart numarısının uzunluğu kontrol edilir.
const lengthCheck = (cardNumberArray) => {
  errorMessage("");
  resultMessage("");
  let isSixteenDigit =
    cardNumberArray.length === 16
      ? true
      : errorMessage("Lütfen 16 haneli bir kredi kartı numarası giriniz.");

  isSixteenDigit && sumCheck(cardNumberArray);
};

// Kart numarası integer'a dönüştürülür.
const convertToNumber = (cardNumberArray) => {
  errorMessage("");
  resultMessage("");
  let tempCardNumberArray = [];
  for (let num of cardNumberArray) {
    if (num !== "-") tempCardNumberArray.push(parseInt(num));
  }
  lengthCheck(tempCardNumberArray);
};

// Kart numarasının tamamının rakamlardan veya orta çizgiden oluşup oluşmadığı kontrol edilir.
const numberDigitCheck = (cardNumberArray) => {
  errorMessage("");
  resultMessage("");
  let tempCardNumberArray = cardNumberArray.every((num) => {
    return (num >= 0 && num <= 9) || num === "-";
  });

  tempCardNumberArray
    ? convertToNumber(cardNumberArray)
    : errorMessage("Lütfen sadece rakam ve orta çizgi giriniz.");
};

const errorMessage = (message) => {
  errorMessageDOM.innerText = message;
};

const resultMessage = (message) => {
  cardTitleDOM.innerText = message;
};
