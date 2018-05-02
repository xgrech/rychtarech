import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";


@Component({
    selector: 'app-knihovna',
    templateUrl: './knihovna.component.html',
    styleUrls: ['./knihovna.component.css']
})
export class KnihovnaComponent implements OnInit {


    screenHeight = window.outerHeight;

    @ViewChild("slovenky", {read: ElementRef}) slovenky: ElementRef;
    @ViewChild("nsp", {read: ElementRef}) nsp: ElementRef;
    @ViewChild("tnm", {read: ElementRef}) tnm: ElementRef;


    nsp_nazov = "NA SMRŤ PEKNÁ"
    nsp_desc = "Budíte sa v jednej posteli, raňajkujete pri jednom stole, viete o sebe všetko... aspoň si to myslíte. Ako dobre poznáte človeka, ktorého milujete, aby ste si boli istí, naozaj istí, že vám pri ňom nejde o život? Túto otázku Sofia nemohla dostať z hlavy, odkedy sa jej do rúk dostala šokujúca lekárska správa. Kto je, dopekla, Viktor?! Niektoré nitky osudu sú tak beznádejne zamotané, že jedinou možnosťou, ako sa nezrútiť, je vykašľať sa na hľadanie súvislostí, spraviť z nich dredy a baviť sa ďalej. Aj keď so zlým tušením, že nie nadlho."
    tnm_nazov = "TVOJA NOČNÁ MORA"
    tnm_desc = "Klára, ambiciózna obchodná riaditeľka, urobila zásadnú chybu. Pripravila svojho šéfa o milióny eur. V strachu o vlastnú bezpečnosť sa dáva na útek, nechávajúc za sebou prázdny byt aj celý doterajší život. Neďaleko kláštora, kam sa ukryla, stretáva študenta Rada, ktorý prežíva zo dňa na deň v bezstarostnom žúrovom opare. Napriek zjavnej odlišnosti pováh obaja dúfajú, že v tom druhom nájdu lásku. Postupne však zisťujú, že ich k sebe priťahuje čosi temnejšie a osudovejšie ako vzájomná náklonnosť. Desaťročia staré tajomstvo sa derie na povrch..."
    slov_nazov = "sLOVEnky"
    slov_desc = "Sú tri. Priateľky, spolubývajúce, frajerky, milenky. Možno ste ich stretli vo výťahu, keď utekali do práce, čo ich nebaví, alebo na ďalšie neúspešné rande. Občas sa rozbijú, alebo sa vyspia s úplným magorom. Neustále sa im vracajú traumy z minulosti. Prečo je také ťažké nájsť si normálneho chlapa? Koľko tisíc kilometrov treba preletieť, aby človek našiel, čo hľadá? Nebol by život oveľa jednoduchší bez otázok? Je lepšie rezignovať a akceptovať realitu? Nie pre Miu, Zet a Ši. Ony sa nevzdávajú."


    nsp_nazov_sk = 'NA SMRŤ PEKNÁ'
    nsp_desc_sk = "Budíte sa v jednej posteli, raňajkujete pri jednom stole, viete o sebe všetko... aspoň si to myslíte. Ako dobre poznáte človeka, ktorého milujete, aby ste si boli istí, naozaj istí, že vám pri ňom nejde o život? Túto otázku Sofia nemohla dostať z hlavy, odkedy sa jej do rúk dostala šokujúca lekárska správa. Kto je, dopekla, Viktor?! Niektoré nitky osudu sú tak beznádejne zamotané, že jedinou možnosťou, ako sa nezrútiť, je vykašľať sa na hľadanie súvislostí, spraviť z nich dredy a baviť sa ďalej. Aj keď so zlým tušením, že nie nadlho."
    nsp_nazov_en = 'DEADLY PRETTY'
    nsp_desc_en = "You wake up in a single bed, you have breakfast at a table for one, you know everything about yourself... at least that's what you think. How well do you know the person whom you love? How sure can you be that you don't risk your life being with that person? That's the question Sofia can't get out of her head. Ever since she got that shocking message from her doctor. Who the hell is Viktor?! Sometimes the web of fate is so incredibly messy that the only possibility you have to not break down, is to forget all about it, to not look for connections, and have some fun along the way. Even if you have the nagging feeling it won't be for long. "
    nsp_nazov_nl = 'DODELIJK MOOI'
    nsp_desc_nl = "Je wordt wakker in een eenpersoonsbed, je ontbijt aan een tafel voor één person, je weet alles over jezelf... tenminste, dat is wat je denkt. Hoe goed ken je de persoon van wie je houdt? Hoe zeker kan je zijn dat je jouw leven niet riskeert door samen te zijn met deze persoon? Dat is de vraag die Sofia niet uit haar hoofd kan krijgen. Sinds ze dat schokkende bericht kreeg van haar dokter. Wie is Viktor in godsnaam?! Soms is het web van het noodlot zo compliceerd dat de enige mogelijkheid die je hebt om niet in te storten, gewoon alles vergeten is, en niet te zoeken naar verbanden, en je gewoon te amuseren. Al is het dan met het zeurende gevoel dat je plezier niet lang zal duren. "

    tnm_nazov_sk = "TVOJA NOČNÁ MORA"
    tnm_nazov_en = "YOUR NIGHTMARE"
    tnm_nazov_nl = "JE NACHTMERRIE"
    tnm_desc_sk = "Klára, ambiciózna obchodná riaditeľka, urobila zásadnú chybu. Pripravila svojho šéfa o milióny eur. V strachu o vlastnú bezpečnosť sa dáva na útek, nechávajúc za sebou prázdny byt aj celý doterajší život. Neďaleko kláštora, kam sa ukryla, stretáva študenta Rada, ktorý prežíva zo dňa na deň v bezstarostnom žúrovom opare. Napriek zjavnej odlišnosti pováh obaja dúfajú, že v tom druhom nájdu lásku. Postupne však zisťujú, že ich k sebe priťahuje čosi temnejšie a osudovejšie ako vzájomná náklonnosť. Desaťročia staré tajomstvo sa derie na povrch..."
    tnm_desc_en = "Klara, an ambitious business executive, has made a tragic mistake. She's lost her boss millions of euros. Fearing for her own safety she goes on the run. She leaves an empty apartment and her entire life behind. Not far from the monastery where she's hiding she meets a student called Rada, who lives a careless life, going from party to party. Although they have completely different attitudes towards life, they both hope to find true love in the other. Gradually they come to see that what's brought them together is something far darker and more fateful than just mutual attraction. A decades old secret resurfaces... "
    tnm_desc_nl = "Klara, een ambitieuze zakenvrouw, heeft een tragische fout begaan. Door haar heeft haar baas miljoenen euro's verloren. Vrezend voor haar eigen leven, is ze op de vlucht geslagen. Ze liet een lege woning en haar hele leven achter. Niet ver van het klooster waar ze zich schuilhoudt, leert ze een student kennen. Rada lanterfantert en gaat van feestje naar feestje. Hoewel hun levens totaal anders zijn, hopen ze toch de liefde te vinden in de ander. Na verloop van tijd merken ze dat datgene wat hen heeft samengebracht geen alledaagse wederzijdse aantrekking is, maar iets donkers en noodlottigs. Een tientallen jaren oud geheim komt terug naar boven... "

    slov_nazov_sk = "sLOVEnky"
    slov_nazov_en = "SLOVAK LADIES "
    slov_nazov_nl = "SLOWAAKSE VROUWEN "
    slov_desc_sk = "Sú tri. Priateľky, spolubývajúce, frajerky, milenky. Možno ste ich stretli vo výťahu, keď utekali do práce, čo ich nebaví, alebo na ďalšie neúspešné rande. Občas sa rozbijú, alebo sa vyspia s úplným magorom. Neustále sa im vracajú traumy z minulosti. Prečo je také ťažké nájsť si normálneho chlapa? Koľko tisíc kilometrov treba preletieť, aby človek našiel, čo hľadá? Nebol by život oveľa jednoduchší bez otázok? Je lepšie rezignovať a akceptovať realitu? Nie pre Miu, Zet a Ši. Ony sa nevzdávajú."
    slov_desc_en = "There's three of them. Friends, roommates, girlfriends, lovers. Maybe you've bumped into them in the elevator, when they were rushing to work, work that they don't like, or off to the next dissapointing date. Sometimes they fight, or they sleep with a complete weirdo. They're constantly being haunted by demons from the past. Why is it so hard to find a normal guy? How many thousands of miles does a person need to cover to finally find what he or she is looking for? Wouldn't life be so much simpler without all these questions? Is it better to give up and to accept reality? Not for Mia, Zet and Ši. They don't give up. "
    slov_desc_nl = "Ze zijn met drie. Vriendinnen, huisgenoten, liefjes, minnaressen. Misschien ben je hen wel al eens tegen het lijf gebotst, in de lift, als ze naar hun werk rushen, werk waar ze niet om geven, of naar de volgende teleurstellende date. Soms vechten ze, of ze slapen met een compleet gestoorde kerel. Ze worden constant achtervolgd door demonen uit het verleden. Waarom is het zo moeilijk om een normale vent te vinden? Hoeveel duizenden kilometers moet iemand marcheren om dat te vinden wat hij of zij zoekt? Zou het leven niet veel simpeler zijn zonder al die vragen? Is het beter om op te geven en de realiteit te aanvaarden? Niet voor Mia, Zet en Ši. Zij geven niet op. "


    kupit_btn = "KÚPIŤ"
    kupit_btn_en_nl = "BUY"


    slov_comm_state = false;
    nsp_comm_state = false;
    tnm_comm_state = false;

    constructor(private route: ActivatedRoute) {
    }


    before() {
        console.log('before')
    }
    after() {
        console.log('after')
    }

    ngOnInit() {
        this.route.queryParams
            .subscribe(
                (queryParams: Params) => {

                    if (queryParams['lang'] == 'sk') {
                        this.kupit_btn = "KÚPIŤ"

                        this.nsp_nazov = this.nsp_nazov_sk;
                        this.nsp_desc = this.nsp_desc_sk;
                        this.tnm_nazov = this.tnm_nazov_sk;
                        this.tnm_desc = this.tnm_desc_sk;
                        this.slov_nazov = this.slov_nazov_sk;
                        this.slov_desc = this.slov_desc_sk;
                    }

                    if (queryParams['lang'] == 'en') {
                        this.kupit_btn = this.kupit_btn_en_nl;

                        this.nsp_nazov = this.nsp_nazov_en;
                        this.nsp_desc = this.nsp_desc_en;
                        this.tnm_nazov = this.tnm_nazov_en;
                        this.tnm_desc = this.tnm_desc_en;
                        this.slov_nazov = this.slov_nazov_en;
                        this.slov_desc = this.slov_desc_en;
                    }

                    if (queryParams['lang'] == 'nl') {
                        this.kupit_btn = this.kupit_btn_en_nl;

                        this.nsp_nazov = this.nsp_nazov_nl;
                        this.nsp_desc = this.nsp_desc_nl;
                        this.tnm_nazov = this.tnm_nazov_nl;
                        this.tnm_desc = this.tnm_desc_nl;
                        this.slov_nazov = this.slov_nazov_nl;
                        this.slov_desc = this.slov_desc_nl;
                    }
                }
            )
    }

    goSlovenky() {
        window.open("https://www.martinus.sk/?uItem=185877", "_blank");
        // window.location.href = '';
    }

    goNaSmrt() {
        window.open("https://www.martinus.sk/?uItem=254749", "_blank");

    }

    goTvojaNocna() {
        window.open("https://www.martinus.sk/?uItem=134651", "_blank");
    }


    //texxt files

}
