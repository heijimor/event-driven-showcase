import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Reservation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  guestName: string;

  @Column()
  email: string;

  @Column()
  roomNumber: string;

  @Column({ type: "date" })
  checkInDate: Date;

  @Column({ type: "date" })
  checkOutDate: Date;

  @Column({ type: "decimal", precision: 10, scale: 2 })
  totalPrice: number;

  @Column({ default: "pending" })
  status: string;
}
