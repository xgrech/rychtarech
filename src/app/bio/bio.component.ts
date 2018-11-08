import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.css']
})
export class BioComponent implements OnInit {

  page_name = "BIO"


  title1 = "Odkiaľ prišiel / Čo robí"
  obsah1 = "Richard Rychtarech sa narodil v roku 1977 v Bánovciach nad Bebravou, kde navštevoval základnú a strednú školu. Po maturite sa odsťahoval do Bratislavy. Absolvoval bakalárske štúdium masmediálnej komunikácie. Je prirodzene zvedavý a veľmi rád číta. Vyskúšal množstvo povolaní. Pracoval v poisťovni, v obchode, na biofarme vo Švajčiarsku, v záhradníckej firme vo Viedni, ako externý aj interný redaktor OK! magazínu. Posledných desať rokov chodí z Bratislavy pracovať a písať do cisterciánskeho kláštora v Dolnom Rakúsku. Je ženatý."

  title2 = "Publikoval poviedky a fejtóny na objednávku vo viacerých periodikách (Adam, Dotyky, EVA, OK! Magazine, PLAYBOY, Literárna revue Orol Tatranský)."
  obsah2_1 = "v roku 2009 sa s poviedkou V MESTE dostal do finále najstaršej slovenskej literárnej súťaže Jašíkove Kysuce.";
  obsah2_2 = "v roku 2010 publikačnú činnosť utlmil, aby sa mohol sústrediť na písanie kníh, čo ho baví najviac.";
  obsah2_3 = "v roku 2012 mu vyšiel román TVOJA NOČNÁ MORA (Marenčin PT)";
  obsah2_4 = "v roku 2014 román sLOVEnky(Marenčin PT)";
  obsah2_5 = "v roku 2016 novela NA SMRŤ PEKNÁ(Marenčin PT)";
  obsah2_6 = "v roku 2018 vyjde román sLOVEnky v holandskom preklade";
  obsah2_7 = "v súčasnosti pripravuje nový román z väzenského prostredia ";

  obsah_2 = "Publikačná činnosť";
  hobby = "Všetko, čo zarobí, míňa na cestovanie, dobré jedlo, najlepší chľast, kultúru, hudbu a knihy. Má rád tvorbu mladých slovenských výtvarníkov. Má rád chalanské hračky – auto, foťák, bicykle, soundsystém."

  hobby2 = "Rád poznáva nové miesta na bicykli, pláva, lyžuje, splavuje rieky a plance sa po kopcoch. Nič z toho nerobí poriadne. "

    constructor(private route:ActivatedRoute) { }

  ngOnInit() {

      this.route.queryParams
          .subscribe(
              (queryParams: Params) => {

                  if (queryParams['lang'] == 'sk') {
                      this.title1 = "Odkiaľ prišiel / Čo robí"
                      this.obsah1 = "Richard Rychtarech sa narodil v roku 1977 v Bánovciach nad Bebravou, kde navštevoval základnú a strednú školu. Po maturite sa odsťahoval do Bratislavy. Absolvoval bakalárske štúdium masmediálnej komunikácie. Je prirodzene zvedavý a veľmi rád číta. Vyskúšal množstvo povolaní. Pracoval v poisťovni, v obchode, na biofarme vo Švajčiarsku, v záhradníckej firme vo Viedni, ako externý aj interný redaktor OK! magazínu. Posledných desať rokov chodí z Bratislavy pracovať a písať do cisterciánskeho kláštora v Dolnom Rakúsku. Je ženatý."

                      this.title2 = "Publikoval poviedky a fejtóny na objednávku vo viacerých periodikách (Adam, Dotyky, EVA, OK! Magazine, PLAYBOY, Literárna revue Orol Tatranský)."
                      this.obsah2_1 = "v roku 2009 sa s poviedkou V MESTE dostal do finále najstaršej slovenskej literárnej súťaže Jašíkove Kysuce.";
                      this.obsah2_2 = "v roku 2010 publikačnú činnosť utlmil, aby sa mohol sústrediť na písanie kníh, čo ho baví najviac.";
                      this.obsah2_3 = "v roku 2012 mu vyšiel román TVOJA NOČNÁ MORA (Marenčin PT)";
                      this.obsah2_4 = "v roku 2014 román sLOVEnky(Marenčin PT)";
                      this.obsah2_5 = "v roku 2016 novela NA SMRŤ PEKNÁ(Marenčin PT)";
                      this.obsah2_6 = "v roku 2018 vyjde román sLOVEnky v holandskom preklade";
                      this.obsah2_7 = "v súčasnosti pripravuje nový román z väzenského prostredia ";

                      this.obsah_2 = "Publikačná činnosť";
                      this.hobby = "Všetko, čo zarobí, míňa na cestovanie, dobré jedlo, najlepší chľast, kultúru, hudbu a knihy. Má rád tvorbu mladých slovenských výtvarníkov. Má rád chalanské hračky – auto, foťák, bicykle, soundsystém."

                      this.hobby2 = "Rád poznáva nové miesta na bicykli, pláva, lyžuje, splavuje rieky a plance sa po kopcoch. Nič z toho nerobí poriadne. "

                  }

                  if (queryParams['lang'] == 'en') {

                      this.title1 = "Where he comes from?"
                      this.obsah1 = "Richard Rychtarech was born in 1977 in Bánovciach nad Bebravou. There he went to primary school and highschool. After his graduation he moved to Bratislava. He  has a bachelor degree in mass communication studies. Richard is naturally curious and he really loves to read. He's tried a wide variety of professions. He's worked in insurance, in commerce, on a bio farm in Switzerland, for an international company in Vienna and as an editor for OK! Magazine, both externally and as a member of the staff. For the last ten years he's commuted between Bratislava and a Cistercian monastery in Lower Austria, where he works and writes. "
                      this.title2 = "He's published stories and feuilleton on demand in several publications (Adam, Dotyky, EVA, OK! Magazine, PLAYBOY, Literárna revue Orol Tatranský)."
                      this.obsah2_1 = "In the year 2009  he made it to the finals of the oldest literary contest in Slovakia, the Jašíkove Kysuce  contest, with his story IN THE CITY. "
                      this.obsah2_2 = "In 2010 he cut back on his work as a journalist to dedicate his time to writing books, which he loves most of all. "
                      this.obsah2_3 = "In 2012 he published his first novel YOUR NIGHTMARE. "
                      this.obsah2_4 = "In the year 2014 his novel SLOVAK LADIES appeared in print. "
                      this.obsah2_5 = "In 2016 his novel DEADLY PRETTY reached the book shelfs. "
                      this.obsah2_6 = "All his books were published by  the Slovak publishing house Marenčin PT. "
                      this.obsah2_7 = "In 2018 his novel SLOVAK LADIES will appear in Dutch, published by Donkichod. "
                      this.obsah_2 = "PUBLISHED WORK"
                      this.hobby = "Everything that he earns he spends on traveling, good food, the best drinks, culture, music, books. He adores the work of young Slovak artists. "
                      this.hobby2 = "He certainly doesn't scorn technically advanced toys such as cars, cameras, bikes or soundsystems. He loves to explore new cities on his bike, swims, goes skiing, and hiking in the mountains. He's an expert in none of these activities."


                  }

                  if (queryParams['lang'] == 'nl') {

                      this.title1 = "Where he comes from?"
                      this.obsah1 = "Richard Rychtarech werd geboren in 1977 in  Bánovciach nad Bebravou. Daar ging hij naar de basisschool en ook naar de secundaire school. Na het behalen van zijn secundair diploma verhuisde hij naar Bratislava. Hij heeft een bachelor diploma in massacommunicatie. Richard is van nature erg nieuwsgierig en houdt enorm van lezen. Hij heeft een hele reeks beroepen getest. Hij werkte onder andere in verzekeringen, in sales, op een bio-boerderij in Zwitserland, voor een internationale firma in Wenen en als een redacteur voor OK! Magazine, freelance, maar ook als vaste medewerker. De laatste tien jaar pendelt hij tussen Bratislava en een klooster van de Cisterciënzers in Neder-Oostenrijk. Daar werkt en schrijft hij. "
                      this.title2 = "Richard publiceerde verhalen en feuilletons op bestelling voor verschillende publicaties (Adam, Dotyky, EVA, OK! Magazine, PLAYBOY, Literárna revue Orol Tatranský)."
                      this.obsah2_1 = "In 2009 bereikte hij de finale van de oudste Slowaakse literaire wedstrijd,  Jašíkove Kysuce, met zijn verhaal IN DE STAD. "
                      this.obsah2_2 = "In 2010 zette hij zijn werk als journalist op een laag pitje om al zijn tijd te wijden aan het schrijven van boek, hetgeen hij het liefste doet. "
                      this.obsah2_3 = "In 2012 publiceerde hij zijn eerste roman JE NACHTMERRIE. "
                      this.obsah2_4 = "In 2014 verscheen zijn boek SLOWAAKSE VROUWEN. "
                      this.obsah2_5 = "In 2016 kwam zijn roman DODELIJK MOOI uit. "
                      this.obsah2_6 = "Al zijn boeken verschenen bij uitgeverij Marenčin PT. "
                      this.obsah2_7 = "In 2018 zal SlOWAAKSE VROUWEN verschijnen in Nederlandse vertaling, via uitgeverij Donkichod. "
                      this.obsah_2 = "PUBLICATIES"
                      this.hobby = "Alles dat hij verdient, geeft hij uit aan reizen, lekker eten, de beste drankjes, cultuur, muziek, boeken. Hij houdt enorm van het werk van jonge Slowaakse kunstenaars. Hij haalt zeker zijn neus niet op voor technisch geavanceerd speeltuig zoals auto's, fototoestellen, fietsen of geluidsinstallaties. Hij verkent graag nieuwe steden op de fiets, houdt van zwemmen, skiën en trekt graag door de bergen. In geen enkele van deze activiteiten blinkt hij uit. "
                      this.hobby2 = "Hij houdt enorm van het werk van jonge Slowaakse kunstenaars. Hij haalt zeker zijn neus niet op voor technisch geavanceerd speeltuig zoals auto's, fototoestellen, fietsen of geluidsinstallaties. Hij verkent graag nieuwe steden op de fiets, houdt van zwemmen, skiën en trekt graag door de bergen. In geen enkele van deze activiteiten blinkt hij uit. "

                  }
              }
          )
  }

}
