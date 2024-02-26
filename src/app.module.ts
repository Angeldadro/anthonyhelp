import { Module } from '@nestjs/common';
import { ContactsModule } from './contacts/contacts.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [ContactsModule, UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
