console.log("asd");
 fetch('/Users/d220/Desktop/json/text.txt')
    .then((data) => data.text())
    .then((res) => consolelog(res));