Question.obligatory = ["q", "as"];

__Question_callback__ = null;
__Questions_answers__ = null;

function Question(div, options, finishedCallback, utils) {
    this.name = "Question";

    this.finishedCallback = finishedCallback;

    div.className = "question";

    this.question = options.get("q");
    this.answers = options.get("as");
    this.hasCorrect = options.dget("hasCorrect", false);
    this.showNumbers = options.dget("showNumbers", true);
    this.randomOrder = options.dget("randomOrder", this.hasCorrect);

    if (this.randomOrder) {
        this.orderedAnswers = new Array(this.answers.length);
        for (var i = 0; i < this.answers.length; ++i)
            this.orderedAnswers[i] = this.answers[i];
        fisherYates(this.orderedAnswers);
    }
    else {
        this.orderedAnswers = this.answers;
    }

    this.setFlag = function(correct) {
        if (! correct)
            utils.setValueForNextElement("failed", true);
    }

    this.qp = document.createElement("p");
    this.qp.appendChild(document.createTextNode(this.question));
    this.xl = document.createElement(this.showNumbers ? "ol" : "ul");
    __Question_answers__ = new Array(this.answers.length);
    for (var i = 0; i < this.orderedAnswers.length; ++i) {
        var li = document.createElement("li")
        var ans = typeof(this.orderedAnswers[i]) == "string" ? this.orderedAnswers[i] : this.orderedAnswers[i][1];
        var a = document.createElement("a");
        var t = this; // 'this' doesn't behave as a lexically scoped variable so can't be
                      // captured in the closure defined below.
        a.href = "javascript:__Question_callback__(" + i + ");";
        __Question_answers__[i] = ans;
        __Question_callback__ = function (i) {
            var ans = __Question_answers__[i];
            var correct_ans = typeof(t.answers[0]) == "string" ? t.answers[0] : t.answers[0][1];
            var correct = ans == correct_ans ? 1 : 0;
            t.setFlag(correct);
            t.finishedCallback([[htmlencode(ans), correct]]);
        };
        a.appendChild(document.createTextNode(ans));
        li.appendChild(a);
        this.xl.appendChild(li);
    }
    div.appendChild(this.qp);
    div.appendChild(this.xl);

    // TODO: A bit of code duplication in this function.
    this.handleKey = function(code, time) {
        if (this.showNumbers &&
            ((code >= 48 && code <= 57) || (code >= 96 && code <= 105))) {
            // Convert numeric keypad codes to ordinary keypad codes.
            var n = code >= 96 ? code - 96 : code - 48;
            if (n > 0 && n <= this.orderedAnswers.length) {
                var ans = typeof(this.orderedAnswers[n-1]) == "string" ? this.orderedAnswers[n-1] : this.orderedAnswers[n-1][1];
                var correct = "NULL";
                if (this.hasCorrect) {
                    var correct_ans = typeof(this.answers[0]) == "string" ? this.answers[0] : this.answers[0][1];
                    correct = correct_ans == ans ? 1 : 0;
                    this.setFlag(correct);
                }
                this.finishedCallback([[htmlencode(ans), correct]]);
            }
        }
        // Letters.
        else if (code >= 65 && code <= 90) {
            for (var i = 0; i < this.answers.length; ++i) {
                var ans = null;
                if (typeof(this.answers[i]) == "string") {
                    if (code == this.answers[i].toUpperCase().charCodeAt(0))
                        ans = this.answers[i];
                }
                else {
                    if (code == this.answers[i][0].toUpperCase().charCodeAt(0))
                        ans = this.answers[i][1];
                }

                if (ans) {
                    var correct = "NULL";
                    if (this.hasCorrect) {
                        var correct_ans = typeof(this.answers[0]) == "string" ? this.answers[0] : this.answers[0][1];
                        correct = correct_ans == ans ? 1 : 0;
                        this.setFlag(correct);
                    }
                    this.finishedCallback([[htmlencode(ans), correct]]);
                }
            }
        }
    }
}
