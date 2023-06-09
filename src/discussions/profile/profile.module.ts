import { Module } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { ProfileController } from './profile.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { NotificationsService } from './notifications/notifications.service';
import { PrismaClient } from '@prisma/client';
import { JwtModule, JwtService } from '@nestjs/jwt';

@Module({
  controllers: [ProfileController],
  providers: [ProfileService, NotificationsService, PrismaClient],
  imports: [PrismaModule ,JwtModule],
})
export class ProfileModule {}
