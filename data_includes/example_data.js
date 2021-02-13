var shuffleSequence = seq(anyType);

    var defaults = [
        "Question", {as: ["uvek neprihvatljiva", "neprihvatljiva", "ponekad prihvatljiva", "prihvatljiva", "uvek prihvatljiva"]},
        "DashedSentence", {mode: "speeded acceptability"}
    ];

    var items = [

    ["filler", "DashedSentence", {s: "Pročitao sam dobru knjigu."},
               "Question", {q: "Koliko je prihatljiva ova rečenica?"}],
    ["filler", "DashedSentence", {s: "Doneo je izgleda poklone."},
               "Question", {q: "Koliko je prihatljiva ova rečenica?"}],
    ["stimulus", "DashedSentence", {s: "Trčala brzo je Marija kroz šumu."},
                  "Question", {q: "Koliko je prihatljiva ova rečenica?"}],
    ["stimulus", "DashedSentence", {s: "Hodala polako je Marija kroz šumu"},
                  "Question", {q: "Koliko je prihatljiva ova rečenica?"}]

    ];
