class customErrorHandler extends Error {
    constructor(status, msg) {
        super();
        this.status = status;
        this.message = msg;
    };

    static unAuthorizedUser(message="Un Authorized User") {
        return new customErrorHandler(401,message);
    };

    static wringCredentials(message="your email and password is wrong") {
        return new customErrorHandler(401,message);
    };
}

export default customErrorHandler;