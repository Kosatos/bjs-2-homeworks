// Задача 1

const parseCount = (value) => {
    value = parseInt(value, 10);
    if (isNaN(value)) {
        throw new Error('Невалидное значение');
    }
    return value;
}

const validateCount = (value) => {
    try {
        return parseCount(value);
    } catch(err) {
        return err;
    }
}

// Задача 2

class Triangle {
    constructor(a, b, c) {
        if ((a + b) < c || (a + c) < b || (b + c) < a) {
            throw new Error('Треугольник с такими сторонами не существует');
        } else if (isNaN(parseInt(a, 10)) || isNaN(parseInt(b, 10)) || isNaN(parseInt(c, 10))) {
            throw new Error('Невалидное значение стороны трекгольника');
        }
        this.a = a;
        this.b = b;
        this.c = c;
    }

    getPerimeter() {
        return this.perimeter = this.a + this.b + this.c;
    } 

    getArea() {
        const semiperimeter = this.getPerimeter() / 2;
        return this.area = +Math.sqrt(semiperimeter * (semiperimeter - this.a) * (semiperimeter - this.b) * (semiperimeter - this.c)).toFixed(3);
    }
}

const getTriangle = (a, b, c) => {
    try {
        return new Triangle(a, b, c);
    } catch(err) {
        return {
            getArea: () => { return 'Ошибка! Треугольник не существует' },
            getPerimeter: () => { return 'Ошибка! Треугольник не существует' },
        }
    }
}


  