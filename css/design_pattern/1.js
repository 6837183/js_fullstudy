function calculateBonus(salary,level){
    console.log(arguments);
    if ( arguments.length < 2) {
        throw new Error('传参不正确，请检查传递工资及等级')
    }

    if (typeof salary != 'number' || salary < 0){
        throw new TypeError('工资必须是整数');
        salary = parseInt(salary)
    }
    if ( level == 'C'){
        return salary * 16;
    } else if( level == 'B'){
        return salary * 18
    } else if( level == 'A') {
        return salary * 20
    }
    return salary * 12
}
console.log(calculateBonus('20000','A'));