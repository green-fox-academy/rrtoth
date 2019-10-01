interface ReservationY {
    getDowBooking(): string;
    getCodeBooking(): string;
}

class Reservation implements ReservationY {
    private id: string;
    private dow: string;

    constructor() {
        this.id = ""
        
        let a: string[] = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
        for (let i = 0; i < 8; i++) {
            this.id += (a[Math.floor(Math.random() * a.length)])
        }

        let days: string[] = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"]
        this.dow = days[Math.floor(Math.random() * days.length)]
    }

    getCodeBooking(): string {
        return "Booking# " + this.id

    }

    getDowBooking(): string {
        return " for " + this.dow
    }
}

let a = new Reservation
console.log(a.getCodeBooking() + a.getDowBooking())