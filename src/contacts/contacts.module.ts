import { Module } from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { ContactsController } from './contacts.controller';
import { PrismService } from 'src/prisma/prisma.service';

@Module({
  controllers: [ContactsController],
  providers: [ContactsService, PrismService],
})
export class ContactsModule {}
