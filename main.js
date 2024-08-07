

var time = +prompt('Введите время')

if(( time >= 0 ) && (time <= 6)){
    
        alert(time + ' часа ночи')
       
   
}else if ( (time >= 7) && (time<=10) ) {

    alert(time + ' часов утра')

}else if ((time >= 11) && (time <= 12)) {
    

    alert( time + ' часа дня')


}else if (time == 13){
    time= 1
    alert( time + '  часа дня')


}else if (time == 14){
    time= 2
    alert( time + ' часа дня')


}else if (time == 15){
    time= 3
    alert( time + ' часа дня')

}else if (time == 16){
    time= 4
    alert( time + ' часа дня')

}else if (time == 17){
    time= 5
    alert( time + ' часов дня')

}else if (time == 18){
    time= 6
    alert( time + ' часов вечера')

}else if (time == 19){
    time= 7
    alert( time + ' часов вечера')

}else if (time == 20){
    time= 8
    alert( time + ' часов вечера')

}else if (time == 21){
    time= 9
    alert( time + ' часов вечера')

}else if (time == 22){
    time= 10
    alert( time + ' часов вечера')

}else if (time == 23){
    time= 11
    alert( time + ' часов вечера')

} else ( 
    alert('ошибка')
)

