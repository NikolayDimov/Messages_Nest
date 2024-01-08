import { Injectable} from '@nestjs/common';
import { MessagesRepository } from './messages.repository';

@Injectable()
export class MessagesService {
    // messagesRepo: MessagesRepository;

    //     // DONT DO THIS ON REAL APPS
    // constructor() {
    //     // Service is creating its own dependencies
    //     this.messagesRepo = new MessagesRepository();
    // }

    // USE THIS ONE
    // constructor(messagesRepo: MessagesRepository) {
    //     this.messagesRepo = messagesRepo;
    // }

    // SAME AS
    constructor(public messagesRepo: MessagesRepository) {

    }

    findOne(id: string) {
        return this.messagesRepo.findOne(id);
    }

    findAll() {
        return this.messagesRepo.findAll();
    }

    create(content: string) {
        return this.messagesRepo.create(content);
    }
}
