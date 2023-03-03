
let script = document.querySelector('#script')
let sleep = 'Sleep 800 ;'
function copy(){
    let stroke = 'SendMessage, 0x50, , 0x3190419, , A\n';
    for (item of script.value.split('\n')){
        stroke += `SendInput, {t}\n${sleep}\nSendInput, /${item}{enter}\n${sleep}\n`
    }
    stroke += 'SendInput, {F12}\nReturn';
    console.log(stroke)

navigator.clipboard.writeText(stroke);
}