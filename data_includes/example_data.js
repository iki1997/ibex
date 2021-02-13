var shuffleSequence = seq(anyType);

    var defaults = [
        "Question", {as: ["Yes", "No"]},
        "DashedSentence", {mode: "speeded acceptability"}
    ];

    var items = [

    ["filler", "DashedSentence", {s: "ALOOO BEEE RADIS LI???"},
               "Question", {q: "Is this a filler sentence?"}],
    ["filler", "DashedSentence", {s: "And another silly filler sentence"},
               "Question", {q: "Does this sentence have a relative clause?"}],
    ["relclause", "DashedSentence", {s: "A sentence that has a relative clause"},
                  "Question", {q: "Was there movement through [Spec,CP]?"}],
    ["relclause", "DashedSentence", {s: "Another sentence that has a relative clause"},
                  "Question", {q: "Was the first word of that sentence 'frog'?"}]

    ];
