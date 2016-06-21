class Writing {
    private author: string;
    private creationDate: string;
    private tipography: string;
    private content: string;
    private physicalSupport: string;
    private physicalSupportType: string;
    private length: number;
    private finallity: string;
    constructor() {
    }
}

class Book extends Writing {
    constructor(title: string,
        front: string,
        legalPage: string,
        dedication: string[],
        exposicionDelTema: string,
        reasonsForWriting: string,
        bibliography: string[],
        glosary: string[],
        index: string[][],
        epilogue: string,
        editorial: string,
        printDate: string,
        printing: string,
        printingAddress: string,
        copyNumber: string,
        translators: string) {
            super();
    }
}
