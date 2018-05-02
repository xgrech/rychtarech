import {Injectable, OnInit} from "@angular/core";
import {Http, Response} from "@angular/http";
import 'rxjs/Rx';
import {Reference} from "./shared/reference.model";
import {forEach} from "@angular/router/src/utils/collection";
import {Observable} from "rxjs/Observable";
import {Clanok} from "./shared/clanok.model";


@Injectable()
export class ServerService implements OnInit{

    data:any;
    language:string = null;

    clanky:Clanok[] = []

    constructor(private http: Http, ) {}
    ngOnInit() {
    }

    loadClanky() {
        return this.clanky;
    }

    storeReference(data: Reference[]) {
        return this.http.put('https://rychtarech-52017.firebaseio.com/reference.json', data);
    }
    storeClanky(data: any) {
        return this.http.put('https://rychtarech-52017.firebaseio.com/clanky.json', data);
    }
    storeAktuality(data: any) {
        return this.http.put('https://rychtarech-52017.firebaseio.com/aktuality.json', data);
    }
    storeLinky(data: any) {
        return this.http.put('https://rychtarech-52017.firebaseio.com/linky.json', data);
    }
    storeMailbox(data: any) {
        return this.http.put('https://rychtarech-52017.firebaseio.com/mailbox.json', data);
    }
    addSubscribe(data: any) {
        return this.http.put('https://rychtarech-52017.firebaseio.com/subscribe.json', data);
    }




    getReference() {
        return this.http.get('https://rychtarech-52017.firebaseio.com/reference.json')
            .map(
                (response: Response) => {
                    const data = response.json();
                    return data;
                }
            )
            .catch(
                (error: Response) => {
                    return Observable.throw('Something went wrong');
                }
            );
    }


    getClanky() {
        return new Promise((resolve, reject) => {
            this.http
                .get('https://rychtarech-52017.firebaseio.com/clanky.json')
                .map(res => res.json())
                .subscribe(response => {
                    this.clanky = response
                    resolve(true);
                })
        })
    }

    // getClanky() {
    //     return this.http.get('https://rychtarech-52017.firebaseio.com/clanky.json')
    //         .map(
    //             (response: Response) => {
    //                 const data = response.json();
    //                 this.clanky = data;
    //                 console.log(data)
    //             }
    //         )
    //         .catch(
    //             (error: Response) => {
    //                 return Observable.throw('Something went wrong');
    //             }
    //         );
    // }

    getAktuality() {
        return this.http.get('https://rychtarech-52017.firebaseio.com/aktuality.json')
            .map(
                (response: Response) => {
                    const data = response.json();
                    return data;
                }
            )
            .catch(
                (error: Response) => {
                    return Observable.throw('Something went wrong');
                }
            );
    }

    getLinky() {
        return this.http.get('https://rychtarech-52017.firebaseio.com/linky.json')
            .map(
                (response: Response) => {
                    const data = response.json();
                    return data;
                }
            )
            .catch(
                (error: Response) => {
                    return Observable.throw('Something went wrong');
                }
            );
    }
    getMailbox() {
        return this.http.get('https://rychtarech-52017.firebaseio.com/mailbox.json')
            .map(
                (response: Response) => {
                    const data = response.json();
                    return data;
                }
            )
            .catch(
                (error: Response) => {
                    return Observable.throw('Something went wrong');
                }
            );
    }
    getSubscribe() {
        return this.http.get('https://rychtarech-52017.firebaseio.com/subscribe.json')
            .map(
                (response: Response) => {
                    const data = response.json();
                    return data;
                }
            )
            .catch(
                (error: Response) => {
                    return Observable.throw('Something went wrong');
                }
            );
    }



}