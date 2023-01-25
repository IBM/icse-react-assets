const { RegexButWithWords } = require("regex-but-with-words");

module.exports = {
  nameValidationExp: new RegexButWithWords()
    .stringBegin()
    .set("A-z")
    .group((exp) => {
      exp.set("a-z0-9-").anyNumber().set("a-z0-9");
    })
    .lazy()
    .stringEnd()
    .done("i"),
};
