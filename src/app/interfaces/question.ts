export class QuestionBase<T> {
    value: T | undefined;
    key: string;
    label: string;
    required: boolean = true; // make required field mandatory
    order: number;
    controlType: string;
    type: string;
    options: { key: string, value: string }[];
    className: string;
    isSpecial: boolean;

    // used for multiple entry
    questions: QuestionBase<any>[] | undefined;

    answers: QuestionBase<any>[][] | undefined;

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
        questions?: QuestionBase<any>[];
        answers?: QuestionBase<any>[][];
        isSpecial?: boolean;
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
        this.questions = options.questions;
        this.answers = options.answers || [];
        this.isSpecial = options.isSpecial ?? false;
    }
}


export class TextboxQuestion extends QuestionBase<string> {
    override controlType = 'textbox';
}

export class DropdownQuestion extends QuestionBase<string> {
    override controlType = 'dropdown';
}

export class OLResultQuestion extends QuestionBase<string> {
    override controlType = 'olResult';
}

export class AlResultQuestion extends QuestionBase<string> {
    override controlType = 'alResult';
}

export class MultipleEntryQuestion extends QuestionBase<string> {
    override controlType = 'multiple-entry';
}

export class FormPage {
    key: string;
    title: string;
    questions: QuestionBase<any>[];

    constructor(options: {
        key: string;
        title: string;
        questions: QuestionBase<any>[];
    }) {
        this.key = options.key;
        this.title = options.title;
        this.questions = options.questions;
    }
}