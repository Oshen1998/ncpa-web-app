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
export class DegreeQuestion extends QuestionBase<string> {
    override controlType = 'degree';
}
export class MastersQuestion extends QuestionBase<string> {
    override controlType = 'masters';
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
        value: "Commerce",
        key: "commerce",
        subjects: [
            {
                value: "Accounting",
                key: "accounting",
            },
            {
                value: "Business Studies",
                key: "business_studies",
            },
            {
                value: "Economics",
                key: "economics",
            },

            {
                value: "Busienss Statistics",
                key: "busienss_statistics",
            },
            {
                value: "Geography",
                key: "geography",
            },
            {
                value: "Political Science",
                key: "political_science",
            },
            {
                value: "History",
                key: "history",
            },
            {
                value: "Logic and Scientific Method",
                key: "logic_and_scientific_method",
            },
            {
                value: "English",
                key: "english",
            },
            {
                value: "German",
                key: "german",
            },
            {
                value: "French",
                key: "french",
            },
            {
                value: "Agricultural Science",
                key: "agricultural_science",
            },
            {
                value: "Combined Mathematics",
                key: "combined_mathematics",
            },
            {
                value: "Information and Communication Technology",
                key: "information_and_communication_technology",
            },
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
        value: "Arts",
        key: "arts",
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



export const OLSubjects = [

    {
        value: "Religion",
        key: "religion",
        subjects: [
            {
                value: "Buddhism",
                key: "buddhism",
            },
            {
                value: "Saivanery",
                key: "saivanery",
            },
            {
                value: "Catholicism",
                key: "catholicism",
            },
            {
                value: "Christianity",
                key: "christianity",
            },
            {
                value: "Islam",
                key: "islam",
            },
        ],
    },

    {
        value: "Language and Literature",
        key: "language_and_literature",
        subjects: [
            {
                value: "Sinahala Language and Literature",
                key: "sinahala_language_and_literature",
            },
            {
                value: "Tamil Language and Literature",
                key: "Tamil_language_and_literature",
            },
        ]
    },

    {
        "value": "Category I",
        "key": "category_i",
        "subjects": [
            {
                "value": "Business and Accounting Studies",
                "key": "business_and_accounting_studies"
            },
            {
                "value": "Geography",
                "key": "geography"
            },
            {
                "value": "Civic Education",
                "key": "civic_education"
            },
            {
                "value": "Entrepreneurship Studies",
                "key": "entrepreneurship_studies"
            },
            {
                "value": "Second Language (Sinhala)",
                "key": "second_language_sinhala"
            },
            {
                "value": "Second Language (Tamil)",
                "key": "second_language_tamil"
            },
            {
                "value": "Pali",
                "key": "pali"
            },
            {
                "value": "Sanskrit",
                "key": "sanskrit"
            },
            {
                "value": "French",
                "key": "french"
            },
            {
                "value": "German",
                "key": "german"
            },
            {
                "value": "Hindi",
                "key": "hindi"
            },
            {
                "value": "Japanese",
                "key": "japanese"
            },
            {
                "value": "Arabic",
                "key": "arabic"
            },
            {
                "value": "Korean",
                "key": "korean"
            },
            {
                "value": "Chinese",
                "key": "chinese"
            },
            {
                "value": "Russian",
                "key": "russian"
            }
        ]
    },

    {
        value: "Category II",
        key: "category_ii",
        subjects: [
            {
                "value": "Music (Oriental)",
                "key": "music_oriental"
            },
            {
                "value": "Music (Western)",
                "key": "music_western"
            },
            {
                "value": "Music (Carnatic)",
                "key": "music_carnatic"
            },
            {
                "value": "Art",
                "key": "art"
            },
            {
                "value": "Dancing (Oriental)",
                "key": "dancing_oriental"
            },
            {
                "value": "Dancing (Bharata)",
                "key": "dancing_bharata"
            },
            {
                "value": "Appreciation of English Literary Texts",
                "key": "appreciation_english_literary_texts"
            },
            {
                "value": "Appreciation of Sinhala Literary Texts",
                "key": "appreciation_sinhala_literary_texts"
            },
            {
                "value": "Appreciation of Tamil Literary Texts",
                "key": "appreciation_tamil_literary_texts"
            },
            {
                "value": "Appreciation of Arabic Literary Texts",
                "key": "appreciation_arabic_literary_texts"
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
                "value": "Drama and Theatre (English)",
                "key": "drama_and_theatre_english"
            }
        ]
    },

    {
        value: "Category III",
        key: "category_iii",
        subjects: [
            {
                "value": "Information and Communication Technology",
                "key": "information_and_communication_technology"
            },
            {
                "value": "Agriculture & Food Technology",
                "key": "agriculture_and_food_technology"
            },
            {
                "value": "Aquatic Bioresources Technology",
                "key": "aquatic_bioresources_technology"
            },
            {
                "value": "Art & Crafts",
                "key": "art_and_crafts"
            },
            {
                "value": "Home Economics",
                "key": "home_economics"
            },
            {
                "value": "Health & Physical Education",
                "key": "health_and_physical_education"
            },
            {
                "value": "Communication and Media Studies",
                "key": "communication_and_media_studies"
            },
            {
                "value": "Design and Construction Technology",
                "key": "design_and_construction_technology"
            },
            {
                "value": "Design and Mechanical Technology",
                "key": "design_and_mechanical_technology"
            },
            {
                "value": "Design, Electrical & Electronic Technology",
                "key": "design_electrical_electronic_technology"
            },
            {
                "value": "Electronic Writing and Shorthand (Sinhala)",
                "key": "electronic_writing_and_shorthand_sinhala"
            },
            {
                "value": "Electronic Writing and Shorthand (Tamil)",
                "key": "electronic_writing_and_shorthand_tamil"
            },
            {
                "value": "Electronic Writing and Shorthand (English)",
                "key": "electronic_writing_and_shorthand_english"
            }
        ]
    },

];
