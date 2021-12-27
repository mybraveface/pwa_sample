function logger(str) {
    var date = new Date();
    document.getElementById('log').value = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + " " + str + "\n" + document.getElementById('log').value;
}

if ('serviceWorker' in navigator) {
    logger('サービスワーカー有効');
    navigator.serviceWorker.register('./sw.js').then(registration => {
        logger('サービスワーカー登録 : 成功');
    }).catch(err => {
        logger('サービスワーカー登録 : 失敗');
    });
} else {
    logger('サービスワーカー無効');
}

function handleVisibilityChange() {
    logger("Visibility : " + document["hidden"]);
}

if (typeof document["hidden"] === "undefined") {
    logger('visibility APIに対応していません。');
} else {
    document.addEventListener("visibilitychange", handleVisibilityChange, false);
}