import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('short_url')
export class ShortUrl {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  url_long: string;

  @Column({ nullable: true })
  url_short: string;

  @CreateDateColumn()
  created_at: string;

  @UpdateDateColumn()
  updated_at: string;
}
