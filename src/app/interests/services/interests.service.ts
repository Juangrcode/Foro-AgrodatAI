import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Interest } from '../../models/interests';
import { Observable } from 'rxjs';
import { HAMMER_LOADER } from '@angular/platform-browser';

@Injectable({
    providedIn: 'root',
})
export class InterestsService {
    URL_API = 'http://localhost:8000/api/interests/';
    // URL_API = 'http://localhost:3000/interests/';
    // URL_API = [
    //     {
    //         id: 1,
    //         name: 'Acuicola - Pesca',
    //         completed: false,
    //     },
    //     {
    //         id: 2,
    //         name: 'Avicola',
    //         completed: false,
    //     },
    //     {
    //         id: 3,
    //         name: 'Concentración de la tierra',
    //         completed: false,
    //     },
    //     {
    //         id: 4,
    //         name: 'Reconversión de ganadería',
    //         completed: false,
    //     },
    //     {
    //         id: 5,
    //         name: 'Suelos Arenosos',
    //         completed: false,
    //     },
    //     {
    //         id: 6,
    //         name: 'Suelos Arcillosos',
    //         completed: true,
    //     },
    //     {
    //         id: 7,
    //         name: 'Fruticultura',
    //         completed: false,
    //     },
    //     {
    //         id: 8,
    //         name: 'Fertirrigación',
    //         completed: false,
    //     },
    //     {
    //         id: 9,
    //         name: 'Fertilidad del Suelo',
    //         completed: false,
    //     },
    //     {
    //         id: 10,
    //         name: 'Suelos Ácidos',
    //         completed: false,
    //     },
    //     {
    //         id: 11,
    //         name: 'Fertilidad del Suelo',
    //         completed: false,
    //     },
    //     {
    //         id: 12,
    //         name: 'Fitomejoramiento',
    //         completed: false,
    //     },
    //     {
    //         id: 13,
    //         name: 'Ganado',
    //         completed: false,
    //     },
    //     {
    //         id: 14,
    //         name: 'Carne',
    //         completed: false,
    //     },
    //     {
    //         id: 15,
    //         name: 'Ganaderia',
    //         completed: true,
    //     },
    //     {
    //         id: 16,
    //         name: 'Brahman',
    //         completed: false,
    //     },
    //     {
    //         id: 17,
    //         name: 'Antrax',
    //         completed: false,
    //     },
    //     {
    //         id: 18,
    //         name: 'Charolais',
    //         completed: false,
    //     },
    //     {
    //         id: 19,
    //         name: 'Razas',
    //         completed: false,
    //     },
    //     {
    //         id: 20,
    //         name: 'Jersey',
    //         completed: false,
    //     },
    //     {
    //         id: 21,
    //         name: 'Vacuno',
    //         completed: false,
    //     },
    //     {
    //         id: 22,
    //         name: 'Mastitis',
    //         completed: false,
    //     },
    //     {
    //         id: 23,
    //         name: 'Vaca',
    //         completed: false,
    //     },
    //     {
    //         id: 24,
    //         name: 'Cerdo',
    //         completed: false,
    //     },
    //     {
    //         id: 25,
    //         name: 'Pietrain',
    //         completed: false,
    //     },
    //     {
    //         id: 26,
    //         name: 'Landrace',
    //         completed: false,
    //     },
    //     {
    //         id: 27,
    //         name: 'Yorkshire',
    //         completed: false,
    //     },
    //     {
    //         id: 28,
    //         name: 'Duroc',
    //         completed: false,
    //     },
    //     {
    //         id: 29,
    //         name: 'Ovino',
    //         completed: false,
    //     },
    //     {
    //         id: 30,
    //         name: 'Caprino',
    //         completed: true,
    //     },
    //     {
    //         id: 31,
    //         name: 'Estiercol',
    //         completed: false,
    //     },
    //     {
    //         id: 32,
    //         name: 'Crias',
    //         completed: false,
    //     },
    //     {
    //         id: 33,
    //         name: 'Planctonicos',
    //         completed: false,
    //     },
    //     {
    //         id: 34,
    //         name: 'Microalgas',
    //         completed: false,
    //     },
    //     {
    //         id: 35,
    //         name: 'Artemia',
    //         completed: false,
    //     },
    //     {
    //         id: 36,
    //         name: 'Macroalgas',
    //         completed: true,
    //     },
    //     {
    //         id: 37,
    //         name: 'Moluscos',
    //         completed: false,
    //     },
    //     {
    //         id: 38,
    //         name: 'Crustaceos',
    //         completed: false,
    //     },
    //     {
    //         id: 39,
    //         name: 'Ingenieros Pesqueros',
    //         completed: true,
    //     },
    //     {
    //         id: 40,
    //         name: 'Ingenieron Zootecnistas',
    //         completed: false,
    //     },
    //     {
    //         id: 41,
    //         name: 'Ingenieros Acuicola',
    //         completed: false,
    //     },
    //     {
    //         id: 42,
    //         name: 'Biologos Marinos',
    //         completed: false,
    //     },
    //     {
    //         id: 43,
    //         name: 'Aves',
    //         completed: false,
    //     },
    //     {
    //         id: 44,
    //         name: 'Gallinas',
    //         completed: false,
    //     },
    //     {
    //         id: 45,
    //         name: 'Pavos',
    //         completed: false,
    //     },
    //     {
    //         id: 46,
    //         name: 'Pollos',
    //         completed: false,
    //     },
    //     {
    //         id: 47,
    //         name: 'Patos',
    //         completed: false,
    //     },
    //     {
    //         id: 48,
    //         name: 'Huevo',
    //         completed: false,
    //     },
    // ];

    interests: Interest[];
    selectInterest: Interest = {
        name: '',
        completed: false,
    };

    constructor(private http: HttpClient) {}

    getAllInterests(): Observable<Interest[]> {
        return this.http.get<Interest[]>(this.URL_API);
    }

    getInterest(id: number) {
        return this.http.get<Interest[]>(`${this.URL_API}${id}/`);
    }

    updateInterest(interest: Interest) {
        return this.http.put(`${this.URL_API}${interest.id}/`, interest);
    }
}
