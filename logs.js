class Log {
    constructor(type, message) {
        this.type = type;
        this.message = message;
    }

    write() {
        var log = document.createElement("li");
        log.textContent = `[${new Date().toLocaleString()}] ${this.message}`;
        document.querySelector("#logs ul").appendChild(log);
        switch (this.type) {
            case "info":
                log.style.color = "#eee";
                break;

            case "success":
                log.style.color = "#1e2";
                break;

            case "error":
                log.style.color = "#e12";
                break;

            default:
                break;
        }
    }
}

function WRITE_LOG(type, message) {
    const log = new Log(type, message);
    log.write();
    document.querySelector("#logs ul").scrollTop = document.querySelector("#logs ul").scrollHeight;
}