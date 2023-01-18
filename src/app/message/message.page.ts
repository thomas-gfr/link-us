import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IMessage } from '../shared/interfaces/message/message.model';

@Component({
  selector: 'app-message',
  templateUrl: 'message.page.html',
  styleUrls: ['message.page.scss']
})
export class MessagePage {
    messages: IMessage[] =[
        {
            id: 1,
            city: 'Rennes',
            notification: 1,
            picture: 'assets/pictures/christopher.svg',
            name: 'Christopher',
            message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl. Donec auctor, nisl eget ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl.'
        },
        {
            city: 'Paris',
            notification: 2,
            picture: 'https://randomuser.me/api/portraits',
            name: 'toot',
            message : 'Viens on va au ciné'
        },
        {
            city: 'Lyon',
            notification: 3,
            picture: 'https://randomuser.me/api/portraits',
            name: 'toto',
            message : 'Viens on va au ciné'
        },
        {
            city: 'Bordeaux',
            notification: 4,
            picture: 'https://randomuser.me/api/portraits',
            name: 'tata',
            message : 'Viens on va au foot'
        },
        {
            city: 'Lille',
            notification: 5,
            picture: 'https://randomuser.me/api/portraits',
            name: 'titi',
            message : 'Viens on va au foot'
        },
        {
            city: 'Marseille',
            notification: 6,
            picture: 'https://randomuser.me/api/portraits',
            name: 'tutu',
            message : 'Viens on va au foot'
        },
        {
            city: 'Toulouse',
            notification: 7,
            picture: 'https://randomuser.me/api/portraits',
            name: 'tete',
            message : 'Viens on va au foot'
        },
        {
            city: 'Nantes',
            notification: 8,
            picture: 'https://randomuser.me/api/portraits',
            name: 'titi',
            message : 'Viens on va au foot'
        }
    ]

    constructor(
        private router: Router,
    ) {}

    public openConversation(id: number) {
        this.router.navigate(['conversation/' + id]);
    }

}
