let a = parseInt(prompt('a=', 'Введите значение'));
let b = parseInt(prompt('b=', 'Введите значение'));
document.write('Вот ваше неравенство:<br>');
if (b>0){
    document.write(a + 'x + ' + b + ' < 0<br>');
}
else {
    document.write(a + 'x + (' + b + ') < 0<br>');
}
if (a==0){
    if (b<0){
        document.write(a + 'x + (' + b + ') < 0<br>');
        document.write('0 + (' + b + ') < 0<br>');
        document.write(b + ' < 0<br>');
        document.write('Неравенство выполняется при любых х<br>');
    }
    else {
        document.write('Неравенство не имеет решения так как:<br>');
        document.write(a + 'x + ' + b + ' < 0<br>');
        document.write('0 + ' + b + ' < 0<br>');
        document.write(b + ' < 0<br>');
        document.write('Неравенство не выполняется при любых х<br>');
    }
}
else {
    document.write('Переносим значение ' + b + ' за знак неравенства с изменением знака:<br>');
    if (b<0) {
        document.write(a + 'x < ' + (-b) );
        if (a<0) {
            document.write('Так же переносим значение ' + a + ' с изменением знака:<br>');
            document.write('x > ' + (-b) + '/' + a,'<br>');
            document.write('Вычисляем:<br>')
            document.write('x > ' + (-b / a),'<br>');
        }
        else {
            document.write('Так же переносим значение ' + a + ':<br>');
            document.write('x < ' + (-b) + '/' + a,'<br>');
            document.write('Вычисляем:<br>')
            document.write('x < ' + (-b / a),'<br>');
        }
    }
    else {
        document.write(a + 'x < ' + -b,'<br>');
        if (a<0) {
            document.write('Так же переносим значение ' + a + ' с изменением знака:<br>');
            document.write('x > ' + -b + '/' + a,'<br>');
            document.write('Вычисляем:<br>');
            document.write('x > ' + (-b / a),'<br>');
        }
        else {
            document.write('Так же переносим значение ' + a + ':<br>');
            document.write('x < ' + -b + '/' + a,'<br>');
            document.write('Вычисляем:<br>')
            document.write('x < ' + (-b / a),'<br>');
        }
    }
}