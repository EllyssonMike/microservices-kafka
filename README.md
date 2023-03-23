# microservices-kafka
A basic microservice example using Kafka and NestJS

## Testing communication between microservices using Kafka and NestJS.

This application consists on creating a user on `users` microservice and alert `posts` microservice which a new user was created.
When the `posts` microservice receives the event, creates the author entity (using the concept of application domains)

### Changed to Confluent Kafka
* Changed default Apache Kafka image to Confluent Kafka image
* Added Confluent Control Panel

### Added Docker support
* Envolved all applications into an Docker container
* Configured NestJS applications as microservices
* Added kafkaClient options object