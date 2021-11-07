// ==UserScript==
// @name         (BETA) WME Advanced Categories
// @namespace    https://github.com/musa11971
// @version      1.0
// @description  Introducing (country specific) advanced categories to Waze Map Editor.
// @author       musa11971 (Waze: mewsa) - https://github.com/musa11971
// @include      /^https:\/\/(www|beta)\.waze\.com\/(?!user\/)(.{2,6}\/)?editor.*$/
// @run-at       document-end
// @exclude      https://www.waze.com/*user/*editor/*
// @downloadURL  https://github.com/musa11971/WME-Advanced-Categories/raw/master/wme-advanced-categories.user.js
// @grant        none
// ==/UserScript==
let WME_Advanced_Categories = {
    countries: {
        // The Netherlands
        NL: {
            categories: {
                'Abortuskliniek': ['DOCTOR_CLINIC'],
                'Administratiebureau': ['OFFICES'],
                'Advocatenkantoor/Juristenbureau': ['OFFICES'],
                'Afvalverwerkingsbedrijf': ['TRASH_AND_RECYCLING_FACILITIES'],
                'Auto schadeherstel/Autoplaatwerk': ['GARAGE_AUTOMOTIVE_SHOP'],
                'Automaterialen winkel': ['GARAGE_AUTOMOTIVE_SHOP'],
                'Atletiekbaan': ['SPORTS_COURT'],
                'Basisschool': ['SCHOOL'],
                'Beddenwinkel': ['FURNITURE_HOME_STORE'],
                'Beek': ['RIVER_STREAM'],
                'Begeleid wonen locatie': ['PROFESSIONAL_AND_PUBLIC'],
                'Begraafplaats/Kerkhof': ['CEMETERY'],
                'Beschermde woonvorm/Woongroep': ['PROFESSIONAL_AND_PUBLIC'],
                'Bloedbank': ['DOCTOR_CLINIC'],
                'Bowlingbaan': ['CULTURE_AND_ENTERTAINEMENT'],
                'Broodjeszaak': ['RESTAURANT'],
                'Bruidswinkel': ['SHOPPING_AND_SERVICES'],
                'Buurthuis': ['CULTURE_AND_ENTERTAINEMENT'],
                'CBR-locatie/CBR-examencentrum': ['PROFESSIONAL_AND_PUBLIC'],
                'Crematorium': ['PROFESSIONAL_AND_PUBLIC'],
                'Computerwinkel': ['ELECTRONICS'],
                'Cosmeticawinkel': ['SHOPPING_AND_SERVICES'],
                'Cruyff Court': ['SPORTS_COURT'],
                'COVID-19 testsite/Vaccinatie site': ['OTHER'],
                'Dierenasiel': ['PROFESSIONAL_AND_PUBLIC'],
                'Drogist': ['PERSONAL_CARE'],
                'Edelsmid': ['JEWELRY'],
                'Fietsenwinkel/Fietsenmaker': ['SHOPPING_AND_SERVICES'],
                'Fysiotherapeut': ['DOCTOR_CLINIC'],
                'Galerie': ['ART_GALLERY'],
                'Gamewinkel/Spellenwinkel': ['TOY_STORE'],
                'Gedenkplaats/Gedenkteken': ['OTHER'],
                'Gemeentehuis': ['GOVERNMENT'],
                'Gevangenis/Huis van bewaring': ['PRISON_CORRECTIONAL_FACILITY'],
                'Gezondheidscentrum': ['DOCTOR_CLINIC'],
                'GGZ-locatie/GGZ-kliniek': ['DOCTOR_CLINIC'],
                'Hogeschool (HBO)': ['COLLEGE_UNIVERSITY'],
                'Horlogewinkel': ['JEWELRY'],
                'Huisarts': ['DOCTOR_CLINIC'],
                'ICT-bedrijf': ['OFFICES'],
                'Kaaswinkel': ['SHOPPING_AND_SERVICES'],
                'Kapper/Kapsalon': ['PERSONAL_CARE'],
                'Kerk': ['RELIGIOUS_CENTER'],
                'Keukenwinkel': ['FURNITURE_HOME_STORE'],
                'Kinderboerderij': ['ZOO_AQUARIUM'],
                'Kinderopvang': ['PROFESSIONAL_AND_PUBLIC'],
                'Kringloopwinkel': ['SHOPPING_AND_SERVICES'],
                'Lingeriewinkel': ['FASHION_AND_CLOTHING'],
                'Makelaar': ['OFFICES'],
                'Massagesalon': ['PERSONAL_CARE'],
                'Middelbare school': ['SCHOOL'],
                'Milieustraat': ['TRASH_AND_RECYCLING_FACILITIES'],
                'Mode zaak': ['FASHION_AND_CLOTHING'],
                'Monument': ['OTHER'],
                'Moskee': ['RELIGIOUS_CENTER'],
                'Motorvoertuigen tuningservice/Tuning garage': ['GARAGE_AUTOMOTIVE_SHOP'],
                'Multifunctioneel centrum (MFC)': ['PROFESSIONAL_AND_PUBLIC'],
                'Nagelsalon': ['PERSONAL_CARE'],
                'Oogarts': ['DOCTOR_CLINIC'],
                'Oplaadpaal': ['CHARGING_STATION'],
                'Opticien': ['DOCTOR_CLINIC'],
                'Orthodontist': ['DOCTOR_CLINIC'],
                'Parfumerie': ['SHOPPING_AND_SERVICES'],
                'Pedicuresalon': ['PERSONAL_CARE'],
                'Peuterspeelzaal': ['SCHOOL'],
                'Recycle bedrijf': ['TRASH_AND_RECYCLING_FACILITIES'],
                'Rijschool/Rijcursus/Theoriecursus locatie': ['PROFESSIONAL_AND_PUBLIC'],
                'Sanitairwinkel': ['FURNITURE_HOME_STORE'],
                'Schildersbedrijf': ['SHOPPING_AND_SERVICES'],
                'Schoenenwinkel': ['SHOPPING_AND_SERVICES'],
                'Slijterij': ['SHOPPING_AND_SERVICES'],
                'Snackbar': ['FAST_FOOD'],
                'Spoedeisendehulp': ['HOSPITAL_URGENT_CARE'],
                'Sportschool': ['GYM_FITNESS'],
                'Synagoge': ['RELIGIOUS_CENTER'],
                'Tabakswinkel/Sigarenzaak': ['SHOPPING_AND_SERVICES'],
                'Tandarts': ['DOCTOR_CLINIC'],
                'Tassenwinkel': ['SHOPPING_AND_SERVICES'],
                'Tattoo/Piercing/Bodymod winkel': ['SHOPPING_AND_SERVICES'],
                'Telefoonwinkel': ['TELECOM'],
                'Thuiszorgwinkel/Medische benodigdheden winkel': ['SHOPPING_AND_SERVICES'],
                'Toko': ['SUPERMARKET_GROCERY'],
                'Tolkenbureau/Vertaalbureau': ['OFFICES'],
                'Transportbedrijf': ['PROFESSIONAL_AND_PUBLIC'],
                'Tuincentrum': ['SHOPPING_AND_SERVICES'],
                'Uitvaartcentrum': ['PROFESSIONAL_AND_PUBLIC'],
                'Uitzendbureau': ['OFFICES'],
                'Universiteit': ['COLLEGE_UNIVERSITY'],
                'Verloskundigenpraktijk': ['SHOPPING_AND_SERVICES'],
                'Verzekeringsbedrijf': ['OFFICES'],
                'Verzorgingstehuis': ['PROFESSIONAL_AND_PUBLIC'],
                'Viswinkel': ['FOOD_AND_DRINK'],
                'Voedselbank': ['FOOD_AND_DRINK'],
                'Voetbalkooi': ['SPORTS_COURT'],
                'Voetbalveld': ['SPORTS_COURT'],
                'Voetbalclub': ['SPORTS_COURT', 'CLUB'],
                'Wasstraat/Carwash/Wasbox': ['CAR_WASH'],
                'Waterval': ['RIVER_STREAM']
            }
        }
    },

    // Maximum amount of search results in categories
    MAX_SEARCH_RESULTS: 10,

    // UpdateObject Waze Action
    UpdateObject: null,

    // Check if everything is ready before initializing
    tryInit(attempt = 1) {
        let retry = function() { 
            setTimeout(this.tryInit.bind(this), 500, attempt + 1); 
            return;
        }.bind(this);

        this.logString('Trying init. Attempt: ' + attempt);

        if( typeof $ === 'undefined' ||
            typeof W === 'undefined' ||
            typeof W.selectionManager === 'undefined'
        ) {
                retry();
                return;
            }

        this.init();
    },

    // Initialize the script
    init() {
        // Add event listeners
        W.selectionManager.events.register('selectionchanged', null, (e) => {
            this.onSelectionChange(e.selected);
        });

        // Get UpdateObject Waze action
        if(typeof (require) !== 'undefined') {
            this.UpdateObject = require('Waze/Action/UpdateObject');
        }
        else {
            this.UpdateObject = W.Action.UpdateObject;
        }

        this.logString('Initialized.');
    },

    // Called when WME selection changes
    onSelectionChange(selection) {
        // Only when there is 1 venue selected, we want to start
        // .. listening for category input
        if(selection.length !== 1) return;

        if(selection[0].model.type !== 'venue') return;

        this.startListenForCategoryInput();
    },

    // Start listening for category input
    startListenForCategoryInput() {
        let countryCode = W.model.topCountry.abbr;

        // The country is not supported
        if(this.countries[countryCode] === undefined) {
             // Add the notice
            let notice = $('<span style="font-weight: bold; color: #820023;">⚠️ WME Advanced Categories is currently not supported for this country (' + countryCode + ')</span>');
            $('.select2-choices').parent().parent().append(notice);
            return;
        }

        // Start listening
        this.logString('Start listening for category input for country ' + countryCode);

        $('.select2-input').on('input', () => {
            let input = $('.select2-input').val();

            this.searchForCategory(input, countryCode);
        });
    },

    // Search for category
    searchForCategory(text, countryCode) {
        // Search for matches
        let matches = [];

        for(const advancedCategory in this.countries[countryCode].categories) {
            if(text.length < 1) break;

            if(advancedCategory.toLowerCase().includes(text.toLowerCase()))
                matches.push(advancedCategory);

            if(matches.length >= this.MAX_SEARCH_RESULTS) break;
        }

        // Sort alphabetically
        matches = matches.sort();

        // Remove old results
        $('.wme-advanced-categories-result').remove();

        // Create search result options
        let resultsList = $('.select2-results');

        for(const i in matches) {
            let match = matches[i];

            let li = $('<li></li>');
            li.attr('class', 'wme-advanced-categories-result select2-results-dept-0 select2-result select2-result-selectable');
            li.attr('role', 'presentation');

            let div = $('<div>⭐ ' + this.highlightString(text, match) + '</div>');
            div.attr('class', 'select2-result-label');
            div.attr('role', 'option');
            li.append(div);

            li.on('click', () => {
                this.applyAdvancedCategory(match, countryCode);
            });
            resultsList.prepend(li);
        }

        // Remove 'no results' option, if there are results
        if(matches.length > 0)
            $('.select2-no-results').remove();
    },

    // Applies the advanced category to the venue
    applyAdvancedCategory(categoryName, countryCode) {
        let feature = W.selectionManager.getSelectedFeatures()[0];

        let newCategories = this.countries[countryCode].categories[categoryName];

        W.model.actionManager.add(new this.UpdateObject(feature.model, {
            'categories': newCategories
        }));

        // Drop mask on the options list
        $('#select2-drop-mask').click();

        // Add the success message
        let success = $('<span style="font-weight: bold; color: #01701f ;">✅ ' + categoryName + '</span>');
        $('.select2-choices').parent().parent().append(success);

        setTimeout(() => {
            success.remove();
        }, 1000);
    },

    // Highlights a string in another string
    highlightString(highlightedText, text) {
        const n = text.toUpperCase();
        const q = highlightedText.toUpperCase();
        const x = n.indexOf(q);
        if (!q || x === -1) {
            return text;
        }
        const l = q.length;
        return text.substr(0, x) + '<strong>' + text.substr(x, l) + '</strong>' + text.substr(x + l);
    },

    // Logs a message to the console
    logString(message) {
        console.log('[WME-Advanced-Categories] ' + message);
    }
};

WME_Advanced_Categories.tryInit();