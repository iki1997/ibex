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
                  "Question", {q: "Koliko je prihatljiva ova rečenica?"}],
    ["filler", "DashedSentence", {s: "Rekao je staloženo da ne izlazimo."},
               "Question", {q: "Koliko je prihatljiva ova rečenica?"}],
    ["stimulus", "DashedSentence", {s: "Stajao mirno je Marko na ulici."},
                  "Question", {q: "Koliko je prihatljiva ova rečenica?"}],
    ["filler", "DashedSentence", {s: "Napravio sam izgleda veliku štetu."},
               "Question", {q: "Koliko je prihatljiva ova rečenica?"}],
    ["stimulus", "DashedSentence", {s: "Razgovarali glasno su prijatelji."},
                  "Question", {q: "Koliko je prihatljiva ova rečenica?"}],
    ["filler", "DashedSentence", {s: "Gledala deca su film."},
               "Question", {q: "Koliko je prihatljiva ova rečenica?"}],
    ["stimulus", "DashedSentence", {s: "Osudili njega verovatno su organi vlasti."},
                  "Question", {q: "Koliko je prihatljiva ova rečenica?"}],
    ["filler", "DashedSentence", {s: "Zaspala već su deca."},
               "Question", {q: "Koliko je prihatljiva ova rečenica?"}],
    ["stimulus", "DashedSentence", {s: "Trčao izgleda je za autobusom."},
                  "Question", {q: "Koliko je prihatljiva ova rečenica?"}],
    ["filler", "DashedSentence", {s: "Pročitao je Đorđe već knjigu."},
               "Question", {q: "Koliko je prihatljiva ova rečenica?"}],
    ["stimulus", "DashedSentence", {s: "Zaspala možda su deca."},
                  "Question", {q: "Koliko je prihatljiva ova rečenica?"}],
    ["filler", "DashedSentence", {s: "Pričala Marija ovu priču je često."},
               "Question", {q: "Koliko je prihatljiva ova rečenica?"}],
    ["stimulus", "DashedSentence", {s: "Pričala valjda je Marija tu priču već."},
                  "Question", {q: "Koliko je prihatljiva ova rečenica?"}],  
    ["filler", "DashedSentence", {s: "Pecao Milan je na Dunavu."},
               "Question", {q: "Koliko je prihatljiva ova rečenica?"}],
    ["stimulus", "DashedSentence", {s: "Pevala divno je Marija dok je bila u horu."},
                  "Question", {q: "Koliko je prihatljiva ova rečenica?"}],
    ["filler", "DashedSentence", {s: "Složio brzo je sve kocke."},
               "Question", {q: "Koliko je prihatljiva ova rečenica?"}],
    ["stimulus", "DashedSentence", {s: "Crtala lepo je Ana u srednjoj školi."},
                  "Question", {q: "Koliko je prihatljiva ova rečenica?"}],
    ["filler", "DashedSentence", {s: "Našla je Ana jednostavno rešenje."},
               "Question", {q: "Koliko je prihatljiva ova rečenica?"}],
    ["stimulus", "DashedSentence", {s: "Hodao sporo sam niz ulicu."},
                  "Question", {q: "Koliko je prihatljiva ova rečenica?"}],
    ["filler", "DashedSentence", {s: "Pevao Darko ovu pesmu je lepo."},
               "Question", {q: "Koliko je prihatljiva ova rečenica?"}],
    ["stimulus", "DashedSentence", {s: "Pričao glasno sam sa Marijom."},
                  "Question", {q: "Koliko je prihatljiva ova rečenica?"}],
    ["filler", "DashedSentence", {s: "Dižem tegove u teretani."},
               "Question", {q: "Koliko je prihatljiva ova rečenica?"}],
    ["stimulus", "DashedSentence", {s: "Stigao danas je Milan u grad."},
                  "Question", {q: "Koliko je prihatljiva ova rečenica?"}],
    ["filler", "DashedSentence", {s: "Išli letos smo tamo na more."},
               "Question", {q: "Koliko je prihatljiva ova rečenica?"}],
    ["stimulus", "DashedSentence", {s: "Išao letos sam na more."},
                  "Question", {q: "Koliko je prihatljiva ova rečenica?"}],
    ["filler", "DashedSentence", {s: "Sledio sam njegov trag."},
               "Question", {q: "Koliko je prihatljiva ova rečenica?"}],
    ["stimulus", "DashedSentence", {s: "Hodao ulicom sam i gledao u nebo."},
                  "Question", {q: "Koliko je prihatljiva ova rečenica?"}],
    ["filler", "DashedSentence", {s: "Osmislio plan Marko je juče."},
               "Question", {q: "Koliko je prihatljiva ova rečenica?"}],
    ["stimulus", "DashedSentence", {s: "Stajao napolju sam dok je kiša padala."},
                  "Question", {q: "Koliko je prihatljiva ova rečenica?"}]
    
    ];
