var quotes = [
'Οι άνθρωποι της μάθησης έχουν γίνει φερέφωνα της εθνικής παράδοσης και έχασαν την αίσθηση της πνευματικής οικουμενικότητας.',

'Μέσα σε δυο βδομάδες, οι αγέλες των μαζών μπορούν να ωθηθούν από τις εφημερίδες σε μια κατάσταση τέτοιας οργής, ώστε να προετοιμάζονται να φορέσουν τις στολές τους, για να σκοτώσουν η να σκοτωθούν προς χάρη ανάξιων σκοπών μερικών ενδιαφερόμενων κομμάτων.',

'Θεωρώ την υποχρεωτική στρατιωτική θητεία ως το πλέον επαίσχυντο σύμπτωμα έλλειψης προσωπικής αξιοπρέπειας από την οποία υποφέρει ο πολιτισμένος άνθρωπος σήμερα.',

'Όποιος αναλαμβάνει να γίνει δικαστής στο πεδίο της αλήθειας και της γνώσης ναυαγεί απ\' το γέλιο των θεών.',

'Το πέρασμα από μια θρησκεία του φόβου σε μια θρησκεία της ηθικής αποτελεί ένα μεγάλο βήμα στη ζωή ενός έθνους.',

'Το κράτος είναι φτιαγμένο για τον άνθρωπο και όχι ο άνθρωπος για το κράτος.',

'Η πολεμική βιομηχανία είναι η κρυφή διαβολική δύναμη πίσω από τον εθνικισμό, που οργιάζει παντού…',

'Το κύριο καθήκον της πολιτείας: να προστατεύει το άτομο και να του δίνει την ευκαιρία να αναπτυχθεί σε μια δημιουργική προσωπικότητα.',

'Μην πας ποτέ ενάντια στη συνείδησή σου, αν ακόμα και αυτό το απαιτεί το κράτος.',

'Στην πολιτική όχι μόνο λείπουν οι ηγέτες, αλλά η ανεξαρτησία του πνεύματος και η έννοια του δίκαιου του πολίτη έχουν σε ένα μεγάλο ποσοστό παρακμάσει.',

'Το ψέμα υψώθηκε κι έγινε ευγένεια στα χέρια της πολιτικής.',

'Πόσο πρόστυχος και ποταπός μου φαίνεται ο πόλεμος! Καλύτερα να με πετσοκόψουν κομματάκια παρά να συμμετάσχω σε κάτι τόσο σιχαμερό.',

'Το ψέμα έχει ισχυρούς σύμμαχους με πρώτη την πολιτική που ξέρει να το αξιοποιεί και να το προβάλλει με το μανδύα της ευγένειας.',

'Αν διεξαχθεί Τρίτος Παγκόσμιος Πόλεμος, ο Τέταρτος θα γένει με ρόπαλα.',

'Τα προβλήματα ποτέ δεν μπορείς να τα λύσεις με τον τρόπο σκέψης που τα γέννησε.',

'Εκπαίδευση είναι εκείνο που μένει όταν έχουμε ξεχάσει καθετί που μάθαμε στο σχολείο.',

'Ο μόνος δρόμος για τους διανοουμένους είναι ο δρόμος του Γκάντι. Ο δρόμος της μη συνεργασίας…',

'Η έλλειψη των εξαιρετικών προσωπικοτήτων είναι ιδιαίτερα έντονη στο χώρο της τέχνης. Η ποίηση, η ζωγραφική, η μουσική έχουν οριστικά εκφυλιστεί και σε μεγάλο βαθμό έχουν χάσει τη λαϊκή απήχησή τους.',

'Τα μεγάλα πνεύματα πάντα αντιμετωπίζουν βίαιες αντιδράσεις από υποδεέστερα μυαλά.',

'Αν μου έδιναν μόνο μια ώρα για να λύσω ένα πρόβλημα από το οποίο να εξαρτάται η ζωή μου, θα αφιέρωνα 40 λεπτά για να το μελετήσω, 15 λεπτά για να το αναθεωρήσω και 5 λεπτά να το λύσω.',

'Η Επιστήμη χωρίς τη θρησκεία είναι χωλή, η θρησκεία χωρίς την Επιστήμη είναι τυφλή.',

'Ο αιώνας μας είναι ο αιώνας των μεγάλων μέσων και των συγκεχυμένων σκοπών.',

'Γεννήθηκα, και αυτό είναι το πάν που χρειάζεται ο άνθρωπος για να γίνει ευτυχισμένος.',

'Ο θυμός κατοικεί μόνο στα στήθη των ανόητων.',

'Μόνο δύο πράγματα είναι άπειρα, το σύμπαν και η ανθρώπινη βλακεία, και ως προς το σύμπαν διατηρώ κάποιες αμφιβολίες.',

'Στο κάτω κάτω, να πεθαίνεις δεν είναι και άσχημο.',

'Μόρφωση είναι εκείνο που έμεινε μέσα στο κεφάλι όταν ξεχάσεις όλα αυτά που σε έμαθαν.',

'Πείτε μου πρώτα τι ακριβώς εννοείτε με τη λέξη Θεός και θα σας πω αν πιστεύω.',

'Τα πάντα ρει.',

'Εάν δεν ειπώθηκαν οι αντίθετες γνώμες τότε πως θα διαλέξετε την καλύτερη.',

'Από τις διαφορές γεννιέται η πιο όμορφη αρμονία.',

'Η πολυγνωσία δεν φέρνει την εξυπνάδα.',

'Πρέπει οι πολίτες να μάχονται για τους νόμους, όπως για τα τείχη της πόλης τους.',

'Για μένα ένας ισοδυναμεί με δέκα χιλιάδες αν είναι άριστος.',

'Η κούραση κάνει να νιώθουμε τη χαρά που δίνει η ανάπαυση.',

'Ο δρόμος προς τα πάνω και ο δρόμος προς τα κάτω είναι ο ίδιος δρόμος.',

'Δημιουργία: ο καλύτερος τρόπος να απολαμβάνεις τη ζωή.',

'Εκείνος που απέρριψε τα περισσεύματα εκείνος απέφυγε τις στερήσεις.',

'Η τάση του ανθρώπου προς τις ανέσεις είναι απ\' τα χειρότερα κακά της ζωής.',

'Μην δέχεσαι ευεργεσίες, χωρίς τις οποίες μπορείς να ζεις.',

'Η ηθικότητα μαθαίνει όχι πως να γίνεις ευτυχισμένος, αλλά πώς να γίνεις άξιος ευτυχίας.',

'Περισσότερο απ\' όλους ζούνε εκείνοι που λιγότερο απ\' όλους προσπαθούν να παρατείνουν τη ζωή τους.',

'Πονηριά: τρόπος σκέψης ανθρώπων με περιορισμένο μυαλό, και πάρα πολύ διαφέρει από την εξυπνάδα την οποία μοιάζει.',

'Οι δυσκολίες της ζωής αντιμετωπίζονται συνήθως με τρεις τρόπους: την ελπίδα, το όνειρο και το χιούμορ.',

'Αν θα τιμωρήσετε το παιδί για κακές πράξεις και το ανταμείβετε για καλές, θα κάνει καλό μόνο και μόνο για να έχει κέρδος.',

'Οι τιμωρίες που επιβάλλονται τη στιγμή αγανάκτησης δε φτάνουν στον στόχο.',

'Τέχνη δεν είναι να απεικονίζουμε τα ωραία πράγματα, αλλά να απεικονίζουμε ωραία τα πράγματα.',

'Η ευτυχία είναι το ιδανικό, όχι του νου, αλλά της φαντασίας.',

'Ο ένας κοιτάζει το νερόλακκο και βλέπει τη λάσπη, ο άλλος βλέπει μέσα του τα άστρα που αντανακλούνται.',

'Αυτό που ονομάζουμε "ευπρέπεια", δεν είναι τίποτα άλλο από την εξωτερική ομορφιά.',

'Απάρνηση από την εσωτερική πεποίθηση είναι πρόστυχη πράξη.',

'Το ωραίο είναι κάτι τέτοιο που ανήκει αποκλειστικά στο γούστο.',

'Από τέτοιο στραβόξυλο που είναι ο άνθρωπος, τίποτα ίσιο δεν μπορείς να ροκανίζεις.',

'Οι κακοί, όταν τους γνωρίζουμε καλύτερα, κερδίζουν τις εντυπώσεις, οι καλοί τις χάνουν.',

'Τελικά, τι είναι οι ανθρώπινες αλήθειες; Είναι αδιάψευστες ανθρώπινες παραπλανήσεις.',

'Οι ηθικοί άνθρωποι αισθάνονται αυτοϊκανοποίηση όταν έχουν τύψεις συνείδησης.',

'Ο άνθρωπος είναι ένα από τα λάθη του Θεού, ή ο Θεός του ανθρώπου.',

'Η μόνη γόνιμη περιφρόνηση είναι εκείνη που αφορά τον εαυτό μας, γιατί έτσι μπορούμε να τον υπερβούμε και να τον ξαναπλάσουμε.',

'"Αγάπα τον πλησίον σου", αυτό πρώτ\' απ\' όλα σημαίνει: "Άφησε τον πλησίον σου στην ησυχία του". Και ακριβώς αυτή η λεπτομέρεια της αρετής συνδέεται με τις μεγαλύτερες δυσκολίες.',

'Να είσαι νομοθέτης είναι η πιο εκλεπτυσμένη μορφή της τυραννίας.',

'Η ομορφιά είναι μια υπόσχεση ευτυχίας.',

'Η φωνή της αληθινής ομορφιάς ηχεί πολύ σιγά και διεισδύει μόνο στα πιο ευαίσθητα αφτιά.',

'Με τον όρο "ελευθερία του πνεύματος" εννοώ κάτι εντελώς σαφές: την άνευ όρων δυνατότητα να πεις "όχι" όταν είναι επικίνδυνο να πεις "όχι".',

'Η λέξη "χριστιανισμός" περιέχει κάποια παρεξήγηση γιατί ουσιαστικά υπήρχε μόνο ένας χριστιανός, αλλά κι εκείνος πέθανε πάνω στο σταυρό. ',

'Πίστη σημαίνει να μη θέλεις να μάθεις την αλήθεια.',

'Ο καλόψυχος στενοχωριέται κατανοώντας πως κάποιος του είναι υπόχρεος. Ο κακόψυχος: κατανοώντας πως είναι υπόχρεος σε κάποιον.',

'Τα αποτελέσματα που έχει η τιμωρία στους ανθρώπους και στα ζώα είναι η αύξηση του φόβου, η όξυνση της πονηριάς, ο έλεγχος των επιθυμιών. Η τιμωρία δαμάζει τον άνθρωπο, αλλά δεν τον κάνει καλύτερο.',

'Μην προσεύχεστε πια, αλλά να ευλογείτε και η γη θα γεμίσει με θεανθρώπους.',

'Οι άρχοντες καταργήθηκαν. Η ηθική του κοινού ανθρώπου θριάμβευσε.',

'Οι πεποιθήσεις είναι πιο επικίνδυνοι εχθροί της αλήθειας από τα ψέματα.',

'Άλλα εκατό χρόνια εφημερίδας και οι λέξεις θα βρομάνε.',

'Στα άτομα η παράνοια είναι σπάνια, στις ομάδες όμως, στα κόμματα, στα έθνη είναι ο κανόνας.',

'Ο ιδεαλιστής είναι αδιόρθωτος, αν τον διώξουν από τον παράδεισό του εξιδανικεύει την κόλαση.',

'Πολιτικός είναι κάποιος που διαιρεί τους ανθρώπους σε δυο τάξεις: σε υποχείρια και σε εχθρούς.',

'Η αμφιβολία δηλητηριάζει τα πάντα χωρίς να σκοτώνει τίποτα.',

'Για αυτήν την καινούρια μουσική χρειάζονται και καινούρια αφτιά.',

'Για να μην καταστραφούμε από τη γνώση, έχουμε την Τέχνη. ',

'Το αστείο είναι ο επιτάφιος μιας συγκίνησης.',

'Η έρημος ολοένα μεγαλώνει.',

'Η μελαγχολία όλων των τελειωμένων πραγμάτων!',

'Την ηθική προηγείται ο εξαναγκασμός, ύστερα η ηθική γίνεται έθιμο, αργότερα: ελεύθερη υπακοή και τελικά παίρνει μορφή ένστικτου.',

'Αφού σου αρέσει ο άβυσσος, πρέπει να έχεις φτερά.',

'Εκείνος που παλεύει με το τέρας πρέπει να προσέχει γιατί και ο ίδιος μπορεί να γίνει τέρας. Και αν συνέχεια κοιτάς τον άβυσσο, πρέπει να κατανοήσεις πως και ο άβυσσος σε παρακολουθεί.',

'Το μαρτύριο είναι ο πιο σίγουρος τρόπος για να βρεις την αλήθεια.',

'Οι εκπρόσωποι της πλειοψηφίας συνήθως ρίχνουν στον μοναχικό άνθρωπο την λάσπη της αδικίας, αλλά αδελφέ μου! εάν θέλεις να είσαι αστέρι πρέπει να λάμπεις για όλους, παρ\' όλα τα εμπόδια!',

'Ο άνθρωπος πλάστηκε ως ζώο, αλλά η άπληστη περιέργεια τον έκανε να πάψει να είναι ζώο. Δηλαδή ο άνθρωπος έπαψε να είναι άνθρωπος!..',

'Την ηθική προηγείται ο εξαναγκασμός, αργότερα η ηθική γίνεται συνήθεια, μετά γίνεται ελεύθερη υπακοή και τελικά γίνεται ένστικτο.',

'Τους ζητιάνους πρέπει να τους καταργήσουμε, αφού το να δίνουμε ελεημοσύνη και το να μη δίνουμε είναι στον ίδιο βαθμό οδυνηρό.',

'Ο φανατισμός είναι η μοναδική δύναμη της θέλησης, που μπορούν να έχουν οι αδύναμοι και οι διστακτικοί.',

'Φιλοδοξία μου είναι να πω σε δέκα προτάσεις αυτό που άλλοι λένε σε ένα ολόκληρο βιβλίο.',

'Ό, τι και εάν ανακαλύψουμε εμείς, μετά από λίγο πληροφορούμεθα ότι το είχε ανακαλύψει ο μικρός αυτός λαός των Ελλήνων πολλούς αιώνες πρωτύτερα.',

'Στον έρωτα και τον πόλεμο επιτρέπονται όλα!',

'Η κάθε εκκλησία είναι μια πέτρα πάνω στον τάφο του θεανθρώπου: ποτέ δε θα μπορεί να επιτρέπει να αναστήσει.',

'Η έννοια του «Θεού» έχει επινοηθεί ως αντίθεση της ζωής – σε αυτή συνοψίζεται, σε μια τρομακτική ενότητα, κάθε τι ζημιογόνο, δηλητηριώδες, συκοφαντικό, κάθε μίσος για τη ζωή.',

'Εκείνος που με προσοχή παρακολουθεί πόσο των εκτιμούν, πάντα θα πικραθεί.',

'Αν βέβαια και αποδεδειγμένα γνωρίζαμε τι είναι ο θάνατος, θα είχαμε επιθυμία να ζήσουμε;',

'Όταν είμαστε κουρασμένοι, μας επιτίθενται ιδέες, τις οποίες είχαμε πριν από πολύ καιρό κατατροπώσει.',

'Ένα καλό απόφθεγμα είναι πολύ σκληρό για τα δόντια του χρόνου και δεν αναλώνεται όσες χιλιετίες και αν περάσουν, παρότι χρησιμεύει ως τροφή για κάθε εποχή.',

'Ο σωματικός μόχθος ανακουφίζει από τα βάρη του πνεύματος. Αυτός είναι και ο λόγος που οι φτωχοί είναι ευτυχισμένοι.',

'Περίπου όλη την Ιστορία την κάνουν απαίσιοι άνθρωποι, τους οποίους μετά εξωραΐζουν',

'Ο κόσμος κερδίζεται απ\' αυτούς που δεν ανακατεύονται στα γεγονότα και τα πράγματα. Αν επεμβαίνεις θ\' αποτύχεις.',

'Εκείνος που ξέρει δε μιλάει. Εκείνος που μιλάει δεν ξέρει.',

'Να είστε προσεκτικοί με τις σκέψεις σας. Είναι η αρχή των πράξεων.',

'Η αιτία που η θάλασσα μαζεύει το φόρο υποτέλειας από εκατοντάδες ποτάμια, είναι το γεγονός ότι βρίσκεται πιο κάτω απ\' αυτούς. Το ίδιο και ο σοφός, τοποθετώντας τον εαυτό του χαμηλότερα από τους ανθρώπους, υψώνει το κύρος του και εισπράττει το φόρο τιμής.',

'Όταν πληθαίνει ο αριθμός των νόμων και των διαταγών, μεγαλώνει ο αριθμός των απατεώνων και πολιτικών.',

'Οι σωστές λέξεις δεν έχουν φινέτσα, οι λέξεις με φινέτσα δεν είναι σωστές.',

'Ω, δυστυχία! Είναι το αποκούμπι της ευτυχίας. Ω, ευτυχία! Εκεί καραδοκεί η δυστυχία.',

'Οι μεγάλες υποθέσεις οπωσδήποτε ξεκινούν από κάποια μικροπράγματα.',

'Ο συνετός έχει ελεύθερο μυαλό, όμως δεν παραβλέπει τις ανάγκες των ανθρώπων. Φέρεται καλά και στους καλούς και στους κακούς, έτσι γεννιέται η καλοσύνη. Προσφέρει ευκαιρία τόσο στον ειλικρινή όσο και στον ψεύτη, έτσι καλλιεργείται η εμπιστοσύνη. Κάνει σαν παιδί κι όλοι θεωρούν παράξενο, μα και στους άλλους φέρεται σα να \'τανε παιδιά.',

'Με τους καλούς είμαι καλός, είμαι καλός και με τους κακούς για να τους κάνω καλύτερους.',

'Η αλήθεια δεν μπορεί να ειπωθεί. Κι αυτό που μπορεί να ειπωθεί δεν θα είναι αλήθεια.',

'Η καλοσύνη στον λόγο καλλιεργεί την εμπιστοσύνη. Η καλοσύνη στη σκέψη καλλιεργεί το βάθος.  Η καλοσύνη στην προσφορά καλλιεργεί την αγάπη.',

'Ο σοφός κανονίζει τις υποθέσεις χωρίς δράση…',

'Δεν υπάρχει χειρότερη συμφορά, παρά να περιφρονήσεις τους εχθρούς σου.',

'Έχεις την υπομονή να περιμένεις μέχρι η λάσπη να στεγνώσει και το νερό να γίνει καθαρό; Μπορείς να μείνεις ακίνητος μέχρι η σωστή δράση να εμφανιστεί από μόνη της;',

'Οι μεγαλύτερες αλήθειες δεν μπορούν να ειπωθούν με λέξεις.',

'Αυτοί που έχουν γνώση δεν προβλέπουν. Αυτοί που προβλέπουν δεν έχουν γνώση.',

'Να αγαπάς την ευθύνη, να λές εγώ, εγώ μονάχος μου θα σώσω τον κόσμο. Αν χαθεί, εγώ θα φταίω.'
]

function newQuote() {
	var randomNumber = Math.floor(Math.random() * (quotes.length));
	document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}