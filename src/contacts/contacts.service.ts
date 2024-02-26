import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';
import { PrismService } from 'src/prisma/prisma.service';


@Injectable()

export class ContactsService {

  constructor(private prisma: PrismService) { }

  async create(createContactDto: CreateContactDto) {
    try {
      await this.prisma.contacts.create({
        data: {...createContactDto}
      })
      return createContactDto
    }

    catch (error) {
      console.log(error)
      return new InternalServerErrorException("Error creating contact")
    }


  }

  async findAll() {
    try {
      const contacts = await this.prisma.contacts.findMany( {
        select: {
          first_name: true,
        }
      })
      if (!contacts) {
        return new NotFoundException("Contacts not found")
      }
      return contacts
    } catch (error) {
      console.log(error)
      return new InternalServerErrorException("Error finding contacts")
    }
  }

  async findContacts(id: string) {
    try {

      const contact =  await this.prisma.contacts.findMany({
        where: {
          id_user: id
        }
      })
      if (!contact) {
        return new NotFoundException("Contact not found")
      }
      return contact
    } catch (error) {
      console.log(error)
      return new InternalServerErrorException("Error finding contact")
    }
  }

}
