export class QuestionBase<T> {
    value: T | undefined;
    key: string;
    label: string;
    required: boolean;
    order: number;
    controlType: string;
    type: string;
    options: { key: string, value: string }[];
    className: string;

    constructor(options: {
        value?: T;
        key?: string;
        label?: string;
        required?: boolean;
        order?: number;
        controlType?: string;
        type?: string;
        options?: { key: string, value: string }[];
        className?: string;
    } = {}) {
        this.value = options.value;
        this.key = options.key || '';
        this.label = options.label || '';
        this.required = options.required ?? true;
        this.order = options.order === undefined ? 1 : options.order;
        this.controlType = options.controlType || '';
        this.type = options.type || '';
        this.options = options.options || [];
        this.className = options.className || "col-12";
    }
}


export class TextboxQuestion extends QuestionBase<string> {
    override controlType = 'textbox';
}

export class DropdownQuestion extends QuestionBase<string> {
    override controlType = 'dropdown';
}