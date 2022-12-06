const Config ={
    ENVIRONMENT: "dev",
    SMTP: {
        HOST: "smtp.mailtrap.io",
        PORT: 465,
        USER: "c59888f7f55c9b",
        PASS: "f3e619abb8b199",
        FROM: "noreply@test.com",
        TLS: false
    },
    DB: {
        PROTOCOL: "mongodb",
        HOST: "127.0.0.1",
        NAME: "mern15",
        USER: "",
        PWD: "",
        PORT: 27017
    }
}

module.exports = Config;