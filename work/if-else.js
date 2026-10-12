//Получить от пользователя Имя и возраст
// в зависимости от возраста отдать разные сообщения 
let user_name = prompt('Введите ваше имя');
let user_age = +prompt('Введите возраст');

if(user_name.length > 1 && user_age > 0){
    if(user_age < 18){
        console.log('Вы не прошли по возрасту, приходите через '+ (18-user_age));
    }else{console.log('Поздравляем '+ user_name);}
}