var shuffleSequence = seq(anyType);

    var defaults = [
        "Question", {as: ["1", "2", "3", "4", "5"]},
        "DashedSentence", {mode: "speeded acceptability"}
    ];

    var items = [

    ["filler", "DashedSentence", {s: "Pročitao sam dobru knjigu."},
               "Question", {q: "Koliko je prihatljiva ova rečenica?"}],
    ["filler", "DashedSentence", {s: "Doneo je izgleda poklone."},
               "Question", {q: "Koliko je prihatljiva ova rečenica?"}],
    ["relclause", "DashedSentence", {s: "Trčala brzo je Marija kroz šumu."},
                  "Question", {q: "Koliko je prihatljiva ova rečenica?"}],
    ["relclause", "DashedSentence", {s: "Hodala polako je Marija kroz šumu"},
                  "Question", {q: "Koliko je prihatljiva ova rečenica?"}]

    ];
