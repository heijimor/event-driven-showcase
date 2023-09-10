# Event Driven Architecture [EDA]

That's an small and simple project to apply EDA concepts in practice and help other developers to have a simple guidance to start easily.
All comments and improvements are really welcome!

## Microservices and Components

| Services           | Vendor   | Description |
| ------------------ | -------- | ----------- |
| Reservation        | Nodejs   |
| Payment            | Nodejs   |
| Ticket Issuance    | Nodejs   |
| Reservation DB     | Postgres |
| Payment DB         | Postgres |
| Ticket issuance DB | Postgres |

## Running Applications

```console
heijimor@eda:~$ docker-compose up -d
```

Markup :

- [x] Reservation minimal setup
- [ ] Application command and events
