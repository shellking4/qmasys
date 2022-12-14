export declare class AppValidationError {
    type: string;
    statusCode: number;
    path: string;
    message: string;
    validations: {
        [property: string]: string[] | any;
    } | any;
}
