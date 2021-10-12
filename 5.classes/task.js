// Задача 1

class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix() {
        this.state *= 1.5;
    }

    set state(stateValue) {
        if (stateValue < 0) {
            stateValue = 0;
        } else if (stateValue > 100) {
            stateValue = 100
        } 
        this._state = stateValue;
    }

    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = 'magazine';
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = 'book';
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'novel';
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'fantastic';
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'detective';
    }
}

// Задача 2

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if(book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        return this.books.find(item => item[type] === value) || null;
    }

    giveBookByName(bookName) {
        const deleteBook = this.books.find(item => item.name === bookName);
        this.books.splice(this.books.indexOf(deleteBook), 1);
        return  deleteBook || null;
    }
}

// Задача 3

class Student {
    constructor(name, gender, age) {
        this.name = name;
        this.gender = gender;
        this.age = age;
        this.subjects = [];
    }

    setSubject(subjectName) {
        this.subjects.push(new Subject(subjectName));
    }

    addMark(mark, subjectName) {
        if (isNaN(parseInt(mark, 10)) || parseInt(mark, 10) < 1 ||  parseInt(mark, 10) > 5 ) {
            return console.error('Ошибка, оценка должна быть числом от 1 до 5');
        }

        let findSubject = this.subjects.find(item => item.subject === subjectName);

        if (findSubject === undefined) {
            this.subjects.push(new Subject(subjectName));
            findSubject = this.subjects.find(item => item.subject === subjectName);
        }

        const subjectIndex = this.subjects.indexOf(findSubject);

        this.subjects[subjectIndex].marks.push(mark);
    }

    addMarks(markValue, subjectName) {
        for(const item of markValue) {
            if (isNaN(parseInt(item, 10)) || parseInt(item, 10) < 1 ||  parseInt(item, 10) > 5 ) {
                return console.error('Ошибка, оценка должна быть числом от 1 до 5');
            } 
        }

        let findSubject = this.subjects.find(item => item.subject === subjectName); 

        if (findSubject === undefined) {
            this.subjects.push(new Subject(subjectName));
            findSubject = this.subjects.find(item => item.subject === subjectName);
        }

        const subjectIndex = this.subjects.indexOf(findSubject);

        this.subjects[subjectIndex].marks.push(...markValue);   
    }

    getAverageBySubject(subjectName) {
        const findSubject = this.subjects.find(item => item.subject === subjectName);

        if (findSubject === undefined) {
            return console.error(`Предмет ${subjectName} еще не добавлен в программу`);
        } else if (!findSubject.marks.length) {
            return console.error(`Оценки по предмету ${subjectName} еще не внесены`)
        }
        
        const subjectIndex = this.subjects.indexOf(findSubject);
        return +(this.subjects[subjectIndex].marks.reduce((acc, item) => acc + item) / this.subjects[subjectIndex].marks.length);
    }
    

    getAverage() {
        if(!this.subjects.length) {
            return console.error('Студент еще не начал изучение программы');
        }

        for(const item of this.subjects) {
            const marksArr = [];
            marksArr.push(item.marks);
            if (marksArr.every(item => !item.length)) {
                return console.error('Оценки по предметам еще не внесены');
            } 
        }

        return (
            this.subjects.reduce((acc, item) => {
                return +(acc + this.getAverageBySubject(item.subject) / this.subjects.length);
            }, 0)
        );
    }

    exclude(reason) {
        if (this.excluded) {
            console.error(`Студент уже отчислен. Причина: ${reason}`);
        }
        delete this.subjects;
        this.excluded = reason;
    }
}

class Subject {
    constructor(subjectName) {
        this.subject = subjectName;
        this.marks = [];
    }
}



   
  




