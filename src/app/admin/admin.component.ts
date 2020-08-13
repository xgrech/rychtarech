import {Component, DoCheck, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {Reference} from "../shared/reference.model";
import {ServerService} from "../server.service";
import {Clanok} from "../shared/clanok.model";
import {Komentar} from "../shared/komentar.model";
import {Linka} from "../shared/linka.model";
import {Sprava} from "../shared/message.model";
import {Buffer} from 'buffer/';
import * as crypto from 'crypto-browserify';

@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

    private privateKey: string;
    private dataKey: string;

    locker = true; // todo prepis na false ked ukoncis deploy
    vstup: string = '';

    referencia: Reference = new Reference('', '', '', '', '', '', '', '');
    referencie: Reference[] = [];

    clanok: Clanok = new Clanok('', '', '', '', [''], [], '', ["", "", ""], 0)
    clanky: Clanok[] = [];

    aktualita: Clanok = new Clanok('', '', '', '', [''], [], '', ["", "", ""], 0)
    aktuality: Clanok[] = [];

    link: Linka = new Linka('', '', '', '', '')
    linky: Linka[] = []

    edit_zaloha: any;

    actual_page = 'Údržba';
    active_page: string = 'uvod';
    //@Output() zomin = new EventEmitter<boolean>();

    private textareaValue = '';

    error = "";

    toogleMenu = false;

    edit_mode = false;

    mailbox: Sprava[];
    subscribe: string[];

    new_uvod = false;

    fileToUpload: File = null;

    constructor(private serverService: ServerService) {
        this.clanky = this.serverService.loadClanky()
    }

    ngOnInit() {
        window.scrollTo(0, 0)

        this.serverService.getReference()
            .subscribe(
                (data: Reference[]) => this.referencie = data,
                (error) => console.log(error),
            )

        this.serverService.getAktuality()
            .subscribe(
                (data: Clanok[]) => this.aktuality = data,
                (error) => console.log(error),
            )
        this.serverService.getLinky()
            .subscribe(
                (data: Linka[]) => this.linky = data,
                (error) => console.log(error),
            )
        this.serverService.getMailbox()
            .subscribe(
                (data: Sprava[]) => this.mailbox = data,
                (error) => console.log(error),
            )
        this.serverService.getSubscribe()
            .subscribe(
                (data: string[]) => this.subscribe = data,
                (error) => console.log(error),
            )
        this.serverService.getElephant()
            .subscribe(
                (data: any) => {
                    this.privateKey = data.prv;
                    this.dataKey = data.pas;
                },
                (error) => console.log(error),
            );
    }

    // upload file

    handleFileInput(files: FileList) {
        this.fileToUpload = files.item(0);
    }



    clear_data() {
        this.referencia = new Reference('', '', '', '', '', '', '', '');
        this.clanok = new Clanok('', '', '', '', [''], [], '', ["", "", ""], 0)
        this.aktualita = new Clanok('', '', '', '', [''], [], '', ["", "", ""], 0)
        this.link = new Linka('', '', '', '', '')
        this.error = '';
    }

    edit_mode_clanok(clanok: Clanok) {
        this.edit_mode = true;
        this.clanok = clanok;
        window.scrollTo(0, 100)

    }

    edit_mode_reff(reff: Reference) {
        this.edit_mode = true;
        this.referencia = reff;
        window.scrollTo(0, 100)

    }

    edit_mode_aktualita(akt: Clanok) {
        try {
            this.edit_mode = true;
            this.aktualita = akt;
            window.scrollTo(0, 100)
        }
        catch (e) {
            console.log(e)
        }


    }

    edit_mode_linka(link: Linka) {
        this.edit_mode = true;
        this.link = link;
        window.scrollTo(0, 100)

    }

    closeEdit() {

        this.edit_mode = false;
        this.clear_data();
        this.serverService.getReference()
            .subscribe(
                (data: Reference[]) => this.referencie = data,
                (error) => console.log(error),
            )
        this.serverService.getAktuality()
            .subscribe(
                (data: Clanok[]) => this.aktuality = data,
                (error) => console.log(error),
            )
        this.serverService.getLinky()
            .subscribe(
                (data: Linka[]) => this.linky = data,
                (error) => console.log(error),
            )
    }


    swap_up(prvok, pole) {
        // console.log(pole)
        let change: any;
        let index = 0;
        for (let item of pole) {
            if (item == prvok) {
                // console.log(index)

                change = pole[index];
                // console.log(pole[index])
                pole[index] = pole[index + 1];
                pole[index + 1] = change;

                // console.log(pole)

            }
            else index += 1;
        }
    }


    zamok() {
        this.clear_data();
        this.edit_mode = false;
        this.locker = !this.locker;
    }

    odomkni(p) {
        const buffer = new Buffer(p);
        const encrypted = crypto.privateEncrypt({key: this.privateKey, padding: crypto.constants.RSA_PKCS1_PADDING}, buffer);
        if (encrypted.toString('base64') == this.dataKey) {
            this.locker = true;
        }
        this.vstup = '';
    }

    doLinkObsahToVal(ev) {
        try {
            this.link.obsah = ev.target.value;
        } catch (e) {
            console.info('could not set textarea-value');
        }
    }


    //
    //
    // doTextareaValueChange4(ev) {
    //     try {
    //         this.aktualita.obsah[0] = ev.target.value;
    //     } catch(e) {
    //         console.info('could not set textarea-value');
    //     }
    // }
    // doTextareaValueChange5(ev) {
    //     try {
    //         this.aktualita.obsah[1] = ev.target.value;
    //     } catch(e) {
    //         console.info('could not set textarea-value');
    //     }
    // }
    // doTextareaValueChange6(ev) {
    //     try {
    //         this.aktualita.obsah[2] = ev.target.value;
    //     } catch(e) {
    //         console.info('could not set textarea-value');
    //     }
    // }


    onToogleMenu() {
        this.clear_data();
        this.edit_mode = false;
        this.toogleMenu = !this.toogleMenu;
        //this.zomin.emit(this.toogleMenu);
    }

    ruter(zmena: string) {
        if (this.edit_mode == false) this.active_page = zmena;
        else this.error = "Nemôžete opustiť podstránku kým neukončíte edit mode"
    }

    saveRef() {
        this.error = "";

        if (!this.edit_mode) {
            if (!this.edit_mode) {
                if (this.referencie == null) {
                    // console.log("referencia je undefined")
                    this.referencie = [new Reference(this.referencia.meno, this.referencia.photo, this.referencia.povolanie_sk, this.referencia.povolanie_en, this.referencia.povolanie_nl, this.referencia.text_sk, this.referencia.text_en, this.referencia.text_nl)]
                }
                else this.referencie.unshift(this.referencia);
            }
        }
        this.serverService.storeReference(this.referencie)
            .subscribe(
                (response) => console.log(''),
                (error) => console.log(error)
            )
        this.referencia = new Reference('', '', '', '', '', '', '', '');
        this.edit_mode = false;
        // this.clear_data();

        this.new_uvod = false;
    }

    saveClanok() {
        console.log('fire save')
        this.error = "";


        if (!this.edit_mode) {
            if (this.clanky == null) {
                // console.log("clanok je undefined")
                this.clanky = [new Clanok(this.clanok.title, this.clanok.title_description, this.clanok.date, this.clanok.perex, this.clanok.obsah, this.clanok.komenty, this.clanok.titulna_fotka, this.clanok.fotky, 0)]
            }
            else {
                this.clanky.unshift(this.clanok);
            }

        }
        this.serverService.storeClanky(this.clanky)
            .subscribe(
                (response) => console.log(''),
                (error) => console.log(error)
            )
        this.clanok = new Clanok('', '', '', '', [''], [], '', ["", "", ""], 0)
        this.clanok.obsah = [];
        this.edit_mode = false;

    }

    saveLinka() {
        this.error = "";


        if (!this.edit_mode) {
            if (this.linky == null) {
                // console.log("linky je undefined")
                this.linky = [new Linka(this.link.title, this.link.title_foto, this.link.datum, this.link.obsah, this.link.link)]
            }
            else {
                this.linky.unshift(this.link);
            }
        }

        this.serverService.storeLinky(this.linky)
            .subscribe(
                (response) => console.log(''),
                (error) => console.log(error)
            )
        this.link = new Linka('', '', '', '', '')
        this.edit_mode = false;
        // this.clear_data();

    }

    saveAktualita() {
        this.error = "";

        if (!this.edit_mode) {
            if (this.aktuality == null) {
                // console.log("aktualita je undefined")
                this.aktuality = [new Clanok(this.aktualita.title, this.aktualita.title_description, this.aktualita.date, this.aktualita.perex, this.aktualita.obsah, this.aktualita.komenty, this.aktualita.titulna_fotka, this.aktualita.fotky, 0)]
            }
            else {
                this.aktuality.unshift(this.aktualita);
            }
        }
        this.serverService.storeAktuality(this.aktuality)
            .subscribe(
                (response) => console.log(response),
                (error) => console.log(error)
            )
        this.aktualita = new Clanok('', '', '', '', [''], [], '', ["", "", ""], 0)
        this.edit_mode = false;
        // this.clear_data();

    }


    zmazRef(ref: Reference) {
        this.error = "";

        this.clear_data();
        this.edit_mode = false;

        let idx = 0;
        for (let item of this.referencie) {
            if (ref == item) this.referencie.splice(idx, 1);
            idx += 1;
        }
        this.serverService.storeReference(this.referencie)
            .subscribe(
                (response) => console.log(''),
                (error) => console.log(error)
            )

    }

    zmazLinka(link: Linka) {
        this.error = "";

        this.clear_data();
        this.edit_mode = false;

        let idx = 0;
        for (let item of this.linky) {
            if (link == item) this.linky.splice(idx, 1);
            idx += 1;
        }
        this.serverService.storeLinky(this.linky)
            .subscribe(
                (response) => console.log(''),
                (error) => console.log(error)
            )
    }


    zmazClanok(clk: Clanok) {
        this.error = "";

        this.clear_data();
        this.edit_mode = false;

        console.log(this.clanky);
        let idx = 0;
        for (let item of this.clanky) {
            if (clk == item) this.clanky.splice(idx, 1);
            idx += 1;
        }
        this.serverService.storeClanky(this.clanky)
            .subscribe(
                (response) => console.log(''),
                (error) => console.log(error)
            )

    }

    zmazAktualita(akt: Clanok) {
        this.error = "";

        this.clear_data();
        this.edit_mode = false;

        console.log(this.aktuality);
        let idx = 0;
        for (let item of this.aktuality) {
            if (akt == item) this.aktuality.splice(idx, 1);
            idx += 1;
        }
        this.serverService.storeAktuality(this.aktuality)
            .subscribe(
                (response) => console.log(''),
                (error) => console.log(error)
            )
    }

    zmazKomment(comm: Komentar, clk: Clanok) {
        this.error = "";

        this.edit_mode = false;
        this.clear_data();

        let idx = 0;
        let edx = 0;
        for (let item of this.clanky) {
            if (clk == item)
                for (let coment of item.komenty) {
                    if (comm == coment)
                        this.clanky[edx].komenty.splice(idx, 1);
                    idx += 1;

                    this.serverService.storeClanky(this.clanky)
                        .subscribe(
                            (response) => console.log(),
                            (error) => console.log(error)
                        )
                }
            edx += 1;
        }

    }

    zmazKommentAkt(comm: Komentar, akt: Clanok) {
        this.edit_mode = false;

        this.error = "";

        this.edit_mode = false;
        this.clear_data();

        let idx = 0;
        let edx = 0;
        for (let item of this.aktuality) {
            if (akt == item)
                for (let coment of item.komenty) {
                    if (comm == coment)
                        this.aktuality[edx].komenty.splice(idx, 1);
                    idx += 1;

                    this.serverService.storeAktuality(this.aktuality)
                        .subscribe(
                            (response) => console.log(),
                            (error) => console.log(error)
                        )
                }
            edx += 1;
        }


    }
}
