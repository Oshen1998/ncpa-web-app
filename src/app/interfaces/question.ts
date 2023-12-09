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



//Some technology Subjects have to add after the confirmation

export const ALSubjects = [

    {
        value: "Mathematics",
        key: "mathematics",
        subjects: [
            {
                value: "Mathematics",
                key: "mathematics",
            },
            {
                value: "Physics",
                key: "physics",
            },
            {
                value: "Chemistry",
                key: "chemistry",
            },
            {
                value: "Information and Communication Technology",
                key: "information_and_communication_technology",
            },
            {
                value: "Higher Mathematics",
                key: "higher_mathematics",
            }
        ],
    },

    {
        value: "Bio Science",
        key: "bio_science",
        subjects: [
            {
                value: "Biology",
                key: "biology",
            },
            {
                value: "Chemistry",
                key: "chemistry",
            },
            {
                value: "Physics",
                key: "physics",
            },

            {
                value: "Agricultural Science",
                key: "agricultural_science",
            }
        ],

    },

    {
        value: "Technology",
        key: "technology",
        subjects: [
            {
                value: "Engineering Technology",
                key: "engineering_technology",
            },
            {
                value: "Science for Technology",
                key: "science_for_technology",
            },
            {
                value: "Bio Systems Technology",
                key: "bio_systems_technology",
            },
            {
                value: "Information and Communication Technology",
                key: "information_and_communication_technology",
            }

        ],

    },

    {
        value: "Commerce",
        key: "commerce",
        subjects: [
            {
                "value": "Arabic",
                "key": "arabic"
            },
            {
                "value": "Art",
                "key": "art"
            },
            {
                "value": "Buddhism",
                "key": "buddhism"
            },
            {
                "value": "Buddhist Civilization",
                "key": "buddhist_civilization"
            },
            {
                "value": "Carnatic Music",
                "key": "carnatic_music"
            },
            {
                "value": "Chinese",
                "key": "chinese"
            },
            {
                "value": "Christian Civilization",
                "key": "christian_civilization"
            },
            {
                "value": "Christianity",
                "key": "christianity"
            },
            {
                "value": "Communication and Media Studies",
                "key": "communication_and_media_studies"
            },
            {
                "value": "Dancing (Bharatha)",
                "key": "dancing_bharatha"
            },
            {
                "value": "Dancing (Indigenous)",
                "key": "dancing_indigenous"
            },
            {
                "value": "Drama and Theatre (English)",
                "key": "drama_and_theatre_english"
            },
            {
                "value": "Drama and Theatre (Sinhala)",
                "key": "drama_and_theatre_sinhala"
            },
            {
                "value": "Drama and Theatre (Tamil)",
                "key": "drama_and_theatre_tamil"
            },
            {
                "value": "Economics",
                "key": "economics"
            },
            {
                "value": "English",
                "key": "english"
            },
            {
                "value": "French",
                "key": "french"
            },
            {
                "value": "Geography",
                "key": "geography"
            },
            {
                "value": "German",
                "key": "german"
            },
            {
                "value": "Greek and Roman Civilization",
                "key": "greek_and_roman_civilization"
            },
            {
                "value": "Hindi",
                "key": "hindi"
            },
            {
                "value": "Hindu Civilization",
                "key": "hindu_civilization"
            },
            {
                "value": "Hinduism",
                "key": "hinduism"
            },
            {
                "value": "History",
                "key": "history"
            },
            {
                "value": "Home Economics",
                "key": "home_economics"
            },
            {
                "value": "Information and Communication Technology",
                "key": "information_and_communication_technology"
            },
            {
                "value": "Islam",
                "key": "islam"
            },
            {
                "value": "Islamic Civilization",
                "key": "islamic_civilization"
            },
            {
                "value": "Japanese",
                "key": "japanese"
            },
            {
                "value": "Logic and Scientific Method",
                "key": "logic_and_scientific_method"
            },
            {
                "value": "Malay",
                "key": "malay"
            },
            {
                "value": "Mathematics",
                "key": "mathematics"
            },
            {
                "value": "Oriental Music",
                "key": "oriental_music"
            },
            {
                "value": "Pali",
                "key": "pali"
            },
            {
                "value": "Political Science",
                "key": "political_science"
            },
            {
                "value": "Russian",
                "key": "russian"
            },
            {
                "value": "Sanskrit",
                "key": "sanskrit"
            },
            {
                "value": "Sinhala",
                "key": "sinhala"
            },
            {
                "value": "Tamil",
                "key": "tamil"
            },
            {
                "value": "Western Music",
                "key": "western_music"
            }
        ]

    },
];
