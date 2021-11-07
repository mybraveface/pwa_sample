if ('serviceWorker' in navigator) {
    console.log('サービスワーカー有効');
    navigator.serviceWorker.register('./sw.js').then(registration => {
        console.log('サービスワーカー登録 : 成功');
    }).catch(err => {
        console.log('サービスワーカー登録 : 失敗');
    });
} else {
    console.log('サービスワーカー無効');
}
