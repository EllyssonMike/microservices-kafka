const kafkaClient = {
  clientId: process.env.AMQP_BROKER_CLIENT_ID || 'posts',
  brokers: [process.env.MS_KAFKA_BROKER || 'kafka:9092'],
};

export default kafkaClient;
