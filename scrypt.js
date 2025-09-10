const thing = document.querySelector('.choice').childNodes;
thing.forEach((item) => {
    item.addEventListener('click', () => {
        const scrypt = item.querySelector('img').getAttribute('src');
        document.querySelector('.slider img').setAttribute('src', scrypt);
    });
});
let calender = {
    months : ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
    current : 0,
    Prev : function() {
        this.current++;
        if (this.current >= this.months.length){
            this.current = 0
        }
        return months[this.current]
    },
    Next : function() {
        this.current --;
        if (this.current < 0){
            this.current = this.months.length - 1
        }
        return months[this.current]
    }
}

const leftarr = document.getElementById('la')
const rightarr = document.getElementById('ra')
const months = document.querySelector('.ctext')

leftarr.addEventListener('click', () => {
    calender.Next()
    months.textContent = calender.months[calender.current]
})
rightarr.addEventListener('click', () => {
    calender.Prev()
    months.textContent = calender.months[calender.current]
})

