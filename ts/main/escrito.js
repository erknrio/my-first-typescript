var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Writing = (function () {
    function Writing() {
    }
    return Writing;
}());
var Book = (function (_super) {
    __extends(Book, _super);
    function Book(title, front, legalPage, dedication, exposicionDelTema, reasonsForWriting, bibliography, glosary, index, epilogue, editorial, printDate, printing, printingAddress, copyNumber, translators) {
        _super.call(this);
    }
    return Book;
}(Writing));
